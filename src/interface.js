$(document).ready(function() {
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

  function updateTemp() {
    $('#temperature').text(thermostat.temp);
  }
})
