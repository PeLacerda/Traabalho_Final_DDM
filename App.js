import { TextInput,Text,View,TouchableOpacity} from "react-native";
import { useState } from "react";
import Estilo from "./componentes/estilo";

export default function App(){
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
  const url =  `https://api.frankfurter.app/latest?amount=${v}&from=BRL&to=${target}`;

  
  try {
    const resp = await fetch(url);
    const data = await resp.json();
 
    const valorConvertido = data.rates[moeda];

    if (valorConvertido) {
      setResultado(`${moeda} ${valorConvertido.toFixed(2)}`);
      setErro("");
    } else {
      setResultado("");
      setErro("Moeda não suportada");
    }
  } catch (erro) {
    setErro("Erro ao acessar a API");
    setResultado("");
  }

  return(
    <View>
      <Text>Conversor</Text>
    </View>
  );
}