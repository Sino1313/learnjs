function m()
{
    console.log("m.start");
    return "hello world";
}

console.log("start");
var s = m();
console.log(s);
console.log("end");

console.log();

async function mm()
{
    console.log("mm.start");
    return Promise.resolve("hello world");
    //return "hello world";
}

console.log("start");
s = mm().then(function(data){console.log(data)});
console.log(s);
console.log("end");
console.log();

console.log("start");
s = await mm(); //一步=>同步
console.log(s);
console.log("end");