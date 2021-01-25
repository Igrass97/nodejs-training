(function () {
  function appendMenuToBody() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuNav = document.createElement('nav');

    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.innerHTML = 'Home';

    const productListLink = document.createElement('a');
    productListLink.href = '/product-list';
    productListLink.innerHTML = 'Product list';

    const cartLink = document.createElement('a');
    cartLink.href = '/cart';
    cartLink.innerHTML = 'Cart';

    const addProductLink = document.createElement('a');
    addProductLink.href = '/admin/add-product';
    addProductLink.innerHTML = 'Add product';

    const stockLink = document.createElement('a');
    stockLink.href = '/admin/stock-list';
    stockLink.innerHTML = 'Stock list';

    const closeButton = document.createElement('i');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => document.querySelector('.menu-container').remove());

    menuNav.appendChild(homeLink);
    menuNav.appendChild(productListLink);
    menuNav.appendChild(cartLink);
    menuNav.appendChild(addProductLink);
    menuNav.appendChild(stockLink);
    menuNav.appendChild(closeButton);

    menuContainer.appendChild(menuNav);

    document.body.appendChild(menuContainer);
  }

  function toggleMenu() {
    const menu = document.querySelector('.menu-container');
    if (menu) {
      menu.remove();
    } else {
      appendMenuToBody();
    }
  }

  const menuBtn = document.querySelector('.menu-btn');
  menuBtn.addEventListener('click', toggleMenu);
})();