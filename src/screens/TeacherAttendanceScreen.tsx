import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
    TextInput,
} from 'react-native';

const { width } = Dimensions.get('window');

const TeacherAttendanceScreen = ({ navigation }: any) => {
    const [selectedDate, setSelectedDate] = useState('Today, 24 Dec');
    const [searchQuery, setSearchQuery] = useState('');

    const [students, setStudents] = useState([
        { id: '1', name: 'Aditya Sharma', roll: '01', status: 'present', photo: 'AS' },
        { id: '2', name: 'Ananya Iyer', roll: '02', status: 'present', photo: 'AI' },
        { id: '3', name: 'Ishaan Verma', roll: '03', status: 'absent', photo: 'IV' },
        { id: '4', name: 'Kabir Singh', roll: '04', status: 'late', photo: 'KS' },
        { id: '5', name: 'Meera Reddy', roll: '05', status: 'present', photo: 'MR' },
        { id: '6', name: 'Rohan Gupta', roll: '06', status: 'null', photo: 'RG' },
    ]);

    const toggleStatus = (id: string, newStatus: string) => {
        setStudents(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
    };

    const stats = {
        present: students.filter(s => s.status === 'present').length,
        absent: students.filter(s => s.status === 'absent').length,
        late: students.filter(s => s.status === 'late').length,
        total: students.length,
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Mark Attendance</Text>
                    <Text style={styles.headerSub}>Grade 10-B • Mathematics</Text>
                </View>
                <TouchableOpacity style={styles.calendarButton}>
                    <Text style={styles.calendarIcon}>📅</Text>
                </TouchableOpacity>
            </View>

            {/* Quick Stats Summary */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: '#10B981' }]}>{stats.present}</Text>
                    <Text style={styles.statLabel}>Present</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: '#EF4444' }]}>{stats.absent}</Text>
                    <Text style={styles.statLabel}>Absent</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                    <Text style={[styles.statNumber, { color: '#F59E0B' }]}>{stats.late}</Text>
                    <Text style={styles.statLabel}>Late</Text>
                </View>
            </View>

            {/* Search and Date */}
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search student name or roll..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Student List ({students.length})</Text>
                    <TouchableOpacity>
                        <Text style={styles.markAllText}>Mark All Present</Text>
                    </TouchableOpacity>
                </View>

                {students.map((student) => (
                    <View key={student.id} style={styles.studentCard}>
                        <View style={styles.studentInfo}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>{student.photo}</Text>
                            </View>
                            <View>
                                <Text style={styles.studentName}>{student.name}</Text>
                                <Text style={styles.rollNo}>Roll No: {student.roll}</Text>
                            </View>
                        </View>

                        <View style={styles.statusActions}>
                            <TouchableOpacity
                                onPress={() => toggleStatus(student.id, 'present')}
                                style={[styles.statusBtn, student.status === 'present' && styles.presentActive]}
                            >
                                <Text style={[styles.statusBtnText, student.status === 'present' && styles.activeText]}>P</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => toggleStatus(student.id, 'absent')}
                                style={[styles.statusBtn, student.status === 'absent' && styles.absentActive]}
                            >
                                <Text style={[styles.statusBtnText, student.status === 'absent' && styles.activeText]}>A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => toggleStatus(student.id, 'late')}
                                style={[styles.statusBtn, student.status === 'late' && styles.lateActive]}
                            >
                                <Text style={[styles.statusBtnText, student.status === 'late' && styles.activeText]}>L</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Submit Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit Attendance</Text>
                </TouchableOpacity>
            </View>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
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
    headerTitleContainer: {
        flex: 1,
        marginLeft: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    headerSub: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    calendarButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendarIcon: {
        fontSize: 18,
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: '#F8FAFC',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: '900',
    },
    statLabel: {
        fontSize: 11,
        color: '#64748B',
        fontWeight: '700',
        marginTop: 2,
    },
    statDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#E2E8F0',
    },
    searchSection: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 48,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        fontWeight: '500',
        color: '#1E293B',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    markAllText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    studentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    studentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatarText: {
        fontSize: 14,
        fontWeight: '800',
        color: '#475569',
    },
    studentName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    rollNo: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    statusActions: {
        flexDirection: 'row',
    },
    statusBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    statusBtnText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#64748B',
    },
    presentActive: {
        backgroundColor: '#10B981',
        borderColor: '#10B981',
    },
    absentActive: {
        backgroundColor: '#EF4444',
        borderColor: '#EF4444',
    },
    lateActive: {
        backgroundColor: '#F59E0B',
        borderColor: '#F59E0B',
    },
    activeText: {
        color: '#FFFFFF',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        elevation: 10,
    },
    submitButton: {
        backgroundColor: '#4F46E5',
        height: 56,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#4F46E5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    }
});

export default TeacherAttendanceScreen;
