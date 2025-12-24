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
    TextInput,
    Image,
    Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const LibraryScreen = ({ navigation }: any) => {
    const [searchQuery, setSearchQuery] = useState('');

    const borrowedBooks = [
        { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: 'Dec 28, 2025', status: 'Return Soon', color: '#EF4444' },
        { id: '2', title: 'Physics: Dynamics', author: 'H.C. Verma', dueDate: 'Jan 05, 2026', status: 'In Hands', color: '#10B981' },
    ];

    const popularBooks = [
        { id: 'p1', title: 'Calculus Made Easy', author: 'Silvanus P.', category: 'Math', rating: '4.8' },
        { id: 'p2', title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', rating: '4.9' },
        { id: 'p3', title: 'World History', author: 'J.M. Roberts', category: 'History', rating: '4.7' },
    ];

    const categories = ['Science', 'History', 'Fiction', 'Biography', 'Math', 'Art'];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header with Search */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>School Library</Text>
                    <View style={{ width: 44 }} />
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search books, authors, ISBN..."
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* 1. Borrowed Books Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Currently Borrowed</Text>
                    <Text style={styles.countBadge}>{borrowedBooks.length}</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.borrowedScroll}>
                    {borrowedBooks.map((book) => (
                        <View key={book.id} style={styles.borrowedCard}>
                            <View style={styles.bookCoverPlaceholder}>
                                <Text style={styles.bookIconLarge}>📖</Text>
                            </View>
                            <View style={styles.bookDetails}>
                                <Text style={styles.bookTitle} numberOfLines={1}>{book.title}</Text>
                                <Text style={styles.bookAuthor}>{book.author}</Text>
                                <View style={[styles.dueBadge, { backgroundColor: book.color + '15' }]}>
                                    <View style={[styles.dueDot, { backgroundColor: book.color }]} />
                                    <Text style={[styles.dueText, { color: book.color }]}>Due: {book.dueDate}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* 2. Categories Selection */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Explore Categories</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
                    {categories.map((cat, i) => (
                        <TouchableOpacity key={i} style={styles.catChip}>
                            <Text style={styles.catChipText}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* 3. Recommended / Popular Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recommended for You</Text>
                    <TouchableOpacity><Text style={styles.viewAll}>See All</Text></TouchableOpacity>
                </View>

                <View style={styles.popularList}>
                    {popularBooks.map((book) => (
                        <TouchableOpacity key={book.id} style={styles.popularCard}>
                            <View style={styles.popularIconBox}>
                                <Text style={styles.popularIcon}>📚</Text>
                            </View>
                            <View style={styles.popularInfo}>
                                <Text style={styles.popularTitle}>{book.title}</Text>
                                <Text style={styles.popularAuthor}>{book.author} • {book.category}</Text>
                                <View style={styles.ratingRow}>
                                    <Text style={styles.starIcon}>⭐</Text>
                                    <Text style={styles.ratingText}>{book.rating}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.reserveBtn}>
                                <Text style={styles.reserveBtnTxt}>Reserve</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Library Timing Card */}
                <View style={styles.timingCard}>
                    <View style={styles.timingIconBox}>
                        <Text style={styles.timingIcon}>⏰</Text>
                    </View>
                    <View style={styles.timingInfo}>
                        <Text style={styles.timingTitle}>Library Timings</Text>
                        <Text style={styles.timingDesc}>Mon - Fri: 08:00 AM to 04:00 PM</Text>
                        <Text style={styles.timingDesc}>Sat: 08:00 AM to 12:00 PM</Text>
                    </View>
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
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 50,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    scrollBody: {
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    countBadge: {
        marginLeft: 10,
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: '800',
        color: '#4F46E5',
    },
    viewAll: {
        marginLeft: 'auto',
        fontSize: 13,
        fontWeight: '700',
        color: '#4F46E5',
    },
    borrowedScroll: {
        marginBottom: 24,
        marginLeft: -4,
    },
    borrowedCard: {
        width: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
            android: { elevation: 2 },
        }),
    },
    bookCoverPlaceholder: {
        width: 60,
        height: 85,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEF2FF',
    },
    bookIconLarge: {
        fontSize: 28,
    },
    bookDetails: {
        flex: 1,
        marginLeft: 16,
    },
    bookTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    bookAuthor: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    dueBadge: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 10,
    },
    dueDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
    },
    dueText: {
        fontSize: 10,
        fontWeight: '800',
    },
    catScroll: {
        marginBottom: 28,
        marginLeft: -4,
    },
    catChip: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 14,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    catChipText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#475569',
    },
    popularList: {
        marginBottom: 24,
    },
    popularCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    popularIconBox: {
        width: 50,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popularIcon: {
        fontSize: 24,
    },
    popularInfo: {
        flex: 1,
        marginLeft: 15,
    },
    popularTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    popularAuthor: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    starIcon: {
        fontSize: 12,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '800',
        color: '#1E293B',
    },
    reserveBtn: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
    },
    reserveBtnTxt: {
        fontSize: 12,
        fontWeight: '800',
        color: '#4F46E5',
    },
    timingCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F5F9',
        borderLeftWidth: 4,
        borderLeftColor: '#F59E0B',
    },
    timingIconBox: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#FFFBEB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    timingIcon: {
        fontSize: 20,
    },
    timingInfo: {
        flex: 1,
    },
    timingTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#475569',
        marginBottom: 4,
    },
    timingDesc: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '600',
        lineHeight: 18,
    },
});

export default LibraryScreen;
