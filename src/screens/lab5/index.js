import React from "react";
import { Text, ImageBackground, StatusBar, View, Button, TouchableOpacity } from "react-native";
import Styles from './styles'
import { styles } from "../lab5/styles";

const Lab5 = () => {
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
                source={require('../../assets/lab5.jpg')}
                style={styles.image}
            >
            <View style={styles.details}>
                <Text style={styles.text}>
                    <Text  style={styles.firtLine}>Discover{'\n'}</Text>
                    <Text style={styles.secondLine}>world with us {'\n'}</Text>
                    <Text style={styles.miniText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit{'\n'}</Text>
                </Text>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get stated</Text>
                    </TouchableOpacity>
            </View>
                
            </ImageBackground>
        </View>
    )
}
export default Lab5;