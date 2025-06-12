"use strict";
const API_URL = "https://api.escuelajs.co/api/v1/products";
let cardContenair = document.querySelector("#cards");
let cardContenairDiplay = document.querySelector("#cardsContainer");

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

async function fetchProductDisplay() {
  try {
    const respones = await fetch(API_URL);
    const data = await respones.json();
    cardContenair.innerHTML = data
      .slice(8, 12)
      .map(
        (product) => `
       <div
            class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="./productdetail.html?id=${product.id}">
              <img
                class="p-8 rounded-t-lg aspect-[3/4] object-fit-cover transition duration-200 ease-in-out transform hover:scale-105 "
                src=${
                  product.images ||
                  "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                }
                alt="product image"
              />
            </a>
          </div>`
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
}
fetchProductDisplay();

const fetchProduct = async () => {
  try {
    const respones = await fetch(API_URL);
    const data = await respones.json();
    cardContenairDiplay.innerHTML = data.slice(12,20)
      .map(
        (product) => `
       <div
            class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="productdetail.html?id=${product.id}">
              <img
                class="p-8 rounded-t-lg aspect-[3/4] object-fit-cover transition duration-200 ease-in-out transform hover:scale-105 "
                src=${
                  product.images[0] ||
                  "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                }
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl text-center line-clamp-1 font-semibold tracking-tight text-gray-700 dark:text-white"
                >
                  ${product?.title || "untitle Product"}
                </h5>
              </a>
              <div class="flex items-center justify-center gap-4 mt-2.5 ">
                <span class="  text-[16px] font-semibold text-center text-gray-600 dark:text-white"
                  >$${product.price || "unknown"}</span
                >
                <h5
                  class="text-[16px] text-center text-red-600 font-semibold tracking-tight dark:text-white"
                >15%  OFF 
                </h5>
              </div>
              <div class="flex items-center justify-center mt-2.5 mb-5 ">
                <div class="flex items-center ">
                  <svg
                    class="w-4 h-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <span
                  class=" text-gray-600 text-[16px] font-semibold rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                  >(200)</span
                >
              </div>
            </div>
          </div>`
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
fetchProduct();

