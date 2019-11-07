// 3 task

const button=document.getElementById("rem_adds")
const adds=document.getElementById("adds")

const isCookieExsist = cookie => 
    !!(document.cookie.match(new RegExp(cookie)));

setInterval(() => {
    isCookieExsist('timeCookie') ?
        adds.classList.add('hidden') :
        adds.classList.remove('hidden')
}, 200)

button.onclick = () => {
    document.cookie = 'timeCookie=""; max-age=3600';
}