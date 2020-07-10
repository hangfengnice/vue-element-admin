<template>
  <div class="head-g">
    <div class="head box">
      <div class="head-l">
        <img class="logo" src="@/assets/h-logo.png" alt="">
      <!-- <img class="logo-i" src="" alt="" /> -->
      <!-- <h3 class="title">运维支撑管理平台</h3> -->
      </div>
      <el-input
        v-model="input"
        class="input"
        prefix-icon="el-icon-search"
        clearable
        placeholder="搜索"
      />
      <div class="head-r">
        <img class="avatar" src="@/assets/avatar.jpeg" alt="">
        <i class="el-icon-message-solid icons" />
        <i class="el-icon-chat-dot-square icons" />
        <el-dropdown class="icons">
          <span>
            <i class="el-icon-s-tools cf" />

            <i class="el-icon-caret-bottom cf" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/profile/index">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native.stop="logout">log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i class="el-icon-chat-line-square icons" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-g {
  background: url('~@/assets/head-b.png');
}
.head {
  display: flex;
  align-items: center;
}
.head-l {
  display: flex;
}
.logo {
  // width: 106px;
  // height: 32px;
}
.title {
  font-size: 24px;
  color: #3485ca;
  margin-left: 10px;
}
.input {
  margin-left: auto;
  width: 300px;
}
/deep/ .el-input__inner,
/deep/ .el-input__icon,
/deep/ .el-input__suffix {
  height: 32px;
  line-height: 32px;
  color: #fff;
}
/deep/ .el-input__inner {
  border-radius: 16px;
  border-color: #fff;
  background-color: transparent;
}
/deep/ .el-input__inner:focus,
/deep/ .el-input__inner:hover {
  border-color: #fff;
}
/deep/ .el-input__inner::placeholder {
  color: #fff;
}
.head-r {
  display: flex;
  align-items: center;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 20px;
}
.icons {
  margin-left: 20px;
  color: #fff;
}
.el-icon-caret-bottom {
  font-size: 12px;
  margin-left: 2px;
  vertical-align: 1px;
}
</style>
