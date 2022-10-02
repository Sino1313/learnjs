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


/*promise 

*/

function readfileAsync(filename)
{
    console.log("b.start");
    console.log("b.快速执行代码");

    const p = new Promise(function(resolve, reject)
    {
        console.log("b.promise start");
        setTimeout(function()
        {
            console.log("b.读的文件" + filename );
            resolve("文件数据");  //produce
            //reject("文件出错");
            console.log("b.读文件 " + filename);
        }, 5000);  
    })

    console.log("b.end");
    return p;
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
    readfileAsync(filename).then(
        function(data)  //consumer
        {
            console.log("获取文件数据：" + data);
        },
        function(error)
        {
            console.log("收到错误:" + error);
        }
    );
    c();
}

m();

