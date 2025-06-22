import os
import sys

def create_symlink(course_dir):
    """Creates a symbolic link in the current directory to the course directory."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    link_name = os.path.basename(course_dir)
    link_path = os.path.join(script_dir, link_name)

    if os.path.lexists(link_path):
        print(f"Link '{link_path}' already exists. Skipping.")
        return

    try:
        os.symlink(course_dir, link_path)
        print(f"Successfully created symbolic link: '{link_path}' -> '{course_dir}'")
    except OSError as e:
        print(f"Error creating symbolic link: {e}")
        print("On Windows, you may need to run this script as an administrator.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def main():
    print("--- Symbolic Link Setup ---")
    if len(sys.argv) > 1:
        course_directory = sys.argv[1]
        print(f"Using provided directory: {course_directory}")
    else:
        course_directory = input("Please enter the full path to your main video course directory: ")

    if not os.path.isdir(course_directory):
        print(f"Error: The directory '{course_directory}' does not exist.")
        return
        
    create_symlink(course_directory)
    
    print("\nSetup complete. Now, please re-run the scanner:")
    print(f"python scanner.py \"{course_directory}\"")


if __name__ == '__main__':
    main()
