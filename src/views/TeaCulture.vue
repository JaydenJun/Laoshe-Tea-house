<template>
    <div class="teaculture">
        <el-container>
            <el-header class="mheader">
                <!-- 放置水平导航 -->
                <el-menu background-color="#303133" text-color="#fff" active-text-color="#ffd04b" mode="horizontal"
                    default-active="2">
                    <h1>茶文化</h1>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside class="maside" width="200px">
                    <!-- 放置垂直导航 -->
                    <el-menu :default-active="$route.path" background-color="#303133" text-color="#fff"
                        active-text-color="#ffd04b" router>
                        <el-menu-item index="/teaculture/ChaWh/ChaDao.vue">
                            <i class="el-icon-location"></i>
                            茶道
                        </el-menu-item>
                        <el-menu-item index="/teaculture/ChaWh/ChaDao.vue">
                            <i class="el-icon-s-grid"></i>
                            table表格
                        </el-menu-item>
                        <el-menu-item index="/teaculture/ChaWh/ChaDao.vue">
                            <i class="el-icon-location"></i>
                            form表单
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="mmain">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mheader {
    background-color: #303133;
}

.maside {
    height: calc(100vh - 60px);
    background-color: #303133;
    padding-left: 15px;
}

.mmain {
    height: calc(100vh - 60px);
}

.el-menu {
    border-right: none;
    text-align: center;
    color: white;
}
</style>

<style>
body {
    margin: 0;
    padding: 0;
}

::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
    background: #6a6b6b;
}

::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
    border-radius: 10px;
    background: #ededed;
}
</style>