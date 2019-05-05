"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file The `Ord` type class represents types which support comparisons with a _total order_.
 *
 * Instances should satisfy the laws of total orderings:
 *
 * 1. Reflexivity: `S.compare(a, a) <= 0`
 * 2. Antisymmetry: if `S.compare(a, b) <= 0` and `S.compare(b, a) <= 0` then `a <-> b`
 * 3. Transitivity: if `S.compare(a, b) <= 0` and `S.compare(b, c) <= 0` then `S.compare(a, c) <= 0`
 *
 * See [Getting started with fp-ts: Ord](https://dev.to/gcanti/getting-started-with-fp-ts-ord-5f1e)
 */
var Ordering_1 = require("./Ordering");
var Eq_1 = require("./Eq");
// default compare for primitive types
var compare = function (x, y) {
    return x < y ? -1 : x > y ? 1 : 0;
};
/**
 * @since 2.0.0
 */
exports.ordString = {
    equals: Eq_1.eqString.equals,
    compare: compare
};
/**
 * @since 2.0.0
 */
exports.ordNumber = {
    equals: Eq_1.eqNumber.equals,
    compare: compare
};
/**
 * @since 2.0.0
 */
exports.ordBoolean = {
    equals: Eq_1.eqBoolean.equals,
    compare: compare
};
/**
 * @since 2.0.0
 */
exports.ordDate = contramap(exports.ordNumber, function (date) { return date.valueOf(); });
/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */
function lessThan(O) {
    return function (x, y) { return O.compare(x, y) === -1; };
}
exports.lessThan = lessThan;
/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */
function greaterThan(O) {
    return function (x, y) { return O.compare(x, y) === 1; };
}
exports.greaterThan = greaterThan;
/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */
function lessThanOrEq(O) {
    return function (x, y) { return O.compare(x, y) !== 1; };
}
exports.lessThanOrEq = lessThanOrEq;
/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */
function greaterThanOrEq(O) {
    return function (x, y) { return O.compare(x, y) !== -1; };
}
exports.greaterThanOrEq = greaterThanOrEq;
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
function min(O) {
    return function (x, y) { return (O.compare(x, y) === 1 ? y : x); };
}
exports.min = min;
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
function max(O) {
    return function (x, y) { return (O.compare(x, y) === -1 ? y : x); };
}
exports.max = max;
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
function clamp(O) {
    var minO = min(O);
    var maxO = max(O);
    return function (low, hi) { return function (x) { return maxO(minO(x, hi), low); }; };
}
exports.clamp = clamp;
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */
function between(O) {
    var lessThanO = lessThan(O);
    var greaterThanO = greaterThan(O);
    return function (low, hi) { return function (x) { return (lessThanO(x, low) || greaterThanO(x, hi) ? false : true); }; };
}
exports.between = between;
/**
 * @since 2.0.0
 */
function fromCompare(compare) {
    var optimizedCompare = function (x, y) { return (x === y ? 0 : compare(x, y)); };
    return {
        equals: function (x, y) { return optimizedCompare(x, y) === 0; },
        compare: optimizedCompare
    };
}
exports.fromCompare = fromCompare;
/**
 * @since 2.0.0
 */
function contramap(O, f) {
    return fromCompare(function (x, y) { return O.compare(f(x), f(y)); });
}
exports.contramap = contramap;
/**
 * @since 2.0.0
 */
function getSemigroup() {
    return {
        concat: function (x, y) { return fromCompare(function (a, b) { return Ordering_1.semigroupOrdering.concat(x.compare(a, b), y.compare(a, b)); }); }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple
 *
 * @example
 * import { getTupleOrd, ordString, ordNumber, ordBoolean } from 'fp-ts/lib/Ord'
 *
 * const O = getTupleOrd(ordString, ordNumber, ordBoolean)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @since 2.0.0
 */
function getTupleOrd() {
    var ords = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ords[_i] = arguments[_i];
    }
    var len = ords.length;
    return fromCompare(function (x, y) {
        var i = 0;
        for (; i < len - 1; i++) {
            var r = ords[i].compare(x[i], y[i]);
            if (r !== 0) {
                return r;
            }
        }
        return ords[i].compare(x[i], y[i]);
    });
}
exports.getTupleOrd = getTupleOrd;
/**
 * @since 2.0.0
 */
function getDualOrd(O) {
    return fromCompare(function (x, y) { return O.compare(y, x); });
}
exports.getDualOrd = getDualOrd;