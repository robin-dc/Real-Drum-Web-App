window.addEventListener('keydown', function(e){
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    key.classList.add('active')

    if(!audio) return;
    audio.currentTime = 0
    audio.play()
})
const keys = document.querySelectorAll('.key')

keys.forEach(function(key){
    key.addEventListener('transitionend', function(e){
        if(e.propertyName != 'scale') return;
        this.classList.remove('active')
    })
})
