import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    container: {
        padding: 5,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center"
    },

    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default {
    primary: StyleSheet.create({
        container: {
            ...baseStyle.container,
            backgroundColor: "#0fa4fa",
        },
    
        title: {
            ...baseStyle.title,
            color: "white"
        }
    }),

    secondary: StyleSheet.create({
        container: {
            ...baseStyle.container,
            backgroundColor: "white",
            borderColor: "#0fa4fa",
            borderWidth: 2
        },
    
        title: {
            ...baseStyle.title,
            color: "#0fa4fa"
        }
    })
}