/**
 * @file `Task<A>` represents an asynchronous computation that yields a value of type `A` and **never fails**.
 * If you want to represent an asynchronous computation that may fail, please see `TaskEither`.
 */
import { IO } from './IO';
import { Monad1 } from './Monad';
import { MonadIO1 } from './MonadIO';
import { MonadTask1 } from './MonadTask';
import { Monoid } from './Monoid';
import { Semigroup } from './Semigroup';
declare module './HKT' {
    interface URI2HKT<A> {
        Task: Task<A>;
    }
}
/**
 * @since 2.0.0
 */
export declare const URI = "Task";
/**
 * @since 2.0.0
 */
export declare type URI = typeof URI;
/**
 * @since 2.0.0
 */
export interface Task<A> {
    (): Promise<A>;
}
/**
 * @since 2.0.0
 */
export declare const never: Task<never>;
/**
 * @since 2.0.0
 */
export declare function getSemigroup<A>(S: Semigroup<A>): Semigroup<Task<A>>;
/**
 * @since 2.0.0
 */
export declare function getMonoid<A>(M: Monoid<A>): Monoid<Task<A>>;
/**
 * @since 2.0.0
 */
export declare function getRaceMonoid<A = never>(): Monoid<Task<A>>;
/**
 * @since 2.0.0
 */
export declare function delay<A>(millis: number, ma: Task<A>): Task<A>;
/**
 * @since 2.0.0
 */
export declare function fromIO<A>(ma: IO<A>): Task<A>;
/**
 * @since 2.0.0
 */
export declare const task: Monad1<URI> & MonadIO1<URI> & MonadTask1<URI>;
/**
 * Like `Task` but `ap` is sequential
 *
 * @since 2.0.0
 */
export declare const taskSeq: typeof task;
declare const ap: <A>(fa: Task<A>) => <B>(fab: Task<(a: A) => B>) => Task<B>, apFirst: <B>(fb: Task<B>) => <A>(fa: Task<A>) => Task<A>, apSecond: <B>(fb: Task<B>) => <A>(fa: Task<A>) => Task<B>, chain: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<B>, chainFirst: <A, B>(f: (a: A) => Task<B>) => (ma: Task<A>) => Task<A>, flatten: <A>(mma: Task<Task<A>>) => Task<A>, map: <A, B>(f: (a: A) => B) => (fa: Task<A>) => Task<B>;
export { ap, apFirst, apSecond, chain, chainFirst, flatten, map };
