#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");

const PROJECT_DIR = "./recaptcha-web";

module.exports = function (context) {
  execSync(
    "npm install",
    { cwd: PROJECT_DIR, stdio: [0, 1, 2] },
    (err, stdout, stderr) => {
      console.log("npm install potentially failed.");
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );


  execSync(
    "ng build --aot=false --build-optimizer=false --output-path ../platforms/ios/www",
    { cwd: PROJECT_DIR, stdio: [0, 1, 2] },
    (err, stdout, stderr) => {
      console.log("ng build potentially failed.");
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
  // execSync('ng build --progress=false --prod --aot --build-optimizer --output-path ../www', { cwd: PROJECT_DIR, stdio: [0, 1, 2] }, (err, stdout, stderr) => {
  //     console.log('ng build potentially failed.');
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(stdout);
  // });
};
