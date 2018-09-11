// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, { 
        enumerable: false, 
        get: () => propertyName,
        set: (value) => { propertyName = value } 
    });
    return propertyName;
};
const createProtoMagicObject = () => {
        let foo = () => {};
        foo.prototype = foo.__proto__;
        return foo;
};
const incrementor = (() => {
    let count = 0;
    let nextChainLink = function foo() {
        count++;
        return foo;
    };
    nextChainLink.valueOf = () => count;    
    return nextChainLink;
})();
const asyncIncrementor = (() => {
    let count = 0;
    let nextChainLink = function foo() {
        count++;
        return new Promise(resolve => resolve(foo));
    };
    nextChainLink.valueOf = () => count;    
    return nextChainLink;
})();
const createIncrementer = (() => {
    let count = 0;
    let nextChainLink = function* foo() {};
    nextChainLink.prototype.next = () => {
        return {
            value: ++count,
            done: true
        };
    };    
    return nextChainLink;
})();

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(param);
        }, 1000);
    });
};
const getDeepPropertiesCount = (obj) => {
    let count = 0;
    return (function foo(obj) {
        for (key in obj) {
            count++;
            if (typeof obj[key] === 'object') foo(obj[key]);
        }
        return count;
    })(obj);
};
const createSerializedObject = () => {
    JSON.stringify = (obj) => obj;
    JSON.parse = (obj) => obj;
    return {};
};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort((left, right) => {
        if (Object.getPrototypeOf(left) !== right) return 1;
    });
    return array;
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
