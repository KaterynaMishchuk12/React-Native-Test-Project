import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

export function RegistrationScreen() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/images/backgroundImg.png")}
        style={{ position: "absolute", width: width, height: height }}
      /> */}
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          textContentType="emailAddress"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Пароль"
            textContentType="password"
            secureTextEntry={passwordIsHidden}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            style={styles.passwordHideBtn}
            onPress={() => setPasswordIsHidden(!passwordIsHidden)}
          >
            <Text style={styles.passwordHideText}>
              {passwordIsHidden ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
    color: "black",
    textAlign: "center",
  },
  button: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "#FF6C00",
    color: "white",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginBottom: 16,
  },
  inputContainer: {
    gap: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordHideBtn: {
    position: "absolute",
    top: 15,
    right: 12,
  },
  passwordHideText: {
    fontSize: 16,
    color: "#1B4371",
  },
});
