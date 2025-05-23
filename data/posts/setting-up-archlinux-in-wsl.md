---
title: Setting up Arch Linux in WSL
description: Installing and getting Arch Linux in WSL is much easier than you might think
publishedDate: 2025-05-10
tags: 
    - linux
    - wsl
    - windows
---

Setting up Arch Linux in wsl is way easier than it used to be as it is now available as a official distro provided.   
   
## Installing Arch Linux   
Its simple just one command   
```bash  
wsl --install archlinux
``` 
 
## Post install steps   
Arch Linux is available to use but its just a base bones install. There is no users, no sudo installed, etc.   

First lets create a user:   
```bash
useradd -m -G wheel username
```

Then add password to the new user you created:   
```bash
passwd username
```

Then add the password for the root account:   
```bash
passwd root
```

The first user is created and added to the wheel group, but we need to add the wheel group to run the sudo command:   
1. Install sudo using pacman.   
    ```bash
    pacman -Sy sudo
    ```
2. Open the `etc/sudoers` file in your editor of choice, here I am using vim as a exmaple.   
    ```bash
    vim /etc/sudoers
    ```
3. Find the line  `%wheel ALL=(ALL:ALL) ALL` which should be present on line number 127 but it may vary and uncomment it.    
   
   
After creating and setting up the new user, you need to make the user as the default user for arch:   
1. Open `etc/wsl.conf` in the editor of choice, here I am again using vim as a exmaple.   
    ```bash
    vim /etc/wsl.conf
    ```
2. Paste this in the file.   
    ```bash
    [user]
    default=username
    ```
   
   
The `username`  here should be replaced with your username   
   
Now that's it! Restart wsl or your computer and Arch Linux is ready to be used.   
