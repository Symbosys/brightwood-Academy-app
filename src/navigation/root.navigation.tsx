import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import StudentHomeScreen from '../screens/StudentHomeScreen';
import TeacherHomeScreen from '../screens/TeacherHomeScreen';
import ParentHomeScreen from '../screens/ParentHomeScreen';
import HomeworkScreen from '../screens/HomeworkScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import RemarksScreen from '../screens/RemarksScreen';
import ExamsScreen from '../screens/ExamsScreen';
import FeesScreen from '../screens/FeesScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList = {
  Login: undefined;
  StudentHome: undefined;
  TeacherHome: undefined;
  ParentHome: undefined;
  Homework: undefined;
  Attendance: undefined;
  Remarks: undefined;
  Exams: undefined;
  Fees: undefined;
  Library: undefined;
  Profile: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
      <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} />
      <Stack.Screen name="ParentHome" component={ParentHomeScreen} />
      <Stack.Screen name="Homework" component={HomeworkScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Remarks" component={RemarksScreen} />
      <Stack.Screen name="Exams" component={ExamsScreen} />
      <Stack.Screen name="Fees" component={FeesScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
