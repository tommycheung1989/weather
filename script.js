let page = 'http://api.openweathermap.org/data/2.5/weather?q='
let search_area = 'HongKong'
let token = '&appid=c9852133f0fd16ac1d7551239a038a83'
let units = '&units=metric'
let url = page+search_area+token
let temp;
let input;

function weather(){
    let url = page+input.value()+token+units;
    loadJSON(url,gotData)
    console.log(url)
}

function setup(){
    createCanvas(640, 200)
    input = select('#city')
    let button = select('#button')
    input.input(weather)

}

function gotData(data){
    temp = data.main
}
function draw(){
    background(255)
    if(temp){
        fill(0)
        text('The temp now is '+temp.temp +'C',100,100)
        text('The humidity is '+temp.humidity+'%',100,150)
    }
}
