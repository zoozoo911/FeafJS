# Function to create project structure
function Create-Project {
    # Create directory structure
    New-Item -ItemType Directory -Path "src\Designs" -Force | Out-Null
    New-Item -ItemType Directory -Path "src\Components" -Force | Out-Null

    # Create files
    New-Item -ItemType File -Path "src\index.js" -Force | Out-Null
    Write-Host "Project created successfully!"
}

# Function to create component structure
function Create-Component {
    param (
        [string]$ComponentName
    )

    # Create component directory structure
    New-Item -ItemType Directory -Path "src\Components\$ComponentName\Functions" -Force | Out-Null

    # Create component files
    New-Item -ItemType File -Path "src\Components\$ComponentName\$ComponentName.js" -Force | Out-Null
    New-Item -ItemType File -Path "src\Components\$ComponentName\Functions\functions.js" -Force | Out-Null
    New-Item -ItemType File -Path "src\Components\$ComponentName\Functions\index.js" -Force | Out-Null

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
            Create-Project
        }
        "create component *" {
            $componentName = $userInput -replace "create component ",""
            Create-Component -ComponentName $componentName
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
