<?php
    include '../habilitar_cors.php';
	include '../conexao.php';

    $data = file_get_contents("php://input");
    $requestData = json_decode($data);

    $sql = "INSERT INTO funcionarios VALUES '(0,$requestData->Sobrenome,$requestData->Nome,$requestData->Cargo,$requestData->DataNasc,$requestData->Endereco, $requestData->Cidade, $requestData->CEP,$requestData->Pais,$requestData->Fone,$requestData->Salario)'";

    if ($connection->query($sql) === true) {
        $response = [
            'mensagem' => 'Funcionario criado com sucesso !'
        ];
    } else {
        $response = [
            'mensagem' => $connection->error
        ];
    }
    echo json_encode($response);

?>