import React, {Component} from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import CourseCard from './CourseCard'

export default class CoursesContainer extends Component {


    render(){
        const showCourses = () => this.props.allCourses.map(course =>{
            return (
                <View>
                    <CourseCard 
                        key={course.id} 
                        course={course}
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    }
});