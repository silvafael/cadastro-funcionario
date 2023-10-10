<?php
    include '../habilitar_cors.php';
    include '../conexao.php';

    $data = file_get_contents("php://input");
    $requestData = json_decode($data);

    

?>