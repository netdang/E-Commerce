"use trick";

let mainImage = document.querySelector("#mainImage");
let productTitle = document.querySelector("#productTitle");
let price = document.querySelector("#price");
let desc = document.querySelector("#description");
const API_URL = "https://api.escuelajs.co/api/v1/products/";

const fetchProductDetail = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productid = urlParams.get("id");
  if (!productid) return;

  try {
    const respones = await fetch(`${API_URL}${productid}`);
    const data = await respones.json();
    mainImage.src =
      data.images[0] ||
      "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
    productTitle.innerHTML = data.title || "untitle Product";
    price.innerHTML = data.price || "unknown";
    desc.textContent = data.description || "";
    /////
    const fetchProduct = async () => {
      try {
        const imageRelated = document.querySelector("#imgRelated");
        const respones = await fetch(API_URL);
        const data = await respones.json();
        imageRelated.innerHTML = data
          .slice(12, 15)
          .map(
            (product) => `
       <div
            class="mt-6 flex space-x-4"
          >
            <a href="productdetail.html?id=${product.id}">
               <img class="w-full h-auto object-cover rounded-lg" 
               src=${product.images[0]}
                alt="Additional Image 1">
            </a>
          </div>`
          )
          .join("");
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  } catch (error) {
    console.log(error);
  }
};
fetchProductDetail();
