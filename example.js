const VRChatApi = require("./dist");
const SystemApi = new VRChatApi.SystemApi();

SystemApi.getCurrentOnlineUsers().then(resp => {
    console.log(`Current Online Users: ${resp.data}`);
});