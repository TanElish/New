// Extra #1: Theme Switcher
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Extra #2: Category Filter for Recipe Grid
const filterBtns = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    recipeCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Extra #3: Interactive Servings Calculator
const rangeInput = document.getElementById('servings-range');
const servingsCount = document.getElementById('servings-count');
const qtyElements = document.querySelectorAll('.qty');

rangeInput.addEventListener('input', (e) => {
  const servings = parseFloat(e.target.value);
  servingsCount.textContent = servings;

  qtyElements.forEach(qtyEl => {
    const baseQty = parseFloat(qtyEl.getAttribute('data-base'));
    // Scale quantity based on 2 initial base servings
    const scaledQty = (baseQty * (servings / 2)).toFixed(1);
    qtyEl.textContent = scaledQty.endsWith('.0') ? parseInt(scaledQty) : scaledQty;
  });
});

// Extra #4: Real-time Form Validation
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('user-email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = emailInput.value.trim();

  if (val === '') {
    emailError.textContent = 'Email address cannot be empty.';
  } else if (!val.includes('@') || !val.includes('.')) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
    alert('Thank you for subscribing to CookBook Hub!');
    form.reset();
  }
});
