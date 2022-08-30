// import react native gesture handler
import "react-native-gesture-handler";

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import BackgroundImage from "../assets/Background_Image.png";
import { Directions } from "react-native-gesture-handler";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bgColor: this.colors.blue,
    };
  }

  colors = {
    black: "#090C08",
    purple: "#474056",
    grey: "#8A95A5",
    green: "#B9C6AE",
  };

  setBgColor = (color) => this.setState({ bgColor: color });

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.titleFrame}>
            <Text style={styles.title}>Chat App</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.TextInput}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Your name"
              />
            </View>

            <View style={styles.chooseBox}>
              <Text style={styles.chooseTtitle}>Choose Background Color</Text>
            </View>
            <View style={styles.colorFrame}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Choose color"
                accessibilityHint="Let’s you choose  color black as background"
                accessibilityRole="button"
                style={styles.color1}
                onPress={() => this.setBgColor(this.colors.black)}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Choose color"
                accessibilityHint="Let’s you choose  color purple as background"
                accessibilityRole="button"
                style={styles.color2}
                onPress={() => this.setBgColor(this.colors.purple)}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Choose color"
                accessibilityHint="Let’s you choose  color grey as background"
                accessibilityRole="button"
                style={styles.color3}
                onPress={() => this.setBgColor(this.colors.grey)}
              ></TouchableOpacity>

              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Choose color"
                accessibilityHint="Let’s you choose  color green as background"
                accessibilityRole="button"
                style={styles.color4}
                onPress={() => this.setBgColor(this.colors.green)}
              ></TouchableOpacity>
            </View>

            <Pressable
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.pressText}>Start Chatting</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  chooseBox: {
    flex: 0.4,
    marginRight: "auto",
    paddingLeft: 15,
    width: "88%",
  },

  chooseTtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    marginBottom: 10,
  },

  box: {
    height: "44%",
    width: "88%",
    marginBottom: 30,
    backgroundColor: "#ffffff",
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    height: 260,
    minHeight: 260,
    maxHeight: 300,
  },
  button: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
  },
  pressText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  titleFrame: {
    width: "60%",
    height: "auto",
    alignItems: "center",
    marginTop: 50,
    resizeMode: "contain",
    flex: 1,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    width: "88%",
    borderRadius: 5,
    marginBottom: 40,
    padding: 10,
  },
  TextInput: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "300",
    opacity: 0.5,
    color: "#888",
  },

  colorFrame: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  color1: {
    backgroundColor: "#090C08",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color2: {
    backgroundColor: "#474056",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color3: {
    backgroundColor: "#8A95A5",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color4: {
    backgroundColor: "#B9C6AE",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
