import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const UserSelector = ({setUser}) => {
  const [selectedUser, setSelectedUser] = useState('User 1');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setUser(user);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 ,borderRadius:"20px",boxShadow:"0px 1px 5px #333333",marginBottom:10}}>
      <Text style={{ fontSize: 10 }}>Select User:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleUserSelect('Shiro')} style={{ backgroundColor: selectedUser === 'Shiro' ? '#2F1257' : '#333333', borderRadius: 10, padding: 5, marginRight: 10 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Shiro (me)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleUserSelect('Mahery')} style={{ backgroundColor: selectedUser === 'Mahery' ? '#2F1257' : '#333333', borderRadius: 10, padding: 5 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Mahery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserSelector;
