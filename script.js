var isMobileMenuOpened = false;
var mobileMenu = document.querySelector(".menu-mobile");
var mobileMenuButton = document.querySelector(".nav-menu__burger");

mobileMenuButton.addEventListener("click", function() {
  isMobileMenuOpened = !isMobileMenuOpened;
  toggleElement(mobileMenu);
});

//
var searchButton = document.querySelector(".nav-menu__search");
var cancelSearchButton = document.querySelector(".nav-menu__search-cancel");
var searchInput = document.querySelector(".nav-menu__search-input");
var isSearchEnabled = false;

var menuItems = document.querySelectorAll(".nav-menu__item");
menuItems = [].slice.call(menuItems); // IE FIX

searchButton.addEventListener("click", function() {
  isSearchEnabled = true;
  show(cancelSearchButton);
  show(searchInput);
  hide(searchButton);

  menuItems.forEach(function(e) {
    e.toggleAttribute("hidden");
  });
});

cancelSearchButton.addEventListener("click", function() {
  hide(cancelSearchButton);
  hide(searchInput);
  show(searchButton);

  menuItems.forEach(function(e) {
    // show(e);
    e.toggleAttribute("hidden");
  });
});

// HELPERS

var toggleElement = function(elem) {
  if (window.getComputedStyle(elem).display === "block") {
    hide(elem);
    return;
  }

  show(elem);
};

var show = function(elem) {
  elem.style.display = "block";
};

var hide = function(elem) {
  elem.style.display = "none";
};

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scrollup").style.display = "flex";
  } else {
    document.querySelector(".scrollup").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function(name, force) {
    var forcePassed = arguments.length === 2;
    var forceOn = !!force;
    var forceOff = forcePassed && !force;
    
    if (this.getAttribute(name) !== null) {
      if (forceOn) return true;
      
      this.removeAttribute(name);
      return false;
    } else {
      if (forceOff) return false;
      
      this.setAttribute(name, "");
      return true;
    }
  };
}
