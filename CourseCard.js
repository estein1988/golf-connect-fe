import React from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements'


export default function CourseCard({course, joinFoursome}) {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        joinFoursome()
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>{course.course_name}</Card.Title>
                <Card.Divider/>
                <Card.Image 
                    style={styles.image}
                    source={{uri: course.thumbnail}}
                >
                </Card.Image>
                <Card.Divider/>
                <View>{course.foursomes.map(foursome => 
                    <View>
                        <Text>{foursome.day_date_time}</Text>
                        <Text>{foursome.description}</Text>
                        <Text>Spots Needed: {foursome.spots_needed}</Text>
                        <View style={styles.loginContainer}>
                            <Button
                                onPress={handleSubmit}
                                color='#ffffff'
                                title="Fill This Spot"
                            >
                            </Button>
                        </View>
                    </View>
                )}
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 200
    },
    loginContainer: {
        borderColor: '#007BFF',
        backgroundColor: 'green',
        padding: 3,
        margin: 3,
    }
});