import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultsScreen({ navigation, route }) {
  const emotion = route?.params?.emotion ?? 'excited';
  const streakCount = route?.params?.streakCount ?? 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your doggo sounds… {emotion}! 🎉</Text>
      <Text style={styles.desc}>Time for fetch—tail's wagging overtime! 🏃‍♂️</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Record', { streakCount })}>
        <Text style={styles.btnText}>Try Another Bark 🎤</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeText}>Home 🏠</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 18 },
  title: { fontSize: 26, fontWeight: '800', color: '#1DB954', textAlign: 'center' },
  desc: { color: '#555', textAlign: 'center' },
  btn: { backgroundColor: '#1DB954', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 28 },
  btnText: { color: '#fff', fontWeight: '800' },
  home: { paddingVertical: 12, paddingHorizontal: 18, borderRadius: 24, backgroundColor: '#E8FFF0' },
  homeText: { color: '#1DB954', fontWeight: '700' }
});
