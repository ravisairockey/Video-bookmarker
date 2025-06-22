import os
import json
import sys

def scan_videos(root_dir):
    video_files = []
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.mp4'):
                full_path = os.path.join(dirpath, filename)
                # Path should be relative to the symlinked course directory
                course_root_name = os.path.basename(root_dir)
                path_inside_course = os.path.relpath(full_path, root_dir)
                relative_path = os.path.join(course_root_name, path_inside_course)
                
                # Clean up the title and get the course name
                title = os.path.splitext(filename)[0]
                course = os.path.basename(os.path.dirname(full_path))

                video_files.append({
                    'title': title,
                    'path': relative_path,
                    'course': course
                })
    return sorted(video_files, key=lambda x: (x['course'], x['title']))

def main():
    print("--- Video Course Scanner ---")
    
    # Check if a path is provided as a command-line argument
    if len(sys.argv) > 1:
        root_directory = sys.argv[1]
        print(f"Using provided directory: {root_directory}")
    else:
        # Prompt the user for the directory
        root_directory = input("Please enter the full path to your main video course directory: ")

    if not os.path.isdir(root_directory):
        print(f"Error: The directory '{root_directory}' does not exist.")
        return

    print(f"Scanning for .mp4 files in '{root_directory}'...")
    videos = scan_videos(root_directory)

    if not videos:
        print("No .mp4 files found.")
        return

    # The output file will be in the same directory as the script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_path = os.path.join(script_dir, 'videos.js')
    
    js_content = f"const videos = {json.dumps(videos, indent=4)};"

    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"\nSuccess! Scanned {len(videos)} videos.")
        print(f"Video list has been saved to '{output_path}'")
        print("\nNext steps:")
        print(f"1. Open the 'index.html' file in this directory in your web browser.")
        print(f"2. Your browser may need permission to access local files. You might see a security warning.")
        print(f"3. If videos don't play, you may need to run a simple local server.")
        print(f"   - Open a terminal in this directory and run: python -m http.server")
        print(f"   - Then open http://localhost:8000 in your browser.")

    except IOError as e:
        print(f"Error writing to file: {e}")

if __name__ == '__main__':
    main()
