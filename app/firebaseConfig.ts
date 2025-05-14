
// firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
 apiKey: "AIzaSyARnoyHkAQOKmBxn3JxjTbGs78aAm8vE6I",
  authDomain: "fir-web-app-9c94a.firebaseapp.com",
  projectId: "fir-web-app-9c94a",
  storageBucket: "fir-web-app-9c94a.appspot.com",
  messagingSenderId: "966398388663",
  appId: "1:966398388663:web:c57b1aec824b83b1992032"   
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const messaging = getMessaging(app);

export default firebaseConfig; // Ensure default export
