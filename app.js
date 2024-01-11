// setInterval(function(){
//     document.write('hello world')
// },1000)

// function timer(){
//     document.write('Saad')
// }
// setInterval(timer,4000)

// setTimeout(function(){
//     document.write('abcd')
// },4000)


// var num = 0
// setInterval(function(){
//     num++
//     console.log(num)
// },10)



var hours = 0
var minutes = 0
var seconds = 0
var miliseconds = 0

var gethr = document.getElementById('hr')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('mili')

var st;


function start(){
    st = setInterval(function() {
        miliseconds++
        getmili.innerHTML = miliseconds
        if(miliseconds >=100){
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if(seconds >=60){
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
        else if(minutes >= 60){
            hours++
            gethr.innerHTML = hours
            minutes = 0
        }
    },10)
    document.getElementById('ab').disabled = true
    document.getElementById('cd').disabled = false
}

function stop(){
    clearInterval(st)
    document.getElementById('cd').disabled = true
    document.getElementById('ab').disabled = false
}

function reset(){
    hours = '0'+'0'
    minutes = '0'+'0'
    seconds = '0'+'0'
    miliseconds = '0'+'0'
    gethr.innerHTML = hours 
    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
    getmili.innerHTML = miliseconds
}