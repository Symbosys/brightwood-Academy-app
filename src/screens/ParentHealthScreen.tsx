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
    Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const ParentHealthScreen = ({ navigation }: any) => {
    const healthMetrics = [
        { label: 'Blood Group', value: 'B+', icon: '🩸', color: '#EF4444' },
        { label: 'Height', value: '142 cm', icon: '📏', color: '#10B981' },
        { label: 'Weight', value: '38 kg', icon: '⚖️', color: '#3B82F6' },
        { label: 'Vision', value: '6/6', icon: '👁️', color: '#8B5CF6' },
    ];

    const medicalRecords = [
        {
            id: '1',
            title: 'Annual Physical Examination',
            date: 'Nov 15, 2025',
            doctor: 'Dr. Emily Watson (Nurse Office)',
            notes: 'General health is excellent. Height and weight are within normal range for age.',
            status: 'Normal'
        },
        {
            id: '2',
            title: 'Dental Checkup',
            date: 'Sep 22, 2025',
            doctor: 'Dr. Smile Dental Clinic',
            notes: 'No cavities found. Recommended regular flossing.',
            status: 'Healthy'
        },
    ];

    const vaccinations = [
        { name: 'COVID-19 Booster', date: 'Jan 20, 2024', status: 'Completed' },
        { name: 'MMR Vaccine', date: 'Aug 12, 2023', status: 'Completed' },
        { name: 'Influenza', date: 'Oct 05, 2025', status: 'Upcoming' },
    ];

    const allergies = ['Peanuts', 'Pollen (Seasonal)'];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Health Profile</Text>
                    <TouchableOpacity style={styles.contactBtn}>
                        <Text style={styles.contactIcon}>📞</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarTxt}>AT</Text>
                        </View>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.studentName}>Alex Thompson</Text>
                        <Text style={styles.studentMeta}>Class 10-B • Student ID: #8821</Text>
                        <View style={styles.statusPill}>
                            <View style={styles.dot} />
                            <Text style={styles.statusTxt}>General Health: Good</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Health Metrics Grid */}
                <View style={styles.metricsGrid}>
                    {healthMetrics.map((metric, i) => (
                        <View key={i} style={styles.metricItem}>
                            <View style={[styles.metricIconBg, { backgroundColor: metric.color + '15' }]}>
                                <Text style={styles.metricIcon}>{metric.icon}</Text>
                            </View>
                            <Text style={styles.metricVal}>{metric.value}</Text>
                            <Text style={styles.metricLab}>{metric.label}</Text>
                        </View>
                    ))}
                </View>

                {/* Allergies & Warnings */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Dietary & Allergies</Text>
                </View>
                <View style={styles.allergyCard}>
                    <View style={styles.allergyIconBox}>
                        <Text style={styles.allergyMainIcon}>⚠️</Text>
                    </View>
                    <View style={styles.allergyContent}>
                        <View style={styles.allergyList}>
                            {allergies.map((al, i) => (
                                <View key={i} style={styles.allergyPill}>
                                    <Text style={styles.allergyPillTxt}>{al}</Text>
                                </View>
                            ))}
                        </View>
                        <Text style={styles.allergySub}>Crucial info for school canteen & class teachers.</Text>
                    </View>
                </View>

                {/* Medical Records */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>School Medical Logs</Text>
                    <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
                </View>

                {medicalRecords.map((record) => (
                    <View key={record.id} style={styles.recordCard}>
                        <View style={styles.recordHeader}>
                            <Text style={styles.recordTitle}>{record.title}</Text>
                            <View style={styles.normalBadge}>
                                <Text style={styles.normalBadgeTxt}>{record.status}</Text>
                            </View>
                        </View>
                        <View style={styles.recordMeta}>
                            <Text style={styles.recordDate}>📅 {record.date}</Text>
                            <Text style={styles.recordDot}>•</Text>
                            <Text style={styles.recordDoc}>{record.doctor}</Text>
                        </View>
                        <Text style={styles.recordNotes}>{record.notes}</Text>
                    </View>
                ))}

                {/* Vaccinations */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Vaccination Status</Text>
                </View>
                <View style={styles.vaxCard}>
                    {vaccinations.map((vax, i) => (
                        <View key={i} style={[styles.vaxItem, i === vaccinations.length - 1 && { borderBottomWidth: 0 }]}>
                            <View style={styles.vaxInfo}>
                                <Text style={styles.vaxName}>{vax.name}</Text>
                                <Text style={styles.vaxDate}>{vax.date}</Text>
                            </View>
                            <View style={[styles.vaxBadge, vax.status === 'Completed' ? styles.vaxSuccess : styles.vaxPending]}>
                                <Text style={[styles.vaxBadgeTxt, vax.status === 'Completed' ? styles.vaxSuccessTxt : styles.vaxPendingTxt]}>
                                    {vax.status}
                                </Text>
                            </View>
                        </View>
                    ))}
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
        paddingTop: Platform.OS === 'ios' ? 10 : 20,
        paddingBottom: 40,
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
    contactBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactIcon: {
        fontSize: 18,
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 4,
    },
    avatar: {
        flex: 1,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTxt: {
        fontSize: 24,
        fontWeight: '900',
        color: '#4F46E5',
    },
    profileInfo: {
        marginLeft: 16,
        flex: 1,
    },
    studentName: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    studentMeta: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)',
        marginTop: 2,
        fontWeight: '600',
    },
    statusPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginTop: 8,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#10B981',
        marginRight: 6,
    },
    statusTxt: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },
    scrollBody: {
        paddingTop: 30,
        paddingHorizontal: 24,
    },
    metricsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    metricItem: {
        width: (width - 48 - 20) / 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    metricIconBg: {
        width: 44,
        height: 44,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    metricIcon: {
        fontSize: 20,
    },
    metricVal: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    metricLab: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        marginTop: 4,
        textTransform: 'uppercase',
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
    allergyCard: {
        backgroundColor: '#FEF2F2',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FEE2E2',
        marginBottom: 25,
    },
    allergyIconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    allergyMainIcon: {
        fontSize: 24,
    },
    allergyContent: {
        flex: 1,
    },
    allergyList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    allergyPill: {
        backgroundColor: '#EF4444',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 6,
    },
    allergyPillTxt: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '800',
    },
    allergySub: {
        fontSize: 11,
        color: '#991B1B',
        fontWeight: '600',
    },
    recordCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    recordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    recordTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    normalBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    normalBadgeTxt: {
        color: '#16A34A',
        fontSize: 10,
        fontWeight: '900',
    },
    recordMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    recordDate: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    recordDot: {
        marginHorizontal: 8,
        color: '#CBD5E1',
    },
    recordDoc: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    recordNotes: {
        fontSize: 13,
        color: '#94A3B8',
        lineHeight: 20,
        fontWeight: '500',
    },
    vaxCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    vaxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    vaxInfo: {
        flex: 1,
    },
    vaxName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    vaxDate: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    vaxBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    vaxSuccess: {
        backgroundColor: '#F0FDF4',
    },
    vaxPending: {
        backgroundColor: '#FFFBEB',
    },
    vaxSuccessTxt: {
        color: '#16A34A',
    },
    vaxPendingTxt: {
        color: '#D97706',
    },
    vaxBadgeTxt: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
});

export default ParentHealthScreen;
