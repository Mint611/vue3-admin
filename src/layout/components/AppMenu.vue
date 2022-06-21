<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        订单列表
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <span>媒体</span>
    </el-menu-item>
    <el-sub-menu index="5">
      <template #title>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/admin">
        权限管理
      </el-menu-item>
      <el-menu-item index="/permission/role">
        角色权限
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        权限规则
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
