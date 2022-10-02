//函数声明

function add(x, y)
{
    return x + y;
}

console.log(add(10, 10));


//函数表达式和使用
const f = function(x, y)
{
    return x + y;
}

console.log(typeof(f));
console.log(f(20, 20));

//对象函数
const fObject = new Function("x", "y", "return x + y");
console.log(fObject(30, 30));

//匿名函数
console.log(function(x, y)
{
    return x + y;
}(40, 40));

//匿名函数的箭头函数
const ff = function(x, y)
{
    return x + y;
}

const ffArrow = (x, y) => x + y;

console.log(ffArrow(80, 80));
