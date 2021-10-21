canvas = document.getElementById("mycanvas")
ctx=canvas.getContext("2d")


ctx.beginPath();
ctx.strokeStyle="black"
ctx.lineWidth=20
ctx.rect(150, 150, 500, 360)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(230, 230, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(270, 280, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(320, 230, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(370, 280, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(420, 230, 40, 0, 2*Math.PI)
ctx.stroke()








