import"./assets/styles-BdfMSs3y.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector(".form");t.addEventListener("submit",a);function a(f){f.preventDefault();const o=t.delay.value;let s;for(let e of t.state)e.checked===!0&&(s=e.value);new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(o):r(o)},o)}).then(e=>{i.show({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:5e3,messageColor:"#ffffff",backgroundColor:"green",close:!1,progressBar:!1})}).catch(e=>{i.show({message:`❌ Rejected promise in ${e}ms`,position:"topRight",timeout:5e3,messageColor:"#ffffff",backgroundColor:"red",close:!1,progressBar:!1})})}
//# sourceMappingURL=2-snackbar.js.map