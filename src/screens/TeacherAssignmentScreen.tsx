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

const TeacherAssignmentScreen = ({ navigation }: any) => {
    const assignments = [
        {
            id: '1',
            title: 'Quadratic Equations Practice',
            subject: 'Mathematics',
            grade: 'Grade 10-A',
            dueDate: 'Dec 26, 2025',
            submissions: 42,
            totalStudents: 45,
            status: 'Active',
            color: '#4F46E5',
        },
        {
            id: '2',
            title: 'Calculus: Derivatives Quiz',
            subject: 'Mathematics',
            grade: 'Grade 12-B',
            dueDate: 'Dec 24, 2025',
            submissions: 38,
            totalStudents: 40,
            status: 'Evaluating',
            color: '#7C3AED',
        },
        {
            id: '3',
            title: 'Trigonometry Worksheet',
            subject: 'Mathematics',
            grade: 'Grade 10-C',
            dueDate: 'Dec 20, 2025',
            submissions: 45,
            totalStudents: 45,
            status: 'Completed',
            color: '#EC4899',
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Assignments</Text>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createText}>+ New</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Stats Summary */}
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statVal}>12</Text>
                        <Text style={styles.statLab}>Total</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Text style={[styles.statVal, { color: '#4F46E5' }]}>04</Text>
                        <Text style={styles.statLab}>Active</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statBox}>
                        <Text style={[styles.statVal, { color: '#EAB308' }]}>02</Text>
                        <Text style={styles.statLab}>Evaluation</Text>
                    </View>
                </View>

                {/* List Section */}
                <Text style={styles.sectionTitle}>Recent Assignments</Text>

                {assignments.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.assignmentCard}>
                        <View style={styles.cardHeader}>
                            <View style={[styles.subjectIndicator, { backgroundColor: item.color }]} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemSub}>{item.subject} • {item.grade}</Text>
                            </View>
                            <View style={[
                                styles.statusBadge,
                                { backgroundColor: item.status === 'Active' ? '#EEF2FF' : item.status === 'Evaluating' ? '#FEF3C7' : '#DCFCE7' }
                            ]}>
                                <Text style={[
                                    styles.statusText,
                                    { color: item.status === 'Active' ? '#4F46E5' : item.status === 'Evaluating' ? '#92400E' : '#166534' }
                                ]}>{item.status}</Text>
                            </View>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.metaRow}>
                                <View style={styles.metaItem}>
                                    <Text style={styles.metaIcon}>📅</Text>
                                    <Text style={styles.metaText}>Due: {item.dueDate}</Text>
                                </View>
                                <View style={styles.metaItem}>
                                    <Text style={styles.metaIcon}>👥</Text>
                                    <Text style={styles.metaText}>{item.submissions}/{item.totalStudents} Submitted</Text>
                                </View>
                            </View>

                            <View style={styles.progressContainer}>
                                <View style={styles.progressLabelRow}>
                                    <Text style={styles.progressLabel}>Submission Rate</Text>
                                    <Text style={styles.progressVal}>{Math.round((item.submissions / item.totalStudents) * 100)}%</Text>
                                </View>
                                <View style={styles.progressBg}>
                                    <View style={[
                                        styles.progressFill,
                                        { width: `${(item.submissions / item.totalStudents) * 100}%`, backgroundColor: item.color }
                                    ]} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardFooter}>
                            <TouchableOpacity style={styles.footerAction}>
                                <Text style={styles.actionText}>View Submissions</Text>
                            </TouchableOpacity>
                            <View style={styles.footerDivider} />
                            <TouchableOpacity style={styles.footerAction}>
                                <Text style={styles.actionText}>Edit Details</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
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
    createButton: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    createText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '800',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    statsRow: {
        flexDirection: 'row',
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        padding: 20,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
    },
    statVal: {
        fontSize: 20,
        fontWeight: '900',
        color: '#1E293B',
    },
    statLab: {
        fontSize: 11,
        color: '#64748B',
        fontWeight: '700',
        marginTop: 4,
        textTransform: 'uppercase',
    },
    statDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#E2E8F0',
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 16,
    },
    assignmentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    subjectIndicator: {
        width: 4,
        height: 35,
        borderRadius: 2,
        marginRight: 12,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 2,
    },
    itemSub: {
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
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    cardBody: {
        marginBottom: 20,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaIcon: {
        fontSize: 14,
        marginRight: 6,
    },
    metaText: {
        fontSize: 12,
        color: '#475569',
        fontWeight: '600',
    },
    progressContainer: {},
    progressLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    progressLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
    },
    progressVal: {
        fontSize: 11,
        color: '#1E293B',
        fontWeight: '800',
    },
    progressBg: {
        height: 8,
        backgroundColor: '#F1F5F9',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    cardFooter: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        paddingTop: 16,
    },
    footerAction: {
        flex: 1,
        alignItems: 'center',
    },
    footerDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#F1F5F9',
    },
    actionText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    }
});

export default TeacherAssignmentScreen;
