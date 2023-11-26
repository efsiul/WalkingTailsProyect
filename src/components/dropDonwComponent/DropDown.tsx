import React,{
    useState,
    }                       from 'react'
import {
    Text,
    View,
    }                       from 'react-native'
import { Dropdown }         from 'react-native-element-dropdown';
import { IconOptionsApp }   from '../../style/IconOptionsApp';
import { DropDownStyle }    from '../../style/DropDownStyle';

const data = [
    { label: 'Solo ride', value: '1' },
    { label: 'Between 2 and 3 companions.', value: '2' },
    { label: 'Maximum 6 companions', value: '3' },
];

const MyDropDown = () => {
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[DropDownStyle.label, isFocus && { color: '#fff' }]}>
                    Select ride mode
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={DropDownStyle.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                {IconOptionsApp('pata')}
                </View>
                <Text style={DropDownStyle.textStyle }>Choose trip:</Text>
                <View style={{ maxWidth: 260, flex: 1 }}>
                    <Dropdown
                        style={[DropDownStyle.dropdown, isFocus && { borderColor: '#fff' }]}
                        placeholderStyle={DropDownStyle.placeholderStyle}
                        selectedTextStyle={DropDownStyle.selectedTextStyle}
                        inputSearchStyle={DropDownStyle.inputSearchStyle}
                        data={data}
                        search
                        maxHeight={200}
                        labelField="label"
                        valueField="value"
                        placeholder={isFocus ? '...' : 'Choose trip'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={(item: { value: React.SetStateAction<string | null>; }) => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>

            </View>
        </View>
    )
}

export default MyDropDown
