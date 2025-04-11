// Importações
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import { useState } from 'react'; 
import IdealWeight from './IdealWeight'; 

const FormIMC = () => {
    // Estados locais para armazenar o peso, altura e resultado do IMC
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    // Função que realiza o cálculo do IMC
    const CalcularIMC = () => {
        if (peso && altura) {
            // Conversão da altura de cm para metros
            const alturaMetros = parseFloat(altura) / 100;
            // Calcula o IMC 
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            // Atualiza o estado para o IMC calculado
            setImc(imcCalculado);
        }
    };

    return (
        <View style={styles.formContainer}>
            {/* Campo que insere o peso */}
            <TextInput
                style={styles.input}
                placeholder="Peso (Kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                placeholderTextColor="#007ACC" 
            />

            {/* Campo que insere a altura */}
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                placeholderTextColor="#007ACC"
            />  

            {/* Botão para calcular o IMC */}
            <Button title="Calcular IMC" onPress={CalcularIMC} color="#007ACC" />  

            {/* Se o IMC foi calculado, exibe os resultados */}
            {imc && (
                <>
                {/* Exibe o IMC, a classificação com base no IMC e o peso mínimo e máximo ideal */}
                    <Result imc={imc} />      
                    <Classification imc={imc} />     
                    <IdealWeight altura={altura} />     
                </>
            )}
        </View>
    );
};

// Estilo container
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#e0ffff', 
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: '#007ACC',      
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color: '#007ACC',            
    },
});

// Exportação
export default FormIMC;
