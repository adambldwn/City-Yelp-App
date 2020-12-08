import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Button, Linking } from 'react-native';

const RestaurantDetail = (props) => {

    const { selectedRestaurant } = props.route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>

                <Text style={styles.name}>{selectedRestaurant.name}</Text>

                <Image
                    style={styles.image}
                    source={{ uri: selectedRestaurant.image_url }}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Go for reserve"
                        onPress={() => Linking.openURL(selectedRestaurant.mobile_reserve_url)}
                    />
                </View>



            </View>

        </SafeAreaView>
    )
}

export { RestaurantDetail }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    name: {
        fontWeight: '300',
        fontSize: 30
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: Dimensions.get('window').width / 3,
        alignSelf: 'center',
        padding:5,
        margin:10,
        borderRadius:10
    }
})