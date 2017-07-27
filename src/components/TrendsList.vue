<template>
  <div class="container trends-main">
    <div class="row">
      <ul class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 trends-list">
          <li class="trends-item" v-for="(item,index) in items" :key="index">
              <div>{{item.item_title}}</div>
              <div>{{item.item_preview}}</div>
              <div>{{item.item_time}}</div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trendsList',
  data () {
    return{
      items: [
        { item_title: '标题1',item_preview: '描述1',item_time: '2017-07-21' },
        { item_title: '标题2',item_preview: '描述2',item_time: '2017-07-22' },
        { item_title: '标题3',item_preview: '描述3',item_time: '2017-07-23' },
        { item_title: '标题4',item_preview: '描述4',item_time: '2017-07-24' },
        { item_title: '标题5',item_preview: '描述5',item_time: '2017-07-25' }
      ]
    }
  }
}
</script>

<style>
  @import '/static/css/article-list.css';
</style>
