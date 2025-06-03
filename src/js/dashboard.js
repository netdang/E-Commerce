"use strict";
const API_URL = "https://api.escuelajs.co/api/v1/";
let bdBody = document.querySelector("#tbBody");
let createProductForm = document.querySelector("#create-product");
let createProductButton = document.querySelector("#create-product-button")
let categoriesOption = document.querySelector("#categories");
let successAlert = document.querySelector("#alert-3");

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

let data;
// Display table body pro
async function fetchProductDisplay() {
  try {
    const response = await fetch(`${API_URL}products/`);
    data = await response.json();
    displayProudcts();
  } catch (error) {
    console.log(error);
  }
}



// edit product
let editProductForm = document.querySelector("#edit-product");
let editModal = document.querySelector("#edit-modal");
let editSuccessAlert = document.querySelector("#alert-edit-success");

const openEditModal = (productId) => {
  const product = data.find((item) => item.id === productId);
  if (product) {
    document.querySelector("#edit-id").value = product.id;
    document.querySelector("#edit-title").value = product.title;
    document.querySelector("#edit-price").value = product.price;
    document.querySelector("#edit-description").value = product.description;
    document.querySelector("#edit-image").value = product.images[0];

    const categorySelect = document.querySelector("#edit-categories");
    if (categorySelect) {
      categorySelect.value = product.category.id;
    }
    const modal = new Modal(editModal);
    modal.show();
  }
};
const updateProduct = async (e) => {
  e.preventDefault();
  const id = document.querySelector("#edit-id").value;
  const title = document.querySelector("#edit-title")?.value.trim();
  const price = parseFloat(document.querySelector("#edit-price")?.value);
  const description = document.querySelector("#edit-description").value.trim();
    const image = document.querySelector("#edit-image")?.value;

  const productData = {
    title,
    price,
    description,
    images: [image],
  };

  try {
    const response = await fetch(`${API_URL}products/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const result = await response.json();
    if (result) {
      const alert = document.querySelector("#alert-3");
      alert.style.display = "flex";
      alert.textContent = "product updated successfully!";
      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);


      fetchProductDisplay();
      const modal = Modal.getInstance(editModal);
      modal.hide();
    }
  }catch (error) {
    console.log(error);
  }
};

editProductForm.addEventListener("submit", updateProduct);

// display
const displayProudcts = () => {
  bdBody.innerHTML = data
    .map(
      (product) => `
      <div
      >
      <tr class="hover:bg-gray-500 hover:text-white  ">
              <td class="ps-0 ">
                <img
                  src=${product.images[0]}
                  class="w-16  md:w-32 md:max-h-32 object-fill "
                  alt="Apple Watch"
                />
              </td>

              <td class="py-4 font-semibold text-gray-900 dark:text-white">
                ${product.title}
              </td>

              
               <td
                  class="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                >
                  $${product.price}
                </td>
              <td class="py-4">
              <button
                 onclick="openEditModal(${product.id})"
                 class=" cursor-pointer font-medium text-blue-600 dark:text-white"
                  ><span class="material-symbols-outlined">
                    edit
                  </span>
                </button>
                <button
                  onclick="deleteProduct(${product.id})"
                  class="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                 <span class="material-symbols-outlined">
                        delete
                  </span>
                </button>
              </td>
            </tr>
          </div>
          `
    )
    .join("");
};
fetchProductDisplay();

// declear let to get id from product
let selectedId;
const setProductId = (id) => {
  // console.log("id :" , id);
  selectedId = id;
  // console.log("selected Id :", selectedId);
};

const deleteProduct = (id) => {
  setProductId(id);
  data = data?.filter((data) => data.id !== id);
  displayProudcts();
};

const fetchAllCategories = async () => {
  const response = await fetch(`${API_URL}categories/`);
  const categories = await response.json();
  categoriesOption.innerHTML = categories.map(
    (cat) => `
    <option value= ${cat.id}>${cat.name}</option>
    `
  );
};
fetchAllCategories();

//create product
const createProduct = async (e) => {
  e.preventDefault();
  const title  = document.querySelector("#title")?.value.trim();
  const price = parseFloat(document.querySelector("#price")?.value);
  const description = document.querySelector("#description")?.value.trim();
  const category = parseInt(document.querySelector("#categories")?.value);
  const image = document.querySelector("#image")?.value;

  const productData = {
    title,
    price,
    description,
    categoryId: category,
    images: [image],
  };
  try {
    const response = await fetch(`${API_URL}products/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const result = await response.json();
    if (result) {
      successAlert.style.display = "flex";
      setTimeout(() =>{
        successAlert.style.display = "none";
      }, 3000);
      fetchProductDisplay();
    }
  } catch (error) {
    console.log(error);
  }
};
createProductForm.addEventListener("submit", createProduct);
