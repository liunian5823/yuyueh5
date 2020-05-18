<template>
  <div class="asd">
    <div class="quanti">
        <div class="zhuti">
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
     
    };
  },
  computed: {},
  mounted: function() {},
  methods: {}
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
</style>