<?php

include "common.php.inc";
$dbh = getDBHandle();
$uid = getUIDFromSID($dbh);

// return the next image
$row = getNextImage($dbh, $uid);

echo json_encode($row);

?>
