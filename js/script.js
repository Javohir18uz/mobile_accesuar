let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 3;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}


// *рудздздлвыьмол*//

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('payment-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ma'lumotlarni olish
        var name = document.getElementById('name').value;
        var address = document.getElementById('address').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
        var card = document.getElementById('card').value;
        var expiry = document.getElementById('expiry').value;
        var cvv = document.getElementById('cvv').value;

        // Bu erda to'lovni amalga oshirish logikasi bo'ladi
        // Sizning to'lov integratsiyangizga bog'liq

        // To'lov muvaffaqiyatli amalga oshirildi deb foydalanuvchiga xabar bering
        alert('To\'lov muvaffaqiyatli amalga oshirildi!');
    });
});

  // Function to display accessories
  function displayAccessories() {
    const accessoryList = document.getElementById("accessory-list");
    accessoryList.innerHTML = '../home.html';
    
    accessories.forEach(accessory => {
      const accessoryDiv = document.createElement('div');
      accessoryDiv.classList.add('accessory');
      accessoryDiv.innerHTML = `<h2>${accessory.name}</h2><p>${accessory.description}</p><p>${accessory.price}</p>`;
      
      accessoryDiv.addEventListener('click', function() {
        showModal(accessory);
      });
      
      accessoryList.appendChild(accessoryDiv);
    });
  }
  
  // Function to display modal with accessory details
  function showModal(accessory) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    
    modalTitle.textContent = accessory.name;
    modalDescription.textContent = accessory.description;
    modalPrice.textContent = accessory.price;
    
    modal.style.display = 'block';
    
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
    
    const buyBtn = document.getElementById('buy-button');
    buyBtn.onclick = function() {
      // Redirect to purchase page or execute purchase logic
      window.location.href = "tolov.html";
    }
  }
  
  // Initial call to display accessories
  displayAccessories();


document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.size-button').forEach(button => {
            button.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});

document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.color-button').forEach(button => {
            button.classList.remove('selected');
        });
        button.classList.add('selected');
    });
});

document.getElementById('buyButton').addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-button.selected').textContent;
    const selectedColor = document.querySelector('.color-button.selected').textContent;
    const paymentMenu = document.getElementById('paymentMenu');

    paymentMenu.innerHTML = `<h3>To'lov menyusi</h3><p>Mahsulot: iPhone 15 Pro Max</p><p>Xotira hajmi: ${selectedSize}</p><p>Rangi: ${selectedColor}</p>`;
    paymentMenu.style.display = 'block';
});

