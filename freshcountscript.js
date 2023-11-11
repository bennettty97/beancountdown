    const midCountDown = () => {
    const midCountDate = new Date('November 22, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = midCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("midday").innerText = textMidDay;
   document.getElementById("midhour").innerText = textMidHour;
   document.getElementById("midminute").innerText = textMidMinute;
}; 

midCountDown();

    const arrCountDown = () => {
    const arrCountDate = new Date('November 22, 2023 13:00:00').getTime();
    const now = new Date().getTime();
    const gap = arrCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("arrday").innerText = textMidDay;
   document.getElementById("arrhour").innerText = textMidHour;
   document.getElementById("arrminute").innerText = textMidMinute;
}; 

arrCountDown();

    const depCountDown = () => {
    const depCountDate = new Date('November 22, 2023 10:00:00').getTime();
    const now = new Date().getTime();
    const gap = depCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("depday").innerText = textMidDay;
   document.getElementById("dephour").innerText = textMidHour;
   document.getElementById("depminute").innerText = textMidMinute;
}; 

depCountDown();

    const airCountDown = () => {
    const airCountDate = new Date('November 22, 2023 7:00:00').getTime();
    const now = new Date().getTime();
    const gap = airCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("airday").innerText = textMidDay;
   document.getElementById("airhour").innerText = textMidHour;
   document.getElementById("airminute").innerText = textMidMinute;
}; 

airCountDown();

    const ubeCountDown = () => {
    const ubeCountDate = new Date('November 22, 2023 6:00:00').getTime();
    const now = new Date().getTime();
    const gap = ubeCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("ubeday").innerText = textMidDay;
   document.getElementById("ubehour").innerText = textMidHour;
   document.getElementById("ubeminute").innerText = textMidMinute;
}; 

ubeCountDown();

    const morCountDown = () => {
    const morCountDate = new Date('November 22, 2023 4:00:00').getTime();
    const now = new Date().getTime();
    const gap = morCountDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const textMidDay = Math.floor(gap / day);
    const textMidHour = Math.floor((gap % day) / hour)
    const textMidMinute = Math.floor((gap % hour) / minute);

   document.getElementById("morday").innerText = textMidDay;
   document.getElementById("morhour").innerText = textMidHour;
   document.getElementById("morminute").innerText = textMidMinute;
}; 

morCountDown();