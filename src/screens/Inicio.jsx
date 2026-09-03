import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native'
import Cabecalho from '../components/Cabecalho'
import BotaoDestino from '../components/BotaoDestino'

export default function Inicio({ mostrarDetalhes }) {

    const [origem, setOrigem] = useState('America/Sao_Paulo')
    const [destino, setDestino] = useState('')

    async function buscar() {

        if (destino === '') {

            Alert.alert(
                'Atenção',
                'Escolha um destino.'
            )

            return
        }

        try {

            const resposta = await fetch(
                `https://utctime.app/api/convert?from=${origem}&to=${destino}`
            )

            const dados = await resposta.json()

            if (dados.error) {

                Alert.alert(
                    'Erro',
                    'Não foi possível encontrar esse fuso horário.'
                )

                return
            }

            const dataHora = dados.to.datetime
            const partes = dataHora.split('T')
            const data = partes[0]
            const horario = partes[1].substring(0, 5)
            const diferencaMinutos = dados.difference_minutes
            const diferencaHoras = diferencaMinutos / 60
            let textoDiferenca

            if (diferencaHoras > 0) {

                textoDiferenca =
                    `${diferencaHoras} horas à frente`

            } else if (diferencaHoras < 0) {

                textoDiferenca =
                    `${Math.abs(diferencaHoras)} horas atrás`

            } else {

                textoDiferenca =
                    'Mesmo horário'

            }

            const resultado = {
                origem: dados.from.timezone,
                destino: dados.to.timezone,
                horario: horario,
                data: data,
                diferenca: textoDiferenca
            }

            mostrarDetalhes(resultado)

        } catch (erro) {

            Alert.alert(
                'Erro',
                'Não foi possível conectar com a API.'
            )

            console.log(erro)
        }
    }

    function selecionarDestino(fuso) {

        setDestino(fuso)

    }

    return (

        <ScrollView style={estilos.container}>

            <View style={estilos.conteudo}>

                <Cabecalho />

                <Text style={estilos.label}>
                    📍 Seu local
                </Text>

                <TextInput
                    style={estilos.input}
                    value={origem}
                    onChangeText={setOrigem}
                    placeholder="Ex: America/Sao_Paulo"
                />

                <Text style={estilos.label}>
                    ✈️ Destino
                </Text>

                <TextInput
                    style={estilos.input}
                    value={destino}
                    onChangeText={setDestino}
                    placeholder="Ex: Europe/Paris"
                />

                <Text style={estilos.tituloSugestoes}>
                    Destinos populares
                </Text>

                <BotaoDestino
                    nome="🇫🇷 Paris"
                    fuso="Europe/Paris"
                    selecionar={selecionarDestino}
                />

                <BotaoDestino
                    nome="🇬🇧 Londres"
                    fuso="Europe/London"
                    selecionar={selecionarDestino}
                />

                <BotaoDestino
                    nome="🇯🇵 Tóquio"
                    fuso="Asia/Tokyo"
                    selecionar={selecionarDestino}
                />

                <BotaoDestino
                    nome="🇺🇸 Nova York"
                    fuso="America/New_York"
                    selecionar={selecionarDestino}
                />

                <BotaoDestino
                    nome="🇦🇺 Sydney"
                    fuso="Australia/Sydney"
                    selecionar={selecionarDestino}
                />

                <TouchableOpacity
                    style={estilos.botao}
                    onPress={buscar}
                >

                    <Text style={estilos.textoBotao}>
                        VER HORÁRIO
                    </Text>

                </TouchableOpacity>

            </View>

        </ScrollView>
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

    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7a4f5d',
        marginBottom: 8,
        marginTop: 12
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E8DED3',
        borderRadius: 12,
        padding: 14,
        fontSize: 14,
        color: '#8f4154'
    },

    tituloSugestoes: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7a4f5d',
        marginTop: 25,
        marginBottom: 12
    },

    botao: {
        backgroundColor: '#8c6371',
        padding: 17,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 15
    },

    textoBotao: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1
    }

})