/*moedas suportadas pela API
USD	
EUR	
BRL	
GBP	
JPY	
AUD	
CAD
*/
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Estilo from "./componentes/estilo";

export default function App(){
  const [valor,setValor]= useState(""); 
  const [moeda,setMoeda]= useState("")
  const [result,setResult]=useState("");
  const [erro,setErro]= useState("");

  //criação da função de conversão
  async function converter(moeda) {
      const v = parseFloat (valor);
      if(!v){
        setErro("Erro numero invalido,Digite um valor Válido");
        setResult("");
        return;
      }
  
  const target= moeda.toUpperCase()
  const url =  `https://api.frankfurter.app/latest?amount=${v}&from=BRL&to=${target}`;//chamar API

  try {
    const resp = await fetch(url);
    const data = await resp.json();
 
    const valorConvertido = data.rates[moeda];

    if (valorConvertido) {
      setResult(`${moeda} ${valorConvertido.toFixed(2)}`);
      setErro("");
    } 
    else {
      setResult("");
      setErro("Moeda não suportada");
        }
    } 
    catch (erro) {
      setErro("Erro ao acessar a API");
      setResult("");
  }
}
//estrutura básica do visual do site
  return(
    <View style={Estilo.view}>
      <Text>Conversor</Text>
      
      <TextInput placeholder="Valor Moeda em BRL" style={Estilo.escrito} keyboardType="numeric" onChangeText={setValor} value={valor}/>{/*campo de escrita do valor em real BRL*/}
      
      <TextInput placeholder="Moeda que deseja converter" style={Estilo.escrito} onChangeText={setMoeda} value={moeda}/> {/*campo de escrita da moeda a ser convertido*/}
      
      <TouchableOpacity style={Estilo.botao} onPress={() =>converter(moeda) }>Converter</TouchableOpacity>{/*botão que faz a função de converter*/}
      
      {/*apresentar o resultado da conversão*/}
       {result ? <Text>{result}</Text> : null}

      {/*apresentar algum erro se tiver falhas*/}
      {erro ? <Text style={{color:"red"}}>{erro}</Text> : null}
    </View>
  );
}