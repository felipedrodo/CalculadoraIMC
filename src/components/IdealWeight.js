// Importações
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que calcula e exibe o peso ideal baseado na altura (em cm)
const IdealWeight = ({ altura }) => {
    // Converte a altura de centímetros para metros
    const alturaMetros = parseFloat(altura) / 100;

    // Verifica se a altura foi preenchida
    if (!alturaMetros || isNaN(alturaMetros)) return null;

    // Calcula o peso mínimo ideal 
    const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
    
    // Calcula o peso máximo ideal 
    const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);

    // Retorna um texto que exibe os dois valores
    return (
        <Text style={styles.text}>
            Peso mínimo ideal: {pesoMin} kg{'\n'}
            Peso máximo ideal: {pesoMax} kg
        </Text>
    );
};

// Estilização
const styles = StyleSheet.create({
    text: {
        marginTop: 10,       
        fontSize: 18,      
        textAlign: 'center',   
        color: '#007ACC',      
    },
});

// Exportação
export default IdealWeight;
