import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import MecenatCard from "./components/MecenatCard";


export default function App() {



    const tst = 1
    return (
        <View style={styles.container}>
            {tst === 1 &&
                <>
                <MecenatCard style={styles.mecenatCard}></MecenatCard>
                </>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mecenatCard: {
        resizeMode: "contain",
        width: '20%'
    }
});
