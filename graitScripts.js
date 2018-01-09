var fs = require('fs');
var package = require('./package.json');
const { exec } = require('child_process');

// Function to remove a folder with content
var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

// Function that upgrades RN and installs folders
var reactNativeUpgrade = function(){
    exec('react-native upgrade', (error, stdout, stderr) => {
        if (error) {
            console.error(`${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

if (process.argv[2] == "setProjectName") {

    // Run set new project name
    const name = process.argv[3]
    if (name) {

        // Delete folders
        deleteFolderRecursive("./ios/");
        deleteFolderRecursive("./android/");

        // Change name in package.json
        package.name = name
        fs.writeFile("package.json", JSON.stringify(package, null, 2), ()=>{
            console.log('file has been written');
            reactNativeUpgrade()
        })

    }else {
        console.error("No name defined");
    }

}

return
