<template>
  <div id="basic">
    <progress-bar></progress-bar>
    <div class="basicscon">
      <div class="conT">
        <img src="../.././img/iconBasic.png" alt="">
        基本信息
      </div>
      <div class="basicUser basicItem">
        <div class="basicN">投保人姓名</div>
        <input type="text" placeholder="请输入投保人姓名" required class="basicUserName">
      </div>
      <div class="basicCity basicItem choiceCityT">
        <div class="basicN" @click="readcity">投保城市</div>
        <input type="text " class="city basicC" readonly id="cityName" value="上海" @click="showcitylist">
        <img src="../.././img/iconLeft.png" alt="">
      </div>
      <div class="basicUserNumber basicItem">
        <div class="basicN">投保人手机</div>
        <input type="number" placeholder="请输入手机号" class="" id="basicUserNumber">
        <span class="verification">获取验证码</span>
      </div>
      <div class="basicItem yanzhengmakuang">
        <div class="basicN">验证码</div>
        <input type="number" placeholder="请输入验证码" class="basicYanzhengma">
      </div>
    </div>
    <div class="btn">
      <router-link to="/plan">下一步</router-link>
    </div>

    <div>basic</div>
    <div class="cityList">
      <img src="img/closeBtn.png" alt="" class="closeBtn">
      <div class="hhT">请选择投保城市</div>
      <div class="huafen yixian">
        <ul class=" yixianLi">
          <!--cityList-->
          <li></li>
        </ul>
      </div>

      <div class="sureBtn" id="hhbCitySel">确定</div>
    </div>
  </div>
  </div>
</template>
<script>
  import ProgressBar from '.././components/progressBar.vue'
  export default {
    name: 'basic',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      ProgressBar
    },
    methods: {
      readcity () {
        var url = `http://192.168.6.131:8080/insurance/getInsuranceCities`
        this.$http.get(url).then(responce => {
          this.data = responce.data
        })
        console.log(`2`)
        console.log(this.data)
      },
      showcitylist () {
        var cityflag = true
        console.log(cityflag)
        return cityflag
      }
    }
  }
</script>
<style>
  .cityList {
    box-sizing: border-box;
    padding: 0.2rem;
    width: 5.9rem;
    margin: 0.2rem auto;
    background: #FFF;
    font-size: 0.28rem;
    color: #575757;
    overflow: hidden;
    height: 85%;
  }
  .cityList > img {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
  }
  .cityList > .hhT {
    color: #ff9a00;
    height: 0.5rem;
    border-bottom: 1px solid #ff9a00;
  }
  .cityList > .definCity {
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
  }
  .cityList > .choiceC {
    padding-bottom: 0.5rem;
  }
  .cityList > .huafen {
    margin-top: 0.65rem;
    padding-bottom: 0.3rem;
  }
  .cityList > .yixian > ul {
    width: 100%;
    float: left;
    margin-top: 0.37rem;
  }
  .cityList > .yixian > ul > li {
    width: 1.1rem;
    height: 0.8rem;
    background: #e9e9e9;
    text-align: center;
    line-height: 0.8rem;
    float: left;
    margin-right: 0.125rem;
    margin-left: 0.125rem;
    margin-bottom: 0.3rem;
  }
  .cityList .sureBtn {
    width: 1.66rem;
    height: 0.6rem;
    background: #ff9a00;
    position: absolute;
    top: 8.4rem;
    left: 50%;
    margin-left: -0.83rem;
    border-radius: 0.08rem;
    color: #fff;
    text-align: center;
    line-height: 0.6rem;
    float: left;
  }

  .basicscon {
    width: 100%;
    font-size: 0.26rem;
    float: left;
  }

  .basicscon > .conT {
    box-sizing: border-box;
    width: 100%;
    padding: 0.21rem 0 0 5%;
    font-size: 0.3rem;
    color: #767676;
    margin-bottom: 0.37rem;
    display: flex;
  }

  .basicscon > .conT > img {
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 0.2rem;
  }

  .basicscon > .basicUserNumber {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .basicscon > .basicCity {
    position: relative;
  }

  .basicscon > .basicItem {
    box-sizing: border-box;
    width: 90%;
    height: 0.82rem;
    margin: 3px auto;
    border-bottom: 1px solid #e9e9e9;
    line-height: 0.82rem;
    position: relative;
  }

  .basicscon > .basicItem > .basicUserName {
    float: right;
    width: 60%;
  }

  .basicscon > .basicItem > input {
    width: 40%;
    height: 90%;
    text-align: right;
    color: #767676;
    font-size: 0.26rem;
    float: right;
  }

  .basicscon > .basicItem > input::-webkit-input-placeholder {
    color: #bcbcbc;
  }

  .basicscon > .basicItem > .basicN {
    color: #767676;
    float: left;
    width: 30%;
    text-align: left;
  }

  .basicscon > .basicItem > .basicC {
    float: right;
    margin-right: 30px;
  }

  .basicscon > .basicItem > img {
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.11rem;
  }

  .basicscon > .basicItem > .verification {
    display: block;
    width: 1.65rem;
    height: 0.48rem;
    border-radius: 0.08rem;
    color: #fe9a01;
    border: 1px solid #fe9a01;
    text-align: center;
    line-height: 0.48rem;
    position: absolute;
    right: 0%;
    top: 50%;
    margin-top: -0.24rem;
  }

  .basicscon > .basicItem > #basicUserNumber {
    text-align: left;
  }
</style>
