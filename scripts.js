//for the sake of readability, 
// I am going to use snake_case instead of camelCase (i code more in python haha)

//---variable holders---//
let map = 'map.json';
let boxplot = 'boxplot.json';
let line_chart = 'line_chart.json'
let area_chart = "area_chart.json"
let heatmap = 'heatmap.json'

//1. Map
vegaEmbed(".map", map).then(function(res){
    console.log(res);
}).catch(console.error)

//2. boxplot
vegaEmbed(".boxplot", boxplot).then(function(res){
    console.log(res);
}).catch(console.error)

//3. Line Chart
vegaEmbed(".line_chart", line_chart).then(function(res){
    console.log(res);
}).catch(console.error)


//4. Heat Map
vegaEmbed('.heatmap', heatmap).then(function(res){
    console.log(res);
}).catch(console.error)

//5. area_chart
vegaEmbed(".area_chart", area_chart).then(function(res){
    console.log(res);
}).catch(console.error)





