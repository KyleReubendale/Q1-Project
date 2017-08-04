$('form').on('submit', function(event){
  event.preventDefault();
$('.mainLogo').remove();
$('.logoSmall').fadeIn(1000);
$('table').fadeIn(1000);
var input = $('input').val();
 var enteredData = [];
 var $nonProfits = $("#nonProfits");
 var $name = $("#name");
 var $address = $("#address");
 var $phoneNumber = $("#phoneNumber");
 var $website = $("#website")
// var first = enteredData.object();
// console.log(first)

console.log(input);

$.ajax({
    type: "GET",
    url:"https://data.colorado.gov/resource/26xp-8dwd.json?principalzipcode="+ input,
    data:{
      "$limit" : 13700,
      "$$app_token" : "2gfPSjTNsZ74ijObNhrXjJx22"
    },
    success: function(data){
      console.log('success', data);
      $.each(data, function(i, data){
        $name.append('<tr><td> '+data.name+' </td></tr>');
        $address.append('<tr><td> '+data.principaladdress+'</td></tr>');
        $phoneNumber.append('<tr><td> '+data.phone+'</td></tr>');
        $website.append('<tr><td> '+data.website+'</td></tr>');
      });
    }

 });
//.done(function(data) {
//   enteredData.push(data);
//   alert("Retrieved " + data.length + "results!");
//
// });
console.log(enteredData);

// $.get("https://data.colorado.gov/resource/26xp-8dwd.json?" + "principalzipcode" + "=" + input)
// .then(function(data){
//
// enteredData.push(data);
//
// });console.log(enteredData);

$('input').val("");
$('.mainLogo').animate({'right':'960px'},1000);
});
