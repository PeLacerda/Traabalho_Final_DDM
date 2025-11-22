import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Estilo from "./componentes/estilo";
import useApi from "./componentes/API/Api";
import Dropdown from "./componentes/DropDown/Dropdown";
export default function App(){
    const { valor, setValor, moeda, setMoeda, result, erro, converter } = useApi();

    return (
        <View style={Estilo.view}>
            <Text>Conversor</Text>
            
            <TextInput 
                placeholder="Valor Moeda em BRL" 
                style={Estilo.escrito} 
                keyboardType="numeric" 
                onChangeText={setValor} 
                value={valor}
            />{/*campo de escrita do valor em real BRL*/}
            
            <Dropdown moeda={moeda} setMoeda={setMoeda} />
            
            <TouchableOpacity 
                style={Estilo.botao} 
                onPress={() => converter(moeda)}
            >
                <Text style={{color:"white", textAlign:"center", padding:10}}>Converter</Text>
            </TouchableOpacity>{/*botão que faz a função de converter*/}
            
            {/*apresentar o resultado da conversão*/}
            {result ? <Text style={{marginTop:10, fontSize:18, fontWeight:"bold"}}>{result}</Text> : null}

            {/*apresentar algum erro se tiver falhas*/}
            {erro ? <Text style={{color:"red", marginTop:10}}>{erro}</Text> : null}
        </View>
    );
}