<template>
  <div>
    <div>
      <el-button>返回</el-button>
    </div>
    <div class="form">
      <div class="z-title">
        <p>发布信息</p>
      </div>
    </div>
    <div style="margin-left: 80px">
      <CustomerForm
        ref="formRef"
        :model="model"
        :form="data"
        :labelWidth="'150px'"
        :labelPosition="'right'"
      >
        <template #thumbnail>
          <el-button :icon="'Upload'">上传文件</el-button>
        </template>
        <template #picture>
          <el-button :icon="'Upload'">上传文件</el-button>
        </template>
        <template #action>
          <el-button type="primary" @click="submitForm()">审核通过</el-button>
          <el-button @click="resetForm()">保存</el-button>
        </template>
      </CustomerForm>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CustomerForm from '/@/components/CustomerForm/index.vue';
  import type { FormItemProps } from '/@/components/CustomerForm/type';
  const data = reactive<FormItemProps[]>([
    {
      type: 'select',
      label: '所属板块',
      field: 'ssbk',
      placeholder: '请选择所属板块',
      rules: [
        {
          required: true,
          message: '请选择所属板块',
          trigger: 'change',
        },
      ],
      options: [
        {
          label: '指挥处',
          value: 1,
        },
      ],
      span: 10,
    },
    {
      type: 'select',
      label: '信息类型',
      field: 'xxlx',
      placeholder: '请选择信息类型',
      rules: [
        {
          required: true,
          message: '请选择信息类型',
          trigger: 'change',
        },
      ],
      options: [
        {
          label: '三会一课',
          value: 1,
        },
      ],
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '内容标题',
      field: 'nrbt',
      placeholder: '请输入内容标题',
      span: 10,
    },
    {
      type: 'select',
      label: '优先级',
      field: 'yxj',
      placeholder: '请选择优先级',
      rules: [
        {
          required: true,
          message: '请选择优先级',
          trigger: 'change',
        },
      ],
      options: [],
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '撰稿人姓名',
      field: 'cgrxm',
      placeholder: '请输入撰稿人姓名',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '撰稿人部门',
      field: 'cgrbm',
      rules: [
        {
          required: true,
          message: '请输入撰稿人部门',
          trigger: 'blur',
        },
      ],
      placeholder: '请输入撰稿人部门',
      span: 10,
    },
    {
      type: 'date',
      label: '撰稿时间',
      field: 'cgsj',
      dateType: 'datetime',
      rules: [
        {
          type: 'date',
          required: true,
          message: '请选择撰稿时间',
          trigger: 'change',
        },
      ],
      placeholder: '请选择撰稿时间',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '会议地点',
      field: 'hydd',
      placeholder: '请输入会议地点',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '会议主持',
      field: 'hyzc',
      placeholder: '请输入会议主持',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '记录人',
      field: 'jlr',
      placeholder: '请输入记录人',
      span: 10,
    },
    {
      type: 'date',
      label: '记录时间',
      field: 'jlsj',
      dateType: 'datetime',
      rules: [
        {
          type: 'date',
          required: true,
          message: '请选择记录时间',
          trigger: 'change',
        },
      ],
      placeholder: '请选择记录时间',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '出席人员',
      field: 'cxry',
      placeholder: '请输入出席人员',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '缺席人员',
      field: 'qxry',
      placeholder: '请输入缺席人员',
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '缺席人数',
      field: 'qxrs',
      placeholder: '请输入缺席人数',
      span: 10,
    },
    {
      type: 'select',
      label: '总队领导是否参与',
      field: 'zdldsfcy',
      placeholder: '请选择总队领导是否参与',
      rules: [
        {
          required: true,
          message: '请选择总队领导是否参与',
          trigger: 'change',
        },
      ],
      options: [
        {
          label: '是',
          value: 1,
        },
        {
          label: '否',
          value: 0,
        },
      ],
      span: 10,
    },
    {
      type: 'select',
      label: '会议类型',
      field: 'hylx',
      placeholder: '请选择会议类型',
      rules: [
        {
          required: true,
          message: '请选择会议类型',
          trigger: 'change',
        },
      ],
      options: [],
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '党员大会决议',
      field: 'dydhjy',
      placeholder: '请输入党员大会决议',
      span: 10,
    },
    {
      type: 'radio',
      label: '信息发布格式',
      field: 'xxfbgs',
      options: [
        { label: '图文并茂', value: '1' },
        { label: '仅文字', value: '2' },
        { label: '超链接', value: '3' },
      ],
      span: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: '图片说明',
      field: 'tpsm',
      placeholder: '请输入图片说明',
      span: 10,
    },
    {
      type: 'customer',
      slotName: 'picture',
      label: '图片',
      field: 'tp',
      span: 24,
    },
    {
      type: 'customer',
      slotName: 'thumbnail',
      label: '缩略图',
      field: 'slt',
      span: 24,
    },
    {
      type: 'input',
      inputType: 'textarea',
      label: '内容详情',
      field: 'nrxq',
      placeholder: '请输入内容详情',
      autosize: { minRows: 4, maxRows: 8 },
      span: 20,
    },
  ]);
  const model = reactive({
    ssbk: '',
    xxlx: '',
    nrbt: '',
    yxj: '',
    cgrxm: '',
    cgrbm: '',
    cgsj: '',
    hydd: '',
    hyzc: '',
    jlr: '',
    jlsj: '',
    cxry: '',
    qxry: '',
    qxrs: '',
    zdldsfcy: '',
    hylx: '',
    dydhjy: '',
    xxfbgs: '',
    tpsm: '',
    tp: '',
    slt: '',
    nrxq: '',
  });

  const formRef = ref();

  const submitForm = () => {
    if (formRef.value.validate()) {
      console.log(toRaw(model));
    }
  };

  const resetForm = () => {
    formRef.value.resetFields();
  };
</script>

<style lang="scss" scoped src="/@/styles/zhzg/z-common.scss"></style>
<style lang="scss" scoped src="/@/styles/zhzg/z-form.scss"></style>
<style lang="scss" scoped>
  .form {
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>
