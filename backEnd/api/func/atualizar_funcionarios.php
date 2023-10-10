<?php
include '../habilitar_cors.php';
include '../conexao.php';

$data = file_get_contents("php://input");
$requestData = json_decode($data);

$sql = "UPDATE funcionarios SET Sobrenome='$requestData->Sobrenome',Nome='$requestData->Nome', Cargo='$requestData->Cargo', DataNasc='$requestData->DataNasc', Endereco='$requestData->Endereco',Cidade='$requestData->Cidade', CEP='$requestData->CEP', Pais='$requestData->Pais',Fone='$requestData->Fone', Salario='$requestData->Salario' WHERE CodFun = '$requestData->CodFun'";
   
    if ($connection->query($sql) === true) {
        $response = [
            'mensagem' => 'Funcionario atualizado com sucesso !'
        ];
    } else {
        $response = [
            'mensagem' => $connection->error
        ];
    }
    echo json_encode($response);
?>
