import { StyleSheet, Image, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
export default function Profile({ route }) {
    const { name, lname, email } = route.params;
    return (
        <View style={styles.mainContainer}>
            <Image style={{ width: 100, height: 100 }} source={require('../images/user1.png')} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name} {lname}</Text>
            <Text style={{ marginTop: 8, color: 'grey' }}>{email}</Text>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                margin: 10,
                width: '90%',

            }}>
                <View style={styles.horizontalLine}></View>

                <View style={styles.cards}>
                    <Text style={{ fontSize: 16, }}>First Name: {name}</Text>

                    <FontAwesome name='pencil-square-o' size={20} />

                </View>

                <View style={styles.horizontalLine}></View>

                <View style={styles.cards}>
                    <Text style={{ fontSize: 16, }}>Last Name: {lname}</Text>

                    <FontAwesome name='pencil-square-o' size={20} />

                </View>                
                <View style={styles.horizontalLine}></View>

                <View style={styles.cards}>
                    <Text style={{ fontSize: 16
                        , }}>Email: {email}</Text>

                    <FontAwesome name='pencil-square-o' size={20} />

                </View>
                <View style={styles.horizontalLine}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        alignItems: 'center'
    },
    horizontalLine: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        height: 10,
        width: '100%'
    },
    cards: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        padding:10
    }


});