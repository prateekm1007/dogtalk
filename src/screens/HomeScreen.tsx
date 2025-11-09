import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.streak}>Streak: 1 day 🔥</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recent Woof</Text>
        <Text style={styles.cardBody}>Playful • Today • Tap to see</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Record', { streakCount: 1 })}>
        <Text style={styles.btnText}>New Bark? 🎤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, gap: 16 },
  streak: { fontSize: 22, fontWeight: '800', color: '#1DB954', textAlign: 'center', marginTop: 12 },
  card: { backgroundColor: '#E8FFF0', borderRadius: 16, padding: 16 },
  cardTitle: { fontWeight: '800', fontSize: 18, color: '#1DB954' },
  cardBody: { marginTop: 6, color: '#444' },
  btn: { backgroundColor: '#1DB954', paddingVertical: 16, borderRadius: 28, alignItems: 'center', marginTop: 'auto' },
  btnText: { color: '#fff', fontWeight: '800', fontSize: 18 }
});
