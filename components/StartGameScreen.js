import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {  Button, Card, Icon, Input } from 'react-native-elements';

const StartGameScreen = props => {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    const numberHandler = input => {
        setEnteredNumber(input);
    }

    const logger = () => {
        console.log(enteredNumber);
        setEnteredNumber('')
    }

    return(
        <Card>
            <Card.Title>Guess A Number</Card.Title>
            <Card.Divider/>
            <Input 
            keyboardType="number-pad" 
            placeholder="Pick a number"
            onChangeText={numberHandler}
            value={enteredNumber}
             />
            <View style={styles.buttonContainer}>
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Reset' />
            <Button
            onPress={logger}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Confirm' />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title : {
        textAlign: 'center',
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50
    }
})

export default StartGameScreen;