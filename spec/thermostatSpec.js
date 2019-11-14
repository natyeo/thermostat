describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temp).toEqual(20);
    });

    it('increases the temperature', function() {
      expect(thermostat.up()).toEqual(21);
    });

    it('descreses the temperature', function() {
      expect(thermostat.down()).toEqual(19);
    });

    it('min temp is 10 degrees', function() {
      thermostat.temp = 11;
      thermostat.down();
      expect(thermostat.temp).toEqual(thermostat.MIN_TEMP);
    });

    it('resets temperature to 20 degrees', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe('power saving mode', function() {
    it('should set the max temperature to 25 if mode is on', function() {
      thermostat.powerSave('on');
      expect(thermostat.maxTemp).toEqual(25)
    });

    it('should set the max temp to 32 if mode is off', function() {
      thermostat.powerSave('off');
      expect(thermostat.maxTemp).toEqual(32);
    });

    it('should have power save mode on at start', function() {
      expect(thermostat.isOn).toEqual(true);
    });

    it('should change isOn to false when powersave mode turned off', function() {
      thermostat.powerSave('off')
      expect(thermostat.isOn).toEqual(false);
    })
  });

  describe('current energy usage', function() {
    it('should say low-usage when thermostat < 18', function() {
      thermostat.temp = 17;
      expect(thermostat.currentEnergyUsage()).toEqual('low');
    });

    it('when temp is between 18 and 25 degrees, says medium', function() {
      expect(thermostat.currentEnergyUsage()).toEqual('medium');
    });

    it('when temp is over 25 degrees, says high', function() {
      thermostat.temp = 25;
      expect(thermostat.currentEnergyUsage()).toEqual('high');
    })
  })
});
