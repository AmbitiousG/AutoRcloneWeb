const spawn = require("child_process").spawn;
const config = require("config");
let server = null;

module.exports = {
  start_rclone: () => {
    server = spawn("rclone", [
      "rcd", `--rc-user=${config.get("user")}`,
      `--rc-pass=${config.get("pass")}`,
      "--rc-baseurl=\/rc_api",
      `--rc-addr=127.0.0.1:${config.get("rclone_port")}`]);
    console.log(`rclone server started`);
    server.on("close", () => {
      console.log(`rclone server closed`);
    });
  },
  stop_rclone: () => {
    server.kill();
  }
}

