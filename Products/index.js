const mainDiv = document.getElementById('main');

fetch('https://fakestoreapi.com/products?limit=10')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        display(data);
    }).catch(function(err){
        alert(err)
    })

function display(products){
    console.log(products)
    products.forEach(value => {
        const head=document.createElement('div')
        head.classList.add('head')
        const bdy=document.createElement('div')
        bdy.classList.add('content')
        const title=document.createElement('h3')
        title.textContent=value.title
        const img=document.createElement('img')
        img.src=value.image
        img.addEventListener('click',function(event){
            window.location.href = "https://www.amazon.in/";
            
        })
        img.style.height="150px"
        img.style.width="150px"
       
        const cost=document.createElement('h4')
        cost.textContent="Price : "+ value.price
        bdy.append(title,img,cost)
        head.append(bdy)
        mainDiv.append(head)

    });
}
