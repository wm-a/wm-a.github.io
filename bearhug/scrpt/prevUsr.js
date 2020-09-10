function prevUsr(){
    //Cookies: user,color,b1,b2,b3,b4,b5,b6,b7,theme
    let color = getCookie("color");
    let b1 = getCookie("b1");
    let b2 = getCookie("b2");
    let b3 = getCookie("b3");
    let b4 = getCookie("b4");
    let b5 = getCookie("b5");
    let b6 = getCookie("b6");
    let theme = getCookie("theme");

    let today = new Date();
    let m = String(today.getMonth()+1)
    let d= String(today.getDate()+1)
    let y= String(today.getFullYear())
    $.getJSON("../data/schedule.js", function (data){
        let ysched[] = sched[y]
        let msched[] = ysched[m]
        let tsched[] = msched[d]
        let tcol=tsched["clr"];
        let td=tsched["day"];
    });

}