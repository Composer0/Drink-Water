const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
        cup.addEventListener('click', () => highlightCups(idx))
    })
    // (listen for 'click' follow up with '() =>' this function 'highlightCups(idx). Note in the forEach that cup is listed first as it is the object that is having the eventlistener being added while index is second and is recognized as the value within the highlightCups function. idx is the one being clicked on.

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    // above checks to see if the cup is already filled and if cups beside it are all filled. If the cup beside it is not filled then it will allow the following function to remove its filled container as well. The activated 'idx--' removes the full class from the cup itself as it will reduce the total number of idx from the application.

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
        // Please always check your classes carefully.
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
            // remember that percentage is a id that was assigned in the html.
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // Logic for filling the cup. Use style.height when applied to class/id. Use previous identifier that determines the amount of cups filled and divide by the total number of cups and then multiply it by the pixel height of the image. In our case was established in the css as 330 pixel. px goes on the outside of the bracket as it then be applied to the final number. Order of operations in effect.

    if (fullCups === totalCups) {
        remaining.style.visibility = 'hidden'
        remaining.style.height = '0'
    } else {
        remaining.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}