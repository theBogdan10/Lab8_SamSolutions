// 1 task

function getNewColor(){
  let symbols='0123456789ABCDEF';
  let color="#"

  for(let i=0;i<6;i++){
    color+=symbols[Math.floor(Math.random()*16)]
  }
  return color
}




let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
  document.body.style.background=getNewColor();
  localStorage.clear()
  localStorage.setItem('bg', 'getNewColor()')
  console.log(localStorage)
})


