import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native'
import { useState } from 'react'
import CustomModal from './components/CustomModal/CustomModal'
import CustomInput from './components/CustomInput/CustomInput'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
    setTextItem('')
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setModalVisible(!modalVisible)
  }

  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <BouncyCheckbox
        size={15}
        fillColor="green"
        unfillColor="#FFEEE2"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        />
      <Button color={"#9F7E69"} title="x" onPress={() => onSelectItemHandler(item.id)} />
    </View>
  )


  return (
    <>
      <View style={styles.container}>
        <CustomInput
          placeholderProp="Add task"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <CustomModal
        animationTypeProp="fade"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEEE2',
    padding: 30
  },

  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "#F7FFE0",
    borderRadius: 20,
  },
});
