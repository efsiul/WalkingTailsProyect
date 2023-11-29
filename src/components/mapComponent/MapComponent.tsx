import React, { useRef, useState } from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../API_KEY/enviroments";
import { MapStyles } from "../../style/MapStyle";

const { width, height } = Dimensions.get("window");

type MapComponentProps = {
    route: LatLng[]; // Define el tipo de la propiedad route
};

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type InputAutocompleteProps = {
    label: string;
    placeholder?: string;
    onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({ label, placeholder, onPlaceSelected }: InputAutocompleteProps) {
    return (
        <>
            <Text>{label}</Text>
            <GooglePlacesAutocomplete
                styles={{ textInput: MapStyles.input }}
                placeholder={placeholder || ""}
                fetchDetails
                onPress={(data, details = null) => {
                    onPlaceSelected(details);
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: "pt-BR",
                }}
            />
        </>
    );
}

export default function App({ route }: MapComponentProps) {
    const [origin, setOrigin] = useState<LatLng | null>();
    const [destination, setDestination] = useState<LatLng | null>();
    const [showDirections, setShowDirections] = useState(false);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [searchContainerVisible, setSearchContainerVisible] = useState(true);
    const mapRef = useRef<MapView>(null);

    const moveTo = async (position: LatLng) => {
        const camera = await mapRef.current?.getCamera();
        if (camera) {
            mapRef.current?.animateCamera(camera, { duration: 1000 });
        }
    };

    const edgePaddingValue = 70;

    const edgePadding = {
        top: edgePaddingValue,
        right: edgePaddingValue,
        bottom: edgePaddingValue,
        left: edgePaddingValue,
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

    const onPlaceSelected = (details: GooglePlaceDetail | null, flag: "origin" | "destination") => {
        const set = flag === "origin" ? setOrigin : setDestination;
        const position = {
            latitude: details?.geometry.location.lat || 0,
            longitude: details?.geometry.location.lng || 0,
        };
        set(position);
        moveTo(position);
    };

    const toggleSearchContainer = () => {
        setSearchContainerVisible(!searchContainerVisible);
    };

    return (
        <View style={MapStyles.container}>
            <View style={MapStyles.mapContainer}>
                <MapView
                    ref={mapRef}
                    style={MapStyles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 6.267898,
                        longitude: -75.566848,
                        longitudeDelta: LATITUDE_DELTA,
                        latitudeDelta: LONGITUDE_DELTA,
                    }}
                    zoomControlEnabled // Habilita los controles de zoom predeterminados
                >
                    {origin && <Marker coordinate={origin} image={require("../../assets/dog.png")} />}
                    {destination && <Marker coordinate={destination} />}
                    {showDirections && origin && destination && (
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_API_KEY}
                            strokeColor="#9B2226"
                            strokeWidth={4}
                            onReady={traceRouteOnReady}
                        />
                    )}
                </MapView>
            </View>

            {searchContainerVisible && (
                <View style={MapStyles.searchContainer}>
                    <InputAutocomplete
                        label="Origin"
                        onPlaceSelected={(details) => {
                            onPlaceSelected(details, "origin");
                        }}
                    />
                    <InputAutocomplete
                        label="Destination"
                        onPlaceSelected={(details) => {
                            onPlaceSelected(details, "destination");
                        }}
                    />

                    <TouchableOpacity style={MapStyles.button} onPress={traceRoute}>
                        <Text style={MapStyles.buttonText}>Trace route</Text>
                    </TouchableOpacity>

                    {distance !== null && duration !== null && duration > 0 && (
                        <View>
                            <Text>Distance: {distance.toFixed(2)} km</Text>
                            <Text>Duration: {Math.ceil(duration)} min</Text>
                        </View>
                    )}
                </View>
            )}

            <TouchableOpacity style={[MapStyles.button, MapStyles.toggleButton]} onPress={toggleSearchContainer}>
                <Text style={MapStyles.buttonText}>{searchContainerVisible ? "Hide" : "Show"} search</Text>
            </TouchableOpacity>
        </View>
    );
}