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

const RemarksScreen = ({ navigation }: any) => {
    const remarks = [
        {
            id: '1',
            teacher: 'Dr. Sarah Wilson',
            subject: 'Mathematics',
            date: 'Dec 22, 2025',
            type: 'Appreciation',
            text: 'Excellent performance in the quadratic equations test. Keep up the consistent hard work!',
            icon: '🌟',
            bgColor: '#FFFBEB',
            borderColor: '#FEF3C7',
            typeColor: '#D97706'
        },
        {
            id: '2',
            teacher: 'James Miller',
            subject: 'Physics',
            date: 'Dec 18, 2025',
            type: 'Discipline',
            text: 'Very active participation in the lab experiment today. Showed great leadership skills in the group.',
            icon: '🛡️',
            bgColor: '#F0FDF4',
            borderColor: '#BBF7D0',
            typeColor: '#16A34A'
        },
        {
            id: '3',
            teacher: 'Emily Davis',
            subject: 'Chemistry',
            date: 'Dec 15, 2025',
            type: 'Academic',
            text: 'Please focus more on organic chemistry equations. Recommended to attend the doubt session on Friday.',
            icon: '📚',
            bgColor: '#EEF2FF',
            borderColor: '#C7D2FE',
            typeColor: '#4F46E5'
        },
        {
            id: '4',
            teacher: 'Robert Brown',
            subject: 'Physical Ed.',
            date: 'Dec 10, 2025',
            type: 'Sports',
            text: 'Great teamwork during the inter-house basketball match. Improved stamina observed.',
            icon: '🏀',
            bgColor: '#FDF2F8',
            borderColor: '#FCE7F3',
            typeColor: '#DB2777'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header Area */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Teacher Remarks</Text>
                    <View style={{ width: 44 }} />
                </View>

                {/* Achievement Summary Card */}
                <View style={styles.summaryCard}>
                    <View style={styles.starCircle}>
                        <Text style={styles.starText}>⭐</Text>
                    </View>
                    <View style={styles.summaryInfo}>
                        <Text style={styles.performanceLabel}>Overall Performance</Text>
                        <Text style={styles.performanceStatus}>Excellent (Grade A)</Text>
                        <Text style={styles.pointsTxt}>You have 12 Appreciation Stars</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Remarks</Text>
                    <Text style={styles.totalCount}>{remarks.length} items</Text>
                </View>

                {remarks.map((item) => (
                    <View key={item.id} style={[styles.remarkCard, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}>
                        <View style={styles.remarkTop}>
                            <View style={styles.teacherInfo}>
                                <View style={styles.iconBox}>
                                    <Text style={styles.remarkIcon}>{item.icon}</Text>
                                </View>
                                <View>
                                    <Text style={styles.teacherName}>{item.teacher}</Text>
                                    <Text style={styles.subjectName}>{item.subject}</Text>
                                </View>
                            </View>
                            <View style={styles.dateBox}>
                                <Text style={styles.dateText}>{item.date}</Text>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.contentBody}>
                            <View style={[styles.typeBadge, { backgroundColor: 'rgba(255,255,255,0.8)' }]}>
                                <Text style={[styles.typeText, { color: item.typeColor }]}>{item.type}</Text>
                            </View>
                            <Text style={styles.remarkText}>{item.text}</Text>
                        </View>

                        <TouchableOpacity style={styles.acknowledgeBtn}>
                            <Text style={styles.acknowledgeTxt}>Acknowledge Remark</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Support Card */}
                <View style={styles.supportCard}>
                    <Text style={styles.supportTitle}>Internal Communication</Text>
                    <Text style={styles.supportDesc}>Remarks are officially recorded by subject teachers and can be discussed during Parent-Teacher Meetings (PTM).</Text>
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
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 20) + 15 : 20,
        paddingBottom: 85,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        zIndex: 10,
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
        bottom: -50,
        left: 24,
        right: 24,
        height: 110,
        backgroundColor: '#1E293B', // Dark theme for contrast
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 15 },
            android: { elevation: 12 },
        }),
    },
    starCircle: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F59E0B',
    },
    starText: {
        fontSize: 32,
    },
    summaryInfo: {
        flex: 1,
        marginLeft: 18,
    },
    performanceLabel: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    performanceStatus: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
        marginTop: 2,
    },
    pointsTxt: {
        fontSize: 12,
        color: '#F59E0B',
        fontWeight: '700',
        marginTop: 4,
    },
    scrollBody: {
        paddingTop: 85,
        paddingHorizontal: 24,
        zIndex: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    totalCount: {
        fontSize: 12,
        fontWeight: '700',
        color: '#94A3B8',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    remarkCard: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1.5,
    },
    remarkTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    teacherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    remarkIcon: {
        fontSize: 20,
    },
    teacherName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    subjectName: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    dateBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    dateText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#64748B',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.03)',
        marginBottom: 15,
    },
    contentBody: {
        marginBottom: 15,
    },
    typeBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginBottom: 10,
    },
    typeText: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    remarkText: {
        fontSize: 14,
        color: '#1E293B',
        lineHeight: 22,
        fontWeight: '500',
    },
    acknowledgeBtn: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    acknowledgeTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: '#64748B',
    },
    supportCard: {
        marginTop: 10,
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    supportTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#475569',
        marginBottom: 6,
    },
    supportDesc: {
        fontSize: 12,
        color: '#64748B',
        lineHeight: 18,
        fontWeight: '500',
    },
});

export default RemarksScreen;
