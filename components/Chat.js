import React, { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { View, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";

export default function Chat(props) {
  // state for holding messages
  const [messages, setMessages] = useState([]);

  // destructuring the porps
  let { name, color } = props.route.params;

  // change title once user proceeds to chat
  useEffect(() => {
    props.navigation.setOptions({ title: name === "" ? "no title" : name });
  }, []);

  // update a state
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hello ${name}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  // function to send message in chat room
  function onSend(messages = []) {
    setMessages((prevState) => GiftedChat.append(prevState.messages, messages));
  }

  // function to alter the bakcgorund color of bubble when user sends msg in chat
  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          // left: {
          //   backgroundColor: 'blue'
          // },
          right: {
            backgroundColor: "#242ACF",
          },
        }}
      />
    );
  }

  return (
    <View style={[{ backgroundColor: color }, styles.chatContainer]}>
      {/* <Text style={styles.txt}>Hello {name} from Chat!</Text> */}

      <GiftedChat
        renderBubble={renderBubble}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
      {/* this prevents the screen collapsing with a keyboard */}
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    justifyContent: "center",
  },

  txt: {
    fontSize: 16,
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
