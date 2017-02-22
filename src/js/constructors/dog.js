function Dog (options) {
  options = options || {};
  this.status = 'normal';
  this.color = 'black';
  this.hungry = options.hungry;
  if (options.hungry === undefined){
    this.hungry = true;
  }
}

export { Dog };
