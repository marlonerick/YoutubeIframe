import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 210;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002',
        paddingTop: SCREEN_SPACE
    },
    player: {
        width: '100%',
        height: VIDEO_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 48,

    },
    searchBar: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#FFF",
        borderRadius: 4,
        color: '#EEE'
    },

})