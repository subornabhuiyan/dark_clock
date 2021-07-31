setInterval(() =>{
    d= new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRot = 30*hTime + mTime/2 ;
    mRot = 6*mTime;
    sRot = 6*sTime;

    hr.style.transform = `rotateZ(`+hRot+`deg)`;
    min.style.transform = `rotateZ(`+mRot+`deg)`;
    sec.style.transform = `rotateZ(`+sRot+`deg)`;
},100)