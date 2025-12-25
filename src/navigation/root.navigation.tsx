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
import CalendarScreen from '../screens/CalendarScreen';
import TeacherPaymentScreen from '../screens/TeacherPaymentScreen';
import TeacherSyllabusScreen from '../screens/TeacherSyllabusScreen';
import TeacherAssignmentScreen from '../screens/TeacherAssignmentScreen';
import TeacherAttendanceScreen from '../screens/TeacherAttendanceScreen';
import ParentFeeScreen from '../screens/ParentFeeScreen';
import ParentLeaveScreen from '../screens/ParentLeaveScreen';
import ParentHealthScreen from '../screens/ParentHealthScreen';
import ParentDiaryScreen from '../screens/ParentDiaryScreen';
import TeacherPersonalInfoScreen from '../screens/TeacherPersonalInfoScreen';
import TeacherAcademicRecordScreen from '../screens/TeacherAcademicRecordScreen';
import TeacherGuardianScreen from '../screens/TeacherGuardianScreen';
import TeacherTransportScreen from '../screens/TeacherTransportScreen';
import TeacherFeeHistoryScreen from '../screens/TeacherFeeHistoryScreen';
import ParentTrackScreen from '../screens/ParentTrackScreen';

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
  Calendar: undefined;
  Profile: { userId: string };
  TeacherPayments: undefined;
  TeacherSyllabus: undefined;
  TeacherAssignments: undefined;
  TeacherAttendance: undefined;
  ParentFees: undefined;
  ParentLeave: undefined;
  ParentHealth: undefined;
  ParentDiary: undefined;
  TeacherPersonalInfo: undefined;
  TeacherAcademicRecord: undefined;
  TeacherGuardian: undefined;
  TeacherTransport: undefined;
  TeacherFeeHistory: undefined;
  ParentTrack: undefined;
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
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="TeacherPayments" component={TeacherPaymentScreen} />
      <Stack.Screen name="TeacherSyllabus" component={TeacherSyllabusScreen} />
      <Stack.Screen name="TeacherAssignments" component={TeacherAssignmentScreen} />
      <Stack.Screen name="TeacherAttendance" component={TeacherAttendanceScreen} />
      <Stack.Screen name="ParentFees" component={ParentFeeScreen} />
      <Stack.Screen name="ParentLeave" component={ParentLeaveScreen} />
      <Stack.Screen name="ParentHealth" component={ParentHealthScreen} />
      <Stack.Screen name="ParentDiary" component={ParentDiaryScreen} />
      <Stack.Screen name="TeacherPersonalInfo" component={TeacherPersonalInfoScreen} />
      <Stack.Screen name="TeacherAcademicRecord" component={TeacherAcademicRecordScreen} />
      <Stack.Screen name="TeacherGuardian" component={TeacherGuardianScreen} />
      <Stack.Screen name="TeacherTransport" component={TeacherTransportScreen} />
      <Stack.Screen name="TeacherFeeHistory" component={TeacherFeeHistoryScreen} />
      <Stack.Screen name="ParentTrack" component={ParentTrackScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
