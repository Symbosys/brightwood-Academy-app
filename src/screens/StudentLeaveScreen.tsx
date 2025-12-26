import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput,
    Platform,
    Alert,
} from 'react-native';

const StudentLeaveScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState('apply'); // 'apply' or 'history'

    // Form States
    const [leaveType, setLeaveType] = useState('Sick Leave');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [reason, setReason] = useState('');

    const leaveTypes = ['Sick Leave', 'Casual Leave', 'Emergency', 'Vacation'];

    const leaveHistory = [
        { id: 1, type: 'Sick Leave', from: '12 Dec 2025', to: '13 Dec 2025', status: 'Approved', days: 2 },
        { id: 2, type: 'Family Function', from: '20 Nov 2025', to: '22 Nov 2025', status: 'Rejected', days: 3 },
        { id: 3, type: 'Medical Checkup', from: '05 Oct 2025', to: '05 Oct 2025', status: 'Approved', days: 1 },
    ];

    const handleSubmit = () => {
        if (!fromDate || !toDate || !reason) {
            Alert.alert('Incomplete Application', 'Please fill in all details before submitting.');
            return;
        }
        Alert.alert('Success', 'Your leave application has been submitted to the Class Teacher for approval.');
        setReason('');
        setFromDate('');
        setToDate('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Leave Application</Text>
                <View style={{ width: 40 }} />
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'apply' && styles.activeTab]}
                    onPress={() => setActiveTab('apply')}
                >
                    <Text style={[styles.tabText, activeTab === 'apply' && styles.activeTabText]}>Apply New</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'history' && styles.activeTab]}
                    onPress={() => setActiveTab('history')}
                >
                    <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>Leave History</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.body}>
                {activeTab === 'apply' ? (
                    <View style={styles.formCard}>
                        <Text style={styles.sectionTitle}>New Application</Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Leave Type</Text>
                            <View style={styles.typeRow}>
                                {leaveTypes.map((type) => (
                                    <TouchableOpacity
                                        key={type}
                                        style={[styles.typeChip, leaveType === type && styles.activeTypeChip]}
                                        onPress={() => setLeaveType(type)}
                                    >
                                        <Text style={[styles.typeText, leaveType === type && styles.activeTypeText]}>{type}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                                <Text style={styles.label}>From Date</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="DD/MM/YYYY"
                                    value={fromDate}
                                    onChangeText={setFromDate}
                                    placeholderTextColor="#94A3B8"
                                />
                            </View>
                            <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
                                <Text style={styles.label}>To Date</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="DD/MM/YYYY"
                                    value={toDate}
                                    onChangeText={setToDate}
                                    placeholderTextColor="#94A3B8"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Reason for Leave</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="State your reason clearly..."
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                value={reason}
                                onChangeText={setReason}
                                placeholderTextColor="#94A3B8"
                            />
                        </View>

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitBtnText}>Submit Application</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        {leaveHistory.map((item) => (
                            <View key={item.id} style={styles.historyCard}>
                                <View style={styles.historyHeader}>
                                    <Text style={styles.historyType}>{item.type}</Text>
                                    <View style={[
                                        styles.statusBadge,
                                        { backgroundColor: item.status === 'Approved' ? '#DCFCE7' : item.status === 'Rejected' ? '#FEE2E2' : '#FEF3C7' }
                                    ]}>
                                        <Text style={[
                                            styles.statusText,
                                            { color: item.status === 'Approved' ? '#166534' : item.status === 'Rejected' ? '#991B1B' : '#92400E' }
                                        ]}>{item.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.dateRow}>
                                    <Text style={styles.historyDate}>{item.from} - {item.to}</Text>
                                    <Text style={styles.daysCount}>{item.days} Day(s)</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 10 : 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        zIndex: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#4F46E5',
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#FFFFFF',
    },
    tabText: {
        color: 'rgba(255,255,255,0.6)',
        fontWeight: '700',
        fontSize: 15,
    },
    activeTabText: {
        color: '#FFFFFF',
    },
    body: {
        padding: 24,
    },
    formCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 2 },
        }),
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: '#64748B',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: '#1E293B',
    },
    textArea: {
        height: 100,
    },
    typeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    typeChip: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F1F5F9',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 8,
    },
    activeTypeChip: {
        backgroundColor: '#EEF2FF',
        borderColor: '#4F46E5',
    },
    typeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#64748B',
    },
    activeTypeText: {
        color: '#4F46E5',
    },
    submitButton: {
        backgroundColor: '#4F46E5',
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    submitBtnText: {
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 15,
    },
    historyCard: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        marginBottom: 16,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    historyType: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '700',
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    historyDate: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
    },
    daysCount: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    }
});

export default StudentLeaveScreen;
