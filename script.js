function calcular(tipo,valor){//função calcular do tipo ação ou valor
    if(tipo === 'acao'){//se for tipo ação
        if(valor === 'c'){//for do valor do tipo limpar usa o doc com o id resultado para deixar sem valor
            //limpar visor
            document.getElementById('resultado').value=""
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){//for de algum desses operadores usa o doc com o id resultado para acrescentar o valor(operador) a outro valor
            document.getElementById('resultado').value+=valor
        }
        if(valor === '='){//for de igualdade usa a função valor_campo=eval que avalia a operação que esta acontecendo
            var valor_campo=eval(document.getElementById('resultado').value)
            //e coloca o resultado no campo
            document.getElementById('resultado').value=valor_campo;
        }
    }else if(tipo === 'valor'){//se for tipo valor usa o doc com o id resultado para acrescentar o valor a outro valor
            document.getElementById('resultado').value+=valor
    }
}
/*function calcular(tipo,valor){
    if(tipo ==='acao'){
        if(valor==='c'){
            //limpar visor
            document.getElementById('resultado').value=""
        }
        if(valor=== '+' || valor ==='-'||valor==='*'||valor==='/'||valor==='.'){
            document.getElementById('resultado').value+=valor
        }
        if(valor==='='){
            //A função Eval avalia o expressão de cadeia de caracteres e retorna seu valor. Por exemplo, Eval("1 + 1") retorna 2.
            var valor_campo=eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value=valor_campo;
        }
    }else if(tipo==='valor'){
        document.getElementById('resultado').value+=valor;

    }
}*/