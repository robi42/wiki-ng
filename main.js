#!/usr/bin/env helma

// load DB connector lib
addToClasspath('lib/mysql-connector-java-5.1.6-bin.jar');

// main script to start application

if (__name__ == "__main__") {
    require("helma/webapp").start();
}
