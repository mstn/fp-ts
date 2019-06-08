"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var E = require("./Either");
var EitherT_1 = require("./EitherT");
var IO_1 = require("./IO");
var pipeable_1 = require("./pipeable");
var T = EitherT_1.getEitherM(IO_1.io);
/**
 * @since 2.0.0
 */
exports.URI = 'IOEither';
/**
 * @since 2.0.0
 */
exports.left = T.left;
/**
 * @since 2.0.0
 */
exports.right = T.of;
/**
 * @since 2.0.0
 */
exports.rightIO = T.rightM;
/**
 * @since 2.0.0
 */
exports.leftIO = T.leftM;
/**
 * @since 2.0.0
 */
exports.fromEither = IO_1.io.of;
/**
 * @since 2.0.0
 */
function fromOption(onNone) {
    return function (ma) { return T.fromOption(ma, onNone); };
}
exports.fromOption = fromOption;
function fromPredicate(predicate, onFalse) {
    var f = E.fromPredicate(predicate, onFalse);
    return function (a) { return exports.fromEither(f(a)); };
}
exports.fromPredicate = fromPredicate;
/**
 * @since 2.0.0
 */
function fold(onLeft, onRight) {
    return function (ma) { return T.fold(ma, onLeft, onRight); };
}
exports.fold = fold;
/**
 * @since 2.0.0
 */
function getOrElse(f) {
    return function (ma) { return T.getOrElse(ma, f); };
}
exports.getOrElse = getOrElse;
function filterOrElse(predicate, onFalse) {
    return function (ma) { return IO_1.io.map(ma, E.filterOrElse(predicate, onFalse)); };
}
exports.filterOrElse = filterOrElse;
/**
 * @since 2.0.0
 */
function orElse(f) {
    return function (ma) { return T.orElse(ma, f); };
}
exports.orElse = orElse;
/**
 * @since 2.0.0
 */
exports.swap = T.swap;
/**
 * @since 2.0.0
 */
function getSemigroup(S) {
    return IO_1.getSemigroup(E.getSemigroup(S));
}
exports.getSemigroup = getSemigroup;
/**
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return IO_1.getSemigroup(E.getApplySemigroup(S));
}
exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */
function getApplyMonoid(M) {
    return {
        concat: getApplySemigroup(M).concat,
        empty: exports.right(M.empty)
    };
}
exports.getApplyMonoid = getApplyMonoid;
/**
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * @since 2.0.0
 */
function tryCatch(f, onError) {
    return function () { return E.tryCatch(f, onError); };
}
exports.tryCatch = tryCatch;
/**
 * Make sure that a resource is cleaned up in the event of an exception. The
 * release action is called regardless of whether the body action throws or
 * returns.
 *
 * @since 2.0.0
 */
function bracket(acquire, use, release) {
    return T.chain(acquire, function (a) {
        return T.chain(IO_1.io.map(use(a), E.right), function (e) { return T.chain(release(a, e), function () { return (E.isLeft(e) ? T.left(e.left) : T.of(e.right)); }); });
    });
}
exports.bracket = bracket;
/**
 * @since 2.0.0
 */
exports.ioEither = {
    URI: exports.URI,
    bimap: T.bimap,
    mapLeft: T.mapLeft,
    map: T.map,
    of: exports.right,
    ap: T.ap,
    chain: T.chain,
    alt: T.alt,
    fromIO: exports.rightIO
};
var _a = pipeable_1.pipeable(exports.ioEither), alt = _a.alt, ap = _a.ap, apFirst = _a.apFirst, apSecond = _a.apSecond, bimap = _a.bimap, chain = _a.chain, chainFirst = _a.chainFirst, flatten = _a.flatten, map = _a.map, mapLeft = _a.mapLeft;
exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.bimap = bimap;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.flatten = flatten;
exports.map = map;
exports.mapLeft = mapLeft;
