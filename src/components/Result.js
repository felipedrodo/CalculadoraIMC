// Importações
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que recebe o valor do IMC e exibe o resultado
const Result = ({ imc }) => {
    return (
        // Exibe o valor do IMC
        <Text style={styles.result}>
            Seu IMC é: {imc}
        </Text>
    );
};

// Estilização
const styles = StyleSheet.create({
    result: {
        marginTop: 20,       
        fontSize: 24,      
        textAlign: 'center', 
        color: '#007ACC',    
    },
});

// Exportação
export default Result;

