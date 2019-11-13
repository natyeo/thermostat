function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.up = function() {
  this.temp += 1;
  return this.temp;
};

Thermostat.prototype.down = function () {
  this.temp -= 1;
  return this.temp;
};
