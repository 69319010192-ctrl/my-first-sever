let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Student Database</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{

    height:100vh;
    overflow:hidden;

    display:flex;
    justify-content:center;
    align-items:center;

    background:linear-gradient(180deg,#8fd3ff,#dff6ff,#ffffff);

}

/* หิมะตก */

.snow{
    position:fixed;
    width:100%;
    height:100%;
    pointer-events:none;
    top:0;
    left:0;
}

.snow span{
    position:absolute;
    display:block;
    width:8px;
    height:8px;
    background:white;
    border-radius:50%;
    animation:fall linear infinite;
    opacity:.9;
}

@keyframes fall{

0%{
transform:translateY(-10px);
opacity:0;
}

100%{
transform:translateY(105vh);
opacity:1;
}

}

/* กล่อง */

.container{

width:900px;
max-width:95%;

background:rgba(255,255,255,.25);

backdrop-filter:blur(18px);

border-radius:25px;

padding:40px;

box-shadow:0 20px 45px rgba(0,0,0,.2);

z-index:10;

}

/* หัวข้อ */

h1{

text-align:center;

color:#0d47a1;

margin-bottom:25px;

font-size:36px;

}

/* ตาราง */

table{

width:100%;

border-collapse:collapse;

overflow:hidden;

border-radius:15px;

}

th{

background:#1976d2;

color:white;

padding:15px;

}

td{

padding:15px;

background:rgba(255,255,255,.75);

text-align:center;

}

tr:nth-child(even) td{

background:rgba(240,248,255,.85);

}

tr:hover td{

background:#d9f3ff;

transition:.3s;

}

.footer{

margin-top:20px;

text-align:center;

color:#1565c0;

font-weight:bold;

}

</style>

</head>

<body>

<div class="snow">
${Array.from({length:120},(_,i)=>
`<span style="
left:${Math.random()*100}%;
animation-duration:${5+Math.random()*10}s;
animation-delay:${Math.random()*10}s;
width:${4+Math.random()*8}px;
height:${4+Math.random()*8}px;
"></span>`
).join('')}
</div>

<div class="container">

<h1>❄️ ฐานข้อมูลนักศึกษา ❄️</h1>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;
