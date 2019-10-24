<template>
  <div class="container">
    <el-row class="tac">
      <el-col class="side">
        <el-menu
          :default-active="`${menuIndex}`"
          @select="selectMenu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item> -->
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">Setting</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="main">
        <transition name="fade" mode="out-in">
          <component :is="mainComp" :key="menuIndex"></component>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import {
//   Socket_Connecting,
//   Socket_Connected,
//   Rclone_Status_Checking,
//   Rclone_Status_Stopped,
//   Rclone_Status_Running
// } from "../utils/const";
// import { MessageType_RcloneStatus } from "../utils/messageTypes";
import dashboard from "../components/dashboard";
import setting from "../components/setting";
export default {
  data() {
    return {
      menuIndex: 1
    };
  },
  components: {
    dashboard,
    setting
  },
  computed: {
    mainComp() {
      return this.menuIndex == 1 ? dashboard : setting;
    }
  },
  methods: {
    init() {
      fetch(`${location.href}rc_api/core/stats`, {
        method: "POST", // or 'PUT
      });
    },
    selectMenu(index) {
      this.menuIndex = index;
    },
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* min-height: 100vh; */
  /* padding: 20px; */
  /* box-shadow: 0 0 8px 8px #ccc; */
}
.container .tac {
  height: 100%;
  display: flex;
}
.container .tac .side {
  flex: 0 0 200px;
}
.side .el-menu {
  height: 100%;
}
</style>
