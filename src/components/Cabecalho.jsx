import { View, Text, StyleSheet } from 'react-native'

export default function Cabecalho() {

    return (
        <View style={estilos.cabecalho}>

            <Text style={estilos.titulo}>
                TRAVEL TIME
            </Text>

            <Text style={estilos.subtitulo}>
                Horários pelo mundo
            </Text>

            <Text style={estilos.descricao}>
                Descubra a diferença de horário entre dois lugares
            </Text>

        </View>
    )
}

const estilos = StyleSheet.create({

    cabecalho: {
        marginBottom: 25
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#7a4f5d',
        letterSpacing: 2
    },

    subtitulo: {
        fontSize: 19,
        color: '#7a4f5d',
        marginTop: 4
    },

    descricao: {
        fontSize: 14,
        color: '#7a4f5d',
        marginTop: 8
    }

})