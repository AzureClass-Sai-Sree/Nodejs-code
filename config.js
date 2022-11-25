//----------------------------------------------------------------------------------
// Microsoft Developer & Platform Evangelism
//
// Copyright (c) Microsoft Corporation. All rights reserved.
//
// THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, 
// EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES 
// OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
//----------------------------------------------------------------------------------
// The example companies, organizations, products, domain names,
// e-mail addresses, logos, people, places, and events depicted
// herein are fictitious.  No association with any real company,
// organization, product, domain name, email address, logo, person,
// places, or events is intended or should be inferred.
//----------------------------------------------------------------------------------

var fs = require('fs');
var storage = require('azure-storage');

// Read configuration file to retrieve credentials such as account name and account key
function readConfig() {
  var config = JSON.parse(fs.readFileSync('app.config', 'utf8'));
  
  if (config.useDevelopmentStorage) {
    // use the Storage Emulator if this option is specified
    // note that the Storage Emulator must be running for the sample to succeed
    config.connectionString = storage.generateDevelopmentStorageCredentials();
  }
  
  return config;
}

module.exports = readConfig();