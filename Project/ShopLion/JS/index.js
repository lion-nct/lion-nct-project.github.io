let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

hideAllSlide = () => {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
};

showSlide = () => {
  hideAllSlide();
  slides[slide_index].classList.add("active");
};

nextSlide = () =>
  (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

prevSlide = () =>
  (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

// pause slide when hover slider
document
  .querySelector(".slider")
  .addEventListener("mouseover", () => (slide_play = false));

// enable slide when mouse leave out slider
document
  .querySelector(".slider")
  .addEventListener("mouseleave", () => (slide_play = true));

// slider controll

document.querySelector(".slide-next").addEventListener("click", () => {
  nextSlide();
  showSlide();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  prevSlide();
  showSlide();
});

showSlide();

// time nextSlide
setInterval(() => {
  if (!slide_play) return;
  nextSlide();
  showSlide();
}, 4000);

// render products

var products = [
  {
    name: "Lens Zoom G16-70mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL100400GM_0000_8ff00e4b015cefaaffa2c79dccc1f65c_1.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL200600G_0000_aa4c806667bb613cd7fbc9fa6ed7c6a3_1.png",
    old_price: "350",
    curr_price: "200",
  },
  {
    name: "Lens Zoom G100-350mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL1635Z_0000_e18ba6034d2e8cf52e09470d304a9708_1.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL1635Z_0001_23b249f0d220cd84317da24a836cee18.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "Lens Zoom G16-35mm ",
    image1:
      "./Project/ShopLion/images/bucket_SEL30M35_0000_29cc3abbce5a3b17571c44195424e731_1.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL30M35_0000_29cc3abbce5a3b17571c44195424e731_2.png",
    old_price: "900",
    curr_price: "750",
  },
  {
    name: "Lens Zoom G24-70mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL35F14GM_0000_001_0873f5a12fc94dde762c2a82fbe58284_2.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL35F14GM_0002_003_fae7af0d714a09d1d4399169f2ebbaad_1.png",
    old_price: "600",
    curr_price: "400",
  },
  {
    name: "Lens Zoom G24-70mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL24F28G_0000_001_c22344c1d7a67bb6b6d60ab7c5221dd6.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL24F28G_0001_002_dad050cd740e093ea20afe0bff5ea120.png",
    old_price: "800",
    curr_price: "650",
  },
  {
    name: "Lens Zoom G24-70mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL20F28_0000_95849e2146760315cdb24e7bfb03d90a_1.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL20F28_0001_eaac5021161a212a898dd02cb23f5ef3.png",
    old_price: "750",
    curr_price: "600",
  },
  {
    name: "Lens Zoom G100-350mm",
    image1:
      "./Project/ShopLion/images/bucket_SEL1635Z_0000_e18ba6034d2e8cf52e09470d304a9708_1.png",
    image2:
      "./Project/ShopLion/images/bucket_SEL1635Z_0001_23b249f0d220cd84317da24a836cee18.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "Lens Zoom G24-35mm",
    image1: "./Project/ShopLion/images/bucket_001_SEL14F18GM_1.png",
    image2: "./Project/ShopLion/images/bucket_003_SEL14F18GM.png",
    old_price: "900",
    curr_price: "850",
  },
];

var product_list = document.querySelector("#latest-products");
// let best_product_list = document.querySelector("#best-products");

products.forEach((e) => {
  var prod = `
        <div class="col-3 col-md-6 col-sm-12" data-aos="zoom-in-up" data-aos-duration="1200">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                        <i class="fas fa-cart-plus"></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                        <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>$${e.old_price}</del></span>
                        <span class="curr-price">$${e.curr_price}</span>
                    </div>
                    <span class="product-card-info-span span-y span-y-top"></span>
                    <span class="product-card-info-span span-y span-y-bottom"></span>
                    <span class="product-card-info-span span-x x-left"></span>
                    <span class="product-card-info-span span-x x-right"></span>
                </div>
            </div>
        </div>
    `;

  product_list.insertAdjacentHTML("beforeend", prod);
  // best_product_list.insertAdjacentHTML("afterbegin", prod);
});

var container_right_expose = document.querySelector(".splide__list");

products.forEach((e) => {
  var prod = `
        <li class="col-3 col-md-6 col-sm-12 splide__slide" data-aos="zoom-in-left" data-aos-duration="1200">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                        <i class="fas fa-cart-plus"></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                        <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>$${e.old_price}</del></span>
                        <span class="curr-price">$${e.curr_price}</span>
                    </div>
                    <span class="product-card-info-span span-y span-y-top"></span>
                    <span class="product-card-info-span span-y span-y-bottom"></span>
                    <span class="product-card-info-span span-x x-left"></span>
                    <span class="product-card-info-span span-x x-right"></span>
                </div>
            </div>
        </li>
    `;
  container_right_expose.insertAdjacentHTML("beforeend", prod);
});

let shopAttribute = document.querySelector("#mega-dropdown");

/* Please ❤ this if you like it! */

(function ($) {
  "use strict";

  //Switch dark/light

  $(".switch").on("click", function () {
    if ($("body").hasClass("light")) {
      $("body").removeClass("light");
      $(".switch").removeClass("switched");
    } else {
      $("body").addClass("light");
      $(".switch").addClass("switched");
    }
  });
  // $(".switch").on("click", function () {
  //   if ($("body").hasClass(".container_header-left::before")) {
  //     $("body").removeClass(".container_header-left::before");
  //   } else {
  //     $("body").addClass("light");
  //     $(".container_header-left::before").addClass(
  //       ".container_header-left::after"
  //     );
  //   }
  // });

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
