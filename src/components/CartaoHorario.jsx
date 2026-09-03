import { View, Text, StyleSheet } from 'react-native'

export default function CartaoHorario({ resultado }) {

    return (
        <View style={estilos.cartao}>

            <Text style={estilos.destino}>
                {resultado.destino}
            </Text>

            <Text style={estilos.horario}>
                {resultado.horario}
            </Text>

            <Text style={estilos.data}>
                {resultado.data}
            </Text>

            <View style={estilos.linha} />

            <Text style={estilos.informacao}>
                Origem: {resultado.origem}
            </Text>

            <Text style={estilos.diferenca}>
                {resultado.diferenca}
            </Text>

        </View>
    )
}

const estilos = StyleSheet.create({

    cartao: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 25,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#E8DED3'
    },

    destino: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#7a4f5d'
    },

    horario: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#a24d6a',
        marginTop: 15
    },

    data: {
        fontSize: 14,
        color: '#7a4f5d'
    },

    linha: {
        height: 1,
        backgroundColor: '#E8DED3',
        marginVertical: 20
    },

    informacao: {
        fontSize: 13,
        color: '#7a4f5d'
    },

    diferenca: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7a4f5d',
        marginTop: 8
    }

})