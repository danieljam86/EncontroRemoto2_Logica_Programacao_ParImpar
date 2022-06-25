
// se o número for ímpar, escreva 'ímpar' e o número correspondente
//se o número for zero, escreva 'zero' e o número correspondente

let alunosPresentes = 17;

for (let aluno =0; aluno <=alunosPresentes; aluno++){

    if(aluno == 0){
        console.log("Zero " + aluno);
    }

    if(aluno % 2 ==0){
        console.log("par " + aluno)
    }else{
        console.log("ímpar " + aluno)
    }
}