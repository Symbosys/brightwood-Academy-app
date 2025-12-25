import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Dimensions,
    Animated,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const ParentFeeScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Pending' | 'History'>('Pending');
    const scrollY = new Animated.Value(0);

    const pendingFees = [
        {
            id: '1',
            title: 'January Tuition Fee',
            amount: '$1,200',
            dueDate: 'Jan 10, 2026',
            status: 'Overdue',
            color: '#EF4444',
            bg: '#FEF2F2'
        },
        {
            id: '2',
            title: 'Transport - Q1',
            amount: '$350',
            dueDate: 'Jan 15, 2026',
            status: 'Upcoming',
            color: '#F59E0B',
            bg: '#FFFBEB'
        },
        {
            id: '3',
            title: 'Lab & Material Fee',
            amount: '$150',
            dueDate: 'Feb 05, 2026',
            status: 'Pending',
            color: '#6366F1',
            bg: '#EEF2FF'
        },
    ];

    const history = [
        { id: 'h1', title: 'December Tuition', amount: '$1,200', date: 'Dec 05, 2025', method: 'Visa •••• 4242' },
        { id: 'h2', title: 'Sports Meet Fee', amount: '$50', date: 'Nov 20, 2025', method: 'Apple Pay' },
        { id: 'h3', title: 'November Tuition', amount: '$1,200', date: 'Nov 04, 2025', method: 'Net Banking' },
    ];

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [220, 160],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Fee Payments</Text>
                    <TouchableOpacity style={styles.receiptBtn}>
                        <Text style={styles.receiptIcon}>🧾</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.balanceCard}>
                    <View style={styles.balanceInfo}>
                        <Text style={styles.balanceLabel}>Total Outstanding</Text>
                        <Text style={styles.balanceValue}>$1,700.00</Text>
                    </View>
                    <View style={styles.childTag}>
                        <Text style={styles.childTagTxt}>Alex Thompson</Text>
                    </View>
                </View>
            </Animated.View>

            <ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Visual Quick Pay Actions */}
                <View style={styles.quickActions}>
                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#4F46E5' }]}>
                        <Text style={styles.actionIcon}>💳</Text>
                        <Text style={styles.actionLabel}>Pay Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#F59E0B' }]}>
                        <Text style={styles.actionIcon}>📄</Text>
                        <Text style={styles.actionLabel}>Structure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#64748B' }]}>
                        <Text style={styles.actionIcon}>❓</Text>
                        <Text style={styles.actionLabel}>Support</Text>
                    </TouchableOpacity>
                </View>

                {/* Tabs */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={() => setActiveTab('Pending')}
                        style={[styles.tab, activeTab === 'Pending' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'Pending' && styles.activeTabText]}>Pending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('History')}
                        style={[styles.tab, activeTab === 'History' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>History</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'Pending' ? (
                    <View style={styles.listSection}>
                        {pendingFees.map((fee) => (
                            <View key={fee.id} style={styles.feeItem}>
                                <View style={[styles.statusLine, { backgroundColor: fee.color }]} />
                                <View style={styles.feeContent}>
                                    <View style={styles.feeTopRow}>
                                        <View>
                                            <Text style={styles.feeTitle}>{fee.title}</Text>
                                            <Text style={styles.feeDate}>Due: {fee.dueDate}</Text>
                                        </View>
                                        <Text style={styles.feeAmount}>{fee.amount}</Text>
                                    </View>
                                    <View style={styles.feeBottomRow}>
                                        <View style={[styles.badge, { backgroundColor: fee.bg }]}>
                                            <Text style={[styles.badgeTxt, { color: fee.color }]}>{fee.status}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.paySmallBtn}>
                                            <Text style={styles.paySmallBtnTxt}>Pay</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View style={styles.listSection}>
                        {history.map((h) => (
                            <View key={h.id} style={styles.historyItem}>
                                <View style={styles.historyIconBox}>
                                    <Text style={styles.historyIcon}>✅</Text>
                                </View>
                                <View style={styles.historyInfo}>
                                    <View style={styles.historyHeader}>
                                        <Text style={styles.historyTitle}>{h.title}</Text>
                                        <Text style={styles.historyDate}>{h.date}</Text>
                                    </View>
                                    <View style={styles.historyFooter}>
                                        <Text style={styles.historyMethod}>{h.method}</Text>
                                        <Text style={styles.historyAmount}>{h.amount}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {/* Security Message */}
                <View style={styles.securityBox}>
                    <Text style={styles.securityIcon}>🔒</Text>
                    <Text style={styles.securityTxt}>
                        Payments are processed securely via SSL encryption. We do not store your card details.
                    </Text>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.mainPayBtn}>
                    <Text style={styles.mainPayBtnTxt}>PAY TOTAL $1,700.00</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 0 : 10,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        zIndex: 10,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.2)',
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
    receiptBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    receiptIcon: {
        fontSize: 20,
    },
    balanceCard: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    balanceInfo: {
        flex: 1,
    },
    balanceLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.7)',
    },
    balanceValue: {
        fontSize: 36,
        fontWeight: '900',
        color: '#FFFFFF',
        marginTop: 4,
    },
    childTag: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 8,
    },
    childTagTxt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    scrollContent: {
        paddingTop: 20,
        paddingHorizontal: 24,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    actionBtn: {
        width: (width - 48 - 30) / 3,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    actionIcon: {
        fontSize: 24,
        marginBottom: 4,
    },
    actionLabel: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        padding: 6,
        marginBottom: 24,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 16,
    },
    activeTab: {
        backgroundColor: '#FFFFFF',
        elevation: 2,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#64748B',
    },
    activeTabText: {
        color: '#4F46E5',
    },
    listSection: {
        marginBottom: 20,
    },
    feeItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statusLine: {
        width: 6,
        height: '100%',
    },
    feeContent: {
        flex: 1,
        padding: 16,
    },
    feeTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    feeTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    feeDate: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    feeAmount: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
    },
    feeBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    badgeTxt: {
        fontSize: 11,
        fontWeight: '800',
    },
    paySmallBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 12,
    },
    paySmallBtnTxt: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '800',
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    historyIconBox: {
        width: 50,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    historyIcon: {
        fontSize: 20,
    },
    historyInfo: {
        flex: 1,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    historyTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    historyDate: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    historyFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    historyMethod: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    historyAmount: {
        fontSize: 15,
        fontWeight: '800',
        color: '#10B981',
    },
    securityBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 16,
    },
    securityIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    securityTxt: {
        flex: 1,
        fontSize: 11,
        color: '#64748B',
        fontWeight: '500',
        lineHeight: 16,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: Platform.OS === 'ios' ? 34 : 20,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    mainPayBtn: {
        backgroundColor: '#1E293B',
        height: 56,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainPayBtnTxt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 1,
    }
});

export default ParentFeeScreen;
