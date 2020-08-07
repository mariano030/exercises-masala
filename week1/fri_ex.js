function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

function Square(size) {
    this.width = size;
    this.height = size;
}

var getAreaFn = function () {
    return this.width * this.height;
};

Object.prototype.getArea = getAreaFn;

// var square = new Square(2);

// var rectangle = new Rectangle(3,2);

var square = new Square(4);

var rect = new Rectangle(4, 5);

console.log("rect:", rect.getArea()); //20);

console.log("squa:", square.getArea()); //16
