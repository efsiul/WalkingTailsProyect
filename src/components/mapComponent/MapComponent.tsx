import { 
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    }                           from "react-native";
import MapView,{
    LatLng,
    Marker,
    PROVIDER_GOOGLE,
    }                           from "react-native-maps";
import {
    GooglePlaceDetail,
    GooglePlacesAutocomplete,
    }                           from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY }       from '../../API_KEY/enviroments';
import { useRef, useState }     from "react";
import MapViewDirections        from "react-native-maps-directions";

const { width, height } = Dimensions.get('window');

type MapComponentProps = {
    route: LatLng[]; // Define el tipo de la propiedad route
};

const ASPECT_RATIO      = width / height;
const LATITUDE_DELTA    = 0.02;
const LONGITUDE_DELTA   = LATITUDE_DELTA * ASPECT_RATIO;

type InputAutocompleteProps = {
    label:              string;
    placeholder?:       string;
    onPlaceSelected:    (details: GooglePlaceDetail | null) => void;
};



function InputAutocomplete({
    label,
    placeholder,
    onPlaceSelected,
    }: InputAutocompleteProps) {
    return (
        <>
            <Text>{label}</Text>
            <GooglePlacesAutocomplete
                styles      = {{ textInput: styles.input }}
                placeholder = {placeholder || ""}
                fetchDetails
                onPress     = {(data, details = null) => {
                                onPlaceSelected(details);
                            }}
                query       ={{
                                key: GOOGLE_API_KEY,
                                language: "pt-BR",
                            }}
            />
        </>
    );
}

export default function App({ route }: MapComponentProps) {
    const [origin, setOrigin]                                   = useState<LatLng | null>();
    const [destination, setDestination]                         = useState<LatLng | null>();
    const [showDirections, setShowDirections]                   = useState(false);
    const [distance, setDistance]                               = useState(0);
    const [duration, setDuration]                               = useState(0);
    const [searchContainerVisible, setSearchContainerVisible]   = useState(true);
    const mapRef                                                = useRef<MapView>(null);

    const moveTo = async (position: LatLng) => {
        const camera = await mapRef.current?.getCamera();
        if (camera) {
            mapRef.current?.animateCamera(camera, { duration: 1000 });
        }
    };

    const edgePaddingValue = 70;

    const edgePadding = {
        top:    edgePaddingValue,
        right:  edgePaddingValue,
        bottom: edgePaddingValue,
        left:   edgePaddingValue,
    };

    const traceRouteOnReady = (args: any) => {
        if (args) {
            setDistance(args.distance);
            setDuration(args.duration);
        }
    };

    const traceRoute = () => {
        if (origin && destination) {
            setShowDirections(true);
            mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
        }
    };

    const onPlaceSelected = (
        details: GooglePlaceDetail | null,
        flag: "origin" | "destination"
    ) => {
        const set = flag === "origin" ? setOrigin : setDestination;
        const position = {
            latitude:   details?.geometry.location.lat || 0,
            longitude:  details?.geometry.location.lng || 0,
        };
        set(position);
        moveTo(position);
    };

    const toggleSearchContainer = () => {
        setSearchContainerVisible(!searchContainerVisible);
    };

    return (
        <View style={styles.container}>
            <MapView
                ref                 = {mapRef}
                style               = {styles.map}
                provider            = {PROVIDER_GOOGLE}
                initialRegion       = {{
                                        latitude: 6.267898,
                                        longitude: -75.566848,
                                        longitudeDelta: LATITUDE_DELTA,
                                        latitudeDelta: LONGITUDE_DELTA,
                                    }}
                zoomControlEnabled
                zoomEnabled
            >
                {origin && <Marker coordinate={origin} image={require('../../assets/dog.png')} />}
                {destination && <Marker coordinate={destination} />}
                {showDirections && origin && destination && (
                    <MapViewDirections
                        origin          = {origin}
                        destination     = {destination}
                        apikey          = {GOOGLE_API_KEY}
                        strokeColor     = "#9B2226"
                        strokeWidth     = {4}
                        onReady         = {traceRouteOnReady}
                    />
                )}
            </MapView>

            {searchContainerVisible && (
                <View style={styles.searchContainer}>
                    <InputAutocomplete
                        label           = "Origin"
                        onPlaceSelected = {(details) => {
                                            onPlaceSelected(details, "origin");
                                        }}
                    />
                    <InputAutocomplete
                        label           = "Destination"
                        onPlaceSelected = {(details) => {
                                            onPlaceSelected(details, "destination");
                                        }}
                    />

                    <TouchableOpacity 
                        style   = {styles.button} 
                        onPress = {traceRoute}
                    >
                        <Text style={styles.buttonText}>Trace route</Text>
                    </TouchableOpacity>

                    {distance !== null && duration !== null && duration > 0 && (
                        <View>
                            <Text>Distance: {distance.toFixed(2)} km</Text>
                            <Text>Duration: {Math.ceil(duration)} min</Text>
                        </View>
                    )}
                </View>
            )}

            <TouchableOpacity
                style   = {[styles.button, styles.toggleButton]}
                onPress = {toggleSearchContainer}
            >
                <Text style = {styles.buttonText}>
                    {searchContainerVisible ? "Hide" : "Show"} search
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        backgroundColor : '#fff',
        alignItems      : 'center',
        justifyContent  : 'center',
    },
    map: {
        width           : Dimensions.get('window').width,
        height          : Dimensions.get('window').height,
    },
    searchContainer: {
        position        : 'absolute',
        width           : '90%',
        backgroundColor : 'white',
        shadowColor     : 'black',
        shadowOffset    : { width: 2, height: 2 },
        shadowOpacity   : 0.5,
        shadowRadius    : 4,
        elevation       : 4,
        padding         : 8,
        borderRadius    : 8,
        top             : 15,
    },
    input: {
        borderColor     : '#888',
        borderWidth     : 1,
    },
    button: {
        backgroundColor : "#bbb",
        padding         : 12,
        marginTop       : 16,
        borderRadius    : 4,
    },
    buttonText: {
        textAlign       : "center",
        fontSize        : 10,
        color           : '#001219'
    },
    toggleButton: {
        position        : 'absolute',
        top             : 2,
        right           : 25,
        backgroundColor : "#aaa",
        padding         : 1.5,
        borderRadius    : 4,
    },
});
