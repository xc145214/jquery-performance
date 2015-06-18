/**
 * Created by Administrator on 2015/6/18.
 */

//lets display the current time
var d, h, m, s, color, clock;
function displayTime() {
    d = new Date();//new date Object
    year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();


    //add Zero to the left of the numbers if they are single digits
    if (h <= 9) h = '0' + h
    if (m <= 9) m = '0' + m
    if (s <= 9) s = '0' + s

    color = "#" + h + m + s;
    clock = year + "年" + month + "月" + day + "日" + h + ":" + m + ":" + s

    //set background color
    document.body.style.background = color;

    //set time
    document.getElementById("hex").innerHTML = clock


    //retrigger the function every second
    setTimeout(displayTime, 1000);
}
//call the function
displayTime();
