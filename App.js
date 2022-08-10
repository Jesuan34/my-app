import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import modal from './componentes/modal/Modal';
import AddItem from './componentes/addItem/AddItem'
import List from './componentes/lista'

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (text) => setTextItem(text);

  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, {id: Date.now(), value: textItem, completed: false}])
    setTextItem('')
  };
  

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  };
  

  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  };

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
  };

  return (
    <><View style={styles.container}>
      <modal
        modalVisible={modalVisible}
        onHandlerDeleteItem={onHandlerDeleteItem}
        itemSelected={itemSelected}
        onHandlerCompleteItem={onHandlerCompleteItem} 
        />
      <AddItem
        textItem={textItem}
        onHandlerAddItem={onHandlerAddItem}
        onHandlerChangeItem={onHandlerChangeItem} 
        />
      <List
        itemList={itemList}
        onHandlerModal={onHandlerModal} 
        />
    </View>
    <Text>Hola, Coder!</Text>
    <StatusBar style="auto" /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

