<template>
  <header :class="bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <p class="header-intro-text">{{msg}}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headertext',
  data () {
    return {
      bg: 'bg-set-1',
      msg: '文人作文，农人掘锄，本是平平常常的，若照相之际，文人偏要装做粗人，玩什么“荷锄带笠图”；农夫则在柳下捧一本书，装作“深柳读书图”之类，就要令人肉麻。 —— 鲁迅'
    }
  }
}
</script>

<style>
  .bg-set-1{
    background: url('../assets/bg-header-intro.jpg') center center no-repeat;
    margin-bottom: 50px;
  }
</style>

