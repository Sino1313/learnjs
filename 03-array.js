//数组的创建、长度
const a1 = [1, 23, 4, 5, 5, 6, 6];
const a2 = ["cat", "dog", "banana", "apple"];

console.log(a1.length);
//a1.length = 3;
console.log(a1);
console.log(a1.length);

console.log(a2);
a2.sort();
console.log(a2);

console.log(a1);

//元素为数字的数据，排序依然按照数字字母排序
a1.sort(mySort);

console.log(a1);

function mySort(x, y)
{
    return x - y;
}

a1.sort(function (x, y) { return x - y; });

a1.sort((x, y) =>  y - x);
console.log(a1);

//查询
console.log(a2);
console.log(a2.includes("dog"));
console.log(a2.indexOf("dog"));

console.log(a1);
console.log(a1.find((x) => x < 10));
console.log(a1.findIndex((x) => x > 10));


//赋值
const b = new Array(100).fill(100, 0, 10);
b.fill(200, 10, 20);
console.log(b);

const c = [1, 2, 3, 4, 5];

const d  = c.map((x) => x * x);  //map: y-x y = x * x
console.log(c);
console.log(d);

const d1 = c.filter((x) => x > 3);  //过滤元素
console.log(d1);

console.log(d);
console.log(d.reverse());

a2.push("egg");
console.log(a2);
a2.pop();
console.log(a2);

const s = "this is a test";
const aa = s.split(' ');
console.log(aa);
console.log(aa.join(' '));  //split / join 互为相反 string <-> array

console.log(aa.concat(aa, "a test", ["aa", "bb"]));

console.log(aa);
console.log(aa.slice(1, 3)); //slice(startIndex, endIndex)

console.log(aa.splice(2, 2)); //splice(startIndex, length)
console.log(aa);

//a2.push("dog");
a2.push("egg");
console.log(a2);
a2.copyWithin(3, 0, 2); //copyWithin(targetIndex, start, length)
console.log(a2);

//遍历
a2.forEach((x) => (console.log(x))); //匿名函数里定义动作

console.log(a1.every((x) => x > 10)); //every,所有元素都满足，才返回true

console.log(a1.some((x) => x > 10)); //some，只要一个元素满足，返回true

const k = a1.keys();
for(let x of k)
{
    console.log(x);
}

const e = a1.entries();
for(let x of e)
{
    console.log(x);
}