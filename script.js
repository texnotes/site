var isMobileMenuOpened = false;
var mobileMenu = document.querySelector('.menu-mobile');
var mobileMenuButton = document.querySelector('.nav-menu__burger');

mobileMenuButton.addEventListener('click', function() {
  isMobileMenuOpened = !isMobileMenuOpened;
  toggleElement(mobileMenu);
})

//
var searchButton = document.querySelector('.nav-menu__search');
var cancelSearchButton = document.querySelector('.nav-menu__search-cancel');
var searchInput = document.querySelector('.nav-menu__search-input');
var isSearchEnabled = false;

var menuItems = document.querySelectorAll('.nav-menu__item');

searchButton.addEventListener('click', function() {
  // isSearchEnabled = !isSearchEnabled;
  isSearchEnabled = true;

  // console.log({isSearchEnabled});

    show(cancelSearchButton);
    show(searchInput);
    hide(searchButton);

    menuItems.forEach(function(e) {
      // hide(e);
      e.toggleAttribute('hidden');
    });


  // if (isSearchEnabled) {
  //   console.log(searchInput);
  // }

  // if (isSearchEnabled) {
    // to
  // }
});

cancelSearchButton.addEventListener('click', function() {
  hide(cancelSearchButton);
  hide(searchInput);
  show(searchButton);

    menuItems.forEach(function(e) {
      // show(e);
      e.toggleAttribute('hidden');
    });
});


// HELPERS

var toggleElement = function (elem) {
  if (window.getComputedStyle(elem).display === 'block') {
    hide(elem);
    return;
  }

  show(elem);
};

var show = function (elem) {
  elem.style.display = 'block';
};

var hide = function (elem) {
  elem.style.display = 'none';
};
