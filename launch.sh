#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Port for the server
PORT=8000

# Check if a server is already running on the port
if ! lsof -i :$PORT > /dev/null; then
    echo "Starting server..."
    # Start the python server in the background
    python -m http.server -d "$SCRIPT_DIR" $PORT &
    # Store the process ID
    SERVER_PID=$!
    # Create a file to store the PID
    echo $SERVER_PID > "$SCRIPT_DIR/.server.pid"
else
    echo "Server is already running."
fi

# Open the application in the default browser
xdg-open http://localhost:$PORT

# Optional: A simple way to kill the server when the user is done
# This part is tricky without a more complex application structure.
# The server will keep running until the system is shut down or it's killed manually.
# To kill it, one can run: kill $(cat video-bookmarker/.server.pid)
