<template>
  <div>
    <table class="custom-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>作者</th>
        <th>风格</th>
        <th style="width: 2em;">状态</th>
        <th>价格</th>
        <th>平台</th>
        <th>手册</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.style }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.price }}</td>
        <td><a :href="item.link">{{ item.link_platform }}</a></td>
        <td><a :href="item.guide_link">{{ item.guide }}</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import jsonData from '../works_json/java_shaders.json'

export default {
  data() {
    return {
      data: [] // 存储从 JSON 中读取的数据
    };
  },
  mounted() {
    // 模拟从 JSON 中读取数据
    this.data = jsonData;
  }
};
</script>

<style scoped>
.custom-table {
  text-align: center; /* 设置表格中所有内容居中对齐 */
}

.custom-table th, .custom-table td {
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>
