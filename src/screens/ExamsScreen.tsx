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

const ExamsScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Upcoming' | 'Results'>('Upcoming');

    const upcomingExams = [
        { date: 'Jan 15, 2026', subject: 'Mathematics', time: '09:00 AM - 12:00 PM', room: 'Hall A', type: 'Final Term' },
        { date: 'Jan 18, 2026', subject: 'Physics', time: '10:00 AM - 01:00 PM', room: 'Lab 1', type: 'Final Term' },
        { date: 'Jan 21, 2026', subject: 'English Heritage', time: '09:00 AM - 12:00 PM', room: 'Hall A', type: 'Final Term' },
    ];

    const results = [
        { subject: 'Chemistry', marks: '88/100', grade: 'A', status: 'Passed', color: '#10B981' },
        { subject: 'Global History', marks: '92/100', grade: 'A+', status: 'Passed', color: '#10B981' },
        { subject: 'Advanced Algebra', marks: '76/100', grade: 'B+', status: 'Passed', color: '#10B981' },
        { subject: 'Literature', marks: '84/100', grade: 'A', status: 'Passed', color: '#10B981' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header Area */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Exams & Results</Text>
                    <View style={{ width: 44 }} />
                </View>

                {/* Tab Selector */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Upcoming' && styles.activeTab]}
                        onPress={() => setActiveTab('Upcoming')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'Results' && styles.activeTab]}
                        onPress={() => setActiveTab('Results')}
                    >
                        <Text style={[styles.tabText, activeTab === 'Results' && styles.activeTabText]}>Results</Text>
                    </TouchableOpacity>
                </View>

                {/* Performance Summary Overlay */}
                <View style={styles.summaryCard}>
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryVal}>85.2%</Text>
                        <Text style={styles.summaryLab}>Agg. Grade</Text>
                    </View>
                    <View style={styles.dividerVertical} />
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryVal}>A</Text>
                        <Text style={styles.summaryLab}>Class Rank</Text>
                    </View>
                    <View style={styles.dividerVertical} />
                    <View style={styles.summarySection}>
                        <Text style={styles.summaryVal}>12</Text>
                        <Text style={styles.summaryLab}>Total Exams</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {activeTab === 'Upcoming' ? (
                    <View>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Exam Schedule</Text>
                            <Text style={styles.badge}>Finals 2026</Text>
                        </View>
                        {upcomingExams.map((exam, i) => (
                            <View key={i} style={styles.examCard}>
                                <View style={styles.dateBox}>
                                    <View style={styles.dateCircle}>
                                        <Text style={styles.dateTxt}>{exam.date.split(' ')[1].replace(',', '')}</Text>
                                        <Text style={styles.monthTxt}>{exam.date.split(' ')[0]}</Text>
                                    </View>
                                </View>
                                <View style={styles.examDetails}>
                                    <Text style={styles.subjectTxt}>{exam.subject}</Text>
                                    <Text style={styles.timeTxt}>🕒 {exam.time}</Text>
                                    <View style={styles.metaRow}>
                                        <Text style={styles.metaTxt}>📍 {exam.room}</Text>
                                        <View style={styles.dot} />
                                        <Text style={styles.metaTxt}>{exam.type}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Mid-Term Performance</Text>
                        </View>
                        {results.map((res, i) => (
                            <View key={i} style={styles.resultCard}>
                                <View style={styles.resultMain}>
                                    <Text style={styles.resultSubject}>{res.subject}</Text>
                                    <Text style={styles.resultMarks}>{res.marks}</Text>
                                </View>
                                <View style={styles.resultMeta}>
                                    <View style={[styles.gradeBadge, { borderColor: res.color }]}>
                                        <Text style={[styles.gradeTxt, { color: res.color }]}>{res.grade}</Text>
                                    </View>
                                    <Text style={styles.passTxt}>Passed</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Important Instructions */}
                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>📋 Examination Rules</Text>
                    <Text style={styles.infoDesc}>
                        1. Please arrive 30 minutes before the exam starts.{"\n"}
                        2. Electronic gadgets are strictly prohibited.{"\n"}
                        3. Don't forget to bring your physical admit card.
                    </Text>
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
    header: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 95,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
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
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
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
    },
    tabText: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    activeTabText: {
        color: '#4F46E5',
    },
    summaryCard: {
        position: 'absolute',
        bottom: -45,
        left: 24,
        right: 24,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15 },
            android: { elevation: 12 },
        }),
    },
    summarySection: {
        flex: 1,
        alignItems: 'center',
    },
    summaryVal: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
    },
    summaryLab: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '700',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    dividerVertical: {
        width: 1,
        height: 40,
        backgroundColor: '#F1F5F9',
    },
    scrollBody: {
        paddingTop: 85,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#1E293B',
    },
    badge: {
        fontSize: 10,
        fontWeight: '800',
        color: '#4F46E5',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    examCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    dateBox: {
        marginRight: 16,
    },
    dateCircle: {
        width: 65,
        height: 75,
        backgroundColor: '#1E293B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateTxt: {
        fontSize: 22,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    monthTxt: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginTop: 2,
    },
    examDetails: {
        flex: 1,
    },
    subjectTxt: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 4,
    },
    timeTxt: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
        marginBottom: 8,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaTxt: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#CBD5E1',
        marginHorizontal: 8,
    },
    resultCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    resultMain: {
        flex: 1,
    },
    resultSubject: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    resultMarks: {
        fontSize: 13,
        color: '#64748B',
        marginTop: 4,
        fontWeight: '600',
    },
    resultMeta: {
        alignItems: 'flex-end',
    },
    gradeBadge: {
        borderWidth: 2,
        width: 38,
        height: 38,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    gradeTxt: {
        fontSize: 16,
        fontWeight: '900',
    },
    passTxt: {
        fontSize: 10,
        fontWeight: '800',
        color: '#10B981',
        textTransform: 'uppercase',
    },
    infoCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginTop: 15,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 12,
    },
    infoDesc: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 22,
        fontWeight: '500',
    },
});

export default ExamsScreen;
