
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Letter
 * 
 */
export type Letter = $Result.DefaultSelection<Prisma.$LetterPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.letter`: Exposes CRUD operations for the **Letter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Letters
    * const letters = await prisma.letter.findMany()
    * ```
    */
  get letter(): Prisma.LetterDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Letter: 'Letter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'letter'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Letter: {
        payload: Prisma.$LetterPayload<ExtArgs>
        fields: Prisma.LetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LetterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LetterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          findFirst: {
            args: Prisma.LetterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LetterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          findMany: {
            args: Prisma.LetterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>[]
          }
          create: {
            args: Prisma.LetterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          createMany: {
            args: Prisma.LetterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LetterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          update: {
            args: Prisma.LetterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          deleteMany: {
            args: Prisma.LetterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LetterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LetterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LetterPayload>
          }
          aggregate: {
            args: Prisma.LetterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLetter>
          }
          groupBy: {
            args: Prisma.LetterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.LetterCountArgs<ExtArgs>,
            result: $Utils.Optional<LetterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    letters: number
    responses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    letters?: boolean | UserCountOutputTypeCountLettersArgs
    responses?: boolean | UserCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLettersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    letterToRespond: number | null
  }

  export type UserSumAggregateOutputType = {
    letterToRespond: number | null
  }

  export type UserMinAggregateOutputType = {
    email: string | null
    name: string | null
    country: string | null
    letterToRespond: number | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    name: string | null
    country: string | null
    letterToRespond: number | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    name: number
    country: number
    letterToRespond: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    letterToRespond?: true
  }

  export type UserSumAggregateInputType = {
    letterToRespond?: true
  }

  export type UserMinAggregateInputType = {
    email?: true
    name?: true
    country?: true
    letterToRespond?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    name?: true
    country?: true
    letterToRespond?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    name?: true
    country?: true
    letterToRespond?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    email: string
    name: string
    country: string
    letterToRespond: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    country?: boolean
    letterToRespond?: boolean
    letters?: boolean | User$lettersArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    email?: boolean
    name?: boolean
    country?: boolean
    letterToRespond?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    letters?: boolean | User$lettersArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      letters: Prisma.$LetterPayload<ExtArgs>[]
      responses: Prisma.$LetterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      email: string
      name: string
      country: string
      letterToRespond: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    letters<T extends User$lettersArgs<ExtArgs> = {}>(args?: Subset<T, User$lettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findMany'> | Null>;

    responses<T extends User$responsesArgs<ExtArgs> = {}>(args?: Subset<T, User$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly letterToRespond: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.letters
   */
  export type User$lettersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    cursor?: LetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }


  /**
   * User.responses
   */
  export type User$responsesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    cursor?: LetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Letter
   */

  export type AggregateLetter = {
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  export type LetterAvgAggregateOutputType = {
    id: number | null
  }

  export type LetterSumAggregateOutputType = {
    id: number | null
  }

  export type LetterMinAggregateOutputType = {
    id: number | null
    letterAuthorEmail: string | null
    letterContent: string | null
    responseAuthorEmail: string | null
    responseContent: string | null
    letterDate: Date | null
    responseDate: Date | null
  }

  export type LetterMaxAggregateOutputType = {
    id: number | null
    letterAuthorEmail: string | null
    letterContent: string | null
    responseAuthorEmail: string | null
    responseContent: string | null
    letterDate: Date | null
    responseDate: Date | null
  }

  export type LetterCountAggregateOutputType = {
    id: number
    letterAuthorEmail: number
    letterContent: number
    responseAuthorEmail: number
    responseContent: number
    letterDate: number
    responseDate: number
    _all: number
  }


  export type LetterAvgAggregateInputType = {
    id?: true
  }

  export type LetterSumAggregateInputType = {
    id?: true
  }

  export type LetterMinAggregateInputType = {
    id?: true
    letterAuthorEmail?: true
    letterContent?: true
    responseAuthorEmail?: true
    responseContent?: true
    letterDate?: true
    responseDate?: true
  }

  export type LetterMaxAggregateInputType = {
    id?: true
    letterAuthorEmail?: true
    letterContent?: true
    responseAuthorEmail?: true
    responseContent?: true
    letterDate?: true
    responseDate?: true
  }

  export type LetterCountAggregateInputType = {
    id?: true
    letterAuthorEmail?: true
    letterContent?: true
    responseAuthorEmail?: true
    responseContent?: true
    letterDate?: true
    responseDate?: true
    _all?: true
  }

  export type LetterAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Letter to aggregate.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Letters
    **/
    _count?: true | LetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LetterMaxAggregateInputType
  }

  export type GetLetterAggregateType<T extends LetterAggregateArgs> = {
        [P in keyof T & keyof AggregateLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLetter[P]>
      : GetScalarType<T[P], AggregateLetter[P]>
  }




  export type LetterGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LetterWhereInput
    orderBy?: LetterOrderByWithAggregationInput | LetterOrderByWithAggregationInput[]
    by: LetterScalarFieldEnum[] | LetterScalarFieldEnum
    having?: LetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LetterCountAggregateInputType | true
    _avg?: LetterAvgAggregateInputType
    _sum?: LetterSumAggregateInputType
    _min?: LetterMinAggregateInputType
    _max?: LetterMaxAggregateInputType
  }

  export type LetterGroupByOutputType = {
    id: number
    letterAuthorEmail: string
    letterContent: string
    responseAuthorEmail: string | null
    responseContent: string | null
    letterDate: Date
    responseDate: Date | null
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  type GetLetterGroupByPayload<T extends LetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LetterGroupByOutputType[P]>
            : GetScalarType<T[P], LetterGroupByOutputType[P]>
        }
      >
    >


  export type LetterSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    letterAuthorEmail?: boolean
    letterContent?: boolean
    responseAuthorEmail?: boolean
    responseContent?: boolean
    letterDate?: boolean
    responseDate?: boolean
    letterAuthor?: boolean | UserDefaultArgs<ExtArgs>
    responseAuthor?: boolean | Letter$responseAuthorArgs<ExtArgs>
  }, ExtArgs["result"]["letter"]>

  export type LetterSelectScalar = {
    id?: boolean
    letterAuthorEmail?: boolean
    letterContent?: boolean
    responseAuthorEmail?: boolean
    responseContent?: boolean
    letterDate?: boolean
    responseDate?: boolean
  }

  export type LetterInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    letterAuthor?: boolean | UserDefaultArgs<ExtArgs>
    responseAuthor?: boolean | Letter$responseAuthorArgs<ExtArgs>
  }


  export type $LetterPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Letter"
    objects: {
      letterAuthor: Prisma.$UserPayload<ExtArgs>
      responseAuthor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      letterAuthorEmail: string
      letterContent: string
      responseAuthorEmail: string | null
      responseContent: string | null
      letterDate: Date
      responseDate: Date | null
    }, ExtArgs["result"]["letter"]>
    composites: {}
  }


  type LetterGetPayload<S extends boolean | null | undefined | LetterDefaultArgs> = $Result.GetResult<Prisma.$LetterPayload, S>

  type LetterCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LetterFindManyArgs, 'select' | 'include'> & {
      select?: LetterCountAggregateInputType | true
    }

  export interface LetterDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Letter'], meta: { name: 'Letter' } }
    /**
     * Find zero or one Letter that matches the filter.
     * @param {LetterFindUniqueArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LetterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LetterFindUniqueArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Letter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LetterFindUniqueOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LetterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Letter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LetterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterFindFirstArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Letter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LetterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Letters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Letters
     * const letters = await prisma.letter.findMany()
     * 
     * // Get first 10 Letters
     * const letters = await prisma.letter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const letterWithIdOnly = await prisma.letter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LetterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Letter.
     * @param {LetterCreateArgs} args - Arguments to create a Letter.
     * @example
     * // Create one Letter
     * const Letter = await prisma.letter.create({
     *   data: {
     *     // ... data to create a Letter
     *   }
     * })
     * 
    **/
    create<T extends LetterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LetterCreateArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Letters.
     *     @param {LetterCreateManyArgs} args - Arguments to create many Letters.
     *     @example
     *     // Create many Letters
     *     const letter = await prisma.letter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LetterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Letter.
     * @param {LetterDeleteArgs} args - Arguments to delete one Letter.
     * @example
     * // Delete one Letter
     * const Letter = await prisma.letter.delete({
     *   where: {
     *     // ... filter to delete one Letter
     *   }
     * })
     * 
    **/
    delete<T extends LetterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LetterDeleteArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Letter.
     * @param {LetterUpdateArgs} args - Arguments to update one Letter.
     * @example
     * // Update one Letter
     * const letter = await prisma.letter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LetterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LetterUpdateArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Letters.
     * @param {LetterDeleteManyArgs} args - Arguments to filter Letters to delete.
     * @example
     * // Delete a few Letters
     * const { count } = await prisma.letter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LetterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Letters
     * const letter = await prisma.letter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LetterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LetterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Letter.
     * @param {LetterUpsertArgs} args - Arguments to update or create a Letter.
     * @example
     * // Update or create a Letter
     * const letter = await prisma.letter.upsert({
     *   create: {
     *     // ... data to create a Letter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Letter we want to update
     *   }
     * })
    **/
    upsert<T extends LetterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LetterUpsertArgs<ExtArgs>>
    ): Prisma__LetterClient<$Result.GetResult<Prisma.$LetterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterCountArgs} args - Arguments to filter Letters to count.
     * @example
     * // Count the number of Letters
     * const count = await prisma.letter.count({
     *   where: {
     *     // ... the filter for the Letters we want to count
     *   }
     * })
    **/
    count<T extends LetterCountArgs>(
      args?: Subset<T, LetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LetterAggregateArgs>(args: Subset<T, LetterAggregateArgs>): Prisma.PrismaPromise<GetLetterAggregateType<T>>

    /**
     * Group by Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LetterGroupByArgs['orderBy'] }
        : { orderBy?: LetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Letter model
   */
  readonly fields: LetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Letter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LetterClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    letterAuthor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    responseAuthor<T extends Letter$responseAuthorArgs<ExtArgs> = {}>(args?: Subset<T, Letter$responseAuthorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Letter model
   */ 
  interface LetterFieldRefs {
    readonly id: FieldRef<"Letter", 'Int'>
    readonly letterAuthorEmail: FieldRef<"Letter", 'String'>
    readonly letterContent: FieldRef<"Letter", 'String'>
    readonly responseAuthorEmail: FieldRef<"Letter", 'String'>
    readonly responseContent: FieldRef<"Letter", 'String'>
    readonly letterDate: FieldRef<"Letter", 'DateTime'>
    readonly responseDate: FieldRef<"Letter", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Letter findUnique
   */
  export type LetterFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter findUniqueOrThrow
   */
  export type LetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter findFirst
   */
  export type LetterFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }


  /**
   * Letter findFirstOrThrow
   */
  export type LetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }


  /**
   * Letter findMany
   */
  export type LetterFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter, which Letters to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: LetterOrderByWithRelationInput | LetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    distinct?: LetterScalarFieldEnum | LetterScalarFieldEnum[]
  }


  /**
   * Letter create
   */
  export type LetterCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The data needed to create a Letter.
     */
    data: XOR<LetterCreateInput, LetterUncheckedCreateInput>
  }


  /**
   * Letter createMany
   */
  export type LetterCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Letters.
     */
    data: LetterCreateManyInput | LetterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Letter update
   */
  export type LetterUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The data needed to update a Letter.
     */
    data: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
    /**
     * Choose, which Letter to update.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter updateMany
   */
  export type LetterUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Letters.
     */
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyInput>
    /**
     * Filter which Letters to update
     */
    where?: LetterWhereInput
  }


  /**
   * Letter upsert
   */
  export type LetterUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * The filter to search for the Letter to update in case it exists.
     */
    where: LetterWhereUniqueInput
    /**
     * In case the Letter found by the `where` argument doesn't exist, create a new Letter with this data.
     */
    create: XOR<LetterCreateInput, LetterUncheckedCreateInput>
    /**
     * In case the Letter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
  }


  /**
   * Letter delete
   */
  export type LetterDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
    /**
     * Filter which Letter to delete.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter deleteMany
   */
  export type LetterDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Letters to delete
     */
    where?: LetterWhereInput
  }


  /**
   * Letter.responseAuthor
   */
  export type Letter$responseAuthorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Letter without action
   */
  export type LetterDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    email: 'email',
    name: 'name',
    country: 'country',
    letterToRespond: 'letterToRespond'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LetterScalarFieldEnum: {
    id: 'id',
    letterAuthorEmail: 'letterAuthorEmail',
    letterContent: 'letterContent',
    responseAuthorEmail: 'responseAuthorEmail',
    responseContent: 'responseContent',
    letterDate: 'letterDate',
    responseDate: 'responseDate'
  };

  export type LetterScalarFieldEnum = (typeof LetterScalarFieldEnum)[keyof typeof LetterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    letterToRespond?: IntNullableFilter<"User"> | number | null
    letters?: LetterListRelationFilter
    responses?: LetterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    letterToRespond?: SortOrderInput | SortOrder
    letters?: LetterOrderByRelationAggregateInput
    responses?: LetterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    letterToRespond?: IntNullableFilter<"User"> | number | null
    letters?: LetterListRelationFilter
    responses?: LetterListRelationFilter
  }, "email" | "email">

  export type UserOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    letterToRespond?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    letterToRespond?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type LetterWhereInput = {
    AND?: LetterWhereInput | LetterWhereInput[]
    OR?: LetterWhereInput[]
    NOT?: LetterWhereInput | LetterWhereInput[]
    id?: IntFilter<"Letter"> | number
    letterAuthorEmail?: StringFilter<"Letter"> | string
    letterContent?: StringFilter<"Letter"> | string
    responseAuthorEmail?: StringNullableFilter<"Letter"> | string | null
    responseContent?: StringNullableFilter<"Letter"> | string | null
    letterDate?: DateTimeFilter<"Letter"> | Date | string
    responseDate?: DateTimeNullableFilter<"Letter"> | Date | string | null
    letterAuthor?: XOR<UserRelationFilter, UserWhereInput>
    responseAuthor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type LetterOrderByWithRelationInput = {
    id?: SortOrder
    letterAuthorEmail?: SortOrder
    letterContent?: SortOrder
    responseAuthorEmail?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    letterDate?: SortOrder
    responseDate?: SortOrderInput | SortOrder
    letterAuthor?: UserOrderByWithRelationInput
    responseAuthor?: UserOrderByWithRelationInput
  }

  export type LetterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LetterWhereInput | LetterWhereInput[]
    OR?: LetterWhereInput[]
    NOT?: LetterWhereInput | LetterWhereInput[]
    letterAuthorEmail?: StringFilter<"Letter"> | string
    letterContent?: StringFilter<"Letter"> | string
    responseAuthorEmail?: StringNullableFilter<"Letter"> | string | null
    responseContent?: StringNullableFilter<"Letter"> | string | null
    letterDate?: DateTimeFilter<"Letter"> | Date | string
    responseDate?: DateTimeNullableFilter<"Letter"> | Date | string | null
    letterAuthor?: XOR<UserRelationFilter, UserWhereInput>
    responseAuthor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type LetterOrderByWithAggregationInput = {
    id?: SortOrder
    letterAuthorEmail?: SortOrder
    letterContent?: SortOrder
    responseAuthorEmail?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    letterDate?: SortOrder
    responseDate?: SortOrderInput | SortOrder
    _count?: LetterCountOrderByAggregateInput
    _avg?: LetterAvgOrderByAggregateInput
    _max?: LetterMaxOrderByAggregateInput
    _min?: LetterMinOrderByAggregateInput
    _sum?: LetterSumOrderByAggregateInput
  }

  export type LetterScalarWhereWithAggregatesInput = {
    AND?: LetterScalarWhereWithAggregatesInput | LetterScalarWhereWithAggregatesInput[]
    OR?: LetterScalarWhereWithAggregatesInput[]
    NOT?: LetterScalarWhereWithAggregatesInput | LetterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Letter"> | number
    letterAuthorEmail?: StringWithAggregatesFilter<"Letter"> | string
    letterContent?: StringWithAggregatesFilter<"Letter"> | string
    responseAuthorEmail?: StringNullableWithAggregatesFilter<"Letter"> | string | null
    responseContent?: StringNullableWithAggregatesFilter<"Letter"> | string | null
    letterDate?: DateTimeWithAggregatesFilter<"Letter"> | Date | string
    responseDate?: DateTimeNullableWithAggregatesFilter<"Letter"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    letters?: LetterCreateNestedManyWithoutLetterAuthorInput
    responses?: LetterCreateNestedManyWithoutResponseAuthorInput
  }

  export type UserUncheckedCreateInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    letters?: LetterUncheckedCreateNestedManyWithoutLetterAuthorInput
    responses?: LetterUncheckedCreateNestedManyWithoutResponseAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    letters?: LetterUpdateManyWithoutLetterAuthorNestedInput
    responses?: LetterUpdateManyWithoutResponseAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    letters?: LetterUncheckedUpdateManyWithoutLetterAuthorNestedInput
    responses?: LetterUncheckedUpdateManyWithoutResponseAuthorNestedInput
  }

  export type UserCreateManyInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LetterCreateInput = {
    letterContent: string
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
    letterAuthor: UserCreateNestedOneWithoutLettersInput
    responseAuthor?: UserCreateNestedOneWithoutResponsesInput
  }

  export type LetterUncheckedCreateInput = {
    id?: number
    letterAuthorEmail: string
    letterContent: string
    responseAuthorEmail?: string | null
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterUpdateInput = {
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    letterAuthor?: UserUpdateOneRequiredWithoutLettersNestedInput
    responseAuthor?: UserUpdateOneWithoutResponsesNestedInput
  }

  export type LetterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterAuthorEmail?: StringFieldUpdateOperationsInput | string
    letterContent?: StringFieldUpdateOperationsInput | string
    responseAuthorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LetterCreateManyInput = {
    id?: number
    letterAuthorEmail: string
    letterContent: string
    responseAuthorEmail?: string | null
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterUpdateManyMutationInput = {
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LetterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterAuthorEmail?: StringFieldUpdateOperationsInput | string
    letterContent?: StringFieldUpdateOperationsInput | string
    responseAuthorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LetterListRelationFilter = {
    every?: LetterWhereInput
    some?: LetterWhereInput
    none?: LetterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    letterToRespond?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    letterToRespond?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    letterToRespond?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    letterToRespond?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    letterToRespond?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LetterCountOrderByAggregateInput = {
    id?: SortOrder
    letterAuthorEmail?: SortOrder
    letterContent?: SortOrder
    responseAuthorEmail?: SortOrder
    responseContent?: SortOrder
    letterDate?: SortOrder
    responseDate?: SortOrder
  }

  export type LetterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LetterMaxOrderByAggregateInput = {
    id?: SortOrder
    letterAuthorEmail?: SortOrder
    letterContent?: SortOrder
    responseAuthorEmail?: SortOrder
    responseContent?: SortOrder
    letterDate?: SortOrder
    responseDate?: SortOrder
  }

  export type LetterMinOrderByAggregateInput = {
    id?: SortOrder
    letterAuthorEmail?: SortOrder
    letterContent?: SortOrder
    responseAuthorEmail?: SortOrder
    responseContent?: SortOrder
    letterDate?: SortOrder
    responseDate?: SortOrder
  }

  export type LetterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LetterCreateNestedManyWithoutLetterAuthorInput = {
    create?: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput> | LetterCreateWithoutLetterAuthorInput[] | LetterUncheckedCreateWithoutLetterAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutLetterAuthorInput | LetterCreateOrConnectWithoutLetterAuthorInput[]
    createMany?: LetterCreateManyLetterAuthorInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterCreateNestedManyWithoutResponseAuthorInput = {
    create?: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput> | LetterCreateWithoutResponseAuthorInput[] | LetterUncheckedCreateWithoutResponseAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutResponseAuthorInput | LetterCreateOrConnectWithoutResponseAuthorInput[]
    createMany?: LetterCreateManyResponseAuthorInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUncheckedCreateNestedManyWithoutLetterAuthorInput = {
    create?: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput> | LetterCreateWithoutLetterAuthorInput[] | LetterUncheckedCreateWithoutLetterAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutLetterAuthorInput | LetterCreateOrConnectWithoutLetterAuthorInput[]
    createMany?: LetterCreateManyLetterAuthorInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type LetterUncheckedCreateNestedManyWithoutResponseAuthorInput = {
    create?: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput> | LetterCreateWithoutResponseAuthorInput[] | LetterUncheckedCreateWithoutResponseAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutResponseAuthorInput | LetterCreateOrConnectWithoutResponseAuthorInput[]
    createMany?: LetterCreateManyResponseAuthorInputEnvelope
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LetterUpdateManyWithoutLetterAuthorNestedInput = {
    create?: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput> | LetterCreateWithoutLetterAuthorInput[] | LetterUncheckedCreateWithoutLetterAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutLetterAuthorInput | LetterCreateOrConnectWithoutLetterAuthorInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutLetterAuthorInput | LetterUpsertWithWhereUniqueWithoutLetterAuthorInput[]
    createMany?: LetterCreateManyLetterAuthorInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutLetterAuthorInput | LetterUpdateWithWhereUniqueWithoutLetterAuthorInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutLetterAuthorInput | LetterUpdateManyWithWhereWithoutLetterAuthorInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterUpdateManyWithoutResponseAuthorNestedInput = {
    create?: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput> | LetterCreateWithoutResponseAuthorInput[] | LetterUncheckedCreateWithoutResponseAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutResponseAuthorInput | LetterCreateOrConnectWithoutResponseAuthorInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutResponseAuthorInput | LetterUpsertWithWhereUniqueWithoutResponseAuthorInput[]
    createMany?: LetterCreateManyResponseAuthorInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutResponseAuthorInput | LetterUpdateWithWhereUniqueWithoutResponseAuthorInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutResponseAuthorInput | LetterUpdateManyWithWhereWithoutResponseAuthorInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterUncheckedUpdateManyWithoutLetterAuthorNestedInput = {
    create?: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput> | LetterCreateWithoutLetterAuthorInput[] | LetterUncheckedCreateWithoutLetterAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutLetterAuthorInput | LetterCreateOrConnectWithoutLetterAuthorInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutLetterAuthorInput | LetterUpsertWithWhereUniqueWithoutLetterAuthorInput[]
    createMany?: LetterCreateManyLetterAuthorInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutLetterAuthorInput | LetterUpdateWithWhereUniqueWithoutLetterAuthorInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutLetterAuthorInput | LetterUpdateManyWithWhereWithoutLetterAuthorInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type LetterUncheckedUpdateManyWithoutResponseAuthorNestedInput = {
    create?: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput> | LetterCreateWithoutResponseAuthorInput[] | LetterUncheckedCreateWithoutResponseAuthorInput[]
    connectOrCreate?: LetterCreateOrConnectWithoutResponseAuthorInput | LetterCreateOrConnectWithoutResponseAuthorInput[]
    upsert?: LetterUpsertWithWhereUniqueWithoutResponseAuthorInput | LetterUpsertWithWhereUniqueWithoutResponseAuthorInput[]
    createMany?: LetterCreateManyResponseAuthorInputEnvelope
    set?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    disconnect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    delete?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    connect?: LetterWhereUniqueInput | LetterWhereUniqueInput[]
    update?: LetterUpdateWithWhereUniqueWithoutResponseAuthorInput | LetterUpdateWithWhereUniqueWithoutResponseAuthorInput[]
    updateMany?: LetterUpdateManyWithWhereWithoutResponseAuthorInput | LetterUpdateManyWithWhereWithoutResponseAuthorInput[]
    deleteMany?: LetterScalarWhereInput | LetterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLettersInput = {
    create?: XOR<UserCreateWithoutLettersInput, UserUncheckedCreateWithoutLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsesInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLettersNestedInput = {
    create?: XOR<UserCreateWithoutLettersInput, UserUncheckedCreateWithoutLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersInput
    upsert?: UserUpsertWithoutLettersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLettersInput, UserUpdateWithoutLettersInput>, UserUncheckedUpdateWithoutLettersInput>
  }

  export type UserUpdateOneWithoutResponsesNestedInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    upsert?: UserUpsertWithoutResponsesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsesInput, UserUpdateWithoutResponsesInput>, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LetterCreateWithoutLetterAuthorInput = {
    letterContent: string
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
    responseAuthor?: UserCreateNestedOneWithoutResponsesInput
  }

  export type LetterUncheckedCreateWithoutLetterAuthorInput = {
    id?: number
    letterContent: string
    responseAuthorEmail?: string | null
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterCreateOrConnectWithoutLetterAuthorInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput>
  }

  export type LetterCreateManyLetterAuthorInputEnvelope = {
    data: LetterCreateManyLetterAuthorInput | LetterCreateManyLetterAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LetterCreateWithoutResponseAuthorInput = {
    letterContent: string
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
    letterAuthor: UserCreateNestedOneWithoutLettersInput
  }

  export type LetterUncheckedCreateWithoutResponseAuthorInput = {
    id?: number
    letterAuthorEmail: string
    letterContent: string
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterCreateOrConnectWithoutResponseAuthorInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput>
  }

  export type LetterCreateManyResponseAuthorInputEnvelope = {
    data: LetterCreateManyResponseAuthorInput | LetterCreateManyResponseAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LetterUpsertWithWhereUniqueWithoutLetterAuthorInput = {
    where: LetterWhereUniqueInput
    update: XOR<LetterUpdateWithoutLetterAuthorInput, LetterUncheckedUpdateWithoutLetterAuthorInput>
    create: XOR<LetterCreateWithoutLetterAuthorInput, LetterUncheckedCreateWithoutLetterAuthorInput>
  }

  export type LetterUpdateWithWhereUniqueWithoutLetterAuthorInput = {
    where: LetterWhereUniqueInput
    data: XOR<LetterUpdateWithoutLetterAuthorInput, LetterUncheckedUpdateWithoutLetterAuthorInput>
  }

  export type LetterUpdateManyWithWhereWithoutLetterAuthorInput = {
    where: LetterScalarWhereInput
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyWithoutLetterAuthorInput>
  }

  export type LetterScalarWhereInput = {
    AND?: LetterScalarWhereInput | LetterScalarWhereInput[]
    OR?: LetterScalarWhereInput[]
    NOT?: LetterScalarWhereInput | LetterScalarWhereInput[]
    id?: IntFilter<"Letter"> | number
    letterAuthorEmail?: StringFilter<"Letter"> | string
    letterContent?: StringFilter<"Letter"> | string
    responseAuthorEmail?: StringNullableFilter<"Letter"> | string | null
    responseContent?: StringNullableFilter<"Letter"> | string | null
    letterDate?: DateTimeFilter<"Letter"> | Date | string
    responseDate?: DateTimeNullableFilter<"Letter"> | Date | string | null
  }

  export type LetterUpsertWithWhereUniqueWithoutResponseAuthorInput = {
    where: LetterWhereUniqueInput
    update: XOR<LetterUpdateWithoutResponseAuthorInput, LetterUncheckedUpdateWithoutResponseAuthorInput>
    create: XOR<LetterCreateWithoutResponseAuthorInput, LetterUncheckedCreateWithoutResponseAuthorInput>
  }

  export type LetterUpdateWithWhereUniqueWithoutResponseAuthorInput = {
    where: LetterWhereUniqueInput
    data: XOR<LetterUpdateWithoutResponseAuthorInput, LetterUncheckedUpdateWithoutResponseAuthorInput>
  }

  export type LetterUpdateManyWithWhereWithoutResponseAuthorInput = {
    where: LetterScalarWhereInput
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyWithoutResponseAuthorInput>
  }

  export type UserCreateWithoutLettersInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    responses?: LetterCreateNestedManyWithoutResponseAuthorInput
  }

  export type UserUncheckedCreateWithoutLettersInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    responses?: LetterUncheckedCreateNestedManyWithoutResponseAuthorInput
  }

  export type UserCreateOrConnectWithoutLettersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLettersInput, UserUncheckedCreateWithoutLettersInput>
  }

  export type UserCreateWithoutResponsesInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    letters?: LetterCreateNestedManyWithoutLetterAuthorInput
  }

  export type UserUncheckedCreateWithoutResponsesInput = {
    email: string
    name: string
    country: string
    letterToRespond?: number | null
    letters?: LetterUncheckedCreateNestedManyWithoutLetterAuthorInput
  }

  export type UserCreateOrConnectWithoutResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
  }

  export type UserUpsertWithoutLettersInput = {
    update: XOR<UserUpdateWithoutLettersInput, UserUncheckedUpdateWithoutLettersInput>
    create: XOR<UserCreateWithoutLettersInput, UserUncheckedCreateWithoutLettersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLettersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLettersInput, UserUncheckedUpdateWithoutLettersInput>
  }

  export type UserUpdateWithoutLettersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    responses?: LetterUpdateManyWithoutResponseAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutLettersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    responses?: LetterUncheckedUpdateManyWithoutResponseAuthorNestedInput
  }

  export type UserUpsertWithoutResponsesInput = {
    update: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateWithoutResponsesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    letters?: LetterUpdateManyWithoutLetterAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    letterToRespond?: NullableIntFieldUpdateOperationsInput | number | null
    letters?: LetterUncheckedUpdateManyWithoutLetterAuthorNestedInput
  }

  export type LetterCreateManyLetterAuthorInput = {
    id?: number
    letterContent: string
    responseAuthorEmail?: string | null
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterCreateManyResponseAuthorInput = {
    id?: number
    letterAuthorEmail: string
    letterContent: string
    responseContent?: string | null
    letterDate?: Date | string
    responseDate?: Date | string | null
  }

  export type LetterUpdateWithoutLetterAuthorInput = {
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseAuthor?: UserUpdateOneWithoutResponsesNestedInput
  }

  export type LetterUncheckedUpdateWithoutLetterAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterContent?: StringFieldUpdateOperationsInput | string
    responseAuthorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LetterUncheckedUpdateManyWithoutLetterAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterContent?: StringFieldUpdateOperationsInput | string
    responseAuthorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LetterUpdateWithoutResponseAuthorInput = {
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    letterAuthor?: UserUpdateOneRequiredWithoutLettersNestedInput
  }

  export type LetterUncheckedUpdateWithoutResponseAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterAuthorEmail?: StringFieldUpdateOperationsInput | string
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LetterUncheckedUpdateManyWithoutResponseAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    letterAuthorEmail?: StringFieldUpdateOperationsInput | string
    letterContent?: StringFieldUpdateOperationsInput | string
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    letterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    responseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LetterDefaultArgs instead
     */
    export type LetterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = LetterDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}