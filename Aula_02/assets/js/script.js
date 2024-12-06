
var a = "Eliakim "
var b = "Gama "
var c = "do Nascimento"
var d = a + b + c

var string = "2"
var nome_da_variavel = 80 

var x = 10
var y = 23

var idade = x - y
var soma = x + y
var divisao = x / y




var o_que_sera = a - b

// alert("Seja bem-vindo! " + d + " tem " + idade + " anos")
// document.write("<br>")
// console.log(`Seja bem-vindo! ${d} tem ${idade} anos`)

// document.write(o_que_sera)



var nota1 = 19;
var nota2 = 50;
var nota_total = nota1 + nota2;

var resultado = nota_total >= 70 
    ? "🎉 Uhuu! Passei! Bora comemorar! 🎉" 
    : "😅 Ih... melhor preparar o cafezinho, vem trabalho extra por aí... ☕";
var dica = nota_total >= 70 
    ? "💡 Dica: Continue assim e você vai longe!" 
    : "💡 Dica: Não desista! Um bom trabalho pode salvar o dia.";

document.write(`
    <h2>📚 Resultado do curso 📚</h2>
    <p><strong>Nota 1:</strong> ${nota1}</p>
    <p><strong>Nota 2:</strong> ${nota2}</p>
    <p><strong>Nota Total:</strong> ${nota_total}</p>
    <p><strong>Como me saí:</strong> ${resultado}</p>
    <p>${dica}</p>
`);
