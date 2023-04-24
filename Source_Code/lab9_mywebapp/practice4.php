<?php
echo "<table border=1>";
echo "<tr><td></td>";
for ($i=1; $i<=$_POST["size"]; $i++) {
	echo "<td> " . $i . " </td>";
}
echo "</tr>";
for($j=1; $j<=$_POST["size"]; $j++){
	echo "<tr><td> " . $z . "</td>";
	for($k=1; $k<=$_POST["size"]; $k++){
	echo "<td> " . $j*$k . " </td>";
	}
	echo "</tr>";	
}
echo "</table>";
?>
