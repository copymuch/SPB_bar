const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade');
      }
    });
  });
  observer1.observe(document.querySelector('.menu__cards'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideRight');
      }
    });
  });
  observer2.observe(document.querySelector('.info__tour'));

  const observer3= new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideLeft');
      }
    });
  });
  observer3.observe(document.querySelector('.info__events'));