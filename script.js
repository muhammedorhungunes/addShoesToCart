document.addEventListener("DOMContentLoaded", () => {
    const isMobile = navigator.userAgentData.mobile;
    async function fetchBrandsJSON() {
        const response = await fetch('./katalog.json');
        const brands = await response.json();
        return brands;
    }
    if(isMobile){
        
        fetchBrandsJSON().then(brands => {
            var brands = brands;
            var htmlString = '';
            var brandImageString = '';
            for( var i = 0 ; i< brands.length; i++){
                
                htmlString += `<a class="list-group-item border-0 m-1" href="#${brands[i].brandName}" style="display:inline-block;color: inherit;text-decoration: inherit;">${brands[i].brandName}</a>`;
                var list =  document.getElementById('spy');
                list.style.cssText += 'position: relative;overflow-y: hidden;overflow-x: scroll; white-space:nowrap;';
                list.innerHTML = htmlString ;

                var brandMobileImageString = `<img src=\"${brands[0].brandImage}\" class="w-100 h-100"/>`;
                var imageMobile = document.getElementById('brandImage');
                imageMobile.innerHTML = brandMobileImageString;
                
                var htmlCard = '<div class="d-flex align-content-start flex-wrap">';
                for(var j = 0 ; j < brands[i].products.length; j++){
                    htmlCard += 
                    `<div class="card col-6 border-0 mt-4">
                        <img src=\"${brands[i].products[j].image}\" class=\"card-img-top rounded mx-auto d-block\" alt=\"...\" style="width:10rem;height:10rem;">
                        <div class="card-body">
                            <h6 class="card-title h-50">${brands[i].products[j].name}</h6>
                            <p class="card-text text-primary ">
                                    ${brands[i].products[j].price} TL
                            </p>
                            <a href="#" class="btn btn-outline-primary btn-lg btn-block " style="border-radius: 40px;" onclick="$('#toast').toast('show');">Sepete Ekle</a>
                        </div>
                    </div>`;
                }
                htmlCard += '</div>'
                var listCard =  document.getElementById(`${brands[i].brandName}`);
                listCard.innerHTML = htmlCard;
                htmlCard= '';

            }
            $('[data-spy="scroll"]').on('activate.bs.scrollspy', function (event, object) {

                var elems = document.querySelectorAll(".active");
                [].forEach.call(elems, function(el) {
                el.classList.remove("active");
                });
        
                var brand = brands.filter(item => '#' + item.brandName === object.relatedTarget);
                brandImageString = `<img src=\"${brand[0].brandImage}\" class="w-100 h-100"/>`
                var brandImageTag = document.getElementById('brandImage');
                brandImageTag.innerHTML = brandImageString;
            });
        });
    }
    else{

        fetchBrandsJSON().then(brands => {
            var brands = brands;
            var htmlString = '';
            var brandImageString = '';
            for( var i = 0 ; i< brands.length; i++){

                htmlString += `<a class="list-group-item border-0" href="#${brands[i].brandName}" id="${brands[i].brandName}Logo"><img src="${brands[i].brandLogo}"  style="width:6vh; height:6vh;"/></a>`;
                var list =  document.getElementById('spy');
                list.innerHTML = htmlString ;

                var brandWebImageString = `<img src=\"${brands[0].brandImage}\" class="w-100 h-100"/>`;
                var imageWeb = document.getElementById('brandImage');
                imageWeb.innerHTML = brandWebImageString;
                
                var htmlCard = '<div class="d-flex align-content-start flex-wrap">';
                for(var j = 0 ; j < brands[i].products.length; j++){
                    htmlCard += 
                    `<div class="card col-4 border-0 mt-4">
                        <img src=\"${brands[i].products[j].image}\" class=\"card-img-top rounded mx-auto d-block\" alt=\"...\" style="width:10rem;height:10rem;">
                        <div class="card-body">
                            <h6 class="card-title h-50">${brands[i].products[j].name}</h6>
                            <p class="card-text text-primary ">
                                    ${brands[i].products[j].price} TL
                            </p>
                            <a href="#" class="btn btn-outline-primary btn-lg btn-block " style="border-radius: 40px;" onclick="$('#toast').toast('show');">Sepete Ekle</a>
                        </div>
                    </div>`;
                }
                htmlCard += '</div>'
                var listCard =  document.getElementById(`${brands[i].brandName}`);
                listCard.innerHTML = htmlCard;
                htmlCard= '';

            }

            $('[data-spy="scroll"]').on('activate.bs.scrollspy', function (event, object) { 

                var elems = document.querySelectorAll(".active");
                [].forEach.call(elems, function(el) {
                el.classList.remove("active");
                });
                
                var brand = brands.filter(item => '#' + item.brandName === object.relatedTarget);
                brandImageString = `<img src=\"${brand[0].brandImage}\" class="w-100 h-100"/>`
                var brandImageTag = document.getElementById('brandImage');
                brandImageTag.innerHTML = brandImageString;

            });
        });

       
    }   
});