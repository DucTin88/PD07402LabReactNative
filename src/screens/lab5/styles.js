import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    details: {
        marginLeft: 30,
        marginRight: 30,
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center'

    },
    text:{
    },
    firtLine:{
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 50,
        color: 'white',
        paddingBottom:20

    },
    secondLine:{
        marginLeft: 20,
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 50,
        color: 'white',
        paddingBottom:20

    },
    miniText:{
        fontSize: 16,
        color: 'white',
        fontWeight: '400'
    },
    button:{
        paddingTop: 10,
        width: 100, height: 50,
        backgroundColor: 'white',
        borderRadius: 10,   
        alignItems: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 16,
        marginBottom: 12,
        fontWeight: '400',
        color:'black'
    }

});