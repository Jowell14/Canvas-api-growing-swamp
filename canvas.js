// const canvas = document.querySelector('.canvas')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// let c = canvas.getContext('2d')

// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// // Rectangle

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 150, 150)
// c.fillStyle = "rgba(0, 255, 255, 0.5)";
// c.fillRect(200, 200, 100, 100)
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(250, 250, 150, 150)
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(350, 350, 100, 100)

// // Line

// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.lineTo(500, 400)
// c.lineTo(600, 500)
// c.strokeStyle = "red"
// c.stroke()
// c.beginPath();
// c.moveTo(80, 200)
// c.lineTo(350, 180)
// c.lineTo(430, 340)
// c.lineTo(530, 440)
// c.lineTo(610, 520)
// c.strokeStyle = "rgba(0, 0, 255, 0.5)"
// c.stroke()



// // Arc / Circle


// for (let index = 0; index < 12; index++) {
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.fillStyle = "blue"
//     c.fill()
// }


// class Circle {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.draw = function() {
//             c.beginPath();
//             c.arc(x, y, radius, 0, Math.PI * 2, false);
//             c.fillStyle = "red";
//             c.fill();
//         };
//     }
// }
// this.update = function() {
//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy
//     }
//     x += dx
//     y += dy
// }

// let circle = new Circle(200, 200)
// circle.draw()

// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let dx = (Math.random() - 0.5) * 12
// let dy = (Math.random() - 0.5) * 12
// let radius = 30

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     circle.draw()
// }

// animate()

// const canvas = document.querySelector('.canvas')
// const c = canvas.getContext('2d')

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
// const mouse = { x: undefined, y: undefined }

// // Event Listeners
// addEventListener('mousemove', event => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })
// addEventListener('resize', () => {
//         canvas.width = innerWidth
//         canvas.height = innerHeight

//         init()
//     })
//     // Objects
// class Circle {
//     constructor(x, y, radius, color) {
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.color = color
//         this.velocity = {
//             x: Math.random() - 0.5,
//             y: Math.random() - 0.5 // Random y value from -0.5 to 0.5
//         }
//     }
//     draw() {
//         c.beginPath()
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         c.fillStyle = this.color
//         c.fill()
//         c.closePath()
//     }
// }

// Object.prototype.update = function() {
//         this.draw()
//         this.x += this.velocity.x // Move x coordinate
//         this.y += this.velocity.y // Move y coordinate
//     }
//     // Implementation
// let circles

// function init() {
//     for (let i = 0; i < 800; i++) {
//         const x = Math.random() * canvas.width
//         const y = Math.random() * canvas.height
//         const radius = Math.random() * 5
//         const color = 'blue'
//         circles.push(new Circle(x, y, radius, color))
//     }
// }
// // Animation Loop
// function animate() {
//     requestAnimationFrame(animate) // Create an animation loop
//     c.clearRect(0, 0, canvas.width, canvas.height) // Erase whole canvas
//     circles.forEach(circle => {
//         circle.update()
//     })
// }
// init()
// animate()

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.globalCompositeOperation = 'XOR'

const edge = 30
let drawing = false

const mouse = {
    x: null,
    y: null
}
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y

})

class Root {
    constructor(x, y, color, centerX, centerY) {
        this.x = x
        this.y = y
        this.color = color
        this.speedX = 0
        this.speedY = 0
        this.centerX = centerX
        this.centerY = centerY
    }
    draw() {
        this.speedX += (Math.random() - 0.5) / 2
        this.speedY += (Math.random() - 0.5) / 2
        this.x += this.speedX
        this.y += this.speedY

        const distanceX = this.x - this.centerX
        const distanceY = this.y - this.centerY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const radius = (-distance / edge + 1) * edge / 10

        if (radius > 0) {
            requestAnimationFrame(this.draw.bind(this))
            ctx.beginPath()
            ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
            ctx.fillStyle = this.color
            ctx.fill()
            ctx.strokeStyle = 'black'
            ctx.stroke()
        }
    }
}

function branchOut() {
    if (drawing) {
        const centerX = mouse.x
        const centerY = mouse.y
        for (let i = 0; i < 3; i++) {
            const root = new Root(mouse.x, mouse.y, 'green', centerX, centerY)
                // x, y, color, centerX, centerY
            root.draw()
        }
    }
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousemove', function() {
    //ctx.fillStyle = "rgba(255, 255, 255, 0.03)"
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    branchOut()
})

window.addEventListener('mousedown', function() {
    drawing = true
})

window.addEventListener('mouseup', function() {
    drawing = false
})