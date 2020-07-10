<template>
  <section class="section">
    <div class="s-circles">
      <div
        v-for="(item, index) in tags"
        :key="item.type"
        class="s-circle"
        :class="{active: activeIndex == index}"
        @click="changeType(item.type, index)"
      >
        {{ item.type }}
      </div>
    </div>

    <footer class="foot">
      <ul class="s-ul">
        <li v-for="item in serveList" :key="item.val" class="s-li">
          {{ item.name }}: {{ item.val }}
        </li>
      </ul>
      <h3 class="s-h3">{{ type }}</h3>
      <div>
        <div>我常用的服务</div>
        <ul class="s-ul">
          <li v-for="item in alwaysUse" :key="item.name" class="s-li">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          type: '运营'
        },
        {
          type: '项目'
        },
        {
          type: '需求'
        },
        {
          type: '采购'
        },
        {
          type: '进行'
        },
        {
          type: '物流'
        },
        {
          type: '质量'
        },
        {
          type: '合规'
        },
        {
          type: '财务'
        },
        {
          type: '产品'
        },
        {
          type: '供应商'
        },
        {
          type: '人力'
        }
      ],
      serveList: [
        {
          name: '已选服务类型',
          val: '运营'
        },
        {
          name: '累计服务数量',
          val: '108'
        },
        {
          name: '累计适用次数',
          val: '1950'
        }
      ],
      alwaysUse: [
        {
          name: '查询供应链采购订单头信息服务'
        },
        {
          name: '供应链库存同步服务'
        },
        { name: 'CRM卡状态查询接口' }
      ],
      type: '运营',
      activeIndex: null
    }
  },
  methods: {
    changeType(type, index) {
      this.type = type
      this.activeIndex = index
      setTimeout(() => {
        this.activeIndex = null
      }, 250)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  border: 1px solid #eee;
  background: linear-gradient(to right bottom, #99ccee, #26a3f5);
  color: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}
.s-circles {
  display: flex;
  justify-content: center;
}
.s-circle {
  border-radius: 50%;
  width: 58px;
  height: 58px;
  box-shadow: inset 4px 0 22px #fff;
  line-height: 58px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: all .25s;
}
.s-circle.active {
  transform: scale(1.1);
  // color: red;
}
.s-circle:not(:first-child) {
  margin-left: 10px;
}

.s-circle:first-child {
  width: 70px;
  height: 70px;
  line-height: 70px;
  margin-top: 54px;
  font-size: 24px;
}
.s-circle:nth-child(11) {
  width: 70px;
  height: 70px;
  line-height: 70px;
  margin-top: 32px;
  font-size: 16px;
}
.s-circle:nth-child(12) {
  margin-top: 100px;
}

.s-circle:nth-child(2) {
  margin-top: 92px;
}
.s-circle:nth-child(3) {
  margin-top: 20px;
}
.s-circle:nth-child(4) {
  margin-top: 66px;
}
.s-circle:nth-child(10) {
  margin-top: 86px;
}
.s-circle:nth-child(7) {
  width: 64px;
  height: 64px;
  line-height: 64px;
  margin-top: -10px;
}
.s-circle:nth-child(6),
.s-circle:nth-child(8) {
  margin-top: 46px;
}
.s-circle:nth-child(5),
.s-circle:nth-child(9) {
  margin-top: 10px;
}

.foot {
  margin-top: auto;
  padding: 0 10px 30px;
  display: flex;
}
.s-ul {
  padding: 0;
  align-self: flex-end;
}
.s-h3 {
  margin: -40px auto 0;
  font-size: 50px;
  padding: 2px 16px;
  border: 2px dashed #fff;
  align-self: flex-start;
}
.s-li {
  list-style: none;
  line-height: 2;
}
</style>
