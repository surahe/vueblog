<template>
  <section>
    <div class="operation">
      <el-button type="primary" @click="dialogVisible = true">添加标签</el-button>
    </div>
    <el-table :data="$store.state.tag.tags" border style="width: 100%">
      <el-table-column prop="name" label="标签名称"/>
      <el-table-column :formatter="formatToDate" prop="createdAt" label="创建时间" width="200"/>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="operation-col">
            <i @click="handleClick(scope.row)">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-edit"/>
              </svg>
            </i>
            <i @click="deleteTag(scope.row)">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-trash"/>
              </svg>
            </i>
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
  import {formatTime} from '~/utils/tools'
  export default {
    layout: 'admin',
    head () {
      return {
        title: '标签管理',
        meta: [
          { noCache: false }
        ]
      }
    },
    data () {
      return {
        dialogVisible: false,
        tagName: '',
      }
    },
    fetch({ store, params }) {
      return store.dispatch('tag/getAllTags')
        .catch(err => {})
    },
    methods: {
      handleClick(row) {
        console.log(row.id);
      },
      addTag () {
        this.$store.dispatch('tag/addTag', {name: this.tagName})
          .then((response) => {
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            this.tagName = ''
            this.dialogVisible = false
          })
      },
      deleteTag(row) {
        this.$store.dispatch('tag/deleteTag', {id: row.id})
          .then((response) => {
            this.$message({
              message: response.data.message,
              type: 'success'
            })
          })
      },
      formatToDate (row, column, cellValue, index) {
        return formatTime(new Date(row.createdAt), 'YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>

<style lang="scss">
  .operation-col {
    font-size: 16px;
    svg {
      cursor: pointer;
    }
  }
</style>
