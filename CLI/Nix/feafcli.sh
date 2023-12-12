#!/bin/bash

# Function to create project structure
function create_project {
    # Create directory structure
    mkdir -p "src/Designs"
    mkdir -p "src/Components"

    # Create files
    touch "index.js"
    touch "src/App.js"

    app_code=$(cat << 'EOL'
import { Component } from "feaf";

const App = () => {
  var obj = new Component("app");
  return obj.render("FEAF");
};

export default App;
EOL
)

    index_code=$(cat << 'EOL'
import Load from "feaf/Renderer/index.js";
import App from "./src/App.js";

Load(App(), process.cwd());
EOL
)

    app_filepath="src/App.js"
    echo "$app_code" > "$app_filepath"

    index_filepath="index.js"
    echo "$index_code" > "$index_filepath"

    echo "Project created successfully!"
}

# Function to create component structure
function create_component {
    component_name="$1"

    # Create component directory structure
    mkdir -p "src/Components/$component_name/Functions"

    # Create component files
    touch "src/Components/$component_name/$component_name.js"
    touch "src/Components/$component_name/Functions/functions.js"
    touch "src/Components/$component_name/Functions/index.js"

    component_code=$(cat << EOL
import { Elements, Component } from "feaf";

const $component_name = () => {
    var obj = new Component("$component_name");
    return obj.render("FEAF");
}

export default $component_name;
EOL
)

    component_path="src/Components/$component_name"
    echo "$component_code" > "$component_path/$component_name.js"

    echo "Component '$component_name' created successfully!"
}

# Clear console
clear

# Display message
echo "Welcome to FEAF CLI :)"

# Infinite loop
while true; do
    # Prompt for user input
    read -p ">" user_input

    # Process user input
    case "$user_input" in
        "create project")
            create_project
            ;;
        "create component "*)
            component_name=${user_input##* }
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
