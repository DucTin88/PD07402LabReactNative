import { View } from "react-native";
import { Text } from "react-native-reanimated/lib/typescript/Animated";

const Home = () => {
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'#006600', fontSize: 40}}>HomeScreen</Text>
        </View>
    );
};