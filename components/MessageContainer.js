import React, { useState , useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import UserSelector from './userSelector';

const MessageContainer = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const [user,setUser] = useState('Shiro');

  const handleSend = (text) => {
    const newMessage = { id: messages.length + 1, text: `${text} ral` };
    setMessages([...messages, newMessage]);
    // Vider le TextInput
    inputRef.current.clear();

  };

  return (
    <View style={styles.container}>
    <UserSelector setUser={setUser}/>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={{
    padding: 10,
    marginVertical: 5,
    backgroundColor: user==="Shiro"?'#3243D3':'#eee',
    borderRadius: 10,
  }}>
            <Text style={{
              color:user==="Shiro"?'#fff':'#333'
            }}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          placeholder="Type a message..."
          onSubmitEditing={(event) => {handleSend(event.nativeEvent.text)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30
  },
 
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default MessageContainer;
