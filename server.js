// 1. เรียกใช้งาน Module HTTP
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Cyber Web Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:
    radial-gradient(circle at top,#8b5cf6,#1a0033 40%,#090014 100%);
    overflow:hidden;
}

/* ดาว */
body::before{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    background-image:
    radial-gradient(white 1px,transparent 1px);
    background-size:35px 35px;
    opacity:.2;
    animation:moveStars 30s linear infinite;
}

@keyframes moveStars{
    from{transform:translateY(0);}
    to{transform:translateY(-500px);}
}

/* กล่องหลัก */
.card{

    position:relative;
    z-index:10;

    width:750px;
    padding:50px;

    border-radius:25px;

    background:rgba(255,255,255,.06);
    backdrop-filter:blur(18px);

    border:1px solid rgba(255,255,255,.2);

    text-align:center;

    box-shadow:
    0 0 25px #8a2be2,
    0 0 60px #6d28d9;
}

.card h1{

    font-size:40px;
    color:white;

    text-shadow:
    0 0 10px #b517ff,
    0 0 25px #b517ff,
    0 0 45px #8a2be2;

    animation:glow 2s infinite alternate;
}

.card h2{

    color:#d8b4fe;
    margin-top:20px;
    font-size:28px;
}

.card p{

    color:#ddd;
    margin-top:25px;
    line-height:1.8;
    font-size:18px;
}

.badge{

    margin-top:35px;
    display:inline-block;

    padding:14px 35px;

    border-radius:50px;

    color:white;
    background:linear-gradient(90deg,#7c3aed,#9333ea,#c026d3);

    font-weight:bold;

    box-shadow:
    0 0 20px #9333ea;

    animation:pulse 2s infinite;
}

.footer{

    margin-top:30px;
    color:#bfbfbf;
    font-size:14px;
}

@keyframes glow{

    from{
        text-shadow:
        0 0 10px #8a2be2;
    }

    to{

        text-shadow:
        0 0 25px #ff00ff,
        0 0 50px #8a2be2;
    }

}

@keyframes pulse{

    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.08);
    }

    100%{
        transform:scale(1);
    }

}

</style>

</head>

<body>

<div class="card">

<h1>🚀 WEB SERVER ONLINE</h1>

<h2>นายธงชัย ปลุกใจ</h2>

<p>
รหัสนักศึกษา : <b>69319010192</b>
</p>

<p>
เครื่องแม่ข่าย Node.js ทำงานเรียบร้อยแล้ว<br>
พร้อมให้บริการบน <b>Railway Cloud</b>
</p>

<div class="badge">
🟢 SERVER STATUS : ONLINE
</div>

<div class="footer">
Made with ❤️ using Node.js
</div>

</div>

</body>

</html>
`);
});

// 4. เปิด Server
server.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
