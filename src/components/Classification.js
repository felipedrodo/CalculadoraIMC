// Importações
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Função que recebe o valor do IMC retornando uma string com a classificação correspondente
const getClassification = (imc) => {
    const valor = parseFloat(imc); // Converte o valor do IMC para número

    // Mostra a classificação do IMC
    if (valor < 18.5) return 'Abaixo do peso';
    if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
    if (valor >= 25 && valor <= 29.9) return 'Sobrepeso';
    if (valor >= 30 && valor <= 34.9) return 'Obesidade grau 1';
    if (valor >= 35 && valor <= 39.9) return 'Obesidade grau 2';
    if (valor >= 40) return 'Obesidade grau 3 (obesidade mórbida)';
    
    // Retorna string vazia se não entrar em nenhuma classificação
    return '';
};

// Componente principal que exibe a classificação baseada no IMC recebido por props
const Classification = ({ imc }) => {
    const classificacao = getClassification(imc); // Obtém a classificação do IMC

    return (
        // Exibe o texto com o resultado da classificação
        <Text style={styles.classification}>
            Classificação: {classificacao}
        </Text>
    );
};

// Estilização
const styles = StyleSheet.create({
    classification: {
        marginTop: 10,      
        fontSize: 18,         
        textAlign: 'center',  
        color: '#007ACC',   
    },
});

// Exportações
export default Classification;
