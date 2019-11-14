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
