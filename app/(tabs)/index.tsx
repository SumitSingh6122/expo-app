import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import useNotification from '../useNotification';

const WebScreen = () => {
   useNotification();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://localhost:3000' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
