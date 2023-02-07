import { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

import YoutubeIframeComponent from "../../components/VideoYoutube";

export function Home() {
    const [videoId, setVideoId] = useState('https://www.youtube.com/watch?v=CO4C9UVaFKk&ab_channel=Rocketseat')

    const idVideo = getVideoId(videoId);

    function getVideoId(inputString: string) {
        let regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
        // /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/

        let result = regex.exec(inputString);
        if (result !== null) {
            return result[1];
        } else {
            return videoId;
        }
    }

    console.log(idVideo); // Outputs: FnHW8X_jy_c

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Procure um video da sua escolha."
                    placeholderTextColor="#FFF"
                    onChange={() => getVideoId}
                    onChangeText={newVideo => setVideoId(newVideo)}
                />
            </View>
            <YoutubeIframeComponent video={idVideo} />
        </View>
    )
}