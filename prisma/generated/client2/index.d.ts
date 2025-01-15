
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductPriceHistory
 * 
 */
export type ProductPriceHistory = $Result.DefaultSelection<Prisma.$ProductPriceHistoryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model ProductPicture
 * 
 */
export type ProductPicture = $Result.DefaultSelection<Prisma.$ProductPicturePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPriceHistory`: Exposes CRUD operations for the **ProductPriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPriceHistories
    * const productPriceHistories = await prisma.productPriceHistory.findMany()
    * ```
    */
  get productPriceHistory(): Prisma.ProductPriceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPicture`: Exposes CRUD operations for the **ProductPicture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPictures
    * const productPictures = await prisma.productPicture.findMany()
    * ```
    */
  get productPicture(): Prisma.ProductPictureDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Product: 'Product',
    ProductPriceHistory: 'ProductPriceHistory',
    Category: 'Category',
    ProductCategory: 'ProductCategory',
    ProductPicture: 'ProductPicture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "product" | "productPriceHistory" | "category" | "productCategory" | "productPicture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductPriceHistory: {
        payload: Prisma.$ProductPriceHistoryPayload<ExtArgs>
        fields: Prisma.ProductPriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProductPriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          findMany: {
            args: Prisma.ProductPriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>[]
          }
          create: {
            args: Prisma.ProductPriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          createMany: {
            args: Prisma.ProductPriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductPriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          update: {
            args: Prisma.ProductPriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProductPriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPriceHistory>
          }
          groupBy: {
            args: Prisma.ProductPriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductPicture: {
        payload: Prisma.$ProductPicturePayload<ExtArgs>
        fields: Prisma.ProductPictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          findFirst: {
            args: Prisma.ProductPictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          findMany: {
            args: Prisma.ProductPictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>[]
          }
          create: {
            args: Prisma.ProductPictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          createMany: {
            args: Prisma.ProductPictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductPictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          update: {
            args: Prisma.ProductPictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          deleteMany: {
            args: Prisma.ProductPictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductPictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPicturePayload>
          }
          aggregate: {
            args: Prisma.ProductPictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPicture>
          }
          groupBy: {
            args: Prisma.ProductPictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPictureCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPictureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    productPriceHistory?: ProductPriceHistoryOmit
    category?: CategoryOmit
    productCategory?: ProductCategoryOmit
    productPicture?: ProductPictureOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductCategory: number
    ProductPicture: number
    ProductPriceHistory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategory?: boolean | ProductCountOutputTypeCountProductCategoryArgs
    ProductPicture?: boolean | ProductCountOutputTypeCountProductPictureArgs
    ProductPriceHistory?: boolean | ProductCountOutputTypeCountProductPriceHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductPictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPictureWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceHistoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    ProductCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategory?: boolean | CategoryCountOutputTypeCountProductCategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    description: string | null
    price: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    description: string | null
    price: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    description: number
    price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    description?: true
    price?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    description?: true
    price?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    description?: true
    price?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    createdBy: number
    createdAt: Date
    updatedBy: number
    updatedAt: Date | null
    description: string
    price: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
    ProductCategory?: boolean | Product$ProductCategoryArgs<ExtArgs>
    ProductPicture?: boolean | Product$ProductPictureArgs<ExtArgs>
    ProductPriceHistory?: boolean | Product$ProductPriceHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt" | "description" | "price", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategory?: boolean | Product$ProductCategoryArgs<ExtArgs>
    ProductPicture?: boolean | Product$ProductPictureArgs<ExtArgs>
    ProductPriceHistory?: boolean | Product$ProductPriceHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ProductCategory: Prisma.$ProductCategoryPayload<ExtArgs>[]
      ProductPicture: Prisma.$ProductPicturePayload<ExtArgs>[]
      ProductPriceHistory: Prisma.$ProductPriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdBy: number
      createdAt: Date
      updatedBy: number
      updatedAt: Date | null
      description: string
      price: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCategory<T extends Product$ProductCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ProductPicture<T extends Product$ProductPictureArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductPictureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ProductPriceHistory<T extends Product$ProductPriceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductPriceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly createdBy: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedBy: FieldRef<"Product", 'Int'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.ProductCategory
   */
  export type Product$ProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    cursor?: ProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * Product.ProductPicture
   */
  export type Product$ProductPictureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    where?: ProductPictureWhereInput
    orderBy?: ProductPictureOrderByWithRelationInput | ProductPictureOrderByWithRelationInput[]
    cursor?: ProductPictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPictureScalarFieldEnum | ProductPictureScalarFieldEnum[]
  }

  /**
   * Product.ProductPriceHistory
   */
  export type Product$ProductPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    where?: ProductPriceHistoryWhereInput
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    cursor?: ProductPriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductPriceHistory
   */

  export type AggregateProductPriceHistory = {
    _count: ProductPriceHistoryCountAggregateOutputType | null
    _avg: ProductPriceHistoryAvgAggregateOutputType | null
    _sum: ProductPriceHistorySumAggregateOutputType | null
    _min: ProductPriceHistoryMinAggregateOutputType | null
    _max: ProductPriceHistoryMaxAggregateOutputType | null
  }

  export type ProductPriceHistoryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    createdBy: number | null
  }

  export type ProductPriceHistorySumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    createdBy: number | null
  }

  export type ProductPriceHistoryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type ProductPriceHistoryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    createdBy: number | null
    createdAt: Date | null
  }

  export type ProductPriceHistoryCountAggregateOutputType = {
    id: number
    productId: number
    price: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ProductPriceHistoryAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    createdBy?: true
  }

  export type ProductPriceHistorySumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    createdBy?: true
  }

  export type ProductPriceHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    createdBy?: true
    createdAt?: true
  }

  export type ProductPriceHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    createdBy?: true
    createdAt?: true
  }

  export type ProductPriceHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ProductPriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceHistory to aggregate.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPriceHistories
    **/
    _count?: true | ProductPriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceHistoryMaxAggregateInputType
  }

  export type GetProductPriceHistoryAggregateType<T extends ProductPriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPriceHistory[P]>
      : GetScalarType<T[P], AggregateProductPriceHistory[P]>
  }




  export type ProductPriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceHistoryWhereInput
    orderBy?: ProductPriceHistoryOrderByWithAggregationInput | ProductPriceHistoryOrderByWithAggregationInput[]
    by: ProductPriceHistoryScalarFieldEnum[] | ProductPriceHistoryScalarFieldEnum
    having?: ProductPriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceHistoryCountAggregateInputType | true
    _avg?: ProductPriceHistoryAvgAggregateInputType
    _sum?: ProductPriceHistorySumAggregateInputType
    _min?: ProductPriceHistoryMinAggregateInputType
    _max?: ProductPriceHistoryMaxAggregateInputType
  }

  export type ProductPriceHistoryGroupByOutputType = {
    id: number
    productId: number
    price: number
    createdBy: number
    createdAt: Date
    _count: ProductPriceHistoryCountAggregateOutputType | null
    _avg: ProductPriceHistoryAvgAggregateOutputType | null
    _sum: ProductPriceHistorySumAggregateOutputType | null
    _min: ProductPriceHistoryMinAggregateOutputType | null
    _max: ProductPriceHistoryMaxAggregateOutputType | null
  }

  type GetProductPriceHistoryGroupByPayload<T extends ProductPriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPriceHistory"]>



  export type ProductPriceHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ProductPriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "price" | "createdBy" | "createdAt", ExtArgs["result"]["productPriceHistory"]>
  export type ProductPriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPriceHistory"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      price: number
      createdBy: number
      createdAt: Date
    }, ExtArgs["result"]["productPriceHistory"]>
    composites: {}
  }

  type ProductPriceHistoryGetPayload<S extends boolean | null | undefined | ProductPriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProductPriceHistoryPayload, S>

  type ProductPriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceHistoryCountAggregateInputType | true
    }

  export interface ProductPriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPriceHistory'], meta: { name: 'ProductPriceHistory' } }
    /**
     * Find zero or one ProductPriceHistory that matches the filter.
     * @param {ProductPriceHistoryFindUniqueArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceHistoryFindUniqueArgs>(args: SelectSubset<T, ProductPriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductPriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindFirstArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceHistoryFindFirstArgs>(args?: SelectSubset<T, ProductPriceHistoryFindFirstArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindFirstOrThrowArgs} args - Arguments to find a ProductPriceHistory
     * @example
     * // Get one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductPriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPriceHistories
     * const productPriceHistories = await prisma.productPriceHistory.findMany()
     * 
     * // Get first 10 ProductPriceHistories
     * const productPriceHistories = await prisma.productPriceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceHistoryWithIdOnly = await prisma.productPriceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceHistoryFindManyArgs>(args?: SelectSubset<T, ProductPriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductPriceHistory.
     * @param {ProductPriceHistoryCreateArgs} args - Arguments to create a ProductPriceHistory.
     * @example
     * // Create one ProductPriceHistory
     * const ProductPriceHistory = await prisma.productPriceHistory.create({
     *   data: {
     *     // ... data to create a ProductPriceHistory
     *   }
     * })
     * 
     */
    create<T extends ProductPriceHistoryCreateArgs>(args: SelectSubset<T, ProductPriceHistoryCreateArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductPriceHistories.
     * @param {ProductPriceHistoryCreateManyArgs} args - Arguments to create many ProductPriceHistories.
     * @example
     * // Create many ProductPriceHistories
     * const productPriceHistory = await prisma.productPriceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceHistoryCreateManyArgs>(args?: SelectSubset<T, ProductPriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductPriceHistory.
     * @param {ProductPriceHistoryDeleteArgs} args - Arguments to delete one ProductPriceHistory.
     * @example
     * // Delete one ProductPriceHistory
     * const ProductPriceHistory = await prisma.productPriceHistory.delete({
     *   where: {
     *     // ... filter to delete one ProductPriceHistory
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceHistoryDeleteArgs>(args: SelectSubset<T, ProductPriceHistoryDeleteArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductPriceHistory.
     * @param {ProductPriceHistoryUpdateArgs} args - Arguments to update one ProductPriceHistory.
     * @example
     * // Update one ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceHistoryUpdateArgs>(args: SelectSubset<T, ProductPriceHistoryUpdateArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductPriceHistories.
     * @param {ProductPriceHistoryDeleteManyArgs} args - Arguments to filter ProductPriceHistories to delete.
     * @example
     * // Delete a few ProductPriceHistories
     * const { count } = await prisma.productPriceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceHistoryDeleteManyArgs>(args?: SelectSubset<T, ProductPriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPriceHistories
     * const productPriceHistory = await prisma.productPriceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceHistoryUpdateManyArgs>(args: SelectSubset<T, ProductPriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPriceHistory.
     * @param {ProductPriceHistoryUpsertArgs} args - Arguments to update or create a ProductPriceHistory.
     * @example
     * // Update or create a ProductPriceHistory
     * const productPriceHistory = await prisma.productPriceHistory.upsert({
     *   create: {
     *     // ... data to create a ProductPriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceHistoryUpsertArgs>(args: SelectSubset<T, ProductPriceHistoryUpsertArgs<ExtArgs>>): Prisma__ProductPriceHistoryClient<$Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductPriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryCountArgs} args - Arguments to filter ProductPriceHistories to count.
     * @example
     * // Count the number of ProductPriceHistories
     * const count = await prisma.productPriceHistory.count({
     *   where: {
     *     // ... the filter for the ProductPriceHistories we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceHistoryCountArgs>(
      args?: Subset<T, ProductPriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPriceHistoryAggregateArgs>(args: Subset<T, ProductPriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductPriceHistoryAggregateType<T>>

    /**
     * Group by ProductPriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceHistoryGroupByArgs} args - Group by arguments.
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
      T extends ProductPriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPriceHistory model
   */
  readonly fields: ProductPriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPriceHistory model
   */ 
  interface ProductPriceHistoryFieldRefs {
    readonly id: FieldRef<"ProductPriceHistory", 'Int'>
    readonly productId: FieldRef<"ProductPriceHistory", 'Int'>
    readonly price: FieldRef<"ProductPriceHistory", 'Float'>
    readonly createdBy: FieldRef<"ProductPriceHistory", 'Int'>
    readonly createdAt: FieldRef<"ProductPriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductPriceHistory findUnique
   */
  export type ProductPriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory findUniqueOrThrow
   */
  export type ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory findFirst
   */
  export type ProductPriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceHistories.
     */
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory findFirstOrThrow
   */
  export type ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistory to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceHistories.
     */
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory findMany
   */
  export type ProductPriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductPriceHistories to fetch.
     */
    where?: ProductPriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceHistories to fetch.
     */
    orderBy?: ProductPriceHistoryOrderByWithRelationInput | ProductPriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPriceHistories.
     */
    cursor?: ProductPriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceHistories.
     */
    skip?: number
    distinct?: ProductPriceHistoryScalarFieldEnum | ProductPriceHistoryScalarFieldEnum[]
  }

  /**
   * ProductPriceHistory create
   */
  export type ProductPriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPriceHistory.
     */
    data: XOR<ProductPriceHistoryCreateInput, ProductPriceHistoryUncheckedCreateInput>
  }

  /**
   * ProductPriceHistory createMany
   */
  export type ProductPriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPriceHistories.
     */
    data: ProductPriceHistoryCreateManyInput | ProductPriceHistoryCreateManyInput[]
  }

  /**
   * ProductPriceHistory update
   */
  export type ProductPriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPriceHistory.
     */
    data: XOR<ProductPriceHistoryUpdateInput, ProductPriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProductPriceHistory to update.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory updateMany
   */
  export type ProductPriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPriceHistories.
     */
    data: XOR<ProductPriceHistoryUpdateManyMutationInput, ProductPriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductPriceHistories to update
     */
    where?: ProductPriceHistoryWhereInput
  }

  /**
   * ProductPriceHistory upsert
   */
  export type ProductPriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPriceHistory to update in case it exists.
     */
    where: ProductPriceHistoryWhereUniqueInput
    /**
     * In case the ProductPriceHistory found by the `where` argument doesn't exist, create a new ProductPriceHistory with this data.
     */
    create: XOR<ProductPriceHistoryCreateInput, ProductPriceHistoryUncheckedCreateInput>
    /**
     * In case the ProductPriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceHistoryUpdateInput, ProductPriceHistoryUncheckedUpdateInput>
  }

  /**
   * ProductPriceHistory delete
   */
  export type ProductPriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProductPriceHistory to delete.
     */
    where: ProductPriceHistoryWhereUniqueInput
  }

  /**
   * ProductPriceHistory deleteMany
   */
  export type ProductPriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceHistories to delete
     */
    where?: ProductPriceHistoryWhereInput
  }

  /**
   * ProductPriceHistory without action
   */
  export type ProductPriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceHistory
     */
    select?: ProductPriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceHistory
     */
    omit?: ProductPriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdBy: number
    createdAt: Date
    updatedBy: number
    updatedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    ProductCategory?: boolean | Category$ProductCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategory?: boolean | Category$ProductCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      ProductCategory: Prisma.$ProductCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdBy: number
      createdAt: Date
      updatedBy: number
      updatedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCategory<T extends Category$ProductCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdBy: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedBy: FieldRef<"Category", 'Int'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.ProductCategory
   */
  export type Category$ProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    cursor?: ProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    productId: number
    categoryId: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type ProductCategorySumAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: number
    productId: number
    categoryId: number
    createdBy: number
    createdAt: Date
    updatedBy: number
    updatedAt: Date | null
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>



  export type ProductCategorySelectScalar = {
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "categoryId" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      categoryId: number
      createdBy: number
      createdAt: Date
      updatedBy: number
      updatedAt: Date | null
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */ 
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'Int'>
    readonly productId: FieldRef<"ProductCategory", 'Int'>
    readonly categoryId: FieldRef<"ProductCategory", 'Int'>
    readonly createdBy: FieldRef<"ProductCategory", 'Int'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductCategory", 'Int'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductPicture
   */

  export type AggregateProductPicture = {
    _count: ProductPictureCountAggregateOutputType | null
    _avg: ProductPictureAvgAggregateOutputType | null
    _sum: ProductPictureSumAggregateOutputType | null
    _min: ProductPictureMinAggregateOutputType | null
    _max: ProductPictureMaxAggregateOutputType | null
  }

  export type ProductPictureAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type ProductPictureSumAggregateOutputType = {
    id: number | null
    productId: number | null
    createdBy: number | null
    updatedBy: number | null
  }

  export type ProductPictureMinAggregateOutputType = {
    id: number | null
    productId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    fileName: string | null
  }

  export type ProductPictureMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    fileName: string | null
  }

  export type ProductPictureCountAggregateOutputType = {
    id: number
    productId: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    fileName: number
    _all: number
  }


  export type ProductPictureAvgAggregateInputType = {
    id?: true
    productId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type ProductPictureSumAggregateInputType = {
    id?: true
    productId?: true
    createdBy?: true
    updatedBy?: true
  }

  export type ProductPictureMinAggregateInputType = {
    id?: true
    productId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    fileName?: true
  }

  export type ProductPictureMaxAggregateInputType = {
    id?: true
    productId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    fileName?: true
  }

  export type ProductPictureCountAggregateInputType = {
    id?: true
    productId?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    fileName?: true
    _all?: true
  }

  export type ProductPictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPicture to aggregate.
     */
    where?: ProductPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPictures to fetch.
     */
    orderBy?: ProductPictureOrderByWithRelationInput | ProductPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPictures
    **/
    _count?: true | ProductPictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPictureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPictureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPictureMaxAggregateInputType
  }

  export type GetProductPictureAggregateType<T extends ProductPictureAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPicture[P]>
      : GetScalarType<T[P], AggregateProductPicture[P]>
  }




  export type ProductPictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPictureWhereInput
    orderBy?: ProductPictureOrderByWithAggregationInput | ProductPictureOrderByWithAggregationInput[]
    by: ProductPictureScalarFieldEnum[] | ProductPictureScalarFieldEnum
    having?: ProductPictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPictureCountAggregateInputType | true
    _avg?: ProductPictureAvgAggregateInputType
    _sum?: ProductPictureSumAggregateInputType
    _min?: ProductPictureMinAggregateInputType
    _max?: ProductPictureMaxAggregateInputType
  }

  export type ProductPictureGroupByOutputType = {
    id: number
    productId: number
    createdBy: number
    createdAt: Date
    updatedBy: number
    updatedAt: Date | null
    fileName: string
    _count: ProductPictureCountAggregateOutputType | null
    _avg: ProductPictureAvgAggregateOutputType | null
    _sum: ProductPictureSumAggregateOutputType | null
    _min: ProductPictureMinAggregateOutputType | null
    _max: ProductPictureMaxAggregateOutputType | null
  }

  type GetProductPictureGroupByPayload<T extends ProductPictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPictureGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPictureGroupByOutputType[P]>
        }
      >
    >


  export type ProductPictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    fileName?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPicture"]>



  export type ProductPictureSelectScalar = {
    id?: boolean
    productId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    fileName?: boolean
  }

  export type ProductPictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "createdBy" | "createdAt" | "updatedBy" | "updatedAt" | "fileName", ExtArgs["result"]["productPicture"]>
  export type ProductPictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductPicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPicture"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      createdBy: number
      createdAt: Date
      updatedBy: number
      updatedAt: Date | null
      fileName: string
    }, ExtArgs["result"]["productPicture"]>
    composites: {}
  }

  type ProductPictureGetPayload<S extends boolean | null | undefined | ProductPictureDefaultArgs> = $Result.GetResult<Prisma.$ProductPicturePayload, S>

  type ProductPictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPictureCountAggregateInputType | true
    }

  export interface ProductPictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPicture'], meta: { name: 'ProductPicture' } }
    /**
     * Find zero or one ProductPicture that matches the filter.
     * @param {ProductPictureFindUniqueArgs} args - Arguments to find a ProductPicture
     * @example
     * // Get one ProductPicture
     * const productPicture = await prisma.productPicture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPictureFindUniqueArgs>(args: SelectSubset<T, ProductPictureFindUniqueArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductPicture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPictureFindUniqueOrThrowArgs} args - Arguments to find a ProductPicture
     * @example
     * // Get one ProductPicture
     * const productPicture = await prisma.productPicture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPictureFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPicture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureFindFirstArgs} args - Arguments to find a ProductPicture
     * @example
     * // Get one ProductPicture
     * const productPicture = await prisma.productPicture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPictureFindFirstArgs>(args?: SelectSubset<T, ProductPictureFindFirstArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductPicture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureFindFirstOrThrowArgs} args - Arguments to find a ProductPicture
     * @example
     * // Get one ProductPicture
     * const productPicture = await prisma.productPicture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPictureFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductPictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPictures
     * const productPictures = await prisma.productPicture.findMany()
     * 
     * // Get first 10 ProductPictures
     * const productPictures = await prisma.productPicture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPictureWithIdOnly = await prisma.productPicture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPictureFindManyArgs>(args?: SelectSubset<T, ProductPictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductPicture.
     * @param {ProductPictureCreateArgs} args - Arguments to create a ProductPicture.
     * @example
     * // Create one ProductPicture
     * const ProductPicture = await prisma.productPicture.create({
     *   data: {
     *     // ... data to create a ProductPicture
     *   }
     * })
     * 
     */
    create<T extends ProductPictureCreateArgs>(args: SelectSubset<T, ProductPictureCreateArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductPictures.
     * @param {ProductPictureCreateManyArgs} args - Arguments to create many ProductPictures.
     * @example
     * // Create many ProductPictures
     * const productPicture = await prisma.productPicture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPictureCreateManyArgs>(args?: SelectSubset<T, ProductPictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductPicture.
     * @param {ProductPictureDeleteArgs} args - Arguments to delete one ProductPicture.
     * @example
     * // Delete one ProductPicture
     * const ProductPicture = await prisma.productPicture.delete({
     *   where: {
     *     // ... filter to delete one ProductPicture
     *   }
     * })
     * 
     */
    delete<T extends ProductPictureDeleteArgs>(args: SelectSubset<T, ProductPictureDeleteArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductPicture.
     * @param {ProductPictureUpdateArgs} args - Arguments to update one ProductPicture.
     * @example
     * // Update one ProductPicture
     * const productPicture = await prisma.productPicture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPictureUpdateArgs>(args: SelectSubset<T, ProductPictureUpdateArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductPictures.
     * @param {ProductPictureDeleteManyArgs} args - Arguments to filter ProductPictures to delete.
     * @example
     * // Delete a few ProductPictures
     * const { count } = await prisma.productPicture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPictureDeleteManyArgs>(args?: SelectSubset<T, ProductPictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPictures
     * const productPicture = await prisma.productPicture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPictureUpdateManyArgs>(args: SelectSubset<T, ProductPictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPicture.
     * @param {ProductPictureUpsertArgs} args - Arguments to update or create a ProductPicture.
     * @example
     * // Update or create a ProductPicture
     * const productPicture = await prisma.productPicture.upsert({
     *   create: {
     *     // ... data to create a ProductPicture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPicture we want to update
     *   }
     * })
     */
    upsert<T extends ProductPictureUpsertArgs>(args: SelectSubset<T, ProductPictureUpsertArgs<ExtArgs>>): Prisma__ProductPictureClient<$Result.GetResult<Prisma.$ProductPicturePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductPictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureCountArgs} args - Arguments to filter ProductPictures to count.
     * @example
     * // Count the number of ProductPictures
     * const count = await prisma.productPicture.count({
     *   where: {
     *     // ... the filter for the ProductPictures we want to count
     *   }
     * })
    **/
    count<T extends ProductPictureCountArgs>(
      args?: Subset<T, ProductPictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPictureAggregateArgs>(args: Subset<T, ProductPictureAggregateArgs>): Prisma.PrismaPromise<GetProductPictureAggregateType<T>>

    /**
     * Group by ProductPicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPictureGroupByArgs} args - Group by arguments.
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
      T extends ProductPictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPictureGroupByArgs['orderBy'] }
        : { orderBy?: ProductPictureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPicture model
   */
  readonly fields: ProductPictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPicture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPicture model
   */ 
  interface ProductPictureFieldRefs {
    readonly id: FieldRef<"ProductPicture", 'Int'>
    readonly productId: FieldRef<"ProductPicture", 'Int'>
    readonly createdBy: FieldRef<"ProductPicture", 'Int'>
    readonly createdAt: FieldRef<"ProductPicture", 'DateTime'>
    readonly updatedBy: FieldRef<"ProductPicture", 'Int'>
    readonly updatedAt: FieldRef<"ProductPicture", 'DateTime'>
    readonly fileName: FieldRef<"ProductPicture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductPicture findUnique
   */
  export type ProductPictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter, which ProductPicture to fetch.
     */
    where: ProductPictureWhereUniqueInput
  }

  /**
   * ProductPicture findUniqueOrThrow
   */
  export type ProductPictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter, which ProductPicture to fetch.
     */
    where: ProductPictureWhereUniqueInput
  }

  /**
   * ProductPicture findFirst
   */
  export type ProductPictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter, which ProductPicture to fetch.
     */
    where?: ProductPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPictures to fetch.
     */
    orderBy?: ProductPictureOrderByWithRelationInput | ProductPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPictures.
     */
    cursor?: ProductPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPictures.
     */
    distinct?: ProductPictureScalarFieldEnum | ProductPictureScalarFieldEnum[]
  }

  /**
   * ProductPicture findFirstOrThrow
   */
  export type ProductPictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter, which ProductPicture to fetch.
     */
    where?: ProductPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPictures to fetch.
     */
    orderBy?: ProductPictureOrderByWithRelationInput | ProductPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPictures.
     */
    cursor?: ProductPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPictures.
     */
    distinct?: ProductPictureScalarFieldEnum | ProductPictureScalarFieldEnum[]
  }

  /**
   * ProductPicture findMany
   */
  export type ProductPictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter, which ProductPictures to fetch.
     */
    where?: ProductPictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPictures to fetch.
     */
    orderBy?: ProductPictureOrderByWithRelationInput | ProductPictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPictures.
     */
    cursor?: ProductPictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPictures.
     */
    skip?: number
    distinct?: ProductPictureScalarFieldEnum | ProductPictureScalarFieldEnum[]
  }

  /**
   * ProductPicture create
   */
  export type ProductPictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPicture.
     */
    data: XOR<ProductPictureCreateInput, ProductPictureUncheckedCreateInput>
  }

  /**
   * ProductPicture createMany
   */
  export type ProductPictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPictures.
     */
    data: ProductPictureCreateManyInput | ProductPictureCreateManyInput[]
  }

  /**
   * ProductPicture update
   */
  export type ProductPictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPicture.
     */
    data: XOR<ProductPictureUpdateInput, ProductPictureUncheckedUpdateInput>
    /**
     * Choose, which ProductPicture to update.
     */
    where: ProductPictureWhereUniqueInput
  }

  /**
   * ProductPicture updateMany
   */
  export type ProductPictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPictures.
     */
    data: XOR<ProductPictureUpdateManyMutationInput, ProductPictureUncheckedUpdateManyInput>
    /**
     * Filter which ProductPictures to update
     */
    where?: ProductPictureWhereInput
  }

  /**
   * ProductPicture upsert
   */
  export type ProductPictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPicture to update in case it exists.
     */
    where: ProductPictureWhereUniqueInput
    /**
     * In case the ProductPicture found by the `where` argument doesn't exist, create a new ProductPicture with this data.
     */
    create: XOR<ProductPictureCreateInput, ProductPictureUncheckedCreateInput>
    /**
     * In case the ProductPicture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPictureUpdateInput, ProductPictureUncheckedUpdateInput>
  }

  /**
   * ProductPicture delete
   */
  export type ProductPictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
    /**
     * Filter which ProductPicture to delete.
     */
    where: ProductPictureWhereUniqueInput
  }

  /**
   * ProductPicture deleteMany
   */
  export type ProductPictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPictures to delete
     */
    where?: ProductPictureWhereInput
  }

  /**
   * ProductPicture without action
   */
  export type ProductPictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPicture
     */
    select?: ProductPictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPicture
     */
    omit?: ProductPictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductPictureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    description: 'description',
    price: 'price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductPriceHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    price: 'price',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ProductPriceHistoryScalarFieldEnum = (typeof ProductPriceHistoryScalarFieldEnum)[keyof typeof ProductPriceHistoryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    categoryId: 'categoryId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductPictureScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    fileName: 'fileName'
  };

  export type ProductPictureScalarFieldEnum = (typeof ProductPictureScalarFieldEnum)[keyof typeof ProductPictureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    createdBy?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: IntFilter<"Product"> | number
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    ProductCategory?: ProductCategoryListRelationFilter
    ProductPicture?: ProductPictureListRelationFilter
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    ProductCategory?: ProductCategoryOrderByRelationAggregateInput
    ProductPicture?: ProductPictureOrderByRelationAggregateInput
    ProductPriceHistory?: ProductPriceHistoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    createdBy?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedBy?: IntFilter<"Product"> | number
    updatedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    ProductCategory?: ProductCategoryListRelationFilter
    ProductPicture?: ProductPictureListRelationFilter
    ProductPriceHistory?: ProductPriceHistoryListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    createdBy?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Product"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
  }

  export type ProductPriceHistoryWhereInput = {
    AND?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    OR?: ProductPriceHistoryWhereInput[]
    NOT?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    id?: IntFilter<"ProductPriceHistory"> | number
    productId?: IntFilter<"ProductPriceHistory"> | number
    price?: FloatFilter<"ProductPriceHistory"> | number
    createdBy?: IntFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductPriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductPriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    OR?: ProductPriceHistoryWhereInput[]
    NOT?: ProductPriceHistoryWhereInput | ProductPriceHistoryWhereInput[]
    productId?: IntFilter<"ProductPriceHistory"> | number
    price?: FloatFilter<"ProductPriceHistory"> | number
    createdBy?: IntFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductPriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: ProductPriceHistoryCountOrderByAggregateInput
    _avg?: ProductPriceHistoryAvgOrderByAggregateInput
    _max?: ProductPriceHistoryMaxOrderByAggregateInput
    _min?: ProductPriceHistoryMinOrderByAggregateInput
    _sum?: ProductPriceHistorySumOrderByAggregateInput
  }

  export type ProductPriceHistoryScalarWhereWithAggregatesInput = {
    AND?: ProductPriceHistoryScalarWhereWithAggregatesInput | ProductPriceHistoryScalarWhereWithAggregatesInput[]
    OR?: ProductPriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceHistoryScalarWhereWithAggregatesInput | ProductPriceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductPriceHistory"> | number
    productId?: IntWithAggregatesFilter<"ProductPriceHistory"> | number
    price?: FloatWithAggregatesFilter<"ProductPriceHistory"> | number
    createdBy?: IntWithAggregatesFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductPriceHistory"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdBy?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedBy?: IntFilter<"Category"> | number
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    ProductCategory?: ProductCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    ProductCategory?: ProductCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdBy?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedBy?: IntFilter<"Category"> | number
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    ProductCategory?: ProductCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdBy?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Category"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
    createdBy?: IntFilter<"ProductCategory"> | number
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedBy?: IntFilter<"ProductCategory"> | number
    updatedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Category?: CategoryOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
    createdBy?: IntFilter<"ProductCategory"> | number
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedBy?: IntFilter<"ProductCategory"> | number
    updatedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCategory"> | number
    productId?: IntWithAggregatesFilter<"ProductCategory"> | number
    categoryId?: IntWithAggregatesFilter<"ProductCategory"> | number
    createdBy?: IntWithAggregatesFilter<"ProductCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"ProductCategory"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductCategory"> | Date | string | null
  }

  export type ProductPictureWhereInput = {
    AND?: ProductPictureWhereInput | ProductPictureWhereInput[]
    OR?: ProductPictureWhereInput[]
    NOT?: ProductPictureWhereInput | ProductPictureWhereInput[]
    id?: IntFilter<"ProductPicture"> | number
    productId?: IntFilter<"ProductPicture"> | number
    createdBy?: IntFilter<"ProductPicture"> | number
    createdAt?: DateTimeFilter<"ProductPicture"> | Date | string
    updatedBy?: IntFilter<"ProductPicture"> | number
    updatedAt?: DateTimeNullableFilter<"ProductPicture"> | Date | string | null
    fileName?: StringFilter<"ProductPicture"> | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductPictureOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    fileName?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ProductPictureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductPictureWhereInput | ProductPictureWhereInput[]
    OR?: ProductPictureWhereInput[]
    NOT?: ProductPictureWhereInput | ProductPictureWhereInput[]
    productId?: IntFilter<"ProductPicture"> | number
    createdBy?: IntFilter<"ProductPicture"> | number
    createdAt?: DateTimeFilter<"ProductPicture"> | Date | string
    updatedBy?: IntFilter<"ProductPicture"> | number
    updatedAt?: DateTimeNullableFilter<"ProductPicture"> | Date | string | null
    fileName?: StringFilter<"ProductPicture"> | string
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductPictureOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    fileName?: SortOrder
    _count?: ProductPictureCountOrderByAggregateInput
    _avg?: ProductPictureAvgOrderByAggregateInput
    _max?: ProductPictureMaxOrderByAggregateInput
    _min?: ProductPictureMinOrderByAggregateInput
    _sum?: ProductPictureSumOrderByAggregateInput
  }

  export type ProductPictureScalarWhereWithAggregatesInput = {
    AND?: ProductPictureScalarWhereWithAggregatesInput | ProductPictureScalarWhereWithAggregatesInput[]
    OR?: ProductPictureScalarWhereWithAggregatesInput[]
    NOT?: ProductPictureScalarWhereWithAggregatesInput | ProductPictureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductPicture"> | number
    productId?: IntWithAggregatesFilter<"ProductPicture"> | number
    createdBy?: IntWithAggregatesFilter<"ProductPicture"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductPicture"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"ProductPicture"> | number
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ProductPicture"> | Date | string | null
    fileName?: StringWithAggregatesFilter<"ProductPicture"> | string
  }

  export type ProductCreateInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryCreateNestedManyWithoutProductInput
    ProductPicture?: ProductPictureCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    ProductPicture?: ProductPictureUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUpdateManyWithoutProductNestedInput
    ProductPicture?: ProductPictureUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    ProductPicture?: ProductPictureUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductPriceHistoryCreateInput = {
    price: number
    createdBy: number
    createdAt?: Date | string
    Product: ProductCreateNestedOneWithoutProductPriceHistoryInput
  }

  export type ProductPriceHistoryUncheckedCreateInput = {
    id?: number
    productId: number
    price: number
    createdBy: number
    createdAt?: Date | string
  }

  export type ProductPriceHistoryUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutProductPriceHistoryNestedInput
  }

  export type ProductPriceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryCreateManyInput = {
    productId: number
    price: number
    createdBy: number
    createdAt?: Date | string
  }

  export type ProductPriceHistoryUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    ProductCategory?: ProductCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    ProductCategory?: ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductCategory?: ProductCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductCategory?: ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryCreateInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    Category: CategoryCreateNestedOneWithoutProductCategoryInput
    Product: ProductCreateNestedOneWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: number
    productId: number
    categoryId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductCategoryUpdateInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneRequiredWithoutProductCategoryNestedInput
    Product?: ProductUpdateOneRequiredWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryCreateManyInput = {
    productId: number
    categoryId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductCategoryUpdateManyMutationInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPictureCreateInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
    Product: ProductCreateNestedOneWithoutProductPictureInput
  }

  export type ProductPictureUncheckedCreateInput = {
    id?: number
    productId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
  }

  export type ProductPictureUpdateInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateOneRequiredWithoutProductPictureNestedInput
  }

  export type ProductPictureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPictureCreateManyInput = {
    productId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
  }

  export type ProductPictureUpdateManyMutationInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPictureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductCategoryListRelationFilter = {
    every?: ProductCategoryWhereInput
    some?: ProductCategoryWhereInput
    none?: ProductCategoryWhereInput
  }

  export type ProductPictureListRelationFilter = {
    every?: ProductPictureWhereInput
    some?: ProductPictureWhereInput
    none?: ProductPictureWhereInput
  }

  export type ProductPriceHistoryListRelationFilter = {
    every?: ProductPriceHistoryWhereInput
    some?: ProductPriceHistoryWhereInput
    none?: ProductPriceHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductPriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductPriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
  }

  export type ProductPriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductPriceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductPictureCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
  }

  export type ProductPictureAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductPictureMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
  }

  export type ProductPictureMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    fileName?: SortOrder
  }

  export type ProductPictureSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProductCategoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductPictureCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput> | ProductPictureCreateWithoutProductInput[] | ProductPictureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPictureCreateOrConnectWithoutProductInput | ProductPictureCreateOrConnectWithoutProductInput[]
    createMany?: ProductPictureCreateManyProductInputEnvelope
    connect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
  }

  export type ProductPriceHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type ProductCategoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductPictureUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput> | ProductPictureCreateWithoutProductInput[] | ProductPictureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPictureCreateOrConnectWithoutProductInput | ProductPictureCreateOrConnectWithoutProductInput[]
    createMany?: ProductPictureCreateManyProductInputEnvelope
    connect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
  }

  export type ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCategoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutProductInput | ProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type ProductPictureUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput> | ProductPictureCreateWithoutProductInput[] | ProductPictureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPictureCreateOrConnectWithoutProductInput | ProductPictureCreateOrConnectWithoutProductInput[]
    upsert?: ProductPictureUpsertWithWhereUniqueWithoutProductInput | ProductPictureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPictureCreateManyProductInputEnvelope
    set?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    disconnect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    delete?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    connect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    update?: ProductPictureUpdateWithWhereUniqueWithoutProductInput | ProductPictureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPictureUpdateManyWithWhereWithoutProductInput | ProductPictureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPictureScalarWhereInput | ProductPictureScalarWhereInput[]
  }

  export type ProductPriceHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type ProductCategoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput> | ProductCategoryCreateWithoutProductInput[] | ProductCategoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | ProductCategoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutProductInput | ProductCategoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCategoryCreateManyProductInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutProductInput | ProductCategoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutProductInput | ProductCategoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type ProductPictureUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput> | ProductPictureCreateWithoutProductInput[] | ProductPictureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPictureCreateOrConnectWithoutProductInput | ProductPictureCreateOrConnectWithoutProductInput[]
    upsert?: ProductPictureUpsertWithWhereUniqueWithoutProductInput | ProductPictureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPictureCreateManyProductInputEnvelope
    set?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    disconnect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    delete?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    connect?: ProductPictureWhereUniqueInput | ProductPictureWhereUniqueInput[]
    update?: ProductPictureUpdateWithWhereUniqueWithoutProductInput | ProductPictureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPictureUpdateManyWithWhereWithoutProductInput | ProductPictureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPictureScalarWhereInput | ProductPictureScalarWhereInput[]
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput> | ProductPriceHistoryCreateWithoutProductInput[] | ProductPriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPriceHistoryCreateOrConnectWithoutProductInput | ProductPriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductPriceHistoryCreateManyProductInputEnvelope
    set?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    disconnect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    delete?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    connect?: ProductPriceHistoryWhereUniqueInput | ProductPriceHistoryWhereUniqueInput[]
    update?: ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductPriceHistoryInput = {
    create?: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPriceHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductPriceHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPriceHistoryInput
    upsert?: ProductUpsertWithoutProductPriceHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductPriceHistoryInput, ProductUpdateWithoutProductPriceHistoryInput>, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type ProductCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
  }

  export type ProductCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type ProductCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput> | ProductCategoryCreateWithoutCategoryInput[] | ProductCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutCategoryInput | ProductCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput | ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCategoryCreateManyCategoryInputEnvelope
    set?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    disconnect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    delete?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    connect?: ProductCategoryWhereUniqueInput | ProductCategoryWhereUniqueInput[]
    update?: ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput | ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutCategoryInput | ProductCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductCategoryInput = {
    create?: XOR<CategoryCreateWithoutProductCategoryInput, CategoryUncheckedCreateWithoutProductCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProductCategoryInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutProductCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutProductCategoryInput, CategoryUncheckedCreateWithoutProductCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductCategoryInput
    upsert?: CategoryUpsertWithoutProductCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductCategoryInput, CategoryUpdateWithoutProductCategoryInput>, CategoryUncheckedUpdateWithoutProductCategoryInput>
  }

  export type ProductUpdateOneRequiredWithoutProductCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput
    upsert?: ProductUpsertWithoutProductCategoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductCategoryInput, ProductUpdateWithoutProductCategoryInput>, ProductUncheckedUpdateWithoutProductCategoryInput>
  }

  export type ProductCreateNestedOneWithoutProductPictureInput = {
    create?: XOR<ProductCreateWithoutProductPictureInput, ProductUncheckedCreateWithoutProductPictureInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPictureInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductPictureNestedInput = {
    create?: XOR<ProductCreateWithoutProductPictureInput, ProductUncheckedCreateWithoutProductPictureInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPictureInput
    upsert?: ProductUpsertWithoutProductPictureInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductPictureInput, ProductUpdateWithoutProductPictureInput>, ProductUncheckedUpdateWithoutProductPictureInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductCategoryCreateWithoutProductInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    Category: CategoryCreateNestedOneWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateWithoutProductInput = {
    id?: number
    categoryId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductCategoryCreateOrConnectWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCategoryCreateManyProductInputEnvelope = {
    data: ProductCategoryCreateManyProductInput | ProductCategoryCreateManyProductInput[]
  }

  export type ProductPictureCreateWithoutProductInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
  }

  export type ProductPictureUncheckedCreateWithoutProductInput = {
    id?: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
  }

  export type ProductPictureCreateOrConnectWithoutProductInput = {
    where: ProductPictureWhereUniqueInput
    create: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput>
  }

  export type ProductPictureCreateManyProductInputEnvelope = {
    data: ProductPictureCreateManyProductInput | ProductPictureCreateManyProductInput[]
  }

  export type ProductPriceHistoryCreateWithoutProductInput = {
    price: number
    createdBy: number
    createdAt?: Date | string
  }

  export type ProductPriceHistoryUncheckedCreateWithoutProductInput = {
    id?: number
    price: number
    createdBy: number
    createdAt?: Date | string
  }

  export type ProductPriceHistoryCreateOrConnectWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    create: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceHistoryCreateManyProductInputEnvelope = {
    data: ProductPriceHistoryCreateManyProductInput | ProductPriceHistoryCreateManyProductInput[]
  }

  export type ProductCategoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    update: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCategoryCreateWithoutProductInput, ProductCategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductCategoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductCategoryWhereUniqueInput
    data: XOR<ProductCategoryUpdateWithoutProductInput, ProductCategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductCategoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductCategoryScalarWhereInput
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCategoryScalarWhereInput = {
    AND?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
    OR?: ProductCategoryScalarWhereInput[]
    NOT?: ProductCategoryScalarWhereInput | ProductCategoryScalarWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    productId?: IntFilter<"ProductCategory"> | number
    categoryId?: IntFilter<"ProductCategory"> | number
    createdBy?: IntFilter<"ProductCategory"> | number
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedBy?: IntFilter<"ProductCategory"> | number
    updatedAt?: DateTimeNullableFilter<"ProductCategory"> | Date | string | null
  }

  export type ProductPictureUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPictureWhereUniqueInput
    update: XOR<ProductPictureUpdateWithoutProductInput, ProductPictureUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPictureCreateWithoutProductInput, ProductPictureUncheckedCreateWithoutProductInput>
  }

  export type ProductPictureUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPictureWhereUniqueInput
    data: XOR<ProductPictureUpdateWithoutProductInput, ProductPictureUncheckedUpdateWithoutProductInput>
  }

  export type ProductPictureUpdateManyWithWhereWithoutProductInput = {
    where: ProductPictureScalarWhereInput
    data: XOR<ProductPictureUpdateManyMutationInput, ProductPictureUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPictureScalarWhereInput = {
    AND?: ProductPictureScalarWhereInput | ProductPictureScalarWhereInput[]
    OR?: ProductPictureScalarWhereInput[]
    NOT?: ProductPictureScalarWhereInput | ProductPictureScalarWhereInput[]
    id?: IntFilter<"ProductPicture"> | number
    productId?: IntFilter<"ProductPicture"> | number
    createdBy?: IntFilter<"ProductPicture"> | number
    createdAt?: DateTimeFilter<"ProductPicture"> | Date | string
    updatedBy?: IntFilter<"ProductPicture"> | number
    updatedAt?: DateTimeNullableFilter<"ProductPicture"> | Date | string | null
    fileName?: StringFilter<"ProductPicture"> | string
  }

  export type ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    update: XOR<ProductPriceHistoryUpdateWithoutProductInput, ProductPriceHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPriceHistoryCreateWithoutProductInput, ProductPriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPriceHistoryWhereUniqueInput
    data: XOR<ProductPriceHistoryUpdateWithoutProductInput, ProductPriceHistoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductPriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductPriceHistoryScalarWhereInput
    data: XOR<ProductPriceHistoryUpdateManyMutationInput, ProductPriceHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPriceHistoryScalarWhereInput = {
    AND?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
    OR?: ProductPriceHistoryScalarWhereInput[]
    NOT?: ProductPriceHistoryScalarWhereInput | ProductPriceHistoryScalarWhereInput[]
    id?: IntFilter<"ProductPriceHistory"> | number
    productId?: IntFilter<"ProductPriceHistory"> | number
    price?: FloatFilter<"ProductPriceHistory"> | number
    createdBy?: IntFilter<"ProductPriceHistory"> | number
    createdAt?: DateTimeFilter<"ProductPriceHistory"> | Date | string
  }

  export type ProductCreateWithoutProductPriceHistoryInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryCreateNestedManyWithoutProductInput
    ProductPicture?: ProductPictureCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductPriceHistoryInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    ProductPicture?: ProductPictureUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductPriceHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
  }

  export type ProductUpsertWithoutProductPriceHistoryInput = {
    update: XOR<ProductUpdateWithoutProductPriceHistoryInput, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
    create: XOR<ProductCreateWithoutProductPriceHistoryInput, ProductUncheckedCreateWithoutProductPriceHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductPriceHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductPriceHistoryInput, ProductUncheckedUpdateWithoutProductPriceHistoryInput>
  }

  export type ProductUpdateWithoutProductPriceHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUpdateManyWithoutProductNestedInput
    ProductPicture?: ProductPictureUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductPriceHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    ProductPicture?: ProductPictureUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCategoryCreateWithoutCategoryInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    Product: ProductCreateNestedOneWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    productId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductCategoryCreateOrConnectWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCategoryCreateManyCategoryInputEnvelope = {
    data: ProductCategoryCreateManyCategoryInput | ProductCategoryCreateManyCategoryInput[]
  }

  export type ProductCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    update: XOR<ProductCategoryUpdateWithoutCategoryInput, ProductCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCategoryCreateWithoutCategoryInput, ProductCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductCategoryWhereUniqueInput
    data: XOR<ProductCategoryUpdateWithoutCategoryInput, ProductCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductCategoryScalarWhereInput
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutProductCategoryInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutProductCategoryInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutProductCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductCategoryInput, CategoryUncheckedCreateWithoutProductCategoryInput>
  }

  export type ProductCreateWithoutProductCategoryInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductPicture?: ProductPictureCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductCategoryInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductPicture?: ProductPictureUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
  }

  export type CategoryUpsertWithoutProductCategoryInput = {
    update: XOR<CategoryUpdateWithoutProductCategoryInput, CategoryUncheckedUpdateWithoutProductCategoryInput>
    create: XOR<CategoryCreateWithoutProductCategoryInput, CategoryUncheckedCreateWithoutProductCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductCategoryInput, CategoryUncheckedUpdateWithoutProductCategoryInput>
  }

  export type CategoryUpdateWithoutProductCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutProductCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutProductCategoryInput = {
    update: XOR<ProductUpdateWithoutProductCategoryInput, ProductUncheckedUpdateWithoutProductCategoryInput>
    create: XOR<ProductCreateWithoutProductCategoryInput, ProductUncheckedCreateWithoutProductCategoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductCategoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductCategoryInput, ProductUncheckedUpdateWithoutProductCategoryInput>
  }

  export type ProductUpdateWithoutProductCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductPicture?: ProductPictureUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductPicture?: ProductPictureUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProductPictureInput = {
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductPictureInput = {
    id?: number
    name: string
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    description: string
    price: number
    ProductCategory?: ProductCategoryUncheckedCreateNestedManyWithoutProductInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductPictureInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductPictureInput, ProductUncheckedCreateWithoutProductPictureInput>
  }

  export type ProductUpsertWithoutProductPictureInput = {
    update: XOR<ProductUpdateWithoutProductPictureInput, ProductUncheckedUpdateWithoutProductPictureInput>
    create: XOR<ProductCreateWithoutProductPictureInput, ProductUncheckedCreateWithoutProductPictureInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductPictureInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductPictureInput, ProductUncheckedUpdateWithoutProductPictureInput>
  }

  export type ProductUpdateWithoutProductPictureInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductPictureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    ProductCategory?: ProductCategoryUncheckedUpdateManyWithoutProductNestedInput
    ProductPriceHistory?: ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCategoryCreateManyProductInput = {
    categoryId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductPictureCreateManyProductInput = {
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
    fileName: string
  }

  export type ProductPriceHistoryCreateManyProductInput = {
    price: number
    createdBy: number
    createdAt?: Date | string
  }

  export type ProductCategoryUpdateWithoutProductInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Category?: CategoryUpdateOneRequiredWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductPictureUpdateWithoutProductInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPictureUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPictureUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPriceHistoryUpdateWithoutProductInput = {
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductPriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateManyCategoryInput = {
    productId: number
    createdBy: number
    createdAt?: Date | string
    updatedBy: number
    updatedAt?: Date | string | null
  }

  export type ProductCategoryUpdateWithoutCategoryInput = {
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Product?: ProductUpdateOneRequiredWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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