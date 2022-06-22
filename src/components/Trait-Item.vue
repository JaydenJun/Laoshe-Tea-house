<template>
  <div class="tarit">
    <div
      class="ticket"
      v-for="n in item"
      :key="n.show_id"
      v-show="n.family_title == y"
    >
      <div class="img">
        <router-link
          :to="'/traits/' + n.show_title + '$' + n.show_id"
          target="_blank"
          title=""
          ><img :src="img + n.show_spic" />
        </router-link>
      </div>
      <div class="info">
        <div>
          <router-link
            class="aa"
            :to="'/traits/' + n.show_id"
            title=""
            target="_blank"
            >{{ n.show_title }}</router-link
          >
        </div>
        <!-- <dd>{{ moment.unix(n.show_time).format("yyyy年MM月DD日") }}</dd> -->
        <div>{{ n.show_star }}</div>
        <div class="address">
          {{ n.show_address }}
        </div>
        <div>状态：售票中</div>

        <div class="order">
          <router-link :to="'/traits/' + n.show_id" title="" target="_blank"
            >立即订 票</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["img", "name"]) },
  props: ["item", "y"],
  mounted() {
    if (!this.name) {
      alert("温馨提示：请先登录！");
      this.$router.push("/login");
    }
  },
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
    width: 44vw;
    height: 250px;
  }
}
.info {
  div {
    padding: 13px 20px;
  }
  .aa {
    text-decoration: none;
    color: rgb(48, 120, 255);
  }
  .price {
    span {
      color: rgb(40, 25, 247);
    }
  }
  .order {
    a {
      padding: 10px 20px;
      background-color: rgb(48, 120, 255);
      color: #fff;
      font-size: 14px;
      border-radius: 5px;
      text-decoration: none;
    }
  }
}
</style>
