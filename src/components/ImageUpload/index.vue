<template>
  <div class="image-uploader">
    <el-upload
      ref="excelUploadRef"
      class="image-uploader"
      v-model:file-list="waitImageList"
      list-type="picture-card"
      :disabled="disabledType"
      :auto-upload="false"
      accept=".png,.jepg,.jpg"
      :limit="limitNum"
      :on-change="handleChange"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <!-- <div v-if="waitImageList.length">
        <img v-for="(item, index) in waitImageList" :key="index" :src="item.url" class="image" />
      </div> -->
      <div class="upImgBox">
        <el-icon class="image-uploader-icon"><Plus /></el-icon>
        <div>{{ imgUpText }}</div>
      </div>
    </el-upload>
    <div class="upImgText">
      {{ imgText }}
    </div>
    <el-dialog v-model="dialogVisible">
      <!-- <p>11</p> -->
      <img :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
  // ElLoading
  import { ElMessage } from 'element-plus';
  import type { UploadFile, UploadFiles } from 'element-plus';
  interface Props {
    imageList?: any[]; // 回显图片地址
    action?: string; //   上传地址
    imgText?: string; //   文字可以不传
    imgUpText?: string; // 上传按钮的文字
    disabledType?: boolean; // 是否禁用上传
    limitNum?: number; // 允许上传图片的最大数量
  }
  const props = withDefaults(defineProps<Props>(), {
    imageList: () => [],
    action: '/activity/resource/uploadFile',
    imgText: '支持jpg/jpeg/png；文件大小不能超过2M；封面图建议尺寸940px*400px',
    imgUpText: '上传图片',
    disabledType: false,
    limitNum: 10,
  });

  const waitImageList = ref<any[]>([...props.imageList]);
  const dialogVisible = ref(false);
  const dialogImageUrl = ref('');
  watch(
    () => props.imageList,
    () => {
      waitImageList.value = props.imageList;
    },
  );

  // const emits = defineEmits(['imgSuccess']);
  const handleChange = (file: UploadFile, fileList: UploadFiles) => {
    console.log(file);
    console.log(fileList);
    const rawFile = file.raw as any;
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
      // const loadingInstance = ElLoading.service({
      //   text: '正在上传',
      //   background: 'rgba(0,0,0,.2)',
      // });
      // 请求接口上传图片到服务器
      // let requestURL = props.action;
      // request('post', requestURL, formData, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      //   .then(async (res: any) => {
      //     console.log(res);
      //     if (res.code == 0) {
      //       loadingInstance.close();
      //       let obj = {
      //         imgUrl: res.data.ossFile,
      //         raw: res.data,
      //       };
      //       emits('imgSuccess', obj);
      //       waitImageList.value = res.data.ossFile;
      //     } else {
      //       loadingInstance.close();
      //       ElMessage.warning(`文件上传失败`);
      //     }
      //   })
      //   .catch(() => {
      //     loadingInstance.close();
      //     ElMessage.warning(`文件上传失败`);
      //   });
    }
    return true;
  };

  const handlePictureCardPreview = (uploadFile: UploadFile) => {
    dialogImageUrl.value = uploadFile.url!;
    dialogVisible.value = true;
  };
  const handleRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
    console.log(uploadFile, uploadFiles);
  };
</script>

<style lang="scss" scoped>
  :deep().image-uploader {
    .image {
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
  :deep().el-upload--picture-card {
    width: 104px;
    height: 104px;
  }
  :deep().el-upload-list--picture-card .el-upload-list__item {
    width: 104px;
    height: 104px;
  }
  .el-icon.image-uploader-icon {
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
