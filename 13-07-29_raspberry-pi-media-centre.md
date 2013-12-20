Title: Raspberry Pi Media Centre
Date: 2013-07-29
Category: Blog
Tags: Raspberry Pi, RaspBMC, XBian, OpenElec, Technical
Author: Alexander Brown

Like many others, I bought a Raspberry Pi with then intention of using it as a 
media centre. Last year my flatmate had a nice micro-server which we used to 
play and stream media around the flat. It was a really nice setup; running 
XBMC, UPnP and some other services. Since leaving the flat for the summer I 
obviously felt like having a similar setup, albiet with a Raspberry Pi instead 
of a micro-server.

There are three notable flavours of XBMC for the Pi around:

1. RaspBMC
2. XBian
3. OpenElec

Initially I installed RaspBMC, but was reccomended both XBian and OpenElec, so 
decided to try all three out before settling.

XBian seemed the most polished with a neat curses interface, but the options 
for real system configuration were limited; beyond any of the packages 
available for install via the curses interface there were few packages 
available for install via the package manager. I have a few favoured tools, 
htop for example, which would have been an annoyance to build and install 
manually, especially knowing that RaspBMC had these in its aptitude 
repositories. I’d moved for performance more than anything else, and that was 
marginal at best.

Unfortunately, it was a similar story with OpenElec, though lacking the curses 
interface. I switched back to RaspBMC and set things up even nicer than before.
The slightly newer version seemed more stable and only really goes down due to
power issues.

So all in all I’d reccomend RaspBMC over the other flavours. It seems a lot 
nicer both as a technical user and a regular user and just has that added 
support which makes it that little bit easier to work with.

