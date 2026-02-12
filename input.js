/**
 * Main Input handler module
 * @module Input
 */
class Input {
  static mouseX = 0
  static mouseY = 0

  static keyMap = new Map()
  static pressed = new Map()

  static mouseMap = new Map()
  static mousePressed = new Map()

  static init() {
    ;['keydown', 'keyup'].forEach((eventName) => {
      window.addEventListener(eventName, (event) => {
        Input.eventHandler(event)
      })
    })

    ;['mousedown', 'mouseup'].forEach((eventName) => {
      window.addEventListener(eventName, (event) => {
        Input.eventHandlerMouse(event)
      })
    })

    window.addEventListener('mousemove', (event) => {
      // Coordenadas globales (viewport)
      Input.mouseX = event.clientX
      Input.mouseY = event.clientY
    })
  }

  static getButtonPress(key) {
    if (Input.keyMap.get(key) && !Input.pressed.get(key)) {
      Input.pressed.set(key, true)
      return true
    }
    return false
  }

  static getButton(key) {
    return !!Input.keyMap.get(key)
  }

  static eventHandler(event) {
    // OJO: preventDefault global puede romper shortcuts / inputs
    // event.preventDefault()

    const input = {
      key: event.key,
      state: event.type === 'keydown' ? 1 : 0
    }

    if (Input.keyMap.get(input.key) === input.state) return

    if (!input.state) {
      Input.pressed.set(input.key, false)
    }

    Input.keyMap.set(input.key, input.state)
  }

  // Mouse
  static getClickPress(key) {
    if (Input.mouseMap.get(key) && !Input.mousePressed.get(key)) {
      Input.mousePressed.set(key, true)
      return true
    }
    return false
  }

  static getClick(key) {
    return !!Input.mouseMap.get(key)
  }

  static eventHandlerMouse(event) {
    // event.preventDefault()

    // 0 = left, 1 = middle, 2 = right
    const input = {
      key: event.button,
      state: event.type === 'mousedown' ? 1 : 0
    }

    if (Input.mouseMap.get(input.key) === input.state) return

    if (!input.state) {
      Input.mousePressed.set(input.key, false)
    }

    Input.mouseMap.set(input.key, input.state)
  }

  /**
   * Devuelve el mouse relativo a un elemento (canvas, div, etc.)
   * @param {HTMLElement} el
   */
  static getMouse(el) {
    const r = el.getBoundingClientRect()
    return {
      x: Math.round(Input.mouseX - r.left),
      y: Math.round(Input.mouseY - r.top)
    }
  }

  /**
   * Hover pero relativo a un elemento (ej: canvas)
   */
  static hover(el, position, size) {
    const m = Input.getMouse(el)

    return (
      position.x < m.x &&
      position.x + size > m.x &&
      position.y < m.y &&
      position.y + size > m.y
    )
  }
}
