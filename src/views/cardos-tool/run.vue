<template>
  <div class="-g">
    <div class="run">运维工具执行</div>
    <el-form v-model="form" action="" :inline="true" label-width="100px">
      <div class="title">
        基本信息
      </div>
      <el-form-item label="工具编号">
        <el-input v-model="form.tid" clearable placeholder="工具编号" />
      </el-form-item>
      <el-form-item label="工具类型">
        <el-select v-model="form.type" placeholder="工具类型">
          <el-option label="类型一" value="shanghai" />
          <el-option label="类型二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="版本号">
        <el-input v-model="form.version" clearable placeholder="版本号" />
      </el-form-item>
      <el-form-item label="业务模块">
        <el-select v-model="form.bmodule" placeholder="业务模块">
          <el-option label="业务模块一" value="shanghai" />
          <el-option label="业务模块二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="工具名称">
        <el-input v-model="form.tname" clearable placeholder="工具名称" />
      </el-form-item>
      <el-form-item label="来源系统">
        <el-select v-model="form.ssys" placeholder="来源系统">
          <el-option label="来源系统一" value="shanghai" />
          <el-option label="来源系统二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="目标系统">
        <el-select v-model="form.tsys" placeholder="目标系统">
          <el-option label="目标系统一" value="shanghai" />
          <el-option label="目标系统二" value="beijing" />
        </el-select>
      </el-form-item>

      <div class="title">
        执行参数
      </div>

      <div v-for="(item, index) in paramsList" :key="item.type">
        <el-form-item :label="item.label">
          <el-input
            v-model="form[item.type]"
            clearable
            class="run-input"
            :placeholder="item.label"
          />
        </el-form-item>
        <span
          v-if="index == 0"
          class="danger"
        ><i class="el-icon-warning warn" /> 若涉及多个订单，请用逗号隔开</span>
      </div>
      <!-- <div>
        <el-form-item label="订单行号">
          <el-input v-model="form.oraw" clearable class="run-input" placeholder="订单行号" />
        </el-form-item>
      </div>
      <div />

      <div />

      <div />

      <el-form-item label="订单单价">
        <el-input v-model="form.oprice" clearable class="run-input" placeholder="订单单价" />
      </el-form-item>
      <el-form-item label="执行时间">
        <el-input v-model="form.otime" clearable class="run-input" placeholder="执行时间" />
      </el-form-item>
      <el-form-item label="执行周期">
        <el-input v-model="form.ocycle" clearable class="run-input" placeholder="执行周期" />
      </el-form-item> -->

      <div class="btns">
        <el-button
          :loading="loading"
          :disabled="loading"
          type="primary"
          @click="run"
        >提交运行</el-button>
        <el-button type="info">关闭</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paramsList: [
        {
          type: 'oid',
          label: '订单编号'
        },
        {
          type: 'oraw',
          label: '订单行号'
        },
        {
          type: 'oprice',
          label: '订单单价'
        },
        {
          type: 'otime',
          label: '执行时间'
        },
        {
          type: 'ocycle',
          label: '执行周期'
        }
      ],
      form: {
        tid: '',
        type: '',
        version: '',
        bmodule: '',
        tname: '',
        ssys: '',
        tsys: '',
        oid: '',
        oraw: '',
        oprice: '',
        otime: '',
        ocycle: ''
      },
      loading: false
    }
  },
  methods: {
    run() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style lang="scss">
.run {
  font-size: 16px;
  color: #333;
  padding-bottom: 14px;
  border-bottom: 1px solid #eee;
}
.btns {
  text-align: center;
}
.run-input {
  width: 280px;
}
</style>
