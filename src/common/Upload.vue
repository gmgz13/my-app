<template>
  <div class="dialog">
    <el-tabs type="border-card">
      <el-tab-pane label="发布说说" class="title" style="overflow:scroll;">
        <el-input
            v-model="textarea1"
            :autosize="{ minRows: 5, maxRows: 5 }"
            type="textarea"
            placeholder="分享一下今天的心情吧！"
            maxlength="30"
            show-word-limit
            class="textarea">
        </el-input>
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
        >
          <el-button size="small" type="primary">添加照片</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png文件小于500kb
            </div>
          </template>
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <el-button type="primary">发布</el-button>
      </el-tab-pane>
      <el-tab-pane label="发布帖子" class="title">
        <el-input v-model="title" placeholder="标题" maxlength="15" show-word-limit/>
        <el-input
            v-model="textarea2"
            :autosize="{ minRows: 8, maxRows: 10 }"
            type="textarea"
            placeholder="正文"
            maxlength="1000"
            show-word-limit
            class="textarea">
        </el-input>
        <el-button type="primary">发布</el-button>
      </el-tab-pane>
      <el-tab-pane label="表白墙" class="title">
        <el-input
            v-model="textarea3"
            :autosize="{ minRows: 5, maxRows: 5 }"
            type="textarea"
            placeholder="分享一下今天的心情吧！"
            maxlength="30"
            show-word-limit
            class="textarea">
        </el-input>
        <el-button type="primary">发布</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "Upload",
  setup() {
    const store = useStore()
    let value = store.state.searchValue
    let personal = store.state.personal
    const drawer = ref(false)
    const view = ref(false)
    return {
      activeIndex: '1',
      value,
      personal,
      drawer,
      view,
      textarea1: ref(''),
      textarea2: ref(''),
      textarea3: ref(''),
      title:ref('')
    }
  },
  data() {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },],
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
  },
}
</script>

<style scoped>
.dialog{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.el-tab-pane{
  width:1000px;
  height: 400px;
}
.el-tab-pane{
  margin: 10px;
}
.title{
  display: flex;
  flex-direction: column;
}
.textarea{
  margin:5px 0;
}
.el-upload{
  width: 80px;
  height: 80px;
}
/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>
