import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListUser from "./ListUser";
import AddUser from "./addUser";

const Crud = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListUser"  conponent={ListUser}/>
                <Stack.Screen name="AddUser"  conponent={AddUser}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Crud;
