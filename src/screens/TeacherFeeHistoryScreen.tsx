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

const TeacherFeeHistoryScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'Salary' | 'Deductions' | 'Receipts'>('Salary');

    const salaryOverview = {
        basicSalary: '$4,500',
        allowances: '$800',
        bonuses: '$500',
        totalEarnings: '$5,800',
        deductions: '$1,200',
        netSalary: '$4,600',
    };

    const salaryHistory = [
        {
            month: 'December 2025',
            basicPay: '$4,500',
            allowances: '$800',
            bonus: '$500',
            deductions: '$1,200',
            netPay: '$4,600',
            status: 'Paid',
            date: 'Dec 01, 2025'
        },
        {
            month: 'November 2025',
            basicPay: '$4,500',
            allowances: '$800',
            bonus: '$0',
            deductions: '$1,200',
            netPay: '$4,100',
            status: 'Paid',
            date: 'Nov 01, 2025'
        },
        {
            month: 'October 2025',
            basicPay: '$4,500',
            allowances: '$800',
            bonus: '$0',
            deductions: '$1,200',
            netPay: '$4,100',
            status: 'Paid',
            date: 'Oct 01, 2025'
        },
    ];

    const deductionBreakdown = [
        { category: 'Income Tax', amount: '$650', percentage: '14.4%', color: '#EF4444' },
        { category: 'Health Insurance', amount: '$300', percentage: '6.7%', color: '#10B981' },
        { category: 'Pension Fund', amount: '$200', percentage: '4.4%', color: '#4F46E5' },
        { category: 'Professional Tax', amount: '$50', percentage: '1.1%', color: '#F59E0B' },
    ];

    const receipts = [
        {
            id: 'SAL-2025-12',
            type: 'Salary Slip',
            month: 'December 2025',
            amount: '$4,600',
            date: 'Dec 01, 2025',
            icon: '📄'
        },
        {
            id: 'SAL-2025-11',
            type: 'Salary Slip',
            month: 'November 2025',
            amount: '$4,100',
            date: 'Nov 01, 2025',
            icon: '📄'
        },
        {
            id: 'TAX-2025',
            type: 'Tax Certificate',
            month: 'Annual 2025',
            amount: '$7,800',
            date: 'Jan 15, 2025',
            icon: '🧾'
        },
    ];

    const benefits = [
        { name: 'Medical Insurance', value: 'Family Coverage', status: 'Active' },
        { name: 'Provident Fund', value: '12% Contribution', status: 'Active' },
        { name: 'Leave Encashment', value: '15 Days/Year', status: 'Active' },
        { name: 'Professional Development', value: '$1,000/Year', status: 'Active' },
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
                    <Text style={styles.headerTitle}>Salary & Payments</Text>
                    <TouchableOpacity style={styles.downloadBtn}>
                        <Text style={styles.downloadIcon}>📥</Text>
                    </TouchableOpacity>
                </View>

                {/* Salary Summary Card */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryRow}>
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryLabel}>Net Salary</Text>
                            <Text style={styles.summaryValue}>{salaryOverview.netSalary}</Text>
                            <Text style={styles.summarySub}>This Month</Text>
                        </View>
                        <View style={styles.summaryDivider} />
                        <View style={styles.summaryItem}>
                            <Text style={styles.summaryLabel}>Total Earnings</Text>
                            <Text style={styles.summaryValue}>{salaryOverview.totalEarnings}</Text>
                            <Text style={styles.summarySub}>Before Deductions</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {(['Salary', 'Deductions', 'Receipts'] as const).map((tab) => (
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
                {activeTab === 'Salary' && (
                    <>
                        {/* Current Month Breakdown */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Current Month Breakdown</Text>
                        </View>

                        <View style={styles.breakdownCard}>
                            <View style={styles.breakdownRow}>
                                <Text style={styles.breakdownLabel}>Basic Salary</Text>
                                <Text style={styles.breakdownValue}>{salaryOverview.basicSalary}</Text>
                            </View>
                            <View style={styles.breakdownRow}>
                                <Text style={styles.breakdownLabel}>Allowances</Text>
                                <Text style={[styles.breakdownValue, { color: '#10B981' }]}>+{salaryOverview.allowances}</Text>
                            </View>
                            <View style={styles.breakdownRow}>
                                <Text style={styles.breakdownLabel}>Bonuses</Text>
                                <Text style={[styles.breakdownValue, { color: '#10B981' }]}>+{salaryOverview.bonuses}</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.breakdownRow}>
                                <Text style={styles.breakdownLabel}>Total Earnings</Text>
                                <Text style={styles.breakdownTotal}>{salaryOverview.totalEarnings}</Text>
                            </View>
                            <View style={styles.breakdownRow}>
                                <Text style={styles.breakdownLabel}>Total Deductions</Text>
                                <Text style={[styles.breakdownValue, { color: '#EF4444' }]}>-{salaryOverview.deductions}</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.breakdownRow}>
                                <Text style={styles.netLabel}>Net Salary</Text>
                                <Text style={styles.netValue}>{salaryOverview.netSalary}</Text>
                            </View>
                        </View>

                        {/* Salary History */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Payment History</Text>
                        </View>

                        {salaryHistory.map((salary, i) => (
                            <View key={i} style={styles.salaryCard}>
                                <View style={styles.salaryHeader}>
                                    <View>
                                        <Text style={styles.salaryMonth}>{salary.month}</Text>
                                        <Text style={styles.salaryDate}>Paid on {salary.date}</Text>
                                    </View>
                                    <View style={styles.paidBadge}>
                                        <Text style={styles.paidText}>✓ PAID</Text>
                                    </View>
                                </View>

                                <View style={styles.salaryDetails}>
                                    <View style={styles.salaryRow}>
                                        <Text style={styles.salaryLabel}>Basic Pay</Text>
                                        <Text style={styles.salaryValue}>{salary.basicPay}</Text>
                                    </View>
                                    <View style={styles.salaryRow}>
                                        <Text style={styles.salaryLabel}>Allowances</Text>
                                        <Text style={styles.salaryValue}>{salary.allowances}</Text>
                                    </View>
                                    {salary.bonus !== '$0' && (
                                        <View style={styles.salaryRow}>
                                            <Text style={styles.salaryLabel}>Bonus</Text>
                                            <Text style={[styles.salaryValue, { color: '#10B981' }]}>{salary.bonus}</Text>
                                        </View>
                                    )}
                                    <View style={styles.salaryRow}>
                                        <Text style={styles.salaryLabel}>Deductions</Text>
                                        <Text style={[styles.salaryValue, { color: '#EF4444' }]}>-{salary.deductions}</Text>
                                    </View>
                                </View>

                                <View style={styles.salaryFooter}>
                                    <Text style={styles.netPayLabel}>Net Pay</Text>
                                    <Text style={styles.netPayValue}>{salary.netPay}</Text>
                                </View>
                            </View>
                        ))}

                        {/* Benefits */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Employee Benefits</Text>
                        </View>

                        <View style={styles.benefitsCard}>
                            {benefits.map((benefit, i) => (
                                <View key={i} style={styles.benefitRow}>
                                    <View style={styles.benefitInfo}>
                                        <Text style={styles.benefitName}>{benefit.name}</Text>
                                        <Text style={styles.benefitValue}>{benefit.value}</Text>
                                    </View>
                                    <View style={styles.activeBadge}>
                                        <Text style={styles.activeText}>{benefit.status}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </>
                )}

                {activeTab === 'Deductions' && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Monthly Deductions</Text>
                            <Text style={styles.totalDeduction}>-{salaryOverview.deductions}</Text>
                        </View>

                        {deductionBreakdown.map((deduction, i) => (
                            <View key={i} style={[styles.deductionCard, { borderLeftColor: deduction.color }]}>
                                <View style={styles.deductionHeader}>
                                    <Text style={styles.deductionCategory}>{deduction.category}</Text>
                                    <View style={[styles.percentBadge, { backgroundColor: deduction.color + '15' }]}>
                                        <Text style={[styles.percentText, { color: deduction.color }]}>{deduction.percentage}</Text>
                                    </View>
                                </View>
                                <Text style={styles.deductionAmount}>{deduction.amount}</Text>
                                <View style={[styles.progressBar, { backgroundColor: deduction.color + '20' }]}>
                                    <View style={[styles.progressFill, { backgroundColor: deduction.color }]} />
                                </View>
                            </View>
                        ))}

                        {/* Tax Information */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Tax Information</Text>
                        </View>

                        <View style={styles.taxCard}>
                            <View style={styles.taxRow}>
                                <Text style={styles.taxLabel}>Annual Taxable Income</Text>
                                <Text style={styles.taxValue}>$54,000</Text>
                            </View>
                            <View style={styles.taxRow}>
                                <Text style={styles.taxLabel}>Total Tax Deducted (YTD)</Text>
                                <Text style={styles.taxValue}>$7,800</Text>
                            </View>
                            <View style={styles.taxRow}>
                                <Text style={styles.taxLabel}>Tax Regime</Text>
                                <Text style={styles.taxValue}>New Regime</Text>
                            </View>
                            <TouchableOpacity style={styles.taxCertBtn}>
                                <Text style={styles.taxCertIcon}>📜</Text>
                                <Text style={styles.taxCertText}>Download Tax Certificate</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {activeTab === 'Receipts' && (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>All Documents</Text>
                        </View>

                        {receipts.map((receipt) => (
                            <View key={receipt.id} style={styles.receiptCard}>
                                <View style={styles.receiptIconBox}>
                                    <Text style={styles.receiptIcon}>{receipt.icon}</Text>
                                </View>
                                <View style={styles.receiptInfo}>
                                    <Text style={styles.receiptType}>{receipt.type}</Text>
                                    <Text style={styles.receiptMonth}>{receipt.month}</Text>
                                    <Text style={styles.receiptDate}>{receipt.date}</Text>
                                </View>
                                <View style={styles.receiptActions}>
                                    <Text style={styles.receiptAmount}>{receipt.amount}</Text>
                                    <TouchableOpacity style={styles.downloadReceiptBtn}>
                                        <Text style={styles.downloadReceiptText}>Download</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                        {/* Request Document */}
                        <TouchableOpacity style={styles.requestDocBtn}>
                            <Text style={styles.requestDocIcon}>📧</Text>
                            <Text style={styles.requestDocText}>Request Custom Document</Text>
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
    downloadBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    downloadIcon: {
        fontSize: 18,
    },
    summaryCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 20,
        padding: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryLabel: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    summaryValue: {
        fontSize: 24,
        fontWeight: '900',
        color: '#FFFFFF',
        marginTop: 6,
    },
    summarySub: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
        fontWeight: '600',
    },
    summaryDivider: {
        width: 1,
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 20,
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
    totalDeduction: {
        fontSize: 16,
        fontWeight: '900',
        color: '#EF4444',
    },
    breakdownCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    breakdownRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    breakdownLabel: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '600',
    },
    breakdownValue: {
        fontSize: 15,
        color: '#1E293B',
        fontWeight: '700',
    },
    breakdownTotal: {
        fontSize: 16,
        color: '#1E293B',
        fontWeight: '800',
    },
    divider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginVertical: 8,
    },
    netLabel: {
        fontSize: 16,
        color: '#1E293B',
        fontWeight: '800',
    },
    netValue: {
        fontSize: 20,
        color: '#10B981',
        fontWeight: '900',
    },
    salaryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    salaryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    salaryMonth: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    salaryDate: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    paidBadge: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    paidText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#16A34A',
    },
    salaryDetails: {
        marginBottom: 16,
    },
    salaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    salaryLabel: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    salaryValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '700',
    },
    salaryFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    netPayLabel: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    netPayValue: {
        fontSize: 18,
        fontWeight: '900',
        color: '#10B981',
    },
    benefitsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    benefitRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    benefitInfo: {
        flex: 1,
    },
    benefitName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 2,
    },
    benefitValue: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
    },
    activeBadge: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    activeText: {
        fontSize: 10,
        fontWeight: '900',
        color: '#4F46E5',
    },
    deductionCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        borderLeftWidth: 4,
    },
    deductionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    deductionCategory: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    percentBadge: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    percentText: {
        fontSize: 11,
        fontWeight: '900',
    },
    deductionAmount: {
        fontSize: 20,
        fontWeight: '900',
        color: '#1E293B',
        marginBottom: 12,
    },
    progressBar: {
        height: 6,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 3,
    },
    taxCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    taxRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    taxLabel: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '600',
    },
    taxValue: {
        fontSize: 15,
        color: '#1E293B',
        fontWeight: '800',
    },
    taxCertBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9',
        paddingVertical: 14,
        borderRadius: 16,
        marginTop: 16,
    },
    taxCertIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    taxCertText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#475569',
    },
    receiptCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        alignItems: 'center',
    },
    receiptIconBox: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    receiptIcon: {
        fontSize: 24,
    },
    receiptInfo: {
        flex: 1,
    },
    receiptType: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    receiptMonth: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    receiptDate: {
        fontSize: 11,
        color: '#94A3B8',
        marginTop: 2,
    },
    receiptActions: {
        alignItems: 'flex-end',
    },
    receiptAmount: {
        fontSize: 16,
        fontWeight: '900',
        color: '#1E293B',
        marginBottom: 8,
    },
    downloadReceiptBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    downloadReceiptText: {
        fontSize: 11,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    requestDocBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9',
        paddingVertical: 16,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#E2E8F0',
        borderStyle: 'dashed',
        marginTop: 10,
    },
    requestDocIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    requestDocText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#475569',
    },
});

export default TeacherFeeHistoryScreen;
