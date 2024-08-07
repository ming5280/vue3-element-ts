/**
 * 1.ts的类型推断
 *   作用：
 *      类型约束（类型安全）：在编译阶段就能发现语法错误，可以有效减少低级错误。
 *      类型推断：当没有标明变量的类型时，编译器会根据一些简单的规则来推断你定义的变量的类型。
 *
 */

/**
 * （1）根据变量的值自动推导类型
 */
const num = 1;
const str = 'hello';

// 指针放上去会自动推断变量类型
console.log(num, str);

/**
 * （2）函数返回值自动推断
 */

// 指针放在函数上会简单推断出返回值的类型
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(1, 2);

// 函数中如果有条件分支，推导出来的返回值类型是所有分支的返回值类型的联合类型
function add2(num1: number, num2: number) {
  if (num1 === 1) {
    return null;
  }
  if (num1 === 2) {
    return undefined;
  }
  return num1 + num2;
}

// 说明ts的类型推导方式是懒推导，也就是说不会实际执行代码，如果实际执行了，c的类型是能确认为null的
const c = add2(1, 2);
console.log(c);

/**
 * （3）使用范型推导
 */

function merge(a: object, b: object) {
  return {
    ...a,
    ...b,
  };
}

const o1 = {
  name: 'hello',
};
const o2 = {
  age: 20,
};
// 按照上面写法，对象合并推导不出来，如果能推导出来u3应该等于 {name: string, age: number}
const o3 = merge(o1, o2);
console.log(o3);

// 这时可以借助范型来推导
function merge2<T, U>(a: T, b: U): T & U {
  return {
    ...a,
    ...b,
  };
}

const o4 = merge2(o1, o2);
console.log(o4);
