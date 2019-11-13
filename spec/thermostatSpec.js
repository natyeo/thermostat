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

  });

});
