import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decode your doggo's woofs! 🐶</Text>
      <Text style={styles.desc}>Tap to record barks → instant mood magic.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>Let's Bark 🎤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#1DB954', textAlign: 'center', marginBottom: 12 },
  desc: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 24 },
  btn: { backgroundColor: '#1DB954', paddingVertical: 14, paddingHorizontal: 28, borderRadius: 28 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
