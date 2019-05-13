import isRegularClick from '../utils/isRegularClick'

export const key = 'redactRemove'

export const eventNames = ['click']

export const handle = (e) => {
  if (e.type === 'click' && !isRegularClick(e)) {
    return
  }

  const selector = e.target.dataset.redactRemove
  const toRemove = document.querySelector(selector)
  if (toRemove && toRemove.parentNode) {
    toRemove.parentNode.removeChild(toRemove)
  }
}
