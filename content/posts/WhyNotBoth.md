---
title: "Why Not Both?"
date: 2023-07-05T23:14:23-04:00
draft: false
tags: ["editors", "vim", "emacs"]
catagories: ["editors", "progress", "never finished"]
---

# How best to start editor hopping?
## IntelliJ & Android Studio
My first serious coding experience was in Android Studio for FIRST Tech Challenge.
When I started taking CS classes in college, that led in to using the free IntelliJ Ultimate licences for students during my Java heavy coursework.

## Visual Studio
I was required to use Visual Studio for several classes, as the C++ assignments were built around solution files.
I found the expreience less than enjoyable, and stopped using it as soon as possible.
It was a much better experience when working in C#, as the language support and tooling was much more tightly integrated.

## Visual Studio Code
Like most, when I needed a more lightweight and flexible editor on windows, I looked to VS Code.
The numerous, mostly decent extensions along with acceptable performance led to me being quiet happy with the general experience.
My favorite feature from VS Code is the Microsoft-supported [Remote Development extension pack](https://github.com/Microsoft/vscode-remote-release).
If you haven't used this extension and you do software development on more than one system, these tools are AMAZING!
In short, it allows you to connect through SSH, Docker, Tunnels, or WSL machines as if you were running directly on them.
My favorite feature is the one-click port fowarding, which allows me to avoid a lengthy SSH command when I just need to see a webpage with javascript enabled (When something like Lynx or eww won't do).


My only notable pain point was that as soon as someone hadn't written in language support, or a feature I wanted the curve to add it natively was rather high.

## Vi and Vim
When I started working in my [research lab](http://mil.ufl.edu), I needed to be able to edit text on the commandline and get more comfortable without using my tiny laptop arrow keys.
This was when I started learning more about linux and command line tooling and workflows in general.
I watched lots of content from channels like [Chris Titus](https://www.youtube.com/@ChrisTitusTech) and [DistroTube](https://www.youtube.com/@DistroTube) revolving around vim movement, command line tools, and linux in general.
When I started daily driving Ubuntu 18.04 (The distro needed to run the software for our robotic platforms), I made the jump to slowly, starting with the vim emulation plugin in VS Code, and using vim whenever I was in a terminal.

# Where am I now?
## Doom Emacs
Doom Emacs is now my go-to IDE and text editing environment on linux, both on the command line and GUI.
I'm too easily lost down rabbit holes to get far with customizing an editor from scratch, so I choose to let someone else do the groundwork, and extend from there!
Doom has a great balance of being easy to recreate my environment on many systems, while being well enough set up out of the box to just get to it.

## Neovim
Once I had a sense of what I cared about from an editor from using doom, I have started working on my own neovim config.
I have found the proecess to be much less stable-feeling than working on Doom or VS Code, with slightly weird-feeling behaviour from the plugin framework, and a general lack of understanding on my part of exactly why I'm doing what the readme's say to do.

I use neovim whenever I'm working directly on the CLI and need to edit a file quickly.
Any time an edit will be over more than a few minutes, I'll usually pop it up in Emacs.

## VS Code
What can I say?
It's a ubiqitous part of life nowadays, I always have it on my desktop and laptop systems, and it's always there when I need good enough at everything.
I mostly use it when I'm working on a remote system, having it connected via SSH to act as an easy and quick port forwarding server.