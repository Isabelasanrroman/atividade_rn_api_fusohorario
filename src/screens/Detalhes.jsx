import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import CartaoHorario from '../components/CartaoHorario'

export default function Detalhes({ resultado, voltar }) {

    return (

        <View style={estilos.container}>

            <View style={estilos.conteudo}>

                <TouchableOpacity
                    style={estilos.voltar}
                    onPress={voltar}
                >

                    <Text style={estilos.textoVoltar}>
                        Voltar
                    </Text>

                </TouchableOpacity>

                <Text style={estilos.titulo}>
                    Resultado
                </Text>

                <Text style={estilos.subtitulo}>
                    Confira o horário no destino
                </Text>

                <CartaoHorario
                    resultado={resultado}
                />

            </View>

        </View>
    )
}

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8eff2'
    },

    conteudo: {
        padding: 25,
        maxWidth: 700,
        width: '100%',
        alignSelf: 'center'
    },

    voltar: {
        marginBottom: 25
    },

    textoVoltar: {
        fontSize: 15,
        color: '#6a4552',
        fontWeight: 'bold'
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#7a4f5d'
    },

    subtitulo: {
        fontSize: 15,
        color: '#7a4f5d',
        marginTop: 5
    }

})