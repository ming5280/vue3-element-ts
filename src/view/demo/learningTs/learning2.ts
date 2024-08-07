// 练习1

// 使用泛型实现pick方法
function pick<T, U extends keyof T>(data: T, keys: U[]): { [K in U]: T[K] } {
  const temp: any = {};
  for (const key of keys) {
    temp[key] = data[key];
  }
  return temp;
}

// 这里 U extends keyof T 的意思是：把类型变量T的键取出来，继承到类型变量U上

// 这里 { [K in U]: T[K] } 的意思是：返回一个对象类型，并且这个对象的键为遍历U数组后的K类型变量，值则为T中对应该键的值。这里字面不太好解释，其实语法与js如出一辙很好理解。

const o = { a: 1, b: 2, c: 'hello' };
const u = pick(o, ['b', 'c']);
// 指针放上去可以看到u的类型正确, 而且在写数组keys时会有提示字段
console.log(u);
