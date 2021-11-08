document.getElementById('form_sub').addEventListener("click", getProducts);
function getProducts(){
    let productName = document.getElementById("name").value;
    let productDescription = document.getElementById("description").value;
    let productPrice = document.getElementById("price").value;
    let productURL = document.getElementById("URL").value;
    let remo = Number(productPrice);

    let my_product = {
        ProductId: 10,
        image: productURL,
        name: productName,
        description: productDescription,
        price: remo,
        status: "Free Shopping",
    };
    sessionStorage.setItem("my_product", JSON.stringify(my_product));
    


    alert("product added!");
    window.location.href = "products.html";
}