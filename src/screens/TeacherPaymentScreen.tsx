import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const TeacherPaymentScreen = ({ navigation }: any) => {
    const paymentHistory = [
        { month: 'November 2025', amount: '₹75,000', status: 'Credited', date: '01 Nov, 2025' },
        { month: 'October 2025', amount: '₹72,500', status: 'Credited', date: '02 Oct, 2025' },
        { month: 'September 2025', amount: '₹72,500', status: 'Credited', date: '01 Sep, 2025' },
        { month: 'August 2025', amount: '₹70,000', status: 'Credited', date: '03 Aug, 2025' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payments & Salary</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Current Payout Card */}
                <View style={styles.payoutCard}>
                    <Text style={styles.payoutLabel}>Estimated Next Payout</Text>
                    <Text style={styles.payoutAmount}>₹78,200.00</Text>
                    <View style={styles.payoutStatusRow}>
                        <View style={styles.statusDot} />
                        <Text style={styles.statusText}>Processing for Dec 01</Text>
                    </View>

                    <View style={styles.breakdownContainer}>
                        <View style={styles.breakdownItem}>
                            <Text style={styles.breakdownLabel}>Base Salary</Text>
                            <Text style={styles.breakdownVal}>₹65,000</Text>
                        </View>
                        <View style={styles.breakdownDivider} />
                        <View style={styles.breakdownItem}>
                            <Text style={styles.breakdownLabel}>Allowances</Text>
                            <Text style={styles.breakdownVal}>₹15,000</Text>
                        </View>
                        <View style={styles.breakdownDivider} />
                        <View style={styles.breakdownItem}>
                            <Text style={styles.breakdownLabel}>Deductions</Text>
                            <Text style={[styles.breakdownVal, { color: '#EF4444' }]}>-₹1,800</Text>
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.actionCard}>
                        <View style={[styles.actionIconContainer, { backgroundColor: '#EEF2FF' }]}>
                            <Text style={styles.actionIcon}>📄</Text>
                        </View>
                        <Text style={styles.actionText}>Salary Slip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionCard}>
                        <View style={[styles.actionIconContainer, { backgroundColor: '#F0FDF4' }]}>
                            <Text style={styles.actionIcon}>📊</Text>
                        </View>
                        <Text style={styles.actionText}>Tax Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionCard}>
                        <View style={[styles.actionIconContainer, { backgroundColor: '#FFF7ED' }]}>
                            <Text style={styles.actionIcon}>💡</Text>
                        </View>
                        <Text style={styles.actionText}>Reimburse</Text>
                    </TouchableOpacity>
                </View>

                {/* History Section */}
                <View style={styles.historyHeader}>
                    <Text style={styles.historyTitle}>Payment History</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>View All</Text>
                    </TouchableOpacity>
                </View>

                {paymentHistory.map((item, index) => (
                    <View key={index} style={styles.historyItem}>
                        <View style={styles.historyIconBox}>
                            <Text style={styles.historyIcon}>💰</Text>
                        </View>
                        <View style={styles.itemMain}>
                            <Text style={styles.itemMonth}>{item.month}</Text>
                            <Text style={styles.itemDate}>{item.date}</Text>
                        </View>
                        <View style={styles.itemEnd}>
                            <Text style={styles.itemAmount}>{item.amount}</Text>
                            <View style={styles.itemStatusBadge}>
                                <Text style={styles.itemStatusText}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                ))}

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 20,
        color: '#1E293B',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    payoutCard: {
        backgroundColor: '#4F46E5',
        borderRadius: 30,
        padding: 24,
        marginBottom: 25,
        elevation: 10,
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    payoutLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: '600',
    },
    payoutAmount: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: '900',
        marginTop: 8,
    },
    payoutStatusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        backgroundColor: 'rgba(255,255,255,0.15)',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#34D399',
        marginRight: 8,
    },
    statusText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    breakdownContainer: {
        flexDirection: 'row',
        marginTop: 24,
        paddingTop: 24,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    breakdownItem: {
        flex: 1,
    },
    breakdownLabel: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    breakdownVal: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '800',
        marginTop: 4,
    },
    breakdownDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginHorizontal: 10,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    actionCard: {
        width: (width - 40 - 30) / 3,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    actionIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    actionIcon: {
        fontSize: 20,
    },
    actionText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#475569',
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4F46E5',
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    historyIconBox: {
        width: 44,
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    historyIcon: {
        fontSize: 18,
    },
    itemMain: {
        flex: 1,
    },
    itemMonth: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    itemDate: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    itemEnd: {
        alignItems: 'flex-end',
    },
    itemAmount: {
        fontSize: 16,
        fontWeight: '900',
        color: '#1E293B',
    },
    itemStatusBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        marginTop: 4,
    },
    itemStatusText: {
        fontSize: 9,
        fontWeight: '900',
        color: '#166534',
        textTransform: 'uppercase',
    }
});

export default TeacherPaymentScreen;
