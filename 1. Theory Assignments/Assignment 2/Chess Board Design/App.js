import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ChessBoard() {
  var myArr = [];
  TotalRow = 8;
  TotalColumn = 8;

  for (let row = 1; row <= TotalRow; row++) {
    for (let col = 1; col <= TotalColumn; col++) {
      if ((row + col) % 2 === 1) {
        myArr.push(
          <TouchableOpacity style={{ margin: 1, height: 32, width: "11%", backgroundColor: "black" }}>
            <View></View>
          </TouchableOpacity>
        )
      } else {
        myArr.push(
          <TouchableOpacity style={{ margin: 1, height: 32, width: "11%", backgroundColor: "pink" }}>
             <View></View>
          </TouchableOpacity>
        )
      }
    }
  }
  return (
    <View style={styles.chessStyle}>
      {myArr}
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>8x8 Chess Board</Text>
      <ChessBoard></ChessBoard>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chessStyle: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: 'wrap',
  }
});
