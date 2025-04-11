// Importações
import { Text, StyleSheet } from 'react-native';

// Componente que exibe o título
const Title = () => {
    return (
        // Título
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

// Estilização
const styles = StyleSheet.create({
    title: {
        fontSize: 32,          
        fontWeight: 'bold',   
        textAlign: 'center',  
        marginBottom: 24,       
        color: '#007ACC',       
    },
});

// Exportação
export default Title;

