<template>
  <div class="avatar-uploader">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :disabled="disabledType"
      :auto-upload="false"
      accept=".png,.jepg,.jpg"
      ref="excelUploadRef"
      :on-change="handleChange"
    >
      <img
        v-if="imagesURL || props.imageUrl"
        :src="props.imageUrl ? props.imageUrl : imagesURL"
        class="avatar"
      />
      <div class="upImgBox" v-else>
        <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
        <div>{{ imgUpText }}</div>
      </div>
    </el-upload>
    <div class="upImgText">
      {{ imgText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { Plus } from '@element-plus/icons-vue';
  import { ElMessage, ElLoading } from 'element-plus';
  import { request } from '@/api/axios';
  interface Props {
    imageUrl?: string; // 回显图片地址
    action?: string; //   上传地址
    imgText?: string; //   文字可以不传
    imgUpText?: string; // 上传按钮的文字
    disabledType?: boolean; // 是否禁用上传
  }
  const props = withDefaults(defineProps<Props>(), {
    imageUrl: '',
    action: '/activity/resource/uploadFile',
    imgText: '支持jpg/jpeg/png；文件大小不能超过2M；封面图建议尺寸940px*400px',
    imgUpText: '上传封面',
    disabledType: false,
  });

  const imagesURL = ref<string>(props.imageUrl);
  const emits = defineEmits(['imgSuccess']);
  const handleChange = (file: any, fileList: any) => {
    console.log(file);
    console.log(fileList);
    let rawFile = file.raw;
    if (
      rawFile.type !== 'image/jpeg' &&
      rawFile.type !== 'image/png' &&
      rawFile.type !== 'image/jpg'
    ) {
      ElMessage.error('仅支持格式为jpg, jpeg, png的图片');
      return false;
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('图片文件大小不能超过2MB!');
      return false;
    } else {
      let formData = new FormData();
      formData.append('file', rawFile);
      formData.append('fileType', '1');
      const loadingInstance = ElLoading.service({
        text: '正在上传',
        background: 'rgba(0,0,0,.2)',
      });
      // 请求接口上传图片到服务器
      let requestURL = props.action;
      request('post', requestURL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then(async (res: any) => {
          console.log(res);
          if (res.code == 0) {
            loadingInstance.close();
            let obj = {
              imgUrl: res.data.ossFile,
              raw: res.data,
            };
            emits('imgSuccess', obj);
            imagesURL.value = res.data.ossFile;
          } else {
            loadingInstance.close();
            ElMessage.warning(`文件上传失败`);
          }
        })
        .catch(() => {
          loadingInstance.close();
          ElMessage.warning(`文件上传失败`);
        });
    }
    return true;
  };
  watch(
    () => props.imageUrl,
    () => {
      imagesURL.value = props.imageUrl;
    },
  );
</script>

<style lang="scss" scoped>
  :deep().avatar-uploader {
    .avatar {
      width: 104px;
      height: 104px;
      display: block;
    }
    .el-upload {
      border: 1px dashed #dcdfe6;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: 0.2s;
      background: rgba(0, 0, 0, 0.04) !important;
    }

    .el-upload:hover {
      border-color: #14b194;
    }
  }
  .el-icon.avatar-uploader-icon {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }
  .upImgBox {
    width: 104px;
    height: 104px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
    padding-top: 24px;
    box-sizing: border-box;
  }
  .upImgText {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 4px;
  }
</style>
