import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topLeft}>PettyStudentManager</Text>
      <SafeAreaView style={styles.card}>
        <Text style={styles.title}>Login to start.</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  topLeft: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Roboto_700Bold",
  },
  card: {
    backgroundColor: "#444",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  label: {
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 12,
    marginTop: 4,
    marginBottom: -2,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Roboto_400Regular",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: "center",
    width: 200,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto_400Regular",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontFamily: "Roboto_400Regular",
  },
});
