<template>
  <div class="main-content">
    <div class="box">
      <el-container class="swiper">
        <!-- <img class="banner" src="@/assets/banner.png" alt=""> -->
        <my-section />
        <div width="200px" class="aside">
          <div class="panel">
            <h3>系统公告</h3>
            <ul>
              <li v-for="item in 4" :key="item" class="notice-li">
                加工费文化空间的三拜九叩说的不错
              </li>
            </ul>
          </div>

          <div class="panel">
            <h3>运营通知</h3>
            <ul>
              <li v-for="item in 4" :key="item" class="notice-li">
                加工费文化空间的三拜九叩说的不错
              </li>
            </ul>
          </div>
        </div>
      </el-container>
    </div>
    <div class="box tables">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部工具" name="first">
          <div v-for="item in 4" :key="item" class="all-tool">
            <img src="@/assets/avatar.jpeg" alt="" class="tool-i">
            <div class="tool-content">
              <div class="tool-h">
                <div>
                  <span class="tool-type">采购</span>
                  <span class="tool-desc">更新采购订单不含税单价</span>
                </div>
                <div>
                  <router-link
                    to="/cardostool/run"
                    class="btn"
                  ><i class="el-icon-finished" /> 执行</router-link>
                  <span class="btn"><i class="el-icon-star-on" /> 收藏</span>
                </div>
              </div>
              <div class="tool-m c666">
                <span>工具说明：</span>
                <span>
                  通过提供订单编号及单价信息，可自动更新采购订单不含税、含税单价与金额及相关接收单单机信
                </span>
              </div>
              <div class="tags">
                <span class="tag">版本号：V1.0</span>
                <span class="tag">最近一次执行状态：成功</span>
                <span class="tag">最近一次执行时间：2020/06/07</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的收藏" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="我的任务" name="third">
          <el-table
            ref="multipleTable"
            :data="finTableData"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" width="55" label="序号" fixed />
            <el-table-column
              v-for="item in tableColumn"
              :key="item.prop"
              :prop="item.prop"
              width="120"
            >
              <template slot="header" slot-scope="scope">
                {{ item.label }}
                <el-input
                  v-model="filter[item.prop]"
                  size="mini"
                  placeholder="输入关键字搜索"
                  @input="handInput(scope)"
                />
              </template>
              <template slot-scope="scope">
                <el-input
                  v-if="editIndex == scope.$index"
                  v-model="scope.row[item.prop]"
                />
                <span v-else>{{ scope.row[item.prop] }}</span>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="tid">
              <template slot="header" slot-scope="scope">
                工具编号
                <el-input
                  v-model="filter.tid"
                  size="mini"
                  placeholder="输入关键字搜索"
                  @input="handInput(scope)"
                />
              </template>
            </el-table-column>
            <el-table-column prop="tname">
              <template slot="header" slot-scope="scope">
                工具名称
                <el-input
                  v-model="filter.tname"
                  size="mini"
                  placeholder="输入关键字搜索"
                  @input="handInput(scope)"
                />
              </template>
            </el-table-column>
            <el-table-column prop="tdesc">
              <template slot="header" slot-scope="scope">
                工具描述
                <el-input
                  v-model="filter.tdesc"
                  size="mini"
                  placeholder="输入关键字搜索"
                  @input="handInput(scope)"
                />
              </template>
            </el-table-column>
            <el-table-column prop="tparam" label="工具参数">
              <template slot="header" slot-scope="scope">
                工具参数
                <el-input
                  v-model="filter.tparam"
                  size="mini"
                  placeholder="输入关键字搜索"
                  @input="handInput(scope)"
                />
              </template>
            </el-table-column>
            <el-table-column prop="ssys" label="来源系统" />
            <el-table-column prop="tsys" label="目标系统" />
            <el-table-column prop="bmodule" label="业务模块" />
            <el-table-column prop="version" label="当前版本号" />
            <el-table-column prop="state" label="版本状态" />
            <el-table-column prop="vop" label="版本发布人" />
            <el-table-column prop="time" label="发布时间" /> -->
            <el-table-column label="操作" width="160" fixed="right">
              <template slot-scope="scope">
                <el-button
                  v-if="editIndex !== scope.$index"
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                >
                  编辑
                </el-button>
                <el-button
                  v-else
                  size="mini"
                  @click="handleSave"
                >
                  保存
                </el-button>

                <el-button
                  size="mini"
                  type="danger"
                  @click="handleCancel(scope.$index, scope.row)"
                >
                  取消
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import MySection from './components/my-section'
export default {
  components: {
    MySection
  },
  data() {
    return {
      tableColumn: [
        {
          prop: 'tid',
          label: '工具编号'
        },
        {
          prop: 'tname',
          label: '工具名称'
        },
        {
          prop: 'tdesc',
          label: '工具描述'
        },
        {
          prop: 'tparam',
          label: '工具参数'
        },
        {
          prop: 'ssys',
          label: '来源系统'
        },
        {
          prop: 'tsys',
          label: '目标系统'
        },
        {
          prop: 'bmodule',
          label: '业务模块'
        },
        {
          prop: 'version',
          label: '当前版本号'
        },
        {
          prop: 'state',
          label: '版本状态'
        },
        {
          prop: 'vop',
          label: '版本发布人'
        },
        {
          prop: 'time',
          label: '发布时间'
        }
      ],
      activeName: 'third',
      tableData: [
        {
          tid: 2020,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        },
        {
          tid: 2021,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        },
        {
          tid: 2022,
          tname: 'tname1',
          tdesc: 'some desc',
          tparam: '工具参数',
          ssys: 'SMC',
          tsys: 'SCM',
          bmodule: 'bussiness',
          version: '1.0.0',
          state: '有效',
          vop: '王小二',
          time: new Date().toLocaleDateString()
        }
      ],
      multipleSelection: [],
      filter: {
        tid: '',
        tname: '',
        tdesc: '',
        tparam: '',
        ssys: '',
        tsys: '',
        bmodule: '',
        version: '',
        state: '',
        vop: '',
        time: ''
      },
      property: '',
      editIndex: null
    }
  },
  computed: {
    finTableData() {
      return this.tableData.filter(item => {
        if (String(item[this.property]).includes(this.filter[this.property])) {
          return item
        }
      })
    }
  },
  methods: {
    handleClick() {},
    handInput(scope) {
      const { property } = scope.column
      this.property = property
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleEdit(index, row) {
      this.editIndex = index
    },
    handleSave() {
      this.editIndex = null
    },
    handleCancel() {
      this.editIndex = null
    }
  }
}
</script>

<style scoped lang="scss">
.main-content {
  margin-top: 10px;
}
/deep/ .el-main {
  border: 1px solid #eee;
}
.swiper {
  display: flex;
  justify-content: space-between;
}
.section {
  flex: 1;
}
.aside {
  flex: 0 1 252px;
  color: #fff;
  background: #3354d7;
  margin-left: 6px;
  padding: 10px;
  .panel {
    padding: 10px;
    background-color: #3e95f3;
  }
  .panel + .panel {
    margin-top: 6px;
  }
  .notice-li {
    font-size: 12px;
    line-height: 3;
    position: relative;
    word-break: keep-all;
  }
  .notice-li::after {
    content: "";
    position: absolute;
    left: -16px;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      #fff,
      #fff 5px,
      transparent 5px,
      transparent
    );
    background-size: 10px 100%;
  }
}

.tables {
  background: #ddd;
  margin-top: 10px;
  padding: 0 10px 20px;
}
/deep/ .el-tabs__nav-wrap::after {
  background-color: #d0d0d0;
}
/deep/ .el-tabs__active-bar {
  width: 44px !important;
  left: 6px;
  height: 3px;
  bottom: 1px;
}
.all-tool {
  background-color: #f0f0f0;
  margin-bottom: 1px;
  display: flex;
  padding: 14px 10px;
  .tool-i {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    align-self: flex-start;
  }
  .tool-content {
    flex: 1;
  }
  .tool-h {
    display: flex;
    justify-content: space-between;
  }
  .tool-type {
    border: 1px solid currentColor;
    padding: 0 4px;
    margin-right: 10px;
    box-sizing: border-box;
    font-size: 12px;
  }
  .tool-desc {
    font-size: 16px;
  }
  .btn {
    color: #999;
  }
  .btn + .btn {
    margin-left: 20px;
  }
  .btn:hover {
    color: #eb3223;
  }
  .btn:first-child:hover {
    color: #26a3f5;
  }
  .tool-m {
    line-height: 1.8;
    margin-top: 3px;
  }
  .tags {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }
  .tag + .tag {
    margin-left: 54px;
  }
}
/deep/ .el-input__inner {
  padding: 0 4px;
  margin: 0 -4px;
  // height: auto;
  height: 24px;
  line-height: 24px;
}
</style>
