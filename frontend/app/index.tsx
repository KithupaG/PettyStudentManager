import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getSession, setSession } from "./services/storage.service";
import { styles } from "./styles/universal";

export default function Index() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    getSession().then((user) => {
      if (user) router.push("/dashboard");
    });
  }, []);

  const handleLogin = async () => {
    if (name) {
      await setSession(name);
      router.push("/dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Petty Student Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name to login"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}
