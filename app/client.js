
var title = ["Bikes", "Trees", "Clean Up"];

var crowdFunds = [400, 100, 500];
var municipalityFunds = [320, 260, 500];
var currentFunds = new Array(3);
var requiredFunds = [1600, 2000, 1000];
var percentage = new Array(3);

for(var i=0; i<3; i++){
    currentFunds[i] = crowdFunds[i] + municipalityFunds[i];
 }

for(var i=0; i<3; i++){
    percentage[i] = (currentFunds[i] / requiredFunds[i])*100;
    console.log(currentFunds[i] + ":" +  percentage[i]);
}

var projectDescription = ["Build Bike Roads", "Grow Trees", "Clean up trash"];

$( "h3" ).each(function(index) {
    $( this ).text(title[index]);
    //console.log( index + ": " + $( this ).text() );
});

$( "h5" ).each(function(index) {
    $( this ).text(projectDescription[index]);
    //console.log( index + ": " + $( this ).text() );
});

$( ".progress-bar" ).each(function(index) {
    console.log( index + ": " + percentage[index] );
    $( this ).width(percentage[index] + "%");
});
