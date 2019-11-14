$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temp').text(data.main.temp);
})
  var thermostat = new Thermostat();
  updateTemp();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemp();
  })

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemp();
  })

  $('#reset').click(function() {
    thermostat.reset();
    updateTemp();
  })

  $('#powersaving-on').click(function(){
    thermostat.powerSave("on");
    updatePSM();
  })

  $('#powersaving-off').click(function(){
    thermostat.powerSave("off");
    updatePSM();
  })

  $('#current-city').change(function() {
      var city = $('#current-city').val();
      displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temp').text(data.main.temp);
    })
  }

  function updatePSM() {
    if (thermostat.isOn === true) {
      $('#power-save').text("on")
    } else {
      $('#power-save').text("off")
    }
  }

  function updateTemp() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }
})
