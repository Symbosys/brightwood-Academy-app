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

const ParentTrackScreen = ({ navigation }: any) => {
    const [isLive, setIsLive] = useState(true);

    const busInfo = {
        busNumber: 'Bus 45',
        route: 'Route 101 - North Zone',
        driver: 'Mr. Robert Johnson',
        driverPhone: '+1 (555) 234-5678',
        attendant: 'Ms. Lisa Brown',
        attendantPhone: '+1 (555) 345-6789',
        capacity: '40 Students',
        currentOccupancy: '32 Students',
    };

    const studentInfo = {
        name: 'Emma Thompson',
        grade: 'Grade 7-B',
        rollNumber: 'BW-7245',
        pickupPoint: 'Oak Street Junction',
        dropPoint: 'Oak Street Junction',
        pickupTime: '07:30 AM',
        dropTime: '03:45 PM',
        seatNumber: '12A',
    };

    const busStatus = {
        currentLocation: 'Maple Avenue, 2.5 km away',
        estimatedArrival: '5 minutes',
        speed: '35 km/h',
        nextStop: 'Pine Street Corner',
        studentsOnBoard: 32,
        status: 'On Route',
        lastUpdated: '2 mins ago',
    };

    const upcomingStops = [
        { name: 'Pine Street Corner', eta: '2 mins', distance: '0.8 km', students: 3, status: 'upcoming' },
        { name: 'Oak Street Junction', eta: '5 mins', distance: '2.5 km', students: 5, status: 'upcoming', isStudentStop: true },
        { name: 'Elm Avenue', eta: '8 mins', distance: '3.8 km', students: 4, status: 'upcoming' },
        { name: 'School Main Gate', eta: '15 mins', distance: '6.2 km', students: 20, status: 'final' },
    ];

    const recentUpdates = [
        { time: '07:25 AM', message: 'Bus departed from depot', icon: '🚌', color: '#10B981' },
        { time: '07:28 AM', message: 'Picked up 8 students at Cedar Lane', icon: '👥', color: '#4F46E5' },
        { time: '07:32 AM', message: 'Currently at Maple Avenue', icon: '📍', color: '#F59E0B' },
    ];

    const safetyFeatures = [
        { name: 'GPS Tracking', status: 'Active', icon: '🛰️' },
        { name: 'Speed Monitor', status: 'Normal', icon: '⚡' },
        { name: 'CCTV Camera', status: 'Recording', icon: '📹' },
        { name: 'Emergency Alert', status: 'Ready', icon: '🚨' },
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
                    <Text style={styles.headerTitle}>Track Bus</Text>
                    <TouchableOpacity style={styles.refreshBtn}>
                        <Text style={styles.refreshIcon}>🔄</Text>
                    </TouchableOpacity>
                </View>

                {/* Live Status Banner */}
                <View style={styles.liveStatusBanner}>
                    <View style={styles.liveIndicator}>
                        <View style={styles.liveDot} />
                        <Text style={styles.liveText}>LIVE TRACKING</Text>
                    </View>
                    <Text style={styles.lastUpdate}>Updated {busStatus.lastUpdated}</Text>
                </View>
            </View>

            {/* Map Placeholder */}
            <View style={styles.mapContainer}>
                <View style={styles.mapPlaceholder}>
                    <Text style={styles.mapIcon}>🗺️</Text>
                    <Text style={styles.mapTitle}>Live Bus Location</Text>
                    <View style={styles.locationInfo}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.locationText}>{busStatus.currentLocation}</Text>
                    </View>
                    <View style={styles.etaBadge}>
                        <Text style={styles.etaText}>ETA: {busStatus.estimatedArrival}</Text>
                    </View>
                </View>

                {/* Quick Stats Overlay */}
                <View style={styles.quickStats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statIcon}>🚌</Text>
                        <Text style={styles.statValue}>{busInfo.busNumber}</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statIcon}>⚡</Text>
                        <Text style={styles.statValue}>{busStatus.speed}</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statIcon}>👥</Text>
                        <Text style={styles.statValue}>{busStatus.studentsOnBoard}</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Student Info Card */}
                <View style={styles.studentCard}>
                    <View style={styles.studentHeader}>
                        <View style={styles.studentAvatar}>
                            <Text style={styles.studentAvatarText}>ET</Text>
                        </View>
                        <View style={styles.studentInfo}>
                            <Text style={styles.studentName}>{studentInfo.name}</Text>
                            <Text style={styles.studentMeta}>{studentInfo.grade} • Seat {studentInfo.seatNumber}</Text>
                        </View>
                        <View style={styles.onBoardBadge}>
                            <Text style={styles.onBoardText}>On Board</Text>
                        </View>
                    </View>
                    <View style={styles.studentDetails}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailIcon}>📍</Text>
                            <View style={styles.detailInfo}>
                                <Text style={styles.detailLabel}>Pickup Point</Text>
                                <Text style={styles.detailValue}>{studentInfo.pickupPoint}</Text>
                            </View>
                            <Text style={styles.detailTime}>{studentInfo.pickupTime}</Text>
                        </View>
                    </View>
                </View>

                {/* Upcoming Stops */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Upcoming Stops</Text>
                    <Text style={styles.stopsCount}>{upcomingStops.length} stops</Text>
                </View>

                {upcomingStops.map((stop, i) => (
                    <View
                        key={i}
                        style={[
                            styles.stopCard,
                            stop.isStudentStop && styles.studentStopCard
                        ]}
                    >
                        <View style={styles.stopIndicator}>
                            <View style={[
                                styles.stopDot,
                                stop.status === 'final' && styles.finalStopDot,
                                stop.isStudentStop && styles.studentStopDot
                            ]} />
                            {i < upcomingStops.length - 1 && <View style={styles.stopLine} />}
                        </View>
                        <View style={styles.stopContent}>
                            <View style={styles.stopHeader}>
                                <Text style={styles.stopName}>{stop.name}</Text>
                                {stop.isStudentStop && (
                                    <View style={styles.yourStopBadge}>
                                        <Text style={styles.yourStopText}>YOUR STOP</Text>
                                    </View>
                                )}
                            </View>
                            <View style={styles.stopMeta}>
                                <View style={styles.stopMetaItem}>
                                    <Text style={styles.stopMetaIcon}>⏱️</Text>
                                    <Text style={styles.stopMetaText}>{stop.eta}</Text>
                                </View>
                                <View style={styles.stopMetaItem}>
                                    <Text style={styles.stopMetaIcon}>📏</Text>
                                    <Text style={styles.stopMetaText}>{stop.distance}</Text>
                                </View>
                                <View style={styles.stopMetaItem}>
                                    <Text style={styles.stopMetaIcon}>👥</Text>
                                    <Text style={styles.stopMetaText}>{stop.students} students</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Bus Information */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Bus Information</Text>
                </View>

                <View style={styles.busInfoCard}>
                    <View style={styles.busInfoRow}>
                        <Text style={styles.busInfoLabel}>Bus Number</Text>
                        <Text style={styles.busInfoValue}>{busInfo.busNumber}</Text>
                    </View>
                    <View style={styles.busInfoRow}>
                        <Text style={styles.busInfoLabel}>Route</Text>
                        <Text style={styles.busInfoValue}>{busInfo.route}</Text>
                    </View>
                    <View style={styles.busInfoRow}>
                        <Text style={styles.busInfoLabel}>Driver</Text>
                        <View style={styles.contactInfo}>
                            <Text style={styles.busInfoValue}>{busInfo.driver}</Text>
                            <TouchableOpacity style={styles.callBtn}>
                                <Text style={styles.callBtnText}>📞 Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.busInfoRow}>
                        <Text style={styles.busInfoLabel}>Attendant</Text>
                        <View style={styles.contactInfo}>
                            <Text style={styles.busInfoValue}>{busInfo.attendant}</Text>
                            <TouchableOpacity style={styles.callBtn}>
                                <Text style={styles.callBtnText}>📞 Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Safety Features */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Safety Features</Text>
                </View>

                <View style={styles.safetyGrid}>
                    {safetyFeatures.map((feature, i) => (
                        <View key={i} style={styles.safetyCard}>
                            <Text style={styles.safetyIcon}>{feature.icon}</Text>
                            <Text style={styles.safetyName}>{feature.name}</Text>
                            <View style={styles.safetyStatusBadge}>
                                <Text style={styles.safetyStatus}>{feature.status}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Recent Updates */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Updates</Text>
                </View>

                <View style={styles.updatesSection}>
                    {recentUpdates.map((update, i) => (
                        <View key={i} style={styles.updateCard}>
                            <View style={[styles.updateIcon, { backgroundColor: update.color + '15' }]}>
                                <Text style={styles.updateIconText}>{update.icon}</Text>
                            </View>
                            <View style={styles.updateContent}>
                                <Text style={styles.updateMessage}>{update.message}</Text>
                                <Text style={styles.updateTime}>{update.time}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Emergency Contact */}
                <TouchableOpacity style={styles.emergencyBtn}>
                    <Text style={styles.emergencyIcon}>🚨</Text>
                    <Text style={styles.emergencyText}>Report Emergency</Text>
                </TouchableOpacity>

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
        paddingBottom: 12,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
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
    refreshBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshIcon: {
        fontSize: 18,
    },
    liveStatusBanner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(16, 185, 129, 0.3)',
    },
    liveIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    liveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#10B981',
        marginRight: 8,
    },
    liveText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    lastUpdate: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '600',
    },
    mapContainer: {
        position: 'relative',
    },
    mapPlaceholder: {
        height: 320,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        paddingHorizontal: 24,
    },
    mapIcon: {
        fontSize: 60,
        marginBottom: 16,
    },
    mapTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 16,
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        marginBottom: 16,
        elevation: 2,
    },
    locationIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    locationText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#475569',
    },
    etaBadge: {
        backgroundColor: '#10B981',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 20,
    },
    etaText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    quickStats: {
        position: 'absolute',
        bottom: 20,
        left: 24,
        right: 24,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statIcon: {
        fontSize: 20,
        marginBottom: 6,
    },
    statValue: {
        fontSize: 13,
        fontWeight: '800',
        color: '#1E293B',
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#F1F5F9',
        marginHorizontal: 8,
    },
    scrollBody: {
        paddingTop: 60,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    studentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    studentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    studentAvatar: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    studentAvatarText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#4F46E5',
    },
    studentInfo: {
        flex: 1,
    },
    studentName: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    studentMeta: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    onBoardBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    onBoardText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#16A34A',
    },
    studentDetails: {},
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailIcon: {
        fontSize: 18,
        marginRight: 12,
    },
    detailInfo: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '700',
    },
    detailTime: {
        fontSize: 13,
        color: '#4F46E5',
        fontWeight: '800',
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
    stopsCount: {
        fontSize: 12,
        fontWeight: '700',
        color: '#4F46E5',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    stopCard: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    studentStopCard: {
        backgroundColor: '#FFFBEB',
        borderRadius: 20,
        padding: 16,
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 32,
        borderWidth: 2,
        borderColor: '#FEF3C7',
    },
    stopIndicator: {
        alignItems: 'center',
        marginRight: 16,
    },
    stopDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#94A3B8',
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    studentStopDot: {
        backgroundColor: '#F59E0B',
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    finalStopDot: {
        backgroundColor: '#10B981',
    },
    stopLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#E2E8F0',
        marginTop: 4,
        minHeight: 40,
    },
    stopContent: {
        flex: 1,
    },
    stopHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    stopName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        flex: 1,
    },
    yourStopBadge: {
        backgroundColor: '#F59E0B',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    yourStopText: {
        fontSize: 9,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    stopMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    stopMetaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginTop: 4,
    },
    stopMetaIcon: {
        fontSize: 12,
        marginRight: 4,
    },
    stopMetaText: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    busInfoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    busInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    busInfoLabel: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '600',
    },
    busInfoValue: {
        fontSize: 15,
        color: '#1E293B',
        fontWeight: '700',
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callBtn: {
        backgroundColor: '#10B981',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
        marginLeft: 12,
    },
    callBtnText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    safetyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    safetyCard: {
        width: (width - 48 - 15) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    safetyIcon: {
        fontSize: 28,
        marginBottom: 8,
    },
    safetyName: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 8,
    },
    safetyStatusBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    safetyStatus: {
        fontSize: 10,
        fontWeight: '900',
        color: '#16A34A',
    },
    updatesSection: {
        marginBottom: 20,
    },
    updateCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    updateIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    updateIconText: {
        fontSize: 18,
    },
    updateContent: {
        flex: 1,
    },
    updateMessage: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 4,
    },
    updateTime: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    emergencyBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEE2E2',
        paddingVertical: 16,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#FECACA',
    },
    emergencyIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    emergencyText: {
        fontSize: 15,
        fontWeight: '900',
        color: '#DC2626',
    },
});

export default ParentTrackScreen;
