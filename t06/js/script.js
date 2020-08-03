var varNum = 111;
var varBigInt = BigInt(333);
var varStr = "string";
var varBool = true;
var varNull = null;
var varUndef;
var objCar = { colour: "red", model: "sportcar", wheelsCount: 4 };
var varSym = Symbol("Sym");

function funcSum(a, b) {
  return a + b;
}

alert(`varNum is ${typeof varNum}
varBigInt is ${typeof varBigInt}
varStr is ${typeof varStr}
varBool is ${typeof varBool}
varNull is ${typeof varNull}
varUndef is ${typeof varUndef}
objCar is ${typeof objCar}
varSym is ${typeof varSym}
funcSum is ${typeof funcSum}`);
