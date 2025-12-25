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

const TeacherHomeScreen = ({ navigation }: any) => {
    const teachingCategories = [
        { name: 'Attendance', icon: '📋', count: 'Done', bg: '#FDF2F8', border: '#FCE7F3' },
        { name: 'Assignments', icon: '📥', count: '08', bg: '#F0FDF4', border: '#BBF7D0' },
        { name: 'Syllabus', icon: '📊', count: '75%', bg: '#EEF2FF', border: '#C7D2FE' },
        { name: 'Payments', icon: '💰', count: 'Credited', bg: '#FFF7ED', border: '#FED7AA' },
    ];

    const upcomingLectures = [
        { title: 'Grade 10-B: Algebra', time: '10:00 AM', room: 'Room 102', status: 'In 15m' },
        { title: 'Grade 12-A: Calculus', time: '12:30 PM', room: 'Audit. C', status: 'Scheduled' },
    ];

    const studentStats = [
        { label: 'Total Students', val: '145' },
        { label: 'Avg Grade', val: 'B+' },
        { label: 'Pass Rate', val: '98%' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            <View style={styles.headerBackground}>
                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.schoolName}>FACULTY PORTAL • BRIGHTWOOD</Text>
                        <View style={styles.userRow}>
                            <Text style={styles.welcomeTitle}>Hi, Dr. Sarah Wilson</Text>
                            <View style={styles.onlineDot} />
                        </View>
                        <Text style={styles.classInfo}>Mathematics Head • Senior Faculty</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.profileBox}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <View style={styles.avatarMini}>
                            <Text style={styles.avatarTextMini}>SW</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Teacher Overlapping Stats Card */}
                <View style={styles.summaryCard}>
                    {studentStats.map((stat, i) => (
                        <React.Fragment key={i}>
                            <View style={styles.summaryItem}>
                                <Text style={styles.summaryVal}>{stat.val}</Text>
                                <Text style={styles.summaryLab}>{stat.label}</Text>
                            </View>
                            {i < studentStats.length - 1 && <View style={styles.summaryDivider} />}
                        </React.Fragment>
                    ))}
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollArea}
            >
                {/* Management Grid */}
                <View style={styles.catGrid}>
                    {teachingCategories.map((cat, i) => (
                        <TouchableOpacity
                            key={i}
                            style={[styles.catCard, { backgroundColor: cat.bg, borderColor: cat.border }]}
                            onPress={() => {
                                if (cat.name === 'Payments') {
                                    navigation.navigate('TeacherPayments');
                                } else if (cat.name === 'Syllabus') {
                                    navigation.navigate('TeacherSyllabus');
                                } else if (cat.name === 'Assignments') {
                                    navigation.navigate('TeacherAssignments');
                                } else if (cat.name === 'Attendance') {
                                    navigation.navigate('TeacherAttendance');
                                }
                            }}
                        >
                            <Text style={styles.catIcon}>{cat.icon}</Text>
                            <Text style={styles.catName}>{cat.name}</Text>
                            <View style={styles.catBadge}>
                                <Text style={styles.catBadgeText}>{cat.count}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Important Notice for Staff */}
                <View style={styles.staffBanner}>
                    <View style={styles.bannerInfo}>
                        <Text style={styles.bannerTag}>STAFF MEETING</Text>
                        <Text style={styles.bannerTitle}>Term End Evaluation</Text>
                        <Text style={styles.bannerDesc}>Tomorrow at 04:00 PM in Conference Room A. Attendance is mandatory.</Text>
                    </View>
                    <TouchableOpacity style={styles.bannerButton}>
                        <Text style={styles.bannerButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>

                {/* Lectures Schedule */}
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Teaching Schedule</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See Full</Text></TouchableOpacity>
                </View>

                {upcomingLectures.map((cl, i) => (
                    <View key={i} style={styles.lectureCard}>
                        <View style={styles.lectureIconBox}>
                            <Text style={styles.lectureIcon}>🎓</Text>
                        </View>
                        <View style={styles.lectureInfoBox}>
                            <Text style={styles.lectureName}>{cl.title}</Text>
                            <View style={styles.lectureMeta}>
                                <Text style={styles.lectureMetaText}>⏰ {cl.time}</Text>
                                <Text style={styles.lectureMetaText}>📍 {cl.room}</Text>
                            </View>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: cl.status === 'In 15m' ? '#FEE2E2' : '#F1F5F9' }]}>
                            <Text style={[styles.statusText, { color: cl.status === 'In 15m' ? '#EF4444' : '#64748B' }]}>{cl.status}</Text>
                        </View>
                    </View>
                ))}

                {/* Class Performance Chart Placeholder (PW Vibe) */}
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Academic Progress</Text>
                </View>
                <View style={styles.chartPlaceholder}>
                    <View style={styles.chartBarBox}>
                        <View style={[styles.chartBar, { height: '60%', backgroundColor: '#C7D2FE' }]} />
                        <View style={[styles.chartBar, { height: '85%', backgroundColor: '#4F46E5' }]} />
                        <View style={[styles.chartBar, { height: '40%', backgroundColor: '#C7D2FE' }]} />
                        <View style={[styles.chartBar, { height: '70%', backgroundColor: '#C7D2FE' }]} />
                        <View style={[styles.chartBar, { height: '95%', backgroundColor: '#4F46E5' }]} />
                    </View>
                    <Text style={styles.chartFooter}>Weekly avg student performance across sections</Text>
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
    headerBackground: {
        backgroundColor: '#4F46E5',
        height: 220,
        paddingTop: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: 24,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    schoolName: {
        fontSize: 10,
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.7)',
        letterSpacing: 2,
        marginBottom: 8,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#34D399',
        marginLeft: 10,
    },
    classInfo: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
        fontWeight: '500',
    },
    profileBox: {
        padding: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
    },
    avatarMini: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#FCE7F3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTextMini: {
        fontSize: 18,
        fontWeight: '900',
        color: '#DB2777',
    },
    summaryCard: {
        position: 'absolute',
        bottom: -35,
        left: 24,
        right: 24,
        height: 85,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 10,
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryVal: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    summaryLab: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    summaryDivider: {
        width: 1,
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    scrollArea: {
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    catGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
    },
    catCard: {
        width: (width - 48 - 36) / 4,
        paddingVertical: 18,
        borderRadius: 22,
        alignItems: 'center',
        borderWidth: 1.5,
    },
    catIcon: {
        fontSize: 22,
        marginBottom: 8,
    },
    catName: {
        fontSize: 9,
        fontWeight: '800',
        color: '#475569',
        textTransform: 'uppercase',
    },
    catBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#4F46E5',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
    },
    catBadgeText: {
        fontSize: 8,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    staffBanner: {
        backgroundColor: '#F8FAFC',
        borderRadius: 24,
        padding: 20,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
    },
    bannerInfo: {
        flex: 1,
    },
    bannerTag: {
        fontSize: 9,
        fontWeight: '900',
        color: '#EF4444',
        marginBottom: 8,
    },
    bannerTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    bannerDesc: {
        fontSize: 11,
        color: '#64748B',
        marginTop: 4,
        lineHeight: 16,
    },
    bannerButton: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 12,
        marginLeft: 10,
    },
    bannerButtonText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    sectionHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#1E293B',
    },
    seeAll: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    lectureCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    lectureIconBox: {
        width: 50,
        height: 50,
        backgroundColor: '#F8FAFC',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    lectureIcon: {
        fontSize: 22,
    },
    lectureInfoBox: {
        flex: 1,
    },
    lectureName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    lectureMeta: {
        flexDirection: 'row',
        marginTop: 4,
    },
    lectureMetaText: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        marginRight: 12,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '900',
    },
    chartPlaceholder: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        alignItems: 'center',
    },
    chartBarBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 100,
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    chartBar: {
        width: 30,
        borderRadius: 8,
    },
    chartFooter: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        textAlign: 'center',
    }
});

export default TeacherHomeScreen;
