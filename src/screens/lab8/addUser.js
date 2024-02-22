import { Alert, Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setage] = useState(0);

    //hàm lưu 
    const SaveProduct = () => {
        //tạo đối tượng dữ liệu
        let objSV = { name: name, age: age };
        let url_api = 'https://65d5ae67f6967ba8e3bc3377.mockapi.io/user';
        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objSV)
        })
            .then((res) => {
                if (res.status == 201) // 201 là tạo đối tượng thành công
                    alert("Thêm thành công")
            }) // kiểm tra kết quả sever trả về 
            .catch((ex) => {
                console.log(ex);
            });
    }

    return (
        <View>
        <GestureHandlerRootView>
        <Text>AddUser</Text>
            <TextInput placeholder="Tên Sinh Viên" onChangeText={(txt) => { setName(txt) }} />
            <TextInput placeholder="Tuổi" onChangeText={(txt) => { setage(txt) }} />
            <Button title="Lưu" onPress={SaveProduct} />
        </GestureHandlerRootView>
        </View>
    );
};
export default AddUser;