// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {return prop};
const createNotEnumerableProperty = (prop) => {
Object.defineProperty(Object.prototype, prop, {
    set: (val) =>{prop = val},
    get: () =>(prop),
    enumerable : false
});
return prop;
};

const createProtoMagicObject = () => {
let magicObj = () => {}
magicObj.prototype = magicObj.__proto__;
return magicObj;
};
let i = 0;
Function.prototype.valueOf = function(){
    return i;
}
const incrementor = () => {
i ++;
return incrementor;
};
let k = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
            k++;
    return resolve(k);
})
};
const createIncrementer = function* () {
    var n = 1;
    while (true) {
        yield n++;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
let obj = new Object();
return obj;
};
const toBuffer = () => {};
const sortByProto = (mass) => {
    return mass.sort((a,b)=>( a.__proto__ - b.__proto__));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
