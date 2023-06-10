import { StyleSheet, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

export default function ToggleBtn(){
    return(
        <ToggleSwitch
            isOn={true}
            onColor="#279CEB"
            offColor="lightgrey"
            size="large"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
    )
}