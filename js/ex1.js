class square {
    constructor(side){
        this.side = side;
    }
    perimeter(){
       var perim = this.side * 4;
        return perim;
    }
    area(){
       var areaAns = this.side * this.side;
        return areaAns;
    }
    diagnol(){
        var diag = Math.sqrt(2 * (this.side * this.side));
        return diag.toFixed(3);
    }
    describe(){
        return `Square with side ${this.side} has a perimeter of ${this.perimeter()}, area of ${this.area()}, and diagnol of ${this.diagnol()}`
    }
}

const sq1 = new square(2);
const sq2 = new square(5);
const sq3 = new square(8);

console.log(sq1.describe());
console.log(sq2.describe());
console.log(sq3.describe());