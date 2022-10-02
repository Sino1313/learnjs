//创建
const s1 = "hello";
const s2 = new String("hello");
const s3 = 'hello';

console.log(s1 == s2);

console.log(typeof (s1));
console.log(typeof (s2));
console.log(s1 === s2);
console.log(s1 === s3);

//长度， 取字符
console.log(s1.length);
console.log(s1[0]);
console.log(s1[1]);
console.log(s1[s1.length - 1]);

//操作
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

const s4 = " world ";
console.log(s4.trim());
console.log(s4 + '.');
console.log(s4.trim() + '.');
console.log(s4.trimStart() + '.');
console.log(s4.trimEnd() + '.');

const s5 = "this is a test";
console.log(s5.split(' '));
console.log(s5.split('s'));

console.log(s1.repeat(10));
console.log(s1.concat(" " + s1));
console.log(s1 + ' ' + s1 + "world");

//查询
console.log(s1.includes("wr"));
console.log(s1.startsWith('h'));
console.log(s1.endsWith('o'));

console.log(s1.indexOf('o'));
console.log(s1);
console.log(s1.indexOf('l'));
console.log(s1.lastIndexOf('l'));

//字串
console.log(s1);
console.log(s1.substring(2));
console.log(s1.substring(2, 4));
console.log(s1.substring(0, 2) + s1.substring(2));

console.log(s1.slice(2));

//编码
console.log(s1.charCodeAt(0));
console.log('H'.charCodeAt(0));

console.log(String.fromCharCode(20016));

for(let i = 0x3400; i < 0x4400; ++i)
{
    console.log(String.fromCharCode(i));
}