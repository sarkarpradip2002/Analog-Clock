function logic(){
    let input=document.getElementById('put').value;
    
    let d=new Date();
    
    if(input==0)
    {
        var h=d.getHours();
        
    }
    else{
        let diff=Math.abs(input-d.getHours());
        if(input<d.getHours())
        {
            h=d.getHours()-diff;
        }
        else{
            h=d.getHours()+diff;
        }
        
    }
    var m=d.getMinutes();
    var s=d.getSeconds();
    
    let hrotation=30*h + m/2;
    let mrotation=6*m + s/10;
    let srotation=6*s;
    
    let hour=document.getElementById('hour');
    let minute=document.getElementById('minute');
    let second=document.getElementById('second');
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    document.getElementById('currenttime').innerHTML=d;
}
    setInterval(logic,1000);
