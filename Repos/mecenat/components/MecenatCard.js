import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import * as Animatable from 'react-native-animatable'
import {useFonts} from "expo-font";
import {useState} from "react";
import {Asset as Font} from "expo-asset";

const MecenatCard = () => {

    const [numberGroup1, setNumberGroup1] = useState('9752')
    const [numberGroup2, setNumberGroup2] = useState('8457')
    const [numberGroup3, setNumberGroup3] = useState('2544')
    const [numberGroup4, setNumberGroup4] = useState('1265')

    let [fontsLoaded] = useFonts({
        'Lobster': require('../assets/fonts/SystemaEncephale.ttf'),
        'Boko': require('../assets/fonts/Bokonique.otf'),
    });


    const fadeIn = {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    };

    if (fontsLoaded) {

        return (

            <>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <ImageBackground style={styles.mecenatCard} imageStyle={{resizeMode: 'contain'}}
                                         source={require('../assets/blankmecenat.png')}></ImageBackground>

                        <Text style={styles.studentId}>0001 2345</Text>
                        <Text style={styles.UniversityText}>Svenskt Universitet/Högskola</Text>
                        <Text style={styles.semesterText}>VT 23</Text>

                        <Text style={styles.validText}>2023-03-31</Text>

                        <View style={styles.textWrapper}>
                            <Text style={styles.text1}>{numberGroup1}<Text style={{letterSpacing: 4}}>&#xFEFF;&#xFEFF;</Text>{numberGroup2}<Text style={{letterSpacing: 4}}>&#xFEFF;&#xFEFF;</Text>{numberGroup3}<Text style={{letterSpacing: 4}}>&#xFEFF;&#xFEFF;</Text>{numberGroup4}</Text>
                            <Text style={styles.text2}>Cabraja</Text>
                            <Text style={styles.text2}>Andreas</Text>
                            <Text style={styles.text3}>1994-03-10</Text>
                        </View>


                        <Animatable.View animation={fadeIn}
                                         easing="ease-in-out"
                                         iterationCount="infinite"
                                         direction="alternate"
                                         style={[styles.circleWrapper]}>
                            <View style={[styles.circle2]}></View>
                            <View style={[styles.circle1]}></View>
                        </Animatable.View>
                    </View>
                </View>
                <Image style={{width: 60, height: 60, backgroundColor: 'red', position: 'absolute', right: 20}}
                       source={require('../assets/cancel.png')}></Image>
            </>
        )
    }


}
export default MecenatCard

const styles = StyleSheet.create({
    container: {
        width: '58%',
        height: '75%',
        alignItems: 'center',
        alignContent: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    mecenatCard: {
        resizeMode: "cover",
        height: '100%',
        width: '100%',

    },

    circleWrapper: {
        display: "flex",
        position: "absolute",
        right: 0,
        height: 135,
        width: 125,
        borderRadius: 150,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle1: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#de7b2a'
    },
    circle2: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#de7b2a'
    },

    wrapper: {
        width: '100%',
    },
    textWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 32,
        left: 30,
    },
    text1: {
        fontFamily: 'Lobster',
        fontSize: 24,
    },
    text2: {
        fontFamily: 'Boko',
        fontSize: 16,
    },
    text3: {
        position: "relative",
        fontFamily: 'Lobster',
        fontSize: 16,
        bottom: -4
    },
    studentId: {
        position: 'absolute',
        right: 6,
        top: 11.5,
        fontSize: 9,
        fontWeight: '500'
    },
    UniversityText: {
        position: 'absolute',
        right: 6,
        top: 24,
        fontSize: 9,
        fontWeight: '500'
    },
    semesterText: {
        position: 'absolute',
        right: 6,
        top: 38,
        fontSize: 9,
        fontWeight: '500'
    },
    validText: {
        position: 'absolute',
        right: 14,
        top: 128,
        fontWeight: '400',
        fontSize: 18
    }
});