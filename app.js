const bab=new URLSearchParams(location.search).get("bab")||1;
const words=data[bab];let i=0,front=true;
const text=document.getElementById("text");
const label=document.getElementById("label");
const count=document.getElementById("count");
const bar=document.getElementById("barFill");
function render(){
 if(words.length===0){text.innerText="Kosakata belum diisi";
 count.innerText="0 / 0";bar.style.width="0%";return;}
 const w=words[i];
 text.innerText=front?w.jp:w.id;
 label.innerText=front?"JEPANG":"INDONESIA";
 count.innerText=`${i+1} / ${words.length}`;
 bar.style.width=((i+1)/words.length*100)+"%";
}
function flip(){front=!front;render()}
function next(){if(i<words.length-1)i++;front=true;render()}
function prev(){if(i>0)i--;front=true;render()}
function shuffle(){i=Math.floor(Math.random()*words.length);front=true;render()}
function speak(){const u=new SpeechSynthesisUtterance(words[i].jp);
u.lang="ja-JP";speechSynthesis.speak(u);}
render();