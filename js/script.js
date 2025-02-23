// BURGER MENU --------------------------------------------------------

// toggle class active burger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika burger di click
document.querySelector("#burger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// SEARCH FORM --------------------------------------------------------

// toggle class active search form

const searchForm = document.querySelector(".search-form");

const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// SHOPPING CART -------------------------------------------------------

// toggle class active cart

const cart = document.querySelector(".shopping-cart");

// ketika cart di click
document.querySelector("#cart").onclick = () => {
  cart.classList.toggle("active");
};

// HILANG NAVBAR ETC ---------------------------------------------------

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#burger");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#cart");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active");
  }
});

// SUBMIT -------------------------------------------------------------

// SUBMITBUTTON
const form = document.getElementById("myform");
const sendButton = document.getElementById("submit");

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Tombol hanya aktif jika semua input terisi dan email valid
  sendButton.disabled = !(name && email.includes("@") && message);
}

// Cek form setiap ada perubahan
form.addEventListener("input", validateForm);

// Kirim email ketika tombol diklik
sendButton.addEventListener("click", function () {
  if (!sendButton.disabled) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:merintea31@gmail.com?subject=Pesan dari Customer&body=Halo, saya ${name} (${email}) ingin bertanya: ${encodeURIComponent(
      message
    )}`;

    // Buka Gmail dengan data yang sudah terisi
    window.location.href = mailtoLink;
  }
});

// POPUP CONTACT ------------------------------------------------------

// popup contact html

const openPopup = document.querySelector(".btn");
const closePopup = document.querySelector(".close-popup");
const overlay = document.getElementById("popupOverlay");

// Fungsi untuk membuka popup
openPopup.addEventListener("click", () => {
  overlay.classList.add("active");
});

// Fungsi untuk menutup popup
closePopup.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Klik di luar popup untuk menutup
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

// modal box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailImage = document.querySelector(".detail");

itemDetailImage.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
