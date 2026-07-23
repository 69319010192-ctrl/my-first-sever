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

        let rows = "";

        result.rows.forEach((row, index) => {
            rows += `
            <tr>
                <td>${index + 1}</td>
                <td>${row.student_id}</td>
                <td>${row.student_name}</td>
            </tr>`;
        });

        const html = `
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ฐานข้อมูลนักศึกษา</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',Tahoma,sans-serif;
}

body{
    background:linear-gradient(135deg,#6a11cb,#2575fc);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px;
}

.container{
    width:95%;
    max-width:1000px;
    background:white;
    border-radius:20px;
    padding:30px;
    box-shadow:0 20px 45px rgba(0,0,0,.25);
    animation:fadeIn .8s;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

h1{
    text-align:center;
    color:#5b21b6;
    margin-bottom:10px;
    font-size:36px;
}

.subtitle{
    text-align:center;
    color:#666;
    margin-bottom:30px;
}

.table-box{
    overflow-x:auto;
}

table{
    width:100%;
    border-collapse:collapse;
    border-radius:15px;
    overflow:hidden;
}

thead{
    background:#6d28d9;
    color:white;
}

th{
    padding:16px;
    font-size:18px;
}

td{
    padding:15px;
    text-align:center;
    border-bottom:1px solid #eee;
}

tbody tr:nth-child(even){
    background:#f8f6ff;
}

tbody tr:hover{
    background:#ede9fe;
    transform:scale(1.01);
    transition:.2s;
}

.footer{
    text-align:center;
    margin-top:25px;
    color:#777;
    font-size:14px;
}

.badge{
    display:inline-block;
    background:#7c3aed;
    color:white;
    padding:8px 18px;
    border-radius:30px;
    margin-bottom:15px;
    font-weight:bold;
}

.count{
    margin-bottom:20px;
    font-size:17px;
    color:#444;
}

@media(max-width:768px){

    h1{
        font-size:28px;
    }

    th,td{
        font-size:14px;
        padding:12px;
    }

}
</style>

</head>

<body>

<div class="container">

<center>
<div class="badge">
📚 Student Database
</div>
</center>

<h1>ฐานข้อมูลนักศึกษา</h1>

<p class="subtitle">
ระบบแสดงข้อมูลจาก PostgreSQL บน Railway
</p>

<div class="count">
<b>จำนวนนักศึกษาทั้งหมด :</b> ${result.rows.length} คน
</div>

<div class="table-box">

<table>

<thead>
<tr>
<th>ลำดับ</th>
<th>รหัสนักศึกษา</th>
<th>ชื่อ - นามสกุล</th>
</tr>
</thead>

<tbody>

${rows}

</tbody>

</table>

</div>

<div class="footer">
พัฒนาโดย นายธงชัย ปลุกใจ HIT.1/1 V(A)
</div>

</div>

</body>
</html>
`;

        res.end(html);

    } catch (err) {

        console.error(err);

        res.end(`
<!DOCTYPE html>
<html lang="th">
<head>

<meta charset="UTF-8">

<style>

body{
    background:#f4f4f4;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Segoe UI;
}

.box{
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,0,0,.2);
    text-align:center;
}

h1{
    color:red;
}

p{
    color:#555;
}

</style>

</head>

<body>

<div class="box">
<h1>❌ เกิดข้อผิดพลาด</h1>
<p>${err.message}</p>
</div>

</body>

</html>
`);
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
