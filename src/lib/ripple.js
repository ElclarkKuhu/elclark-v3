export default function ripple(event) {
	let rippleStartX = event.clientX - event.target.offsetLeft
	let rippleStartY = event.clientY - event.target.offsetTop

	let ripple = document.createElement('div')
	ripple.className = 'ripple'
	ripple.style.left = rippleStartX + 'px'
	ripple.style.top = rippleStartY + 'px'

	this.appendChild(ripple)

	setTimeout(() => {
		ripple.remove()
	}, 500)
}
