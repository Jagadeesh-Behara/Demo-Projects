    const mainDiv=document.getElementById('main')
    const poke=document.getElementById('search')
    const button=document.getElementById('btn')
    button.addEventListener('click',function(){
        mainDiv.textContent=" "
        const data=poke.value
        fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
        .then(function(res){
            return res.json()
        }).then(function(result){
            console.log(result)
            display(result)
        }).catch(function(err){
            console.log(err)
        })
    })
    function display(poke){
        const content=document.createElement('div')
        content.classList.add('cnt')
        const name=document.createElement('h1')
        name.textContent=poke.name
        const image=document.createElement('img')
        image.src=poke.sprites.front_shiny
        image.alt="ooops"
        const order=document.createElement('p')
        order.textContent="Order : "+poke.order
        content.append(name,image,order)
        mainDiv.appendChild(content)
    }
    