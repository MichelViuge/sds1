import React from 'react';
import Header from '../../components/Header'
import { StyleSheet, Text, View } from 'react-native';

const CreateRecord = () => {
    return (
        <>
            <Header />
            <Text style={styles.text}> Hello Create-Record!</Text>
        </>
    )
};


const styles = StyleSheet.create({
    text: {
        color: '#FFF',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 100
    }

  });


export default CreateRecord;