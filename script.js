function corrigir() {
    var pontos1;
    var pontos2;
    var pontos3;
    var pontos4;
    var mensagem1;
    var mensagem2;
    var mensagem3;
    var mensagem4;
    pontos1 = 0;
    pontos2 = 0;
    pontos3 = 0;
    pontos4 = 0;

    //Redes
    if (document.teste.q1[1].checked) {
        pontos1 += 5;
    }
    //Verifica se a alternativa corretada questão 2 foi marcada certa 3      
    if (document.teste.q2[2].checked) {
        pontos1 += 5;
    }


    //programação        
    if (document.teste.q3[0].checked) {
        pontos2 += 5;
    }
    //Verifica se a alternativa corretada questão 4 foi marcada            
    if (document.teste.q4[3].checked) {
        pontos2 += 5;
    }


    //Design          
    if (document.teste.q5[0].checked) {
        pontos3 += 5;
    }
    //          
    if (document.teste.q6[2].checked) {
        pontos3 += 5;
    }


    //Segurança           
    if (document.teste.q7[3].checked) {
        pontos4 += 5;
    }
    //Verifica se a alternativa corretada questão 8 foi marcada            
    if (document.teste.q8[1].checked) {
        pontos4 += 5;
    }


    if (pontos1 <= 5) {
        mensagem1 = "Você não possui vocação para REDES.";
    } else {
        mensagem1 = "Você possui vocação para REDES.";
    }

    if (pontos2 <= 5) {
        mensagem2 = "Você não possui vocação para PROGRAMAÇÃO.";
    } else {
        mensagem2 = "Você possui vocação para PROGRAMAÇÃO.";
    }

    if (pontos3 <= 5) {
        mensagem3 = "Você não possui vocação para DESIGN.";
    } else {
        mensagem3 = "Você possui vocação para DESIGN.";
    }
    
    if (pontos4 <= 5) {
        mensagem4 = "Você não possui vocação para SEGURANÇA DA INFORMAÇÃO.";
    } else {
        mensagem4 = "Você possui vocação para SEGURANÇA DA INFORMAÇÃO.";
    }

    var res = document.getElementById("resultado");
    res.innerHTML = "RESULTADOS" + "<br>" + mensagem1 + "<br>" + mensagem2 + "<br>" + mensagem3 + "<br>" + mensagem4;

}
