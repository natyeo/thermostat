function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
}

Thermostat.prototype.up = function() {
  this.temp += 1;
  return this.temp;
};

Thermostat.prototype.down = function () {
  this.temp -= 1;
  return this.temp;
};
