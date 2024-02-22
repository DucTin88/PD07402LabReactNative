import { ActivityIndicator, Button, Text, View } from "react-native";
import React, { useState } from 'react'
import st from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ListUser = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dssv, setdssv] = useState([]);

    // hàm load sinh viên
    const getListPro = async () => {
        let url_api = 'https://65d5ae67f6967ba8e3bc3377.mockapi.io/user';
        try {
            const response = await fetch(url_api); // load dữ liệu
            const json = await response.json(); // truyền dữ liệu trả về thành dạng json

            setdssv(json); // đỗ dữ liệu vào state

        } catch (error) {
            console.error(error);
        }
        finally {
            // Kết thúc quá trình load dữ liệu, kể cả xảy ra lỗi cũng gọi vào bên trong khối lệnh này
            setisLoading(false); // trạng thái ko còn load nữa
        }
    }

    const renderProduct = ({ item }) => {

        // chức năng xóa
        const xoaSV = () =>{
            // link xóa
            let url_api_del = 'https://65d5ae67f6967ba8e3bc3377.mockapi.io/user/' + item.id;
            fetch(url_api_del, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
               })
                .then((res) => {
                    if (res.status == 200) // 200 là tạo đối tượng thành công
                        alert("Đã xóa");
                        getListPro();
                }) // kiểm tra kết quả sever trả về 
                .catch((ex) => {
                    console.log(ex);
                });
        }
        return (
            <View style={st.itemPro}>
                <Text>Tên sinh viên: {item.name} -- Tuổi: {item.age} </Text>
                <Button title="Xóa" onPress={xoaSV}/>
            </View>
        );
    }
    //
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // cập nhật giao diện ở đây
            getListPro();
        });

        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={st.khungDSSV}>
            <GestureHandlerRootView>
                <Button
                    title="Thêm Sinh Viên"
                    onPress={() => { props.navigation.navigate('AddUser') }} />
                <Text >ListUser</Text>

                {
                    (isLoading) ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            data={dssv}
                            // phân biệt các dòng với nhau
                            keyExtractor={(item_sv) => { return item_sv.id }}
                            renderItem={renderProduct} />
                    )
                }
            </GestureHandlerRootView>

        </View>
    );
};
export default ListUser;