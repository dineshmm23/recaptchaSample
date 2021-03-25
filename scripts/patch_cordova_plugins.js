#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');

const PROJECT_DIR = '.';


module.exports = function (context) {   
    execSync('cp ./patches/plugins/cordova-universal-links-plugin/manifestWriter.js ./plugins/cordova-universal-links-plugin/hooks/lib/android/manifestWriter.js', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching cordova-universal-links-plugin/manifestWriter.js potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });

    execSync('cp ./patches/plugins/cordova-universal-links-plugin/xcodePreferences.js ./plugins/cordova-universal-links-plugin/hooks/lib/ios/xcodePreferences.js', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching cordova-universal-links-plugin/xcodePreferences.js potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });

    execSync('cp ./patches/plugins/cordova-plugin-browsertab/BrowserTab.gradle ./plugins/cordova-plugin-browsertab/src/android/BrowserTab.gradle', {cwd: PROJECT_DIR, stdio:[0,1,2]}, (err, stdout, stderr) => {
        console.log('Patching cordova-plugin-browsertab/BrowserTab.gradle potentially failed.');
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
    });

};