const inputf = document.getElementById('inpf')

const imgP = document.getElementById('img');

const exp = document.getElementById('exp')

const iptc = document.getElementById('iptc')

const iptcb = document.getElementById('iptcb')

const img = new Image();

const inpt = document.getElementById('inpm')

const inptb = document.getElementById('inptb')

const span = document.getElementById('span')

let photoName;

inputf.addEventListener("change", function() {
  const file = this.files[0]
  if (file) {
    const reader = new FileReader()
    photoName = file.name
    imgP.style.display = 'block'
    span.style.display = 'none'

    reader.addEventListener("load", function() {
      img.setAttribute("src", this.result)
    })
    reader.readAsDataURL(file)
  }
  else {
    imgP.style.display = null
    span.style.display = null
  }
})

//canvas 

let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')

img.onload = function() {
  const { width, height } = img;

  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height)

  ctx.drawImage(img, 0, 0);

  textTop()
  textBottom()

  imgP.src = canvas.toDataURL()
}


function textTop() {
  ctx.textAlign = 'center'
  ctx.font = "60px Arial";
  ctx.fillStyle = iptc.value
  ctx.fillText(inpt.value, canvas.width / 2, 70);
}

function textBottom() {
  ctx.textAlign = 'center'
  ctx.font = "60px Arial";
  ctx.fillStyle = iptcb.value
  ctx.fillText(inptb.value, canvas.width / 2, canvas.height - 20);
}

exp.onclick = function() {
  if(photoName == null) {
    alert ('nao foi possível fazer o download')
  }
  else {
    const a = document.createElement('a')
    a.download = photoName
    a.href = canvas.toDataURL()
    a.click()
  }
}