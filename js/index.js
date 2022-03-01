const lodeData = inputValue => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => displayData(data.data))
}
lodeData();
const displayData = phones => {
    const phoneDetails = document.getElementById('phone-details');
    for(const phone of phones){
        console.log(phone.phone_name);
    }
}