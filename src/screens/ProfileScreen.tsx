import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }: any) => {
    const academicStats = [
        { label: 'Courses', val: '08' },
        { label: 'Completed', val: '92%' },
        { label: 'Certificates', val: '04' },
    ];

    const menuItems = [
        { label: 'Personal Information', icon: '👤', desc: 'Basic details, date of birth' },
        { label: 'Academic Record', icon: '📈', desc: 'Grades, marksheet, rank' },
        { label: 'Parent / Guardian', icon: '👪', desc: 'Emergency contact, address' },
        { label: 'Transport Details', icon: '🚌', desc: 'Route 101, Bus No 45' },
        { label: 'Fee History', icon: '🧾', desc: 'Receipts, pending payments' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Curved Header Backdrop */}
            <View style={styles.headerBackdrop}>
                <View style={styles.navRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>My Profile</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <Text style={styles.editIcon}>✏️</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Identity Card */}
                <View style={styles.profileBrand}>
                    <View style={styles.avatarLarge}>
                        <Text style={styles.avatarTextLarge}>AT</Text>
                        <View style={styles.verifiedBadge}>
                            <Text style={styles.verifiedCheck}>✓</Text>
                        </View>
                    </View>
                    <Text style={styles.profileName}>Alex Thompson</Text>
                    <Text style={styles.profileID}>Student ID: BW-10245</Text>
                    <View style={styles.classTag}>
                        <Text style={styles.classTagText}>Grade 10 - Section B</Text>
                    </View>
                </View>

                {/* Overlapping Stats Card */}
                <View style={styles.statsOverlap}>
                    {academicStats.map((stat, i) => (
                        <View key={i} style={styles.statBox}>
                            <Text style={styles.statVal}>{stat.val}</Text>
                            <Text style={styles.statLab}>{stat.label}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBody}>
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>General Settings</Text>
                </View>

                {menuItems.map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        style={styles.menuItem}
                        onPress={() => {
                            if (item.label === 'Personal Information') {
                                navigation.navigate('TeacherPersonalInfo');
                            }
                            if (item.label === 'Academic Record') {
                                navigation.navigate('TeacherAcademicRecord');
                            }
                            if (item.label === 'Parent / Guardian') {
                                navigation.navigate('TeacherGuardian');
                            }
                            if (item.label === 'Transport Details') {
                                navigation.navigate('TeacherTransport');
                            }
                            if (item.label === 'Fee History') {
                                navigation.navigate('TeacherFeeHistory');
                            }
                        }}
                    >
                        <View style={styles.menuIconBox}>
                            <Text style={styles.menuIcon}>{item.icon}</Text>
                        </View>
                        <View style={styles.menuInfo}>
                            <Text style={styles.menuLabel}>{item.label}</Text>
                            <Text style={styles.menuDesc}>{item.desc}</Text>
                        </View>
                        <Text style={styles.chevron}>›</Text>
                    </TouchableOpacity>
                ))}

                <View style={styles.dangerZone}>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.logoutIcon}>🚪</Text>
                        <Text style={styles.logoutText}>Log Out Account</Text>
                    </TouchableOpacity>
                    <Text style={styles.appVer}>App Version 1.0.4 r (Stable)</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerBackdrop: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 60,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 24,
        zIndex: 10,
    },
    navRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    editBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        fontSize: 18,
    },
    profileBrand: {
        alignItems: 'center',
        marginTop: 10,
    },
    avatarLarge: {
        width: 90,
        height: 90,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarTextLarge: {
        fontSize: 34,
        fontWeight: '900',
        color: '#4F46E5',
    },
    verifiedBadge: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        backgroundColor: '#10B981',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#4F46E5',
    },
    verifiedCheck: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '900',
    },
    profileName: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    profileID: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 4,
        fontWeight: '600',
    },
    classTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        marginTop: 12,
    },
    classTagText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    statsOverlap: {
        position: 'absolute',
        bottom: -35,
        left: 24,
        right: 24,
        height: 80,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
    },
    statVal: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    statLab: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '700',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    scrollBody: {
        paddingTop: 70,
        paddingHorizontal: 24,
        paddingBottom: 40,
        zIndex: 1,
    },
    sectionHead: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 20,
        marginBottom: 12,
    },
    menuIconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    menuIcon: {
        fontSize: 20,
    },
    menuInfo: {
        flex: 1,
    },
    menuLabel: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    menuDesc: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
        fontWeight: '500',
    },
    chevron: {
        fontSize: 24,
        color: '#CBD5E1',
        marginLeft: 10,
    },
    dangerZone: {
        marginTop: 20,
        alignItems: 'center',
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF1F2',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 20,
        width: '100%',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FECDD3',
    },
    logoutIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    logoutText: {
        color: '#E11D48',
        fontSize: 16,
        fontWeight: '800',
    },
    appVer: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 20,
    },
});

export default ProfileScreen;
