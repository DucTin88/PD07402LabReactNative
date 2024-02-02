import React from "react";
import { useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const lab3 = () =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View>
            <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nhập họ và tên"
            style={styles.tipStyle}
            />
            <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            style={styles.tipStyle}
            />
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            style={styles.tipStyle}
            />
            <View style={styles.container}>
            {/* line 1 */}
            <Text style={styles.baseText}>
                Em vào đời bằng {''}
                <Text style={{fontWeight:'bold', color:'red'}}>vang đỏ </Text>
                anh vào đời bằng {''}
                <Text style={{fontWeight:'bold', color:'yellow'}}>nước trà</Text>
            </Text>

            {/* line 2 */}
            <Text style={styles.baseText}>
                Bằng cơn mưa thơm {''}
                <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}> mùi đất{' '}</Text>
                và{' '}
                <Text style={{fontSize: 10}}>
                bằng hoa dại mọc trước nhà
                </Text>
            </Text>

            {/* line 3 */}
            <Text style={[   
                styles.baseText,
                styles.italicText,
                styles.boldText,
                styles.Textsize20,
                styles.colorgray
                ]}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>

            {/* line 4 */}
            <Text style={styles.baseText}>
                Lý trí em là {''}
                <Text
                style={{
                    textDecorationLine:'underline',
                    letterSpacing: 20,
                    fontWeight: 'bold',
                }}>
                {' '}
                công cụ {''}</Text>
                còn trái tim anh là 
                <Text
                style={{
                    textDecorationLine:'underline',
                    letterSpacing: 20,
                    fontWeight: 'bold',
                }}>
                {''}
                động cơ {''}</Text>
            </Text>
            {/* line 5 */}
            <Text 
            style={{
                fontFamily: 'Cochin',
                color:'white',
                fontSize: 16,
                marginTop: 20,
                textAlign:'right'
            }}>Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình</Text>
        {/* line 6 */}
        <Text 
            style={{
                fontFamily: 'Cochin',
                color:'white',
                fontSize: 16,
                marginTop: 20,
                textAlign:'center',
                fontWeight:'bold',
                color:'orange'
            }}>Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình</Text>
        {/* line 7 */}
        <Text
        style={{
            fontFamily: 'Cochin',
            color:'white',
            fontSize: 16,
            marginTop: 20,
            fontWeight:'bold',
            color:'black'
        }}>
        Em vào đời bằng <Text style={{color:'white'}}>mây trắng</Text>
        em vào đời bằng <Text style={{color:'yellow'}}>nắng xanh</Text>
        </Text>
        
        {/* line 8 */}
        <Text style={{
            fontFamily: 'Cochin',
            color:'white',
            fontSize: 16,
            marginTop: 20,
            fontWeight:'bold',
            color:'black'
        }}>
        em vào đời bằng <Text style={{color:'yellow'}}> đại lộ </Text>
        và con đường đó giờ <Text style={{color:'white'}}> vắng anh </Text>
        </Text>
        </View>
        </View>
    )
} 

export default lab3;