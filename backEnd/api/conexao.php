<?php
	$host = "localhost"; 
	$usuario = "root"; 
	$senha = ""; 
	$database = "empresa"; 

	$connection = new mysqli($host, $usuario, $senha, $database);
	
	if ($connection->connect_error) {
	    die("Falha ao tentar fazer a conexão com o BD " . $connection->connect_error);
	}
?>