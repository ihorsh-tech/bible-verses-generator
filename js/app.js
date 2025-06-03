fetch('verses.json')
  .then(res => res.json())
  .then(verses => {
    const verseEl = document.getElementById('verse');
    const btn = document.getElementById('newVerse');

    function showRandomVerse() {
      const random = verses[Math.floor(Math.random() * verses.length)];
      verseEl.textContent = random;
    }

    btn.addEventListener('click', showRandomVerse);
    showRandomVerse(); // показати одразу при завантаженні
  });
