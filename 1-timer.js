import"./assets/styles-BdfMSs3y.js";import{f as m,i as h}from"./assets/vendor-BbbuE1sJ.js";const o=document.getElementById("str-btn"),d=document.getElementById("datetime-picker"),p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(l=t[0],o.disabled=!1):(h.show({title:"Alert",message:"Please choose a date in the future",position:"center",timeout:0,closeOnEscape:!0,closeOnClick:!0,titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"red",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff"}),o.disabled=!0)}};m("#datetime-picker",p);let l;function y(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:f}}const C=document.querySelector(".field span[data-days]"),b=document.querySelector(".field span[data-hours]"),g=document.querySelector(".field span[data-minutes]"),S=document.querySelector(".field span[data-seconds]");function e(t){return String(t).padStart(2,"0")}function k(t){d.disabled=!0,o.disabled=!0;const i=setInterval(()=>{const n=t-Date.now(),{days:r,hours:c,minutes:s,seconds:a}=y(n);C.textContent=e(r),b.textContent=e(c),g.textContent=e(s),S.textContent=e(a),n<1e3&&(clearInterval(i),d.disabled=!1)},1e3)}o.addEventListener("click",()=>k(l));
//# sourceMappingURL=1-timer.js.map