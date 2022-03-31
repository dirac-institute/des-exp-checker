<?php

$config = array(
    "adminemail" => "brycek@uw.edu",   // email address used for contact
    "adminname" => "kbmod",    // name used for admin emails
    "domain" => NULL,       // webserver domain name (no http:// or https://)
    "releases" => array("DEEP"),      // list of available releases
    "userdb" => ".db/users.db",       // path to the user database
    "filedb" => array("DEEP" => ".db/files.db"),        // release => path to file database
    "release" => array("DEEP"),          // empty, set later
    "problem_code" => array("False" => 0)  // problem label => numeric code
);

?>