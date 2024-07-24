const button = document.getElementById('download-app')
button.style.marginTop = "20px"
button.style.marginLeft = "40px"
button.style.backgroundColor = "rgb(187, 14, 135)"
button.style.width = "300px"
button.style.height = "50px"
button.addEventListener('click', () =>{
    window.open("https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=190171f24ff9ff-0ed0de70273711-26001f51-100200-190171f2500e4b", '_blank')
    
})

const viewAll = document.getElementById('view-all')
viewAll.style.marginTop ="23px"
viewAll.style.marginLeft = "110px"
viewAll.style.width = "160px"
viewAll.style.height = "60px"
viewAll.addEventListener('click', () => {
    window.open("https://www.meesho.com/essentials/pl/9ol")
})

const newViewAll = document.getElementById('new-view-all')
newViewAll.style.marginTop ="23px"
newViewAll.style.marginLeft = "110px"
newViewAll.style.width = "160px"
newViewAll.style.height = "60px"
newViewAll.addEventListener('click', () => {
    window.open("https://www.meesho.com/electronics/pl/45g")
})




// <!------------------ be Fshion ------------------- -->
function beFashionFarword(){
fetch('data.json') //fetching data from data.json file
.then(res => res.json()) //converting result into json format
.then(data => {

    let fashioncard = document.querySelector('#fashion-card')
    fashioncard.innerHTML =`<h4>Women's Store</h4>` //adding html content dynamically

    let mensCard = document.querySelector('#be-mens')
    mensCard.innerHTML ="<h4>Men's Store</h4>"
    let kidsCard = document.querySelector('#be-kids')
    kidsCard.innerHTML = "<h4>Kid's Store</h4>"
   
   
    if(Array.isArray(data)){
        data.forEach(ele => {
            if(!ele.mens && !ele.kids){ //finding data for women's section
                fashioncard.innerHTML += `
            <div class="fashion-item">
                 <a href ="https://www.meesho.com/women-store/pl/3g5o" target="_blank"><img src="${ele.image}" alt="${ele.name}"></a>
                    <h5>${ele.name}</h5>
            </div>` //inserting fetched data into div element
            }else if(ele.mens){ //finding men's data
                ele.mens.forEach(menstore =>{
                    mensCard.innerHTML +=`
                <div class="fashion-mens">
                <a href ="https://www.meesho.com/men-store/pl/3g5p" target="_blank"><img src="${menstore.image}" alt="${menstore.name}"></a>
                <h5>${menstore.name}</h5>
                </div>`
                })
            }else if(ele.kids){ //finding kids data
                ele.kids.forEach(kidstore =>{
                    kidsCard.innerHTML +=`
                        <div class="fashion-kids">
                       <a href ="https://www.meesho.com/kids-store/pl/3g5q" target="_blank"><img src="${kidstore.image}" alt="${kidstore.name}"></a>
                       <h5>${kidstore.name}</h5>
                       </div>` 
                    })
                
            }
            
        })
    }
}

)
.catch(error => console.error('Error fetching data:', error));
}
beFashionFarword()

// <!------------------ EssentialsData ------------------- -->

function fetchEssentialsData() {
fetch('essentials.json') //fetching essential data from essential.json file
.then(res => res.json())
.then(data => {
    let homeKitchenHealth = document.querySelector('#home')
    homeKitchenHealth.innerHTML =''
    let kitchen1 = document.querySelector('#kitchen')
    kitchen1.innerHTML = ''
    let health1 = document.querySelector('#health')
    health1.innerHTML = ''
    if(Array.isArray(data)){
        data.forEach(ele1 => {
            if(!ele1.kitchen && !ele1.health){ //finding home decor data
                homeKitchenHealth.innerHTML +=`
                <div class="ess-home">
                    <img src="${ele1.image}" alt="Home Essential">
                            
                </div>`
            }
            else if(ele1.kitchen){ //finding kitchen data
                ele1.kitchen.forEach(kit => {
                    kitchen1.innerHTML +=`<div class="ess-kitchen">
                   <a href ="https://www.meesho.com/women-store/pl/3g5o" target="_blank"> <img src="${kit.image}" alt="Home Essential"></a>
                            
                    </div>`
                })
            }
                else if(ele1.health){ //finding health data
                    ele1.health.forEach(hel => {
                        health1.innerHTML +=`<div class="ess-health">
                        <img src="${hel.image}" alt="Health Essential">
                                
                        </div>`
                    })
                }
            })
    }
})
.catch(error => console.error('Error fetching data:', error));
}
fetchEssentialsData()

 // <!------------------ NewStylesData ------------------- -->
function fetchNewStylesData() {
    fetch('newStyle.json')//fecting data from newstyle.json file
    .then(res => res.json())
    .then(data => {
        let Accessories = document.querySelector('#Accessories')
        Accessories.innerHTML =''
        let footware1 = document.querySelector('#footware')
        footware1.innerHTML = ''
        let electronics1 = document.querySelector('#electronics')
        electronics1.innerHTML = ''
        if(Array.isArray(data)){
            data.forEach(ele1 => {
                if(!ele1.footware && !ele1.electronics){ //finding accessories data
                    Accessories.innerHTML +=`
                    <div class="ess-home">
                        <a href ="https://www.meesho.com/home-decor/pl/3tl" target="_blank"><img src="${ele1.image}" alt="Home Essential"></a>
                                
                    </div>`
                }
                else if(ele1.footware){ //finding footware data
                    ele1.footware.forEach(foot => {
                        footware1.innerHTML +=`<div class="ess-kitchen">
                        <img src="${foot.image}" alt="Home Essential">
                                
                        </div>`
                    })
                }
                    else if(ele1.electronics){ //findind electronics data
                        ele1.electronics.forEach(elect => {
                            electronics1.innerHTML +=`<div class="ess-health">
                            <img src="${elect.image}" alt="Health Essential">
                                    
                            </div>`
                        })
                    }
                })
        }
    })
    .catch(error => console.error('Error fetching data:', error));
    }
    fetchNewStylesData()

    // <!------------------ fetchAllData ------------------- -->
    function fetchAllData(){
        fetch('https://fakestoreapi.com/products')//fetching api from fakestore api portal
        .then(res => res.json())
        .then(data => {
            const prod = document.getElementById('products')
            prod.innerHTML =''
            if(Array.isArray(data)){
                let row;
                data.forEach((ele, index) => {
                    if (index % 4 === 0) { // inserting 4 api's for each row
                        row = document.createElement('div');
                        row.className = 'row';
                        prod.appendChild(row);
                    }
                
                    const col = document.createElement('div');
                    col.className = 'col-md-3'; 
                    //adding fetched data into div dynamicaly
                    col.innerHTML +=` 
                    <div class="container products1">
                    
                    <div class="prods"><a href ="https://www.meesho.com/bags-ladies/pl/3jo" target="_blank"><img src="${ele.image}" class="img-fluid"></a></div>
                    <div>
                    <p>${ele.category}</p>
                    <p>${ele.price}</p>
                    <button type="button" class="btn btn-success">${ele.rating.rate}</button>
                    <p>Count: ${ele.rating.count}</p></div></div>`
                    row.appendChild(col)
                })
            }

        })
    }
    fetchAllData()