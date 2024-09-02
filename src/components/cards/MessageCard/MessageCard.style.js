import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#0fa4fa",
        borderRadius: 10,
        elevation: 5
    },
    
    top_container: {
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: "#fcfeff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },

    user_container: {
        flexDirection: "row",
        alignItems: "center"
    },

    username: {
        fontSize: 22,
        fontWeight: "500",
        marginLeft: 5
    },

    date: {
        fontSize: 16,
        fontWeight: "500"
    },

    inner_container: {
        padding: 10
    },

    text: {
        color: "white",
        fontSize: 18
    },

    bottom_container: {
        padding: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',
    },

    button: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 50,
        marginLeft: 10
    }
    
})