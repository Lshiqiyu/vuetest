<template>
<div>
  <div class="step">
    <div class="step1 colorYello">
      <div class="circle colorYelloBY">
        1
      </div>
      <div class="stepN">
        基本信息
      </div>
    </div>
    <div class="lineMiddle lineMiddleY"></div>
    <div class="step1">
      <div class="circle colorYelloBG">
        2
      </div>
      <div class="stepN">
        选择方案
      </div>
    </div>
    <div class="lineMiddle lineMiddleG"></div>
    <div class="step1">
      <div class="circle colorYelloBG">
        3
      </div>
      <div class="stepN">
        资料上传
      </div>
    </div>
    <div class="lineMiddle lineMiddleG"></div>
    <div class="step1">
      <div class="circle colorYelloBG">
        4
      </div>
      <div class="stepN">
        提交询价
      </div>
    </div>
  </div>
  <div class="fenGe"></div>
</div>
</template>
<style>
  .fenGe{
    width:100%;
    height:0.3rem;
    background: #ccc;
  }
  .step {
    width: 100%;
    box-sizing: border-box;
    height: 1.21rem;
    color: #aaa;
    padding: 0.26rem 0.216rem;
    font-size: 0.2rem;
  }

  .step > .step1 {
    width: 17.5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    float: left;
  }

  .step > .step1 > .circle {
    width: 0.34rem;
    height: 0.34rem;
    border-radius: 6rem;
    text-align: center;
    line-height: 0.34rem;
    margin-bottom: 0.13rem;
  }

  .step > .step1 > .circle > img {
    width: 100%;
    height: 100%;
  }

  .step > .lineMiddle {
    box-sizing: border-box;
    width: 10%;
    float: left;
    height: 1px;
    margin-top: 0.17rem;
    padding: 0 0.128rem;
  }
  .lineMiddleG {
    background: #d6d6d6;
  }

  .lineMiddleY {
    background: #fe9a01;
  }

  .colorYello {
    color: #fe9a01;
  }

  .colorYelloBG {
    border: 1px solid #d6d6d6;
  }

  .colorYelloBY {
    border: 1px solid #fe9a01;
  }
</style>
<script>
  export default {
    name: 'progressBar',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
