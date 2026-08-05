(() => {
  const KEY = 'dolly-book1a-hub-v1';
  const TERMS = [
    ['unknown','未知数','A letter standing for a number that is not yet known.','表示尚未知道的数的字母。'],
    ['variable','变量','A letter that can represent different values.','可以表示不同数值的字母。'],
    ['algebraic expression','代数式','Numbers, letters and operations written without an equals sign.','由数、字母和运算组成、通常不含等号的式子。'],
    ['equation','方程','A statement that two expressions are equal.','表示两个式子相等、含等号的式子。'],
    ['coefficient','系数','The numerical factor multiplying a variable.','乘在字母前面的数。'],
    ['like terms','同类项','Terms with the same variable part and powers.','字母部分和指数相同的项。'],
    ['substitution','代入','Replacing a variable with a given number.','把字母替换为给定数值。'],
    ['sequence','数列','A list of numbers arranged by a rule.','按一定规律排列的一列数。'],
    ['general term','通项','A formula for any term of a sequence.','表示数列任意一项的公式。'],
    ['balance principle','等式平衡原理','Doing the same operation to both sides keeps an equation true.','等式两边同时做相同运算，等式仍成立。'],
    ['inverse operation','逆运算','An operation that undoes another operation.','能抵消另一种运算的运算。'],
    ['distribute','分配律展开','Multiply a factor by every term inside brackets.','把括号外的因数乘到括号内每一项。']
  ];
  const isPractice = /Practice_Bank/.test(location.pathname);
  const stageName = isPractice ? 'practice' : 'learning';
  function hub(){ try { return JSON.parse(localStorage.getItem(KEY)||'{}'); } catch { return {}; } }
  function localProgress(){ try { const key=isPractice?'jsm1a-algebra-practice-v1':'jsm1a-ch3-4-v1',data=JSON.parse(localStorage.getItem(key)||'{}'); return isPractice?Object.keys(data.attempts||{}).length:(data.completed||[]).length; } catch { return 0; } }
  function sync(){ const completed=localProgress(),target=isPractice?48:14,status=completed>=target?'done':completed?'in_progress':'not_started',data=hub();data.units ||= {};data.units['1A34'] ||= {};const old=data.units['1A34'][stageName]||{};if(old.status!==status||old.localCompleted!==completed){data.units['1A34'][stageName]={...old,status,localCompleted:completed,target,source:'local-page-auto',updatedAt:new Date().toISOString()};localStorage.setItem(KEY,JSON.stringify(data));} const counter=document.querySelector('#bridge-count'),counterText=`${completed}/${target}`;if(counter&&counter.textContent!==counterText)counter.textContent=counterText;const statusEl=document.querySelector('#bridge-status'),statusText=status==='done'?'✓ 已同步':'同步中';if(statusEl&&statusEl.textContent!==statusText)statusEl.textContent=statusText;}
  function close(){document.querySelector('#bridge-drawer')?.classList.remove('open');document.querySelector('#bridge-backdrop')?.classList.remove('open')}
  function mount(){ if(document.querySelector('#dolly-bridge')) return;document.body.insertAdjacentHTML('beforeend',`<div class="bridge-bar" id="dolly-bridge"><a href="index.html">← Book 1A 中枢</a><span id="bridge-status">同步中</span><span id="bridge-count"></span><button type="button" id="bridge-glossary">术语表 Glossary</button><a href="report.html">学习地图</a></div><div class="glossary-backdrop" id="bridge-backdrop"></div><aside class="glossary-drawer" id="bridge-drawer"><div class="drawer-head"><div><p class="eyebrow">1A3–4 GLOSSARY</p><h2>双语术语表</h2></div><button class="close-btn" id="bridge-close">×</button></div><p style="font-size:12px;color:#68727f">English term · 中文释义 · concise meaning</p><div class="term-list">${TERMS.map(t=>`<article class="term"><h3>${t[0]} <span>· ${t[1]}</span></h3><p>${t[2]}</p><small>${t[3]}</small></article>`).join('')}</div></aside>`);document.querySelector('#bridge-glossary').onclick=()=>{document.querySelector('#bridge-drawer').classList.add('open');document.querySelector('#bridge-backdrop').classList.add('open')};document.querySelector('#bridge-close').onclick=close;document.querySelector('#bridge-backdrop').onclick=close;sync();document.addEventListener('click',()=>setTimeout(sync,250));new MutationObserver(()=>sync()).observe(document.body,{childList:true,subtree:true});setInterval(sync,4000); }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
