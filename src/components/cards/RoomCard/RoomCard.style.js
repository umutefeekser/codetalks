import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        height: deviceSize.height / 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray"
    },

    name: {
        fontSize: 28,
        fontWeight: "bold",
        color: "darkorange"
    },

    length: {
        fontSize: 20,
        color: "black"
    }
});