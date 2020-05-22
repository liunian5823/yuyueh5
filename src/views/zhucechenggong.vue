<template>
  <div class="asd" @click="guanbi">
    <div class="quanti">
      <div class="zhuti">
        <div class="zhutias">
          <img src="../image/bhackground.png" alt />
          <div class="zhuti_neirong">
            <span class="zhuti_neirong_cg">注册成功</span>
            <img src="../image/sajda.png" alt class="yonghuerweima" />
            <span class="zhuti_neirong_wx">欢迎添加“展交中心小秘书”微信</span>
            <span class="zhuti_neirong_gx">可邀请您进入“资源共享群”</span>
            <span class="zhuti_neirong_gb" >点击任何位置或{{mian}}秒后自动退出</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Message } from "element-ui";
export default {
  name: "denglu",
  props: {
    msg: String
  },
  data() {
    return {
      mian:"10",
    };
  },
  computed: {},
  mounted: function() {
    this.yanchiguanbi()
  },
  methods: {
    guanbi:function(){
      this.$router.push({ name: "index" });
    },
    yanchiguanbi:function(){
      var than = this;
      var a = than.mian;
      setInterval(function(){
        a--;
        if(a == '0'){
          than.guanbi();
        }else{
          than.mian = a;
        }
      },1000)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.quanti {
  width: 100%;
  height: 100%;
}

.asd {
  width: 100%;
  height: 100%;
}

.zhuti {
  min-width: 1200px;
  width: 100%;
  height: 100%;
  background: url('../image/background1.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}

.zhuti img {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.zhuti_neirong {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.zhutias {
  width: 300px;
  height: 450px;
  position: relative;
}

.zhuti_neirong_cg {
  display: block;
  font-size: 26px;
  line-height: 116px;
  text-align: center;
  color: #5A82E4;
}

.yonghuerweima {
  width: 60% !important;
  position: absolute;
  top: 130px !important;
  left: 58px !important;
}

.zhuti_neirong_wx {
  display: block;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #000;
  position: absolute;
  top: 316px !important;
  left: 38px !important;
}

.zhuti_neirong_gx {
  display: block;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #000;
  position: absolute;
  top: 343px !important;
  left: 55px !important;
}

.zhuti_neirong_gb {
  display: block;
  font-size: 12px;
  line-height: 50px;
  text-align: center;
  color: #f00;
  position: absolute;
  top: 376px !important;
  left: 55px !important;
}
</style>