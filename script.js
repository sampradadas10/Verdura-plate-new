// JS CODE: Paste in CodePen JS panel

// Dishes array (uses remote images)
const dishes = [
  {
    title: "Spaghetti Aglio e Olio",
    cuisine: "Italian",
    img: "https://www.asmo.de/fileadmin/asmo/_processed_/4/2/csm_asmo_kuechen_rezept_spaghetti_aglio_e_olio_219304b39e.jpg",
    price: 320,
    diet: ["Vegetarian"],
    desc: "Classic Italian pasta with garlic, olive oil, parsley, and red chili flakes.",
    rating: 4.5,
    delivery: 35
  },
  {
    title: "Tiramisu",
    cuisine: "Italian",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYEJ7Wl7bG8P535PfYj7UDdn3vBpF7ECCzw&s",
    price: 280,
    diet: ["Vegetarian"],
    desc: "Famous Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone.",
    rating: 4.7,
    delivery: 30
  },
  {
    title: "Margherita Pizza",
    cuisine: "Italian",
    img: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg",
    price: 400,
    diet: ["Vegetarian"],
    desc: "Wood-fired Neapolitan pizza with tomato sauce, mozzarella, and fresh basil.",
    rating: 4.8,
    delivery: 40
  },
  {
    title: "Ramen",
    cuisine: "Asian",
    img: "https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square.jpg",
    price: 350,
    diet: ["Non-Vegetarian"],
    desc: "Japanese noodle soup with broth, vegetables, egg, and sliced chicken.",
    rating: 4.6,
    delivery: 45
  },
  {
    title: "Dim Sum",
    cuisine: "Asian",
    img: "https://www.chinasichuanfood.com/wp-content/uploads/2014/04/dim-sum-shrimp-dumplingsth.jpg",
    price: 260,
    diet: ["Vegetarian"],
    desc: "Steamed dumplings filled with vegetables and served with soy dipping sauce.",
    rating: 4.4,
    delivery: 30
  },
  {
    title: "Pad Thai",
    cuisine: "Asian",
    img: "https://www.tasteofhome.com/wp-content/uploads/2024/11/Vegetarian-Pad-Thai_EXPS_TOHcom24_197935_DR_11_20_01b.jpg",
    price: 310,
    diet: ["Non-Vegetarian"],
    desc: "Iconic Thai stir-fried noodles with shrimp, peanuts, and fresh lime.",
    rating: 4.7,
    delivery: 35
  },
  {
    title: "Sushi Platter",
    cuisine: "Asian",
    img: "https://www.sushijunction.com/cdn/shop/files/PremiumPartyPlatter-Veg.jpg?v=1734335753",
    price: 550,
    diet: ["Non-Vegetarian"],
    desc: "Assorted sushi and sashimi with fresh fish, rice, and vegetables.",
    rating: 4.9,
    delivery: 50
  },
  {
    title: "Veg Spring Roll",
    cuisine: "Indo-Chinese",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",
    price: 180,
    diet: ["Vegan"],
    desc: "Crispy fried rolls stuffed with seasoned vegetables.",
    rating: 4.2,
    delivery: 20
  },
  {
    title: "Paneer Tikka",
    cuisine: "Indian",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyeu6pzzp1ny2NDhWB2qDdAs5m0erB2RgOA&s",
    price: 270,
    diet: ["Vegetarian", "Gluten-Free"],
    desc: "Cubes of paneer marinated in spices and grilled to perfection.",
    rating: 4.6,
    delivery: 30
  },
  {
    title: "Butter Chicken",
    cuisine: "Indian",
    img: "https://sugarspunrun.com/wp-content/uploads/2025/04/Butter-chicken-1-of-1.jpg",
    price: 340,
    diet: ["Non-Vegetarian", "Gluten-Free"],
    desc: "Tender chicken cooked in creamy tomato gravy with Indian spices.",
    rating: 4.8,
    delivery: 35
  },
  {
    title: "Dosa",
    cuisine: "Indian",
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
    price: 220,
    diet: ["Vegan", "Gluten-Free"],
    desc: "South Indian crispy rice crepe served with sambar and chutney.",
    rating: 4.5,
    delivery: 25
  },
  {
    title: "Gobi Manchurian",
    cuisine: "Indo-Chinese",
    img: "https://palatesdesire.com/wp-content/uploads/2022/09/dry-gobi-manchurian-recipe@palates-desire.jpg",
    price: 200,
    diet: ["Vegan"],
    desc: "Cauliflower florets tossed in Indo-Chinese tangy sauce.",
    rating: 4.3,
    delivery: 25
  },
  {
    title: "Hakka Noodles",
    cuisine: "Indo-Chinese",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Spicy-Chicken-Hakka-Noodles-Recipe.jpg",
    price: 230,
    diet: ["Vegetarian"],
    desc: "Stir-fried noodles with mixed vegetables and Asian seasoning.",
    rating: 4.4,
    delivery: 30
  }
];

const listEl = document.getElementById('dish-list');
const cuisineFilter = document.getElementById('cuisine-filter');
const dietFilter = document.getElementById('diet-filter');
const sortFilter = document.getElementById('sort-filter');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartModalCloseBtns = document.querySelectorAll('.cart-modal-close');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart-btn');
const placeOrderBtn = document.getElementById('place-order-btn');
const orderPlacedModal = document.getElementById('order-placed-modal');
const orderPlacedTotal = document.getElementById('order-placed-total');
const orderPlacedClose = document.getElementById('order-placed-close');

// Cart state
let cart = [];

function renderDishes(arr) {
  if (!listEl) return;
  if (!arr.length) {
    listEl.innerHTML = `<div style='grid-column:1/-1;padding:2em;text-align:center;color:#999;'>No dishes found!</div>`;
    return;
  }
  listEl.innerHTML = arr.map(dish => `
    <div class="dish-card">
      <img src="${dish.img}" alt="${dish.title}" />
      <div class="dish-info">
        <div>
          <span class="dish-title">${dish.title}</span>
        </div>
        <div class="dish-meta">
          <span>${dish.cuisine}</span>
          &middot;
          <span class="dish-price">₹${dish.price}</span>
          &middot;
          <span>⏱️${dish.delivery}min</span>
        </div>
        <div class="dish-desc">${dish.desc}</div>
        <div class="diet-tags">
          ${dish.diet.map(tag => `<span class="diet-tag">${tag}</span>`).join("")}
        </div>
        <div>
          <span class="rating">★ ${dish.rating}</span>
          <button class="add-cart-btn" data-title="${dish.title}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
  attachCartListeners();
}

function getFilteredDishes() {
  let filtered = dishes.slice();
  const cuisineVal = cuisineFilter.value;
  if (cuisineVal) filtered = filtered.filter(d => d.cuisine === cuisineVal);
  const dietVal = dietFilter.value;
  if (dietVal) filtered = filtered.filter(d => d.diet.includes(dietVal));
  const searchVal = searchInput.value.trim().toLowerCase();
  if (searchVal) {
    filtered = filtered.filter(d =>
      d.title.toLowerCase().includes(searchVal) ||
      d.cuisine.toLowerCase().includes(searchVal) ||
      d.desc.toLowerCase().includes(searchVal)
    );
  }
  const sortVal = sortFilter.value;
  if (sortVal === "top-rated") filtered.sort((a, b) => b.rating - a.rating);
  else if (sortVal === "fastest") filtered.sort((a, b) => a.delivery - b.delivery);
  else if (sortVal === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === "price-desc") filtered.sort((a, b) => b.price - a.price);
  return filtered;
}

function attachCartListeners() {
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.onclick = function() {
      const title = btn.getAttribute('data-title');
      const dish = dishes.find(d => d.title === title);
      if (dish) {
        if (!cart.some(item => item.title === dish.title)) {
          cart.push(dish);
        }
        updateCartCount();
      }
    };
  });
}

// Floating Cart Button
if (cartBtn) cartBtn.addEventListener('click', showCartModal);
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Cart Modal logic
function showCartModal() {
  renderCartItems();
  cartModal.classList.add('active');
  document.body.style.overflow = "hidden";
}
function closeCartModal() {
  cartModal.classList.remove('active');
  document.body.style.overflow = "";
}
cartModalCloseBtns.forEach(btn => btn.addEventListener('click', closeCartModal));
if (cartModal) {
  cartModal.addEventListener('click', function(e) {
    if (e.target === cartModal) closeCartModal();
  });
}
function renderCartItems() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<div style='color:#888;padding:.7em;'>Your cart is empty.</div>`;
    cartTotalEl.textContent = '';
    placeOrderBtn.disabled = true;
    clearCartBtn.disabled = true;
    return;
  }
  cartItemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <span class="cart-item-title">${item.title}</span>
      <span class="cart-item-price">₹${item.price}</span>
      <button class="cart-item-remove" data-idx="${idx}" title="Remove">&#10005;</button>
    </div>
  `).join('');
  cartTotalEl.innerHTML = `Total: <span style="color:#e07a5f;">₹${cart.reduce((sum, d) => sum + d.price, 0)}</span>`;
  placeOrderBtn.disabled = false;
  clearCartBtn.disabled = false;
  // Remove item events
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.onclick = function() {
      const idx = Number(btn.getAttribute('data-idx'));
      cart.splice(idx, 1);
      updateCartCount();
      renderCartItems();
    };
  });
}

// Cart actions
if (clearCartBtn) {
  clearCartBtn.onclick = function() {
    cart = [];
    updateCartCount();
    renderCartItems();
  };
}
if (placeOrderBtn) {
  placeOrderBtn.onclick = function() {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, d) => sum + d.price, 0);
    showOrderPlacedModal(total);
    cart = [];
    updateCartCount();
    renderCartItems();
    closeCartModal();
  };
}

// Order placed modal
function showOrderPlacedModal(total) {
  if (orderPlacedModal && orderPlacedTotal) {
    orderPlacedTotal.innerHTML = `Total Price: <span style="color:#e07a5f;">₹${total}</span>`;
    orderPlacedModal.classList.add('active');
    document.body.style.overflow = "hidden";
  }
}
function closeOrderPlacedModal() {
  if (orderPlacedModal) {
    orderPlacedModal.classList.remove('active');
    document.body.style.overflow = "";
  }
}
if (orderPlacedClose) {
  orderPlacedClose.addEventListener('click', closeOrderPlacedModal);
}
if (orderPlacedModal) {
  orderPlacedModal.addEventListener('click', function(e) {
    if (e.target === orderPlacedModal) closeOrderPlacedModal();
  });
}

// Filtering, Sorting & Search
[cuisineFilter, dietFilter, sortFilter].forEach(el => {
  if (el) el.addEventListener('change', () => renderDishes(getFilteredDishes()));
});
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    renderDishes(getFilteredDishes());
  });
}
if (searchInput) {
  searchInput.addEventListener('input', () => renderDishes(getFilteredDishes()));
}

// Initial render
document.addEventListener('DOMContentLoaded', function() {
  renderDishes(dishes);
  updateCartCount();
});