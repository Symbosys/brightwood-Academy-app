import React, { useState } from 'react';
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

const TeacherAcademicRecordScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Overview' | 'Classes' | 'Achievements'>('Overview');

    const performanceMetrics = [
        { label: 'Classes Taught', value: '145', color: '#4F46E5', icon: '📚' },
        { label: 'Students Taught', value: '2,340', color: '#10B981', icon: '👨‍🎓' },
        { label: 'Avg. Pass Rate', value: '94%', color: '#F59E0B', icon: '📊' },
        { label: 'Rating', value: '4.8/5', color: '#EC4899', icon: '⭐' },
    ];

    const currentClasses = [
        { grade: 'Grade 10-A', subject: 'Advanced Mathematics', students: 32, schedule: 'Mon, Wed, Fri - 9:00 AM' },
        { grade: 'Grade 10-B', subject: 'Algebra', students: 28, schedule: 'Tue, Thu - 10:30 AM' },
        { grade: 'Grade 12-A', subject: 'Calculus', students: 25, schedule: 'Mon, Wed - 2:00 PM' },
        { grade: 'Grade 11-C', subject: 'Geometry', students: 30, schedule: 'Tue, Fri - 11:00 AM' },
    ];

    const teachingHistory = [
        { year: '2024-25', classes: 8, students: 245, passRate: '96%', avgGrade: 'A-' },
        { year: '2023-24', classes: 8, students: 238, passRate: '94%', avgGrade: 'B+' },
        { year: '2022-23', classes: 7, students: 220, passRate: '93%', avgGrade: 'B+' },
        { year: '2021-22', classes: 6, students: 195, passRate: '91%', avgGrade: 'B' },
    ];

    const achievements = [
        {
            title: 'Best Teacher Award 2024',
            date: 'June 2024',
            desc: 'Recognized for outstanding contribution to Mathematics department',
            icon: '🏆',
            color: '#F59E0B'
        },
        {
            title: 'Research Publication',
            date: 'March 2024',
            desc: 'Published paper on "Modern Teaching Methods in Algebra"',
            icon: '📝',
            color: '#4F46E5'
        },
        {
            title: 'Student Excellence Award',
            date: 'December 2023',
            desc: '100% pass rate in Grade 12 Board Examinations',
            icon: '🎓',
            color: '#10B981'
        },
        {
            title: 'Workshop Facilitator',
            date: 'August 2023',
            desc: 'Conducted national-level workshop on STEM education',
            icon: '🎤',
            color: '#EC4899'
        },
    ];

    const certifications = [
        { name: 'Advanced Teaching Methodology', issuer: 'National Board', year: '2023' },
        { name: 'Digital Classroom Management', issuer: 'EdTech Institute', year: '2022' },
        { name: 'Ph.D. in Mathematics', issuer: 'State University', year: '2015' },
        { name: 'M.Sc. Mathematics', issuer: 'State University', year: '2010' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Academic Record</Text>
                    <TouchableOpacity style={styles.downloadBtn}>
                        <Text style={styles.downloadIcon}>📥</Text>
                    </TouchableOpacity>
                </View>

                {/* Teacher Summary */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryLeft}>
                        <Text style={styles.summaryLabel}>Teaching Since</Text>
                        <Text style={styles.summaryValue}>August 2019</Text>
                        <Text style={styles.summarySub}>5+ Years of Excellence</Text>
                    </View>
                    <View style={styles.summaryDivider} />
                    <View style={styles.summaryRight}>
                        <Text style={styles.summaryLabel}>Department</Text>
                        <Text style={styles.summaryValue}>Mathematics</Text>
                        <Text style={styles.summarySub}>Senior Faculty</Text>
                    </View>
                </View>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {(['Overview', 'Classes', 'Achievements'] as const).map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {activeTab === 'Overview' && (
                    <>
                        {/* Performance Metrics */}
                        <View style={styles.metricsGrid}>
                            {performanceMetrics.map((metric, i) => (
                                <View key={i} style={styles.metricCard}>
                                    <Text style={styles.metricIcon}>{metric.icon}</Text>
                                    <Text style={[styles.metricValue, { color: metric.color }]}>{metric.value}</Text>
                                    <Text style={styles.metricLabel}>{metric.label}</Text>
                                </View>
                            ))}
                        </View>

                        {/* Teaching History */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Teaching History</Text>
                        </View>
                        {teachingHistory.map((year, i) => (
                            <View key={i} style={styles.historyCard}>
                                <View style={styles.historyHeader}>
                                    <Text style={styles.historyYear}>{year.year}</Text>
                                    <View style={styles.gradeBadge}>
                                        <Text style={styles.gradeBadgeText}>{year.avgGrade}</Text>
                                    </View>
                                </View>
                                <View style={styles.historyStats}>
                                    <View style={styles.historyStat}>
                                        <Text style={styles.historyStatLabel}>Classes</Text>
                                        <Text style={styles.historyStatValue}>{year.classes}</Text>
                                    </View>
                                    <View style={styles.historyStat}>
                                        <Text style={styles.historyStatLabel}>Students</Text>
                                        <Text style={styles.historyStatValue}>{year.students}</Text>
                                    </View>
                                    <View style={styles.historyStat}>
                                        <Text style={styles.historyStatLabel}>Pass Rate</Text>
                                        <Text style={styles.historyStatValue}>{year.passRate}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        {/* Certifications */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Qualifications & Certifications</Text>
                        </View>
                        <View style={styles.certSection}>
                            {certifications.map((cert, i) => (
                                <View key={i} style={styles.certItem}>
                                    <View style={styles.certIconBox}>
                                        <Text style={styles.certIcon}>🎓</Text>
                                    </View>
                                    <View style={styles.certInfo}>
                                        <Text style={styles.certName}>{cert.name}</Text>
                                        <Text style={styles.certMeta}>{cert.issuer} • {cert.year}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </>
                )}

                {activeTab === 'Classes' && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Current Academic Year (2024-25)</Text>
                            <Text style={styles.totalClasses}>{currentClasses.length} Classes</Text>
                        </View>
                        {currentClasses.map((cls, i) => (
                            <View key={i} style={styles.classCard}>
                                <View style={styles.classHeader}>
                                    <View style={styles.gradeTag}>
                                        <Text style={styles.gradeTagText}>{cls.grade}</Text>
                                    </View>
                                    <View style={styles.studentCount}>
                                        <Text style={styles.studentCountIcon}>👥</Text>
                                        <Text style={styles.studentCountText}>{cls.students}</Text>
                                    </View>
                                </View>
                                <Text style={styles.classSubject}>{cls.subject}</Text>
                                <View style={styles.classSchedule}>
                                    <Text style={styles.scheduleIcon}>🕒</Text>
                                    <Text style={styles.scheduleText}>{cls.schedule}</Text>
                                </View>
                                <TouchableOpacity style={styles.viewDetailsBtn}>
                                    <Text style={styles.viewDetailsTxt}>View Class Details</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </>
                )}

                {activeTab === 'Achievements' && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Awards & Recognition</Text>
                        </View>
                        {achievements.map((ach, i) => (
                            <View key={i} style={[styles.achievementCard, { borderLeftColor: ach.color }]}>
                                <View style={[styles.achievementIconBox, { backgroundColor: ach.color + '15' }]}>
                                    <Text style={styles.achievementIcon}>{ach.icon}</Text>
                                </View>
                                <View style={styles.achievementContent}>
                                    <Text style={styles.achievementTitle}>{ach.title}</Text>
                                    <Text style={styles.achievementDesc}>{ach.desc}</Text>
                                    <Text style={styles.achievementDate}>{ach.date}</Text>
                                </View>
                            </View>
                        ))}
                    </>
                )}

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
    header: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 30,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
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
    downloadBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    downloadIcon: {
        fontSize: 18,
    },
    summaryCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    summaryLeft: {
        flex: 1,
    },
    summaryLabel: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    summaryValue: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
        marginTop: 4,
    },
    summarySub: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 2,
        fontWeight: '600',
    },
    summaryDivider: {
        width: 1,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 20,
    },
    summaryRight: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        marginHorizontal: 24,
        marginTop: 20,
        borderRadius: 16,
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 12,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
        elevation: 2,
    },
    tabText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#64748B',
    },
    activeTabText: {
        color: '#4F46E5',
    },
    scrollBody: {
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    metricsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    metricCard: {
        width: (width - 48 - 15) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    metricIcon: {
        fontSize: 28,
        marginBottom: 8,
    },
    metricValue: {
        fontSize: 20,
        fontWeight: '900',
    },
    metricLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    totalClasses: {
        fontSize: 12,
        fontWeight: '700',
        color: '#4F46E5',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    historyCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    historyYear: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    gradeBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    gradeBadgeText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#16A34A',
    },
    historyStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    historyStat: {
        alignItems: 'center',
    },
    historyStatLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginBottom: 4,
    },
    historyStatValue: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    certSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    certItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    certIconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    certIcon: {
        fontSize: 18,
    },
    certInfo: {
        flex: 1,
    },
    certName: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E293B',
    },
    certMeta: {
        fontSize: 12,
        color: '#94A3B8',
        marginTop: 2,
        fontWeight: '600',
    },
    classCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    classHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    gradeTag: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    gradeTagText: {
        fontSize: 12,
        fontWeight: '800',
        color: '#4F46E5',
    },
    studentCount: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    studentCountIcon: {
        fontSize: 14,
        marginRight: 6,
    },
    studentCountText: {
        fontSize: 12,
        fontWeight: '800',
        color: '#64748B',
    },
    classSubject: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 8,
    },
    classSchedule: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    scheduleIcon: {
        fontSize: 14,
        marginRight: 8,
    },
    scheduleText: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
    },
    viewDetailsBtn: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
    },
    viewDetailsTxt: {
        fontSize: 13,
        fontWeight: '800',
        color: '#4F46E5',
    },
    achievementCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        borderLeftWidth: 4,
        flexDirection: 'row',
    },
    achievementIconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    achievementIcon: {
        fontSize: 24,
    },
    achievementContent: {
        flex: 1,
    },
    achievementTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 4,
    },
    achievementDesc: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
        marginBottom: 6,
    },
    achievementDate: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
    },
});

export default TeacherAcademicRecordScreen;
