export const addClass = (element, ...clases) => clases.forEach(clase => element.classList.add(clase));
export const removeClass = (element, ...clases) => clases.forEach(clase => element.classList.remove(clase));
export const toggleClass = (element, ...clases) => clases.forEach(clase => element.classList.toggle(clase));