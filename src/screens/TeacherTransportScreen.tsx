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

const TeacherTransportScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Commute' | 'Parking' | 'Benefits'>('Commute');

    const commuteDetails = {
        mode: 'Personal Vehicle',
        vehicleType: 'Car',
        vehicleNumber: 'IL-45-AB-1234',
        vehicleModel: 'Honda Civic 2020',
        color: 'Silver',
        distance: '12.5 km',
        avgTime: '25 minutes',
        preferredRoute: 'Via Highway 55',
    };

    const parkingInfo = {
        parkingSlot: 'Faculty Block A - Slot 23',
        parkingPass: 'FP-2024-045',
        validUntil: 'June 30, 2025',
        parkingType: 'Reserved',
        location: 'Near Main Building',
    };

    const transportBenefits = [
        {
            title: 'Fuel Allowance',
            amount: '$150/month',
            status: 'Active',
            desc: 'Monthly fuel reimbursement for commute',
            icon: '⛽',
            color: '#10B981'
        },
        {
            title: 'Parking Fee Waiver',
            amount: '$50/month',
            status: 'Active',
            desc: 'Free reserved parking on campus',
            icon: '🅿️',
            color: '#4F46E5'
        },
        {
            title: 'Vehicle Maintenance',
            amount: '$200/year',
            status: 'Active',
            desc: 'Annual vehicle maintenance support',
            icon: '🔧',
            color: '#F59E0B'
        },
    ];

    const travelHistory = [
        { date: 'Dec 24, 2025', checkIn: '07:55 AM', checkOut: '04:30 PM', distance: '12.5 km' },
        { date: 'Dec 23, 2025', checkIn: '07:52 AM', checkOut: '04:25 PM', distance: '12.5 km' },
        { date: 'Dec 22, 2025', checkIn: '08:05 AM', checkOut: '04:35 PM', distance: '12.5 km' },
    ];

    const carpoolMembers = [
        { name: 'Dr. James Miller', department: 'Physics', route: 'Highway 55' },
        { name: 'Ms. Emily Davis', department: 'Chemistry', route: 'Highway 55' },
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
                    <Text style={styles.headerTitle}>Transport Details</Text>
                    <TouchableOpacity style={styles.qrBtn}>
                        <Text style={styles.qrIcon}>📱</Text>
                    </TouchableOpacity>
                </View>

                {/* Quick Stats */}
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🚗</Text>
                        <Text style={styles.statValue}>{commuteDetails.distance}</Text>
                        <Text style={styles.statLabel}>Daily Distance</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>⏱️</Text>
                        <Text style={styles.statValue}>{commuteDetails.avgTime}</Text>
                        <Text style={styles.statLabel}>Avg. Time</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🅿️</Text>
                        <Text style={styles.statValue}>A-23</Text>
                        <Text style={styles.statLabel}>Parking Slot</Text>
                    </View>
                </View>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {(['Commute', 'Parking', 'Benefits'] as const).map((tab) => (
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
                {activeTab === 'Commute' && (
                    <>
                        {/* Vehicle Information */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Vehicle Information</Text>
                            <TouchableOpacity>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.vehicleCard}>
                            <View style={styles.vehicleHeader}>
                                <View style={styles.vehicleIconBox}>
                                    <Text style={styles.vehicleIcon}>🚗</Text>
                                </View>
                                <View style={styles.vehicleInfo}>
                                    <Text style={styles.vehicleModel}>{commuteDetails.vehicleModel}</Text>
                                    <Text style={styles.vehicleNumber}>{commuteDetails.vehicleNumber}</Text>
                                </View>
                                <View style={styles.colorBadge}>
                                    <Text style={styles.colorText}>{commuteDetails.color}</Text>
                                </View>
                            </View>

                            <View style={styles.vehicleDetails}>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Vehicle Type</Text>
                                    <Text style={styles.detailValue}>{commuteDetails.vehicleType}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Preferred Route</Text>
                                    <Text style={styles.detailValue}>{commuteDetails.preferredRoute}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Commute Mode</Text>
                                    <Text style={styles.detailValue}>{commuteDetails.mode}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Travel History */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Recent Travel Log</Text>
                        </View>

                        {travelHistory.map((log, i) => (
                            <View key={i} style={styles.travelCard}>
                                <View style={styles.travelDate}>
                                    <Text style={styles.travelDateText}>{log.date}</Text>
                                </View>
                                <View style={styles.travelDetails}>
                                    <View style={styles.travelRow}>
                                        <Text style={styles.travelLabel}>Check-in</Text>
                                        <Text style={styles.travelValue}>{log.checkIn}</Text>
                                    </View>
                                    <View style={styles.travelRow}>
                                        <Text style={styles.travelLabel}>Check-out</Text>
                                        <Text style={styles.travelValue}>{log.checkOut}</Text>
                                    </View>
                                    <View style={styles.travelRow}>
                                        <Text style={styles.travelLabel}>Distance</Text>
                                        <Text style={styles.travelValue}>{log.distance}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        {/* Carpool Section */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Carpool Members</Text>
                            <TouchableOpacity>
                                <Text style={styles.joinText}>+ Join</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.carpoolSection}>
                            {carpoolMembers.map((member, i) => (
                                <View key={i} style={styles.carpoolCard}>
                                    <View style={styles.carpoolAvatar}>
                                        <Text style={styles.carpoolAvatarText}>{member.name.split(' ').map(n => n[0]).join('')}</Text>
                                    </View>
                                    <View style={styles.carpoolInfo}>
                                        <Text style={styles.carpoolName}>{member.name}</Text>
                                        <Text style={styles.carpoolDept}>{member.department}</Text>
                                        <Text style={styles.carpoolRoute}>📍 {member.route}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </>
                )}

                {activeTab === 'Parking' && (
                    <>
                        {/* Parking Pass */}
                        <View style={styles.passCard}>
                            <View style={styles.passHeader}>
                                <Text style={styles.passTitle}>Faculty Parking Pass</Text>
                                <View style={styles.activeBadge}>
                                    <Text style={styles.activeBadgeText}>ACTIVE</Text>
                                </View>
                            </View>

                            <View style={styles.passQR}>
                                <View style={styles.qrPlaceholder}>
                                    <Text style={styles.qrPlaceholderText}>QR CODE</Text>
                                    <Text style={styles.qrCode}>█████</Text>
                                </View>
                            </View>

                            <View style={styles.passDetails}>
                                <View style={styles.passRow}>
                                    <Text style={styles.passLabel}>Pass Number</Text>
                                    <Text style={styles.passValue}>{parkingInfo.parkingPass}</Text>
                                </View>
                                <View style={styles.passRow}>
                                    <Text style={styles.passLabel}>Parking Slot</Text>
                                    <Text style={styles.passValue}>{parkingInfo.parkingSlot}</Text>
                                </View>
                                <View style={styles.passRow}>
                                    <Text style={styles.passLabel}>Location</Text>
                                    <Text style={styles.passValue}>{parkingInfo.location}</Text>
                                </View>
                                <View style={styles.passRow}>
                                    <Text style={styles.passLabel}>Valid Until</Text>
                                    <Text style={styles.passValue}>{parkingInfo.validUntil}</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.downloadPassBtn}>
                                <Text style={styles.downloadPassIcon}>📥</Text>
                                <Text style={styles.downloadPassText}>Download Digital Pass</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Parking Map */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Parking Location</Text>
                        </View>

                        <View style={styles.mapCard}>
                            <View style={styles.mapPlaceholder}>
                                <Text style={styles.mapIcon}>🗺️</Text>
                                <Text style={styles.mapText}>Faculty Block A - Slot 23</Text>
                                <Text style={styles.mapSubtext}>Near Main Building Entrance</Text>
                            </View>
                            <TouchableOpacity style={styles.directionsBtn}>
                                <Text style={styles.directionsBtnText}>Get Directions</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {activeTab === 'Benefits' && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Active Benefits</Text>
                        </View>

                        {transportBenefits.map((benefit, i) => (
                            <View key={i} style={[styles.benefitCard, { borderLeftColor: benefit.color }]}>
                                <View style={[styles.benefitIconBox, { backgroundColor: benefit.color + '15' }]}>
                                    <Text style={styles.benefitIcon}>{benefit.icon}</Text>
                                </View>
                                <View style={styles.benefitContent}>
                                    <View style={styles.benefitHeader}>
                                        <Text style={styles.benefitTitle}>{benefit.title}</Text>
                                        <View style={[styles.statusBadge, { backgroundColor: benefit.color + '15' }]}>
                                            <Text style={[styles.statusText, { color: benefit.color }]}>{benefit.status}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.benefitDesc}>{benefit.desc}</Text>
                                    <Text style={styles.benefitAmount}>{benefit.amount}</Text>
                                </View>
                            </View>
                        ))}

                        {/* Claim History */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Recent Claims</Text>
                        </View>

                        <View style={styles.claimCard}>
                            <View style={styles.claimRow}>
                                <View style={styles.claimInfo}>
                                    <Text style={styles.claimTitle}>Fuel Allowance - December</Text>
                                    <Text style={styles.claimDate}>Claimed on Dec 01, 2025</Text>
                                </View>
                                <View style={styles.claimAmount}>
                                    <Text style={styles.claimValue}>$150</Text>
                                    <View style={styles.paidBadge}>
                                        <Text style={styles.paidText}>PAID</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.newClaimBtn}>
                            <Text style={styles.newClaimIcon}>➕</Text>
                            <Text style={styles.newClaimText}>Submit New Claim</Text>
                        </TouchableOpacity>
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
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    qrBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrIcon: {
        fontSize: 18,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statBox: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    statIcon: {
        fontSize: 20,
        marginBottom: 6,
    },
    statValue: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    statLabel: {
        fontSize: 9,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '600',
        marginTop: 2,
        textAlign: 'center',
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
    editText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    joinText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#10B981',
    },
    vehicleCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    vehicleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    vehicleIconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    vehicleIcon: {
        fontSize: 24,
    },
    vehicleInfo: {
        flex: 1,
    },
    vehicleModel: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    vehicleNumber: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '700',
        marginTop: 2,
    },
    colorBadge: {
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    colorText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#475569',
    },
    vehicleDetails: {},
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    detailLabel: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    detailValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '700',
    },
    travelCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    travelDate: {
        marginBottom: 12,
    },
    travelDateText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#1E293B',
    },
    travelDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    travelRow: {
        flex: 1,
    },
    travelLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginBottom: 4,
    },
    travelValue: {
        fontSize: 13,
        color: '#1E293B',
        fontWeight: '700',
    },
    carpoolSection: {
        marginBottom: 20,
    },
    carpoolCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        alignItems: 'center',
    },
    carpoolAvatar: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#F0FDF4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    carpoolAvatarText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#10B981',
    },
    carpoolInfo: {
        flex: 1,
    },
    carpoolName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    carpoolDept: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    carpoolRoute: {
        fontSize: 11,
        color: '#64748B',
        marginTop: 4,
    },
    passCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 3,
    },
    passHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    passTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    activeBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    activeBadgeText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#16A34A',
    },
    passQR: {
        alignItems: 'center',
        marginBottom: 20,
    },
    qrPlaceholder: {
        width: 150,
        height: 150,
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E2E8F0',
    },
    qrPlaceholderText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#94A3B8',
        marginBottom: 8,
    },
    qrCode: {
        fontSize: 24,
        color: '#1E293B',
    },
    passDetails: {
        marginBottom: 20,
    },
    passRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    passLabel: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    passValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '700',
    },
    downloadPassBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F46E5',
        paddingVertical: 14,
        borderRadius: 16,
    },
    downloadPassIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    downloadPassText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '800',
    },
    mapCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    mapPlaceholder: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 40,
        alignItems: 'center',
        marginBottom: 16,
    },
    mapIcon: {
        fontSize: 40,
        marginBottom: 12,
    },
    mapText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 4,
    },
    mapSubtext: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
    },
    directionsBtn: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    directionsBtnText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#4F46E5',
    },
    benefitCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        borderLeftWidth: 4,
        flexDirection: 'row',
    },
    benefitIconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    benefitIcon: {
        fontSize: 24,
    },
    benefitContent: {
        flex: 1,
    },
    benefitHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    benefitTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        flex: 1,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 9,
        fontWeight: '900',
    },
    benefitDesc: {
        fontSize: 13,
        color: '#64748B',
        marginBottom: 8,
        lineHeight: 18,
    },
    benefitAmount: {
        fontSize: 15,
        fontWeight: '900',
        color: '#1E293B',
    },
    claimCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    claimRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    claimInfo: {
        flex: 1,
    },
    claimTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 4,
    },
    claimDate: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    claimAmount: {
        alignItems: 'flex-end',
    },
    claimValue: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
        marginBottom: 6,
    },
    paidBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    paidText: {
        fontSize: 9,
        fontWeight: '900',
        color: '#16A34A',
    },
    newClaimBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9',
        paddingVertical: 16,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#E2E8F0',
        borderStyle: 'dashed',
    },
    newClaimIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    newClaimText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#475569',
    },
});

export default TeacherTransportScreen;
