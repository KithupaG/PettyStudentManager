import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { addStudent } from "./services/api.service";
import { styles } from "./styles/universal";

export default function AddStudent() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", course: "" });

  const handleSave = async () => {
    await addStudent(form);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Student</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(t) => setForm({ ...form, name: t })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(t) => setForm({ ...form, email: t })}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        onChangeText={(t) => setForm({ ...form, course: t })}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Student</Text>
      </TouchableOpacity>
    </View>
  );
}
