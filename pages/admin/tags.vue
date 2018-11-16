<template>
  <section>
    <div class="operation">
      <el-button type="primary" @click="dialogVisible = true">添加标签</el-button>
    </div>
    <el-table :data="$store.state.tag.tags" border style="width: 100%">
      <el-table-column prop="name" label="标签名称"/>
      <el-table-column prop="createdAt" label="创建时间" width="200"/>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="operation-col">
            <icon-base :icon-name="'修改'" @click="handleClick(scope.row)"><icon-pencil/></icon-base>
            <icon-base :icon-name="'删除'" @click="deleteTag(scope.row)"><icon-bin/></icon-base>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="dialogVisible"
      title="创建标签"
      width="30%">
      <el-input v-model="tagName" placeholder="请输入内容" maxlength="20" clearable />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTag">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  import IconBin from '~/assets/svg/bin.vue'
  import IconPencil from '~/assets/svg/pencil.vue'

  export default {
    components: {
      IconPencil,
      IconBin
    },
    data () {
      return {
        dialogVisible: false,
        tagName: '',
      }
    },
    async fetch({ store, route }) {
      store.dispatch('tag/getAllTags')
    },
    mounted () {
      this.$store.dispatch('tag/getAllTags')
    },
    methods: {
      handleClick(row) {
        console.log(row.id);
      },
      addTag () {
        this.$store.dispatch('tag/addTag', {name: this.tagName})
          .then((data) => {
            this.$message({
              message: data.data.message,
              type: 'success'
            })
            this.tagName = ''
            this.dialogVisible = false
          })
          .catch((err) => {
            console.log(err)
          })
      },
      deleteTag(row) {
        this.$store.dispatch('tag/deleteTag', {id: row.id})
          .then((data) => {
            this.$message({
              message: data.data.message,
              type: 'success'
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="scss">
  .operation-col {
    svg {
      cursor: pointer;
    }
  }
</style>
