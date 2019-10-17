<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <el-button @click="check">Test</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  methods: {
    check() {
      this.$sockets.socket.send("ls");
    }
  },
  mounted() {
    const socket = io("localhost:3000");
    this.$sockets.init(socket);
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
