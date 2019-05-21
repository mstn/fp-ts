"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var E = require("./Either");
var EitherT_1 = require("./EitherT");
var Task_1 = require("./Task");
var T = EitherT_1.getEitherM(Task_1.task);
/**
 * @since 2.0.0
 */
exports.URI = 'TaskEither';
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
function rightIO(ma) {
    return exports.rightTask(Task_1.task.fromIO(ma));
}
exports.rightIO = rightIO;
/**
 * @since 2.0.0
 */
function leftIO(me) {
    return exports.leftTask(Task_1.task.fromIO(me));
}
exports.leftIO = leftIO;
/**
 * @since 2.0.0
 */
exports.rightTask = T.rightM;
/**
 * @since 2.0.0
 */
exports.leftTask = T.leftM;
/**
 * @since 2.0.0
 */
exports.fromEither = Task_1.task.of;
/**
 * @since 2.0.0
 */
function fromOption(ma, onNone) {
    return exports.fromEither(E.fromOption(ma, onNone));
}
exports.fromOption = fromOption;
/**
 * @since 2.0.0
 */
exports.fromIOEither = Task_1.task.fromIO;
function fromPredicate(predicate, onFalse) {
    var f = E.fromPredicate(predicate, onFalse);
    return function (a) { return Task_1.task.of(f(a)); };
}
exports.fromPredicate = fromPredicate;
/**
 * @since 2.0.0
 */
exports.fold = T.fold;
/**
 * @since 2.0.0
 */
exports.getOrElse = T.getOrElse;
function filterOrElse(predicate, onFalse) {
    return function (ma) { return Task_1.task.map(ma, E.filterOrElse(predicate, onFalse)); };
}
exports.filterOrElse = filterOrElse;
/**
 * @since 2.0.0
 */
exports.orElse = T.orElse;
/**
 * @since 2.0.0
 */
exports.swap = T.swap;
/**
 * @since 2.0.0
 */
function getSemigroup(S) {
    return Task_1.getSemigroup(E.getSemigroup(S));
}
exports.getSemigroup = getSemigroup;
/**
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return Task_1.getSemigroup(E.getApplySemigroup(S));
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
 * @since 2.0.0
 */
function tryCatch(f, onRejected) {
    return function () { return f().then(function (a) { return E.right(a); }, function (reason) { return E.left(onRejected(reason)); }); };
}
exports.tryCatch = tryCatch;
/**
 * Make sure that a resource is cleaned up in the event of an exception. The
 * release action is called regardless of whether the body action throws or
 * returns.
 *
 * @since 2.0.0
 */
exports.bracket = T.bracket;
function taskify(f) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function () {
            return new Promise(function (resolve) {
                var cbResolver = function (e, r) { return (e != null ? resolve(E.left(e)) : resolve(E.right(r))); };
                f.apply(null, args.concat(cbResolver));
            });
        };
    };
}
exports.taskify = taskify;
/**
 * @since 2.0.0
 */
exports.taskEither = {
    URI: exports.URI,
    bimap: T.bimap,
    mapLeft: T.mapLeft,
    map: T.map,
    of: exports.right,
    ap: T.ap,
    chain: T.chain,
    alt: T.alt,
    fromIO: rightIO,
    fromTask: exports.rightTask
};
/**
 * Like `TaskEither` but `ap` is sequential
 *
 * @since 2.0.0
 */
exports.taskEitherSeq = __assign({}, exports.taskEither, { ap: function (mab, ma) { return T.chain(mab, function (f) { return T.map(ma, f); }); } });
