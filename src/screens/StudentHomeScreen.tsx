import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Image,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const StudentHomeScreen = ({ navigation }: any) => {
    // School-specific categories
    const menuGrid = [
        { name: 'Attendance', icon: '�', color: '#6366F1', bg: '#EEF2FF' },
        { name: 'Homework', icon: '📝', color: '#10B981', bg: '#ECFDF5' },
        { name: 'Remarks', icon: '⭐', color: '#F59E0B', bg: '#FFFBEB' },
        { name: 'Exams', icon: '🏆', color: '#EF4444', bg: '#FEF2F2' },
        { name: 'Fees', icon: '�', color: '#8B5CF6', bg: '#F5F3FF' },
        { name: 'Library', icon: '📚', color: '#EC4899', bg: '#FDF2F8' },
        { name: 'Calendar', icon: '�️', color: '#06B6D4', bg: '#ECFEFF' },
        { name: 'More', icon: '✨', color: '#64748B', bg: '#F8FAFC' },
    ];

    const todayTimetable = [
        { period: '1', subject: 'Mathematics', teacher: 'Dr. Sarah Wilson', time: '08:00 - 08:45', room: 'Room 201' },
        { period: '2', subject: 'Physics', teacher: 'James Miller', time: '08:45 - 09:30', room: 'Lab 2' },
        { period: '3', subject: 'Chemistry', teacher: 'Emily Davis', time: '09:30 - 10:15', room: 'Room 204' },
    ];

    const notices = [
        { title: 'Winter Vacation', date: 'Dec 24, 2025', desc: 'School will remain closed from Dec 25th to Jan 5th.' },
        { title: 'Uniform Policy', date: 'Dec 20, 2025', desc: 'Winter uniform is mandatory starting next Monday.' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header with Professional Profile Card */}
            <View style={styles.headerArea}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.schoolBrand}>BRIGHTWOOD PUBLIC SCHOOL</Text>
                        <Text style={styles.studentName}>Alex Thompson</Text>
                        <Text style={styles.studentMeta}>Class 10-B • Roll: 10245</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.avatarBorder}
                    >
                        <View style={styles.avatarMain}>
                            <Text style={styles.avatarTxt}>AT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Overlapping Stats Card - School Focus */}
                <View style={styles.statOver}>
                    <View style={styles.statCol}>
                        <Text style={styles.statTitle}>94%</Text>
                        <Text style={styles.statLabel}>Attendance</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statCol}>
                        <Text style={styles.statTitle}>A-</Text>
                        <Text style={styles.statLabel}>Avg Grade</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statCol}>
                        <Text style={styles.statTitle}>14</Text>
                        <Text style={styles.statLabel}>Awards</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* 1. Feature Grid - Iconic School Management */}
                <View style={styles.gridContainer}>
                    {menuGrid.map((item, i) => (
                        <TouchableOpacity
                            key={i}
                            style={styles.gridItem}
                            onPress={() => {
                                switch (item.name) {
                                    case 'Homework': navigation.navigate('Homework'); break;
                                    case 'Attendance': navigation.navigate('Attendance'); break;
                                    case 'Remarks': navigation.navigate('Remarks'); break;
                                    case 'Exams': navigation.navigate('Exams'); break;
                                    case 'Fees': navigation.navigate('Fees'); break;
                                    case 'Library': navigation.navigate('Library'); break;
                                    case 'Calendar': navigation.navigate('Calendar'); break;
                                    case 'More': /* Handle More */ break;
                                    default: console.log('Unknown navigation:', item.name);
                                }
                            }}
                        >
                            <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
                                <Text style={styles.gridIcon}>{item.icon}</Text>
                            </View>
                            <Text style={styles.gridLabel}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 2. Notice Board - School Style */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Notice Board</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentNotices')}>
                        <Text style={styles.viewAll}>Read All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noticeContainer}>
                    {notices.map((nt, i) => (
                        <View key={i} style={styles.noticeCard}>
                            <View style={styles.noticeLeft}>
                                <View style={styles.noticeDot} />
                                <View style={styles.noticeLine} />
                            </View>
                            <View style={styles.noticeContent}>
                                <View style={styles.noticeHeader}>
                                    <Text style={styles.noticeTitle}>{nt.title}</Text>
                                    <Text style={styles.noticeDate}>{nt.date}</Text>
                                </View>
                                <Text style={styles.noticeDesc} numberOfLines={1}>{nt.desc}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* 3. Today's Timetable - Period Wise */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Today's Timetable</Text>
                    <TouchableOpacity><Text style={styles.viewAll}>Full Week</Text></TouchableOpacity>
                </View>

                {todayTimetable.map((item, i) => (
                    <View key={i} style={styles.timetableCard}>
                        <View style={styles.periodBox}>
                            <Text style={styles.periodNum}>{item.period}</Text>
                            <Text style={styles.periodTxt}>Period</Text>
                        </View>
                        <View style={styles.classDetails}>
                            <Text style={styles.className}>{item.subject}</Text>
                            <View style={styles.classMeta}>
                                <Text style={styles.classTeacher}>👨‍🏫 {item.teacher}</Text>
                                <Text style={styles.dash}>•</Text>
                                <Text style={styles.classRoom}>📍 {item.room}</Text>
                            </View>
                            <Text style={styles.classTime}>🕒 {item.time}</Text>
                        </View>
                    </View>
                ))}

                {/* 4. Homework Highlights */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Pending Homework</Text>
                </View>

                <View style={styles.homeworkCard}>
                    <View style={styles.hwHeader}>
                        <View style={styles.hwBadge}>
                            <Text style={styles.hwBadgeTxt}>HIGH PRIORITY</Text>
                        </View>
                        <Text style={styles.hwDue}>Due Tomorrow</Text>
                    </View>
                    <Text style={styles.hwTitle}>Math: Quadratic Equations Worksheet</Text>
                    <Text style={styles.hwDesc}>Complete problems 1-15 from Page 242 of your textbook.</Text>
                    <TouchableOpacity style={styles.hwButton}>
                        <Text style={styles.hwButtonTxt}>Mark as Completed</Text>
                    </TouchableOpacity>
                </View>

                {/* 5. School Pride / Identity */}
                <View style={styles.footerBranding}>
                    <Text style={styles.footerTxt}>Knowledge is Power</Text>
                    <View style={styles.brLine} />
                    <Text style={styles.footerVer}>BrightWood Student Information System v2.0</Text>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFE',
    },
    headerArea: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 65,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    schoolBrand: {
        fontSize: 10,
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.7)',
        letterSpacing: 1.5,
        marginBottom: 6,
    },
    studentName: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    studentMeta: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
        fontWeight: '600',
    },
    avatarBorder: {
        padding: 4,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    avatarMain: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTxt: {
        fontSize: 22,
        fontWeight: '900',
        color: '#4F46E5',
    },
    statOver: {
        position: 'absolute',
        bottom: -40,
        left: 24,
        right: 24,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15 },
            android: { elevation: 15 },
        }),
    },
    statCol: {
        flex: 1,
        alignItems: 'center',
    },
    statTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#1E293B',
    },
    statLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: '#F1F5F9',
    },
    scrollBody: {
        paddingTop: 80,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    gridItem: {
        width: (width - 48 - 30) / 4,
        alignItems: 'center',
        marginBottom: 24,
    },
    iconBox: {
        width: 60,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 2 },
        }),
    },
    gridIcon: {
        fontSize: 26,
    },
    gridLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#475569',
        textAlign: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    viewAll: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    noticeContainer: {
        marginBottom: 28,
    },
    noticeCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        flexDirection: 'row',
        marginBottom: 12,
    },
    noticeLeft: {
        alignItems: 'center',
        marginRight: 16,
    },
    noticeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4F46E5',
    },
    noticeLine: {
        flex: 1,
        width: 2,
        backgroundColor: '#EEF2FF',
        marginTop: 4,
    },
    noticeContent: {
        flex: 1,
    },
    noticeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    noticeTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    noticeDate: {
        fontSize: 10,
        fontWeight: '700',
        color: '#94A3B8',
    },
    noticeDesc: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
    },
    timetableCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    periodBox: {
        backgroundColor: '#F8FAFC',
        width: 65,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    periodNum: {
        fontSize: 24,
        fontWeight: '900',
        color: '#1E293B',
    },
    periodTxt: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748B',
        textTransform: 'uppercase',
    },
    classDetails: {
        flex: 1,
    },
    className: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    classMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    classTeacher: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    dash: {
        marginHorizontal: 8,
        color: '#CBD5E1',
    },
    classRoom: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    classTime: {
        fontSize: 12,
        color: '#4F46E5',
        fontWeight: '700',
        marginTop: 6,
    },
    homeworkCard: {
        backgroundColor: '#1E293B',
        borderRadius: 24,
        padding: 24,
        marginBottom: 30,
    },
    hwHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    hwBadge: {
        backgroundColor: '#EF4444',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    hwBadgeTxt: {
        fontSize: 9,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    hwDue: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
    },
    hwTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    hwDesc: {
        fontSize: 13,
        color: '#94A3B8',
        lineHeight: 20,
        marginBottom: 20,
    },
    hwButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
    },
    hwButtonTxt: {
        fontSize: 14,
        fontWeight: '800',
        color: '#1E293B',
    },
    footerBranding: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    footerTxt: {
        fontSize: 16,
        fontWeight: '800',
        color: '#E2E8F0',
        fontStyle: 'italic',
    },
    brLine: {
        width: 40,
        height: 2,
        backgroundColor: '#F1F5F9',
        marginVertical: 12,
    },
    footerVer: {
        fontSize: 10,
        color: '#CBD5E1',
        fontWeight: '600',
    }
});

export default StudentHomeScreen;
