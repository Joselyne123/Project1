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