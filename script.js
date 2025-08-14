const circle = document.getElementById('circleCursor');

document.addEventListener('mousemove', (e) => {
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';
});


