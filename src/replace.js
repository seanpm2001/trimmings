import loadElement from './loadElement'
import parseArgs from './parseArgs'

export const handle = (e) => {
  e.preventDefault()

  const element = e.target
  const replacementSelectors = parseArgs(element.dataset.redactReplace).args

  loadElement(element).then((doc) => {
    replacementSelectors.forEach((selector) => {
      const newEl = doc.querySelector(selector)
      const oldEl = document.querySelector(selector)
      oldEl.parentNode.replaceChild(newEl, oldEl)
    })
  })
}
