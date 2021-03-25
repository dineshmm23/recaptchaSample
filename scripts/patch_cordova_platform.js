#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');

const PROJECT_DIR = '.';


module.exports = function (context) {   

    execSync('cp ./patches/platforms/ios/AppDelegate.m ./platforms/ios/AirSewa/Classes/AppDelegate.m', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching platforms/ios/AirSewa/Classes/AppDelegate.m potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });

    execSync('cp ./patches/platforms/ios/MainViewController.m ./platforms/ios/AirSewa/Classes/MainViewController.m', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching platforms/ios/AirSewa/Classes/MainViewController.m potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });


    execSync('cp ./patches/plugins/cordova-plugin-sslcertificatechecker/SSLCertificateChecker.m ./platforms/ios/AirSewa/Plugins/cordova-plugin-sslcertificatechecker/SSLCertificateChecker.m', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching cordova-plugin-sslcertificatechecker/SSLCertificateChecker.m potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });


};