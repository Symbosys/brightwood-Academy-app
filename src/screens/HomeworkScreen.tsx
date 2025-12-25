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

const HomeworkScreen = ({ navigation }: any) => {
    const [filter, setFilter] = useState<'Pending' | 'Completed' | 'All'>('Pending');

    const homeworks = [
        {
            subject: 'Mathematics',
            title: 'Quadratic Equations Worksheet',
            dueDate: 'Tomorrow',
            priority: 'High',
            status: 'Pending',
            desc: 'Solve all problems from exercise 4.2 in the workbook.',
            icon: '📐',
            color: '#6366F1'
        },
        {
            subject: 'Physics',
            title: 'Thermodynamics Lab Report',
            dueDate: 'Dec 27, 2025',
            priority: 'Medium',
            status: 'Pending',
            desc: 'Submit the final report for the heat transfer experiment.',
            icon: '🧪',
            color: '#10B981'
        },
        {
            subject: 'English',
            title: 'Creative Writing: Shakespeare',
            dueDate: 'Completed',
            priority: 'Low',
            status: 'Completed',
            desc: 'Write an essay comparing Hamlet and Macbeth.',
            icon: '✍️',
            color: '#EC4899'
        },
        {
            subject: 'History',
            title: 'French Revolution Timeline',
            dueDate: 'Dec 30, 2025',
            priority: 'Medium',
            status: 'Pending',
            desc: 'Create a visual timeline of the major events from 1789-1799.',
            icon: '📜',
            color: '#F59E0B'
        }
    ];

    const filteredHomework = homeworks.filter(hw =>
        filter === 'All' ? true : hw.status === filter
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Homework</Text>
                    <View style={{ width: 44 }} />
                </View>

                {/* Filter Tabs */}
                <View style={styles.tabContainer}>
                    {(['Pending', 'Completed', 'All'] as const).map((t) => (
                        <TouchableOpacity
                            key={t}
                            onPress={() => setFilter(t)}
                            style={[styles.tab, filter === t && styles.activeTab]}
                        >
                            <Text style={[styles.tabText, filter === t && styles.activeTabText]}>{t}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {filteredHomework.length > 0 ? (
                    filteredHomework.map((hw, i) => (
                        <View key={i} style={styles.hwCard}>
                            <View style={styles.hwTop}>
                                <View style={[styles.iconBox, { backgroundColor: hw.color + '15' }]}>
                                    <Text style={styles.hwIcon}>{hw.icon}</Text>
                                </View>
                                <View style={styles.hwSubjectInfo}>
                                    <Text style={styles.hwSubject}>{hw.subject}</Text>
                                    <View style={[styles.priorityBadge, { backgroundColor: hw.priority === 'High' ? '#FEF2F2' : '#F1F5F9' }]}>
                                        <Text style={[styles.priorityTxt, { color: hw.priority === 'High' ? '#EF4444' : '#64748B' }]}>
                                            {hw.priority} Priority
                                        </Text>
                                    </View>
                                </View>
                                {hw.status === 'Completed' && (
                                    <View style={styles.completedCheck}>
                                        <Text style={styles.checkIcon}>✓</Text>
                                    </View>
                                )}
                            </View>

                            <Text style={styles.hwTitle}>{hw.title}</Text>
                            <Text style={styles.hwDesc} numberOfLines={2}>{hw.desc}</Text>

                            <View style={styles.divider} />

                            <View style={styles.hwFooter}>
                                <View>
                                    <Text style={styles.footerLabel}>Due Date</Text>
                                    <Text style={[styles.footerVal, hw.dueDate === 'Tomorrow' && { color: '#EF4444' }]}>
                                        {hw.dueDate}
                                    </Text>
                                </View>
                                <TouchableOpacity style={[styles.actionBtn, hw.status === 'Completed' && styles.viewBtn]}>
                                    <Text style={[styles.actionBtnTxt, hw.status === 'Completed' && styles.viewBtnTxt]}>
                                        {hw.status === 'Completed' ? 'View Details' : 'Submit Now'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyIcon}>🎉</Text>
                        <Text style={styles.emptyTitle}>All caught up!</Text>
                        <Text style={styles.emptyDesc}>You have no {filter.toLowerCase()} homework assignments.</Text>
                    </View>
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
        paddingBottom: 25,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
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
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
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
    },
    tabText: {
        fontSize: 14,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    activeTabText: {
        color: '#4F46E5',
    },
    scrollBody: {
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    hwCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 2 },
        }),
    },
    hwTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    hwIcon: {
        fontSize: 22,
    },
    hwSubjectInfo: {
        flex: 1,
    },
    hwSubject: {
        fontSize: 12,
        fontWeight: '800',
        color: '#94A3B8',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    priorityBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
        marginTop: 4,
    },
    priorityTxt: {
        fontSize: 10,
        fontWeight: '700',
    },
    completedCheck: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '900',
    },
    hwTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 8,
    },
    hwDesc: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
        marginBottom: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginBottom: 16,
    },
    hwFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#94A3B8',
        textTransform: 'uppercase',
    },
    footerVal: {
        fontSize: 13,
        fontWeight: '800',
        color: '#475569',
        marginTop: 2,
    },
    actionBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
    },
    actionBtnTxt: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '800',
    },
    viewBtn: {
        backgroundColor: '#F1F5F9',
    },
    viewBtnTxt: {
        color: '#4F46E5',
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 100,
    },
    emptyIcon: {
        fontSize: 60,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 8,
    },
    emptyDesc: {
        fontSize: 14,
        color: '#64748B',
        textAlign: 'center',
        paddingHorizontal: 40,
    }
});

export default HomeworkScreen;
