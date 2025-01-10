function soma() {
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(document.getElementById("n2").value)
    let res = document.getElementById("resultado")


    let somatorio = num1 + num2

    res.innerHTML = (`A soma de ${num1} + ${num2} é igual a ${somatorio}`)
    res.style.backgroundColor = "blue"
    res.style.color = "pink"
    res.style.backgroundColor = "blue"
}

