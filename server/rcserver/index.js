const spawn = require("child_process").spawn;
let server = null;

module.exports = {
  start_rclone: () => {
    server = spawn("rclone", ["rcd"]);
    console.log(`rclone server started`);
    server.on("close", () => {
      console.log(`rclone server closed`);
    });
  },
  stop_rclone: () => {
    server.kill();
  }
}

