const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;let o;function c(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=t}t.addEventListener("click",(function(){o=setInterval(c,1e3)})),e.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.841824d8.js.map
