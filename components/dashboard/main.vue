<template>
  <div>
    <div>dashboard</div>
    <div class="test">
      <el-input v-model="command"></el-input>
      <el-button @click="checkPostEvt">check post</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      command: ""
    };
  },
  methods: {
    checkPostEvt() {
      this.$api.post(this.command);
    }
  }
};
</script>

<style>
.test {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.test .el-input {
  margin-right: 10px;
}
</style>