Title: Microsoft Office 365 in the Command Line
Date: 2013-08-12
Category: Blog
Tags: SMTP, IMAP, mutt, Technical
Author: Alexander Brown

So Aberystwyth University recently made the change from a simple webmail-based email server (I believe it was running SquirrelMail, but I cannot say for certain) to the proprietary monolith that is Microsoft Office 365.

![Hipster muttrc example](/images/mutt.png)

Naturally, being a geek and all, a WUI-based wasn’t really for me, I much prefer the command line environment. mutt is a great command line email client for which there are plenty of guides. However Office 365’s setup was a little finiky.

The main problem was IMAP; for some reason Office 365 didn’t like being IMAP being contacted every 60 seconds for email, ending in authentication errors which mutt never really recovered from in a session. The only way around this was to use POP instead.

However this leads to problems with the sent items, drafts, and all folders except the inbox, therefore IMAP is really the only acceptable solution; I’ll have to watch over it and see how it performs with some of the post-POP changes I made to the configuration.

Now for the meat of this whole post, the actual muttrc file I personally use (with personal information removed):


    ::bash
    # Connection
    set ssl_starttls=yes
    set ssl_force_tls=yes
    set ssl_use_sslv3=yes
    set timeout=60  #Check for mail every minute
    set mail_check=5
    
    # Outgoing
    set realname="<Real Name>"
    set from="<user>"
    set smtp_pass="<pass>"
    #
    set smtp_authenticators="login"
    set smtp_url="smtp://<user>@smtp.office365.com:587"
    
    # Incoming
    # set pop_user="<user>"
    # set pop_pass="<pass>"
    set imap_user="<user>"
    set imap_pass="<pass>"
    #
    set folder="imaps://outlook.office365.com:993"
    set mbox="+INBOX"
    set postponed="+Drafts"
    set spoolfile="+INBOX"
    set record="+Sent Items"
    set trash="+Deleted Items"
    set imap_check_subscribed
    unset imap_passive
    
    # Caches
    set header_cache=~/.mutt/cache/headers
    set message_cachedir=~/.mutt/cache/bodies
    set certificate_file=~/.mutt/certificates
    
    # Useful customizations
    set smart_wrap = yes
    set sort = 'threads'
    set sort_aux = 'last-date-received'
    set imap_check_subscribed
    #
    ignore "Authentication-Results:"
    ignore "DomainKey-Signature:"
    ignore "DKIM-Signature:"
    hdr_order Date From To Cc
    #
    
    mailboxes
    
    # Editor Information
    set editor=vim


Now, there are a few things that need doing to the above configuration file, replace <user> with your username (e.g.: xxx0@aber.ac.uk), <pass> with your password (there are ways of doing this without having your password plaintext. However, as this should be a local config file to your system, you should really set up the permissions such that no one can ever read it and thus your password will be safe anyway). I’ve used the basic outlook.office365.com and smtp.office365.com as the hosts. Yours might be different; you can check this easily through the email settings account page and the option: Settings for POP or IMAP access.
