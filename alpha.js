document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const images = document.querySelectorAll('.image-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  // Filter images by category
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      images.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    });
  });

  // Open lightbox
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = img.querySelector('img').src;
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Navigate lightbox images
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    lightboxImg.src = images[currentIndex].querySelector('img').src;
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = images[currentIndex].querySelector('img').src;
  });
});
