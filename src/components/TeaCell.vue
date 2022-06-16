<template>
  <div>
    <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
      <div>
        <router-link :to="/teadetails/ + items.tea_id">
          <img src="/img/西湖龙井.webp" alt="">
          <h2>
            {{ items.tea_name }}
          </h2>
          <p>
            {{ items.tea_subtitle }}
          </p>
        </router-link>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  props: ['items'],
  mounted() {
    // this.getData()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.teacell {
  margin: 3vh auto;
  padding: 0 4vw;

  a {
    text-decoration: none;
    color: black;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 15vw;
  }

  h2 {
    text-align: center;
    margin: 2vh;
  }

  p {
    padding: 0 1vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3vh;

    &:hover {
      text-overflow: inherit;
      overflow: visible;
      white-space: pre-line;
    }
  }
}
</style>