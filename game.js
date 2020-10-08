let health = 100;
let hits = 0
let puncher = 5
let kicker = 10
let hit = ['smack', 'punch', 'kick']
let name = 'Ruger'


function slap(playersChoice) {


  if (hit[0] == playersChoice) {
    health--
    hits++
  }
  else if (hit[1] == playersChoice) {
    health -= puncher
    hits++
  }
  else if (hit[2] == playersChoice) {
    health -= kicker
    hits++
  }

  update()
}



function update() {
  let healthElem = document.getElementById('health')
  healthElem.innerText = `Health: ${health}`
  let hitsElem = document.getElementById('hits')
  hitsElem.innerText = `Hits: ${hits}`
  let nameElem = document.getElementById("name")
  nameElem.innerText = `Name: ${name}`
}
update()