import { init } from '.'

window.onload = () => {
  const app = document.getElementById('app')

  init()
  if (app) {
    app.classList.remove('loading')
  }
}
