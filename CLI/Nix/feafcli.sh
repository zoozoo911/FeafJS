#!/bin/bash

# Function to create project structure
create_project() {
    # Create directory structure
    mkdir -p "src/Designs"
    mkdir -p "src/Components"

    # Create files
    touch "src/index.js"
    echo "Project created successfully!"
}

# Function to create component structure
create_component() {
    local component_name="$1"

    # Create component directory structure
    mkdir -p "src/Components/$component_name/Functions"

    # Create component files
    touch "src/Components/$component_name/$component_name.js"
    touch "src/Components/$component_name/Functions/functions.js"
    touch "src/Components/$component_name/Functions/index.js"

    echo "Component '$component_name' created successfully!"
}

# Clear console
clear

# Display message
echo "Welcome to FEAF CLI :)"

# Infinite loop
while true; do
    # Prompt for user input
    read -p "> " user_input

    # Process user input
    case "$user_input" in
        "create project")
            create_project
            ;;
        "create component "*)
            component_name="${user_input#create component }"
            create_component "$component_name"
            ;;
        "exit")
            echo "Closed FEAF CLI!"
            exit
            ;;
        *)
            echo "Invalid input. Try again or type 'exit' to exit."
            ;;
    esac
done
