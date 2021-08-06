const { SystemApi } = require("./dist");
const system = new SystemApi();

system.getHealth().then(r => {
    console.log(r.data);
});
system.getCurrentOnlineUsers().then(r => {
    console.log(`Current online users: ${r.data}`);
});
