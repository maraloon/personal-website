Lot of time I prefered laptops to any other form-factors to use for work and life. I'm fan of Apple so MacBook Pro is my workstation. I used it as a normal laptop but after bying my first mechanical keyboard I get that I can't stand native MacBook keyboard. So my workflow looked like this:

IMG

It was not so perfect cause 13'inch monitor is long to my eyes. So after buying iPad I tryed Sidecar - apple technology to connect iPad as seccond display. I don't like use more than one monitor, so when I detect that I can set iPad as main monitor I did it and close my MacBook (it doesn't go sleep in this mode). So now my workflow looked this:

IMG on table
or that
IMG on bed

Sidecar is a perfect technology, but still don't ideal. Connection via WiFi not so stable as via USB and sometimes, not often, connection lost. So I need to go to table, open MacBook and reconnect.

Also I'm trying to use only keyboard and not distract to mouse/trackpad as it possible. So I research web if I can write AppleScript and attach it to console command and to alfred workflow.

First what I understand, this scripts are not stable and can break (and do it!) after mac os update. But I found worked [script](https://github.com/TonyWu20/Sidecar-toggle-alfredworkflow) for Montery. So i can run osascript path/to/script.scpt and it will connect my iPad's display. Fucking magic!

But I found a solution of disconnecting problem. [Write shortcut](https://finn.lesueur.nz/posts/initiate-sidecar-from-ios/) to run in iPad that connect by SSH for your Mac and run this shell command. So now I can stay my MacBook always closed and active (I use [Amphetamine](https://apps.apple.com/us/app/amphetamine)) and for now no reason to flounce between Mac and iPad. Now it's work as it must - you connect device via this device. Perfect!

> Don't forget to enable incomming ssh connections in System Preserences > Sharing > Remote Login.
