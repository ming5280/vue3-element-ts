<script setup lang="ts">
  import type { FormInstance } from 'element-plus';
  import FormItem from './FormItem';
  import type { FormItemProps } from './type';

  type LabelPosition = 'left' | 'right' | 'top';

  interface Props {
    model: any;
    inline?: boolean;
    labelPosition?: LabelPosition;
    labelWidth?: number | string;
    form: FormItemProps[];
    editable?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    model: {},
    inline: false,
    labelPosition: 'right',
    labelWidth: '120px',
    editable: false,
    form: () => [],
  });

  const elFormRef = ref<FormInstance>();

  // 表单校验
  const validate = async () => {
    if (!elFormRef.value) return;
    return await elFormRef.value.validate();
  };

  // 表单重置
  const resetFields = () => {
    if (!elFormRef.value) return;
    elFormRef.value.resetFields();
  };

  defineExpose({
    validate,
    resetFields,
  });
</script>

<template>
  <el-form
    ref="elFormRef"
    :model="props.model"
    :inline="props.inline"
    :label-position="props.labelPosition"
    :label-width="props.labelWidth"
  >
    <el-row :gutter="24">
      <template v-for="item in props.form" :key="item.field">
        <el-col :span="item.span ?? 8">
          <el-form-item :label="item.label" :prop="item.field" :rules="item.rules ?? []">
            <FormItem :formItem="item" :model="props.model" :editable="props.editable" />
          </el-form-item>
        </el-col>
      </template>

      <el-col :span="12">
        <el-form-item>
          <slot name="action"></slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped></style>
