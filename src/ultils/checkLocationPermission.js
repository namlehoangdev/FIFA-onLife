import React, {Component} from 'react';
import { Platform,ToastAndroid , PermissionsAndroid, } from 'react-native'


export const hasLocationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 26) {
        return true;
    }

    const hasPermission = await Platform.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAnWillid.RESULTS.DENIED) {
        ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
};
