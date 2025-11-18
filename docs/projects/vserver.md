# First DevSecOps Project: Secure V-Server Setup

This repository documents my very first DevSecOps project, completed during my training with the Developer Akademie.  
The project involved setting up and securing a virtual server (V-Server) and hosting a simple alternative website using **Nginx**.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Server Information](#server-information)
3. [Steps and Implementation](#steps-and-implementation)
    - [1. SSH Key Authentication Setup](#1-ssh-key-authentication-setup)
    - [2. Nginx Installation and Alternative Website Hosting](#2-nginx-installation-and-alternative-website-hosting)
4. [Conclusion](#conclusion)

---

## Project Overview
The goal of this project was to:
- Set up a secure remote connection to the server using **SSH keys**.
- Disable password authentication to reduce brute-force attack risks.
- Install and configure **Nginx** to host a basic alternative website on a non-standard port.

---

## Server Information
- **IP Address:** `Hidden`
- **Operating System:** Ubuntu Server
- **Web Server:** Nginx

---

## Steps and Implementation

### 1. SSH Key Authentication Setup
1. **Generate an SSH key pair (ED25519 format):**
   ```bash
   ssh-keygen -t ed25519
2. **Copy the public key to the server:**
   ```bash
   ssh-copy-id -i ed25519KEY.pub USER@IP-Address
3. **Test SSH key login:**
   ```bash
   ssh -i ./SSHKEY USER@IP-Address
4. **Disable password authentication for increased security:**
   ```bash
   sudo nano /etc/ssh/sshd_config # Set PasswordAuthentication=no
5. **Restart SSH service to apply changes:**
   ```bash
   sudo systemctl restart ssh.service
6. **Verify that password login is disabled:**
   ```bash
   ssh -o PubKeyAuthentication=no -i ./SSHKEY USER@IP-Address # Expected: authentication failure

### 2. Nginx Installation and Alternative Website Hosting
1. **Update and upgrade the system:**
   ```bash
   sudo apt update && sudo apt upgrade -y
2. **Install Nginx:**
   ```bash
   sudo apt install nginx -y
3. **Check Nginx status:**
   ```bash
   systemctl status nginx.service
4. **Create a directory for the alternative website:**
   ```bash
   sudo mkdir /var/www/alternatives
5. **Create the HTML file:**
   ```bash
   sudo touch /var/www/alternatives/alternate-index.html
6. **Configure Nginx to serve the alternative site on port 8081:**
   ```bash
   sudo nano /etc/nginx/sites-enabled/alternatives
7. **Config**
   ```bash
       server {
        listen 8081;
        listen [::]:8081;

        root /var/www/alternatives;
        index alternate-index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
8. **Edit the HTML content:**
   ```bash
   sudo nano /var/www/alternatives/alternate-index.html
10. **Config**
    ```bash
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Hello, Nginx!</title>
    </head>
    <body>
        <h1>Hello, Nginx!</h1>
        <p>I have just configured Nginx web server on Ubuntu server!</p>
    </body>
    </html>
11. **Restart Nginx:*
    ```bash
    sudo service nginx restart
## Conclusion
This project marks the starting point of my DevSecOps journey.
I successfully:
- Secured remote access to my server.
- Installed and configured Nginx.
- Deployed a simple alternative website on a custom port.

This foundation will serve as the basis for more complex infrastructure and security projects in the future.
   
