import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function BotaoDestino({ nome, fuso, selecionar }) {

    return (
        <TouchableOpacity
            style={estilos.botao}
            onPress={() => selecionar(fuso)}
        >

            <Text style={estilos.nome}>
                {nome}
            </Text>

            <Text style={estilos.fuso}>
                {fuso}
            </Text>

        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({

    botao: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#E8DED3'
    },

    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6F5B4B'
    },

    fuso: {
        fontSize: 12,
        color: '#9A8A7B',
        marginTop: 3
    }

})