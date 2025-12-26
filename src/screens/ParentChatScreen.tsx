import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Image,
} from 'react-native';

const ParentChatScreen = ({ navigation }: any) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello Mr. Thompson, how can I help you regarding Alex?', sender: 'teacher', time: '09:41 AM' },
        { id: '2', text: 'Hi Mrs. Jenkins, I wanted to ask about the upcoming field trip.', sender: 'me', time: '09:42 AM' },
        { id: '3', text: 'Sure! The trip is scheduled for next Friday. We will be visiting the Science Museum.', sender: 'teacher', time: '09:44 AM' },
    ]);

    const flatListRef = useRef<FlatList>(null);

    const sendMessage = () => {
        if (message.trim().length === 0) return;

        const newMsg = {
            id: Date.now().toString(),
            text: message,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, newMsg]);
        setMessage('');

        // Simulate auto-reply
        setTimeout(() => {
            const reply = {
                id: (Date.now() + 1).toString(),
                text: "Thanks for your message. I'll get back to you shortly!",
                sender: 'teacher',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, reply]);
        }, 2000);
    };

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const renderItem = ({ item }: { item: any }) => {
        const isMe = item.sender === 'me';
        return (
            <View style={[styles.msgRow, isMe ? styles.msgRowMe : styles.msgRowTeacher]}>
                {!isMe && (
                    <View style={styles.avatar}>
                        <Text style={styles.avatarTxt}>SJ</Text>
                    </View>
                )}
                <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleTeacher]}>
                    <Text style={[styles.msgText, isMe ? styles.msgTextMe : styles.msgTextTeacher]}>
                        {item.text}
                    </Text>
                    <Text style={[styles.timeText, isMe ? styles.timeTextMe : styles.timeTextTeacher]}>
                        {item.time}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <Text style={styles.headerName}>Mrs. Jenkins</Text>
                    <Text style={styles.headerRole}>Class Teacher • Grade 10-B</Text>
                </View>
                <TouchableOpacity style={styles.callBtn}>
                    <Text style={styles.callIcon}>📞</Text>
                </TouchableOpacity>
            </View>

            {/* Chat Area */}
            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.chatContent}
                showsVerticalScrollIndicator={false}
            />

            {/* Input Area */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <View style={styles.attachBtn}>
                        <Text style={styles.attachIcon}>📎</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        placeholderTextColor="#94A3B8"
                        value={message}
                        onChangeText={setMessage}
                        multiline
                    />
                    <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
                        <Text style={styles.sendIcon}>➤</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    header: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        zIndex: 10,
        elevation: 5,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    backIcon: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerInfo: {
        flex: 1,
    },
    headerName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    headerRole: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 12,
        marginTop: 2,
    },
    callBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    callIcon: {
        fontSize: 18,
    },
    chatContent: {
        padding: 20,
        paddingBottom: 10,
    },
    msgRow: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    msgRowMe: {
        justifyContent: 'flex-end',
    },
    msgRowTeacher: {
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#C7D2FE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    avatarTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: '#4F46E5',
    },
    bubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 20,
    },
    bubbleMe: {
        backgroundColor: '#4F46E5',
        borderBottomRightRadius: 4,
    },
    bubbleTeacher: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 4,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    msgText: {
        fontSize: 14,
        lineHeight: 20,
    },
    msgTextMe: {
        color: '#FFFFFF',
    },
    msgTextTeacher: {
        color: '#1E293B',
    },
    timeText: {
        fontSize: 10,
        marginTop: 4,
    },
    timeTextMe: {
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'right',
    },
    timeTextTeacher: {
        color: '#94A3B8',
        textAlign: 'right',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    attachBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    attachIcon: {
        fontSize: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        maxHeight: 100,
        color: '#1E293B',
        fontSize: 14,
    },
    sendBtn: {
        width: 44,
        height: 44,
        backgroundColor: '#4F46E5',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    sendIcon: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default ParentChatScreen;
