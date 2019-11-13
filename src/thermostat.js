function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
}

Thermostat.prototype.up = function() {
  this.temp += 1;
  return this.temp;
};

Thermostat.prototype.down = function () {
  if (this.isMinTemp()) {
    return;
  }
  this.temp -= 1;
  return this.temp
};

Thermostat.prototype.isMinTemp = function () {
  return this.temp === this.MIN_TEMP
};

Thermostat.prototype.powerSave = function(mode) {
  if (mode === 'on'){
    this.maxTemp = 25;
    return this.maxTemp
  }
    return this.maxTemp = 32;
};
