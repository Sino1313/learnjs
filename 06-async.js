//同步(sync)运行： 顺序执行
//同步运行时间过长，存在阻塞的问题（blocking)
//blocking原因：读写文件的操作，系统进程在处理（耗时），js进程等待
//async 1）js进程不等 2）建立监听机制（回调）

function a()
{
    console.log("a.start");
    console.log("a.快速执行代码");
    console.log("a.end");
}

function readfileAsync(filename, fCallback)
{
    console.log("b.start");
    console.log("b.快速执行代码");
    setTimeout(function()
    {
        console.log("b.耗时的代码");
        fCallback("文件数据");
    }, 5000);

    console.log("b.end");
}

function c()
{
    console.log("c.start");
    console.log("c.快速执行代码");
    console.log("c.end");
}

function m()
{
    a();
    const filename = "aa.txt";
    readfileAsync(filename, function(data)
    {
        console.log("获取文件数据:" + data);
    });
    c();
}

m();

