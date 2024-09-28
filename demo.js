
document.querySelector("#cartcount").style.display = "none";    //make cartcount invisible on pageload
cart = [];

products = [
    {
        name: "Carnation",
        price: 100,
        id:1,
        imgpath: "https://images.unsplash.com/photo-1603178455924-ef33372953bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
        catname:"Anniversary"
    },
    {
        name: "Roses",
        price: 200,
        id:2,
        imgpath: "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        catname:"Anniversary"
    },
    {
        name: "Gerberas",
        price: 300,
        id:3,
        imgpath: "https://images.unsplash.com/photo-1567418938902-aa650a3eb346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1897&q=80",
        catname:"Birthday"
    },
    {
        name: "Lilies",
        price: 100,
        id:4,
        imgpath: "https://images.unsplash.com/photo-1595919303535-4481e02aad66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
        catname:"Birthday"
    },
    {
        name: "Orchids",
        price: 200,
        id:5,
        imgpath: "https://images.unsplash.com/photo-1582986546834-0c90afdb0133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        catname:"Appreciation"
    },
    {
        name: "Tulips",
        price: 300,
        id:6,
        imgpath: "https://images.unsplash.com/photo-1561181226-e8a7edd504c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        catname:"Appreciation"
    },
    {
        name: "Pink Roses",
        price: 300,
        id:7,
        imgpath: "https://images.unsplash.com/photo-1573814976235-5ff0853cd37b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        catname:"Love & Affection"
    },
    {
        name: "White Lilies",
        price: 300,
        id:8,
        imgpath: "https://images.unsplash.com/photo-1587317996237-eddd7e834d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        catname:"Love & Affection"
    }
]


if (products.length > 0) {
    var str = "";
   
    for (res of products) {

        str += `<div class='col-xl-3'>
        <img  src='${res.imgpath}' class='fluid' />
        <h5 class="cart">${res.name}</h5>
        <h5 class="cart">₹ ${res.price}</h5>
        <p  class="cart"  ><button class="bt" id="cartbtn" onclick="addtocart(${products.indexOf(res)})" >ADD TO CART</button>
</p>
    </div>`
    }
    str.innerHTML += `</div>`;
    document.querySelector("#rw").innerHTML=str;
}

function addtocart(index) {
    document.querySelector("#cartcount").style.display = "block"; //show carcount as we add product to cart
    cart.push(products[index]); //add one by one product to cart

    var productCount = cart.length; // counts number of items in the cart
    document.querySelector("#cartcount").innerHTML = productCount;//assign product count of cart to lable cartcount
}


function cartlocal(){
    var i=1;
    for (res of cart)
    {
        window.sessionStorage.setItem(i, JSON.stringify(res));
        i++;
    }
    // window.open(
    //     "cart.html", "_blank");

}

//modal script
$(document).ready(function(){
    $("#btnlogin").click(function(){
        $("#myModal").modal('show');
    })		
});


//Go to top Script
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    // document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  //document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(".flcat").click(function(){
     var catname = $(this).attr("for");
     filtered_array = products.filter(val=>val.catname==catname);
    console.log(filtered_array);

    if (filtered_array.length > 0) {
        var str = "";
       
        for (res of filtered_array) {
    
            str += `<div class='col-xl-3'>
            <img  src='${res.imgpath}' class='fluid' />
            <h5 class="cart">${res.name}</h5>
            <h5 class="cart">₹ ${res.price}</h5>
            <p  class="cart"  ><button class="bt" id="cartbtn" onclick="addtocart(${filtered_array.indexOf(res)})" >ADD TO CART</button>
    </p>
        </div>`
        }
        str.innerHTML += `</div>`;
        document.querySelector("#rw").innerHTML=str;
    }
});