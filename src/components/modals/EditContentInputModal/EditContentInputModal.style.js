import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0
    },
    
    container: {
        backgroundColor: "white",
        padding: 15,
        marginHorizontal: 10,
        height: deviceSize.height / 3,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    input_container: {
        flex: 1,
        backgroundColor: "#eeeeee",
        padding: 10,
        textAlignVertical: "top",
        borderRadius: 7
    }
});