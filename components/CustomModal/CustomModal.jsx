import { View, Text, Modal,StyleSheet,Button } from 'react-native'

const CustomModal = (
    { 
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp} style={styles.modalBodyContainer}>
            <View style={styles.modalMessageContainer}>
                <Text>Do you want to delete the task </Text>
                <Text>{itemSelectedProp.value}??</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="No! please go back." color="#9F7E69" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
                <Button title="Delete, please." color="#ef233c" onPress={onDeleteItemHandlerEvent} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
  
    modalMessageContainer: {
        marginTop: 50,
        alignItems: "center"
      },
      modalButtonContainer:{
        flexDirection:"row",
        justifyContent: "space-around",
        paddingTop: 40
      }
})