import React, {Component} from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import CourseCard from './CourseCard'

export default function CoursesContainer({allCourses, joinFoursome}) {

    const showCourses = () => allCourses.map(course =>{
        return (
            <View>
                <CourseCard 
                    key={course.id} 
                    course={course}
                    joinFoursome={joinFoursome}
                />
            </View>
        )
    })

    return (
        <ScrollView style={styles.container}>
            {showCourses()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    }
});