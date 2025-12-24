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

const ParentHomeScreen = ({ navigation }: any) => {
    const childStats = [
        { label: 'Attendance', val: '94%', color: '#10B981' },
        { label: 'Fee Status', val: 'Due', color: '#F59E0B' },
        { label: 'Avg Mark', val: '88/100', color: '#4F46E5' },
    ];

    const alerts = [
        { title: 'New Marksheet Released', time: '2h ago', body: 'The monthly test results for Grade 10-B have been published.', type: 'Academic' },
        { title: 'Bus Running Late', time: '10m ago', body: 'Route 101 is delayed by 15 minutes due to traffic.', type: 'Transport' },
    ];

    const childMenu = [
        { name: 'Fee Pay', icon: '💳', bg: '#FDF2F8', border: '#FCE7F3' },
        { name: 'Diary', icon: '📔', bg: '#F0FDF4', border: '#BBF7D0' },
        { name: 'Leave', icon: '✉️', bg: '#EEF2FF', border: '#C7D2FE' },
        { name: 'Health', icon: '🩺', bg: '#FFF7ED', border: '#FED7AA' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            <View style={styles.headerBackground}>
                <View style={styles.headerContent}>
                    <View>
                        <Text style={styles.schoolName}>PARENT ACCESS • BRIGHTWOOD</Text>
                        <Text style={styles.welcomeTitle}>Mr. Thompson</Text>
                        <View style={styles.childSwitcher}>
                            <Text style={styles.childInfo}>Child: Alex Thompson (Grade 10-B)</Text>
                            <Text style={styles.switchTxt}>Switch ▾</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.profileBox}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <View style={styles.avatarMini}>
                            <Text style={styles.avatarTextMini}>MT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Parent Summary Card */}
                <View style={styles.summaryCard}>
                    {childStats.map((stat, i) => (
                        <React.Fragment key={i}>
                            <View style={styles.summaryItem}>
                                <Text style={[styles.summaryVal, { color: stat.color }]}>{stat.val}</Text>
                                <Text style={styles.summaryLab}>{stat.label}</Text>
                            </View>
                            {i < childStats.length - 1 && <View style={styles.summaryDivider} />}
                        </React.Fragment>
                    ))}
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollArea}
            >
                {/* Child Quick Actions */}
                <View style={styles.catGrid}>
                    {childMenu.map((cat, i) => (
                        <TouchableOpacity key={i} style={[styles.catCard, { backgroundColor: cat.bg, borderColor: cat.border }]}>
                            <Text style={styles.catIcon}>{cat.icon}</Text>
                            <Text style={styles.catName}>{cat.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Today's Tracking Banner */}
                <View style={styles.trackingBanner}>
                    <View style={styles.trackIconBox}>
                        <Text style={styles.trackIcon}>🚌</Text>
                    </View>
                    <View style={styles.trackInfo}>
                        <Text style={styles.trackTitle}>School Bus Status</Text>
                        <Text style={styles.trackSub}>Near: Central Market (2km away)</Text>
                    </View>
                    <TouchableOpacity style={styles.trackBtn}>
                        <Text style={styles.trackBtnText}>Track</Text>
                    </TouchableOpacity>
                </View>

                {/* Important Alerts */}
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Child Activity Feed</Text>
                </View>

                {alerts.map((item, i) => (
                    <View key={i} style={styles.alertCard}>
                        <View style={styles.alertHeader}>
                            <Text style={styles.alertType}>{item.type}</Text>
                            <Text style={styles.alertTime}>{item.time}</Text>
                        </View>
                        <Text style={styles.alertTitle}>{item.title}</Text>
                        <Text style={styles.alertBody}>{item.body}</Text>
                    </View>
                ))}

                {/* Contact Teacher PW Vibe */}
                <TouchableOpacity style={styles.messageBanner}>
                    <View style={styles.pills}>
                        <View style={styles.pill} />
                        <View style={styles.pill} />
                        <View style={styles.pill} />
                    </View>
                    <Text style={styles.msgText}>Have concerns? Directly message Class Teacher</Text>
                    <Text style={styles.msgBtn}>Open Chat &rsaquo;</Text>
                </TouchableOpacity>

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
    welcomeTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    childSwitcher: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    childInfo: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '600',
    },
    switchTxt: {
        fontSize: 11,
        color: '#FFFFFF',
        fontWeight: '900',
        marginLeft: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
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
        backgroundColor: '#C7D2FE',
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
        elevation: 10,
    },
    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },
    summaryVal: {
        fontSize: 18,
        fontWeight: '900',
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
        fontSize: 9,
        fontWeight: '800',
        color: '#475569',
        textTransform: 'uppercase',
    },
    trackingBanner: {
        backgroundColor: '#F1F5F9',
        borderRadius: 24,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
    },
    trackIconBox: {
        width: 45,
        height: 45,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    trackIcon: {
        fontSize: 20,
    },
    trackInfo: {
        flex: 1,
    },
    trackTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#1E293B',
    },
    trackSub: {
        fontSize: 11,
        color: '#64748B',
        marginTop: 2,
    },
    trackBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#4F46E5',
        borderRadius: 10,
    },
    trackBtnText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '800',
    },
    sectionHead: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#1E293B',
    },
    alertCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    alertHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    alertType: {
        fontSize: 10,
        fontWeight: '800',
        color: '#4F46E5',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    alertTime: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '600',
    },
    alertTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    alertBody: {
        fontSize: 12,
        color: '#64748B',
        lineHeight: 18,
        marginTop: 4,
    },
    messageBanner: {
        marginTop: 10,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        padding: 24,
        overflow: 'hidden',
    },
    pills: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    pill: {
        width: 15,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#4F46E5',
        marginRight: 4,
    },
    msgText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 22,
    },
    msgBtn: {
        color: '#4F46E5',
        fontSize: 12,
        fontWeight: '900',
        marginTop: 15,
        textTransform: 'uppercase',
    },
});

export default ParentHomeScreen;
