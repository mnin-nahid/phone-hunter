const lodeData = inputValue => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.data))
}
// lodeData();
const phoneDetails = id => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data))
};

const showPhoneDetails = data => {
    const showPhoneSection = document.getElementById('phone-details');
    showPhoneSection.style.display = "block";
    console.log(data)
    showPhoneSection.innerHTML = `
        <div class="container p-3">
                <div class="row">
                    <div class="col-md-6 d-flex img-fluid">
                        <img class="d-flex mx-auto" src="${data.image}" alt="">
                    </div>
                    <div class="col-md-6">
                        <h3>${data.name} - Specification</h3>
                        <table class="table">
                            <thead>
                                <h4>Main Features</h4>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Release Date</td>
                                    <td>${data.releaseDate}</td>
                                </tr>
                                <tr>
                                    <td>ChipSet</td>
                                    <td>${data.mainFeatures.chipSet}</td>
                                </tr>
                                <tr>
                                    <td>Display</td>
                                    <td>${data.mainFeatures.displaySize}</td>
                                </tr>
                                <tr>
                                    <td>Memory</td>
                                    <td>${data.mainFeatures.storage}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table">
                            <thead>
                                <h4>Others Features</h4>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bluetooth</td>
                                    <td>${data.others.Bluetooth}</td>
                                </tr>
                                <tr>
                                    <td>GPS</td>
                                    <td>${data.others.GPS}</td>
                                </tr>
                                <tr>
                                    <td>NFC</td>
                                    <td>${data.others.NFC}</td>
                                </tr>
                                <tr>
                                    <td>Radio</td>
                                    <td>${data.others.Radio}</td>
                                </tr>
                                <tr>
                                    <td>USB</td>
                                    <td>${data.others.USB}</td>
                                </tr>
                            <tr>
                                <td>WLAN</td>
                                <td>${data.others.WLAN}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}
const displayData = phones => {
    // const phoneDetails = document.getElementById('phone-details');
    const showPhone = document.getElementById('scarch-result');
    // document.getElementById('scarch-result').textContent = "";
    document.getElementById('not-found').style.display = "block";
    document.getElementById('search-your-phone').style.display = "none";
    console.log(phones);
    for (const phone of phones) {
        if(phones.lenth === 20){
            console.log("nooooooooooo");
        }
        // console.log(phone);
        document.getElementById('not-found').style.display = "none";
        document.getElementById('search-your-phone').style.display = "none";
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');
        div.classList.add('col-12');
        div.innerHTML = `
        <div class="shadow p-3 mb-5 bg-body rounded-3">
            <img class="mx-auto d-block" src="${phone.image}" alt="">
            <p class='pt-3'>${phone.phone_name}</p>
            <p>Brand: ${phone.brand}</p>
            <a href="#phone-details">
            <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-primary">Details</button>
            </a>
            
        </div>
        `;
        showPhone.appendChild(div);
    }
    document.getElementById('spinner').style.display = 'none';
}
// const mnin = lodeData('oppo');
// console.log(mnin);
document.getElementById('search-button').addEventListener('click', function () {
    
    const searchFild = document.getElementById('input-search-fild').value;
    lodeData(searchFild);
    document.getElementById('input-search-fild').value = "";
    document.getElementById('scarch-result').textContent = "";
    
    document.getElementById('not-found').style.display = "none";
    document.getElementById('search-your-phone').style.display = "none";
    document.getElementById('phone-details').style.display = "none";
    document.getElementById('spinner').style.display = 'block';
})