const switcher = document.getElementById('switch')
const light = document.getElementById('light')
const drawer1 = document.getElementById('drawer_1')
const drawer2 = document.getElementById('drawer_2')
const lampSound = new Audio('sound/lamp.wav')
const drawerSound = new Audio('sound/drawer.wav')

function turnLightOn() {
    light.classList.add('turn_on')
    light.classList.remove('turn_off')
    switcher.classList.add('switch_down')
    switcher.classList.remove('switch_up')
    lampSound.play()
}

function turnLightOff() {
    light.classList.remove('turn_on')
    light.classList.add('turn_off')
    switcher.classList.remove('switch_down')
    switcher.classList.add('switch_up')
    lampSound.play()
}

function drawerOpen(e) {
    e.classList.add('drawer-open')
    e.classList.remove('drawer-closed')
    e.classList.remove('closed')
    drawerSound.play()
}

function drawerClosed(e) {
    e.classList.add('drawer-closed')
    e.classList.add('closed')
    e.classList.remove('drawer-open')
    drawerSound.play()

}

// LIGHT
switcher.addEventListener('click', () => {
    let lighting = light.classList.contains('turn_off')

    if (lighting) {
        turnLightOn()
    } else {
        turnLightOff()
    }
})

// DRAWERS
drawer1.addEventListener('click', () => {
    let closing = drawer1.classList.contains('closed')

    if (closing) {
        drawerOpen(drawer1)
    } else {
        drawerClosed(drawer1)
    }
})

drawer2.addEventListener('click', () => {
    let closing = drawer2.classList.contains('closed')

    if (closing) {
        drawerOpen(drawer2)
    } else {
        drawerClosed(drawer2)
    }
})
