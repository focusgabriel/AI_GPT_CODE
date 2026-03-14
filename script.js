function filterGallery(category) {
  const items = document.querySelectorAll('.gallery .item');
  items.forEach(item => {
    const isMatch = category === 'all' || item.dataset.category === category;
    item.style.display = isMatch ? 'block' : 'none';
  });
}