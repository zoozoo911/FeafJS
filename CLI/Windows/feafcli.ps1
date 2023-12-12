# Function to create project structure
function CreateProject {
    # Create directory structure
    New-Item -ItemType Directory -Path "src\Designs" -Force | Out-Null
    New-Item -ItemType Directory -Path "src\Components" -Force | Out-Null

    # Create files
    New-Item -ItemType File -Path "index.js" -Force | Out-Null
    New-Item -ItemType File -Path "src\App.js" -Force | Out-Null
    $appCode = 
        @"
import { Component } from "feaf";

const App = () => {
  var obj = new Component("app");
  return obj.render("FEAF");
};

export default App;
"@
    $indexCode = 
        @"
import Load from "feaf/Renderer/index.js";
import App from "./src/App.js";

Load(App(), process.cwd());
"@
    $appfilepath = "src\App.js"
    $appCode | Out-File -FilePath $appfilepath -Encoding UTF8
    $indexfilepath = "index.js"
    $indexCode | Out-File -FilePath $indexfilepath -Encoding UTF8
    Write-Host "Project created successfully!"
}
    

# Function to create component structure
function CreateComponent {
    param (
        [string]$ComponentName
    )

    # Create component directory structure
    New-Item -ItemType Directory -Path "src\Components\$ComponentName\Functions" -Force | Out-Null

    # Create component files
    New-Item -ItemType File -Path "src\Components\$ComponentName\$ComponentName.js" -Force | Out-Null
    New-Item -ItemType File -Path "src\Components\$ComponentName\Functions\functions.js" -Force | Out-Null
    New-Item -ItemType File -Path "src\Components\$ComponentName\Functions\index.js" -Force | Out-Null
    $ComponentCode = 
@"
import { Elements, Component } from "feaf";

const $ComponentName = () => {
    var obj = new Component("$ComponentName");
    return obj.render("FEAF");
}

export default $ComponentName;

"@
    $ComponentPath = "src\Components\$ComponentName\$ComponentName.js"
    $ComponentCode | Out-File -FilePath $ComponentPath -Encoding UTF8
    Write-Host "Component '$ComponentName' created successfully!"
}

# Clear console
Clear-Host

# Display message
Write-Host "Welcome to FEAF CLI :)"

# Infinite loop
while ($true) {
    # Prompt for user input
    $userInput = Read-Host -Prompt ">"

    # Process user input
    switch -Wildcard ($userInput.Trim()) {
        "create project" {
            CreateProject
        }
        "create component *" {
            $componentName = $userInput -replace "create component ", ""
            CreateComponent -ComponentName $componentName
        }
        "exit" {
            Write-Host "Closed FEAF CLI!"
            exit
        }
        default {
            Write-Host "Invalid input. Try again or type 'exit' to exit."
        }
    }
}
