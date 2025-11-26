import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Estilo from "./componentes/estilo";
import useApi from "./componentes/API/Api";
import Dropdown from "./componentes/DropDown/Dropdown";
import { Ionicons } from "@expo/vector-icons";

export default function App(){
    const { valor, setValor, moeda, setMoeda, result, erro, converter } = useApi();

    return (
        <View style={Estilo.view}>
            <View style={Estilo.logoWrapper}>
                <Image
                    source={require("./assets/logo_azul.jpg")}
                    style={[Estilo.logoImage, { marginTop: -80 }]}
                />
            </View>

            <View style={Estilo.containerPrincipal}>
                <Text style={Estilo.titulo}>CONVERSOR DE MOEDAS</Text>

                <View style={Estilo.inputContainer}>
                    <Text style={Estilo.inputLabel}>R$ BRL</Text>
                    <TextInput 
                        placeholder="Valor Moeda em BRL" 
                        placeholderTextColor="#9E9E9E"
                        style={Estilo.escrito} 
                        keyboardType="numeric" 
                        onChangeText={setValor} 
                        value={valor}
                    />{/*campo de escrita do valor em real BRL*/}
                </View>
                
                <View style={Estilo.conversorIndicator}>
                    <Ionicons name="chevron-down" size={24} color="#FFFFFF" />
                    <Ionicons name="chevron-down" size={24} color="#FFFFFF" style={{marginTop: -12}} />
                </View>
                
                <View style={Estilo.dropdownContainer}>
                    <Text style={Estilo.dropdownLabel}>ESCOLHER MOEDA</Text>
                    <Dropdown moeda={moeda} setMoeda={setMoeda} />
                </View>
                
                <TouchableOpacity 
                    style={Estilo.botao} 
                    onPress={() => converter(moeda)}
                >
                    <Text style={Estilo.botaoTexto}>CONVERTER MOEDA</Text>
                </TouchableOpacity>{/*botão que faz a função de converter*/}
                
                {/*apresentar o resultado da conversão*/}
                {result ? (
                    <View style={Estilo.resultadoContainer}>
                        <Text style={Estilo.resultadoTexto}>{result}</Text>
                    </View>
                ) : null}

                {/*apresentar algum erro se tiver falhas*/}
                {erro ? <Text style={Estilo.erroTexto}>{erro}</Text> : null}
            </View>
        </View>
    );
}