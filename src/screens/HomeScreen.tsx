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
    Image,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
    const categories = [
        { name: 'Tests', icon: '📝', count: '12', bg: '#EEF2FF', border: '#C7D2FE' },
        { name: 'Homework', icon: '📖', count: '05', bg: '#F0FDF4', border: '#BBF7D0' },
        { name: 'Schedule', icon: '🗓️', count: 'Daily', bg: '#FFF7ED', border: '#FED7AA' },
        { name: 'Fees', icon: '💳', count: 'Paid', bg: '#FDF2F8', border: '#FCE7F3' },
    ];

    const teachers = [
        { name: 'Dr. Sarah Wilson', subject: 'Math Guru', role: 'Head of Academics', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'James Miller', subject: 'Physics Expert', role: 'Senior Faculty', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
        { name: 'Emily Davis', subject: 'Chemistry', role: 'Coordinator', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
    ];

    const upcomingClasses = [
        { title: 'Mathematics: Calculus', time: '10:00 AM', room: 'Hall A', status: 'Live' },
        { title: 'Physics: Thermodynamics', time: '11:45 AM', room: 'Lab 2', status: 'Upcoming' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* PW Style Header Area */}
            <View style={styles.headerBackground}>
                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.schoolName}>BRIGHTWOOD PUBLIC SCHOOL</Text>
                        <View style={styles.userRow}>
                            <Text style={styles.welcomeTitle}>Hi, Alex Thompson</Text>
                            <View style={styles.onlineDot} />
                        </View>
                        <Text style={styles.classInfo}>Grade 10 • Section B • Roll 10245</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.profileBox}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <View style={styles.avatarMini}>
                            <Text style={styles.avatarTextMini}>AT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Progress Summary Overlay */}
                <View style={styles.summaryCard}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryVal}>92%</Text>
                        <Text style={styles.summaryLab}>Attendance</Text>
                    </View>
                    <View style={styles.summaryDivider} />
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryVal}>A+</Text>
                        <Text style={styles.summaryLab}>Performance</Text>
                    </View>
                    <View style={styles.summaryDivider} />
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryVal}>128</Text>
                        <Text style={styles.summaryLab}>Rank</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollArea}
                stickyHeaderIndices={[1]}
            >
                {/* 1. Statistics / Shortcuts Grid */}
                <View style={styles.catGrid}>
                    {categories.map((cat, i) => (
                        <TouchableOpacity key={i} style={[styles.catCard, { backgroundColor: cat.bg, borderColor: cat.border }]}>
                            <Text style={styles.catIcon}>{cat.icon}</Text>
                            <Text style={styles.catName}>{cat.name}</Text>
                            <View style={styles.catBadge}>
                                <Text style={styles.catBadgeText}>{cat.count}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 2. Announcement Banner (Sticky capable area) */}
                <View style={styles.announcementBanner}>
                    <View style={styles.bannerInfo}>
                        <Text style={styles.bannerTag}>NEW EVENT</Text>
                        <Text style={styles.bannerTitle}>Annual Science Fair 2025</Text>
                        <Text style={styles.bannerDesc}>Registration opens this Friday. Get your projects ready!</Text>
                    </View>
                    <View style={styles.bannerAction}>
                        <Text style={styles.bannerActionText}>JOIN</Text>
                    </View>
                </View>

                {/* 3. Meet Your Teachers (Horizontal Scroll) */}
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Your Expert Faculty</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teacherScroll}>
                    {teachers.map((teacher, i) => (
                        <View key={i} style={styles.teacherCard}>
                            <View style={styles.teacherImgBox}>
                                <Image source={{ uri: teacher.image }} style={styles.teacherImg} />
                            </View>
                            <Text style={styles.teacherName}>{teacher.name}</Text>
                            <Text style={styles.teacherSub}>{teacher.subject}</Text>
                            <View style={styles.teacherBadge}>
                                <Text style={styles.teacherBadgeText}>{teacher.role}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* 4. Today's Classes */}
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Today's Schedule</Text>
                </View>

                {upcomingClasses.map((cl, i) => (
                    <View key={i} style={styles.classCard}>
                        <View style={styles.classTimeBox}>
                            <Text style={styles.classTimeText}>{cl.time}</Text>
                        </View>
                        <View style={styles.classInfoBox}>
                            <Text style={styles.className}>{cl.title}</Text>
                            <Text style={styles.classRoom}>{cl.room}</Text>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: cl.status === 'Live' ? '#FEE2E2' : '#F1F5F9' }]}>
                            <View style={[styles.statusDot, { backgroundColor: cl.status === 'Live' ? '#EF4444' : '#64748B' }]} />
                            <Text style={[styles.statusText, { color: cl.status === 'Live' ? '#EF4444' : '#64748B' }]}>{cl.status}</Text>
                        </View>
                    </View>
                ))}

                {/* 5. School Insight Section */}
                <View style={styles.insightSection}>
                    <Text style={styles.insightTitle}>About BrightWood</Text>
                    <View style={styles.insightGrid}>
                        <View style={styles.insightItem}>
                            <Text style={styles.insightIcon}>🏛️</Text>
                            <Text style={styles.insightLabel}>30+ Years</Text>
                            <Text style={styles.insightSub}>Legacy</Text>
                        </View>
                        <View style={styles.insightItem}>
                            <Text style={styles.insightIcon}>🏆</Text>
                            <Text style={styles.insightLabel}>Top 10</Text>
                            <Text style={styles.insightSub}>School Index</Text>
                        </View>
                        <View style={styles.insightItem}>
                            <Text style={styles.insightIcon}>🏀</Text>
                            <Text style={styles.insightLabel}>Elite</Text>
                            <Text style={styles.insightSub}>Sports Fac.</Text>
                        </View>
                    </View>
                </View>

                {/* Footer Padding */}
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
    headerBackground: {
        backgroundColor: '#4F46E5',
        height: 220,
        paddingTop: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingHorizontal: 24,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    schoolName: {
        fontSize: 10,
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.7)',
        letterSpacing: 2,
        marginBottom: 8,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#34D399',
        marginLeft: 10,
    },
    classInfo: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
        fontWeight: '500',
    },
    profileBox: {
        padding: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
    },
    avatarMini: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTextMini: {
        fontSize: 18,
        fontWeight: '900',
        color: '#4F46E5',
    },
    summaryCard: {
        position: 'absolute',
        bottom: -35,
        left: 24,
        right: 24,
        height: 85,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15 },
            android: { elevation: 12 },
        }),
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryVal: {
        fontSize: 18,
        fontWeight: '900',
        color: '#1E293B',
    },
    summaryLab: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    summaryDivider: {
        width: 1,
        height: 35,
        backgroundColor: '#F1F5F9',
    },
    scrollArea: {
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    catGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
    },
    catCard: {
        width: (width - 48 - 36) / 4,
        paddingVertical: 18,
        borderRadius: 22,
        alignItems: 'center',
        borderWidth: 1.5,
    },
    catIcon: {
        fontSize: 22,
        marginBottom: 8,
    },
    catName: {
        fontSize: 10,
        fontWeight: '800',
        color: '#475569',
        textTransform: 'uppercase',
    },
    catBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: '#1E293B',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 8,
    },
    catBadgeText: {
        fontSize: 9,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    announcementBanner: {
        backgroundColor: '#4F46E5',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
        overflow: 'hidden',
    },
    bannerInfo: {
        flex: 1,
    },
    bannerTag: {
        fontSize: 10,
        fontWeight: '900',
        color: '#C7D2FE',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    bannerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    bannerDesc: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
        lineHeight: 18,
    },
    bannerAction: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    bannerActionText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#4F46E5',
    },
    sectionHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#1E293B',
    },
    seeAll: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    teacherScroll: {
        marginBottom: 28,
        marginLeft: -4,
    },
    teacherCard: {
        width: 140,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginRight: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 3 },
        }),
    },
    teacherImgBox: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#F8FAFC',
        marginBottom: 12,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#EEF2FF',
    },
    teacherImg: {
        width: '100%',
        height: '100%',
    },
    teacherName: {
        fontSize: 14,
        fontWeight: '800',
        color: '#1E293B',
        textAlign: 'center',
    },
    teacherSub: {
        fontSize: 11,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    teacherBadge: {
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        marginTop: 10,
    },
    teacherBadgeText: {
        fontSize: 9,
        fontWeight: '800',
        color: '#475569',
        textTransform: 'uppercase',
    },
    classCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    classTimeBox: {
        width: 75,
        paddingVertical: 10,
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    classTimeText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#1E293B',
    },
    classInfoBox: {
        flex: 1,
    },
    className: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    classRoom: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
    },
    statusText: {
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    insightSection: {
        marginTop: 20,
        backgroundColor: '#F1F5F9',
        borderRadius: 30,
        padding: 24,
    },
    insightTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 20,
        textAlign: 'center',
    },
    insightGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    insightItem: {
        alignItems: 'center',
    },
    insightIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    insightLabel: {
        fontSize: 13,
        fontWeight: '800',
        color: '#1E293B',
    },
    insightSub: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
});

export default HomeScreen;
