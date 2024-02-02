import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';

const MyFlatList = () => {
  // Dữ liệu mẫu
  const data = [
    { Name: 'Nguyễn Đức Tín', Email: 'nguyenductin369@gmail.com', positin: 'Data Entry Clerk', photo: '../../../assets/tin.jpg' },
    { Name: 'Nguyễn Đức Tín', Email: 'nguyenductin365@gmail.com', positin: 'Data Entry Clerk', photo: '../../../assets/tin.jpg' },
    { Name: 'Nguyễn Đức Tín', Email: 'nguyenductin367@gmail.com', positin: 'Data Entry Clerk', photo: '../../../assets/tin.jpg' },
    // ...Thêm dữ liệu khác nếu cần
  ];

  // Hàm render mỗi phần tử trong danh sách
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Image
            source={{uri: item.photo}}
            style={{width: 50, height: 50, borderRadius: 10,}}
        />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.Email}
    />
  );
};

export default MyFlatList;