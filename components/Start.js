import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";

// import the background image
import image from "../assets/Background_Image.png";

// variable holding the color choices for background
const colors = {
  black: "#090C08",
  purple: "#474056",
  gray: "#8A95A5",
  hackie: "#B9C6AE",
  blue: "#c9e9f6",
};

// function Start renders the main page of the app
export default function Start(props) {
  // init states for the name and background color
  const [name, setName] = useState("");
  const [color, setColor] = useState();

  // init state to focus in input text
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode={"cover"} style={styles.image}>
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.box}>
          <TextInput
            style={[
              styles.input,
              isFocused && {
                backgroundColor: "#F1F7F6",
                borderColor: "#F1F7F6",
              },
            ]}
            onFocus={() => setIsFocused(!isFocused)}
            onChangeText={(name) => setName(name)}
            value={name}
            placeholder="your name..."
            {...props}
          />
          <Text style={styles.textBg}>Choose Background Color</Text>
          <View style={styles.colorBg}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Black background"
              accessibilityHint="Lets you to alter the background color in chat"
              accessibilityRole="button"
              style={styles.colorBlack}
              onPress={() => setColor(colors.black)}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Purple background"
              accessibilityHint="Lets you to alter the background color in chat"
              accessibilityRole="button"
              style={[styles.colorBlack, { backgroundColor: colors.purple }]}
              onPress={() => setColor(colors.purple)}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Gray background"
              accessibilityHint="Lets you to alter thebackground color in chat"
              accessibilityRole="button"
              style={[styles.colorBlack, { backgroundColor: colors.gray }]}
              onPress={() => setColor(colors.gray)}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Hackie background"
              accessibilityHint="Lets you to alter thebackground color in chat"
              accessibilityRole="button"
              style={[styles.colorBlack, { backgroundColor: colors.hackie }]}
              onPress={() => setColor(colors.hackie)}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Blue background"
              accessibilityHint="Lets you to alter thebackground color in chat"
              accessibilityRole="button"
              style={[styles.colorBlack, { backgroundColor: colors.blue }]}
              onPress={() => setColor(colors.blue)}
            />
          </View>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to chat"
            accessibilityHint="Lets you in chat"
            accessibilityRole="button"
            style={styles.btnStart}
            onPress={() => {
              props.navigation.navigate("Chat", { name: name, color: color });
            }}
          >
            <Text style={styles.btnText}>Start Chatting</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

// this is the declaration of styles for the Start component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  box: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "20%",
    width: "90%",
    marginLeft: 16,
    marginBottom: 16,
    borderRadius: 5,
  },

  title: {
    flex: 1,
    fontSize: 45,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 100,
    marginTop: "50%",
  },

  input: {
    height: 40,
    width: "90%",
    borderColor: "#D0D1D1",
    borderWidth: 1,
    padding: 10,
    marginTop: "5%",
    borderRadius: 5,
  },

  textBg: {
    fontSize: 20,
    fontWeight: "300",
    color: "#757083",
    padding: 20,
  },

  colorBg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  colorBlack: {
    height: 40,
    width: 40,
    backgroundColor: colors.black,
    borderRadius: 20,
    margin: 3,
  },

  btnStart: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "90%",
    backgroundColor: "#757083",
    marginBottom: "5%",
    borderRadius: 5,
  },

  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
