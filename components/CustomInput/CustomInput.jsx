import {View, TextInput, Button, StyleSheet} from 'react-native'

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandlerEvent,
        addItemToListEvent
    }
) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <Button
                title="Add"
                color="#9F7E69"
                onPress={addItemToListEvent}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 80,
        marginTop: 40
      },
      textInput: {
        flexDirection: 'row',
        width: 280,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      },
       
})