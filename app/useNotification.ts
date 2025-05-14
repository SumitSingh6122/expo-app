
import { useEffect } from 'react';
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const useNotification = () => {
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            // Handle notification here
        });

        return unsubscribe;
    }, []);

    return null;
};

export default useNotification; // Ensure default export
