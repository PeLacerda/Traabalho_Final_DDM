import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // Container principal - fundo cinza escuro
    view: {
        flex: 1,
        backgroundColor: "#2C2C2C", // Cinza escuro
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    // Label "Tela inicial" no topo
    labelTelaInicial: {
        color: "#9E9E9E", // Cinza claro
        fontSize: 12,
        alignSelf: "flex-start",
        marginBottom: 10,
        marginLeft: 10,
    },
    // Container principal roxo-escuro
    containerPrincipal: {
        backgroundColor: "#1A0D2E", // Roxo muito escuro/preta
        width: "90%",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        marginTop: 20,
    },
    // Título "CONVERSOR DE MOEDAS"
    titulo: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 40,
        textAlign: "center",
    },
    // Container do campo de input BRL
    inputContainer: {
        width: "100%",
        marginBottom: 30,
    },
    // Label do input BRL
    inputLabel: {
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 8,
    },
    // Input field
    escrito: {
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        color: "#FFFFFF",
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    // Container do indicador de conversão (setas)
    conversorIndicator: {
        alignItems: "center",
        marginVertical: 20,
    },
    // Container do dropdown
    dropdownContainer: {
        width: "100%",
        marginBottom: 30,
    },
    // Label do dropdown
    dropdownLabel: {
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 8,
    },
    // Botão de converter
    botao: {
        backgroundColor: "#9C27B0", // Roxo vibrante
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 40,
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    // Texto do botão
    botaoTexto: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    // Container de resultado
    resultadoContainer: {
        marginTop: 30,
        width: "100%",
        alignItems: "center",
    },
    // Texto do resultado
    resultadoTexto: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    // Texto de erro
    erroTexto: {
        color: "#F44336",
        fontSize: 14,
        marginTop: 10,
        textAlign: "center",
    },
    // Estilos antigos mantidos para compatibilidade
    caixa: {
        height: 150,
        width: 500,
        margin: 50
    },
    btn: {
        width: 100,
        height: 50,
        backgroundColor: 'blue'
    },
    escrita: {
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 12, 
        borderRadius: 6,
    },
})