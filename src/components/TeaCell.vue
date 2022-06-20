<template>
    <div>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
            <div>
                <router-link :to="/teadetails/ + items.tea_id">
                    <div class="img">
                        <img :src="img + items.tea_pic" alt="">
                    </div>
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
import { mapState } from 'vuex'
export default {
    props: ['items'],
    computed: {
        ...mapState(['img'])
    },
    mounted() {
        // this.getData()
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}

.img {
    background-color: lightgrey;
    padding: 1vw;
    border-radius: 1vh;

    img {
        display: block;
        margin: 0 auto;
        width: 17vw;
        height: 13vw;
        border-radius: 0.5vw;
        transition: 0.5s;

        &:hover {
            transform: scale(1.1);
        }
    }
}


h2 {
    text-align: center;
    margin: 2vh;

    &:hover {
        color: #1BAD5B;
    }
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
</style>