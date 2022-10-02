function log(s)
{
    var d = new Date();
    console.log(d.toLocaleString() + '.' + d.getMilliseconds() + ' ' + s);
}

function oneLoop()
{
    log("loop start");
    log("loop doing things....");
    setTimeout(() =>
    {
        log("callback");
    }, 0);
    log("loop end");
}

oneLoop();