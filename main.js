#!/usr/bin/env helma

// main script to start application

if (require.main == module.id) {
    addToClasspath('lib/mysql-connector-java-5.1.7-bin.jar'); // JDBC driver.
    require("helma/webapp").start();
}
