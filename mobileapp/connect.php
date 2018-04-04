<?php
$servername = "localhost";
$database = "sealwikia";
$username = "root";
$password = "secret";
$conn = mysqli_connect($servername, $username, $password, $database);
// mengecek koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>