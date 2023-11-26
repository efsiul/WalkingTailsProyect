import React, { useState }          from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity 
    }                               from 'react-native'
import { CustomRatingBarStyles }    from '../../style/CustomRatingBar'
import { SafeAreaView }             from 'react-native-safe-area-context'


const CustomRatingBar = () => {

    const [defaultRating, setDefaultRating] = useState(2)
    const [maxRating, setMaxRating]         = useState([1, 2, 3, 4, 5])

    const startImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const startImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const handleRating = (item: React.SetStateAction<number>) => {
        setDefaultRating(item);
    }

    const BarRating = () => {
        return (
            <View style={CustomRatingBarStyles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                style={CustomRatingBarStyles.startImgStyle}
                                    source={
                                        item <= defaultRating ? { uri: startImgFilled }
                                            : { uri: startImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={CustomRatingBarStyles.container}>
            <Text style={CustomRatingBarStyles.textQualification}>Qualification</Text>
            <BarRating/>

            <View style={CustomRatingBarStyles.containerButtons}>

            <TouchableOpacity style={CustomRatingBarStyles.comButtons}>
                <Text style={CustomRatingBarStyles.textButtons}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CustomRatingBarStyles.comButtons}>
                <Text style={CustomRatingBarStyles.textButtons}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CustomRatingBarStyles.comButtons}>
                <Text style={CustomRatingBarStyles.textButtons}>change dog walker</Text>
            </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default CustomRatingBar
