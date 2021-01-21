import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class CoursesContainer extends Component {


    render(){
        const showCourses = () => this.props.allCourses.map(course =>{
            return (
                <View>
                    <Text key={course.id}>
                        {course.course_name}
                    </Text>
                    <Image style={styles.image} source={{uri: course.thumbnail}}
                    />
                </View>
            )
        })

        return (
            <View> 
                <View style={styles.container}>
                    {showCourses()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        height: 10,
        width: 200
    }
});