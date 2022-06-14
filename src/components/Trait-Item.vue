<template>
  <div class="tarit" v-if="item">
    <div
      class="yc_list"
      style="border-top: none"
      v-for="n in item"
      :key="n.family_sid"
    >
      <!-- {{n}} -->
      <div class="ticket">
        <div class="img">
          <router-link :to="'/traits/'+n.show_id" target="_blank" title=""
            ><img src="/1.jpg"  />
          </router-link>
        </div>
        <div class="info">
          <dl>
            <dt>
              <router-link to="/traits" title="" target="_blank">{{
                n.show_title
              }}--{{y}}</router-link>
      
            </dt>
            <!-- <dd>{{ moment.unix(n.show_time).format("yyyy年MM月DD日") }}</dd> -->
            <dd>{{ n.show_time.slice(0, 7) }}</dd>
            <dd class="address">
              {{n.show_address}}
            </dd>
            <dd>状态：售票中</dd>
            <dd class="price">票价：<span>{{n.show_predict}}</span> 起</dd>
            <dd class="order">
              <a href="#" title="" target="_blank">订 票</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item","y"],
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.tarit {
  width: 88vw;
  margin: 0 auto;
}
.yc_list {
  display: inline-flex;
  padding: 5px 20px;
  padding-right: 0px;
  overflow: hidden;
}
.ticket {
  margin: 10px 5px;
  width: 340px;
  height: 180px;
  overflow: hidden;
  text-align: left;
  background-color: rgb(231, 227, 227);
}
.ticket .img {
  float: left;
  border: 1px solid #ccc;
  overflow: hidden;
}
.ticket .img img {
  width: 135px;
  height: 180px;
  border: 0;
  overflow: hidden;
}
.ticket .info {
  float: right;
  width: 203px;
  overflow: hidden;
}
.ticket .info dl {
  margin: 5px 0 5px 10px;
}
.ticket .info dl dt {
  margin: 0;
  padding: 0;
  height: 40px;
  line-height: 20px;
}
.ticket .info dl dt a {
  color: #000;
}
.ticket .info dl dd {
  line-height: 26px;
  color: #525252;
}
.ticket .info dl dd.address {
  height: 26px;
  overflow: hidden;
}
.ticket .info dl dd.address a {
  color: #525252;
}
.ticket .info dl dd.price span {
  font-size: 18px;
  font-weight: bold;
  color: #f96c02;
}
.ticket .info dl dd.order {
  padding-right: 10px;
  overflow: hidden;
}
.ticket .info dl dd.order a {
  float: right;
  display: block;
  width: 90px;
  height: 26px;
  line-height: 26px;
  padding-left: 35px;
  color: #1b7c8c;
  border: 1px solid #1b7c8c;
  font-weight: bold;
}
.ticket .info dl dd.order a:hover {
  text-decoration: none;
}
</style>
