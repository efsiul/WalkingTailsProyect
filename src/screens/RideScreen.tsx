import React,{
    useState,
    }                       from 'react'
import {
    Text,
    View,
    }                       from 'react-native'
import { RideStyles }       from '../style/RideStyle'
import DateTime             from '../components/dateTimePicker/DateTimePicker';
import MyDropDown           from '../components/dropDonwComponent/DropDown';
import { IconOptionsApp }   from '../style/IconOptionsApp';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DropDownStyle }    from '../style/DropDownStyle';
import CustomRatingBar      from '../components/customRatingBar/CustomRatingBar';
import DogWalkerProfile     from '../components/imagePicker/DogWalkerprofile';
import MapComponent         from '../components/mapComponent/MapComponent';
import { useAppState }      from '../context/AppStateContext';
import { LatLng }           from 'react-native-maps';

interface AppProps {
    date: Date;
    setDate: (selectedDate: Date) => void;
    mode: 'date' | 'time';
}

export default function RideScreen({ }) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<Date>(new Date());
    const { setRoute, selectedRoute } = useAppState(); // Accede al estado global

    const handleDateChange = (selectedDate: Date) => {
        setSelectedDate(selectedDate);
    };

    const handleTimeChange = (selectedTime: Date) => {
        setSelectedTime(selectedTime);
    };

    return (
        <View style={RideStyles.container}>

            <View style={RideStyles.topContainer}>
                <MapComponent route={selectedRoute as LatLng[]} />
            </View>

            <View style={RideStyles.middleContainer}>

                <DateTime />

                <MyDropDown />
                
                <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity
                    style={DropDownStyle.buttonModifier}
                >
                    <Text style={{color:'white'}}>Modify ride</Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style={RideStyles.bottomContainer}>
                <DogWalkerProfile name={undefined} profileImage={undefined} rating={undefined} />
                <View style={RideStyles.icon}>
                {IconOptionsApp('persona')}
                </View>
                <CustomRatingBar />
            </View>

        </View>
    )
}
