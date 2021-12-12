import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import React from "react";
function SignUpPage() {
  const navigation = useNavigation();

  return (
    <view>
      <View style={styles.container}>
        <View style={styles.backgrad}></View>
        <View style={styles.box}>
          <View style={styles.grad}>
            <View style={styles.imageBox}>
              <Image
                style={styles.images}
                source={require("../Assets/login.png")}
              />
            </View>
            <Text style={styles.Headerfont}>Welcome</Text>
          </View>
          <View style={styles.flexing}>
            <Text style={styles.font}>Please Set Username and Passward</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="username"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="black"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("LoginPage")}
              >
                <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "black" }}
                />
                <View>
                  <Text
                    style={{
                      width: 50,
                      textAlign: "center",
                      marginBotoom: "8%"
                    }}
                  >
                    OR
                  </Text>
                </View>
                <View
                  style={{ flex: 1, height: 1, backgroundColor: "black" }}
                />
              </View>
              <Text style={styles.font}>Sign Up With</Text>

              <View style={styles.auth}>
                <TouchableOpacity
                  style={styles.authBtnBox}
                  onPress={() => navigation.navigate("LoginPage")}
                >
                  <Image
                    onPress={() => navigation.navigate("LoginPage")}
                    source={require("../Assets/google.png")}
                    style={[styles.authButten, { alignSelf: "center" }]}
                  />
                  <Text style={{ alignSelf: "center" }}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.authBtnBox}
                  onPress={() => navigation.navigate("LoginPage")}
                >
                  <Image
                    onPress={() => navigation.navigate("LoginPage")}
                    source={require("../Assets/facebook.png")}
                    style={[styles.authButten, { alignSelf: "center" }]}
                  />
                  <Text style={{ alignSelf: "center" }}>Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </view>
  );
}

const styles = StyleSheet.create({
  authButten: {
    height: "5vh",
    width: "5vh"
  },
  auth: {
    paddingLeft: "15%",
    paddingRight: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "7%",
    height: "5%"
  },
  grad: {
    paddingTop: "4%",
    paddingBottom: "4%",
    justifyContent: "space-between",
    width: "100%",
    height: "25%",
    backgroundColor: "#1f7882",
    borderRadius: 11
  },
  backgrad: {
    position: "absolute",
    paddingTop: "4%",
    paddingBottom: "4%",
    width: "100%",
    height: "23.6%",
    backgroundColor: "#1f7882"
  },
  input: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    height: "20%",
    width: "90%",
    marginBottom: "7%",
    marginLeft: "5%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "black"
  },
  images: {
    height: "10vh",
    width: "10vh",
    alignSelf: "center",
    marginTop: "4%",
    marginBotoom: "3%"
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 90,
    flex: 1,
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "10%",
    height: "70%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#F9F7F7"
  },
  flexing: {
    height: "70%",
    justifyContent: "space-evenly"
  },
  container: {
    backgroundColor: "#F9F7F7",
    height: "100vh",
    width: "100%"
  },
  Headerfont: {
    marginBottom: "5%",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    elevation: 25,
    fontSize: 30,
    color: "#ffffff"
  },
  font: {
    marginLeft: "5%",
    marginRight: "5%",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.100000000)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
    fontSize: 20,
    color: "#1f7882",
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 9,
    marginLeft: "10%",
    marginTop: "2%",
    marginBottom: "4%",
    elevation: 25,
    height: "20%",
    width: "80%",
    backgroundColor: "#1f7882",
    borderColor: "#7fffd4",
    padding: 15,
    borderRadius: 15
  },
  buttonText: {
    color: "#ffff",
    fontSize: 15,
    alignSelf: "center"
  }
});

export default SignUpPage;
