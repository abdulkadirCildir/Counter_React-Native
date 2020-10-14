import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const upCounter = () => setCounter(counter + 1);
  const downCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#974E8D'}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 200,
            textAlign: 'center',
          }}>
          {counter}
        </Text>
      </View>

      <View style={{flex:1, justifyContent: 'space-evenly', marginBottom: 70}}>
        <Button style={styles.button} title="Up!" onPress={upCounter}/>
        <Button style={styles.button} title="Down!" onPress={downCounter}/>
        <Button style={styles.button} title="Reset!" onPress={resetCounter}/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
      borderRadius: 30,
  },
});
