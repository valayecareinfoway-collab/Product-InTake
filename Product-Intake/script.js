let product_name = document.getElementById("product_name");
let product_price = document.getElementById("product_price");
let product_image = document.getElementById("product_image");
let product_type = document.getElementById("product_type");
let add_product_btn = document.getElementById("add_product_btn");
let output_table = document.getElementById("output_table");
let product_form = document.getElementById("product_form");
let empty_row = document.getElementById("empty_row");
let cart_items = document.getElementById("cart_items");
let cart_empty = document.getElementById("cart_empty");
let cart_total = document.getElementById("cart_total");
let cart_count = document.getElementById("cart_count");
let checkout_btn = document.getElementById("checkout_btn");

let products = [];
let edit_product = -1;

let cart = [];

function render_products() {
    output_table.innerHTML = "";

    if (products.length == 0) {
        output_table.appendChild(empty_row);
        empty_row.classList.remove("hidden");
        return;
    } else {
        empty_row.classList.add("hidden");
    }

    for (let i = 0; i < products.length; i++) {

        let image_src = products[i].image
            ? URL.createObjectURL(products[i].image)
            : "";

        output_table.innerHTML +=
            `
            <div class="bg-white border border-line rounded-sm overflow-hidden flex flex-col rounded-xl">

                <div class="aspect-[4/3] bg-paper border-b border-line flex items-center justify-center text-ink/30 overflow-hidden">
                    ${image_src
                ? `<img src="${image_src}" class="w-full h-full object-cover hover:scale-[1.1] transition duration-700 ease-in-out">`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/>
                           </svg>`
            }
                </div>

                <div class="p-4 flex flex-col gap-2 flex-1">

                    <div class="flex items-start justify-between gap-3">
                        <h3 class="font-medium text-ink leading-snug capitalize">${products[i].name}</h3>
                        <span class="shrink-0 bg-amber/10 text-amber text-sm font-semibold px-2.5 py-1 rounded-sm">₹${Number(products[i].price).toFixed(2)}</span>
                    </div>

                    <p class="text-sm text-ink/60">${products[i].type}</p>

                    <div class="flex gap-2 pt-3 mt-auto border-t border-line">

                        <button onclick="edit_btn(${i})" type="button" title="Edit"
                            class="inline-flex items-center justify-center w-9 h-9 border border-line rounded-sm text-ink/60 hover:border-amber hover:text-amber transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                            </svg>
                        </button>

                        <button onclick="delete_btn(${i})" type="button" title="Remove"
                            class="inline-flex items-center justify-center w-9 h-9 border border-line rounded-sm text-ink/60 hover:border-rust hover:text-rust transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-7 0v12a1 1 0 001 1h6a1 1 0 001-1V7"/>
                            </svg>
                        </button>

                        <button onclick="cartShow(${i})" type="button"
                            class="flex-1 inline-flex items-center justify-center gap-1.5 bg-ink text-paper rounded-sm text-sm font-medium hover:bg-ink/90 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.8L21 8H6M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
                            </svg>
                            Add to cart
                        </button>

                    </div>

                </div>
            </div>
            `
    }
}

function render_cart_list() {
    cart_items.innerHTML = "";

    if (cart.length == 0) {
        cart_items.appendChild(cart_empty);
        cart_empty.classList.remove("hidden");
        cart_total.innerText = "₹0.00";
        cart_count.innerText = 0;
        checkout_btn.disabled = true;
        return;
    } else {
        cart_empty.classList.add("hidden");
        checkout_btn.disabled = false;
    }

    let total = 0;
    let count = 0;

    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price * cart[i].quantity;
        count += cart[i].quantity;

        let image_src = cart[i].image
            ? URL.createObjectURL(cart[i].image)
            : "";

        cart_items.innerHTML += `
            <div class="flex gap-3 items-center border-b border-line pb-4">
                <div class="w-14 h-14 rounded-sm bg-paper border border-line flex items-center justify-center overflow-hidden shrink-0">
                    ${image_src
                ? `<img src="${image_src}" class="w-full h-full object-cover">`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6 text-ink/30">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/>
                           </svg>`
            }
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-medium text-ink capitalize truncate">${cart[i].name}</p>
                    <p class="text-sm text-ink/60 mb-1.5">₹${Number(cart[i].price).toFixed(2)}</p>

                    <div class="inline-flex items-center border border-line rounded-sm">
                        <button onclick="cart_decrease(${i})" type="button"
                            class="w-7 h-7 flex items-center justify-center text-ink/60 hover:text-red-400 transition">
                            −
                        </button>
                        <span class="w-8 text-center text-sm text-ink">${cart[i].quantity}</span>
                        <button onclick="cart_increase(${i})" type="button"
                            class="w-7 h-7 flex items-center justify-center text-ink/60 hover:text-green-400 transition">
                            +
                        </button>
                    </div>
                </div>
                <button onclick="cart_remove(${i})" type="button" class="text-ink/40 hover:text-rust transition shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>
                    </svg>
                </button>
            </div>
        `;
    }

    cart_total.innerText = "₹" + total.toFixed(2);
    cart_count.innerText = count;
}

function submitbtn() {

    if (product_name.value != "" && product_type.value != "" && product_price.value != "") {

        if (edit_product == -1) {

            let product = {
                name: product_name.value.toLowerCase(),
                price: product_price.value,
                image: product_image.files[0],
                type: product_type.value
            };

            products.push(product);

        } else {

            products[edit_product].name = product_name.value.toLowerCase();
            products[edit_product].price = product_price.value;
            products[edit_product].type = product_type.value;

            if (product_image.files.length > 0) {
                products[edit_product].image = product_image.files[0];
            }

            edit_product = -1;
            add_product_btn.innerText = "Add product";
        }

        render_products();

        product_name.value = "";
        product_price.value = "";
        product_image.value = "";
        product_type.value = "Select a type";
    }
}

add_product_btn.addEventListener("click", submitbtn);

function delete_btn(i) {
    products.splice(i, 1);
    render_products();
    product_name.value = "";
    product_price.value = "";
    product_image.value = "";
    product_type.value = "";
}

function edit_btn(i) {

    product_name.value = products[i].name;
    product_price.value = products[i].price;
    product_type.value = products[i].type;

    edit_product = i;

    add_product_btn.innerText = "Update";

    product_form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function cartShow(i) {
    if (cart.includes(i)) {
        products[i].quantity++;
    }else {
        cart.push({ ...products[i], quantity: 1 });
    }
        render_cart_list()
    document.getElementById('cart_drawer').classList.remove('translate-x-full');
    document.getElementById('cart_backdrop').classList.remove('opacity-0', 'pointer-events-none');
}

function cartShowBtn() {
    document.getElementById('cart_drawer').classList.remove('translate-x-full');
    document.getElementById('cart_backdrop').classList.remove('opacity-0', 'pointer-events-none');
}

function cartClose() {
    document.getElementById('cart_drawer').classList.add('translate-x-full');
    document.getElementById('cart_backdrop').classList.add('opacity-0', 'pointer-events-none');
}

function cart_increase(i) {
    cart[i].quantity++;
    render_cart_list();
}

function cart_decrease(i) {
    if (cart[i].quantity > 1) {
        cart[i].quantity--;
    } else {
        cart.splice(i, 1);
    }
    render_cart_list();
}

function cart_remove(i) {
    cart.splice(i, 1);
    render_cart_list();
}

checkout_btn.addEventListener("click", function () {

    confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 1.1, x: 0.9 }
    });

    cart = [];              // order placed, empty the cart
    render_cart_list();     // redraws the drawer, resets total and badge, disables the button

    setTimeout(cartClose, 1200);   // close the drawer after the confetti has played
});