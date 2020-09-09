const inputf = document.getElementById('inpf')

const img = document.getElementById('img')

const span = document.getElementById('span')
inputf.addEventListener("change", function(){
   const file = this.files[0]
   if(file){
     const reader = new FileReader()
     
     img.style.display = 'block'
     span.style.display = 'none'
     
    reader.addEventListener("load", function(){
       img.setAttribute("src", this.result)
     })
     
     reader.readAsDataURL(file)
   }
   else{
     img.style.display = null
     span.style.display = null
   }
})
