declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
