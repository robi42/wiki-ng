#!/usr/bin/env helma

// main script to start application

if (__name__ == "__main__") {
    // load JDBC driver
    addToClasspath('lib/mysql-connector-java-5.1.7-bin.jar');
    require("helma/webapp").start();
}
