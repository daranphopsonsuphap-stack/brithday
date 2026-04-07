// 1. สร้างพื้นหลังดวงดาว
const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 150; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    let size = Math.random() * 3;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (Math.random() * 2 + 1) + 's';
    starsContainer.appendChild(star);
}

// 2. จัดการลำดับเหตุการณ์
window.onload = () => {
    setTimeout(() => {
        const intro = document.getElementById('intro-scene');
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            document.getElementById('card-scene').style.display = 'block';
        }, 1000);
    }, 15000); 
};

// 3. Matrix Rain Effect
var canvas = document.getElementById('matrixCanvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'HAPPYBIRTHDAYSUMESA'.split('');
var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = (i % 2 === 0) ? '#FFB6C1' : '#FF1493';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}
setInterval(draw, 33);

// 4. ฟังก์ชันเปิดหน้ากระดาษ
function flipPage() {
    document.getElementById('cover').classList.add('flipped');
}
