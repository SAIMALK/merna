import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableOpacity , StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommentSection = ({ cropId }) => {
    const navigation = useNavigation();

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://farmiq-backend.vercel.app/api/crops/${cropId}`);
                const data = await response.json();
                if (data && Array.isArray(data.reviews)) {
                    setComments(data.reviews);
                } else {
                    setComments([]);
                }
            } catch (error) {
                Alert.alert('Error', 'Failed to load comments');
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [cropId]);

    const submitHandler = async () => {
        if (comment.trim()) {
            try {
                const response = await fetch(`https://farmiq-backend.vercel.app/api/crops/${cropId}/reviews`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ comment }),
                });

                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error('Error response:', errorResponse);
                    throw new Error('Failed to get ok response');
                }

                const newComment = await response.json();
                console.log('New Comment:', newComment);

                // Validate the structure of newComment
                if (newComment && newComment.comment) {
                    setComments((prevComments) => [...prevComments, newComment]);
                    setComment('');
                    Alert.alert('Success', 'Comment submitted successfully');
                } else {
                    throw new Error('Invalid comment structure');
                }
            } catch (error) {
                console.error('Error submitting comment:', error);
                Alert.alert('Error', error.message || 'Failed to submit comment');
            }
        } else {
            Alert.alert('Error', 'Comment cannot be empty');
        }
    };

    const renderItem = ({ item, index }) => {
        const isRightAligned = index % 2 === 0; // Alternate alignment
        return (
            <View style={[styles.commentContainer, isRightAligned ? styles.rightAlign : styles.leftAlign]}>
                <Text style={styles.commentAuthor}>{item.user.name}</Text>
                <Text style={styles.commentDate}>{item.createdAt ? item.createdAt.substring(0, 10) : 'Unknown Date'}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
            </View>
        );
    };

    return (
        <View style={styles.commentSectionContainer}>
            <Text style={styles.header}>Community Advice</Text>

            {loading ? (
                <Text style={styles.loading}>Loading...</Text>
            ) : (
                <FlatList
                    data={comments}
                    keyExtractor={(item) => item._id ? item._id.toString() : Math.random().toString()}
                    renderItem={renderItem}
                />
            )}

            <Text style={styles.commentInputLabel}>Write a Comment</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your comment"
                value={comment}
                onChangeText={(text) => setComment(text)}
                multiline
            />
<TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
                    </View>
    );
};

const styles = StyleSheet.create({
    commentSectionContainer: {
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        flex: 1,  // Ensure the container expands to fill available space
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'left',
    },
    loading: {
        fontSize: 18,
        textAlign: 'center',
    },
    commentContainer: {
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '100%',  // Explicitly set width to 90%
        alignSelf: 'center',  // Center horizontally in the parent
    },
    rightAlign: {
        backgroundColor: '#d1f5d3', // Light green background for differentiation
    },
    leftAlign: {
        backgroundColor: '#f5f1d1', // Light yellow background for differentiation
    },
    commentAuthor: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    commentDate: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    },
    commentText: {
        fontSize: 14,
        color: '#333',
    },
    commentInputLabel: {
        fontSize: 18,
        marginVertical: 10,
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButton: {
        backgroundColor: '#009900', // Custom button color
        borderRadius: 8,  // Custom border radius
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#fff', // Text color for the button
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default CommentSection;
