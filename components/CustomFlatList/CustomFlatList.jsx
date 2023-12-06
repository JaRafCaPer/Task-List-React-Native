import { View, Text, Modal,StyleSheet,Button, FlatList } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const onSelectItemHandler = (id) => {
  setModalVisible(!modalVisible)
  setItemSelectedToDelete(itemList.find((item) => item.id === id))
}
const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <BouncyCheckbox
        size={15}
        fillColor="green"
        unfillColor="red"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        />
      <Button title="x" onPress={() => onSelectItemHandler(item.id)} />
    </View>
  )

const CustomFlatList = (
    { 
        data,
        renderItem,
        keyExtractor,
    }
) => {
    return (
      <FlatList
      data={itemList}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
    />
    )
}

export default CustomFlatList
