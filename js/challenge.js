const counter = document.getElementById('counter')

function timer() {
    counter.textContent = parseInt(counter.textContent, 10) + 1
}

let myInterval = setInterval(timer, 1000)

//event listeners
document.getElementById('minus').addEventListener('click', increaseDecrease)
document.getElementById('plus').addEventListener('click', increaseDecrease)
document.getElementById('heart').addEventListener('click', like)
document.getElementById('pause').addEventListener('click', pause)
document.getElementById('comment-form').addEventListener('submit', submitAndPost)
//handler functions
function increaseDecrease(e) {
    if (e.target.id === 'minus') {
        counter.textContent = parseInt(counter.textContent, 10) - 1
    }
    else if (e.target.id === 'plus') {
        counter.textContent = parseInt(counter.textContent, 10) + 1
    }
}

function like(e) {
    const countNumber = parseInt(counter.textContent)
    grab = document.getElementById(parseInt(counter.textContent))
    if (grab) {
        let innerNum = parseInt(grab.childNodes[1].innerText, 10)
        innerNum += 1
        grab.childNodes[1].innerText = innerNum
    }
    else {
        const newLike = document.createElement('li')
        newLike.id = countNumber
        newLike.innerHTML = `${newLike.id} has been liked <span>` + 1 + '</span> times'
        document.getElementsByClassName('likes')[0].appendChild(newLike)
    }
}

function pause(e) {

    if (!document.getElementById('minus').disabled) {
    clearInterval(myInterval)
    document.getElementById('minus').disabled = true
    document.getElementById('plus').disabled = true
    document.getElementById('heart').disabled = true
    document.getElementById('submit').disabled = true
    }
    else {
    document.getElementById('minus').disabled = false
    document.getElementById('plus').disabled = false
    document.getElementById('heart').disabled = false
    document.getElementById('submit').disabled = false
    return myInterval = setInterval(timer, 1000)
    }
}

function submitAndPost(e) {
    e.preventDefault()
    const input = document.getElementById('comment-input').value
    const post = document.createElement('p')
    post.textContent = input
    document.getElementById('list').appendChild(post)
    document.getElementById('comment-form').reset()
}

    
 
