import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

class App extends React.Component {    // Bu yukarida da su sekil import edilebilirdi: React, {Component} from 'react'
    constructor(props){
        super(props);

        this.state ={
            counter: 0
        }
    }

    render() {
        return (
            <SafeAreaView>
              <View>
                <Text style={{fontSize: 200, textAlign: 'center'}}>{this.state.counter}</Text>
                
                <Button 
                    style={{margin: 30}} 
                    title="Up!" 
                    onPress={() => this.setState({
                        counter: this.state.counter + 1,
                })} />
                
              </View>
            </SafeAreaView>
        );
    }
}         

export default App;

