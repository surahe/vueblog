<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="文章关键字">
        <el-input v-model="form.keywords"/>
      </el-form-item>
      <el-form-item label="文章描述">
        <el-input v-model="form.description"/>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="form.category.id" placeholder="请选择">
          <el-option
            v-for="item in $store.state.category.categories"
            :key="item.id"
            :label="item.name"
            :value="item.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标签">
        <button
          v-for="(item, index) in tagList"
          :key="item.id"
          :class="{active: item.selected}"
          type="button"
          class="tag-item"
          @click="switchTagStatus(item, index)"
        >
          {{ item.name }}
        </button>
      </el-form-item>
      <el-form-item label="文章内容">
        <no-ssr><mavon-editor v-model="form.content"/></no-ssr>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  layout: "admin",
  head() {
    return {
      title: "发布文章",
      meta: [{ noCache: false }]
    }
  },
  data () {
    return {
      form: {
        title: '',
        keywords: '',
        description: '',
        tags: [],
        category: {
          id: '',
          name: ''
        },
        content: ''
      },
      tagList: []
    }
  },
  created () {
    this.tagList = this.$store.state.tag.tags.map((item) => {
      return Object.assign(item, {selected: false})
    })
  },
  methods: {
    switchTagStatus (item, index) {
      let selected = !item.selected
      this.tagList[index].selected = selected
      this.form.tags = this.tagList.filter(t => t.selected).map(t => t.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tag-item {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid $border;
    &.active {
      background: $blue;
      color: #fff;
    }
  }
</style>
