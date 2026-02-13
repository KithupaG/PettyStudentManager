import { useFocusEffect, useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { deleteStudent, fetchStudents } from "./services/api.service";

import { styles } from "./styles/universal";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => setStudents(await fetchStudents());

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    loadData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardTitle}>
              {item.course} | {item.email}
            </Text>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() =>
                  router.push({ pathname: "/EditStudent", params: item })
                }
              >
                <Text style={{ color: "blue" }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={{ color: "red" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/AddStudent")}
      >
        <Text style={styles.buttonText}>+ Add Student</Text>
      </TouchableOpacity>
    </View>
  );
}
