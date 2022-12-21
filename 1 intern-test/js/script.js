// Show blue dottedted

// const dottedted = document.getElementById("dottedted");
// console.log(dottedted);

const navbar = document.querySelectorAll(".navbar ul li a");
console.log(navbar);

const dotted = document.querySelectorAll(".navbar ul li a .dotted");
console.log(dotted);

// looping a (navbar)

// test 1

for (i = 0; i < navbar.length; i++) {
  // home
  navbar[0].addEventListener("mouseenter", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[0].style.display = "block";
    }
  });

  navbar[0].addEventListener("mouseleave", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[0].style.display = "none";
    }
  });

  //   about me
  navbar[1].addEventListener("mouseenter", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[1].style.display = "block";
    }
  });

  navbar[1].addEventListener("mouseleave", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[1].style.display = "none";
    }
  });

  //   course
  navbar[2].addEventListener("mouseenter", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[2].style.display = "block";
    }
  });

  navbar[2].addEventListener("mouseleave", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[2].style.display = "none";
    }
  });

  //   contact
  navbar[3].addEventListener("mouseenter", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[3].style.display = "block";
    }
  });

  navbar[3].addEventListener("mouseleave", function () {
    for (j = 0; j < dotted.length; j++) {
      dotted[3].style.display = "none";
    }
  });
}

// end test f2
