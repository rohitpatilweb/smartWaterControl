import LogInPage from ".././Components/LogInPage";
import SignUpPage from ".././Components/SignUpPage";

import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  onPress
} from "react-native";
const signInHandler = () => {};
const logInHandler = () => {};


function FrontPage() {
  return (
    <view>
      <ImageBackground
        source={require("../Assets/Drop.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.ok}>
          <Text style={styles.font}>
            You are one step away from saving water !
          </Text>
        </View>

        <View style={styles.fixToText}>
          <TouchableOpacity style={styles.button} onPress={logInHandler}>
            <Text style={styles.buttonText}>L O G   I N</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={signInHandler}>
            <Text style={styles.buttonText}>S I G N   I N</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </view>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100vh",
    width: "100%"
  },
  ok: {
    // shadowColor: "rgba(0, 0, 0, 1)",
    // shadowOffset: { width: -12, height: 12 },
    // shadowOpacity: 0.4,
    // shadowRadius: 9,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 52,
    marginLeft: "15%",
    height: "auto",
    width: "70%",
    padding: 12,
    borderRadius: 12,
  },
  font: {
   textShadowColor: "rgba(0, 0, 0, 0.9)",
   textShadowOffset: {width: -1, height: 1},
   textShadowRadius: 10,
    fontWeight: "bold",
    fontSize: 27,
    color:"#808080",
    // color: "rgba(150, 100, 100, 150)"
  },
  fixToText: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: "100%"
  },

  button: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: -5, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    marginLeft: "7%",
    marginBottom: "5%",
    height: 50,
    width: "86%",
    // backgroundColor: "black",
    padding: 15,
    borderRadius: 10
    //opacity: 0.6,
  },
  buttonText: {
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: {width: -8, height: 8},
    textShadowRadius: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default FrontPage;
