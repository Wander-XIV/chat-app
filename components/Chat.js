import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, Bubble, InputToolbar } from "react-native-gifted-chat";
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
} from "react-native";

import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

import { auth, db } from "./firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

export default function Chat(props) {
  const { name, color } = props.route.params;
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState();
  const messagesRef = collection(db, "messages");

  const saveMessages = async () => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(messages));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMessages = async () => {
    let messages = "";
    try {
      messages = (await AsyncStorage.getItem("messages")) || [];
      setMessages(JSON.parse(messages));
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteMessages = async () => {
    try {
      await AsyncStorage.removeItem("messages");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    props.navigation.setOptions({ title: name });
    let unsubscribe;

    NetInfo.fetch().then((connection) => {
      if (connection.isConnected) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });

    if (isConnected) {
      const messagesQuery = query(messagesRef, orderBy("createdAt", "desc"));

      unsubscribe = onSnapshot(messagesQuery, onCollectionUpdate);

      deleteMessages();

      saveMessages();

      return () => unsubscribe();
    } else {
      getMessages();
    }
  }, [isConnected]);

  const addMessage = (message) => {
    addDoc(messagesRef, {
      _id: message._id,
      text: message.text || "",
      createdAt: message.createdAt,
      user: message.user,
    });
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    addMessage(messages[0]);
  }, []);

  const onCollectionUpdate = (querySnapshot) => {
    setMessages(
      querySnapshot.docs.map((doc) => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }))
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props) => {
    if (!isConnected) {
      // Hide Toolbar
    } else {
      // Display Toolbar
      return <InputToolbar {...props} />;
    }
  };

  return (
    <View style={[{ backgroundColor: color }, styles.container]}>
      {showWelcomeMessage && (
        <Text style={styles.welcomeText}>Hi there {name}, let's chat!</Text>
      )}
      <GiftedChat
        renderBubble={renderBubble.bind()}
        renderInputToolbar={renderInputToolbar.bind()}
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth?.currentUser?.uid,
          name: name,
          avatar: "https://placeimg.com/140/140/any",
        }}
      />

      {/* Avoid keyboard to overlap text messages on older Andriod versions */}
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
