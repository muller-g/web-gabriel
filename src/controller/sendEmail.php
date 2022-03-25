<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['phone']);
    $mensagem = addslashes($_POST['msg']);

    $para = "gabriel_muller98@hotmail.com";
    $assunto = "Orçamento Site - Web Gabriel";
    $corpoEmail = "Nome: ".$nome. "\r\n".
                "Email: ".$email. "\r\n".
                "Mensagem: ".$mensagem. "".$telefone."\r\n";
    $cabecalho = "From:gabriel_muller@web-gabriel.com.br"."\r\n". //tem que ter o msm dominio do servidor de hospedagem
                "Reply-To:".$email."\r\n".
                "X=Mailer:PHP/".phpversion();

    if(mail($para, $assunto, $corpoEmail, $cabecalho)){
        header ("location: http://web-gabriel.com.br/");
    } else {
        set_time_limit(10);
        echo("ERRO email nao enviado, volte e tente novamente");
        header ("location: http://web-gabriel.com.br/");
    }

}
?>