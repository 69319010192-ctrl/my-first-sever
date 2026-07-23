const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM students');
    client.release();

    let html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Student Database</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{

background:linear-gradient(180deg,#5bbcff,#b8e8ff,#ffffff);

min-height:100vh;

display:flex;
justify-content:center;
align-items:center;

overflow:hidden;

}

/* พื้นหลังหิมะ */

body::before{
content:"";
position:fixed;
left:0;
top:0;
width:100%;
height:100%;

background-image:
radial-gradient(white 2px,transparent 2px),
radial-gradient(white 3px,transparent 3px),
radial-gradient(white 1px,transparent 1px);

background-size:180px 180px;
animation:snow 18s linear infinite;

opacity:.8;
pointer-events:none;
}

@keyframes snow{

0%{
transform:translateY(-200px);
}

100%{
transform:translateY(200px);
}

}

/* กล่อง */

.container{

width:900px;
max-width:95%;

background:rgba(255,255,255,.30);

backdrop-filter:blur(20px);

padding:40px;

border-radius:25px;

box-shadow:0 20px 50px rgba(0,0,0,.25);

z-index:1;

}

/* หัวข้อ */

h1{

text-align:center;

font-size:38px;

color:#0b5394;

margin-bottom:30px;

}

/* ตาราง */

table{

width:100%;

border-collapse:collapse;

overflow:hidden;

border-radius:18px;

}

th{

background:#1976D2;

color:white;

padding:16px;

font-size:18px;

}

td{

padding:15px;

text-align:center;

background:rgba(255,255,255,.9);

}

tr:nth-child(even) td{

background:#eef8ff;

}

tr:hover td{

background:#d7f0ff;

transition:.3s;

}

/* Footer */

.footer{

margin-top:20px;

text-align:center;

font-size:18px;

color:#1565C0;

font-weight:bold;

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

    result.rows.forEach(row => {
      html += `
<tr>
<td>${row.student_id}</td>
<td>${row.student_name}</td>
</tr>
`;
    });

    html += `
</table>

<div class="footer">
☃️ Winter Student Database ☃️
</div>

</div>

</body>
</html>
`;

    res.end(html);

  } catch (err) {

    console.error(err);

    res.end(`
    <h1>เกิดข้อผิดพลาด</h1>
    <p>${err.message}</p>
    `);

  }

});

server.listen(port, () => {
  console.log(\`Server is running on port: \${port}\`);
});
