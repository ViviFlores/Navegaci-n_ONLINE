import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    contentButtons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#131133',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    contentAvatarMenu: {
        //backgroundColor: 'red'
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    contentOptionMenu: {
        margin: 30,
        gap:12
    },
    textMenu: {
        fontSize: 17,
    }

});