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

const TeacherSyllabusScreen = ({ navigation }: any) => {
    const syllabusData = [
        {
            subject: 'Mathematics',
            grade: 'Grade 10-A',
            chapters: [
                { id: 1, title: 'Algebra & Quadratic Equations', status: 'Completed', progress: 100 },
                { id: 2, title: 'Trigonometry Applications', status: 'In Progress', progress: 65 },
                { id: 3, title: 'Coordinate Geometry', status: 'Pending', progress: 0 },
            ],
            color: '#4F46E5',
        },
        {
            subject: 'Calculus',
            grade: 'Grade 12-B',
            chapters: [
                { id: 1, title: 'Limits & Continuity', status: 'Completed', progress: 100 },
                { id: 2, title: 'Differentiation Basics', status: 'In Progress', progress: 40 },
                { id: 3, title: 'Integration Methods', status: 'Pending', progress: 0 },
            ],
            color: '#7C3AED',
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
                <Text style={styles.headerTitle}>Syllabus Management</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addIcon}>+</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Search / Filter Section */}
                <View style={styles.filterSection}>
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <Text style={styles.searchText}>Search chapters or subjects...</Text>
                    </View>
                </View>

                {syllabusData.map((course, index) => (
                    <View key={index} style={styles.courseSection}>
                        <View style={styles.courseHeader}>
                            <View style={[styles.courseIcon, { backgroundColor: course.color }]}>
                                <Text style={styles.courseIconText}>{course.subject.charAt(0)}</Text>
                            </View>
                            <View>
                                <Text style={styles.courseName}>{course.subject}</Text>
                                <Text style={styles.courseGrade}>{course.grade}</Text>
                            </View>
                        </View>

                        {course.chapters.map((chapter) => (
                            <View key={chapter.id} style={styles.chapterCard}>
                                <View style={styles.chapterInfo}>
                                    <View style={styles.chapterMain}>
                                        <Text style={styles.chapterTitle}>{chapter.title}</Text>
                                        <View style={[
                                            styles.statusBadge,
                                            { backgroundColor: chapter.status === 'Completed' ? '#DCFCE7' : chapter.status === 'In Progress' ? '#FEF3C7' : '#F1F5F9' }
                                        ]}>
                                            <Text style={[
                                                styles.statusText,
                                                { color: chapter.status === 'Completed' ? '#166534' : chapter.status === 'In Progress' ? '#92400E' : '#64748B' }
                                            ]}>{chapter.status}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.progressText}>{chapter.progress}% Completed</Text>
                                </View>

                                <View style={styles.progressBarBg}>
                                    <View style={[
                                        styles.progressBarFill,
                                        { width: `${chapter.progress}%`, backgroundColor: course.color }
                                    ]} />
                                </View>

                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>Update Progress</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
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
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#4F46E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '400',
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    filterSection: {
        marginVertical: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        padding: 12,
        borderRadius: 15,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    searchText: {
        color: '#94A3B8',
        fontSize: 14,
        fontWeight: '500',
    },
    courseSection: {
        marginBottom: 30,
    },
    courseHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    courseIcon: {
        width: 45,
        height: 45,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    courseIconText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '900',
    },
    courseName: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    courseGrade: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
    },
    chapterCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    chapterInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    chapterMain: {
        flex: 1,
    },
    chapterTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 6,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    statusText: {
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    progressText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#64748B',
    },
    progressBarBg: {
        height: 6,
        backgroundColor: '#F1F5F9',
        borderRadius: 3,
        marginBottom: 15,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 3,
    },
    updateButton: {
        backgroundColor: '#F8FAFC',
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    updateButtonText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#475569',
    }
});

export default TeacherSyllabusScreen;
