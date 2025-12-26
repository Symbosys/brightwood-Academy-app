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
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const NoticeDetailScreen = ({ navigation, route }: any) => {
    // Creating a default fallback object in case params are missing, though they shouldn't be
    const notice = route.params?.notice || {
        title: 'Notice Detail',
        date: '---',
        desc: 'No details available.',
        tag: 'Notice',
        id: 0
    };

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
                <Text style={styles.headerTitle}>Notice Details</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Decorative Elements */}
                <View style={styles.paperContainer}>
                    <View style={styles.pinHole} />

                    {/* Notice Header Content */}
                    <View style={styles.noticeHeader}>
                        <View style={[
                            styles.tagBadge,
                            { backgroundColor: notice.tag === 'Holiday' ? '#EEF2FF' : notice.tag === 'Important' ? '#FEF2F2' : '#F0F9FF' }
                        ]}>
                            <Text style={[
                                styles.tagText,
                                { color: notice.tag === 'Holiday' ? '#4F46E5' : notice.tag === 'Important' ? '#EF4444' : '#0EA5E9' }
                            ]}>{notice.tag.toUpperCase()}</Text>
                        </View>
                        <Text style={styles.dateText}>{notice.date}</Text>
                    </View>

                    <Text style={styles.mainTitle}>{notice.title}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.bodyText}>
                        {notice.desc}
                    </Text>

                    {/* Extended mock content to make it look like a "full detail" screen if the desc is short */}
                    <Text style={styles.bodyText}>
                        {'\n'}
                        For any further clarifications regarding this notice, please contact the school administration office during working hours (8:00 AM - 2:00 PM).
                        {'\n'}{'\n'}
                        Thank you for your cooperation.
                    </Text>

                    <View style={styles.signatureSection}>
                        <Text style={styles.signName}>Principal</Text>
                        <Text style={styles.signTitle}>BrightWood Public School</Text>
                    </View>
                </View>
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
        padding: 20,
        paddingTop: 30,
    },
    paperContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        minHeight: 500,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20 },
            android: { elevation: 4 },
        }),
        position: 'relative',
    },
    pinHole: {
        width: 12,
        height: 12,
        backgroundColor: '#E2E8F0',
        borderRadius: 6,
        position: 'absolute',
        top: 24,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#CBD5E1',
    },
    noticeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    tagBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    tagText: {
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    dateText: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: '900',
        color: '#1E293B',
        marginBottom: 24,
        lineHeight: 32,
    },
    divider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginBottom: 24,
    },
    bodyText: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 26,
    },
    signatureSection: {
        marginTop: 60,
        alignItems: 'flex-end',
    },
    signName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        fontFamily: 'serif', // Trying to look like a signature or formal text
        fontStyle: 'italic',
    },
    signTitle: {
        fontSize: 12,
        color: '#94A3B8',
        marginTop: 4,
        fontWeight: '600',
    }
});

export default NoticeDetailScreen;
