document.addEventListener("DOMContentLoaded", function () {
  const listMenuMobile = document.getElementById("listMenuMobile");
  const iconMenuBar = document.getElementById("iconMenuBar");
  const pageMobile = document.getElementById("pageMobile");
  const caretDownMobile = document.getElementById("caretDownMobile");
  const listPageMobile = document.getElementById("listPageMobile");
  const blackLayer = document.getElementById("blackLayer");
  const header = document.getElementById("header");
  const changeIconColors = document.querySelectorAll(".changeIconColor");
  const buttonToTop = document.getElementById("buttonToTop");

  //! ===HANDLE SCROLL FIXED NAVBAR===  */

  let checkPosition = false;
  const handleNavbarFixed = () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200 && !checkPosition) {
      console.log(checkPosition);

      header.classList.add("fixed-nav");

      changeIconColors.forEach((icon) => {
        icon.classList.replace("text-white", "text-text_1");
      });

      checkPosition = true;
    } else if (checkPosition && scrollPosition <= 200) {
      console.log(checkPosition);

      header.classList.remove("fixed-nav");

      changeIconColors.forEach((icon) => {
        icon.classList.replace("text-text_1", "text-white");
      });

      checkPosition = false;
    }
  };

  //! ===HANDLE SCROLL UP=== */
  const handleButtonToTop = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      // buttonToTop.classList.replace("hidden", "flex");
      buttonToTop.classList.remove("translate-y-[170%]");
    } else {
      // buttonToTop.classList.replace("flex", "hidden");
      buttonToTop.classList.add("translate-y-[170%]");
    }
  };

  window.addEventListener("scroll", () => {
    handleNavbarFixed(), handleButtonToTop();
  });

  //! ===HANDLE CLICK MENU BAR MOBILE=== */
  let countClick = 1;
  let countClick2 = 1;
  iconMenuBar.addEventListener("click", () => {
    if (countClick % 2 !== 0) {
      listMenuMobile.classList.replace("-translate-x-full", "translate-x-0");
      iconMenuBar.classList.replace("ri-menu-line", "ri-close-line");
      blackLayer.classList.remove("hidden");

      // Ngăn cuộn chuột
      disableScroll();
    } else {
      listMenuMobile.classList.replace("translate-x-0", "-translate-x-full");
      iconMenuBar.classList.replace("ri-close-line", "ri-menu-line");
      blackLayer.classList.add("hidden");

      // bỏ ngăn cuộn chuột
      enableScroll();
    }

    countClick++;
  });

  // remove black layer
  blackLayer.addEventListener("click", () => {
    listMenuMobile.classList.replace("translate-x-0", "-translate-x-full");
    iconMenuBar.classList.replace("ri-close-line", "ri-menu-line");
    blackLayer.classList.add("hidden");
    countClick++;
    enableScroll();
  });

  // Hàm ngăn hành vi mặc định
  function preventDefault(e) {
    e.preventDefault();
  }

  // Hàm ngăn cuộn chuột
  function disableScroll() {
    window.addEventListener("wheel", preventDefault, { passive: false }); // Ngăn cuộn chuột
    window.addEventListener("touchmove", preventDefault, { passive: false }); // Ngăn cuộn cảm ứng
    window.addEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    }); // Ngăn cuộn bằng phím
  }

  // Hàm cho phép cuộn trở lại
  function enableScroll() {
    window.removeEventListener("wheel", preventDefault, { passive: false });
    window.removeEventListener("touchmove", preventDefault, { passive: false });
    window.removeEventListener("keydown", preventDefaultForScrollKeys, {
      passive: false,
    });
  }

  // Hàm ngăn cuộn bằng phím (arrow keys, page up/down)
  function preventDefaultForScrollKeys(e) {
    var keys = [37, 38, 39, 40, 32, 33, 34, 35, 36]; // Arrow keys, spacebar, page up/down
    if (keys.includes(e.keyCode)) {
      e.preventDefault();
    }
  }

  pageMobile.addEventListener("click", () => {
    if (countClick2 % 2 !== 0) {
      caretDownMobile.classList.replace("rotate-0", "-rotate-45");
      listPageMobile.classList.remove("hidden");
    } else {
      caretDownMobile.classList.replace("-rotate-45", "rotate-0");
      listPageMobile.classList.add("hidden");
    }
    countClick2++;
  });

  //! ===ISOTOPE JS=== */
  var elem = document.querySelector(".grid-card");

  var iso = new Isotope(elem, {
    // options
    itemSelector: ".grid-item",
    // layoutMode: "fitRows",
    layoutMode: "masonry",
    masonry: {
      // columnWidth: 300
      // gutter: 20,
    },
  });

  // Lấy tất cả các nút bấm
  var filterButtons = document.querySelectorAll(".button-filter-group li");

  // Gắn sự kiện click cho mỗi nút
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove("active-button-filter");
      }

      this.classList.add("active-button-filter");

      var filterValue = button.getAttribute("data-filter"); // Lấy giá trị filter từ data-filter
      iso.arrange({ filter: filterValue }); // Áp dụng bộ lọc
    });
  });

  //! ===SCROLL REVEAL JS=== */
  const sr = ScrollReveal({
    origin: "top",
    duration: 3000,
    reset: true,
  });

  // or #2:
  const topDown = {
    origin: "top",
    distance: "20%", //or % px
    duration: 2500,
    // opacity: null,
    // delay: "",
    reset: true,
  };
  const topDown2 = {
    origin: "top",
    distance: "30%", //or %
    duration: 2500,
    reset: true,
  };
  const topDown3 = {
    origin: "top",
    distance: "40%", //or %
    duration: 2500,
    reset: true,
  };

  // ScrollReveal().reveal(".about-reveal", topDown);
  // ScrollReveal().reveal(".about-reveal-2", topDown2);
  // ScrollReveal().reveal(".about-reveal-3", topDown3);

  /* ===REVEAL UTILITIES=== */
  /* reveal top down */
  sr.reveal(".reveal-top-down", { distance: "20%" });
  sr.reveal(".reveal-top-down-10", { distance: "10%" });
  sr.reveal(".reveal-top-down-10-delay1", { distance: "10%", delay: 400 });
  sr.reveal(".reveal-top-down-10-delay2", { distance: "10%", delay: 600 });
  sr.reveal(".reveal-top-down-10-delay3", { distance: "10%", delay: 800 });
  sr.reveal(".reveal-top-down-10-delay4", { distance: "10%", delay: 1000 });
  sr.reveal(".reveal-top-down-20", { distance: "20%" });
  sr.reveal(".reveal-top-down-30", { distance: "30%" });
  sr.reveal(".reveal-top-down-40", { distance: "40%" });

  /* reveal left right */
  sr.reveal(".reveal-left-right", { distance: "20%", origin: "left" });
  sr.reveal(".reveal-right-left", { distance: "20%", origin: "right" });

  /* reveal about */
  sr.reveal(".reveal-about-icon", { distance: "20%" });
  sr.reveal(".reveal-about-icon2", { distance: "30%" });
  sr.reveal(".reveal-about-icon3", { distance: "40%" });

  sr.reveal(".reveal-about-img", { distance: "20%", origin: "left" });
  sr.reveal(".reveal-about-text", { distance: "20%", origin: "right" });

  /* reveal team */
  sr.reveal(".reveal-team-text", { distance: "20%" });
  //  sr.reveal(".reveal-team-img", { distance: "20%" });
  sr.reveal(".reveal-team-img1", { distance: "20%" });
  sr.reveal(".reveal-team-img2", { distance: "30%" });
  sr.reveal(".reveal-team-img3", { distance: "40%" });

  /* reveal service */
  sr.reveal(".reveal-service-text", { distance: "20%" });
  sr.reveal(".reveal-service-item1", { distance: "20%" });
  sr.reveal(".reveal-service-item2", { distance: "30%" });
  sr.reveal(".reveal-service-item3", { distance: "40%" });
  sr.reveal(".reveal-service-item4", { distance: "20%", delay: 300 });
  sr.reveal(".reveal-service-item5", { distance: "30%", delay: 300 });
  sr.reveal(".reveal-service-item6", { distance: "40%", delay: 300 });

  /* reveal offer */
  sr.reveal(".reveal-offer-text", { distance: "20%" });
  sr.reveal(".reveal-offer-switch");

  sr.reveal(".reveal-card-1", { distance: "20%" });
  sr.reveal(".reveal-card-2", { distance: "30%" });
  sr.reveal(".reveal-card-3", { distance: "40%" });

  /* reveal product */
  sr.reveal(".reveal-product", { distance: "5%", origin: "left" });

  /* reveal testimonial */
  sr.reveal(".reveal-testimonial-text", { distance: "20%" });
  sr.reveal(".reveal-testimonial-slider", { distance: "20%" });

  /* reveal statistics */
  sr.reveal(".reveal-statistics", { distance: "10%" });

  /* reveal brand */
  sr.reveal(".reveal-brand-item-1", { distance: "40%" });
  sr.reveal(".reveal-brand-item-2", { distance: "60%", delay: 400 });
  sr.reveal(".reveal-brand-item-3", { distance: "80%", delay: 500 });
  sr.reveal(".reveal-brand-item-4", { distance: "100%", delay: 600 });
  sr.reveal(".reveal-brand-item-5", { distance: "120%", delay: 700 });
  sr.reveal(".reveal-brand-item-6", { distance: "140%", delay: 800 });

  //! ===DARK/ LIGHT MODE=== */

  const html = document.querySelector("html");
  const themeIconMobile = document.getElementById("themeIconMobile");
  const themeIconDesktop = document.getElementById("themeIconDesktop");

  if (localStorage.getItem("mode") == "dark") {
    darkMode();
  } else {
    lightMode();
  }

  const handleMode = () => {
    if (localStorage.getItem("mode") == "light") {
      darkMode();
    } else {
      lightMode();
    }
  };

  themeIconMobile.addEventListener("click", handleMode);
  themeIconDesktop.addEventListener("click", handleMode);

  function darkMode() {
    html.classList.add("dark");
    themeIconMobile.classList.replace("ri-moon-line", "ri-sun-line");
    themeIconDesktop.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
  }

  function lightMode() {
    html.classList.remove("dark");
    themeIconMobile.classList.replace("ri-sun-line", "ri-moon-line");
    themeIconDesktop.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
  }

  //! ===END DARK/ LIGHT MODE=== */

  //! ===HANDLE OFFER CARD ROTATING=== */
  const blockCardItem2s = document.querySelectorAll(".block-card-item2");
  const blockCardItem1s = document.querySelectorAll(".block-card-item1");
  const billMonthly = document.getElementById("billMonthly");
  const billAnnually = document.getElementById("billAnnually");
  let countNumber = 1;

  document.querySelector("label").addEventListener("click", function () {
    const checkbox = document.getElementById("toggle");
    if (checkbox.checked) {
      blockCardItem2s.forEach((item) => {
        item.classList.toggle("rotateY-0");
      });
      blockCardItem1s.forEach((item) => {
        item.classList.toggle("rotateY-180");
      });
    }
  });

  const handleRotateOfferCardProblem = () => {
    blockCardItem2s.forEach((item) => {
      item.classList.remove("rotateY-0");
    });
    blockCardItem1s.forEach((item) => {
      item.classList.remove("rotateY-180");
    });
  };

  //! ===HANDLE VIDEO SHOW=== */
  const toVideo = document.getElementById('toVideo');
  const video = document.getElementById('video');
  const blackVideoLayer = document.getElementById("blackVideoLayer");

  const handleShowVideo = () => {
    video.classList.replace("hidden", "fixed");
    blackVideoLayer.classList.replace("hidden", "fixed");

    // Ngăn chặn sự kiện click trên video để không ẩn video khi nhấn vào chính nó
    video.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  };

  const handleRemoveShowVideo = (event) => {
    // Kiểm tra nếu click không phải là trên video và nút toVideo thì mới ẩn video
    if (!video.contains(event.target) && event.target !== toVideo) {
      video.classList.replace("fixed", "hidden");
      blackVideoLayer.classList.replace("fixed", "hidden");

      // Pause và đặt lại thời gian video về 0 khi ẩn
      video.pause();
      video.currentTime = 0;
    }
  };

  toVideo.addEventListener("click", (event) => {
    // Ngăn chặn sự kiện lan truyền lên document khi nhấn nút
    event.stopPropagation();
    handleShowVideo();
  });

  document.addEventListener("click", handleRemoveShowVideo);
  

  //! ===WINDOW LOAD=== */
  window.addEventListener("load", () => {
    header.classList.remove("fixed-nav");
    handleRotateOfferCardProblem();
  });

  //! ===SWIPER JS=== */
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // slidesPerView: 2, // Một slide trên màn hình
    // spaceBetween: 30, // Khoảng cách giữa các slide

    spaceBetween: 30, // Có thể giảm khoảng cách giữa các slide trên thiết bị di động

    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 50, // Có thể giảm khoảng cách giữa các slide trên thiết bị di động
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 30, // Có thể giảm khoảng cách giữa các slide trên thiết bị di động
        slidesPerGroup: 2, // Trượt 2 slide mỗi lần
        // centeredSlides: true,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //! ===COUNT UP JS===  */
  $(".counter").countUp({
    time: 2000,
    delay: 10,
  });
}); /* end document load content */


