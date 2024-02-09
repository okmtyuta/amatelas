import { init } from '.'

window.onload = () => {
  const app = document.getElementById('app')

  if (app) {
    init()
    app.classList.remove('loading')
  }
}
