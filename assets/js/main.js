const buttonMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

// forma larga de hacerlo
const toggleMenu = () => {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active')
	} else {
		menu.classList.add('active')
	}
}

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}

// buttonMenu.addEventListener('click', toggleMenu)

// forma corta
buttonMenu.addEventListener('click', () => {
	toggleElement(menu, 'active')
})

const $sliders = document.querySelectorAll('.profile')
const $prev = document.querySelector('#prev')
const $next = document.querySelector('#next')

const nextSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders) indice = 0
		}
	})

	sliders[indice].classList.add('active')
}

const prevSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders
		}
	})

	sliders[indice].classList.add('active')
}

$next.addEventListener('click', () => {
	clearInterval(runSlider)

	nextSlider($sliders)

	runSlider = setInterval(() => {
		nextSlider($sliders)
	}, 5000)
})
$prev.addEventListener('click', () => {
	prevSlider($sliders)
})

let runSlider = setInterval(() => {
	nextSlider($sliders)
}, 5000)

document.onload = runSlider

// para el segundo slider

const deslizar = document.querySelectorAll('.newprofile')

const nextDeslizar = (deslizar) => {
	const totalDeslizar = deslizar.length - 1
	let indice

	deslizar.forEach((deslizar, i) => {
		if (deslizar.classList.contains('ready')) {
			deslizar.classList.remove('ready')
			indice = i + 1
			if (indice > totalDeslizar) indice = 0
		}
	})

	deslizar[indice].classList.add('ready')
}

const prevDeslizar = (deslizar) => {
	const totalDeslizar = deslizar.length - 1
	let indice

	deslizar.forEach((deslizar, i) => {
		if (deslizar.classList.contains('ready')) {
			deslizar.classList.remove('ready')
			indice = i - 1
			if (indice < 0) indice = totalDeslizar
		}
	})

	deslizar[indice].classList.add('ready')
}

$next.addEventListener('click', () => {
	clearInterval(runDeslizar)

	nextDeslizar(deslizar)

	runDeslizar = setInterval(() => {
		nextDeslizar(deslizar)
	}, 5000)
})
$prev.addEventListener('click', () => {
	prevDeslizar(deslizar)
})

let runDeslizar = setInterval(() => {
	nextDeslizar(deslizar)
}, 5000)

document.onload = runDeslizar