import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // estilo da view principal 
    view: {
        flex: 1,
        backgroundColor: "#010011", 
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    
    // estilo da logo
    logoImage: {
        width: 180,
        height: 190,
        resizeMode: "contain",
    },

    // container principal (card roxo-escuro)
    containerPrincipal: {
        backgroundColor: "#23123dff",
        width: "70%",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        paddingTop: 30,
    },

    // estilos existentes (mantidos / levemente ajustados)
    titulo: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 24,
        textAlign: "center",
    },

    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    inputLabel: {
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 8,
    },
    escrito: {
        backgroundColor: "rgba(255,255,255,0.02)",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        color: "#FFFFFF",
        fontSize: 16,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
    },

    conversorIndicator: {
        alignItems: "center",
        marginVertical: 18,
    },

    dropdownContainer: {
        width: "100%",
        marginBottom: 18,
    },
    dropdownLabel: {
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 8,
    },

    botao: {
        backgroundColor: "#9C27B0",
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 24,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#9C27B0",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
        elevation: 5,
    },
    botaoTexto: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },

    resultadoContainer: {
        marginTop: 22,
        width: "100%",
        alignItems: "center",
    },
    resultadoTexto: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
    },

    erroTexto: {
        color: "#F44336",
        fontSize: 14,
        marginTop: 10,
        textAlign: "center",
    },

    // estilos antigos mantidos
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
});