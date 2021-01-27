import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import LoginForm from './LoginForm'
import CoursesContainer from './CoursesContainer';

const loginURL = 'http://localhost:8000/login/'
const coursesURL = 'http://localhost:8000/courses/'
const profileURL = 'http://localhost:8000/profile/'

export default function App() {

  const [user, setUser] = useState({})
  const [allCourses, setCourses] = useState([])

  const fetchModels = () => {
    coursesFetch()
    profileFetch()
  }

  const login = (user) => {
    fetch(`${loginURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if(data.errors) {
          console.log(data.errors)
        } else {
          AsyncStorage.setItem('token', data.access)
          fetchModels()
        }
      })
  }

  const profileFetch = async () => {
    let tokenValue =  await AsyncStorage.getItem('token')
    fetch(profileURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenValue}`
      }
    })
    .then(response => response.json())
    .then(result => setUser(result))
  }

  const coursesFetch = async () => {
    let tokenValue =  await AsyncStorage.getItem('token')
    fetch(coursesURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenValue}`
      }
    })
    .then(response => response.json())
    .then(result => setCourses(result))
  }

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm 
        login={login}
        user={user}
        allCourses={allCourses}
      >
      </LoginForm>
      <CoursesContainer 
        user={user}
        allCourses={allCourses}
      >
      </CoursesContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});