const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        state: "Playing Solo",
        details: "Play coding",
        largeImageKey: "512x512",
        largeImageText: "Chill",
        smallImageKey: "512x512_green",
        smallImageText: "Online"
    });
    //console.log("Rich presence is now active");
});

rpc.login({
    clientId: "752812712165376083"
})