console.log("Hello");

Nav();

// Adding Ham Class to Hamburger
function Hide_Open(Element_id) {
  // Getting the Hamburger by it's id
  Elem = document.getElementById(Element_id);
  // console.log(Element_Class);
  // removing Ham class if already added
  if (Elem.classList == "Ham") {
    Elem.classList.remove("Ham");
    Elem.classList.add("Ham-Normal");

    // Stoping body Scroll
    a = document.querySelector("body");
    a.style.height = "";
    a.style.overflow = "";
    Nav();
  }
  // adding Ham class if not added
  else {
    Elem.classList.add("Ham");
    Elem.classList.remove("Ham-Normal");

    // Stoping body Scroll
    if (window.outerWidth <= 720) {
      a = document.querySelector("body");
      a.style.height = "100vh";
      a.style.overflow = "hidden";
    }
    Nav();
  }
}

// Changing Nav and Nav_items background and Color
function Nav() {
  ele = document.getElementById("HamBurger-Cont");

  if (ele.classList == "Ham") {
    // getting nav items
    var Nav_items = document.getElementsByClassName("Nav-items");

    // for loop to apply style to all the elements
    for (let index = 0; index < Nav_items.length; index++) {
      const element = Nav_items[index];
      // changing color of nav items
      element.style.pointerEvents = "";
      element.style.visibility = "visible";
      element.style.color = "#dddbd6";
    }

    // Acessing Nav bar by it's id
    var Nav = document.getElementById("Nav");


    // Nav Bar Slide
    if (window.outerWidth<=720) {
      Nav.style.left = "0%"; 

    }

    // Changing background Color`
    Nav.style.backgroundColor = "rgba(32, 30, 30, 0.780)";


    // Changing the opacity of Profile picture in nave to be visiable
    Image = document.getElementById("Profile");
    Image_Link = document.getElementById("Profile-link");

    Image_Link.style.pointerEvents = "";
    Image.style.opacity = "100%";

    // console.log("What's up");
  } else {
    // console.log("object");

    var Nav_items = document.getElementsByClassName("Nav-items");

    for (let index = 0; index < Nav_items.length; index++) {
      const element = Nav_items[index];

      // No click on link
      element.style.pointerEvents = "none";

      // default color of nav element to get transparency effect
      element.style.color = "transparent";
    }

    // default backgroundColor of Navbar to get transparency effect
    var Nav = document.getElementById("Nav");

    Nav.style.removeProperty("left")

    // Nav Bar Slide
    if (window.innerHeight<=720) {
      Nav.style.left = ""

    }

    Nav.style.backgroundColor = "transparent";

    // Changing the opacity of Profile picture in nave to be visiable
    Image = document.getElementById("Profile");
    Image_Link = document.getElementById("Profile-link");

    Image_Link.style.pointerEvents = "none";
    Image.style.opacity = "0%";
  }
}

// Changing the width to 100% to show a line getting animated under link
function LineOut(params) {
  a = document.getElementsByClassName("narrow-line-under");

  Array.from(a).forEach((element) => {
    element.style.width = "100%";
    element.style.backgroundColor = "Cyan";
  });
}

// Changing the width to 0% to hide a line getting animated under link

function LineIn(params) {
  a = document.getElementsByClassName("narrow-line-under");

  Array.from(a).forEach((element) => {
    element.style.width = "0%";
    element.style.backgroundColor = "rgb(211, 211, 211)";
  });
}

// Changing to form underline color to Cyan
function Color_Hover(params) {
  a = document.getElementById("nl1");
  a.style.backgroundColor = "Cyan";
  a.style.width = "100%";
}

function Color_Hover1(params) {
  a = document.getElementById("nl2");
  a.style.backgroundColor = "Cyan";
  a.style.width = "100%";
}

function Color_Hover2(params) {
  a = document.getElementById("nl3");
  a.style.backgroundColor = "Cyan";
  a.style.width = "100%";
}
