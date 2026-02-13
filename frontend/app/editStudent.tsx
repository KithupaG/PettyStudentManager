import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { sendAction } from "./services/api.service";
import { styles } from "./styles/universal";

export default function EditStudent() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [form, setForm] = useState({
    id: Number(params.id),
    name: params.name as string,
    email: params.email as string,
    course: params.course as string,
  });

  const handleUpdate = () => {
    sendAction("UPDATE", form);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Student</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(t) => setForm({ ...form, name: t })}
      />
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(t) => setForm({ ...form, email: t })}
      />
      <TextInput
        style={styles.input}
        value={form.course}
        onChangeText={(t) => setForm({ ...form, course: t })}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Student</Text>
      </TouchableOpacity>
    </View>
  );
}
