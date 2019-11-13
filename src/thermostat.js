function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.isOn = true;
  this.maxTemp = 25
}

Thermostat.prototype.up = function(number) {
  if (this.isMaxTemp()) {
    return;
  }
  return this.temp += number;
};

Thermostat.prototype.down = function(number) {
  if (this.isMinTemp()) {
    return;
  }
  return this.temp -= number;
};

Thermostat.prototype.isMinTemp = function () {
  return this.temp === this.MIN_TEMP
};

Thermostat.prototype.powerSave = function(mode) {
  if (mode === 'on'){
    this.isOn = true;
    return this.maxTemp = 25;
  }
  else if (mode === 'off') {
    this.isOn = false;
    return this.maxTemp = 32;
  };
};

Thermostat.prototype.isMaxTemp = function() {
  return this.temp === this.maxTemp;
};

Thermostat.prototype.reset = function () {
  return this.temp = 20
};
