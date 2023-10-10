<?php
	include '../habilitar_cors.php';
	include '../conexao.php';

  $data = file_get_contents("php://input");

  $requestData = json_decode($data);

	$sql = "DELETE FROM Funcionarios WHERE CodFun='$requestData->CodFun'";

    if ($connection->query($sql) === true) {
        $response = [
            'mensagem' => 'Registro apagado com sucesso!'
        ];
    } else {
        $response = [
            'mensagem' => $connection->error
        ];
    }
    echo json_encode($response);
?>