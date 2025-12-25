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

const ParentDiaryScreen = ({ navigation }: any) => {
    const [selectedDate, setSelectedDate] = useState('Today');

    const diaryEntries = [
        {
            category: 'Homework',
            subject: 'Mathematics',
            title: 'Ex 5.4 - Quadratic Equations',
            content: 'Complete questions 1 to 10. Show all working steps clearly in the notebook.',
            color: '#4F46E5',
            icon: '📐',
        },
        {
            category: 'Homework',
            subject: 'Science',
            title: 'Refraction of Light',
            content: 'Draw the ray diagram for light passing through a rectangular glass slab.',
            color: '#10B981',
            icon: '🔬',
        },
        {
            category: 'Teacher\'s Note',
            subject: 'General',
            title: 'Material Required',
            content: 'Please send a set of watercolors and brushes for tomorrow\'s art class.',
            color: '#F59E0B',
            icon: '🎨',
        },
        {
            category: 'Reminder',
            subject: 'Exam',
            title: 'Unit Test Schedule',
            content: 'Unit tests for the second term are starting from next Monday. Please follow the timetable.',
            color: '#EF4444',
            icon: '📅',
        },
    ];

    const dates = [
        { day: 'Mon', date: '22', label: 'Mon' },
        { day: 'Tue', date: '23', label: 'Tue' },
        { day: 'Wed', date: '24', label: 'Wed' },
        { day: 'Thu', date: '25', label: 'Today' },
        { day: 'Fri', date: '26', label: 'Fri' },
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
                    <Text style={styles.headerTitle}>School Diary</Text>
                    <TouchableOpacity style={styles.notifBtn}>
                        <Text style={styles.notifIcon}>🔔</Text>
                    </TouchableOpacity>
                </View>

                {/* Date Selector */}
                <View style={styles.dateSelector}>
                    {dates.map((item, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => setSelectedDate(item.label)}
                            style={[styles.dateItem, selectedDate === item.label && styles.dateItemActive]}
                        >
                            <Text style={[styles.dayText, selectedDate === item.label && styles.dayTextActive]}>{item.day}</Text>
                            <Text style={[styles.dateText, selectedDate === item.label && styles.dateTextActive]}>{item.date}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                <View style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>Today's Entries</Text>
                    <Text style={styles.entryCount}>{diaryEntries.length} Items</Text>
                </View>

                {diaryEntries.map((item, i) => (
                    <View key={i} style={styles.entryCard}>
                        <View style={[styles.categoryStrip, { backgroundColor: item.color }]} />
                        <View style={styles.entryMain}>
                            <View style={styles.entryHeader}>
                                <View style={styles.subjectBox}>
                                    <Text style={styles.subjectIcon}>{item.icon}</Text>
                                    <View>
                                        <Text style={styles.subjectName}>{item.subject}</Text>
                                        <Text style={[styles.categoryTag, { color: item.color }]}>{item.category}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.moreBtn}>
                                    <Text style={styles.moreIcon}>•••</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.entryTitle}>{item.title}</Text>
                            <Text style={styles.entryContent}>{item.content}</Text>

                            <View style={styles.entryFooter}>
                                <View style={styles.teacherInfo}>
                                    <View style={styles.teacherAvatarMini}>
                                        <Text style={styles.teacherAvatarTxt}>JS</Text>
                                    </View>
                                    <Text style={styles.teacherName}>Mrs. J. Smith</Text>
                                </View>
                                <View style={styles.timeTag}>
                                    <Text style={styles.timeText}>02:30 PM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                {/* Completion Acknowledge PW Vibe */}
                <TouchableOpacity style={styles.signBanner}>
                    <View style={styles.signLeft}>
                        <Text style={styles.signTitle}>Acknowledge Diary</Text>
                        <Text style={styles.signSub}>Tap to sign for Dec 25, 2025</Text>
                    </View>
                    <View style={styles.signBtn}>
                        <Text style={styles.signBtnTxt}>Sign Now</Text>
                    </View>
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
    header: {
        backgroundColor: '#4F46E5',
        paddingTop: Platform.OS === 'ios' ? 10 : 20,
        paddingBottom: 30,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
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
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    notifBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifIcon: {
        fontSize: 18,
    },
    dateSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateItem: {
        width: (width - 48 - 60) / 5,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateItemActive: {
        backgroundColor: '#FFFFFF',
    },
    dayText: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
    },
    dayTextActive: {
        color: '#94A3B8',
    },
    dateText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '800',
        marginTop: 2,
    },
    dateTextActive: {
        color: '#1E293B',
    },
    scrollBody: {
        paddingTop: 30,
        paddingHorizontal: 24,
    },
    sectionHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    entryCount: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '700',
    },
    entryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    categoryStrip: {
        width: 8,
        height: '100%',
    },
    entryMain: {
        flex: 1,
        padding: 20,
    },
    entryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    subjectBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subjectIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    subjectName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    categoryTag: {
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase',
        marginTop: 2,
    },
    moreBtn: {
        padding: 5,
    },
    moreIcon: {
        color: '#CBD5E1',
        fontSize: 16,
    },
    entryTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 8,
    },
    entryContent: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 20,
        fontWeight: '500',
        marginBottom: 15,
    },
    entryFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#F8FAFC',
    },
    teacherInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    teacherAvatarMini: {
        width: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    teacherAvatarTxt: {
        fontSize: 10,
        fontWeight: '900',
        color: '#4F46E5',
    },
    teacherName: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '700',
    },
    timeTag: {
        backgroundColor: '#F8FAFC',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    timeText: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '800',
    },
    signBanner: {
        marginTop: 10,
        backgroundColor: '#1E293B',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    signLeft: {
        flex: 1,
    },
    signTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    },
    signSub: {
        color: '#94A3B8',
        fontSize: 12,
        marginTop: 2,
        fontWeight: '500',
    },
    signBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
    },
    signBtnTxt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '800',
    },
});

export default ParentDiaryScreen;
