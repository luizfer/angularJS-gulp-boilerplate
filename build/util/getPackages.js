module.exports = function npm() {
  
  var packageManifest = {};
  
  try {
    packageManifest = require('../../package.json');
  } catch (e) {
    console.log("Not found package.json");
  }

  return packageManifest.dependencies ? Object.keys(packageManifest.dependencies) : [];

}