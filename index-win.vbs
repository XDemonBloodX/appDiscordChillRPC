Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c index-win.exe"
oShell.Run strArgs, 0, false