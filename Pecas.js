var listaDePecas = ["Filtro de Ar","Amortedor","Polia"]

if (listaDePecas.lenght < 10) { 
    //É possível casdastrar
    console.log ("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}


let peso = 50; 
if (peso<100){
    console.log("A peça deve pesar no minimo 100g")
}else {
    console.log("A peça possui peso adequado")
}


let nomePeca = "Disco de Freio"
if (nomePeca.length >3){
    console.log("Nome de peça está adequado para o cadastro!")
}else if(nomePeca.lenght ==0)
     console.log("O nome da peça não pode ser vazio")
else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}


switch(nomePeca.lenght){
    Case 0:
    console.log("O nome da peça não pode ser vazio")
    break;

    Case 1:
    Case 2:
    Case 3:
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")

    default:
        console.log("Nome da peça está adequado")
        break;
}