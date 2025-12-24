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

const FeesScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Upcoming' | 'History'>('Upcoming');

    const pendingFees = [
        { id: '1', title: 'Q4 Tuition Fee', amount: '$1,200', dueDate: 'Jan 10, 2026', type: 'Tuition' },
        { id: '2', title: 'Quarterly Bus Fee', amount: '$350', dueDate: 'Jan 15, 2026', type: 'Transport' },
    ];

    const history = [
        { id: 'h1', title: 'Q3 Tuition Fee', amount: '$1,200', date: 'Oct 05, 2025', status: 'Paid', receipt: '#REC-4421' },
        { id: 'h2', title: 'Exam Registration', amount: '$150', date: 'Sep 20, 2025', status: 'Paid', receipt: '#REC-4109' },
        { id: 'h3', title: 'Q2 Tuition Fee', amount: '$1,200', date: 'Jul 08, 2025', status: 'Paid', receipt: '#REC-3892' },
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
                    <Text style={styles.headerTitle}>School Fees</Text>
                    <View style={{ width: 44 }} />
                </View>

                {/* Balance Overlay Card */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryInfo}>
                        <Text style={styles.summaryLabel}>Total Pending Balance</Text>
                        <Text style={styles.summaryValue}>$1,550.00</Text>
                    </View>
                    <TouchableOpacity style={styles.payAllBtn}>
                        <Text style={styles.payAllTxt}>Pay All</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Tab Switcher */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={() => setActiveTab('Upcoming')}
                        style={[styles.tab, activeTab === 'Upcoming' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming Dues</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('History')}
                        style={[styles.tab, activeTab === 'History' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>Payment History</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'Upcoming' ? (
                    <View style={styles.listSection}>
                        {pendingFees.map((fee) => (
                            <View key={fee.id} style={styles.feeCard}>
                                <View style={styles.feeTop}>
                                    <View style={styles.iconBox}>
                                        <Text style={styles.feeIcon}>{fee.type === 'Tuition' ? '🎓' : '🚌'}</Text>
                                    </View>
                                    <View style={styles.feeMainInfo}>
                                        <Text style={styles.feeTitle}>{fee.title}</Text>
                                        <Text style={styles.feeDueDate}>Due: {fee.dueDate}</Text>
                                    </View>
                                    <Text style={styles.feeAmount}>{fee.amount}</Text>
                                </View>
                                <View style={styles.feeAction}>
                                    <TouchableOpacity style={styles.detailsBtn}>
                                        <Text style={styles.detailsBtnTxt}>Breakdown</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.payBtn}>
                                        <Text style={styles.payBtnTxt}>Pay Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View style={styles.listSection}>
                        {history.map((item) => (
                            <View key={item.id} style={styles.historyCard}>
                                <View style={styles.historyInfo}>
                                    <View style={styles.historyTextContainer}>
                                        <Text style={styles.historyTitle}>{item.title}</Text>
                                        <Text style={styles.historyMeta}>{item.date} • {item.receipt}</Text>
                                    </View>
                                    <View style={styles.historyValueContainer}>
                                        <Text style={styles.historyAmount}>{item.amount}</Text>
                                        <View style={styles.paidBadge}>
                                            <Text style={styles.paidBadgeTxt}>PAID</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.downloadBtn}>
                                    <Text style={styles.downloadIcon}>📄</Text>
                                    <Text style={styles.downloadTxt}>Download Receipt</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                )}

                {/* Payment Methods Notice */}
                <View style={styles.noticeCard}>
                    <Text style={styles.noticeTitle}>💳 Payment Methods</Text>
                    <Text style={styles.noticeDesc}>
                        We support Visa, Mastercard, Net Banking, and UPI. Your payments are secured with 256-bit encryption.
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
        paddingTop: 10,
        paddingBottom: 70,
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
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    summaryCard: {
        position: 'absolute',
        bottom: -40,
        left: 24,
        right: 24,
        height: 90,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },
    summaryInfo: {
        flex: 1,
    },
    summaryLabel: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    summaryValue: {
        fontSize: 24,
        fontWeight: '900',
        color: '#FFFFFF',
        marginTop: 2,
    },
    payAllBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
    },
    payAllTxt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '800',
    },
    scrollBody: {
        paddingTop: 65,
        paddingHorizontal: 24,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        borderRadius: 16,
        padding: 5,
        marginBottom: 20,
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
    listSection: {
        marginBottom: 10,
    },
    feeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    feeTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    feeIcon: {
        fontSize: 22,
    },
    feeMainInfo: {
        flex: 1,
    },
    feeTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    feeDueDate: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
        fontWeight: '600',
    },
    feeAmount: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
    },
    feeAction: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        paddingTop: 16,
    },
    detailsBtn: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
    },
    detailsBtnTxt: {
        fontSize: 13,
        fontWeight: '700',
        color: '#64748B',
    },
    payBtn: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 12,
        backgroundColor: '#4F46E5',
    },
    payBtnTxt: {
        fontSize: 13,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    historyCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    historyInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    historyTextContainer: {
        flex: 1,
    },
    historyTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    historyMeta: {
        fontSize: 12,
        color: '#94A3B8',
        marginTop: 4,
        fontWeight: '600',
    },
    historyValueContainer: {
        alignItems: 'flex-end',
    },
    historyAmount: {
        fontSize: 16,
        fontWeight: '900',
        color: '#1E293B',
    },
    paidBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        marginTop: 6,
    },
    paidBadgeTxt: {
        fontSize: 9,
        fontWeight: '900',
        color: '#16A34A',
    },
    downloadBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: '#F1F5F9',
    },
    downloadIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    downloadTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: '#475569',
    },
    noticeCard: {
        backgroundColor: '#EEF2FF',
        borderRadius: 24,
        padding: 20,
        marginTop: 10,
    },
    noticeTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#4338CA',
        marginBottom: 8,
    },
    noticeDesc: {
        fontSize: 13,
        color: '#4F46E5',
        lineHeight: 18,
        fontWeight: '500',
    },
});

export default FeesScreen;
