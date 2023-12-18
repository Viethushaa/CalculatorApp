import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

const CalculatorFinal = () => {
    const [answer, setanswer] = useState('');

    

    const buttonClick = (value) => {
        setanswer(answer + value);
    };

    const calculateanswer = () => {
        try {
            setanswer(eval(answer));
        } catch (error) {
            setanswer('Error');
        }
    };

    const handleClear = () => {
        setanswer('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.answer}>{answer}</Text>

            <View style={styles.row}>

            <Pressable style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>C</Text>
            </Pressable>

            <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('/')}
                >
                    <Text style={styles.buttonText}>/</Text>
            </Pressable>

            <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('*')}
                >
                    <Text style={styles.buttonText}>*</Text>
            </Pressable>

            <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('%')}
                >
                    <Text style={styles.buttonText}>%</Text>
                </Pressable>

            </View>
            <View style={styles.row}>
                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('7')}
                >
                    <Text style={styles.buttonText}>7</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('8')}
                >
                    <Text style={styles.buttonText}>8</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('9')}
                >
                    <Text style={styles.buttonText}>9</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('-')}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
            </View>

            <View style={styles.row}>
                
                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('4')}
                >
                    <Text style={styles.buttonText}>4</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('5')}
                >
                    <Text style={styles.buttonText}>5</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('6')}
                >
                    <Text style={styles.buttonText}>6</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('+')}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>

                </View>

                <View style={styles.row}>
                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('1')}
                >
                    <Text style={styles.buttonText}>1</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('2')}
                >
                    <Text style={styles.buttonText}>2</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('3')}
                >
                    <Text style={styles.buttonText}>3</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={calculateanswer}>
                    <Text style={styles.buttonText}>=</Text>
                </Pressable>

                </View>
                <View style={styles.row}>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('0')}
                >
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('00')}
                >
                    <Text style={styles.buttonText}>00</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('000')}
                >
                    <Text style={styles.buttonText}>000</Text>
                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => buttonClick('.')}
                >
                    <Text style={styles.buttonText}>.</Text>
                </Pressable>



                {/* Add more buttons for other numbers */}
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    answer: {
        fontSize: 24,
        marginBottom: 20,
        
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eb8934',
        borderColor:'black',
        margin: 5,
        flexDirection:'column',
        borderRadius: 10
       
        
    },
    buttonText: {
        fontSize: 28,
        fontWeight:"bold"
    },
});

export default CalculatorFinal;