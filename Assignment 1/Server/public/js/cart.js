
let p_container = document.getElementById('product_container')
function loadCart(){
    fetch('http://127.0.0.1:3000/products/all')
    .then((response) => response.json())
    .then((data) => {
    p_container.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        p_container.innerHTML +=
        `<div class="card mb-4">
        <div class="card-body p-4 bg-dark">
            <div class="row align-items-center">
            <div class="col-md-2" style="display:flex; justify-content:center; align-items:center;">
                <img src="${data[i].pphoto}" style="max-height:150px; max-width:150px;" class="img-fluid" alt="Generic placeholder image">
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted text-light mb-4 pb-2">Name</p>
                <p class="lead fw-normal mb-0 text-light">${data[i].name}</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted text-light mb-4 pb-2">Quantity</p>
                <p class="lead fw-normal mb-0 text-light">1</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted text-light mb-4 pb-2">Price</p>
                <p class="lead fw-normal text-light mb-0">$${data[i].price}</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted text-light mb-4 pb-2">Total</p>
                <p class="lead fw-normal text-light mb-0">$${data[i].price}</p>
                </div>
            </div>
            </div>
        </div>
    </div>`
    }
    });
}