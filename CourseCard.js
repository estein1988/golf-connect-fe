import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'


export default function CourseCard({course}) {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>{course.course_name}</Card.Title>
                <Card.Divider/>
                <Card.Image style={styles.image} source={{uri: course.thumbnail}}>
                    <Text>{course.foursomes.map(foursome => foursome.day_date_time)}</Text>
                </Card.Image>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0
    },
    image: {
        width: 300,
        height: 200
    }
});