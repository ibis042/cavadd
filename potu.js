document.addEventListener("DOMContentLoaded", () => {
  const questionText = document.querySelector('.meraba');
  const answerButtons = document.querySelector('.answer-buttons');
  const gallery = document.getElementById('gallery');

  function createHeartRight() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.right = `${Math.random() * 40 + 20}px`;
    heart.style.top = '100px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  function createHeartLeft() {
    const heartt = document.createElement("div");
    heartt.classList.add("heartt");
    heartt.innerText = "❤️";
    heartt.style.left = `${Math.random() * 40 + 20}px`;
    heartt.style.top = '100px';
    document.body.appendChild(heartt);
    setTimeout(() => heartt.remove(), 3000);
  }

  setInterval(createHeartRight, 100);
  setInterval(createHeartLeft, 100);

  const questions = {
    start: {
      text: "Merhaba bayim😇",
      answers: [
        { text: "Sizede Merhaba", next: "nasilsiniz" },
        { text: "Sizede Merhaba", next: "nasilsiniz" }
      ]
    },
    nasilsiniz: {
      text: "Nasilsiniz bayim",
      answers: [
        { text: "Iyiyim🙂", next: "show" },
        { text: "Kötüyüm🙁", next: "amd_neden" }
      ]
    },
    show: {
      text: "Mutlu oldum bayim😊 Showa geçelimmi?",
      answers: [
        { text: "Tabi😃", next: "final" },
        { text: "Hadi bakalim😼", next: "final" }
      ]
    },
    amd_neden: {
      text: "Ama neden?😔",
      answers: [
        { text: "Yorgunum😴", next: "final" },
        { text: "Boş ver😒", next: "final" }
      ]
    },
    final: {
      text: "Cavad Funny Moments galeriye bax!",
      answers: [
        { text: "Galeriye keç", next: null }
      ]
    }
  };

  function showQuestion(key) {
    if (key === null) {
      document.querySelector('.question-container').style.display = 'none';
      gallery.style.display = 'flex';
      return;
    }

    document.querySelector('.question-container').style.display = 'block';
    gallery.style.display = 'none';

    const question = questions[key];
    if (!question) return;

    questionText.textContent = question.text;
    answerButtons.innerHTML = "";

    question.answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.classList.add('answer-btn');
      btn.textContent = answer.text;
      btn.dataset.next = answer.next;
      answerButtons.appendChild(btn);
    });
  }

  showQuestion('start');

  answerButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const next = e.target.dataset.next;
      showQuestion(next);
    }
  });

  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const img = e.target;
      const fullscreen = document.createElement('div');
      fullscreen.style.position = 'fixed';
      fullscreen.style.top = 0;
      fullscreen.style.left = 0;
      fullscreen.style.width = '100vw';
      fullscreen.style.height = '100vh';
      fullscreen.style.backgroundColor = 'rgba(0,0,0,0.9)';
      fullscreen.style.display = 'flex';
      fullscreen.style.justifyContent = 'center';
      fullscreen.style.alignItems = 'center';
      fullscreen.style.zIndex = '9999';
      fullscreen.style.cursor = 'pointer';

      const bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.style.maxWidth = '90%';
      bigImg.style.maxHeight = '90%';
      bigImg.style.borderRadius = '10px';

      fullscreen.appendChild(bigImg);
      document.body.appendChild(fullscreen);

      fullscreen.addEventListener('click', () => {
        fullscreen.remove();
      });
    }
  });
});
