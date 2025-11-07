<?php
// Permitir peticiones desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Tu URL de Redash con API key
$url = "http://redash.rappi.com/api/queries/104357/results.json?api_key=c4bIbtzoBQm9k634aukVeD1JNCjlyOmIjXcrqYzK";

// Trae el contenido y lo imprime
$response = file_get_contents($url);
if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "No se pudo obtener respuesta de Redash"]);
    exit;
}

echo $response;
?>
