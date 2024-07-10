document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
      "Developed by: Aryan Thapaliya",
      "A Gamer",
      "A Coding Fanatic",
      "A Xaverian"
    ];
    let textIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < texts[textIndex].length) {
        typewriterElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typewriterElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    }
  
    type();
  });
  