<template>
    <transition name="silde-down">
        <div class="title-wrapper" v-show="ifTitleAddMenuShow">
            <div class="left">
                <span class="iconfont icon">&#xe645;</span>
            </div>
            <div class="right">
                <div class="iconfont-wrapper">
                    <span class="iconfont icon">&#xe648;</span>
                </div>
                <div class="iconfont-wrapper">
                    <span class="iconfont icon">&#xe8a0;</span>
                </div>
                <div class="iconfont-wrapper">
                    <span class="iconfont icon">&#xe634;</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  props: {
    ifTitleAddMenuShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
@import '../assets/styles/global';
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(48);
  background-color: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .iconfont-wrapper {
      flex: 0 0 px2rem(40);
      @include center;
    }
  }
}
</style>
