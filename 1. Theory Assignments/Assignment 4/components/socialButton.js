import { Image, TouchableOpacity, View } from "react-native";

export default function SocialBtn(props) {

    return (
        <TouchableOpacity>
            <View style={{ backgroundColor: props.color, marginRight: 10, borderRadius: 10, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                <Image style={{ width: 32, height: 32 }} source={props.imgPath} />
            </View>
        </TouchableOpacity>
    )
}