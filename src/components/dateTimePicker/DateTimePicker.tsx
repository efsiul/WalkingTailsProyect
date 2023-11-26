import React, { useState }      from 'react';
import {
    StatusBar,
    Platform,
    Text,
    View,
    }                           from 'react-native';
import DateTimePicker           from '@react-native-community/datetimepicker';
import { DateTimePickerStyle }  from '../../style/DateTimePickerStyle';
import { TouchableOpacity }     from 'react-native-gesture-handler';
import { IconOptionsApp }       from '../../style/IconOptionsApp';

export default function DateTime() {
    const [date, setDate]           = useState(new Date());
    const [time, setTime]           = useState(new Date());
    const [showDate, setShowDate]   = useState(false);
    const [showTime, setShowTime]   = useState(false);
    const [ampm, setAmPm]           = useState("AM");

    const onChangeDate = (event: any, selectedDate: Date | undefined) => {
        setShowDate(Platform.OS === 'ios');
        setDate(selectedDate || date);
    };

    const onChangeTime = (event: any, selectedTime: Date | undefined) => {
        setShowTime(Platform.OS === 'ios');
        setTime(selectedTime || time);

        if (selectedTime) {
            setAmPm(selectedTime.getHours() >= 12 ? "PM":"AM")
        }
    };

    return (
        <View style={DateTimePickerStyle.container}>
            <View style={DateTimePickerStyle.buttonContainer}>
                {IconOptionsApp('pata')}
                <TouchableOpacity
                    onPress={() => setShowDate(true)}
                >
                    <Text style={DateTimePickerStyle.dateTimeText}>Date: </Text>
                </TouchableOpacity>
                {showDate && (
                    <DateTimePicker
                        testID  = "Date"
                        value   = {date}
                        mode    = "date"
                        is24Hour= {true}
                        display = "default"
                        onChange= {onChangeDate}
                    />
                )}
                <Text style={DateTimePickerStyle.dateTimeText}>
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                </Text>
            </View>

            <View style={DateTimePickerStyle.buttonContainer}>
                {IconOptionsApp('pata')}
                <TouchableOpacity
                    onPress={() => setShowTime(true)}
                >
                    <Text style={DateTimePickerStyle.dateTimeText}>Schedule: </Text>
                </TouchableOpacity>
                {showTime && (
                    <DateTimePicker
                        testID  = "timePicker"
                        value   = {time}
                        mode    = "time"
                        is24Hour= {false}
                        display = "default"
                        onChange= {onChangeTime}
                    />
                )}
                <Text style={DateTimePickerStyle.dateTimeText}>
                    {time.getHours()}:{time.getMinutes()}{ampm}
                </Text>
            </View>
            <StatusBar />
        </View >
    );
}


