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
} from 'react-native';

const { width } = Dimensions.get('window');

const TeacherGuardianScreen = ({ navigation }: any) => {
    const emergencyContacts = [
        {
            id: '1',
            name: 'John Wilson',
            relationship: 'Spouse',
            phone: '+1 (555) 987-6543',
            email: 'john.wilson@email.com',
            address: '245 Oak Street, Apartment 12B, Springfield, IL 62701',
            isPrimary: true,
        },
        {
            id: '2',
            name: 'Margaret Wilson',
            relationship: 'Mother',
            phone: '+1 (555) 234-5678',
            email: 'margaret.w@email.com',
            address: '89 Maple Avenue, Springfield, IL 62702',
            isPrimary: false,
        },
    ];

    const familyMembers = [
        { name: 'John Wilson', relationship: 'Spouse', age: '42', occupation: 'Software Engineer' },
        { name: 'Emma Wilson', relationship: 'Daughter', age: '12', occupation: 'Student (Grade 7)' },
        { name: 'Lucas Wilson', relationship: 'Son', age: '8', occupation: 'Student (Grade 3)' },
    ];

    const medicalInfo = {
        bloodGroup: 'O+',
        allergies: 'Pollen (Seasonal)',
        medications: 'None',
        medicalConditions: 'None',
        insuranceProvider: 'HealthCare Plus',
        policyNumber: 'HCP-2024-789456',
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backIcon}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Family & Emergency</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <Text style={styles.editIcon}>✏️</Text>
                    </TouchableOpacity>
                </View>

                {/* Alert Banner */}
                <View style={styles.alertBanner}>
                    <Text style={styles.alertIcon}>🚨</Text>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>Emergency Contacts</Text>
                        <Text style={styles.alertDesc}>Keep your emergency contacts updated for safety</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollBody}
            >
                {/* Emergency Contacts */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Emergency Contacts</Text>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnText}>+ Add</Text>
                    </TouchableOpacity>
                </View>

                {emergencyContacts.map((contact) => (
                    <View key={contact.id} style={styles.contactCard}>
                        {contact.isPrimary && (
                            <View style={styles.primaryBadge}>
                                <Text style={styles.primaryBadgeText}>PRIMARY</Text>
                            </View>
                        )}
                        <View style={styles.contactHeader}>
                            <View style={styles.contactAvatar}>
                                <Text style={styles.contactAvatarText}>{contact.name.split(' ').map(n => n[0]).join('')}</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactName}>{contact.name}</Text>
                                <Text style={styles.contactRelation}>{contact.relationship}</Text>
                            </View>
                        </View>

                        <View style={styles.contactDetails}>
                            <View style={styles.contactRow}>
                                <Text style={styles.contactIcon}>📱</Text>
                                <View style={styles.contactTextBox}>
                                    <Text style={styles.contactLabel}>Phone Number</Text>
                                    <Text style={styles.contactValue}>{contact.phone}</Text>
                                </View>
                            </View>

                            <View style={styles.contactRow}>
                                <Text style={styles.contactIcon}>📧</Text>
                                <View style={styles.contactTextBox}>
                                    <Text style={styles.contactLabel}>Email Address</Text>
                                    <Text style={styles.contactValue}>{contact.email}</Text>
                                </View>
                            </View>

                            <View style={styles.contactRow}>
                                <Text style={styles.contactIcon}>🏠</Text>
                                <View style={styles.contactTextBox}>
                                    <Text style={styles.contactLabel}>Address</Text>
                                    <Text style={styles.contactValue}>{contact.address}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.contactActions}>
                            <TouchableOpacity style={styles.callBtn}>
                                <Text style={styles.callBtnIcon}>📞</Text>
                                <Text style={styles.callBtnText}>Call Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.messageBtn}>
                                <Text style={styles.messageBtnIcon}>💬</Text>
                                <Text style={styles.messageBtnText}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Family Members */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Family Members</Text>
                </View>

                <View style={styles.familySection}>
                    {familyMembers.map((member, i) => (
                        <View key={i} style={styles.familyRow}>
                            <View style={styles.familyIconBox}>
                                <Text style={styles.familyIcon}>👤</Text>
                            </View>
                            <View style={styles.familyInfo}>
                                <Text style={styles.familyName}>{member.name}</Text>
                                <Text style={styles.familyMeta}>{member.relationship} • Age {member.age}</Text>
                                <Text style={styles.familyOccupation}>{member.occupation}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Medical Information */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Medical Information</Text>
                </View>

                <View style={styles.medicalCard}>
                    <View style={styles.medicalRow}>
                        <View style={styles.medicalItem}>
                            <Text style={styles.medicalLabel}>Blood Group</Text>
                            <View style={styles.bloodBadge}>
                                <Text style={styles.bloodText}>{medicalInfo.bloodGroup}</Text>
                            </View>
                        </View>
                        <View style={styles.medicalItem}>
                            <Text style={styles.medicalLabel}>Allergies</Text>
                            <Text style={styles.medicalValue}>{medicalInfo.allergies}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.medicalRow}>
                        <View style={styles.medicalItem}>
                            <Text style={styles.medicalLabel}>Medications</Text>
                            <Text style={styles.medicalValue}>{medicalInfo.medications}</Text>
                        </View>
                        <View style={styles.medicalItem}>
                            <Text style={styles.medicalLabel}>Conditions</Text>
                            <Text style={styles.medicalValue}>{medicalInfo.medicalConditions}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.insuranceBox}>
                        <Text style={styles.insuranceLabel}>Health Insurance</Text>
                        <Text style={styles.insuranceProvider}>{medicalInfo.insuranceProvider}</Text>
                        <Text style={styles.policyNumber}>Policy: {medicalInfo.policyNumber}</Text>
                    </View>
                </View>

                {/* Important Note */}
                <View style={styles.noteCard}>
                    <Text style={styles.noteIcon}>ℹ️</Text>
                    <Text style={styles.noteText}>
                        This information is confidential and will only be used in case of emergencies. Please ensure all details are accurate and up-to-date.
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
    alertBanner: {
        flexDirection: 'row',
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(239, 68, 68, 0.3)',
    },
    alertIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    alertContent: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 2,
    },
    alertDesc: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '600',
    },
    scrollBody: {
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1E293B',
    },
    addBtn: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    addBtnText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '800',
    },
    contactCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        elevation: 2,
        position: 'relative',
    },
    primaryBadge: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    primaryBadgeText: {
        fontSize: 9,
        fontWeight: '900',
        color: '#16A34A',
    },
    contactHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    contactAvatar: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    contactAvatarText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#4F46E5',
    },
    contactInfo: {
        flex: 1,
    },
    contactName: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    contactRelation: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
        marginTop: 2,
    },
    contactDetails: {
        marginBottom: 16,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    contactIcon: {
        fontSize: 18,
        marginRight: 12,
        marginTop: 2,
    },
    contactTextBox: {
        flex: 1,
    },
    contactLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '600',
    },
    contactActions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        paddingTop: 16,
    },
    callBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F46E5',
        paddingVertical: 12,
        borderRadius: 12,
        marginRight: 8,
    },
    callBtnIcon: {
        fontSize: 16,
        marginRight: 6,
    },
    callBtnText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '800',
    },
    messageBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F5F9',
        paddingVertical: 12,
        borderRadius: 12,
        marginLeft: 8,
    },
    messageBtnIcon: {
        fontSize: 16,
        marginRight: 6,
    },
    messageBtnText: {
        color: '#475569',
        fontSize: 13,
        fontWeight: '800',
    },
    familySection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    familyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FAFC',
    },
    familyIconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    familyIcon: {
        fontSize: 20,
    },
    familyInfo: {
        flex: 1,
    },
    familyName: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    familyMeta: {
        fontSize: 12,
        color: '#94A3B8',
        fontWeight: '600',
        marginTop: 2,
    },
    familyOccupation: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
    },
    medicalCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    medicalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    medicalItem: {
        flex: 1,
    },
    medicalLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    medicalValue: {
        fontSize: 14,
        color: '#1E293B',
        fontWeight: '700',
    },
    bloodBadge: {
        backgroundColor: '#FEE2E2',
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
    },
    bloodText: {
        fontSize: 16,
        fontWeight: '900',
        color: '#DC2626',
    },
    divider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginVertical: 16,
    },
    insuranceBox: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 16,
    },
    insuranceLabel: {
        fontSize: 11,
        color: '#94A3B8',
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    insuranceProvider: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 4,
    },
    policyNumber: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '600',
    },
    noteCard: {
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

export default TeacherGuardianScreen;
