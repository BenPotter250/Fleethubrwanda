// FAQ Accordion Functionality
const faqHeaders = document.querySelectorAll('.accordion-header');

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const parentItem = header.parentElement;
    const content = parentItem.querySelector('.accordion-content');
    const currentlyOpen = document.querySelector('.accordion-item.open');

    if (currentlyOpen && currentlyOpen !== parentItem) {
      currentlyOpen.classList.remove('open');
      currentlyOpen.querySelector('.accordion-content').style.maxHeight = null;
      currentlyOpen.querySelector('.accordion-header .arrow').innerHTML = '&#x25BC;';
    }

    const isOpen = parentItem.classList.contains('open');
    parentItem.classList.toggle('open');
    header.querySelector('.arrow').innerHTML = isOpen ? '&#x25BC;' : '&#x25B2;';

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

// WhatsApp Button Click (Optional: for analytics or visual effect)
document.querySelector('.whatsapp-button').addEventListener('click', () => {
  console.log('WhatsApp button clicked');
});

// Smooth Scroll for car category links
document.querySelectorAll('.car-flex-container a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
