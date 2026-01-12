import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    StatusBar,
    ScrollView,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/apiclient';
import DatePicker from 'react-native-date-picker';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }: any) => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState(''); // Stores Date string for Student/Teacher
    const [role, setRole] = useState<'Student' | 'Teacher' | 'Parent'>('Student');
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    // Reset fields when role changes
    useEffect(() => {
        setLoginId('');
        setPassword('');
        setDate(new Date());
    }, [role]);

    // Format date as DDMMYYYY for the password state
    const handleConfirmDate = (selectedDate: Date) => {
        setOpen(false);
        setDate(selectedDate);

        const day = String(selectedDate.getDate()).padStart(2, '0');
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const year = selectedDate.getFullYear();

        setPassword(`${day}${month}${year}`);
    };

    const handleLogin = async () => {
        // Validation: Parent only needs loginId. Others need loginId + password (date)
        if (!loginId || (role !== 'Parent' && !password)) {
            const fieldType = role === 'Teacher' ? 'Joining Date' : 'Date of Birth';
            Alert.alert('Missing Details', `Please enter your ID ${role !== 'Parent' ? `and ${fieldType}` : ''}.`);
            return;
        }

        setLoading(true);
        try {
            const endpoint = role.toLowerCase();
            const payloadKey = role === 'Student' ? 'loginId' : (role === 'Teacher' ? 'teacherLoginId' : 'parentsLoginId');

            const response = await api.post(`${endpoint}/login`, {
                [payloadKey]: loginId,
                password: role === 'Parent' ? "" : password // Send empty string for parent password if not used
            });

            const result = response.data;
            await AsyncStorage.setItem('userToken', result.data.token);
            await AsyncStorage.setItem('userRole', role);
            await AsyncStorage.setItem('userData', JSON.stringify(result.data.user || result.data.student));

            if (role === 'Student') navigation.navigate('StudentHome');
            else if (role === 'Teacher') navigation.navigate('TeacherHome');
            else navigation.navigate('ParentHome');

        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
            Alert.alert('Login Failed', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            <View style={styles.topSection}>
                <View style={styles.circle1} /><View style={styles.circle2} />
                <View style={styles.brandingContent}>
                    <View style={styles.logoBox}><Text style={styles.logoLetter}>B</Text></View>
                    <Text style={styles.brandName}>Symbosys</Text>
                    <Text style={styles.brandTagline}>Shaping Tomorrow's Leaders</Text>
                </View>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formSection}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.formContainer}>
                        <Text style={styles.welcomeText}>Login</Text>
                        <Text style={styles.instructText}>Choose your role and enter credentials.</Text>

                        {/* Role Selector */}
                        <View style={styles.roleTabs}>
                            {(['Student', 'Teacher', 'Parent'] as const).map((r) => (
                                <TouchableOpacity
                                    key={r}
                                    style={[styles.roleTab, role === r && styles.activeTab]}
                                    onPress={() => setRole(r)}
                                >
                                    <Text style={[styles.roleTabText, role === r && styles.activeTabText]}>{r}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* ID Input */}
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>{role} ID</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={`Enter ${role.toLowerCase()} ID`}
                                placeholderTextColor="#94A3B8"
                                value={loginId}
                                onChangeText={setLoginId}
                                autoCapitalize="none"
                            />
                        </View>

                        {/* Date Picker - Hidden if Role is Parent */}
                        {role !== 'Parent' && (
                            <>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputLabel}>
                                        {role === 'Teacher' ? 'Joining Date' : 'Date of Birth'}
                                    </Text>
                                    <TouchableOpacity
                                        style={[styles.input, { justifyContent: 'center' }]}
                                        onPress={() => setOpen(true)}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={{ color: password ? '#1E293B' : '#94A3B8', fontSize: 16 }}>
                                            {password
                                                ? `${password.slice(0, 2)} / ${password.slice(2, 4)} / ${password.slice(4)}`
                                                : role === 'Teacher' ? "Select Joining Date" : "Select Date of Birth"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <DatePicker
                                    modal
                                    mode="date"
                                    open={open}
                                    date={date}
                                    onConfirm={handleConfirmDate}
                                    onCancel={() => setOpen(false)}
                                    title={role === 'Teacher' ? "Select Joining Date" : "Select Date of Birth"}
                                    maximumDate={new Date()}
                                />
                            </>
                        )}

                        <TouchableOpacity
                            style={[styles.loginBtn, loading && { opacity: 0.7 }, { marginTop: role === 'Parent' ? 30 : 10 }]}
                            onPress={handleLogin}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="#FFFFFF" />
                            ) : (
                                <Text style={styles.loginBtnText}>Login as {role}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topSection: {
        height: height * 0.35,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    circle1: {
        position: 'absolute',
        top: -50,
        right: -50,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    circle2: {
        position: 'absolute',
        bottom: -30,
        left: -30,
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    brandingContent: {
        alignItems: 'center',
    },
    logoBox: {
        width: 80,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 15 },
            android: { elevation: 15 },
        }),
    },
    logoLetter: {
        fontSize: 40,
        fontWeight: '900',
        color: '#4F46E5',
    },
    brandName: {
        fontSize: 32,
        fontWeight: '900',
        color: '#FFFFFF',
        letterSpacing: 1,
    },
    brandTagline: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
        fontWeight: '500',
    },
    formSection: {
        flex: 1,
        marginTop: -30,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 25,
    },
    formContainer: {
        paddingTop: 35,
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1E293B',
    },
    instructText: {
        fontSize: 15,
        color: '#64748B',
        marginTop: 8,
        marginBottom: 30,
    },
    roleTabs: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        borderRadius: 15,
        padding: 5,
        marginBottom: 25,
    },
    roleTab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
            android: { elevation: 3 },
        }),
    },
    roleTabText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#64748B',
    },
    activeTabText: {
        color: '#4F46E5',
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#475569',
        marginBottom: 10,
        marginLeft: 4,
    },
    input: {
        height: 55,
        backgroundColor: '#F8FAFC',
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#1E293B',
    },
    loginBtn: {
        height: 58,
        backgroundColor: '#4F46E5',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: { shadowColor: '#4F46E5', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 15 },
            android: { elevation: 8 },
        }),
    },
    loginBtnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
});

export default LoginScreen;