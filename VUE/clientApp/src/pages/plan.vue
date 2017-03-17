<template>
  <div>
    <progress-bar></progress-bar>
    <div class="planCon">
      <div class="planTitle">
        <img src="../.././img/iconPlanT.png" alt="" class="iconPlanT">
        <div class="planName">商业险 <i>?</i></div>
        <input type="date" class="planTitleTime">

      </div>
      <div class="planItems">

      </div>
      <div class="multipleItem">
        <div class="multipleT">不计免赔险</div>
        <div class="multipleSelect">

        </div>
      </div>
    </div>
    <div class="fenGe"></div>
    <div class="required">
      <div class="requiredItem">
        <span class="requiredName">交强险</span>
        <input type="date" class="requiredTime"/>
        <img src="../.././img/iconSelectY.png" alt="">
      </div>
      <div class="requiredItem">
        <span class="requiredName">车船税</span>
        <img src="../.././img/iconSelectY.png" alt="">
      </div>
    </div>
    <div class="fenGe"></div>
    <div class="saleCompany">
      <div class="saleCompanyTitle">
        <img src="../.././img/selectCompanyIcon.png"/>
        <span>选择保险公司</span>
      </div>
      <div class="companyIcon">

      </div>
    </div>
    <div class="btn">下一步</div>
  </div>
</template>
<style scoped>
  .planCon {
    width: 100%;
  }

  .planCon > .planTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.3rem;
    color: #767676;
    width: 90%;
    height: 0.94rem;
    margin: 0 auto;
    border-bottom: 1px solid #e9e9e9;
    position: relative;
  }

  .planCon > .planTitle > .planName {
    position: relative;
  }

  .planCon > .planTitle > .planName > i {
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.2rem;
    color: #fff;
    position: absolute;
    top: -0.05rem;
    right: -0.2rem;
    background: #fe9a01;
    border-radius: 6666rem;
  }

  .planCon > .planTitle > .iconPlanT {
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 0.2rem;
  }

  .planCon > .planTitle > .iconRightB {
    width: 0.13rem;
    height: 0.21rem;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.105rem;
  }

  .planCon > .planTitle > .planTitleTime {
    width: 36%;
    height: 50%;
    font-size: 0.3rem;
    position: absolute;
    right: 0rem;
    top: 50%;
    margin-top: -0.235rem;
    margin-left: 0.3rem;
    text-align: right;
    color: #6b6b6b;
    outline: none;
    border: none;
    background: transparent;
  }

  .planCon > .planItems > .planItem {
    width: 90%;
    height: 0.82rem;
    margin: 0 auto;
    font-size: 0.26rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    position: relative;
  }

  .planCon > .planItems > .planItem > select {
    width: 20%;
    position: absolute;
    right: 10%;
    padding: 0;
    margin-right: 15%;
  }

  .planCon > .planItems > .planItem > .iconSelectY,
  .planCon > .planItems > .planItem .iconSelectG {
    width: 0.31rem;
    height: 0.31rem;
    position: absolute;
    right: 0%;
    top: 50%;
    margin-top: -0.155rem;
  }

  .planCon > .multipleItem {
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    margin-top: 0.18rem;
  }

  .planCon > .multipleItem > .multipleT {
    width: 30%;
    font-size: 0.26rem;
    float: left;
  }

  .planCon > .multipleItem > .multipleSelect {
    width: 70%;
    font-size: 0.24rem;
    float: left;
    flex-wrap: wrap;
  }

  .planCon > .multipleItem > .multipleSelect > .item {
    width: 1rem;
    height: 0.4rem;
    position: relative;
    float: left;
    text-align: right;
    line-height: 0.4rem;
  }

  .planCon > .multipleItem > .multipleSelect > .item > img {
    width: 0.23rem;
    height: 0.23rem;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -0.1rem;
    margin-left: 0.18rem;
  }

  .planCon > .multipleItem > .multipleSelect > .item > span {
    display: block;
    margin-left: 0.1rem;
  }

  .required {
    width: 100%;
  }

  .required > .requiredItem {
    width: 90%;
    height: 0.82rem;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #fe9a01;
    line-height: 0.82rem;
    border-bottom: 1px solid #e9e9e9;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .required > .requiredItem > .requiredTime {
    font-size: 0.3rem;
    margin-left: 0.6rem;
    color: #6b6b6b;
    position: absolute;
    right: 0.45rem;
    top: 50%;
    width: 2.0736rem;
    height: 50%;
    margin-top: -0.21rem;
    text-align: right;
    outline: none;
    border: none;
    background: transparent;
  }

  .required > .requiredItem input::-webkit-outer-spin-button,
  .required > .requiredItem input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }

  .required > .requiredItem > .iconLeftY {
    width: 0.13rem;
    height: 0.21rem;
    float: right;
    margin-right: 0.55rem;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.105rem;
  }

  .required > .requiredItem > img {
    width: 0.31rem;
    height: 0.31rem;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.155rem;
  }

  .saleCompany {
    width: 100%;
    float: left;
  }

  .saleCompany > .saleCompanyTitle {
    width: 90%;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
  }

  .saleCompany > .saleCompanyTitle > img {
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 0.2rem;
  }

  .saleCompany > .companyIcon {
    width: 93%;
    margin: 0.5rem auto;
  }

  .saleCompany > .companyIcon > .company {
    width: 5.95rem;
    height: 1.35rem;
    margin: 0 auto;
    margin-bottom: 0.6rem;
    position: relative;
  }

  .saleCompany > .companyIcon > .company > .providerIcon {
    width: 1.28rem;
    height: 1.2rem;
    position: absolute;
    bottom: 0.34rem;
    left: 0.36rem;
  }

  .saleCompany > .companyIcon > .company > .borderSelect {
    width: 5.95rem;
    height: 1.35rem;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .saleCompany > .companyIcon > .company > .borderUSelect {
    width: 5.95rem;
    height: 1.35rem;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .saleCompany > .companyIcon > .company > .companyName {
    position: absolute;
    top: 0;
    line-height: 1.35rem;
    left: 2rem;
    font-size: 0.26rem;
    color: #7a7a7a;
  }


</style>
<script>
  import ProgressBar from '.././components/progressBar.vue'

  export default{
    name: 'plan',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      ProgressBar
    },
    methods: {}
  }
</script>
