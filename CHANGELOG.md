# 更新日志

## [0.2.0] - 2018-11-18

### 添加
* 分类管理页`/admin/category`，vuex状态
* 分类表`category`及对应的增、删查接口
* 评论-文章表`comment_article`
* 点赞表`dig`

### 修改

* 标签-文章表`tagArticle`改名为`tag_article`
* 标签表改名为`tag`
* 用户表改名为`user`，添加`createdAt`、`updatedAt`的`get`方法
* 评论表改名为`comment`，添加`createdAt`、`updatedAt`的`get`方法
* 文章表改名为`article`，添加`createdAt`、`updatedAt`的`get`方法，添加`photo`字段和`category`外键
* 

