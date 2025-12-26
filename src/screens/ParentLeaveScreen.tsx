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
    TextInput,
    Platform,
    Modal,
} from 'react-native';

const { width } = Dimensions.get('window');

const ParentLeaveScreen = ({ navigation }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [leaveType, setLeaveType] = useState('Sick Leave');
    const [reason, setReason] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const leaveHistory = [
        { id: '1', type: 'Sick Leave', status: 'Approved', date: 'Dec 10 - Dec 12, 2025', reason: 'Common cold and fever', color: '#10B981' },
        { id: '2', type: 'Family Function', status: 'Pending', date: 'Jan 05, 2026', reason: 'Sister\'s wedding ceremony', color: '#F59E0B' },
        { id: '3', type: 'Other', status: 'Rejected', date: 'Nov 20, 2025', reason: 'Personal reasons', color: '#EF4444' },
    ];

    const handleSubmit = () => {
        // Handle logic here
        setModalVisible(false);
        // Reset fields
        setReason('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Leave Management</Text>
                    <View style={{ width: 44 }} />
                </View>

                <View style={styles.headerCard}>
                    <View>
                        <Text style={styles.headerLabel}>Student</Text>
                        <Text style={styles.headerName}>Alex Thompson</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <View style={styles.activeBadge}>
                            <Text style={styles.activeBadgeTxt}>Grade 10-B</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Stats Section */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNum}>12</Text>
                        <Text style={styles.statLab}>Total Leave</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Text style={styles.statNum}>08</Text>
                        <Text style={styles.statLab}>Approved</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Text style={styles.statNum}>02</Text>
                        <Text style={styles.statLab}>Pending</Text>
                    </View>
                </View>

                {/* Leave History Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Leave History</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.applyBtn}>
                        <Text style={styles.applyBtnTxt}>+ New Request</Text>
                    </TouchableOpacity>
                </View>

                {/* History List */}
                {leaveHistory.map((item) => (
                    <View key={item.id} style={styles.historyCard}>
                        <View style={[styles.statusIndicator, { backgroundColor: item.color }]} />
                        <View style={styles.historyContent}>
                            <View style={styles.historyTop}>
                                <View>
                                    <Text style={styles.historyType}>{item.type}</Text>
                                    <View style={styles.dateBox}>
                                        <Text style={styles.calendarIcon}>📅</Text>
                                        <Text style={styles.historyDate}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={[styles.statusBadge, { backgroundColor: item.color + '20' }]}>
                                    <Text style={[styles.statusText, { color: item.color }]}>{item.status}</Text>
                                </View>
                            </View>
                            <Text style={styles.historyReason} numberOfLines={2}>
                                {item.reason}
                            </Text>
                        </View>
                    </View>
                ))}

                <View style={{ height: 40 }} />
            </ScrollView>

            {/* Apply Leave Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>New Leave Request</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeIcon}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={styles.formContainer}>
                            <Text style={styles.inputLabel}>Leave Type</Text>
                            <View style={styles.typeGrid}>
                                {['Sick Leave', 'Family', 'Medical', 'Other'].map((type) => (
                                    <TouchableOpacity
                                        key={type}
                                        onPress={() => setLeaveType(type)}
                                        style={[styles.typeBtn, leaveType === type && styles.typeBtnActive]}
                                    >
                                        <Text style={[styles.typeBtnTxt, leaveType === type && styles.typeBtnTxtActive]}>
                                            {type}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text style={styles.inputLabel}>From Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="YYYY-MM-DD"
                                value={startDate}
                                onChangeText={setStartDate}
                            />

                            <Text style={styles.inputLabel}>To Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="YYYY-MM-DD"
                                value={endDate}
                                onChangeText={setEndDate}
                            />

                            <Text style={styles.inputLabel}>Reason</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Describe the reason for leave..."
                                multiline={true}
                                numberOfLines={4}
                                value={reason}
                                onChangeText={setReason}
                            />

                            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                                <Text style={styles.submitBtnTxt}>Submit Application</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
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
        paddingBottom: 70,
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
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLabel: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
    },
    headerName: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
        marginTop: 4,
    },
    badgeContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    activeBadge: {
        // No extra styling needed but needs to exist for the View
    },
    activeBadgeTxt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    scrollBody: {
        paddingTop: 0,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    statsContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        marginBottom: 25,
        zIndex: 5,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
    },
    statNum: {
        fontSize: 22,
        fontWeight: '900',
        color: '#1E293B',
    },
    statLab: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '700',
        marginTop: 4,
        textTransform: 'uppercase',
    },
    statDivider: {
        width: 1,
        height: 30,
        backgroundColor: '#F1F5F9',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    applyBtn: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
    },
    applyBtnTxt: {
        color: '#4F46E5',
        fontSize: 13,
        fontWeight: '800',
    },
    historyCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statusIndicator: {
        width: 6,
        height: '100%',
    },
    historyContent: {
        flex: 1,
        padding: 16,
    },
    historyTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    historyType: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    calendarIcon: {
        fontSize: 12,
        marginRight: 6,
    },
    historyDate: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    historyReason: {
        fontSize: 13,
        color: '#94A3B8',
        lineHeight: 20,
        fontWeight: '500',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '85%',
        padding: 24,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    closeIcon: {
        fontSize: 20,
        color: '#94A3B8',
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 1,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#64748B',
        marginBottom: 10,
        marginTop: 15,
    },
    typeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -5,
    },
    typeBtn: {
        flex: 1,
        minWidth: '45%',
        margin: 5,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#F1F5F9',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
    },
    typeBtnActive: {
        borderColor: '#4F46E5',
        backgroundColor: '#EEF2FF',
    },
    typeBtnTxt: {
        color: '#64748B',
        fontWeight: '700',
        fontSize: 13,
    },
    typeBtnTxtActive: {
        color: '#4F46E5',
    },
    input: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1.5,
        borderColor: '#F1F5F9',
        borderRadius: 14,
        padding: 14,
        fontSize: 15,
        color: '#1E293B',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    submitBtn: {
        backgroundColor: '#1E293B',
        paddingVertical: 18,
        borderRadius: 18,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    submitBtnTxt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    },
});

export default ParentLeaveScreen;
