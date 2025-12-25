import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    SafeAreaView,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'Student' | 'Teacher' | 'Parent'>('Student');

    const handleLogin = () => {
        if (role === 'Student') navigation.navigate('StudentHome');
        else if (role === 'Teacher') navigation.navigate('TeacherHome');
        else navigation.navigate('ParentHome');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Top Branding Section */}
            <View style={styles.topSection}>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <View style={styles.brandingContent}>
                    <View style={styles.logoBox}>
                        <Text style={styles.logoLetter}>B</Text>
                    </View>
                    <Text style={styles.brandName}>BrightWood</Text>
                    <Text style={styles.brandTagline}>Shaping Tomorrow's Leaders</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.formSection}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={styles.formContainer}>
                        <Text style={styles.welcomeText}>Login</Text>
                        <Text style={styles.instructText}>Choose your role and enter credentials.</Text>

                        {/* Role Selector Tabs */}
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

                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>{role} ID</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={`Enter ${role.toLowerCase()} id`}
                                placeholderTextColor="#94A3B8"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor="#94A3B8"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={handleLogin}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.loginBtnText}>Login as {role}</Text>
                        </TouchableOpacity>

                        <View style={styles.divider}>
                            <View style={styles.line} />
                            <Text style={styles.dividerText}>SECURE ACCESS</Text>
                            <View style={styles.line} />
                        </View>

                        <TouchableOpacity style={styles.supportBtn}>
                            <Text style={styles.supportText}>Need Help? <Text style={styles.blueLink}>Contact Coordinator</Text></Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.bottomFooter}>
                <Text style={styles.footerInfo}>BrightWood Education Systems • v1.0.4</Text>
            </View>
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
        backgroundColor: '#4F46E5', // Indigo-600 (PW Blue/Indigo vibe)
        borderBottomLeftRadius: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle1: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        top: -100,
        right: -50,
    },
    circle2: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        bottom: -50,
        left: -50,
    },
    brandingContent: {
        alignItems: 'center',
    },
    logoBox: {
        width: 80,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    logoLetter: {
        fontSize: 42,
        fontWeight: '900',
        color: '#4F46E5',
    },
    brandName: {
        fontSize: 32,
        fontWeight: '800',
        color: '#FFFFFF',
        letterSpacing: -0.5,
    },
    brandTagline: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
        marginTop: 4,
    },
    formSection: {
        flex: 1,
        marginTop: -40,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 60,
        paddingHorizontal: 28,
        paddingTop: 30,
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: '800',
        color: '#1E293B',
    },
    instructText: {
        fontSize: 15,
        color: '#64748B',
        marginTop: 6,
        marginBottom: 20,
    },
    roleTabs: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        padding: 5,
        borderRadius: 16,
        marginBottom: 24,
    },
    roleTab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 12,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    roleTabText: {
        fontSize: 13,
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
        fontSize: 13,
        fontWeight: '700',
        color: '#475569',
        marginBottom: 10,
        marginLeft: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    input: {
        height: 58,
        backgroundColor: '#F8FAFC',
        borderRadius: 18,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#1E293B',
        borderWidth: 1.5,
        borderColor: '#F1F5F9',
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        color: '#4F46E5',
        fontSize: 14,
        fontWeight: '700',
    },
    loginBtn: {
        height: 56,
        backgroundColor: '#4F46E5',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        marginTop: 10,
    },
    loginBtnText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 32,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#F1F5F9',
    },
    dividerText: {
        marginHorizontal: 16,
        fontSize: 11,
        fontWeight: '800',
        color: '#CBD5E1',
        letterSpacing: 1,
    },
    supportBtn: {
        alignItems: 'center',
    },
    supportText: {
        color: '#64748B',
        fontSize: 14,
        fontWeight: '600',
    },
    blueLink: {
        color: '#4F46E5',
        fontWeight: '800',
    },
    bottomFooter: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    footerInfo: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

export default LoginScreen;
