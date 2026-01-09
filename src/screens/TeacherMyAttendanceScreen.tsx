import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Animated,
    Platform,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const TeacherMyAttendanceScreen = ({ navigation }: any) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    // Sample Data
    const attendanceHistory = [
        { date: '24', day: 'Wed', status: 'Present', checkIn: '08:55 AM', checkOut: '04:10 PM', duration: '7h 15m' },
        { date: '23', day: 'Tue', status: 'Present', checkIn: '09:00 AM', checkOut: '04:05 PM', duration: '7h 05m' },
        { date: '22', day: 'Mon', status: 'Late', checkIn: '09:30 AM', checkOut: '04:00 PM', duration: '6h 30m' },
        { date: '20', day: 'Sat', status: 'Halfr', checkIn: '09:00 AM', checkOut: '01:00 PM', duration: '4h 00m' },
        { date: '19', day: 'Fri', status: 'Absent', checkIn: '--:--', checkOut: '--:--', duration: '0h 00m' },
        { date: '18', day: 'Thu', status: 'Present', checkIn: '08:50 AM', checkOut: '04:15 PM', duration: '7h 25m' },
    ];

    const stats = {
        present: 18,
        absent: 2,
        late: 3,
        holiday: 4,
    };

    // Animation Interpolations
    const headerBgOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const stickyTitleOpacity = scrollY.interpolate({
        inputRange: [50, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const mainHeaderOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Present': return { bg: '#DEF7EC', text: '#03543F' };
            case 'Absent': return { bg: '#FDE8E8', text: '#9B1C1C' };
            case 'Late': return { bg: '#FFFBEB', text: '#B45309' };
            case 'Half': return { bg: '#E0F2FE', text: '#075985' };
            default: return { bg: '#F3F4F6', text: '#374151' };
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Sticky Header */}
            <View style={styles.stickyHeaderContainer}>
                <Animated.View style={[styles.stickyHeaderBg, { opacity: headerBgOpacity }]} />
                <View style={styles.navRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Animated.Text style={[styles.stickyTitle, { opacity: stickyTitleOpacity }]}>My Attendance</Animated.Text>
                    <View style={{ width: 40 }} />
                </View>
            </View>

            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {/* Main Blue Header (Scrolls Away) */}
                <View style={styles.headerArea}>
                    <View style={{ height: 60 }} />
                    <Animated.View style={{ opacity: mainHeaderOpacity }}>
                        <Text style={styles.pageTitle}>Attendance History</Text>
                        <Text style={styles.pageSub}>Dec 2025 • General Shift</Text>
                    </Animated.View>

                    {/* Stats Overlap */}
                    <View style={styles.statsOverlap}>
                        <View style={styles.statItem}>
                            <Text style={[styles.statNumber, { color: '#10B981' }]}>{stats.present}</Text>
                            <Text style={styles.statLabel}>Present</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={[styles.statNumber, { color: '#EF4444' }]}>{stats.absent}</Text>
                            <Text style={styles.statLabel}>Absent</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={[styles.statNumber, { color: '#F59E0B' }]}>{stats.late}</Text>
                            <Text style={styles.statLabel}>Late</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={[styles.statNumber, { color: '#6366F1' }]}>{stats.holiday}</Text>
                            <Text style={styles.statLabel}>Holiday</Text>
                        </View>
                    </View>
                </View>

                {/* Month Selector */}
                <View style={[styles.monthSelector, { marginTop: 60 }]}>
                    <TouchableOpacity style={styles.monthBtn}>
                        <Text style={styles.monthArrow}>‹</Text>
                    </TouchableOpacity>
                    <Text style={styles.currentMonth}>December 2025</Text>
                    <TouchableOpacity style={styles.monthBtn}>
                        <Text style={styles.monthArrow}>›</Text>
                    </TouchableOpacity>
                </View>

                {/* History List */}
                <View style={styles.historyList}>
                    {attendanceHistory.map((item, i) => {
                        const colors = getStatusColor(item.status);
                        return (
                            <View key={i} style={styles.historyCard}>
                                <View style={styles.dateBox}>
                                    <Text style={styles.dateDay}>{item.date}</Text>
                                    <Text style={styles.dateMonth}>{item.day}</Text>
                                </View>

                                <View style={styles.historyContent}>
                                    <View style={styles.historyHeader}>
                                        <View style={[styles.statusBadge, { backgroundColor: colors.bg }]}>
                                            <Text style={[styles.statusText, { color: colors.text }]}>{item.status}</Text>
                                        </View>
                                        <Text style={styles.duration}>{item.duration}</Text>
                                    </View>

                                    <View style={styles.timeRow}>
                                        <Text style={styles.timeLabel}>In: <Text style={styles.timeVal}>{item.checkIn}</Text></Text>
                                        <Text style={styles.dash}>-</Text>
                                        <Text style={styles.timeLabel}>Out: <Text style={styles.timeVal}>{item.checkOut}</Text></Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>

                <TouchableOpacity style={styles.downloadBtn}>
                    <Text style={styles.downloadText}>Download Monthly Report (PDF)</Text>
                </TouchableOpacity>

                <View style={{ height: 40 }} />
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    stickyHeaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 60 : 90,
        zIndex: 100,
        justifyContent: 'flex-end',
        paddingBottom: 15,
        paddingHorizontal: 24,
    },
    stickyHeaderBg: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#4F46E5',
    },
    navRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stickyTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    headerArea: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 60,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    pageSub: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '600',
    },
    statsOverlap: {
        position: 'absolute',
        bottom: -35,
        left: 24,
        right: 24,
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 10,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: '900',
    },
    statLabel: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '700',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    statDivider: {
        width: 1,
        height: '60%',
        backgroundColor: '#F1F5F9',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    monthBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    monthArrow: {
        fontSize: 18,
        color: '#64748B',
    },
    currentMonth: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    historyList: {
        paddingHorizontal: 24,
    },
    historyCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    dateBox: {
        backgroundColor: '#F8FAFC',
        borderRadius: 14,
        width: 50,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    dateDay: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    dateMonth: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748B',
        textTransform: 'uppercase',
    },
    historyContent: {
        flex: 1,
        justifyContent: 'center',
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '800',
    },
    duration: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeLabel: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    timeVal: {
        color: '#1E293B',
        fontWeight: '700',
    },
    dash: {
        marginHorizontal: 8,
        color: '#CBD5E1',
    },
    downloadBtn: {
        marginHorizontal: 24,
        marginTop: 10,
        backgroundColor: '#4F46E5',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    downloadText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '800',
    }
});

export default TeacherMyAttendanceScreen;
