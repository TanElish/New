# CookBook Hub - Interactive Recipe Dashboard

**Live Demo URL:** [https://YOUR-USERNAME.github.io/YOUR-REPO-NAME](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME)

---

## 📌 Description
CookBook Hub is an interactive, responsive single-page web app designed for recipe discovery, dynamic serving recalculations, and newsletter subscriptions.

---

## ✅ Core Requirements & Evidence

### 1. W3C Validation Compliance
* Passed both **W3C Markup Validation (HTML)** and **W3C CSS Validation** with 0 Errors and 0 Warnings.
* *(Proof screenshot stored at `./assets/w3c-validator.png`)*

### 2. Responsive Web Design
* Layout dynamically switches between desktop viewports and stacked mobile layouts (<650px).
* Implements dynamic CSS Grid (`repeat(auto-fit, minmax(...))`) and Flexbox configurations.

### 3. Styling Standards
* Styled using CSS Variables (`:root`) for color palette control and theme swapping.
* Custom transition effects on hover states and interactive elements.

---

## ⭐ Demonstration of the 4 "Extras"

### Extra 1: Dynamic Theme Toggle (Dark/Light Mode)
* **Description:** Switches theme variables dynamically using JS to modify the body class.
* **Code Excerpt:**
```javascript
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
if (category === 'all' || card.getAttribute('data-category') === category) {
  card.style.display = 'block';
}
const scaledQty = (baseQty * (servings / 2)).toFixed(1);
qtyEl.textContent = scaledQty;
if (!val.includes('@') || !val.includes('.')) {
  emailError.textContent = 'Please enter a valid email address.';
}
