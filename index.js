function formCal(){
    var calendar=document.getElementById("birth").value;
    var day=new Date(calendar);
    dd=day.getDate();
    yyyy= day.getFullYear();
    mm=day.getMonth();
    mm=mm+1;
    // console.log(dd);
    // console.log(yyyy);
    // console.log(mm);
    var gender=document.getElementById("gender").value;
    console.log(gender);
    var c=(yyyy-1)/100 +1;
    var cc= parseFloat(c);
    var day=parseFloat( ( (cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    var day=(day.toFixed(0));
    // console.log(day);