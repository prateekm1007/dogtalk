import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RecordScreen({ navigation, route }) {
  const streakCount = route?.params?.streakCount ?? 0;
  const [recording, setRecording] = useState(false);

  const toggle = () => {
    if (!recording) {
      setRecording(true);
      setTimeout(() => {
        setRecording(false);
        navigation.replace('Results', { emotion: 'playful', streakCount });
      }, 2000);
    } else {
      setRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap to Record Bark!</Text>
      <TouchableOpacity style={[styles.mic, recording && styles.micOn]} onPress={toggle} activeOpacity={0.9}>
        <Text style={styles.micText}>{recording ? 'Listening…' : 'Start'}</Text>
      </TouchableOpacity>
      <Text style={styles.streak}>Streak: {streakCount} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', gap: 18 },
  title: { fontSize: 24, fontWeight: '800', color: '#1DB954' },
  mic: { width: 220, height: 220, borderRadius: 110, backgroundColor: '#A7F3A9', alignItems: 'center', justifyContent: 'center' },
  micOn: { backgroundColor: '#1DB954' },
  micText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  streak: { color: '#1DB954', fontWeight: '600' }
});
