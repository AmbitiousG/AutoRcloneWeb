<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <div class="rclone-status">
          <span class="rclone-status-dot"><span class="dot" :class="rcloneClass"></span></span>
          <span class="rclone-status-txt">{{rcloneStatus}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  Socket_Connecting,
  Socket_Connected,
  Rclone_Status_Checking,
  Rclone_Status_Stopped,
  Rclone_Status_Running
} from "../utils/const";
import { MessageType_RcloneStatus } from "../utils/messageTypes";
export default {
  data() {
    return {
      status: Rclone_Status_Checking
    };
  },
  components: {},
  computed: {
    rcloneStopped() {
      return this.status == Rclone_Status_Stopped;
    },
    rcloneClass() {
      if (this.status == Rclone_Status_Checking) return "gray";
      return this.rcloneStopped ? "red" : "green";
    },
    rcloneStatus() {
      if (this.status == Rclone_Status_Checking) return "Checking Rclone Status...";
      return this.rcloneStopped
        ? "No rclone --rc tasks running"
        : "Rclone running";
    }
  },
  methods: {
    check() {
      this.$sockets.socket.send("ls");
    },
    updateRcloneStatus({ running, data }) {
      this.status = running ? Rclone_Status_Running : Rclone_Status_Stopped;
      console.log(data);
    }
  },
  mounted() {
    const socket = io("localhost:3000");
    this.$sockets.init(socket);
    this.$sockets.socket.on("message", ({ type, payload }) => {
      switch (type) {
        case MessageType_RcloneStatus:
          this.updateRcloneStatus(payload);
          break;
        default:
          break;
      }
    });
  }
};
</script>

<style>
.container {
  width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  box-shadow: 0 0 8px 8px #ccc;
}
.rclone-status {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.rclone-status-dot {
  flex: 0 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rclone-status-dot .dot {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: gray;
}
.rclone-status-dot .dot.red {
  background-color: #c50000;
}
.rclone-status-dot .dot.green {
  background-color: green;
}
.rclone-status-txt {
  flex: 1 1 100%;
}
</style>
