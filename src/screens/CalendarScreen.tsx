import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

interface SchoolEvent {
    id: string;
    title: string;
    time: string;
    type: 'holiday' | 'exam' | 'event' | 'homework';
    color: string;
    description: string;
}

const CalendarScreen = ({ navigation }: any) => {
    const [selectedDate, setSelectedDate] = useState(24);
    const [currentMonth, setCurrentMonth] = useState('December 2025');

    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const events: SchoolEvent[] = [
        {
            id: '1',
            title: 'Mathematics Final Exam',
            time: '09:00 AM - 12:00 PM',
            type: 'exam',
            color: '#EF4444',
            description: 'Final semester exam for Math in Hall A',
        },
        {
            id: '2',
            title: 'Annual Sports Day',
            time: '08:00 AM - 04:00 PM',
            type: 'event',
            color: '#6366F1',
            description: 'Inter-house sports competitions and award ceremony',
        },
        {
            id: '3',
            title: 'Winter Break Starts',
            time: 'All Day',
            type: 'holiday',
            color: '#10B981',
            description: 'School closed for winter vacations',
        },
        {
            id: '4',
            title: 'Science Project Submission',
            time: 'Due by 2:00 PM',
            type: 'homework',
            color: '#F59E0B',
            description: 'Submit your solar system models to Mr. Sharma',
        }
    ];

    const getEventBadgeColor = (type: string) => {
        switch (type) {
            case 'holiday': return '#D1FAE5';
            case 'exam': return '#FEE2E2';
            case 'event': return '#E0E7FF';
            case 'homework': return '#FEF3C7';
            default: return '#F3F4F6';
        }
    };

    const getEventTextFill = (type: string) => {
        switch (type) {
            case 'holiday': return '#059669';
            case 'exam': return '#DC2626';
            case 'event': return '#4F46E5';
            case 'homework': return '#D97706';
            default: return '#4B5563';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>School Calendar</Text>
                    <Text style={styles.headerSub}>Academic Year 2025-26</Text>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterIcon}>🗓️</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Month Selector */}
                <View style={styles.monthSelector}>
                    <TouchableOpacity><Text style={styles.monthArrow}>‹</Text></TouchableOpacity>
                    <Text style={styles.monthText}>{currentMonth}</Text>
                    <TouchableOpacity><Text style={styles.monthArrow}>›</Text></TouchableOpacity>
                </View>

                {/* Calendar Grid */}
                <View style={styles.calendarCard}>
                    <View style={styles.weekHeader}>
                        {weekDays.map(day => (
                            <Text key={day} style={styles.weekDayText}>{day}</Text>
                        ))}
                    </View>
                    <View style={styles.daysGrid}>
                        {/* Empty padding for month start (assuming month starts on Monday for Dec 2025) */}
                        <View style={styles.dayBox} />
                        {daysInMonth.map(day => (
                            <TouchableOpacity
                                key={day}
                                style={[
                                    styles.dayBox,
                                    selectedDate === day && styles.selectedDayBox
                                ]}
                                onPress={() => setSelectedDate(day)}
                            >
                                <Text style={[
                                    styles.dayText,
                                    selectedDate === day && styles.selectedDayText,
                                    (day === 25 || day === 1) && styles.holidayText
                                ]}>
                                    {day}
                                </Text>
                                {[10, 15, 24, 25].includes(day) && (
                                    <View style={[
                                        styles.eventDot,
                                        day === 25 ? { backgroundColor: '#10B981' } :
                                            day === 10 ? { backgroundColor: '#EF4444' } :
                                                { backgroundColor: '#6366F1' }
                                    ]} />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Legend */}
                <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#EF4444' }]} />
                        <Text style={styles.legendText}>Exams</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
                        <Text style={styles.legendText}>Holidays</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#6366F1' }]} />
                        <Text style={styles.legendText}>Events</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
                        <Text style={styles.legendText}>Homework</Text>
                    </View>
                </View>

                {/* Selected Day Events */}
                <View style={styles.eventSection}>
                    <View style={styles.eventSectionHeader}>
                        <Text style={styles.eventSectionTitle}>
                            Events for Dec {selectedDate}
                        </Text>
                        <View style={styles.eventCount}>
                            <Text style={styles.eventCountText}>
                                {selectedDate === 24 ? '2 Events' : selectedDate === 25 ? '1 Event' : 'No Events'}
                            </Text>
                        </View>
                    </View>

                    {selectedDate === 24 ? (
                        <>
                            {events.slice(0, 2).map((event) => (
                                <View key={event.id} style={styles.eventCard}>
                                    <View style={[styles.eventIndicator, { backgroundColor: event.color }]} />
                                    <View style={styles.eventInfo}>
                                        <View style={styles.eventTop}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <View style={[styles.typeBadge, { backgroundColor: getEventBadgeColor(event.type) }]}>
                                                <Text style={[styles.typeBadgeText, { color: getEventTextFill(event.type) }]}>
                                                    {event.type.toUpperCase()}
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={styles.eventTime}>🕒 {event.time}</Text>
                                        <Text style={styles.eventDesc}>{event.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </>
                    ) : selectedDate === 25 ? (
                        <View style={styles.eventCard}>
                            <View style={[styles.eventIndicator, { backgroundColor: '#10B981' }]} />
                            <View style={styles.eventInfo}>
                                <View style={styles.eventTop}>
                                    <Text style={styles.eventTitle}>Christmas Day</Text>
                                    <View style={[styles.typeBadge, { backgroundColor: '#D1FAE5' }]}>
                                        <Text style={[styles.typeBadgeText, { color: '#059669' }]}>HOLIDAY</Text>
                                    </View>
                                </View>
                                <Text style={styles.eventTime}>🕒 All Day</Text>
                                <Text style={styles.eventDesc}>School closed for Christmas holiday.</Text>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyIcon}>📅</Text>
                            <Text style={styles.emptyText}>No school events scheduled for this day.</Text>
                            <Text style={styles.emptySub}>Enjoy your regular classes!</Text>
                        </View>
                    )}
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 3 },
        }),
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: '#1E293B',
    },
    headerTitleContainer: {
        flex: 1,
        marginLeft: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1E293B',
    },
    headerSub: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    filterButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterIcon: {
        fontSize: 20,
    },
    scrollContent: {
        padding: 20,
    },
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    monthText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    monthArrow: {
        fontSize: 24,
        color: '#6366F1',
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    calendarCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginBottom: 20,
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15 },
            android: { elevation: 4 },
        }),
    },
    weekHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    weekDayText: {
        width: (width - 72 - 32) / 7,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '700',
        color: '#94A3B8',
    },
    daysGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayBox: {
        width: (width - 72 - 32) / 7,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    },
    selectedDayBox: {
        backgroundColor: '#6366F1',
        borderRadius: 12,
    },
    dayText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E293B',
    },
    selectedDayText: {
        color: '#FFFFFF',
        fontWeight: '800',
    },
    holidayText: {
        color: '#EF4444',
    },
    eventDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginTop: 2,
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 24,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },
    legendText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#64748B',
    },
    eventSection: {
        marginTop: 10,
    },
    eventSectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    eventSectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    eventCount: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    eventCountText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#6366F1',
    },
    eventCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        flexDirection: 'row',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    eventIndicator: {
        width: 5,
        borderRadius: 2.5,
        marginRight: 16,
    },
    eventInfo: {
        flex: 1,
    },
    eventTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E293B',
        flex: 1,
        marginRight: 8,
    },
    typeBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    typeBadgeText: {
        fontSize: 9,
        fontWeight: '900',
    },
    eventTime: {
        fontSize: 13,
        color: '#6366F1',
        fontWeight: '600',
        marginBottom: 4,
    },
    eventDesc: {
        fontSize: 13,
        color: '#64748B',
        lineHeight: 18,
    },
    emptyState: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        borderStyle: 'dashed',
    },
    emptyIcon: {
        fontSize: 40,
        marginBottom: 12,
        opacity: 0.5,
    },
    emptyText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#475569',
        textAlign: 'center',
    },
    emptySub: {
        fontSize: 13,
        color: '#94A3B8',
        marginTop: 4,
        textAlign: 'center',
    },
});

export default CalendarScreen;
