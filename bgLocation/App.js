import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackgroundGeolocation from "react-native-background-geolocation";

export default function App() {
    useEffect(() => {
      BackgroundGeolocation.onEnabledChange((e) => console.log("Background geolocation: ", e));

      BackgroundGeolocation.onHttp((e) => {
          console.log("http", e);
      });

      BackgroundGeolocation.ready({
        foregroundService: true,
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        // heartbeatInterval: 60,
        enableHeadless: true,
        stopOnTerminate: false,
        stopTimeout: 0,
        // disableElasticity: true,
        distanceFilter: 0,
        locationUpdateInterval: 5000, // Get a location every 5 seconds
        // debug: true,
        // logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        // allowIdenticalLocations: true,
        disableStopDetection: true,
        // disableMotionActivityUpdates: true,
        // stopOnTerminate: true,
        disableMotionActivityUpdates: true,
        url: "http://192.168.1.200:19205/",
        logLevel: BackgroundGeolocation.LOG_LEVEL_DEBUG,
        // headers: { Authorization: `Bearer ${token}` },
        notification: {
            title: "Background tracking enabled",
            text: "We are monitoring your location",
            channelName: "check-in",
        },
        // locationAuthorizationRequest: "Always",
        // autoSync: true,
        // reset: true,
        // autoSyncThreshold: 5,
        // batchSync: true,
    });

    }, []);

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <TouchableOpacity onPress={async () => await BackgroundGeolocation.start()}>
              <Text>Activate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => await BackgroundGeolocation.stop()}>
              <Text>Deactivate</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
