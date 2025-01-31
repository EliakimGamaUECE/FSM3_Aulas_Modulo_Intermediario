import FilhoRecebeDados from './FilhoRecebeDados'

function PaiMandaDados() {

    let nome = "Eliakim"
    let idade = 34
    let profissao = "Dev"



    return(
        <>
        <FilhoRecebeDados 
        nome={nome} 
        idade={idade}
        profissao={profissao}
        />
        </>
    )
}

export default PaiMandaDados