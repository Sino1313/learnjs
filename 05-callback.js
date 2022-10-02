function add(x, y) {
    return x + y;
}

var v = add(10, 10);
console.log(v);

//函数的使用： 1）函数的定义（定义规则） 2）函数的使用，给参数赋值，按规则执行

const fAdd = function (x, y) {
    return x + y;
}

const fMinus = function (x, y) {
    return x - y;
}

v = fAdd(20, 20);
console.log(v);

const m = function (x, y, fCallback) //函数m的参数里面包含了函数变量， 在m实现里面调用了f。 f为回调函数
{
    return fCallback(x, y);
}

v = m(30, 30, fAdd);
console.log(v);

v = m(40, 40, fMinus);
console.log(v);

v = m(50, 50, function (x, y) { return x * y });
console.log(v);

v = m(4, 2, (x, y) => x / y);
console.log(v);

//时序
//函数都是同步：顺序执行
//如果有回调函数，那么这个回调函数在方法中也是顺序执行

//回调函数的实现的代码中可，以访问主函数的变量
const mm = function (r)
{
    const pi = 3.14;
    var v = m(r, r, (x, y) => pi * x * y);
    console.log(v);
}

mm(10);