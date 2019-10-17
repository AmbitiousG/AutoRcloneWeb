const { spawn } = require('child_process');


module.exports = {
  timer: null,
  listenStatus(callback) {
    this.timer = setInterval(() => {
      const rclone = spawn("rclone", ["rc", "core/stats"]);
      rclone.stdout.on("data", data => {
        callback({
          type: "success",
          data: JSON.parse(`${data}`)
        });
      });
      rclone.stderr.on("data", data => {
        callback({
          type: "fail",
          data: `${data}`
        });
      });
    }, 1000)
  },
  resetListen() {
    clearInterval(this.timer);
  }
}