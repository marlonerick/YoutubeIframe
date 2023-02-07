import { useCallback, useState } from "react";
import { ActivityIndicator, View, useWindowDimensions, Alert, TextInput, TouchableOpacity, Text } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation'

type VideoId = {
    video: string;
}

import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from "../screens/Home/styles";

export default function YoutubeIframeComponent(props: VideoId) {
    const [videoReady, setVideoReady] = useState(false)
    const [playing, setPlaying] = useState(false);

    const { width } = useWindowDimensions();
    const VIDEO_WIDTH = width - SCREEN_SPACE

    const onFullScreenChange = useCallback((isFullScreen: boolean) => {
        if (isFullScreen) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        }

    }, [])

    const onStateChange = useCallback((state: string) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("Inscreva-se", "O video acabou mais tem uma playlist inteira te esperando, deixe seu like !");
        }
    }, []);

    return (
        <View style={styles.player}>
            <YoutubeIframe
                videoId={props.video}
                width={width}
                height={videoReady ? VIDEO_HEIGHT : 0}
                onReady={() => setVideoReady(true)}
                onFullScreenChange={onFullScreenChange}
                onChangeState={onStateChange}
            />

            {!videoReady && <ActivityIndicator color={"red"} />}
        </View>
    )
}