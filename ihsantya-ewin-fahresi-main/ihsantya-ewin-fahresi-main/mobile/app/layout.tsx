import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./LoginStyles";
import logo from "./assets/Logo_sds.jpg";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://domain-api-kamu.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login Berhasil!");
      } else {
        alert("Username atau password salah!");
      }
    } catch (error) {
      console.log("Terjadi error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.title}>Portal Akademik</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
