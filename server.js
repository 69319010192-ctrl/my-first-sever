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

background:linear-gradient(135deg,#6dd5fa,#c9f2ff,#ffffff);

display:flex;
justify-content:center;
align-items:center;

min-height:100vh;

overflow:hidden;

}

/* หิมะตก */

body::before{
content:"";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;

background-image:
radial-gradient(white 2px,transparent 2px),
radial-gradient(white 3px,transparent 3px),
radial-gradient(white 1.5px,transparent 1.5px);

background-size:180px 180px;

animation:snow 18s linear infinite;

opacity:.7;

}

@keyframes snow{

from{
transform:translateY(-200px);
}

to{
transform:translateY(200px);
}

}

/* กล่อง */

.container{

width:900px;
max-width:95%;

padding:35px;

background:rgba(255,255,255,.30);

backdrop-filter:blur(18px);

border-radius:25px;

box-shadow:0 15px 35px rgba(0,0,0,.25);

}

/* หัวข้อ */

h1{

text-align:center;

color:#0d47a1;

margin-bottom:25px;

font-size:35px;

}

/* ตาราง */

table{

width:100%;

border-collapse:collapse;

overflow:hidden;

border-radius:15px;

}

th{

background:#2196F3;

color:white;

padding:15px;

font-size:18px;

}

td{

padding:14px;

text-align:center;

background:white;

}

tr:nth-child(even) td{

background:#eef8ff;

}

tr:hover td{

background:#d8efff;

transition:.3s;

}

.footer{

margin-top:20px;

text-align:center;

color:#1565c0;

font-weight:bold;

font-size:18px;

}

</style>

</head>

<body>

<div class="container">

<h1>❄️ ฐานข้อมูลนักศึกษา ❄️</h1>

<table>

<tr>
<th>รหัสนักศึกษา</th>
<th>ชื่อ-นามสกุล</th>
</tr>
`;
