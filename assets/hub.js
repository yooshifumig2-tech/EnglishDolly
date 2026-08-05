(() => {
  const STORE = "dolly-book1a-hub-v1";
  const UNITS = {
    "1A0": { id:"1A0", en:"Revision on Fundamental Arithmetic", zh:"基础算术复习", short:"算术、倍数、因数、分数与小数", learn:"https://fumi1jihehe.netlify.app/", practice:"https://eclectic-donut-2958e4.netlify.app/", external:true },
    "1A1": { id:"1A1", en:"Basic Mathematics", zh:"基础数学", short:"质因数、H.C.F./L.C.M.、括号与整除", learn:"https://fumi1jihe.netlify.app/", practice:"https://1shulie.netlify.app/", external:true },
    "1A2": { id:"1A2", en:"Directed Numbers", zh:"有向数与数轴", short:"正负数、数轴、有向数运算", learn:"https://sparkling-paletas-c8c23a.netlify.app/", practice:"https://dollylearnmath002.netlify.app/", external:true },
    "1A34": { id:"1A34", en:"Algebra & Linear Equations", zh:"代数与一元一次方程", short:"代数语言、数列与一元一次方程", learn:"/Algebra_Linear_Equations_Interactive_Learning.html", practice:"/Algebra_Linear_Equations_Practice_Bank.html", external:false }
  };
  const GLOSSARY = [
    ["1A0","operation","四则运算","A calculation using addition, subtraction, multiplication or division.","+、−、×、÷ 所进行的运算。"],
    ["1A0","order of operations","运算次序","The agreed order for calculating an expression: brackets, multiplication/division, then addition/subtraction.","计算时的固定顺序：括号 → 乘除 → 加减。"],
    ["1A0","multiple","倍数","A number obtained by multiplying a whole number by another whole number.","一个整数乘以另一个整数得到的数。"],
    ["1A0","factor","因数","A whole number that divides another number exactly.","能整除另一个数的整数。"],
    ["1A0","L.C.M.","最小公倍数","The least positive number that is a multiple of every number in a set.","一组数共有倍数中最小的正数。"],
    ["1A0","H.C.F.","最大公因数","The greatest positive factor shared by every number in a set.","一组数公有因数中最大的正数。"],
    ["1A0","proper fraction","真分数","A fraction whose numerator is smaller than its denominator.","分子小于分母的分数。"],
    ["1A0","improper fraction","假分数","A fraction whose numerator is greater than or equal to its denominator.","分子大于或等于分母的分数。"],
    ["1A0","mixed number","带分数","A number written as a whole number together with a proper fraction.","整数与真分数合写的数。"],
    ["1A0","reciprocal","倒数","The number that gives 1 when multiplied by the original number.","与原数相乘等于 1 的数。"],
    ["1A1","prime number","质数","A whole number greater than 1 with exactly two positive factors: 1 and itself.","大于 1，且只有 1 和本身两个正因数的整数。"],
    ["1A1","composite number","合数","A whole number greater than 1 that has more than two positive factors.","大于 1 且因数超过两个的整数。"],
    ["1A1","index","指数","The small raised number showing how many times a base is multiplied by itself.","右上角的小数，表示底数重复相乘的次数。"],
    ["1A1","base","底数","The repeated factor in a power, for example 6 is the base in 6⁵.","幂中重复相乘的数，例如 6⁵ 中的 6。"],
    ["1A1","prime factorization","质因数分解","Writing a number as a product of prime numbers.","把一个数写成若干质数相乘的形式。"],
    ["1A1","divisibility","整除性","A property describing when one integer divides another with no remainder.","一个整数除以另一个整数没有余数的性质。"],
    ["1A1","brackets","括号","Symbols used to group operations that must be completed first.","把必须优先完成的运算组合起来的符号。"],
    ["1A2","directed number","有向数","A number with a positive or negative sign that describes direction as well as size.","带正号或负号、同时表示方向和大小的数。"],
    ["1A2","positive number","正数","A number greater than zero, written with + or no sign.","大于 0 的数，可写 + 或省略正号。"],
    ["1A2","negative number","负数","A number less than zero, written with a minus sign.","小于 0、带负号的数。"],
    ["1A2","opposite numbers","相反数","Two numbers that are the same distance from 0 on a number line but in opposite directions.","数轴上到 0 的距离相同、方向相反的两个数。"],
    ["1A2","number line","数轴","A straight line with a chosen origin, unit length and positive direction for representing numbers.","规定原点、单位长度和正方向的直线。"],
    ["1A2","absolute value","绝对值","The distance of a number from 0 on the number line.","一个数在数轴上到原点的距离。"],
    ["1A2","subtract","减去","To take one quantity away from another; subtracting a number equals adding its opposite.","从一个量中去掉另一个量；减去一个数等于加上它的相反数。"],
    ["1A34","unknown","未知数","A letter standing for a number that is not yet known.","表示尚未知道的数的字母。"],
    ["1A34","variable","变量","A letter that can represent different values in a relationship.","在关系中可以取不同数值的字母。"],
    ["1A34","algebraic expression","代数式","Numbers, letters and operations written without an equals sign.","由数、字母和运算符号组成、通常不含等号的式子。"],
    ["1A34","equation","方程","A statement that two expressions are equal, containing an equals sign.","表示两个式子相等、含等号的式子。"],
    ["1A34","coefficient","系数","The numerical factor multiplying a variable, such as 5 in 5x.","乘在字母前面的数，如 5x 中的 5。"],
    ["1A34","like terms","同类项","Terms with exactly the same variable part and powers.","字母部分和指数完全相同的项。"],
    ["1A34","substitution","代入","Replacing a variable with a given number and then calculating.","把字母换成给定数值再计算。"],
    ["1A34","sequence","数列","A list of numbers arranged according to a rule.","按某个规律排列的一列数。"],
    ["1A34","general term","通项","A formula that gives any term of a sequence from its position.","根据项数位置表示数列任意一项的公式。"],
    ["1A34","balance principle","等式平衡原理","Doing the same operation to both sides keeps an equation true.","等式两边同时进行相同运算，等式仍成立。"],
    ["1A34","inverse operation","逆运算","An operation that undoes another operation, such as addition and subtraction.","能抵消另一种运算的运算，例如加法和减法。"],
    ["1A34","transpose","移项","A shorthand school method for moving a term across an equals sign while changing its operation.","把一项从等号一边移到另一边并改变运算符号的学校写法。"],
    ["1A34","distribute","分配律展开","Multiplying a factor by every term inside brackets: a(b+c)=ab+ac.","把括号外的因数乘到括号内每一项：a(b+c)=ab+ac。"],
    ["1A34","denominator","分母","The bottom number in a fraction; it cannot be zero.","分数下面的数，不能为 0。"]
  ].map(([unit,en,zh,definition,cn])=>({unit,en,zh,definition,cn}));
  const q = (s,root=document) => root.querySelector(s);
  const escape = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const now = () => new Date().toISOString();
  function blank(){ return { version:1, units:{}, reflections:{}, chats:{}, terms:{}, endpoint:"" }; }
  function load(){ try { return {...blank(), ...JSON.parse(localStorage.getItem(STORE)||"{}")}; } catch { return blank(); } }
  let state = load();
  function save(){ localStorage.setItem(STORE,JSON.stringify(state)); }
  function stage(unitId,kind){ return state.units?.[unitId]?.[kind] || {status:"not_started",updatedAt:null,source:""}; }
  function setStage(unitId,kind,status,extra={}){ state.units[unitId] ||= {}; state.units[unitId][kind]={...stage(unitId,kind),status,updatedAt:now(),...extra}; save(); return state.units[unitId][kind]; }
  function stageDone(unit,kind){ return stage(unit,kind).status === "done"; }
  function stageStarted(unit,kind){ return stage(unit,kind).status !== "not_started"; }
  function progress(){ const ids=Object.keys(UNITS), stages=ids.flatMap(id=>[stage(id,"learning"),stage(id,"practice")]); return {done:stages.filter(x=>x.status==="done").length,started:stages.filter(x=>x.status!=="not_started").length,total:stages.length,unitsDone:ids.filter(id=>stageDone(id,"learning")&&stageDone(id,"practice")).length}; }
  function unitFromUrl(){ return new URLSearchParams(location.search).get("unit") || ""; }
  function kindFromUrl(){ return new URLSearchParams(location.search).get("mode") || ""; }
  function shortDate(value){ return value ? new Date(value).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric"}) : "尚未开始"; }
  function nextStage(){ for(const id of Object.keys(UNITS)){ if(!stageDone(id,"learning")) return {unit:id,kind:"learning"}; if(!stageDone(id,"practice")) return {unit:id,kind:"practice"}; } return null; }
  function unitName(id){const u=UNITS[id];return u?`${u.id} · ${u.en}`:"Book 1A";}
  function target(id,kind){ return `study.html?unit=${encodeURIComponent(id)}&mode=${encodeURIComponent(kind)}`; }
  function header(active=""){ return `<header class="hub-top hub-shell"><a class="hub-brand" href="index.html"><i>F</i> DOLLY · BOOK 1A</a><nav class="hub-nav"><a class="${active==='home'?'active':''}" href="index.html">导航 · Home</a><a class="${active==='report'?'active':''}" href="report.html">学习地图 · Map</a><a class="${active==='orid'?'active':''}" href="orid.html">ORID 复盘</a></nav><div class="hub-top-actions"><button class="hub-action" data-glossary>术语表 Glossary</button><button class="hub-action" data-fumi>FUMI AI</button></div></header>`; }
  function mountCommon(active){
    const holder=q("[data-hub-header]"); if(holder) holder.innerHTML=header(active);
    document.body.classList.add("hub-body");
    document.addEventListener("click",event=>{ if(event.target.closest("[data-glossary]")) openGlossary(); if(event.target.closest("[data-fumi]")) setFumiOpen(true); });
    mountGlossary(); mountFumi();
  }
  function mountGlossary(){ if(q("#glossary-drawer")) return; document.body.insertAdjacentHTML("beforeend",`<div class="glossary-backdrop" id="glossary-backdrop"></div><aside class="glossary-drawer" id="glossary-drawer" aria-hidden="true"><div class="drawer-head"><div><p class="eyebrow">BILINGUAL GLOSSARY</p><h2>术语表 · Glossary</h2></div><button class="close-btn" type="button" data-close-glossary>×</button></div><input class="glossary-search" id="glossary-search" placeholder="Search an English or Chinese term…"><div class="glossary-filter" id="glossary-filter"></div><div class="term-list" id="term-list"></div></aside>`); q("#glossary-backdrop").onclick=closeGlossary; q("[data-close-glossary]").onclick=closeGlossary; q("#glossary-search").oninput=renderGlossary; renderGlossary(); }
  function openGlossary(){ q("#glossary-drawer").classList.add("open"); q("#glossary-backdrop").classList.add("open"); q("#glossary-drawer").setAttribute("aria-hidden","false"); renderGlossary(); }
  function closeGlossary(){ q("#glossary-drawer").classList.remove("open"); q("#glossary-backdrop").classList.remove("open"); q("#glossary-drawer").setAttribute("aria-hidden","true"); }
  function renderGlossary(){ const current=unitFromUrl(), search=(q("#glossary-search")?.value||"").trim().toLowerCase(), selected=q("#glossary-filter")?.dataset.unit || (current && UNITS[current] ? current : "all"); const filters=[['all','全部 All'],...Object.values(UNITS).map(u=>[u.id,u.id])]; q("#glossary-filter").innerHTML=filters.map(([id,label])=>`<button type="button" class="filter-btn ${selected===id?'active':''}" data-term-filter="${id}">${label}</button>`).join(""); q("#glossary-filter").dataset.unit=selected; q("#glossary-filter").querySelectorAll("[data-term-filter]").forEach(btn=>btn.onclick=()=>{q("#glossary-filter").dataset.unit=btn.dataset.termFilter;renderGlossary();}); const list=GLOSSARY.filter(t=>(selected==='all'||t.unit===selected)&&(!search||`${t.en} ${t.zh} ${t.definition} ${t.cn}`.toLowerCase().includes(search))); q("#term-list").innerHTML=list.length?list.map(t=>{const key=`${t.unit}:${t.en}`,known=Boolean(state.terms?.[key]);return `<article class="term"><h3>${escape(t.en)} <span>· ${escape(t.zh)}</span></h3><p>${escape(t.definition)}</p><small>${escape(t.cn)}</small><button type="button" class="term-action ${known?'known':''}" data-term-known="${escape(key)}">${known?'✓ 已掌握 · Known':'标记已掌握 · Mark known'}</button></article>`}).join(""):`<p>没有找到匹配术语。No matching term.</p>`; q("#term-list").querySelectorAll("[data-term-known]").forEach(btn=>btn.onclick=()=>{state.terms ||= {};const key=btn.dataset.termKnown;state.terms[key]=!state.terms[key];save();renderGlossary();}); }
  function fumiContext(){ const unit=unitFromUrl(), kind=kindFromUrl(), u=UNITS[unit]; const record = u ? {unit:u.id,topic:u.en,topicZh:u.zh,mode:kind,stage:stage(unit,kind),glossary:GLOSSARY.filter(t=>t.unit===unit).slice(0,12).map(t=>({en:t.en,zh:t.zh,meaning:t.cn}))} : {overview:"Dolly Math Book 1A unified dashboard",progress:progress()}; return {key:`${unit||'home'}:${kind||location.pathname}`,label:u?`${u.id} · ${kind==='practice'?'Practice':'Learning'} · ${u.zh}`:"Book 1A 学习中枢",canReveal:Boolean(u&&stageDone(unit,kind)),context:record}; }
  function endpoint(){ return location.protocol==='file:' ? String(state.endpoint||"").trim() : `${location.origin}/.netlify/functions/ai-tutor`; }
  function mountFumi(){ if(q("#hub-fumi")) return; document.body.insertAdjacentHTML("beforeend",`<button class="fumi-fab" id="fumi-fab" type="button">✦ 问 FUMI AI</button><aside class="fumi-panel" id="hub-fumi" aria-hidden="true"><header class="fumi-head"><div class="fumi-mark">F</div><div><b>FUMI AI · Book 1A</b><span id="fumi-status">章节助教已就绪</span></div><button class="close-btn" type="button" id="fumi-close">×</button></header><div class="fumi-context" id="fumi-context"></div><div class="fumi-messages" id="fumi-messages"></div><div class="fumi-quick" id="fumi-quick"></div><form class="fumi-compose" id="fumi-form"><textarea id="fumi-input" maxlength="600" placeholder="Tell me where you are stuck… / 说说你卡在哪一步"></textarea><button id="fumi-send">发送</button></form><div class="fumi-settings" id="fumi-settings"><span>本地 HTML 才需填写已部署的函数地址（不是 API Key）。</span><input id="fumi-endpoint" placeholder="https://your-site.netlify.app/.netlify/functions/ai-tutor"><button type="button" id="fumi-save-endpoint">保存地址</button></div></aside>`); q("#fumi-fab").onclick=()=>setFumiOpen(!q("#hub-fumi").classList.contains("open")); q("#fumi-close").onclick=()=>setFumiOpen(false); q("#fumi-form").onsubmit=e=>{e.preventDefault();sendFumi(q("#fumi-input").value)}; q("#fumi-input").onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();q("#fumi-form").requestSubmit();}}; q("#fumi-quick").onclick=e=>{const b=e.target.closest("[data-fumi-prompt]");if(b)sendFumi(b.dataset.fumiPrompt)}; q("#fumi-save-endpoint").onclick=()=>{const value=q("#fumi-endpoint").value.trim();if(value&&!/^https?:\/\//i.test(value)){alert("地址需以 http:// 或 https:// 开头");return;}state.endpoint=value;save();renderFumi();}; }
  function setFumiOpen(open){q("#hub-fumi").classList.toggle("open",open);q("#hub-fumi").setAttribute("aria-hidden",String(!open));if(open){renderFumi();setTimeout(()=>q("#fumi-input").focus(),120);}}
  let fumiBusy=false;
  function quick(ctx){ if(!ctx.canReveal) return ["只提示第一步","解释这个术语","检查我的思路","给我一个小例子"]; return ["总结本单元","完整讲解一个例题","给我一道变式","制定复习计划"]; }
  function renderFumi(){ const ctx=fumiContext(), messages=state.chats[ctx.key]||[]; q("#fumi-context").innerHTML=`<b>${escape(ctx.label)}</b><br>${ctx.canReveal?'本阶段已完成：可以讨论完整解法与复盘。':'保护模式：只给分步提示，不公布未提交题目的答案。'}`; q("#fumi-messages").innerHTML=messages.length?messages.map(m=>`<div class="fumi-msg ${m.role==='user'?'user':''}">${escape(m.content)}</div>`).join(""):`<div class="fumi-msg system">我是 FUMI AI。先说出你正在学的术语、题意或卡住的步骤；我会用英文术语配中文解释，一次引导一步。</div>`;q("#fumi-quick").innerHTML=quick(ctx).map(x=>`<button type="button" data-fumi-prompt="${escape(x)}">${escape(x)}</button>`).join("");q("#fumi-status").textContent=fumiBusy?'正在组织提示…':endpoint()?'AI 已配置':'需要配置 AI 函数';q("#fumi-settings").style.display=location.protocol==='file:'?'block':'none';q("#fumi-endpoint").value=state.endpoint||"";requestAnimationFrame(()=>q("#fumi-messages").scrollTop=q("#fumi-messages").scrollHeight); }
  async function requestFumi(message,ctx,history){ const url=endpoint();if(!url)throw new Error("请先填写已部署的 AI 函数地址。");const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),30000);try{const res=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message,context:{...ctx.context,canReveal:ctx.canReveal},history:history.slice(-8),purpose:"tutor"}),signal:controller.signal});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||`AI 服务暂不可用（${res.status}）`);if(!data.reply)throw new Error("AI 返回不完整");return data;}catch(error){if(error.name==='AbortError')throw new Error("AI 响应超时，请稍后再试。");throw error;}finally{clearTimeout(timer);}}
  async function sendFumi(message){ const value=String(message||"").trim().slice(0,600);if(!value||fumiBusy)return;const ctx=fumiContext(),history=[...(state.chats[ctx.key]||[])];state.chats[ctx.key]=[...history,{role:'user',content:value}].slice(-20);save();q("#fumi-input").value='';fumiBusy=true;q("#fumi-send").disabled=true;renderFumi();try{const result=await requestFumi(value,ctx,history),tail=result.nextAction?`\n\n下一步：${result.nextAction}`:'';state.chats[ctx.key]=[...state.chats[ctx.key],{role:'assistant',content:`${result.reply}${tail}`}].slice(-20);}catch(error){state.chats[ctx.key]=[...state.chats[ctx.key],{role:'assistant',content:`连接失败：${error.message}`}].slice(-20);}finally{save();fumiBusy=false;q("#fumi-send").disabled=false;renderFumi();}}
  function download(name,payload){ const a=document.createElement('a'),blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),800); }
  window.DollyHub={UNITS,GLOSSARY,load,save,stage,setStage,stageDone,stageStarted,progress,nextStage,target,unitFromUrl,kindFromUrl,unitName,shortDate,mountCommon,download,escape,renderFumi,setFumiOpen};
})();
