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
        height: deviceSize.height / 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    text: {
        fontSize: 18,
        paddingHorizontal: 5,
        textAlign: "right"
    },

    input_container: {
        flex: 1,
        backgroundColor: "#eeeeee",
        padding: 10,
        textAlignVertical: "top",
        borderRadius: 7
    }
});