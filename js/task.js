const URL = "http://localhost:5000/Food";
fetch(URL)
    .then(res => res.json())
    .then(data => {

        data.map((food) => {
            // console.log("Title - " + post.title);
            // console.log("Title - " + post.body);
            console.log(food);

        })

    })
    .catch(err => {
        // var error = document.createElement("p");
        // error.innerHTML = "Try Again :)";
        // document.getElementById("printPosts").appendChild(error);
    })



login_btn = document.getElementById("login_check");
logout_user_btn = document.getElementById("logout_user");
show_user_name_label = document.getElementById("show_user_name");

email = localStorage.getItem("email");
password = localStorage.getItem("password");

(function() {
    show_user_name_label.innerHTML = email;
})();

function addUser() {
    localStorage.setItem("email", "Rushi");
    localStorage.setItem("password", "1234");
}

is_user_login();

function login_check() {

    email = localStorage.getItem("email");
    password = localStorage.getItem("password");

    useremail = document.getElementById("email").value;
    userpassword = document.getElementById("password").value;

    if (email === useremail && password === userpassword) {
        console.log("success");
        window.location.href = "index.html";
        is_user_login();
    } else {
        alert("Invalid Email & Password")
    }

}

function logoutUser() {
    if (confirm("you want to logout")) {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        is_user_login();
        reload = location.reload();

    }
}

function is_user_login() {

    if (email === null) {
        // console.log("login" + email);
        show_user_name_label.innerHTML = "login";
        show_user_name_label.href = "login.html"
        logout_user_btn.style.display = "none";


    } else {
        // console.log("name" + email);
        show_user_name_label.innerHTML = "Welcome " + email;
        show_user_name_label.href = "javascript:void(0)"

    }
}

// Login End

// Qty Logic
qty_count = document.querySelector(".qty_count");
plus_btn = document.querySelectorAll(".plus_btn");
sub_btn = document.querySelectorAll(".sub_btn");
item_price = document.querySelector(".item_price");

price = (item_price).innerText;
temp_qty = 1;

// for (var a = 0; a < plus_btn.length; a++) {
plus_btn.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        // console.log(btn.innerHTML);
        temp_qty++;
        // e.prev(".qty_count").innerHTML = temp_qty;
        qty_count.innerHTML = temp_qty;
        result = price * temp_qty;
        item_price.innerHTML = result;
    })
});
// for (var b = 0; b < sub_btn.length; b++) {
sub_btn.forEach(function(btn) {
    btn.addEventListener("click", (e) => {
        if (temp_qty > 1) {
            // console.log(btn.innerHTML);
            temp_qty--;
            // e.next(".qty_count").innerHTML = temp_qty;
            qty_count.innerHTML = temp_qty;
            result = price * temp_qty;
            item_price.innerHTML = result;
        }
    });
});
// }
// End Qty Logic

// Add to Cart
cart_total_amt_span = document.getElementById("cart_total_amt");
list_qty_span = document.getElementById("list_qty");

cart_section = document.querySelector(".cart_section");
total_checkout_section = document.querySelector(".total_checkout_section");

// cart_total_arr = [];

function add_to_cart() {
    if (email !== null) {
        cart_section.style.display = "block";

        // console.log("item Added");
        cart_list = document.getElementById("cart_list");
        // console.log(cart_list);        
        li = document.createElement('li');
        // li.innerHTML = "item 1";
        html = ` <img src="image/fast_food/img1.jpg" alt="">
        <div class="d-flex flex-column pl-3">
            <h5>Item Name</h5>
            <h6>Rs <span class="cart-singal-item-price">320</span> </h6>
        </div>`;
        li.innerHTML = html;
        cart_list.appendChild(li);

        total_checkout_section.style.display = "block";
        cart_singal_item_price = parseInt($(".cart-singal-item-price").text());
        // cart_total_arr.push(cart_singal_item_price);

        // var total = 0;
        // $.each(cart_total_arr, function() {
        //     total += this;
        // });
        // console.log(cart_singal_item_price);
    } else {
        alert("Login First for order");
    }

    li_count = $('ul#cart_list li').length;
    total = parseFloat(li_count * cart_singal_item_price);
    // console.log(total);
    cart_total_amt_span.innerHTML = total;
    list_qty_span.innerHTML = li_count;
}
// End Add to Cart


(function() {
    console.log(window.location);
}())