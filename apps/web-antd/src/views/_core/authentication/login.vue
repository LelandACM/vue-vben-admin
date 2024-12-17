<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';
import type { BasicOption } from '@vben/types';

import { computed, h, markRaw, ref } from 'vue';

import { AuthenticationLogin, SliderCaptcha, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });

const authStore = useAuthStore();

const base64 = ref<any>('');
const uuid = ref<any>('');

const MOCK_TENANT_OPTIONS: BasicOption[] = [
  {
    label: 'XXX科技有限公司',
    value: 'tech',
  },
  {
    label: 'XXX设备有限公司',
    value: 'device',
  },
  {
    label: 'XXX集团有限公司',
    value: 'group',
  },
];

const MOCK_USER_OPTIONS: BasicOption[] = [
  {
    label: 'Super',
    value: 'vben',
  },
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'User',
    value: 'jack',
  },
];

const formSchema = computed((): VbenFormSchema[] => {
  return [
    {
      component: 'VbenSelect',
      // componentProps(_values, form) {
      //   return {
      //     'onUpdate:modelValue': (value: string) => {
      //       const findItem = MOCK_USER_OPTIONS.find(
      //         (item) => item.value === value,
      //       );
      //       if (findItem) {
      //         form.setValues({
      //           password: '123456',
      //           username: findItem.label,
      //         });
      //       }
      //     },
      //     options: MOCK_USER_OPTIONS,
      //     placeholder: $t('authentication.selectAccount'),
      //   };
      // },
      componentProps: {
        options: MOCK_TENANT_OPTIONS,
        placeholder: $t('authentication.selectTenant'),
      },
      fieldName: 'selectTenant',
      label: $t('authentication.selectTenant'),
      rules: z
        .string()
        .min(1, { message: $t('authentication.selectTenant') })
        .optional()
        .default('tech'),
    },
    {
      component: 'VbenSelect',
      // componentProps(_values, form) {
      //   return {
      //     'onUpdate:modelValue': (value: string) => {
      //       const findItem = MOCK_USER_OPTIONS.find(
      //         (item) => item.value === value,
      //       );
      //       if (findItem) {
      //         form.setValues({
      //           password: '123456',
      //           username: findItem.label,
      //         });
      //       }
      //     },
      //     options: MOCK_USER_OPTIONS,
      //     placeholder: $t('authentication.selectAccount'),
      //   };
      // },
      componentProps: {
        options: MOCK_USER_OPTIONS,
        placeholder: $t('authentication.selectAccount'),
      },
      fieldName: 'selectAccount',
      label: $t('authentication.selectAccount'),
      rules: z
        .string()
        .min(1, { message: $t('authentication.selectAccount') })
        .optional()
        .default('admin'),
    },
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: $t('authentication.usernameTip'),
      },
      dependencies: {
        trigger(values, form) {
          if (values.selectAccount) {
            const findUser = MOCK_USER_OPTIONS.find(
              (item) => item.value === values.selectAccount,
            );
            if (findUser) {
              form.setValues({
                password: 'admin123',
                username: findUser.value,
              });
            }
          }
        },
        triggerFields: ['selectAccount'],
      },
      fieldName: 'username',
      label: $t('authentication.username'),
      rules: z.string().min(1, { message: $t('authentication.usernameTip') }),
    },
    {
      component: 'VbenInputPassword',
      componentProps: {
        placeholder: $t('authentication.password'),
      },
      fieldName: 'password',
      label: $t('authentication.password'),
      rules: z.string().min(1, { message: $t('authentication.passwordTip') }),
    },
    {
      component: 'VbenInput',
      componentProps(_values, form) {
        return {
          'onUpdate:modelValue': (_value: string) => {
            form.setValues({
              uuid: uuid.value,
            });
          },
          placeholder: $t('authentication.captcha'),
        };
      },
      fieldName: 'code',
      label: $t('authentication.captcha'),
      rules: z.string().min(1, { message: $t('authentication.captchaTip') }),
      suffix: () => {
        return h(
          'div',
          {
            class: 'flex h-[38px]',
          },
          [
            h('div', {
              class: 'w-[100px] h-[100%] rounded-r-[10px]',
              style: {
                backgroundImage: `url(${base64.value})`,
                backgroundSize: '100% 100%',
              },
              onClick: () => {
                fetchCaptcha();
              },
            }),
          ],
        );
      },
    },
    {
      component: 'VbenInput',
      fieldName: 'uuid',
      dependencies: {
        show: false,
        triggerFields: ['uuid'],
      },
    },
    {
      component: markRaw(SliderCaptcha),
      fieldName: 'captcha',
      rules: z.boolean().refine((value) => value, {
        message: $t('authentication.verifyRequiredTip'),
      }),
    },
  ];
});

async function fetchCaptcha() {
  const res = await authStore.fetchCaptcha();
  base64.value = res.img;
  uuid.value = res.uuid;
}

fetchCaptcha();
</script>

<template>
  <AuthenticationLogin
    :form-schema="formSchema"
    :loading="authStore.loginLoading"
    @submit="authStore.authLogin"
  />
</template>
