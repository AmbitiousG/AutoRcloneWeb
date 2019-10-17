const { spawn } = require('child_process');
const rclone = require("./rclone");
const {MessageType_RcloneStatus} = require("../utils/messageTypes");
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on( 'data', data => {
//     console.log( `stdout: ${data}` );
// } );

// ls.stderr.on( 'data', data => {
//     console.log( `stderr: ${data}` );
// } );

// ls.on( 'close', code => {
//     console.log( `child process exited with code ${code}` );
// } );

let connectedSockets = [];

module.exports = (io) => {
  rclone.listenStatus(({type, data}) => {
    // console.log({type, data});
    connectedSockets.forEach(socket => {
      socket.send({
        type: MessageType_RcloneStatus,
        payload: {
          running: type == "success",
          data
        }
      });
    });
  });
  io.on("connection", socket => {
    console.log("connected", socket.id);
    connectedSockets.push(socket);
    socket.on("message", data => {
      if (data == "ls") {
        const ls = spawn('ls', ['-lh', '/usr']);
        ls.stdout.on("data", data => {
          socket.send(`${data}`);
        });
        ls.stderr.on("data", data => {
          socket.send(`${data}`);
        });
        ls.on("close", code => {
          socket.send(`child process exited with code ${code}`);
        })
      }
    });
    socket.on("disconnect", reason => {
      console.log("disconnected", socket.id);
      connectedSockets = connectedSockets.filter(s => s.id != socket.id);
    })

  });

  io.on("disconnect", () => { });
}