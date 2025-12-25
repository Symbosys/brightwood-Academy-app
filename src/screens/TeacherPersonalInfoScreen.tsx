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
    TextInput,
} from 'react-native';

const { width } = Dimensions.get('window');

const TeacherPersonalInfoScreen = ({ navigation }: any) => {
    const [isEditing, setIsEditing] = useState(false);

    const personalInfo = {
        fullName: 'Dr. Sarah Wilson',
        employeeId: 'BW-FAC-2019-045',
        designation: 'Senior Mathematics Faculty',
        department: 'Science & Mathematics',
        dateOfBirth: 'March 15, 1985',
        gender: 'Female',
        bloodGroup: 'O+',
        nationality: 'American',
        email: 'sarah.wilson@brightwood.edu',
        phone: '+1 (555) 123-4567',
        emergencyContact: '+1 (555) 987-6543',
        emergencyName: 'John Wilson (Spouse)',
        address: '245 Oak Street, Apartment 12B',
        city: 'Springfield',
        state: 'Illinois',
        zipCode: '62701',
        joiningDate: 'August 20, 2019',
        experience: '12 Years',
        qualification: 'Ph.D. in Mathematics',
        specialization: 'Algebra & Calculus',
    };

    const InfoSection = ({ title, items }: { title: string; items: { label: string; value: string; icon?: string }[] }) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {items.map((item, i) => (
                <View key={i} style={styles.infoRow}>
                    <View style={styles.infoLeft}>
                        {item.icon && <Text style={styles.infoIcon}>{item.icon}</Text>}
                        <Text style={styles.infoLabel}>{item.label}</Text>
                    </View>
                    <Text style={styles.infoValue}>{item.value}</Text>
                </View>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Personal Information</Text>
                    <TouchableOpacity
                        style={styles.editBtn}
                        onPress={() => setIsEditing(!isEditing)}
                    >
                        <Text style={styles.editIcon}>{isEditing ? '💾' : '✏️'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarTxt}>SW</Text>
                        </View>
                        <View style={styles.verifiedBadge}>
                            <Text style={styles.verifiedIcon}>✓</Text>
                        </View>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.teacherName}>{personalInfo.fullName}</Text>
                        <Text style={styles.teacherMeta}>{personalInfo.designation}</Text>
                        <View style={styles.idPill}>
                            <Text style={styles.idText}>ID: {personalInfo.employeeId}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Basic Information */}
                <InfoSection
                    title="Basic Details"
                    items={[
                        { label: 'Full Name', value: personalInfo.fullName, icon: '👤' },
                        { label: 'Date of Birth', value: personalInfo.dateOfBirth, icon: '🎂' },
                        { label: 'Gender', value: personalInfo.gender, icon: '⚧' },
                        { label: 'Blood Group', value: personalInfo.bloodGroup, icon: '🩸' },
                        { label: 'Nationality', value: personalInfo.nationality, icon: '🌍' },
                    ]}
                />

                {/* Contact Information */}
                <InfoSection
                    title="Contact Details"
                    items={[
                        { label: 'Email Address', value: personalInfo.email, icon: '📧' },
                        { label: 'Phone Number', value: personalInfo.phone, icon: '📱' },
                        { label: 'Emergency Contact', value: personalInfo.emergencyContact, icon: '🚨' },
                        { label: 'Emergency Name', value: personalInfo.emergencyName, icon: '👨‍👩‍👧' },
                    ]}
                />

                {/* Address Information */}
                <InfoSection
                    title="Residential Address"
                    items={[
                        { label: 'Street Address', value: personalInfo.address, icon: '🏠' },
                        { label: 'City', value: personalInfo.city, icon: '🏙️' },
                        { label: 'State', value: personalInfo.state, icon: '📍' },
                        { label: 'ZIP Code', value: personalInfo.zipCode, icon: '📮' },
                    ]}
                />

                {/* Professional Information */}
                <InfoSection
                    title="Professional Details"
                    items={[
                        { label: 'Department', value: personalInfo.department, icon: '🏫' },
                        { label: 'Joining Date', value: personalInfo.joiningDate, icon: '📅' },
                        { label: 'Experience', value: personalInfo.experience, icon: '⏱️' },
                        { label: 'Qualification', value: personalInfo.qualification, icon: '🎓' },
                        { label: 'Specialization', value: personalInfo.specialization, icon: '📚' },
                    ]}
                />

                {/* Action Buttons */}
                <View style={styles.actionSection}>
                    <TouchableOpacity style={styles.downloadBtn}>
                        <Text style={styles.downloadIcon}>📄</Text>
                        <Text style={styles.downloadTxt}>Download Profile PDF</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.updateBtn}>
                        <Text style={styles.updateIcon}>🔄</Text>
                        <Text style={styles.updateTxt}>Request Profile Update</Text>
                    </TouchableOpacity>
                </View>

                {/* Footer Note */}
                <View style={styles.footerNote}>
                    <Text style={styles.noteIcon}>ℹ️</Text>
                    <Text style={styles.noteText}>
                        To update your personal information, please contact the HR department or submit a request through the admin portal.
                    </Text>
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
        paddingBottom: 30,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        zIndex: 10,
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
    editBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        fontSize: 18,
    },
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 4,
        position: 'relative',
    },
    avatar: {
        flex: 1,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarTxt: {
        fontSize: 24,
        fontWeight: '900',
        color: '#4F46E5',
    },
    verifiedBadge: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4F46E5',
    },
    verifiedIcon: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '900',
    },
    profileInfo: {
        marginLeft: 16,
        flex: 1,
    },
    teacherName: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    teacherMeta: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 2,
        fontWeight: '600',
    },
    idPill: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 8,
    },
    idText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '800',
    },
    scrollBody: {
        paddingTop: 30,
        paddingHorizontal: 24,
    },
    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    infoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    infoIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    infoLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#64748B',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E293B',
        textAlign: 'right',
        flex: 1,
    },
    actionSection: {
        marginTop: 10,
        marginBottom: 20,
    },
    downloadBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F46E5',
        paddingVertical: 16,
        borderRadius: 16,
        marginBottom: 12,
        elevation: 2,
    },
    downloadIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    downloadTxt: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '800',
    },
    updateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9',
        paddingVertical: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    updateIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    updateTxt: {
        color: '#475569',
        fontSize: 14,
        fontWeight: '800',
    },
    footerNote: {
        flexDirection: 'row',
        backgroundColor: '#FFFBEB',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#FEF3C7',
    },
    noteIcon: {
        fontSize: 16,
        marginRight: 10,
    },
    noteText: {
        flex: 1,
        fontSize: 12,
        color: '#92400E',
        lineHeight: 18,
        fontWeight: '500',
    },
});

export default TeacherPersonalInfoScreen;
