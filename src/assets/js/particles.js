const randomInt = (min,max) => {
  return Math.floor(Math.random()*(max-min)) + min
}

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.dy = 1 + (Math.random()*3) 
    this.dx = -1 + (Math.random()*2)
    this.color = `rgba(255, 255, 255, ${0.5 + Math.random()*0.5})`
    this.delete = false
    this.size = 2 + Math.floor(Math.random()*2)
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, 6.28, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  update(canvas) {
    this.y += this.dy
    this.x += this.dx

    if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
      this.delete = true
    }
  }
}

const snow = (element, fullscreen = true, maxParticles = 400) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.setAttribute("id", "particles")
  canvas.width = fullscreen ? window.innerWidth : element.offsetWidth 
  canvas.height = fullscreen ? window.innerHeight : element.offsetHeight

  let particles = []

  element.appendChild(canvas)

  window.onresize = () => {
      canvas.width  = fullscreen ? window.innerWidth : element.offsetWidth
      canvas.height = fullscreen ? window.innerHeight : element.offsetHeight
  }

  window.onscroll = () => {
    if (fullscreen) canvas.setAttribute("style", `top: ${window.scrollY}px`)
  }

  const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter(particle => {
          particle.draw(ctx)
          particle.update(canvas)
          return !particle.delete
      });

      if (particles.length < maxParticles) {
          spawnParticles(2)
      }

      window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)

  const spawnParticles = (amount) => {
      for(let i = 0; i < amount; i++) {
          particles.push(new Particle(randomInt(0, canvas.width), 0))
      }
  }
}

export default snow