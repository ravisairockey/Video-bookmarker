const videos = [
    {
        "title": "001 Course Outline",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/01 - Introduction/001 Course Outline.mp4",
        "course": "01 - Introduction"
    },
    {
        "title": "002 Join Our Online Classroom!",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/01 - Introduction/002 Join Our Online Classroom!.mp4",
        "course": "01 - Introduction"
    },
    {
        "title": "004 What Is Ethical Hacking",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/01 - Introduction/004 What Is Ethical Hacking.mp4",
        "course": "01 - Introduction"
    },
    {
        "title": "006 ZTM Resources",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/01 - Introduction/006 ZTM Resources.mp4",
        "course": "01 - Introduction"
    },
    {
        "title": "001 What is A Virtual Machine",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/001 What is A Virtual Machine.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "002 Why Linux",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/002 Why Linux.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "004 Downloading Virtual Box & Kali Linux",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/004 Downloading Virtual Box & Kali Linux.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "006 Creating Our First Virtual Machine",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/006 Creating Our First Virtual Machine.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "008 Installing Kali Linux Operating System",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/008 Installing Kali Linux Operating System.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "009 Update 1 - New & Old Versions of Kali Linux",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/009 Update 1 - New & Old Versions of Kali Linux.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "011 Full Screen Mode & Network Settings",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/011 Full Screen Mode & Network Settings.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "012 Troubleshooting Network Connection in Kali Linux",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/012 Troubleshooting Network Connection in Kali Linux.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "014 5 Stages Of A Penetration Test",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/02 - Setting Up Our Hacking Lab/014 5 Stages Of A Penetration Test.mp4",
        "course": "02 - Setting Up Our Hacking Lab"
    },
    {
        "title": "001 Navigating Through Linux System",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/03 - Linux Operating System/001 Navigating Through Linux System.mp4",
        "course": "03 - Linux Operating System"
    },
    {
        "title": "002 Creating Files & Managing Directories",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/03 - Linux Operating System/002 Creating Files & Managing Directories.mp4",
        "course": "03 - Linux Operating System"
    },
    {
        "title": "003 Network Commands & Sudo Privileges In Kali",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/03 - Linux Operating System/003 Network Commands & Sudo Privileges In Kali.mp4",
        "course": "03 - Linux Operating System"
    },
    {
        "title": "001 What is Information Gathering",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/001 What is Information Gathering.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "002 Obtaining IP Address, Physical Address Using Whois Tool",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/002 Obtaining IP Address, Physical Address Using Whois Tool.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "003 Whatweb Stealthy Scan",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/003 Whatweb Stealthy Scan.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "004 Aggressive Website Technology Discovering on IP Range",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/004 Aggressive Website Technology Discovering on IP Range.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "006 Gathering Emails Using theHarvester & Hunter.io",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/006 Gathering Emails Using theHarvester & Hunter.io.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "007 How To Download Tools Online",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/007 How To Download Tools Online.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "008 Finding Usernames With Sherlock",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/008 Finding Usernames With Sherlock.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "009 Bonus - Email Scraper Tool In Python 3",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/04 - Reconnaissance & Information Gathering/009 Bonus - Email Scraper Tool In Python 3.mp4",
        "course": "04 - Reconnaissance & Information Gathering"
    },
    {
        "title": "001 Theory Behind Scanning",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/001 Theory Behind Scanning.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "002 TCP & UDP",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/002 TCP & UDP.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "004 Installing Vulnerable Virtual Machine",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/004 Installing Vulnerable Virtual Machine.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "005 Netdiscover",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/005 Netdiscover.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "006 Performing First Nmap Scan",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/006 Performing First Nmap Scan.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "007 Different Nmap Scan Types",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/007 Different Nmap Scan Types.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "009 Discovering Target Operating System",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/009 Discovering Target Operating System.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "010 Detecting Version Of Service Running On An Open Port",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/010 Detecting Version Of Service Running On An Open Port.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "011 Filtering Port Range & Output Of Scan Results",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/011 Filtering Port Range & Output Of Scan Results.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "012 What is a FirewallIDS",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/012 What is a FirewallIDS.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "013 Using Decoys and Packet Fragmentation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/013 Using Decoys and Packet Fragmentation.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "014 Security Evasion Nmap Options",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/05 - Scanning/014 Security Evasion Nmap Options.mp4",
        "course": "05 - Scanning"
    },
    {
        "title": "003 Coding a Portscanner in Python 3",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/06 - Python Coding Project #1 - Portscanner/003 Coding a Portscanner in Python 3.mp4",
        "course": "06 - Python Coding Project #1 - Portscanner"
    },
    {
        "title": "001 Finding First Vulnerability With Nmap Scripts",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/001 Finding First Vulnerability With Nmap Scripts.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "002 Manual Vulnerability Analysis & Searchsploit",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/002 Manual Vulnerability Analysis & Searchsploit.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "003 Nessus Installation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/003 Nessus Installation.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "004 Discovering Vulnerabilities With Nessus",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/004 Discovering Vulnerabilities With Nessus.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "005 Scanning Windows 7 Machine With Nessus",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/005 Scanning Windows 7 Machine With Nessus.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "006 Lets cool down for a bit!",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/07 - Vulnerability Analysis/006 Lets cool down for a bit!.mp4",
        "course": "07 - Vulnerability Analysis"
    },
    {
        "title": "001 What is Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/001 What is Exploitation.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "002 What is a Vulnerability",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/002 What is a Vulnerability.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "003 Reverse Shells, Bind Shells",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/003 Reverse Shells, Bind Shells.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "004 Metasploit Framework Structure",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/004 Metasploit Framework Structure.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "005 Msfconsole Basic Commands",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/005 Msfconsole Basic Commands.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "006 Our First Exploit - vsftp 2.3.4 Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/006 Our First Exploit - vsftp 2.3.4 Exploitation.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "007 Misconfigurations Happen - Bindshell Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/007 Misconfigurations Happen - Bindshell Exploitation.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "008 Information Disclosure - Telnet Exploit",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/008 Information Disclosure - Telnet Exploit.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "009 Software Vulnerability - Samba Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/009 Software Vulnerability - Samba Exploitation.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "010 Attacking SSH - Bruteforce Attack",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/010 Attacking SSH - Bruteforce Attack.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "011 Exploitation Challenge - 5 Different Exploits",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/011 Exploitation Challenge - 5 Different Exploits.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "012 Explaining Windows 7 Setup",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/012 Explaining Windows 7 Setup.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "013 Eternal Blue Attack - Windows 7 Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/013 Eternal Blue Attack - Windows 7 Exploitation.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "014 DoublePulsar Attack - Windows Exploit",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/014 DoublePulsar Attack - Windows Exploit.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "015 BlueKeep Vulnerability - Windows Exploit",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/015 BlueKeep Vulnerability - Windows Exploit.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "017 Update 2 - Routersploit",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/017 Update 2 - Routersploit.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "018 Update 3 - Router Default Credentials",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/018 Update 3 - Router Default Credentials.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "019 Exercise Imposter Syndrome",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/08 - Exploitation & Gaining Access/019 Exercise Imposter Syndrome.mp4",
        "course": "08 - Exploitation & Gaining Access"
    },
    {
        "title": "002 Setting Up Vulnerable Windows 10",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation/002 Setting Up Vulnerable Windows 10.mp4",
        "course": "09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation"
    },
    {
        "title": "003 Crashing Windows 10 Machine Remotely",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation/003 Crashing Windows 10 Machine Remotely.mp4",
        "course": "09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation"
    },
    {
        "title": "004 Exploiting Windows 10 Machine Remotely",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation/004 Exploiting Windows 10 Machine Remotely.mp4",
        "course": "09 - SMBGhost CVE 2020-0796 - Windows 10 Manual Exploitation"
    },
    {
        "title": "001 Generating Basic Payload With Msfvenom",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/001 Generating Basic Payload With Msfvenom.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "002 Advance Msfvenom Usage Part 1",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/002 Advance Msfvenom Usage Part 1.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "003 Advance Msfvenom Usage Part 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/003 Advance Msfvenom Usage Part 2.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "004 Generating Powershell Payload Using Veil",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/004 Generating Powershell Payload Using Veil.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "005 TheFatRat Payload Creation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/005 TheFatRat Payload Creation.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "007 Hexeditor & Antiviruses",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/007 Hexeditor & Antiviruses.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "008 Making Our Payload Open An Image",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/10 - Gaining Access (Viruses, Trojans, Payloads ...)/008 Making Our Payload Open An Image.mp4",
        "course": "10 - Gaining Access (Viruses, Trojans, Payloads ...)"
    },
    {
        "title": "001 Post Exploitation Theory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/001 Post Exploitation Theory.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "002 Meterpreter Basic Commands Part 1",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/002 Meterpreter Basic Commands Part 1.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "003 Meterpreter Basic Commands Part 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/003 Meterpreter Basic Commands Part 2.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "004 Elevating Privileges With Different Modules",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/004 Elevating Privileges With Different Modules.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "005 Creating Persistence On The Target System",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/005 Creating Persistence On The Target System.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "006 Post Exploitation Modules",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/006 Post Exploitation Modules.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "007 Exploitation Recap",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers/007 Exploitation Recap.mp4",
        "course": "11 - Post Exploitation - Elevating Privileges, Extracting Data, Running Keyloggers"
    },
    {
        "title": "001 What Are We Creating",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/001 What Are We Creating.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "002 Connecting Server And Backdoor",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/002 Connecting Server And Backdoor.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "003 Processing Instructional Commands",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/003 Processing Instructional Commands.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "004 Sending and Receiving Data",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/004 Sending and Receiving Data.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "005 Executing Commands And Compiling The Program",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/005 Executing Commands And Compiling The Program.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "006 Changing Directory Inside Of Our Backdoor",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/006 Changing Directory Inside Of Our Backdoor.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "007 Uploading & Downloading Files",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/007 Uploading & Downloading Files.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "008 Testing All The Commands",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/12 - Python Coding Project #2 - Backdoor/008 Testing All The Commands.mp4",
        "course": "12 - Python Coding Project #2 - Backdoor"
    },
    {
        "title": "001 Website Penetration Testing Theory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/001 Website Penetration Testing Theory.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "002 HTTP Request & Response",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/002 HTTP Request & Response.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "003 Information Gathering & Dirb Tool",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/003 Information Gathering & Dirb Tool.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "004 Burpsuite Configuration",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/004 Burpsuite Configuration.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "005 ShellShock Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/005 ShellShock Exploitation.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "006 Command Injection Exploitation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/006 Command Injection Exploitation.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "007 Getting Meterpreter Shell With Command Execution",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/007 Getting Meterpreter Shell With Command Execution.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "008 Reflected XSS & Cookie Stealing",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/008 Reflected XSS & Cookie Stealing.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "009 Stored XSS",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/009 Stored XSS.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "010 HTML Injection",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/010 HTML Injection.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "011 SQL Injection",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/011 SQL Injection.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "012 CSRF Vulnerability",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/012 CSRF Vulnerability.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "013 Hydra Bruteforce Attack Example 1",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/013 Hydra Bruteforce Attack Example 1.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "014 Hydra Bruteforce Attack Example 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/014 Hydra Bruteforce Attack Example 2.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "015 Burpsuite Intruder",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/13 - Website Application Penetration Testing/015 Burpsuite Intruder.mp4",
        "course": "13 - Website Application Penetration Testing"
    },
    {
        "title": "001 Creating 2 Programs",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery/001 Creating 2 Programs.mp4",
        "course": "14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery"
    },
    {
        "title": "002 Bruteforcer In Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery/002 Bruteforcer In Python.mp4",
        "course": "14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery"
    },
    {
        "title": "003 Hidden Directory Discovery",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery/003 Hidden Directory Discovery.mp4",
        "course": "14 - Python Coding Project #3 - Login Bruteforce, Directory Discovery"
    },
    {
        "title": "001 Theory - Man In The Middle Attack",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/15 - Man In The Middle - MITM/001 Theory - Man In The Middle Attack.mp4",
        "course": "15 - Man In The Middle - MITM"
    },
    {
        "title": "002 Bettercap ARP Spoofing",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/15 - Man In The Middle - MITM/002 Bettercap ARP Spoofing.mp4",
        "course": "15 - Man In The Middle - MITM"
    },
    {
        "title": "003 Ettercap Password Sniffing",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/15 - Man In The Middle - MITM/003 Ettercap Password Sniffing.mp4",
        "course": "15 - Man In The Middle - MITM"
    },
    {
        "title": "004 Manually Poisoning Targets ARP Cache With Scapy",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/15 - Man In The Middle - MITM/004 Manually Poisoning Targets ARP Cache With Scapy.mp4",
        "course": "15 - Man In The Middle - MITM"
    },
    {
        "title": "001 Wireless Cracking Theory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/16 - Extra Wireless Access Point Cracking/001 Wireless Cracking Theory.mp4",
        "course": "16 - Extra Wireless Access Point Cracking"
    },
    {
        "title": "002 Putting Wireless Card In Monitor Mode",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/16 - Extra Wireless Access Point Cracking/002 Putting Wireless Card In Monitor Mode.mp4",
        "course": "16 - Extra Wireless Access Point Cracking"
    },
    {
        "title": "003 Deauthenticating Devices & Grabbing Password",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/16 - Extra Wireless Access Point Cracking/003 Deauthenticating Devices & Grabbing Password.mp4",
        "course": "16 - Extra Wireless Access Point Cracking"
    },
    {
        "title": "004 Aircrack Password Cracking",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/16 - Extra Wireless Access Point Cracking/004 Aircrack Password Cracking.mp4",
        "course": "16 - Extra Wireless Access Point Cracking"
    },
    {
        "title": "005 Hashcat Password Cracking",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/16 - Extra Wireless Access Point Cracking/005 Hashcat Password Cracking.mp4",
        "course": "16 - Extra Wireless Access Point Cracking"
    },
    {
        "title": "001 Android Hacking Theory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/001 Android Hacking Theory.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "002 Android VM Install",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/002 Android VM Install.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "003 Gaining Access With Android Meterpreter",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/003 Gaining Access With Android Meterpreter.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "004 Evil Droid",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/004 Evil Droid.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "005 Is it Flappy Bird or Malware",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/005 Is it Flappy Bird or Malware.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "006 Hack Any Device On Any Network With Ngrok",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/17 - Extra Gaining Access To An Android Device/006 Hack Any Device On Any Network With Ngrok.mp4",
        "course": "17 - Extra Gaining Access To An Android Device"
    },
    {
        "title": "001 Anonymity Theory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/18 - Extra Introduction To Anonymity/001 Anonymity Theory.mp4",
        "course": "18 - Extra Introduction To Anonymity"
    },
    {
        "title": "002 Tor Browser",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/18 - Extra Introduction To Anonymity/002 Tor Browser.mp4",
        "course": "18 - Extra Introduction To Anonymity"
    },
    {
        "title": "003 Proxychains With Nmap",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/18 - Extra Introduction To Anonymity/003 Proxychains With Nmap.mp4",
        "course": "18 - Extra Introduction To Anonymity"
    },
    {
        "title": "004 Installing VPN in Kali Linux",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/18 - Extra Introduction To Anonymity/004 Installing VPN in Kali Linux.mp4",
        "course": "18 - Extra Introduction To Anonymity"
    },
    {
        "title": "005 WhoAmI Anonymity Tool",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/18 - Extra Introduction To Anonymity/005 WhoAmI Anonymity Tool.mp4",
        "course": "18 - Extra Introduction To Anonymity"
    },
    {
        "title": "001 Enumerating Active Directory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/19 - Extra Hacking Active Directory/001 Enumerating Active Directory.mp4",
        "course": "19 - Extra Hacking Active Directory"
    },
    {
        "title": "002 Exploiting Active Directory",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/19 - Extra Hacking Active Directory/002 Exploiting Active Directory.mp4",
        "course": "19 - Extra Hacking Active Directory"
    },
    {
        "title": "003 Escalating Privileges on the Domain",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/19 - Extra Hacking Active Directory/003 Escalating Privileges on the Domain.mp4",
        "course": "19 - Extra Hacking Active Directory"
    },
    {
        "title": "003 What is Next",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/20 - Where To Go From Here/003 What is Next.mp4",
        "course": "20 - Where To Go From Here"
    },
    {
        "title": "001 What Is A Programming Language",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/001 What Is A Programming Language.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "002 Python Interpreter",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/002 Python Interpreter.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "003 How To Run Python Code",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/003 How To Run Python Code.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "004 Latest Version Of Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/004 Latest Version Of Python.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "005 Our First Python Program",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/005 Our First Python Program.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "006 Python 2 vs Python 3",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/006 Python 2 vs Python 3.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "007 Exercise How Does Python Work",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/21 - Learn Python Basics/007 Exercise How Does Python Work.mp4",
        "course": "21 - Learn Python Basics"
    },
    {
        "title": "001 Learning Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/001 Learning Python.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "002 Python Data Types",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/002 Python Data Types.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "004 Numbers",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/004 Numbers.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "005 Math Functions",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/005 Math Functions.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "006 DEVELOPER FUNDAMENTALS I",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/006 DEVELOPER FUNDAMENTALS I.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "007 Operator Precedence",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/007 Operator Precedence.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "009 Optional bin() and complex",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/009 Optional bin() and complex.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "010 Variables",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/010 Variables.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "011 Expressions vs Statements",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/011 Expressions vs Statements.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "012 Augmented Assignment Operator",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/012 Augmented Assignment Operator.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "013 Strings",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/013 Strings.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "014 String Concatenation",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/014 String Concatenation.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "015 Type Conversion",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/015 Type Conversion.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "016 Escape Sequences",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/016 Escape Sequences.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "017 Formatted Strings",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/017 Formatted Strings.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "018 String Indexes",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/018 String Indexes.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "019 Immutability",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/019 Immutability.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "020 Built-In Functions + Methods",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/020 Built-In Functions + Methods.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "021 Booleans",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/021 Booleans.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "022 Exercise Type Conversion",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/022 Exercise Type Conversion.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "023 DEVELOPER FUNDAMENTALS II",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/023 DEVELOPER FUNDAMENTALS II.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "024 Exercise Password Checker",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/024 Exercise Password Checker.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "025 Lists",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/025 Lists.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "026 List Slicing",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/026 List Slicing.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "027 Matrix",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/027 Matrix.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "028 List Methods",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/028 List Methods.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "029 List Methods 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/029 List Methods 2.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "030 List Methods 3",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/030 List Methods 3.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "031 Common List Patterns",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/031 Common List Patterns.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "032 List Unpacking",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/032 List Unpacking.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "033 None",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/033 None.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "034 Dictionaries",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/034 Dictionaries.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "035 DEVELOPER FUNDAMENTALS III",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/035 DEVELOPER FUNDAMENTALS III.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "036 Dictionary Keys",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/036 Dictionary Keys.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "037 Dictionary Methods",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/037 Dictionary Methods.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "038 Dictionary Methods 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/038 Dictionary Methods 2.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "039 Tuples",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/039 Tuples.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "040 Tuples 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/040 Tuples 2.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "041 Sets",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/041 Sets.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "042 Sets 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/042 Sets 2.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "043 Breaking The Flow",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/043 Breaking The Flow.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "044 Conditional Logic",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/044 Conditional Logic.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "045 Indentation In Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/045 Indentation In Python.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "046 Truthy vs Falsey",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/046 Truthy vs Falsey.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "047 Ternary Operator",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/047 Ternary Operator.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "048 Short Circuiting",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/048 Short Circuiting.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "049 Logical Operators",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/049 Logical Operators.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "050 Exercise Logical Operators",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/050 Exercise Logical Operators.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "051 is vs ==",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/051 is vs ==.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "052 For Loops",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/052 For Loops.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "053 Iterables",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/053 Iterables.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "054 Exercise Tricky Counter",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/054 Exercise Tricky Counter.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "055 range()",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/055 range().mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "056 enumerate()",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/056 enumerate().mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "057 While Loops",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/057 While Loops.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "058 While Loops 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/058 While Loops 2.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "059 break, continue, pass",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/059 break, continue, pass.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "060 Our First GUI",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/060 Our First GUI.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "061 DEVELOPER FUNDAMENTALS IV",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/061 DEVELOPER FUNDAMENTALS IV.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "062 Exercise Find Duplicates",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/062 Exercise Find Duplicates.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "063 Functions",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/063 Functions.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "064 Parameters and Arguments",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/064 Parameters and Arguments.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "065 Default Parameters and Keyword Arguments",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/065 Default Parameters and Keyword Arguments.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "066 return",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/066 return.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "067 Methods vs Functions",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/067 Methods vs Functions.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "068 Docstrings",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/068 Docstrings.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "069 Clean Code",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/069 Clean Code.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "070 args and kwargs",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/070 args and kwargs.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "071 Exercise Functions",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/071 Exercise Functions.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "072 Scope",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/072 Scope.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "073 Scope Rules",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/073 Scope Rules.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "074 global Keyword",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/074 global Keyword.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "075 nonlocal Keyword",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/075 nonlocal Keyword.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "076 Why Do We Need Scope",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/076 Why Do We Need Scope.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "077 Modules in Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/077 Modules in Python.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "079 Optional PyCharm",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/079 Optional PyCharm.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "080 Packages in Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/080 Packages in Python.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "081 Different Ways To Import",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/22 - Learn Python Intermediate/081 Different Ways To Import.mp4",
        "course": "22 - Learn Python Intermediate"
    },
    {
        "title": "001 Errors in Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/23 - Learn Python 3 Error Handling/001 Errors in Python.mp4",
        "course": "23 - Learn Python 3 Error Handling"
    },
    {
        "title": "002 Error Handling",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/23 - Learn Python 3 Error Handling/002 Error Handling.mp4",
        "course": "23 - Learn Python 3 Error Handling"
    },
    {
        "title": "003 Error Handling 2",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/23 - Learn Python 3 Error Handling/003 Error Handling 2.mp4",
        "course": "23 - Learn Python 3 Error Handling"
    },
    {
        "title": "004 Exercises Error Handling",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/23 - Learn Python 3 Error Handling/004 Exercises Error Handling.mp4",
        "course": "23 - Learn Python 3 Error Handling"
    },
    {
        "title": "005 Error Handling 3",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/23 - Learn Python 3 Error Handling/005 Error Handling 3.mp4",
        "course": "23 - Learn Python 3 Error Handling"
    },
    {
        "title": "001 Working With Files In Python",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/24 - Learn Python 4 File IO/001 Working With Files In Python.mp4",
        "course": "24 - Learn Python 4 File IO"
    },
    {
        "title": "002 File Paths",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/24 - Learn Python 4 File IO/002 File Paths.mp4",
        "course": "24 - Learn Python 4 File IO"
    },
    {
        "title": "003 File IO Errors",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/24 - Learn Python 4 File IO/003 File IO Errors.mp4",
        "course": "24 - Learn Python 4 File IO"
    },
    {
        "title": "004 Read, Write, Append",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/24 - Learn Python 4 File IO/004 Read, Write, Append.mp4",
        "course": "24 - Learn Python 4 File IO"
    },
    {
        "title": "006 Exercise Translator",
        "path": "[FreeCourseSite.com] Udemy - Complete Ethical Hacking Bootcamp/24 - Learn Python 4 File IO/006 Exercise Translator.mp4",
        "course": "24 - Learn Python 4 File IO"
    }
];