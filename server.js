const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

res.writeHead(200,{
"Content-Type":"text/html; charset=utf-8"
});

res.end(`

<!DOCTYPE html>
<html lang="th">

<head>

<meta charset="UTF-8">

<title>Cyber Server</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Segoe UI,sans-serif;
}

body{

height:100vh;

display:flex;
justify-content:center;
align-items:center;

overflow:hidden;

background:#05010d;

}

/* Animated Background */

body::before{

content:"";

position:absolute;

width:300%;
height:300%;

background:
radial-gradient(circle,#7c3aed33 0%,transparent 20%),
radial-gradient(circle,#00ffff22 0%,transparent 20%),
radial-gradient(circle,#ff00ff22 0%,transparent 18%);

background-size:300px 300px;

animation:bgMove 25s linear infinite;

}

@keyframes bgMove{

0%{
transform:translate(-10%,-10%) rotate(0deg);
}

100%{
transform:translate(-30%,-30%) rotate(360deg);
}

}

/* Scan Line */

body::after{

content:"";

position:absolute;

width:100%;
height:100%;

background:
linear-gradient(
transparent 95%,
rgba(255,255,255,.03) 100%
);

background-size:100% 6px;

animation:scan .2s linear infinite;

pointer-events:none;

}

@keyframes scan{

0%{transform:translateY(0);}
100%{transform:translateY(6px);}

}

.card{

position:relative;

z-index:10;

width:850px;

padding:45px;

border-radius:30px;

background:rgba(255,255,255,.05);

backdrop-filter:blur(25px);

border:1px solid #8b5cf655;

box-shadow:

0 0 30px #7c3aed,

0 0 80px #7c3aed55,

inset 0 0 20px #ffffff11;

}

h1{

font-size:55px;

text-align:center;

color:#fff;

letter-spacing:4px;

text-shadow:

0 0 10px #7c3aed,

0 0 25px #7c3aed,

0 0 45px #ff00ff;

animation:glitch 1.5s infinite;

}

@keyframes glitch{

0%{transform:translateX(0);}
20%{transform:translateX(-2px);}
40%{transform:translateX(2px);}
60%{transform:translateX(-1px);}
80%{transform:translateX(1px);}
100%{transform:translateX(0);}

}

.subtitle{

margin-top:15px;

text-align:center;

color:#ddd;

font-size:20px;

}

.info{

margin-top:40px;

display:grid;

grid-template-columns:1fr 1fr;

gap:25px;

}

.box{

background:#ffffff08;

padding:25px;

border-radius:18px;

border:1px solid #ffffff22;

}

.box h2{

color:#bb86fc;

margin-bottom:15px;

}

.box p{

color:white;

margin:8px 0;

font-size:18px;

}

.progress{

height:15px;

background:#222;

border-radius:30px;

overflow:hidden;

margin-top:8px;

}

.progress span{

display:block;

height:100%;

background:linear-gradient(90deg,#00ffff,#7c3aed,#ff00ff);

animation:load 3s infinite;

}

@keyframes load{

0%{width:20%;}
50%{width:95%;}
100%{width:20%;}

}

.status{

margin-top:35px;

text-align:center;

font-size:24px;

font-weight:bold;

color:#00ff88;

text-shadow:0 0 15px #00ff88;

animation:pulse 1.5s infinite;

}

@keyframes pulse{

50%{
opacity:.4;
}

}

.clock{

margin-top:25px;

text-align:center;

font-size:22px;

color:#ffffff;

}

.footer{

margin-top:35px;

text-align:center;

color:#888;

}

</style>

</head>

<body>

<div class="card">

<h1>SERVER ONLINE</h1>

<div class="subtitle">
Toy Inventory Management System
</div>

<div class="info">

<div class="box">

<h2>👤 ผู้พัฒนา</h2>

<p>นายธงชัย ปลุกใจ</p>

<p>รหัสนักศึกษา</p>

<p><b>69319010192</b></p>

</div>

<div class="box">

<h2>⚙ System</h2>

<p>Node.js</p>

<p>Railway Cloud</p>

<p>HTTP Server</p>

<div class="progress">

<span></span>

</div>

</div>

</div>

<div class="status">

🟢 SYSTEM STATUS : ONLINE

</div>

<div class="clock" id="clock"></div>

<div class="footer">

Powered by Node.js • Railway • Cyber UI

</div>

</div>

<script>

function updateClock(){

const d=new Date();

document.getElementById("clock").innerHTML=
"🕒 "+d.toLocaleString("th-TH");

}

updateClock();

setInterval(updateClock,1000);

</script>

</body>

</html>

`);

});

server.listen(port,()=>{

console.log("🚀 Server Running : "+port);

});
