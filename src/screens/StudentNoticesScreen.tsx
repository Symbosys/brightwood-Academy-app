import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';

const StudentNoticesScreen = ({ navigation }: any) => {
    const notices = [
        {
            id: 1,
            title: 'Winter Vacation',
            date: 'Dec 24, 2025',
            desc: 'School will remain closed from Dec 25th to Jan 5th for winter break. Classes resume on Jan 6th with regular timings.',
            tag: 'Holiday'
        },
        {
            id: 2,
            title: 'Uniform Policy Update',
            date: 'Dec 20, 2025',
            desc: 'Winter uniform is mandatory starting next Monday. Students without proper uniform will be marked for disciplinary action.',
            tag: 'Important'
        },
        {
            id: 3,
            title: 'Science Fair 2026',
            date: 'Dec 18, 2025',
            desc: 'Get ready for the Annual Science Fair! Registration opens on Jan 10th. Start planning your projects now.',
            tag: 'Event'
        },
        {
            id: 4,
            title: 'Library Books Return',
            date: 'Dec 15, 2025',
            desc: 'All students are requested to return borrowed library books before the winter break starts.',
            tag: 'Library'
        },
        {
            id: 5,
            title: 'Parent-Teacher Meeting',
            date: 'Dec 10, 2025',
            desc: 'PTM for Class 10 will be held on Dec 22nd from 9 AM to 12 PM. Please ensure your parents attend.',
            tag: 'Meeting'
        },
        {
            id: 6,
            title: 'Sports Day Selection',
            date: 'Dec 05, 2025',
            desc: 'Trials for the inter-house cricket tournament will begin next week. Interested students report to the sports ground.',
            tag: 'Sports'
        },
    ];

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
                <Text style={styles.headerTitle}>Notice Board</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {notices.map((nt, i) => (
                    <View key={i} style={styles.noticeCard}>
                        <View style={styles.cardHeader}>
                            <View style={[
                                styles.tagContainer,
                                { backgroundColor: nt.tag === 'Holiday' ? '#EEF2FF' : nt.tag === 'Important' ? '#FEF2F2' : '#F0F9FF' }
                            ]}>
                                <Text style={[
                                    styles.tagText,
                                    { color: nt.tag === 'Holiday' ? '#4F46E5' : nt.tag === 'Important' ? '#EF4444' : '#0EA5E9' }
                                ]}>{nt.tag}</Text>
                            </View>
                            <Text style={styles.dateText}>{nt.date}</Text>
                        </View>

                        <Text style={styles.noticeTitle}>{nt.title}</Text>
                        <Text style={styles.noticeDesc}>{nt.desc}</Text>

                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={() => navigation.navigate('NoticeDetail', { notice: nt })}>
                                <Text style={styles.readMore}>Read full detail →</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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
    scrollBody: {
        padding: 24,
        paddingTop: 30,
    },
    noticeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 2 },
        }),
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    tagContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    tagText: {
        fontSize: 11,
        fontWeight: '700',
    },
    dateText: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
    },
    noticeTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 8,
    },
    noticeDesc: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 22,
        marginBottom: 16,
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#F8FAFC',
        paddingTop: 12,
    },
    readMore: {
        fontSize: 13,
        color: '#4F46E5',
        fontWeight: '700',
    }
});

export default StudentNoticesScreen;
