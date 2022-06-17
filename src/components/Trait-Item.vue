<template>
  <div class="tarit">
    <div
      class="ticket"
      v-for="n in item"
      :key="n.family_sid"
      v-show="n.family_title == y"
    >
      <div class="img">
        <router-link :to="'/traits/' + n.show_id" target="_blank" title=""
          ><img src="/1.jpg" />
        </router-link>
      </div>
      <div class="info">
        <div>
          <router-link class="aa" to="/traits" title="" target="_blank">{{
            n.show_title
          }}</router-link>
        </div>
        <!-- <dd>{{ moment.unix(n.show_time).format("yyyy年MM月DD日") }}</dd> -->
        <div>{{ n.show_time.slice(0, 7) }}</div>
        <div class="address">
          {{ n.show_address }}
        </div>
        <div>状态：售票中</div>
        <div class="price">
          票价：￥<span>{{ n.show_predict }}</span> 元 起
        </div>
        <div class="order">
          <a href="#" title="" target="_blank">订 票</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "y"],
};
</script>

<style lang="scss" scoped>
.ticket {
  display: inline-flex;
  width: 87vw;
  margin: 5px;
  background-color: #ffffff;
}
.img {
  width: 50%;
  img {
    width: 100%;
  }
}
.info {
  div {
    padding: 13px 20px;
  }
  .aa{
    text-decoration: none;
  }
  .price{
    span{

      color: rgb(40, 25, 247);
    }
  }
  .order{
    a{
      text-decoration: none;
    }

  }
}
</style>
