const mainDiv=document.getElementById('mainDiv')
const test=document.getElementById('text')
const date=document.getElementById('dt')
const crp=document.getElementById('crp')
const save=document.getElementById('s-btn')
const mon=document.getElementById('1')
const tue=document.getElementById('2')
const wed=document.getElementById('3')
const thu=document.getElementById('4')
const fri=document.getElementById('5')
const sat=document.getElementById('6')
const sun=document.getElementById('0')
const btn=document.getElementById('btn')
save.addEventListener('click',function(){
    const d=new Date(date.value)
    let day=d.getDay()
    if(day==1){
        mon.style.color="red"
    }
    if(day==2){
        tue.style.color="red"
    }
    if(day==3){
        wed.style.color="red"
    }
    if(day==4){
        thu.style.color="red"
    }
    if(day==5){
        fri.style.color="red"
    }
    if(day==6){
        sat.style.color="red"
    }
    if(day==0){
        sun.style.color="red"
    }
    const para=document.createElement('p')
    para.textContent=text.value
    const graph=document.createElement('p')
    graph.textContent=crp.value
    const button=document.createElement('button')
    button.textContent='DELETE'
    button.addEventListener('click',()=>{
        mainDiv.textContent=" "
        mainDiv.style.border="0px"
        test.value=" "
        crp.value=" "
        date.value=" "
        mon.style.color="black"
        tue.style.color="black"
        wed.style.color="black"
        thu.style.color="black"
        fri.style.color="black"
        sat.style.color="black"
        sun.style.color="black"
    })
    mainDiv.append(para,graph,button)
    mainDiv.style.border='1px solid black'
    mainDiv.style.display="flex"
    mainDiv.style.flexDirection="row"
    mainDiv.style.justifyContent="space-between"
    mainDiv.style.padding="10px"
    mainDiv.style.margin="20px"
})





