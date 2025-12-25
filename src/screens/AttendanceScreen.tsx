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

const AttendanceScreen = ({ navigation }: any) => {
    const stats = [
        { label: 'Total Days', value: '180', color: '#6366F1' },
        { label: 'Present', value: '168', color: '#10B981' },
        { label: 'Absent', value: '08', color: '#EF4444' },
        { label: 'Leave', value: '04', color: '#F59E0B' },
    ];

    const currentMonthLog = [
        { date: 'Dec 24, 2025', day: 'Wednesday', status: 'Present', time: '07:55 AM', color: '#10B981' },
        { date: 'Dec 23, 2025', day: 'Tuesday', status: 'Present', time: '07:52 AM', color: '#10B981' },
        { date: 'Dec 22, 2025', day: 'Monday', status: 'Late', time: '08:15 AM', color: '#F59E0B' },
        { date: 'Dec 21, 2025', day: 'Sunday', status: 'Holiday', time: '--', color: '#94A3B8' },
        { date: 'Dec 20, 2025', day: 'Saturday', status: 'Absent', time: '--', color: '#EF4444' },
        { date: 'Dec 19, 2025', day: 'Friday', status: 'Present', time: '07:58 AM', color: '#10B981' },
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
                    <Text style={styles.headerTitle}>Attendance</Text>
                    <TouchableOpacity style={styles.leaveBtn}>
                        <Text style={styles.leaveBtnTxt}>Apply Leave</Text>
                    </TouchableOpacity>
                </View>

                {/* Percentage Card */}
                <View style={styles.summaryBox}>
                    <View style={styles.circleProgress}>
                        <Text style={styles.percentageTxt}>94%</Text>
                        <Text style={styles.subText}>Average</Text>
                    </View>
                    <View style={styles.summaryDetails}>
                        <Text style={styles.summaryTitle}>Attendance Summary</Text>
                        <Text style={styles.summaryDesc}>Academic Year 2024-25</Text>
                        <View style={styles.statusRow}>
                            <View style={styles.statusDotLine}>
                                <View style={[styles.dot, { backgroundColor: '#10B981' }]} />
                                <Text style={styles.dotTxt}>Present: 168</Text>
                            </View>
                            <View style={styles.statusDotLine}>
                                <View style={[styles.dot, { backgroundColor: '#EF4444' }]} />
                                <Text style={styles.dotTxt}>Absent: 08</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Stats Row */}
                <View style={styles.statsRow}>
                    {stats.map((item, i) => (
                        <View key={i} style={styles.statCard}>
                            <Text style={[styles.statValue, { color: item.color }]}>{item.value}</Text>
                            <Text style={styles.statLabel}>{item.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Monthly Log Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>December 2025</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewHistory}>View History</Text>
                    </TouchableOpacity>
                </View>

                {/* Log List */}
                <View style={styles.logList}>
                    {currentMonthLog.map((log, i) => (
                        <View key={i} style={styles.logCard}>
                            <View style={[styles.statusIndicator, { backgroundColor: log.color }]} />
                            <View style={styles.logInfo}>
                                <Text style={styles.logDate}>{log.date}</Text>
                                <Text style={styles.logDay}>{log.day}</Text>
                            </View>
                            <View style={styles.logTimeBox}>
                                <Text style={[styles.logStatus, { color: log.color }]}>{log.status}</Text>
                                <Text style={styles.logTime}>{log.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* School Policy Note */}
                <View style={styles.policyCard}>
                    <Text style={styles.policyTitle}>⚠️ Minimum Attendance Rule</Text>
                    <Text style={styles.policyDesc}>75% attendance is mandatory to appear for the annual examinations. Please contact your coordinator for discrepancies.</Text>
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
        paddingBottom: 85,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: 10,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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
    leaveBtn: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    leaveBtnTxt: {
        fontSize: 12,
        fontWeight: '800',
        color: '#4F46E5',
    },
    summaryBox: {
        position: 'absolute',
        bottom: -50,
        left: 24,
        right: 24,
        height: 110,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15 },
            android: { elevation: 12 },
        }),
    },
    circleProgress: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 6,
        borderColor: '#EEF2FF',
        borderTopColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentageTxt: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
    },
    subText: {
        fontSize: 8,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    summaryDetails: {
        flex: 1,
        marginLeft: 20,
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    summaryDesc: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    statusRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    statusDotLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
    },
    dotTxt: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748B',
    },
    scrollBody: {
        paddingTop: 85,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
    },
    statCard: {
        width: (width - 48 - 30) / 4,
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statValue: {
        fontSize: 16,
        fontWeight: '900',
    },
    statLabel: {
        fontSize: 9,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginTop: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    viewHistory: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    logList: {
        marginBottom: 28,
    },
    logCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statusIndicator: {
        width: 4,
        height: 40,
        borderRadius: 2,
        marginRight: 16,
    },
    logInfo: {
        flex: 1,
    },
    logDate: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    logDay: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    logTimeBox: {
        alignItems: 'flex-end',
    },
    logStatus: {
        fontSize: 13,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    logTime: {
        fontSize: 11,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    policyCard: {
        backgroundColor: '#FFFBEB',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#FEF3C7',
    },
    policyTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#92400E',
        marginBottom: 8,
    },
    policyDesc: {
        fontSize: 12,
        color: '#B45309',
        lineHeight: 18,
        fontWeight: '500',
    },
});

export default AttendanceScreen;
