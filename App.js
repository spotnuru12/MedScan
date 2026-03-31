/**
 * MedScan - Main Application Entry Point
 * 
 * This is where the app starts. It sets up:
 * - Navigation (moving between screens)
 * - Global state (data shared across screens)
 * - Theme/styling defaults
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// ===========================================
// MAIN APP COMPONENT
// ===========================================

export default function App() {
  return (
    <View style={styles.container}>
      {/* 
        This is a placeholder screen.
        We'll replace this with navigation soon!
      */}
      <Text style={styles.title}>💊 MedScan</Text>
      <Text style={styles.subtitle}>
        Your medication assistant
      </Text>
      <Text style={styles.status}>
        ✅ App is running!
      </Text>
      <Text style={styles.hint}>
        Next step: Set up navigation and camera
      </Text>
      
      {/* StatusBar controls the top bar (time, battery, etc.) */}
      <StatusBar style="auto" />
    </View>
  );
}

// ===========================================
// STYLES
// ===========================================
// We use StyleSheet.create for better performance
// than inline styles. Group related styles together.

const styles = StyleSheet.create({
  container: {
    flex: 1,                        // Take up full screen
    backgroundColor: '#ffffff',
    alignItems: 'center',           // Center horizontally
    justifyContent: 'center',       // Center vertically
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  status: {
    fontSize: 16,
    color: '#22c55e',               // Green for success
    marginBottom: 8,
  },
  hint: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

// ===========================================
// WHAT'S NEXT?
// ===========================================
// 1. Install navigation: npx expo install @react-navigation/native
// 2. Create HomeScreen, ScanScreen, ResultScreen
// 3. Set up camera permissions
// 4. Connect to Gemini API
// 
// See docs/ARCHITECTURE.md for the full plan!
