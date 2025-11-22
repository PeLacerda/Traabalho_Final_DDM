/*moedas suportadas pela API
USD	
EUR	
BRL	
GBP	
JPY	
AUD	
CAD
*/

import { useState } from "react";

export default function useApi(){
    const [valor,setValor]= useState(""); 
    const [moeda,setMoeda]= useState("")
    const [result,setResult]=useState("");
    const [erro,setErro]= useState("");
  
    //criação da função de conversão
    async function converter(moedaParaConverter) {
        const v = parseFloat (valor);
        if(!v || v <= 0){
          setErro("Erro numero invalido,Digite um valor Válido");
          setResult("");
          return;
        }
    
        const target = moedaParaConverter.toUpperCase();
        const url =  `https://api.frankfurter.app/latest?amount=${v}&from=BRL&to=${target}`;//chamar API
  
        try {
          const resp = await fetch(url);
          const data = await resp.json();
       
          const valorConvertido = data.rates[target];

          if (valorConvertido) {
            setResult(`${target} ${valorConvertido.toFixed(2)}`);
            setErro("");
          } 
          else {
            setResult("");
            setErro("Moeda não suportada");
          }
        } 
        catch (erro) {
          console.error("Erro na API:", erro);
          setResult("");
        }
    }

    return {
        valor,
        setValor,
        moeda,
        setMoeda,
        result,
        erro,
        converter
    };
}
