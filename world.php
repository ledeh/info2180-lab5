<?php
$host = 'localhost';
$username = 'lab5_user';
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$stmt = $conn->query("SELECT * FROM countries");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$name = filter_input(INPUT_GET, 'name', FILTER_SANITIZE_STRING); 
$stmt->bindParam(':name', $name, PDO::PARAM_STRING); 

$stmt->execute();
$student = $stmt->fetchAll();

?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
