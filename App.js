import Router from './src/Router'
import FlashMessage from "react-native-flash-message";

export default () => {
    return(
        <>
            <Router />
            <FlashMessage position="top" style={{paddingTop: 25}} />
        </>
    )
}