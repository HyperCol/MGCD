<template xmlns="http://www.w3.org/1999/html">
  <div>
    <button @click="openForm" class="code-button">投稿</button>

    <form v-if="showForm" class="overlay" @click.self="closeForm">
      <div class="form-container">

        名称 <input type="text" ref="name"/><br/>
        作者 <input type="text" ref="author"/><br/>
        风格 <input type="text" ref="style"/><br/>
        状态 <input type="text" ref="status"/><br/>
        价格 <input type="text" ref="price"/><br/>
        平台 <input type="text" ref="platform"/><br/>
        平台链接 <input type="text" ref="platform_link"/><br/>

        <span v-if="this.work_type === 'java_shader' || work_type === 'java_resourcepack'">
          手册 <input type="text" ref="guide"/><br/>
        </span>
        <span v-if="this.work_type === 'java_shader' || work_type === 'java_resourcepack'">
          手册链接 <input type="text" ref="guide_link"/><br/>
        </span>

        <button @click="submitForm" type="submit" class="code-button">提交</button>

      </div>
    </form>

  </div>
</template>

<style>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  background-color: white;
  padding: 3em;
}

.form-container input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
}

.code-button {
  background-color: rgb(254, 168, 21);
  color: white;
  border: none;
  padding: 1em 2em;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}


</style>

<script>
export default {
  props: {
    work_type: {
      type: String,
      required: true
    },
    label_name: {
      type: String,
      required: true
    }
  },
  data() {
    return {showForm: false};
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
    submitForm() {
      // 提交后重置表单数据
      const name = this.$refs.name.value;
      const author = this.$refs.author.value;
      const style = this.$refs.style.value;
      const status = this.$refs.status.value;
      const price = this.$refs.price.value;
      const platform = this.$refs.platform.value;
      const platform_link = this.$refs.platform_link.value;
      const guide = this.$refs.guide.value;
      const guide_link = this.$refs.guide_link.value;

      const template = `publish_${this.work_type}.yml`;
      const title = `Shader: ${name}`;

      const url = `https://github.com/HyperCol/MGCD/issues/new?&labels=${this.label_name}&projects=&template=${template}&title=${encodeURIComponent(title)}&name=${encodeURIComponent(name)}&author=${encodeURIComponent(author)}&style=${encodeURIComponent(style)}&status=${encodeURIComponent(status)}&price=${encodeURIComponent(price)}&platform=${encodeURIComponent(platform)}&platform_link=${encodeURIComponent(platform_link)}&guide=${encodeURIComponent(guide)}&guide_link=${encodeURIComponent(guide_link)}`;

      window.open(url)

      // 关闭表单
      this.closeForm();
    },
  },
};
</script>
