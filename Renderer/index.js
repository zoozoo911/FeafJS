import fs from "fs";
import { promises as fsPromises } from "fs";
import path from "path";
// var stackDivs = [];
const saveStringToFile = (fileContent, filePath) => {
  try {
    fs.writeFileSync(filePath, fileContent);
    console.log(`Successfully saved content to ${filePath}`);
  } catch (error) {
    console.error(`Error saving content to ${filePath}: ${error.message}`);
  }
};

function createOrCleanBuildFolder(filepath) {
  const buildFolderPath = path.join(filepath, "build");

  // Check if the "build" folder exists
  if (fs.existsSync(buildFolderPath)) {
    // If it exists, delete the folder and its contents
    fs.rmdirSync(buildFolderPath, { recursive: true });
    console.log('Deleted existing "build" folder.');
  }

  // Create the "build" folder
  fs.mkdirSync(buildFolderPath);
  console.log('Created "build" folder.');
}

async function convertFilesToCSS(filepath) {
  const designDirectory = path.join(filepath, "src/Designs");

  try {
    const files = await fsPromises.readdir(designDirectory);
    const filenamesArray = []; // Declare an array to store filenames

    await Promise.all(
      files.map(async (filename) => {
        filenamesArray.push(
          '<link rel="stylesheet" href="./' +
            filename.substring(0, filename.length - 3) +
            ".css" +
            '">'
        ); // Save filename to the array
        var designModulePath = path.join(filepath, "src/Designs/", filename);
        var style = await import("file://" + designModulePath);
        var customCSSChecker = null,
          code = "#" + filename.substring(0, filename.length - 3) + "{\n",
          jsonObj = style.default();
        for (var key in jsonObj) {
          // if (key == "customStackAlign") customCSSChecker = jsonObj[key];
          // else
          code += key + ":" + jsonObj[key] + ";\n";
        }
        code += "}";
        // if (customCSSChecker) {
        //   stackDivs.push({
        //     id: filename.substring(0, filename.length - 3),
        //     data: customCSSChecker,
        //   });
        // }
        fs.writeFileSync(
          path.join(
            filepath,
            "build/",
            filename.substring(0, filename.length - 3) + ".css"
          ),
          code
        );
      })
    );

    return filenamesArray;
  } catch (e) {
    console.error(e);
  }
}

// function parseStackLayoutY_Align(htmlString, idArray) {
//   idArray.forEach((item) => {
//     const regex = new RegExp(`<div\\s+id="${item.id}"[^>]*>`, "i");
//     const match = htmlString.match(regex);

//     if (match) {
//       const insertIndex = match.index + match[0].length;
//       const divToInsert =
//         '<div style="height:' +
//         item.data +
//         ';width:100%;background:transparent"></div>';
//       htmlString =
//         htmlString.slice(0, insertIndex) +
//         divToInsert +
//         htmlString.slice(insertIndex);
//     }
//   });

//   return htmlString;
// }

const Load = (htmlString, filepath) => {
  createOrCleanBuildFolder(filepath);
  const filePath = filepath + "\\build\\page.html";

  convertFilesToCSS(filepath).then((ret) => {
    var code = "<html><head>";
    for (var i = 0; i < ret.length; i++) {
      code += ret[i] + "\n";
    }
    code += "</head>";
    code += "<body>" + htmlString + "</body></html>";
    // console.log(stackDivs);
    // code = parseStackLayoutY_Align(code, stackDivs);
    saveStringToFile(code, filePath);
  });
};

export default Load;
