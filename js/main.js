
let btn = document.querySelectorAll(".btn");
let sum =0;
let count =1;

btn.forEach((btn) =>{

    btn.addEventListener("click",function(){
        let counter = document.querySelector(".counter");
        counter.innerHTML = `(${count++})` ;

        let dishName =document.querySelector(".dishName");
        let cardBody = btn.closest(".card").querySelector(".card-body");

        dishName.innerHTML += `${cardBody.innerHTML}<hr>` ;

        let total = document.querySelector(".total");
        let price = parseFloat(btn.closest(".card").querySelector(".price").innerHTML) ;
        sum += price;
        total.innerHTML = `total price: ${sum}$`;

        let confirm = document.querySelector(".confirm");
        confirm.style.display="block";
        
    });
    
});


let confirmBtn =document.querySelector(".confirm")
confirmBtn.addEventListener('click', function() {
    Swal.fire({
        title: 'Order Confirmed',
        text: 'we hope you enjoy your food!',
        icon: 'success',
        confirmButtonText: 'Thank You'
    });


})
