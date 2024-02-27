const marqueeText = document.querySelector(".marquee-text");
let position = 0;

function moveMarquee() {
  position -= 1; // Изменяем положение текста
  marqueeText.style.transform = `translateX(${position}px)`; // Применяем новое положение
  requestAnimationFrame(moveMarquee); // Повторяем процесс
}

// Начинаем движение
moveMarquee();
