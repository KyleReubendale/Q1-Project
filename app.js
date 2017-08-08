$('form').on('submit', function(event) {
  event.preventDefault();
  $('.mainLogo').remove();
  $('table').fadeIn(1000);
  $('.purpose').fadeIn(1000);
  $('.writing').remove();
  var input = $('input').val().toUpperCase();
  var enteredData = [];
  var $nonProfits = $("#nonProfits");
  var $name = $("#name");
  var $address = $("#address");
  var $phoneNumber = $("#phoneNumber");
  var $website = $("#website");
  var $purposeName = $('#purposeName');
  var $purposeDescription = $('#purposeDescription');
  var newName = [];
  var $missionStatement = $('#missionStatement');


  $.ajax({
    type: "GET",
    url: "https://data.colorado.gov/resource/26xp-8dwd.json?principalzipcode=" + input,
    data: {
      "$limit": 13700,
      "$$app_token": "2gfPSjTNsZ74ijObNhrXjJx22"
    },
    success: function(data) {
      console.log('success', data);
      $.each(data, function(i, data) {
        $name.append('<tr><td> ' + data.name + ' </td></tr>');
        $address.append('<tr><td><address> ' + data.principaladdress + '</address></td></tr>');
        $phoneNumber.append('<tr><td> ' + data.phone + '</td></tr>');
        $website.append('<tr><td> ' + data.website + '</td></tr>');
      });
      addlink();
      $('body').linkify();
      $('body').scrollTo($('#searchSection'),[1000]);
    }
  });
  $.ajax({
    url: "https://data.colorado.gov/resource/yvrn-kew4.json?name=" + input,
    type: "GET",
    data: {
      "$limit": 1,
      "$$app_token": "2gfPSjTNsZ74ijObNhrXjJx22"
    },
    success: function(data) {
      console.log(data[0]);
      $.each(data, function(i, data) {
$missionStatement.append('<p> '+ data.statementofpurpose +'</p>')
        // $purposeName.append('<tr><td> ' + data.name + '</td></tr>');
        // $purposeDescription.append('<tr><td> ' + data.statementofpurpose + '</td></tr>');
      });
        $('body').scrollTo($('#searchSection'),[1000]);
    }
  });
  function addlink() {
    $('address').each(function() {
      var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent($(this).text()) + "' target='_blank'>" + $(this).text() + "</a>";
      $(this).html(link);
    });
  }
  $('input').val("");
  $('.mainLogo').animate({
    'right': '960px'
  }, 1000);
});
