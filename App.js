import { Text,View,TouchableOpacity} from "react-native";
import { useState } from "react";
import Estilo from "./componentes/estilo"

export default function app(){
  const [valor,setValor]= useState("");
  const [result,setResult]=useState("");
  const [erro,setErro]= useState("");

  async function converter(moeda) {
      const v = parseFloat (valor);
      if(!v){
        setErro("Erro numero invalido,Digite um valor Válido");
        setResult("");
        return;
      }
  }
  const target= moeda.toUpperCase()

  return(
   <View style={Estilo.caixa}>
    <TouchableOpacity style={Estilo.btn} title="Chamar API" onPress={chamarAPI}>
      <Text>Enviar</Text>
    </TouchableOpacity>
    <Text>{JSON.stringify(data)} </Text>
   </View>
  )
}