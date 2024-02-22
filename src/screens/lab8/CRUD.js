import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListUser from "./ListUser";
import AddUser from "./addUser";

const Crud = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ListUser'>
                <Stack.Screen name="ListUser"  component={ListUser} options={{title:'Danh sách sinh viên'}}/>
                <Stack.Screen name="AddUser"  component={AddUser} options={{title:'Thêm sinh viên'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Crud;
