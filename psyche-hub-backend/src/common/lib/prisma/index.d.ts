
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
 * Model article_categories
 * 
 */
export type article_categories = $Result.DefaultSelection<Prisma.$article_categoriesPayload>
/**
 * Model article_tags
 * 
 */
export type article_tags = $Result.DefaultSelection<Prisma.$article_tagsPayload>
/**
 * Model articles
 * 
 */
export type articles = $Result.DefaultSelection<Prisma.$articlesPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model psychologists
 * 
 */
export type psychologists = $Result.DefaultSelection<Prisma.$psychologistsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Article_categories
 * const article_categories = await prisma.article_categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Article_categories
   * const article_categories = await prisma.article_categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.article_categories`: Exposes CRUD operations for the **article_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Article_categories
    * const article_categories = await prisma.article_categories.findMany()
    * ```
    */
  get article_categories(): Prisma.article_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article_tags`: Exposes CRUD operations for the **article_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Article_tags
    * const article_tags = await prisma.article_tags.findMany()
    * ```
    */
  get article_tags(): Prisma.article_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.psychologists`: Exposes CRUD operations for the **psychologists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Psychologists
    * const psychologists = await prisma.psychologists.findMany()
    * ```
    */
  get psychologists(): Prisma.psychologistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    article_categories: 'article_categories',
    article_tags: 'article_tags',
    articles: 'articles',
    categories: 'categories',
    psychologists: 'psychologists',
    tags: 'tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "article_categories" | "article_tags" | "articles" | "categories" | "psychologists" | "tags"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      article_categories: {
        payload: Prisma.$article_categoriesPayload<ExtArgs>
        fields: Prisma.article_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.article_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.article_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          findFirst: {
            args: Prisma.article_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.article_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          findMany: {
            args: Prisma.article_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>[]
          }
          create: {
            args: Prisma.article_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          createMany: {
            args: Prisma.article_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.article_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>[]
          }
          delete: {
            args: Prisma.article_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          update: {
            args: Prisma.article_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.article_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.article_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.article_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.article_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Article_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle_categories>
          }
          groupBy: {
            args: Prisma.article_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Article_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.article_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Article_categoriesCountAggregateOutputType> | number
          }
        }
      }
      article_tags: {
        payload: Prisma.$article_tagsPayload<ExtArgs>
        fields: Prisma.article_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.article_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.article_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          findFirst: {
            args: Prisma.article_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.article_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          findMany: {
            args: Prisma.article_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>[]
          }
          create: {
            args: Prisma.article_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          createMany: {
            args: Prisma.article_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.article_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>[]
          }
          delete: {
            args: Prisma.article_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          update: {
            args: Prisma.article_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          deleteMany: {
            args: Prisma.article_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.article_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.article_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>[]
          }
          upsert: {
            args: Prisma.article_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_tagsPayload>
          }
          aggregate: {
            args: Prisma.Article_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle_tags>
          }
          groupBy: {
            args: Prisma.article_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Article_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.article_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Article_tagsCountAggregateOutputType> | number
          }
        }
      }
      articles: {
        payload: Prisma.$articlesPayload<ExtArgs>
        fields: Prisma.articlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findFirst: {
            args: Prisma.articlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          findMany: {
            args: Prisma.articlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          create: {
            args: Prisma.articlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          createMany: {
            args: Prisma.articlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.articlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          delete: {
            args: Prisma.articlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          update: {
            args: Prisma.articlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          deleteMany: {
            args: Prisma.articlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.articlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>[]
          }
          upsert: {
            args: Prisma.articlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.articlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.articlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      psychologists: {
        payload: Prisma.$psychologistsPayload<ExtArgs>
        fields: Prisma.psychologistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.psychologistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.psychologistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          findFirst: {
            args: Prisma.psychologistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.psychologistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          findMany: {
            args: Prisma.psychologistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>[]
          }
          create: {
            args: Prisma.psychologistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          createMany: {
            args: Prisma.psychologistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.psychologistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>[]
          }
          delete: {
            args: Prisma.psychologistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          update: {
            args: Prisma.psychologistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          deleteMany: {
            args: Prisma.psychologistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.psychologistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.psychologistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>[]
          }
          upsert: {
            args: Prisma.psychologistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psychologistsPayload>
          }
          aggregate: {
            args: Prisma.PsychologistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePsychologists>
          }
          groupBy: {
            args: Prisma.psychologistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PsychologistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.psychologistsCountArgs<ExtArgs>
            result: $Utils.Optional<PsychologistsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    article_categories?: article_categoriesOmit
    article_tags?: article_tagsOmit
    articles?: articlesOmit
    categories?: categoriesOmit
    psychologists?: psychologistsOmit
    tags?: tagsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    article_categories: number
    article_tags: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_categories?: boolean | ArticlesCountOutputTypeCountArticle_categoriesArgs
    article_tags?: boolean | ArticlesCountOutputTypeCountArticle_tagsArgs
  }

  // Custom InputTypes
  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountArticle_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_categoriesWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountArticle_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    article_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_categories?: boolean | CategoriesCountOutputTypeCountArticle_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountArticle_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_categoriesWhereInput
  }


  /**
   * Count Type PsychologistsCountOutputType
   */

  export type PsychologistsCountOutputType = {
    articles: number
  }

  export type PsychologistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | PsychologistsCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * PsychologistsCountOutputType without action
   */
  export type PsychologistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PsychologistsCountOutputType
     */
    select?: PsychologistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PsychologistsCountOutputType without action
   */
  export type PsychologistsCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    article_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tags?: boolean | TagsCountOutputTypeCountArticle_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountArticle_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model article_categories
   */

  export type AggregateArticle_categories = {
    _count: Article_categoriesCountAggregateOutputType | null
    _min: Article_categoriesMinAggregateOutputType | null
    _max: Article_categoriesMaxAggregateOutputType | null
  }

  export type Article_categoriesMinAggregateOutputType = {
    article_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_categoriesMaxAggregateOutputType = {
    article_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_categoriesCountAggregateOutputType = {
    article_id: number
    category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Article_categoriesMinAggregateInputType = {
    article_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_categoriesMaxAggregateInputType = {
    article_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_categoriesCountAggregateInputType = {
    article_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Article_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_categories to aggregate.
     */
    where?: article_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_categories to fetch.
     */
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: article_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned article_categories
    **/
    _count?: true | Article_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Article_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Article_categoriesMaxAggregateInputType
  }

  export type GetArticle_categoriesAggregateType<T extends Article_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle_categories[P]>
      : GetScalarType<T[P], AggregateArticle_categories[P]>
  }




  export type article_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_categoriesWhereInput
    orderBy?: article_categoriesOrderByWithAggregationInput | article_categoriesOrderByWithAggregationInput[]
    by: Article_categoriesScalarFieldEnum[] | Article_categoriesScalarFieldEnum
    having?: article_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Article_categoriesCountAggregateInputType | true
    _min?: Article_categoriesMinAggregateInputType
    _max?: Article_categoriesMaxAggregateInputType
  }

  export type Article_categoriesGroupByOutputType = {
    article_id: string
    category_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: Article_categoriesCountAggregateOutputType | null
    _min: Article_categoriesMinAggregateOutputType | null
    _max: Article_categoriesMaxAggregateOutputType | null
  }

  type GetArticle_categoriesGroupByPayload<T extends article_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Article_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Article_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Article_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Article_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type article_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_categories"]>

  export type article_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_categories"]>

  export type article_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_categories"]>

  export type article_categoriesSelectScalar = {
    article_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type article_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"article_id" | "category_id" | "created_at" | "updated_at", ExtArgs["result"]["article_categories"]>
  export type article_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type article_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type article_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $article_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article_categories"
    objects: {
      article: Prisma.$articlesPayload<ExtArgs>
      category: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      article_id: string
      category_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["article_categories"]>
    composites: {}
  }

  type article_categoriesGetPayload<S extends boolean | null | undefined | article_categoriesDefaultArgs> = $Result.GetResult<Prisma.$article_categoriesPayload, S>

  type article_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<article_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Article_categoriesCountAggregateInputType | true
    }

  export interface article_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article_categories'], meta: { name: 'article_categories' } }
    /**
     * Find zero or one Article_categories that matches the filter.
     * @param {article_categoriesFindUniqueArgs} args - Arguments to find a Article_categories
     * @example
     * // Get one Article_categories
     * const article_categories = await prisma.article_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends article_categoriesFindUniqueArgs>(args: SelectSubset<T, article_categoriesFindUniqueArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {article_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Article_categories
     * @example
     * // Get one Article_categories
     * const article_categories = await prisma.article_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends article_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, article_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesFindFirstArgs} args - Arguments to find a Article_categories
     * @example
     * // Get one Article_categories
     * const article_categories = await prisma.article_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends article_categoriesFindFirstArgs>(args?: SelectSubset<T, article_categoriesFindFirstArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesFindFirstOrThrowArgs} args - Arguments to find a Article_categories
     * @example
     * // Get one Article_categories
     * const article_categories = await prisma.article_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends article_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, article_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Article_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Article_categories
     * const article_categories = await prisma.article_categories.findMany()
     * 
     * // Get first 10 Article_categories
     * const article_categories = await prisma.article_categories.findMany({ take: 10 })
     * 
     * // Only select the `article_id`
     * const article_categoriesWithArticle_idOnly = await prisma.article_categories.findMany({ select: { article_id: true } })
     * 
     */
    findMany<T extends article_categoriesFindManyArgs>(args?: SelectSubset<T, article_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article_categories.
     * @param {article_categoriesCreateArgs} args - Arguments to create a Article_categories.
     * @example
     * // Create one Article_categories
     * const Article_categories = await prisma.article_categories.create({
     *   data: {
     *     // ... data to create a Article_categories
     *   }
     * })
     * 
     */
    create<T extends article_categoriesCreateArgs>(args: SelectSubset<T, article_categoriesCreateArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Article_categories.
     * @param {article_categoriesCreateManyArgs} args - Arguments to create many Article_categories.
     * @example
     * // Create many Article_categories
     * const article_categories = await prisma.article_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends article_categoriesCreateManyArgs>(args?: SelectSubset<T, article_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Article_categories and returns the data saved in the database.
     * @param {article_categoriesCreateManyAndReturnArgs} args - Arguments to create many Article_categories.
     * @example
     * // Create many Article_categories
     * const article_categories = await prisma.article_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Article_categories and only return the `article_id`
     * const article_categoriesWithArticle_idOnly = await prisma.article_categories.createManyAndReturn({
     *   select: { article_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends article_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, article_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article_categories.
     * @param {article_categoriesDeleteArgs} args - Arguments to delete one Article_categories.
     * @example
     * // Delete one Article_categories
     * const Article_categories = await prisma.article_categories.delete({
     *   where: {
     *     // ... filter to delete one Article_categories
     *   }
     * })
     * 
     */
    delete<T extends article_categoriesDeleteArgs>(args: SelectSubset<T, article_categoriesDeleteArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article_categories.
     * @param {article_categoriesUpdateArgs} args - Arguments to update one Article_categories.
     * @example
     * // Update one Article_categories
     * const article_categories = await prisma.article_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends article_categoriesUpdateArgs>(args: SelectSubset<T, article_categoriesUpdateArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Article_categories.
     * @param {article_categoriesDeleteManyArgs} args - Arguments to filter Article_categories to delete.
     * @example
     * // Delete a few Article_categories
     * const { count } = await prisma.article_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends article_categoriesDeleteManyArgs>(args?: SelectSubset<T, article_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Article_categories
     * const article_categories = await prisma.article_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends article_categoriesUpdateManyArgs>(args: SelectSubset<T, article_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_categories and returns the data updated in the database.
     * @param {article_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Article_categories.
     * @example
     * // Update many Article_categories
     * const article_categories = await prisma.article_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Article_categories and only return the `article_id`
     * const article_categoriesWithArticle_idOnly = await prisma.article_categories.updateManyAndReturn({
     *   select: { article_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends article_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, article_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article_categories.
     * @param {article_categoriesUpsertArgs} args - Arguments to update or create a Article_categories.
     * @example
     * // Update or create a Article_categories
     * const article_categories = await prisma.article_categories.upsert({
     *   create: {
     *     // ... data to create a Article_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article_categories we want to update
     *   }
     * })
     */
    upsert<T extends article_categoriesUpsertArgs>(args: SelectSubset<T, article_categoriesUpsertArgs<ExtArgs>>): Prisma__article_categoriesClient<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Article_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesCountArgs} args - Arguments to filter Article_categories to count.
     * @example
     * // Count the number of Article_categories
     * const count = await prisma.article_categories.count({
     *   where: {
     *     // ... the filter for the Article_categories we want to count
     *   }
     * })
    **/
    count<T extends article_categoriesCountArgs>(
      args?: Subset<T, article_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Article_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Article_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Article_categoriesAggregateArgs>(args: Subset<T, Article_categoriesAggregateArgs>): Prisma.PrismaPromise<GetArticle_categoriesAggregateType<T>>

    /**
     * Group by Article_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_categoriesGroupByArgs} args - Group by arguments.
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
      T extends article_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: article_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: article_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, article_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticle_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article_categories model
   */
  readonly fields: article_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__article_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the article_categories model
   */
  interface article_categoriesFieldRefs {
    readonly article_id: FieldRef<"article_categories", 'String'>
    readonly category_id: FieldRef<"article_categories", 'String'>
    readonly created_at: FieldRef<"article_categories", 'DateTime'>
    readonly updated_at: FieldRef<"article_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * article_categories findUnique
   */
  export type article_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which article_categories to fetch.
     */
    where: article_categoriesWhereUniqueInput
  }

  /**
   * article_categories findUniqueOrThrow
   */
  export type article_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which article_categories to fetch.
     */
    where: article_categoriesWhereUniqueInput
  }

  /**
   * article_categories findFirst
   */
  export type article_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which article_categories to fetch.
     */
    where?: article_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_categories to fetch.
     */
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_categories.
     */
    cursor?: article_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_categories.
     */
    distinct?: Article_categoriesScalarFieldEnum | Article_categoriesScalarFieldEnum[]
  }

  /**
   * article_categories findFirstOrThrow
   */
  export type article_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which article_categories to fetch.
     */
    where?: article_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_categories to fetch.
     */
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_categories.
     */
    cursor?: article_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_categories.
     */
    distinct?: Article_categoriesScalarFieldEnum | Article_categoriesScalarFieldEnum[]
  }

  /**
   * article_categories findMany
   */
  export type article_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which article_categories to fetch.
     */
    where?: article_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_categories to fetch.
     */
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing article_categories.
     */
    cursor?: article_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_categories.
     */
    skip?: number
    distinct?: Article_categoriesScalarFieldEnum | Article_categoriesScalarFieldEnum[]
  }

  /**
   * article_categories create
   */
  export type article_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a article_categories.
     */
    data: XOR<article_categoriesCreateInput, article_categoriesUncheckedCreateInput>
  }

  /**
   * article_categories createMany
   */
  export type article_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many article_categories.
     */
    data: article_categoriesCreateManyInput | article_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article_categories createManyAndReturn
   */
  export type article_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many article_categories.
     */
    data: article_categoriesCreateManyInput | article_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_categories update
   */
  export type article_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a article_categories.
     */
    data: XOR<article_categoriesUpdateInput, article_categoriesUncheckedUpdateInput>
    /**
     * Choose, which article_categories to update.
     */
    where: article_categoriesWhereUniqueInput
  }

  /**
   * article_categories updateMany
   */
  export type article_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update article_categories.
     */
    data: XOR<article_categoriesUpdateManyMutationInput, article_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which article_categories to update
     */
    where?: article_categoriesWhereInput
    /**
     * Limit how many article_categories to update.
     */
    limit?: number
  }

  /**
   * article_categories updateManyAndReturn
   */
  export type article_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update article_categories.
     */
    data: XOR<article_categoriesUpdateManyMutationInput, article_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which article_categories to update
     */
    where?: article_categoriesWhereInput
    /**
     * Limit how many article_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_categories upsert
   */
  export type article_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the article_categories to update in case it exists.
     */
    where: article_categoriesWhereUniqueInput
    /**
     * In case the article_categories found by the `where` argument doesn't exist, create a new article_categories with this data.
     */
    create: XOR<article_categoriesCreateInput, article_categoriesUncheckedCreateInput>
    /**
     * In case the article_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<article_categoriesUpdateInput, article_categoriesUncheckedUpdateInput>
  }

  /**
   * article_categories delete
   */
  export type article_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    /**
     * Filter which article_categories to delete.
     */
    where: article_categoriesWhereUniqueInput
  }

  /**
   * article_categories deleteMany
   */
  export type article_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_categories to delete
     */
    where?: article_categoriesWhereInput
    /**
     * Limit how many article_categories to delete.
     */
    limit?: number
  }

  /**
   * article_categories without action
   */
  export type article_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model article_tags
   */

  export type AggregateArticle_tags = {
    _count: Article_tagsCountAggregateOutputType | null
    _min: Article_tagsMinAggregateOutputType | null
    _max: Article_tagsMaxAggregateOutputType | null
  }

  export type Article_tagsMinAggregateOutputType = {
    article_id: string | null
    tag_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_tagsMaxAggregateOutputType = {
    article_id: string | null
    tag_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Article_tagsCountAggregateOutputType = {
    article_id: number
    tag_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Article_tagsMinAggregateInputType = {
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_tagsMaxAggregateInputType = {
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Article_tagsCountAggregateInputType = {
    article_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Article_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_tags to aggregate.
     */
    where?: article_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: article_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned article_tags
    **/
    _count?: true | Article_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Article_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Article_tagsMaxAggregateInputType
  }

  export type GetArticle_tagsAggregateType<T extends Article_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle_tags[P]>
      : GetScalarType<T[P], AggregateArticle_tags[P]>
  }




  export type article_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_tagsWhereInput
    orderBy?: article_tagsOrderByWithAggregationInput | article_tagsOrderByWithAggregationInput[]
    by: Article_tagsScalarFieldEnum[] | Article_tagsScalarFieldEnum
    having?: article_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Article_tagsCountAggregateInputType | true
    _min?: Article_tagsMinAggregateInputType
    _max?: Article_tagsMaxAggregateInputType
  }

  export type Article_tagsGroupByOutputType = {
    article_id: string
    tag_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: Article_tagsCountAggregateOutputType | null
    _min: Article_tagsMinAggregateOutputType | null
    _max: Article_tagsMaxAggregateOutputType | null
  }

  type GetArticle_tagsGroupByPayload<T extends article_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Article_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Article_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Article_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Article_tagsGroupByOutputType[P]>
        }
      >
    >


  export type article_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_tags"]>

  export type article_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_tags"]>

  export type article_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_tags"]>

  export type article_tagsSelectScalar = {
    article_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type article_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"article_id" | "tag_id" | "created_at" | "updated_at", ExtArgs["result"]["article_tags"]>
  export type article_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type article_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type article_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articlesDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $article_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article_tags"
    objects: {
      article: Prisma.$articlesPayload<ExtArgs>
      tag: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      article_id: string
      tag_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["article_tags"]>
    composites: {}
  }

  type article_tagsGetPayload<S extends boolean | null | undefined | article_tagsDefaultArgs> = $Result.GetResult<Prisma.$article_tagsPayload, S>

  type article_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<article_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Article_tagsCountAggregateInputType | true
    }

  export interface article_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article_tags'], meta: { name: 'article_tags' } }
    /**
     * Find zero or one Article_tags that matches the filter.
     * @param {article_tagsFindUniqueArgs} args - Arguments to find a Article_tags
     * @example
     * // Get one Article_tags
     * const article_tags = await prisma.article_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends article_tagsFindUniqueArgs>(args: SelectSubset<T, article_tagsFindUniqueArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {article_tagsFindUniqueOrThrowArgs} args - Arguments to find a Article_tags
     * @example
     * // Get one Article_tags
     * const article_tags = await prisma.article_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends article_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, article_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsFindFirstArgs} args - Arguments to find a Article_tags
     * @example
     * // Get one Article_tags
     * const article_tags = await prisma.article_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends article_tagsFindFirstArgs>(args?: SelectSubset<T, article_tagsFindFirstArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsFindFirstOrThrowArgs} args - Arguments to find a Article_tags
     * @example
     * // Get one Article_tags
     * const article_tags = await prisma.article_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends article_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, article_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Article_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Article_tags
     * const article_tags = await prisma.article_tags.findMany()
     * 
     * // Get first 10 Article_tags
     * const article_tags = await prisma.article_tags.findMany({ take: 10 })
     * 
     * // Only select the `article_id`
     * const article_tagsWithArticle_idOnly = await prisma.article_tags.findMany({ select: { article_id: true } })
     * 
     */
    findMany<T extends article_tagsFindManyArgs>(args?: SelectSubset<T, article_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article_tags.
     * @param {article_tagsCreateArgs} args - Arguments to create a Article_tags.
     * @example
     * // Create one Article_tags
     * const Article_tags = await prisma.article_tags.create({
     *   data: {
     *     // ... data to create a Article_tags
     *   }
     * })
     * 
     */
    create<T extends article_tagsCreateArgs>(args: SelectSubset<T, article_tagsCreateArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Article_tags.
     * @param {article_tagsCreateManyArgs} args - Arguments to create many Article_tags.
     * @example
     * // Create many Article_tags
     * const article_tags = await prisma.article_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends article_tagsCreateManyArgs>(args?: SelectSubset<T, article_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Article_tags and returns the data saved in the database.
     * @param {article_tagsCreateManyAndReturnArgs} args - Arguments to create many Article_tags.
     * @example
     * // Create many Article_tags
     * const article_tags = await prisma.article_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Article_tags and only return the `article_id`
     * const article_tagsWithArticle_idOnly = await prisma.article_tags.createManyAndReturn({
     *   select: { article_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends article_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, article_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article_tags.
     * @param {article_tagsDeleteArgs} args - Arguments to delete one Article_tags.
     * @example
     * // Delete one Article_tags
     * const Article_tags = await prisma.article_tags.delete({
     *   where: {
     *     // ... filter to delete one Article_tags
     *   }
     * })
     * 
     */
    delete<T extends article_tagsDeleteArgs>(args: SelectSubset<T, article_tagsDeleteArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article_tags.
     * @param {article_tagsUpdateArgs} args - Arguments to update one Article_tags.
     * @example
     * // Update one Article_tags
     * const article_tags = await prisma.article_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends article_tagsUpdateArgs>(args: SelectSubset<T, article_tagsUpdateArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Article_tags.
     * @param {article_tagsDeleteManyArgs} args - Arguments to filter Article_tags to delete.
     * @example
     * // Delete a few Article_tags
     * const { count } = await prisma.article_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends article_tagsDeleteManyArgs>(args?: SelectSubset<T, article_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Article_tags
     * const article_tags = await prisma.article_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends article_tagsUpdateManyArgs>(args: SelectSubset<T, article_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_tags and returns the data updated in the database.
     * @param {article_tagsUpdateManyAndReturnArgs} args - Arguments to update many Article_tags.
     * @example
     * // Update many Article_tags
     * const article_tags = await prisma.article_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Article_tags and only return the `article_id`
     * const article_tagsWithArticle_idOnly = await prisma.article_tags.updateManyAndReturn({
     *   select: { article_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends article_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, article_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article_tags.
     * @param {article_tagsUpsertArgs} args - Arguments to update or create a Article_tags.
     * @example
     * // Update or create a Article_tags
     * const article_tags = await prisma.article_tags.upsert({
     *   create: {
     *     // ... data to create a Article_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article_tags we want to update
     *   }
     * })
     */
    upsert<T extends article_tagsUpsertArgs>(args: SelectSubset<T, article_tagsUpsertArgs<ExtArgs>>): Prisma__article_tagsClient<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsCountArgs} args - Arguments to filter Article_tags to count.
     * @example
     * // Count the number of Article_tags
     * const count = await prisma.article_tags.count({
     *   where: {
     *     // ... the filter for the Article_tags we want to count
     *   }
     * })
    **/
    count<T extends article_tagsCountArgs>(
      args?: Subset<T, article_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Article_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Article_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Article_tagsAggregateArgs>(args: Subset<T, Article_tagsAggregateArgs>): Prisma.PrismaPromise<GetArticle_tagsAggregateType<T>>

    /**
     * Group by Article_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_tagsGroupByArgs} args - Group by arguments.
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
      T extends article_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: article_tagsGroupByArgs['orderBy'] }
        : { orderBy?: article_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, article_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticle_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article_tags model
   */
  readonly fields: article_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__article_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articlesDefaultArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the article_tags model
   */
  interface article_tagsFieldRefs {
    readonly article_id: FieldRef<"article_tags", 'String'>
    readonly tag_id: FieldRef<"article_tags", 'String'>
    readonly created_at: FieldRef<"article_tags", 'DateTime'>
    readonly updated_at: FieldRef<"article_tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * article_tags findUnique
   */
  export type article_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where: article_tagsWhereUniqueInput
  }

  /**
   * article_tags findUniqueOrThrow
   */
  export type article_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where: article_tagsWhereUniqueInput
  }

  /**
   * article_tags findFirst
   */
  export type article_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where?: article_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_tags.
     */
    cursor?: article_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_tags.
     */
    distinct?: Article_tagsScalarFieldEnum | Article_tagsScalarFieldEnum[]
  }

  /**
   * article_tags findFirstOrThrow
   */
  export type article_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where?: article_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_tags.
     */
    cursor?: article_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_tags.
     */
    distinct?: Article_tagsScalarFieldEnum | Article_tagsScalarFieldEnum[]
  }

  /**
   * article_tags findMany
   */
  export type article_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter, which article_tags to fetch.
     */
    where?: article_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_tags to fetch.
     */
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing article_tags.
     */
    cursor?: article_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_tags.
     */
    skip?: number
    distinct?: Article_tagsScalarFieldEnum | Article_tagsScalarFieldEnum[]
  }

  /**
   * article_tags create
   */
  export type article_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a article_tags.
     */
    data: XOR<article_tagsCreateInput, article_tagsUncheckedCreateInput>
  }

  /**
   * article_tags createMany
   */
  export type article_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many article_tags.
     */
    data: article_tagsCreateManyInput | article_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article_tags createManyAndReturn
   */
  export type article_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many article_tags.
     */
    data: article_tagsCreateManyInput | article_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_tags update
   */
  export type article_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a article_tags.
     */
    data: XOR<article_tagsUpdateInput, article_tagsUncheckedUpdateInput>
    /**
     * Choose, which article_tags to update.
     */
    where: article_tagsWhereUniqueInput
  }

  /**
   * article_tags updateMany
   */
  export type article_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update article_tags.
     */
    data: XOR<article_tagsUpdateManyMutationInput, article_tagsUncheckedUpdateManyInput>
    /**
     * Filter which article_tags to update
     */
    where?: article_tagsWhereInput
    /**
     * Limit how many article_tags to update.
     */
    limit?: number
  }

  /**
   * article_tags updateManyAndReturn
   */
  export type article_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * The data used to update article_tags.
     */
    data: XOR<article_tagsUpdateManyMutationInput, article_tagsUncheckedUpdateManyInput>
    /**
     * Filter which article_tags to update
     */
    where?: article_tagsWhereInput
    /**
     * Limit how many article_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_tags upsert
   */
  export type article_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the article_tags to update in case it exists.
     */
    where: article_tagsWhereUniqueInput
    /**
     * In case the article_tags found by the `where` argument doesn't exist, create a new article_tags with this data.
     */
    create: XOR<article_tagsCreateInput, article_tagsUncheckedCreateInput>
    /**
     * In case the article_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<article_tagsUpdateInput, article_tagsUncheckedUpdateInput>
  }

  /**
   * article_tags delete
   */
  export type article_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    /**
     * Filter which article_tags to delete.
     */
    where: article_tagsWhereUniqueInput
  }

  /**
   * article_tags deleteMany
   */
  export type article_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_tags to delete
     */
    where?: article_tagsWhereInput
    /**
     * Limit how many article_tags to delete.
     */
    limit?: number
  }

  /**
   * article_tags without action
   */
  export type article_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
  }


  /**
   * Model articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    author_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    author_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    author_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type articlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithAggregationInput | articlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: string
    title: string
    content: string | null
    author_id: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ArticlesCountAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends articlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    article_categories?: boolean | articles$article_categoriesArgs<ExtArgs>
    article_tags?: boolean | articles$article_tagsArgs<ExtArgs>
    author?: boolean | articles$authorArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type articlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | articles$authorArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type articlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | articles$authorArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type articlesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type articlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "author_id" | "created_at" | "updated_at", ExtArgs["result"]["articles"]>
  export type articlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_categories?: boolean | articles$article_categoriesArgs<ExtArgs>
    article_tags?: boolean | articles$article_tagsArgs<ExtArgs>
    author?: boolean | articles$authorArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type articlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | articles$authorArgs<ExtArgs>
  }
  export type articlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | articles$authorArgs<ExtArgs>
  }

  export type $articlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articles"
    objects: {
      article_categories: Prisma.$article_categoriesPayload<ExtArgs>[]
      article_tags: Prisma.$article_tagsPayload<ExtArgs>[]
      author: Prisma.$psychologistsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string | null
      author_id: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type articlesGetPayload<S extends boolean | null | undefined | articlesDefaultArgs> = $Result.GetResult<Prisma.$articlesPayload, S>

  type articlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articles'], meta: { name: 'articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articlesFindUniqueArgs>(args: SelectSubset<T, articlesFindUniqueArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs>(args: SelectSubset<T, articlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articlesFindFirstArgs>(args?: SelectSubset<T, articlesFindFirstArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs>(args?: SelectSubset<T, articlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articlesFindManyArgs>(args?: SelectSubset<T, articlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends articlesCreateArgs>(args: SelectSubset<T, articlesCreateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articlesCreateManyArgs>(args?: SelectSubset<T, articlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {articlesCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articlesCreateManyAndReturnArgs>(args?: SelectSubset<T, articlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends articlesDeleteArgs>(args: SelectSubset<T, articlesDeleteArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articlesUpdateArgs>(args: SelectSubset<T, articlesUpdateArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articlesDeleteManyArgs>(args?: SelectSubset<T, articlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articlesUpdateManyArgs>(args: SelectSubset<T, articlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {articlesUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends articlesUpdateManyAndReturnArgs>(args: SelectSubset<T, articlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends articlesUpsertArgs>(args: SelectSubset<T, articlesUpsertArgs<ExtArgs>>): Prisma__articlesClient<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesGroupByArgs} args - Group by arguments.
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
      T extends articlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articlesGroupByArgs['orderBy'] }
        : { orderBy?: articlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articles model
   */
  readonly fields: articlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_categories<T extends articles$article_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, articles$article_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    article_tags<T extends articles$article_tagsArgs<ExtArgs> = {}>(args?: Subset<T, articles$article_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends articles$authorArgs<ExtArgs> = {}>(args?: Subset<T, articles$authorArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the articles model
   */
  interface articlesFieldRefs {
    readonly id: FieldRef<"articles", 'String'>
    readonly title: FieldRef<"articles", 'String'>
    readonly content: FieldRef<"articles", 'String'>
    readonly author_id: FieldRef<"articles", 'String'>
    readonly created_at: FieldRef<"articles", 'DateTime'>
    readonly updated_at: FieldRef<"articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * articles findUnique
   */
  export type articlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findFirst
   */
  export type articlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles findMany
   */
  export type articlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * articles create
   */
  export type articlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to create a articles.
     */
    data: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }

  /**
   * articles createMany
   */
  export type articlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articles createManyAndReturn
   */
  export type articlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * The data used to create many articles.
     */
    data: articlesCreateManyInput | articlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * articles update
   */
  export type articlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * articles updateManyAndReturn
   */
  export type articlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * articles upsert
   */
  export type articlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }

  /**
   * articles delete
   */
  export type articlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * articles.article_categories
   */
  export type articles$article_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    where?: article_categoriesWhereInput
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    cursor?: article_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_categoriesScalarFieldEnum | Article_categoriesScalarFieldEnum[]
  }

  /**
   * articles.article_tags
   */
  export type articles$article_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    where?: article_tagsWhereInput
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    cursor?: article_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_tagsScalarFieldEnum | Article_tagsScalarFieldEnum[]
  }

  /**
   * articles.author
   */
  export type articles$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    where?: psychologistsWhereInput
  }

  /**
   * articles without action
   */
  export type articlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    label: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    label: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    label: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    label: string
    created_at: Date | null
    updated_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
    article_categories?: boolean | categories$article_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_categories?: boolean | categories$article_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      article_categories: Prisma.$article_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_categories<T extends categories$article_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$article_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'String'>
    readonly label: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.article_categories
   */
  export type categories$article_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_categories
     */
    select?: article_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_categories
     */
    omit?: article_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_categoriesInclude<ExtArgs> | null
    where?: article_categoriesWhereInput
    orderBy?: article_categoriesOrderByWithRelationInput | article_categoriesOrderByWithRelationInput[]
    cursor?: article_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_categoriesScalarFieldEnum | Article_categoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model psychologists
   */

  export type AggregatePsychologists = {
    _count: PsychologistsCountAggregateOutputType | null
    _min: PsychologistsMinAggregateOutputType | null
    _max: PsychologistsMaxAggregateOutputType | null
  }

  export type PsychologistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PsychologistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PsychologistsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PsychologistsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type PsychologistsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type PsychologistsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PsychologistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which psychologists to aggregate.
     */
    where?: psychologistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psychologists to fetch.
     */
    orderBy?: psychologistsOrderByWithRelationInput | psychologistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: psychologistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned psychologists
    **/
    _count?: true | PsychologistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PsychologistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PsychologistsMaxAggregateInputType
  }

  export type GetPsychologistsAggregateType<T extends PsychologistsAggregateArgs> = {
        [P in keyof T & keyof AggregatePsychologists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePsychologists[P]>
      : GetScalarType<T[P], AggregatePsychologists[P]>
  }




  export type psychologistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: psychologistsWhereInput
    orderBy?: psychologistsOrderByWithAggregationInput | psychologistsOrderByWithAggregationInput[]
    by: PsychologistsScalarFieldEnum[] | PsychologistsScalarFieldEnum
    having?: psychologistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PsychologistsCountAggregateInputType | true
    _min?: PsychologistsMinAggregateInputType
    _max?: PsychologistsMaxAggregateInputType
  }

  export type PsychologistsGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PsychologistsCountAggregateOutputType | null
    _min: PsychologistsMinAggregateOutputType | null
    _max: PsychologistsMaxAggregateOutputType | null
  }

  type GetPsychologistsGroupByPayload<T extends psychologistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PsychologistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PsychologistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PsychologistsGroupByOutputType[P]>
            : GetScalarType<T[P], PsychologistsGroupByOutputType[P]>
        }
      >
    >


  export type psychologistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    articles?: boolean | psychologists$articlesArgs<ExtArgs>
    _count?: boolean | PsychologistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psychologists"]>

  export type psychologistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["psychologists"]>

  export type psychologistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["psychologists"]>

  export type psychologistsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type psychologistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "created_at" | "updated_at", ExtArgs["result"]["psychologists"]>
  export type psychologistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | psychologists$articlesArgs<ExtArgs>
    _count?: boolean | PsychologistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type psychologistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type psychologistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $psychologistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "psychologists"
    objects: {
      articles: Prisma.$articlesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["psychologists"]>
    composites: {}
  }

  type psychologistsGetPayload<S extends boolean | null | undefined | psychologistsDefaultArgs> = $Result.GetResult<Prisma.$psychologistsPayload, S>

  type psychologistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<psychologistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PsychologistsCountAggregateInputType | true
    }

  export interface psychologistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['psychologists'], meta: { name: 'psychologists' } }
    /**
     * Find zero or one Psychologists that matches the filter.
     * @param {psychologistsFindUniqueArgs} args - Arguments to find a Psychologists
     * @example
     * // Get one Psychologists
     * const psychologists = await prisma.psychologists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends psychologistsFindUniqueArgs>(args: SelectSubset<T, psychologistsFindUniqueArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Psychologists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {psychologistsFindUniqueOrThrowArgs} args - Arguments to find a Psychologists
     * @example
     * // Get one Psychologists
     * const psychologists = await prisma.psychologists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends psychologistsFindUniqueOrThrowArgs>(args: SelectSubset<T, psychologistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psychologists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsFindFirstArgs} args - Arguments to find a Psychologists
     * @example
     * // Get one Psychologists
     * const psychologists = await prisma.psychologists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends psychologistsFindFirstArgs>(args?: SelectSubset<T, psychologistsFindFirstArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psychologists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsFindFirstOrThrowArgs} args - Arguments to find a Psychologists
     * @example
     * // Get one Psychologists
     * const psychologists = await prisma.psychologists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends psychologistsFindFirstOrThrowArgs>(args?: SelectSubset<T, psychologistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Psychologists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Psychologists
     * const psychologists = await prisma.psychologists.findMany()
     * 
     * // Get first 10 Psychologists
     * const psychologists = await prisma.psychologists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const psychologistsWithIdOnly = await prisma.psychologists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends psychologistsFindManyArgs>(args?: SelectSubset<T, psychologistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Psychologists.
     * @param {psychologistsCreateArgs} args - Arguments to create a Psychologists.
     * @example
     * // Create one Psychologists
     * const Psychologists = await prisma.psychologists.create({
     *   data: {
     *     // ... data to create a Psychologists
     *   }
     * })
     * 
     */
    create<T extends psychologistsCreateArgs>(args: SelectSubset<T, psychologistsCreateArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Psychologists.
     * @param {psychologistsCreateManyArgs} args - Arguments to create many Psychologists.
     * @example
     * // Create many Psychologists
     * const psychologists = await prisma.psychologists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends psychologistsCreateManyArgs>(args?: SelectSubset<T, psychologistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Psychologists and returns the data saved in the database.
     * @param {psychologistsCreateManyAndReturnArgs} args - Arguments to create many Psychologists.
     * @example
     * // Create many Psychologists
     * const psychologists = await prisma.psychologists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Psychologists and only return the `id`
     * const psychologistsWithIdOnly = await prisma.psychologists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends psychologistsCreateManyAndReturnArgs>(args?: SelectSubset<T, psychologistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Psychologists.
     * @param {psychologistsDeleteArgs} args - Arguments to delete one Psychologists.
     * @example
     * // Delete one Psychologists
     * const Psychologists = await prisma.psychologists.delete({
     *   where: {
     *     // ... filter to delete one Psychologists
     *   }
     * })
     * 
     */
    delete<T extends psychologistsDeleteArgs>(args: SelectSubset<T, psychologistsDeleteArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Psychologists.
     * @param {psychologistsUpdateArgs} args - Arguments to update one Psychologists.
     * @example
     * // Update one Psychologists
     * const psychologists = await prisma.psychologists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends psychologistsUpdateArgs>(args: SelectSubset<T, psychologistsUpdateArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Psychologists.
     * @param {psychologistsDeleteManyArgs} args - Arguments to filter Psychologists to delete.
     * @example
     * // Delete a few Psychologists
     * const { count } = await prisma.psychologists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends psychologistsDeleteManyArgs>(args?: SelectSubset<T, psychologistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Psychologists
     * const psychologists = await prisma.psychologists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends psychologistsUpdateManyArgs>(args: SelectSubset<T, psychologistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psychologists and returns the data updated in the database.
     * @param {psychologistsUpdateManyAndReturnArgs} args - Arguments to update many Psychologists.
     * @example
     * // Update many Psychologists
     * const psychologists = await prisma.psychologists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Psychologists and only return the `id`
     * const psychologistsWithIdOnly = await prisma.psychologists.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends psychologistsUpdateManyAndReturnArgs>(args: SelectSubset<T, psychologistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Psychologists.
     * @param {psychologistsUpsertArgs} args - Arguments to update or create a Psychologists.
     * @example
     * // Update or create a Psychologists
     * const psychologists = await prisma.psychologists.upsert({
     *   create: {
     *     // ... data to create a Psychologists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Psychologists we want to update
     *   }
     * })
     */
    upsert<T extends psychologistsUpsertArgs>(args: SelectSubset<T, psychologistsUpsertArgs<ExtArgs>>): Prisma__psychologistsClient<$Result.GetResult<Prisma.$psychologistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsCountArgs} args - Arguments to filter Psychologists to count.
     * @example
     * // Count the number of Psychologists
     * const count = await prisma.psychologists.count({
     *   where: {
     *     // ... the filter for the Psychologists we want to count
     *   }
     * })
    **/
    count<T extends psychologistsCountArgs>(
      args?: Subset<T, psychologistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PsychologistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsychologistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PsychologistsAggregateArgs>(args: Subset<T, PsychologistsAggregateArgs>): Prisma.PrismaPromise<GetPsychologistsAggregateType<T>>

    /**
     * Group by Psychologists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psychologistsGroupByArgs} args - Group by arguments.
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
      T extends psychologistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: psychologistsGroupByArgs['orderBy'] }
        : { orderBy?: psychologistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, psychologistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPsychologistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the psychologists model
   */
  readonly fields: psychologistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for psychologists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__psychologistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends psychologists$articlesArgs<ExtArgs> = {}>(args?: Subset<T, psychologists$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the psychologists model
   */
  interface psychologistsFieldRefs {
    readonly id: FieldRef<"psychologists", 'String'>
    readonly name: FieldRef<"psychologists", 'String'>
    readonly email: FieldRef<"psychologists", 'String'>
    readonly phone: FieldRef<"psychologists", 'String'>
    readonly created_at: FieldRef<"psychologists", 'DateTime'>
    readonly updated_at: FieldRef<"psychologists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * psychologists findUnique
   */
  export type psychologistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter, which psychologists to fetch.
     */
    where: psychologistsWhereUniqueInput
  }

  /**
   * psychologists findUniqueOrThrow
   */
  export type psychologistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter, which psychologists to fetch.
     */
    where: psychologistsWhereUniqueInput
  }

  /**
   * psychologists findFirst
   */
  export type psychologistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter, which psychologists to fetch.
     */
    where?: psychologistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psychologists to fetch.
     */
    orderBy?: psychologistsOrderByWithRelationInput | psychologistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for psychologists.
     */
    cursor?: psychologistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of psychologists.
     */
    distinct?: PsychologistsScalarFieldEnum | PsychologistsScalarFieldEnum[]
  }

  /**
   * psychologists findFirstOrThrow
   */
  export type psychologistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter, which psychologists to fetch.
     */
    where?: psychologistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psychologists to fetch.
     */
    orderBy?: psychologistsOrderByWithRelationInput | psychologistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for psychologists.
     */
    cursor?: psychologistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psychologists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of psychologists.
     */
    distinct?: PsychologistsScalarFieldEnum | PsychologistsScalarFieldEnum[]
  }

  /**
   * psychologists findMany
   */
  export type psychologistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter, which psychologists to fetch.
     */
    where?: psychologistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psychologists to fetch.
     */
    orderBy?: psychologistsOrderByWithRelationInput | psychologistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing psychologists.
     */
    cursor?: psychologistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psychologists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psychologists.
     */
    skip?: number
    distinct?: PsychologistsScalarFieldEnum | PsychologistsScalarFieldEnum[]
  }

  /**
   * psychologists create
   */
  export type psychologistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * The data needed to create a psychologists.
     */
    data: XOR<psychologistsCreateInput, psychologistsUncheckedCreateInput>
  }

  /**
   * psychologists createMany
   */
  export type psychologistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many psychologists.
     */
    data: psychologistsCreateManyInput | psychologistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * psychologists createManyAndReturn
   */
  export type psychologistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * The data used to create many psychologists.
     */
    data: psychologistsCreateManyInput | psychologistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * psychologists update
   */
  export type psychologistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * The data needed to update a psychologists.
     */
    data: XOR<psychologistsUpdateInput, psychologistsUncheckedUpdateInput>
    /**
     * Choose, which psychologists to update.
     */
    where: psychologistsWhereUniqueInput
  }

  /**
   * psychologists updateMany
   */
  export type psychologistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update psychologists.
     */
    data: XOR<psychologistsUpdateManyMutationInput, psychologistsUncheckedUpdateManyInput>
    /**
     * Filter which psychologists to update
     */
    where?: psychologistsWhereInput
    /**
     * Limit how many psychologists to update.
     */
    limit?: number
  }

  /**
   * psychologists updateManyAndReturn
   */
  export type psychologistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * The data used to update psychologists.
     */
    data: XOR<psychologistsUpdateManyMutationInput, psychologistsUncheckedUpdateManyInput>
    /**
     * Filter which psychologists to update
     */
    where?: psychologistsWhereInput
    /**
     * Limit how many psychologists to update.
     */
    limit?: number
  }

  /**
   * psychologists upsert
   */
  export type psychologistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * The filter to search for the psychologists to update in case it exists.
     */
    where: psychologistsWhereUniqueInput
    /**
     * In case the psychologists found by the `where` argument doesn't exist, create a new psychologists with this data.
     */
    create: XOR<psychologistsCreateInput, psychologistsUncheckedCreateInput>
    /**
     * In case the psychologists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<psychologistsUpdateInput, psychologistsUncheckedUpdateInput>
  }

  /**
   * psychologists delete
   */
  export type psychologistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
    /**
     * Filter which psychologists to delete.
     */
    where: psychologistsWhereUniqueInput
  }

  /**
   * psychologists deleteMany
   */
  export type psychologistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which psychologists to delete
     */
    where?: psychologistsWhereInput
    /**
     * Limit how many psychologists to delete.
     */
    limit?: number
  }

  /**
   * psychologists.articles
   */
  export type psychologists$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articles
     */
    omit?: articlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articlesInclude<ExtArgs> | null
    where?: articlesWhereInput
    orderBy?: articlesOrderByWithRelationInput | articlesOrderByWithRelationInput[]
    cursor?: articlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * psychologists without action
   */
  export type psychologistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psychologists
     */
    select?: psychologistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psychologists
     */
    omit?: psychologistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psychologistsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    label: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    label: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    label: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    label?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    label: string
    created_at: Date | null
    updated_at: Date | null
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
    article_tags?: boolean | tags$article_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    label?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "created_at" | "updated_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_tags?: boolean | tags$article_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      article_tags: Prisma.$article_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_tags<T extends tags$article_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$article_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'String'>
    readonly label: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
    readonly updated_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.article_tags
   */
  export type tags$article_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_tags
     */
    select?: article_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_tags
     */
    omit?: article_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_tagsInclude<ExtArgs> | null
    where?: article_tagsWhereInput
    orderBy?: article_tagsOrderByWithRelationInput | article_tagsOrderByWithRelationInput[]
    cursor?: article_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_tagsScalarFieldEnum | Article_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
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


  export const Article_categoriesScalarFieldEnum: {
    article_id: 'article_id',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Article_categoriesScalarFieldEnum = (typeof Article_categoriesScalarFieldEnum)[keyof typeof Article_categoriesScalarFieldEnum]


  export const Article_tagsScalarFieldEnum: {
    article_id: 'article_id',
    tag_id: 'tag_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Article_tagsScalarFieldEnum = (typeof Article_tagsScalarFieldEnum)[keyof typeof Article_tagsScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    author_id: 'author_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    label: 'label',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const PsychologistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PsychologistsScalarFieldEnum = (typeof PsychologistsScalarFieldEnum)[keyof typeof PsychologistsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    label: 'label',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type article_categoriesWhereInput = {
    AND?: article_categoriesWhereInput | article_categoriesWhereInput[]
    OR?: article_categoriesWhereInput[]
    NOT?: article_categoriesWhereInput | article_categoriesWhereInput[]
    article_id?: UuidFilter<"article_categories"> | string
    category_id?: UuidFilter<"article_categories"> | string
    created_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type article_categoriesOrderByWithRelationInput = {
    article_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article?: articlesOrderByWithRelationInput
    category?: categoriesOrderByWithRelationInput
  }

  export type article_categoriesWhereUniqueInput = Prisma.AtLeast<{
    article_id_category_id?: article_categoriesArticle_idCategory_idCompoundUniqueInput
    AND?: article_categoriesWhereInput | article_categoriesWhereInput[]
    OR?: article_categoriesWhereInput[]
    NOT?: article_categoriesWhereInput | article_categoriesWhereInput[]
    article_id?: UuidFilter<"article_categories"> | string
    category_id?: UuidFilter<"article_categories"> | string
    created_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "article_id_category_id">

  export type article_categoriesOrderByWithAggregationInput = {
    article_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: article_categoriesCountOrderByAggregateInput
    _max?: article_categoriesMaxOrderByAggregateInput
    _min?: article_categoriesMinOrderByAggregateInput
  }

  export type article_categoriesScalarWhereWithAggregatesInput = {
    AND?: article_categoriesScalarWhereWithAggregatesInput | article_categoriesScalarWhereWithAggregatesInput[]
    OR?: article_categoriesScalarWhereWithAggregatesInput[]
    NOT?: article_categoriesScalarWhereWithAggregatesInput | article_categoriesScalarWhereWithAggregatesInput[]
    article_id?: UuidWithAggregatesFilter<"article_categories"> | string
    category_id?: UuidWithAggregatesFilter<"article_categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"article_categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"article_categories"> | Date | string | null
  }

  export type article_tagsWhereInput = {
    AND?: article_tagsWhereInput | article_tagsWhereInput[]
    OR?: article_tagsWhereInput[]
    NOT?: article_tagsWhereInput | article_tagsWhereInput[]
    article_id?: UuidFilter<"article_tags"> | string
    tag_id?: UuidFilter<"article_tags"> | string
    created_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type article_tagsOrderByWithRelationInput = {
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article?: articlesOrderByWithRelationInput
    tag?: tagsOrderByWithRelationInput
  }

  export type article_tagsWhereUniqueInput = Prisma.AtLeast<{
    article_id_tag_id?: article_tagsArticle_idTag_idCompoundUniqueInput
    AND?: article_tagsWhereInput | article_tagsWhereInput[]
    OR?: article_tagsWhereInput[]
    NOT?: article_tagsWhereInput | article_tagsWhereInput[]
    article_id?: UuidFilter<"article_tags"> | string
    tag_id?: UuidFilter<"article_tags"> | string
    created_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
    article?: XOR<ArticlesScalarRelationFilter, articlesWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "article_id_tag_id">

  export type article_tagsOrderByWithAggregationInput = {
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: article_tagsCountOrderByAggregateInput
    _max?: article_tagsMaxOrderByAggregateInput
    _min?: article_tagsMinOrderByAggregateInput
  }

  export type article_tagsScalarWhereWithAggregatesInput = {
    AND?: article_tagsScalarWhereWithAggregatesInput | article_tagsScalarWhereWithAggregatesInput[]
    OR?: article_tagsScalarWhereWithAggregatesInput[]
    NOT?: article_tagsScalarWhereWithAggregatesInput | article_tagsScalarWhereWithAggregatesInput[]
    article_id?: UuidWithAggregatesFilter<"article_tags"> | string
    tag_id?: UuidWithAggregatesFilter<"article_tags"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"article_tags"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"article_tags"> | Date | string | null
  }

  export type articlesWhereInput = {
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    id?: UuidFilter<"articles"> | string
    title?: StringFilter<"articles"> | string
    content?: StringNullableFilter<"articles"> | string | null
    author_id?: UuidNullableFilter<"articles"> | string | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    article_categories?: Article_categoriesListRelationFilter
    article_tags?: Article_tagsListRelationFilter
    author?: XOR<PsychologistsNullableScalarRelationFilter, psychologistsWhereInput> | null
  }

  export type articlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article_categories?: article_categoriesOrderByRelationAggregateInput
    article_tags?: article_tagsOrderByRelationAggregateInput
    author?: psychologistsOrderByWithRelationInput
  }

  export type articlesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: articlesWhereInput | articlesWhereInput[]
    OR?: articlesWhereInput[]
    NOT?: articlesWhereInput | articlesWhereInput[]
    title?: StringFilter<"articles"> | string
    content?: StringNullableFilter<"articles"> | string | null
    author_id?: UuidNullableFilter<"articles"> | string | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    article_categories?: Article_categoriesListRelationFilter
    article_tags?: Article_tagsListRelationFilter
    author?: XOR<PsychologistsNullableScalarRelationFilter, psychologistsWhereInput> | null
  }, "id">

  export type articlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: articlesCountOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    OR?: articlesScalarWhereWithAggregatesInput[]
    NOT?: articlesScalarWhereWithAggregatesInput | articlesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"articles"> | string
    title?: StringWithAggregatesFilter<"articles"> | string
    content?: StringNullableWithAggregatesFilter<"articles"> | string | null
    author_id?: UuidNullableWithAggregatesFilter<"articles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"articles"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: UuidFilter<"categories"> | string
    label?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    article_categories?: Article_categoriesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article_categories?: article_categoriesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    label?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    article_categories?: Article_categoriesListRelationFilter
  }, "id" | "label">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"categories"> | string
    label?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type psychologistsWhereInput = {
    AND?: psychologistsWhereInput | psychologistsWhereInput[]
    OR?: psychologistsWhereInput[]
    NOT?: psychologistsWhereInput | psychologistsWhereInput[]
    id?: UuidFilter<"psychologists"> | string
    name?: StringFilter<"psychologists"> | string
    email?: StringFilter<"psychologists"> | string
    phone?: StringNullableFilter<"psychologists"> | string | null
    created_at?: DateTimeNullableFilter<"psychologists"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"psychologists"> | Date | string | null
    articles?: ArticlesListRelationFilter
  }

  export type psychologistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    articles?: articlesOrderByRelationAggregateInput
  }

  export type psychologistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: psychologistsWhereInput | psychologistsWhereInput[]
    OR?: psychologistsWhereInput[]
    NOT?: psychologistsWhereInput | psychologistsWhereInput[]
    name?: StringFilter<"psychologists"> | string
    phone?: StringNullableFilter<"psychologists"> | string | null
    created_at?: DateTimeNullableFilter<"psychologists"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"psychologists"> | Date | string | null
    articles?: ArticlesListRelationFilter
  }, "id" | "email">

  export type psychologistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: psychologistsCountOrderByAggregateInput
    _max?: psychologistsMaxOrderByAggregateInput
    _min?: psychologistsMinOrderByAggregateInput
  }

  export type psychologistsScalarWhereWithAggregatesInput = {
    AND?: psychologistsScalarWhereWithAggregatesInput | psychologistsScalarWhereWithAggregatesInput[]
    OR?: psychologistsScalarWhereWithAggregatesInput[]
    NOT?: psychologistsScalarWhereWithAggregatesInput | psychologistsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"psychologists"> | string
    name?: StringWithAggregatesFilter<"psychologists"> | string
    email?: StringWithAggregatesFilter<"psychologists"> | string
    phone?: StringNullableWithAggregatesFilter<"psychologists"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"psychologists"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"psychologists"> | Date | string | null
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: UuidFilter<"tags"> | string
    label?: StringFilter<"tags"> | string
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    article_tags?: Article_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    article_tags?: article_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    label?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    article_tags?: Article_tagsListRelationFilter
  }, "id" | "label">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tags"> | string
    label?: StringWithAggregatesFilter<"tags"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
  }

  export type article_categoriesCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article: articlesCreateNestedOneWithoutArticle_categoriesInput
    category: categoriesCreateNestedOneWithoutArticle_categoriesInput
  }

  export type article_categoriesUncheckedCreateInput = {
    article_id: string
    category_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articlesUpdateOneRequiredWithoutArticle_categoriesNestedInput
    category?: categoriesUpdateOneRequiredWithoutArticle_categoriesNestedInput
  }

  export type article_categoriesUncheckedUpdateInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesCreateManyInput = {
    article_id: string
    category_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesUncheckedUpdateManyInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article: articlesCreateNestedOneWithoutArticle_tagsInput
    tag: tagsCreateNestedOneWithoutArticle_tagsInput
  }

  export type article_tagsUncheckedCreateInput = {
    article_id: string
    tag_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articlesUpdateOneRequiredWithoutArticle_tagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutArticle_tagsNestedInput
  }

  export type article_tagsUncheckedUpdateInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsCreateManyInput = {
    article_id: string
    tag_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsUncheckedUpdateManyInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesCreateNestedManyWithoutArticleInput
    article_tags?: article_tagsCreateNestedManyWithoutArticleInput
    author?: psychologistsCreateNestedOneWithoutArticlesInput
  }

  export type articlesUncheckedCreateInput = {
    id?: string
    title: string
    content?: string | null
    author_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesUncheckedCreateNestedManyWithoutArticleInput
    article_tags?: article_tagsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articlesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUpdateManyWithoutArticleNestedInput
    article_tags?: article_tagsUpdateManyWithoutArticleNestedInput
    author?: psychologistsUpdateOneWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUncheckedUpdateManyWithoutArticleNestedInput
    article_tags?: article_tagsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articlesCreateManyInput = {
    id?: string
    title: string
    content?: string | null
    author_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type articlesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type psychologistsCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    articles?: articlesCreateNestedManyWithoutAuthorInput
  }

  export type psychologistsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    articles?: articlesUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type psychologistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUpdateManyWithoutAuthorNestedInput
  }

  export type psychologistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type psychologistsCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type psychologistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type psychologistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsCreateInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tags?: article_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tags?: article_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tags?: article_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tags?: article_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsCreateManyInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type ArticlesScalarRelationFilter = {
    is?: articlesWhereInput
    isNot?: articlesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type article_categoriesArticle_idCategory_idCompoundUniqueInput = {
    article_id: string
    category_id: string
  }

  export type article_categoriesCountOrderByAggregateInput = {
    article_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_categoriesMaxOrderByAggregateInput = {
    article_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_categoriesMinOrderByAggregateInput = {
    article_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type article_tagsArticle_idTag_idCompoundUniqueInput = {
    article_id: string
    tag_id: string
  }

  export type article_tagsCountOrderByAggregateInput = {
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_tagsMaxOrderByAggregateInput = {
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type article_tagsMinOrderByAggregateInput = {
    article_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type Article_categoriesListRelationFilter = {
    every?: article_categoriesWhereInput
    some?: article_categoriesWhereInput
    none?: article_categoriesWhereInput
  }

  export type Article_tagsListRelationFilter = {
    every?: article_tagsWhereInput
    some?: article_tagsWhereInput
    none?: article_tagsWhereInput
  }

  export type PsychologistsNullableScalarRelationFilter = {
    is?: psychologistsWhereInput | null
    isNot?: psychologistsWhereInput | null
  }

  export type article_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type article_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ArticlesListRelationFilter = {
    every?: articlesWhereInput
    some?: articlesWhereInput
    none?: articlesWhereInput
  }

  export type articlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type psychologistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type psychologistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type psychologistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type articlesCreateNestedOneWithoutArticle_categoriesInput = {
    create?: XOR<articlesCreateWithoutArticle_categoriesInput, articlesUncheckedCreateWithoutArticle_categoriesInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_categoriesInput
    connect?: articlesWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutArticle_categoriesInput = {
    create?: XOR<categoriesCreateWithoutArticle_categoriesInput, categoriesUncheckedCreateWithoutArticle_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutArticle_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type articlesUpdateOneRequiredWithoutArticle_categoriesNestedInput = {
    create?: XOR<articlesCreateWithoutArticle_categoriesInput, articlesUncheckedCreateWithoutArticle_categoriesInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_categoriesInput
    upsert?: articlesUpsertWithoutArticle_categoriesInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutArticle_categoriesInput, articlesUpdateWithoutArticle_categoriesInput>, articlesUncheckedUpdateWithoutArticle_categoriesInput>
  }

  export type categoriesUpdateOneRequiredWithoutArticle_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutArticle_categoriesInput, categoriesUncheckedCreateWithoutArticle_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutArticle_categoriesInput
    upsert?: categoriesUpsertWithoutArticle_categoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutArticle_categoriesInput, categoriesUpdateWithoutArticle_categoriesInput>, categoriesUncheckedUpdateWithoutArticle_categoriesInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type articlesCreateNestedOneWithoutArticle_tagsInput = {
    create?: XOR<articlesCreateWithoutArticle_tagsInput, articlesUncheckedCreateWithoutArticle_tagsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_tagsInput
    connect?: articlesWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutArticle_tagsInput = {
    create?: XOR<tagsCreateWithoutArticle_tagsInput, tagsUncheckedCreateWithoutArticle_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutArticle_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type articlesUpdateOneRequiredWithoutArticle_tagsNestedInput = {
    create?: XOR<articlesCreateWithoutArticle_tagsInput, articlesUncheckedCreateWithoutArticle_tagsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_tagsInput
    upsert?: articlesUpsertWithoutArticle_tagsInput
    connect?: articlesWhereUniqueInput
    update?: XOR<XOR<articlesUpdateToOneWithWhereWithoutArticle_tagsInput, articlesUpdateWithoutArticle_tagsInput>, articlesUncheckedUpdateWithoutArticle_tagsInput>
  }

  export type tagsUpdateOneRequiredWithoutArticle_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutArticle_tagsInput, tagsUncheckedCreateWithoutArticle_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutArticle_tagsInput
    upsert?: tagsUpsertWithoutArticle_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutArticle_tagsInput, tagsUpdateWithoutArticle_tagsInput>, tagsUncheckedUpdateWithoutArticle_tagsInput>
  }

  export type article_categoriesCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput> | article_categoriesCreateWithoutArticleInput[] | article_categoriesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutArticleInput | article_categoriesCreateOrConnectWithoutArticleInput[]
    createMany?: article_categoriesCreateManyArticleInputEnvelope
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
  }

  export type article_tagsCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput> | article_tagsCreateWithoutArticleInput[] | article_tagsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutArticleInput | article_tagsCreateOrConnectWithoutArticleInput[]
    createMany?: article_tagsCreateManyArticleInputEnvelope
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
  }

  export type psychologistsCreateNestedOneWithoutArticlesInput = {
    create?: XOR<psychologistsCreateWithoutArticlesInput, psychologistsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: psychologistsCreateOrConnectWithoutArticlesInput
    connect?: psychologistsWhereUniqueInput
  }

  export type article_categoriesUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput> | article_categoriesCreateWithoutArticleInput[] | article_categoriesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutArticleInput | article_categoriesCreateOrConnectWithoutArticleInput[]
    createMany?: article_categoriesCreateManyArticleInputEnvelope
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
  }

  export type article_tagsUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput> | article_tagsCreateWithoutArticleInput[] | article_tagsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutArticleInput | article_tagsCreateOrConnectWithoutArticleInput[]
    createMany?: article_tagsCreateManyArticleInputEnvelope
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type article_categoriesUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput> | article_categoriesCreateWithoutArticleInput[] | article_categoriesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutArticleInput | article_categoriesCreateOrConnectWithoutArticleInput[]
    upsert?: article_categoriesUpsertWithWhereUniqueWithoutArticleInput | article_categoriesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_categoriesCreateManyArticleInputEnvelope
    set?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    disconnect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    delete?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    update?: article_categoriesUpdateWithWhereUniqueWithoutArticleInput | article_categoriesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_categoriesUpdateManyWithWhereWithoutArticleInput | article_categoriesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
  }

  export type article_tagsUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput> | article_tagsCreateWithoutArticleInput[] | article_tagsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutArticleInput | article_tagsCreateOrConnectWithoutArticleInput[]
    upsert?: article_tagsUpsertWithWhereUniqueWithoutArticleInput | article_tagsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_tagsCreateManyArticleInputEnvelope
    set?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    disconnect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    delete?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    update?: article_tagsUpdateWithWhereUniqueWithoutArticleInput | article_tagsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_tagsUpdateManyWithWhereWithoutArticleInput | article_tagsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
  }

  export type psychologistsUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<psychologistsCreateWithoutArticlesInput, psychologistsUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: psychologistsCreateOrConnectWithoutArticlesInput
    upsert?: psychologistsUpsertWithoutArticlesInput
    disconnect?: psychologistsWhereInput | boolean
    delete?: psychologistsWhereInput | boolean
    connect?: psychologistsWhereUniqueInput
    update?: XOR<XOR<psychologistsUpdateToOneWithWhereWithoutArticlesInput, psychologistsUpdateWithoutArticlesInput>, psychologistsUncheckedUpdateWithoutArticlesInput>
  }

  export type article_categoriesUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput> | article_categoriesCreateWithoutArticleInput[] | article_categoriesUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutArticleInput | article_categoriesCreateOrConnectWithoutArticleInput[]
    upsert?: article_categoriesUpsertWithWhereUniqueWithoutArticleInput | article_categoriesUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_categoriesCreateManyArticleInputEnvelope
    set?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    disconnect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    delete?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    update?: article_categoriesUpdateWithWhereUniqueWithoutArticleInput | article_categoriesUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_categoriesUpdateManyWithWhereWithoutArticleInput | article_categoriesUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
  }

  export type article_tagsUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput> | article_tagsCreateWithoutArticleInput[] | article_tagsUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutArticleInput | article_tagsCreateOrConnectWithoutArticleInput[]
    upsert?: article_tagsUpsertWithWhereUniqueWithoutArticleInput | article_tagsUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_tagsCreateManyArticleInputEnvelope
    set?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    disconnect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    delete?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    update?: article_tagsUpdateWithWhereUniqueWithoutArticleInput | article_tagsUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_tagsUpdateManyWithWhereWithoutArticleInput | article_tagsUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
  }

  export type article_categoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput> | article_categoriesCreateWithoutCategoryInput[] | article_categoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutCategoryInput | article_categoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: article_categoriesCreateManyCategoryInputEnvelope
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
  }

  export type article_categoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput> | article_categoriesCreateWithoutCategoryInput[] | article_categoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutCategoryInput | article_categoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: article_categoriesCreateManyCategoryInputEnvelope
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
  }

  export type article_categoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput> | article_categoriesCreateWithoutCategoryInput[] | article_categoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutCategoryInput | article_categoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: article_categoriesUpsertWithWhereUniqueWithoutCategoryInput | article_categoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: article_categoriesCreateManyCategoryInputEnvelope
    set?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    disconnect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    delete?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    update?: article_categoriesUpdateWithWhereUniqueWithoutCategoryInput | article_categoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: article_categoriesUpdateManyWithWhereWithoutCategoryInput | article_categoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
  }

  export type article_categoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput> | article_categoriesCreateWithoutCategoryInput[] | article_categoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: article_categoriesCreateOrConnectWithoutCategoryInput | article_categoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: article_categoriesUpsertWithWhereUniqueWithoutCategoryInput | article_categoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: article_categoriesCreateManyCategoryInputEnvelope
    set?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    disconnect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    delete?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    connect?: article_categoriesWhereUniqueInput | article_categoriesWhereUniqueInput[]
    update?: article_categoriesUpdateWithWhereUniqueWithoutCategoryInput | article_categoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: article_categoriesUpdateManyWithWhereWithoutCategoryInput | article_categoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
  }

  export type articlesCreateNestedManyWithoutAuthorInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type articlesUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
  }

  export type articlesUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutAuthorInput | articlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutAuthorInput | articlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutAuthorInput | articlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type articlesUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput> | articlesCreateWithoutAuthorInput[] | articlesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: articlesCreateOrConnectWithoutAuthorInput | articlesCreateOrConnectWithoutAuthorInput[]
    upsert?: articlesUpsertWithWhereUniqueWithoutAuthorInput | articlesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: articlesCreateManyAuthorInputEnvelope
    set?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    disconnect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    delete?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    connect?: articlesWhereUniqueInput | articlesWhereUniqueInput[]
    update?: articlesUpdateWithWhereUniqueWithoutAuthorInput | articlesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: articlesUpdateManyWithWhereWithoutAuthorInput | articlesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: articlesScalarWhereInput | articlesScalarWhereInput[]
  }

  export type article_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput> | article_tagsCreateWithoutTagInput[] | article_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutTagInput | article_tagsCreateOrConnectWithoutTagInput[]
    createMany?: article_tagsCreateManyTagInputEnvelope
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
  }

  export type article_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput> | article_tagsCreateWithoutTagInput[] | article_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutTagInput | article_tagsCreateOrConnectWithoutTagInput[]
    createMany?: article_tagsCreateManyTagInputEnvelope
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
  }

  export type article_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput> | article_tagsCreateWithoutTagInput[] | article_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutTagInput | article_tagsCreateOrConnectWithoutTagInput[]
    upsert?: article_tagsUpsertWithWhereUniqueWithoutTagInput | article_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: article_tagsCreateManyTagInputEnvelope
    set?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    disconnect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    delete?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    update?: article_tagsUpdateWithWhereUniqueWithoutTagInput | article_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: article_tagsUpdateManyWithWhereWithoutTagInput | article_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
  }

  export type article_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput> | article_tagsCreateWithoutTagInput[] | article_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: article_tagsCreateOrConnectWithoutTagInput | article_tagsCreateOrConnectWithoutTagInput[]
    upsert?: article_tagsUpsertWithWhereUniqueWithoutTagInput | article_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: article_tagsCreateManyTagInputEnvelope
    set?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    disconnect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    delete?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    connect?: article_tagsWhereUniqueInput | article_tagsWhereUniqueInput[]
    update?: article_tagsUpdateWithWhereUniqueWithoutTagInput | article_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: article_tagsUpdateManyWithWhereWithoutTagInput | article_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type articlesCreateWithoutArticle_categoriesInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tags?: article_tagsCreateNestedManyWithoutArticleInput
    author?: psychologistsCreateNestedOneWithoutArticlesInput
  }

  export type articlesUncheckedCreateWithoutArticle_categoriesInput = {
    id?: string
    title: string
    content?: string | null
    author_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_tags?: article_tagsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articlesCreateOrConnectWithoutArticle_categoriesInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutArticle_categoriesInput, articlesUncheckedCreateWithoutArticle_categoriesInput>
  }

  export type categoriesCreateWithoutArticle_categoriesInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUncheckedCreateWithoutArticle_categoriesInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutArticle_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutArticle_categoriesInput, categoriesUncheckedCreateWithoutArticle_categoriesInput>
  }

  export type articlesUpsertWithoutArticle_categoriesInput = {
    update: XOR<articlesUpdateWithoutArticle_categoriesInput, articlesUncheckedUpdateWithoutArticle_categoriesInput>
    create: XOR<articlesCreateWithoutArticle_categoriesInput, articlesUncheckedCreateWithoutArticle_categoriesInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutArticle_categoriesInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutArticle_categoriesInput, articlesUncheckedUpdateWithoutArticle_categoriesInput>
  }

  export type articlesUpdateWithoutArticle_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tags?: article_tagsUpdateManyWithoutArticleNestedInput
    author?: psychologistsUpdateOneWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateWithoutArticle_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_tags?: article_tagsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type categoriesUpsertWithoutArticle_categoriesInput = {
    update: XOR<categoriesUpdateWithoutArticle_categoriesInput, categoriesUncheckedUpdateWithoutArticle_categoriesInput>
    create: XOR<categoriesCreateWithoutArticle_categoriesInput, categoriesUncheckedCreateWithoutArticle_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutArticle_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutArticle_categoriesInput, categoriesUncheckedUpdateWithoutArticle_categoriesInput>
  }

  export type categoriesUpdateWithoutArticle_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateWithoutArticle_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateWithoutArticle_tagsInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesCreateNestedManyWithoutArticleInput
    author?: psychologistsCreateNestedOneWithoutArticlesInput
  }

  export type articlesUncheckedCreateWithoutArticle_tagsInput = {
    id?: string
    title: string
    content?: string | null
    author_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articlesCreateOrConnectWithoutArticle_tagsInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutArticle_tagsInput, articlesUncheckedCreateWithoutArticle_tagsInput>
  }

  export type tagsCreateWithoutArticle_tagsInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsUncheckedCreateWithoutArticle_tagsInput = {
    id?: string
    label: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsCreateOrConnectWithoutArticle_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutArticle_tagsInput, tagsUncheckedCreateWithoutArticle_tagsInput>
  }

  export type articlesUpsertWithoutArticle_tagsInput = {
    update: XOR<articlesUpdateWithoutArticle_tagsInput, articlesUncheckedUpdateWithoutArticle_tagsInput>
    create: XOR<articlesCreateWithoutArticle_tagsInput, articlesUncheckedCreateWithoutArticle_tagsInput>
    where?: articlesWhereInput
  }

  export type articlesUpdateToOneWithWhereWithoutArticle_tagsInput = {
    where?: articlesWhereInput
    data: XOR<articlesUpdateWithoutArticle_tagsInput, articlesUncheckedUpdateWithoutArticle_tagsInput>
  }

  export type articlesUpdateWithoutArticle_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUpdateManyWithoutArticleNestedInput
    author?: psychologistsUpdateOneWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateWithoutArticle_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type tagsUpsertWithoutArticle_tagsInput = {
    update: XOR<tagsUpdateWithoutArticle_tagsInput, tagsUncheckedUpdateWithoutArticle_tagsInput>
    create: XOR<tagsCreateWithoutArticle_tagsInput, tagsUncheckedCreateWithoutArticle_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutArticle_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutArticle_tagsInput, tagsUncheckedUpdateWithoutArticle_tagsInput>
  }

  export type tagsUpdateWithoutArticle_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateWithoutArticle_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesCreateWithoutArticleInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category: categoriesCreateNestedOneWithoutArticle_categoriesInput
  }

  export type article_categoriesUncheckedCreateWithoutArticleInput = {
    category_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesCreateOrConnectWithoutArticleInput = {
    where: article_categoriesWhereUniqueInput
    create: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput>
  }

  export type article_categoriesCreateManyArticleInputEnvelope = {
    data: article_categoriesCreateManyArticleInput | article_categoriesCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type article_tagsCreateWithoutArticleInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    tag: tagsCreateNestedOneWithoutArticle_tagsInput
  }

  export type article_tagsUncheckedCreateWithoutArticleInput = {
    tag_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsCreateOrConnectWithoutArticleInput = {
    where: article_tagsWhereUniqueInput
    create: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput>
  }

  export type article_tagsCreateManyArticleInputEnvelope = {
    data: article_tagsCreateManyArticleInput | article_tagsCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type psychologistsCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type psychologistsUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type psychologistsCreateOrConnectWithoutArticlesInput = {
    where: psychologistsWhereUniqueInput
    create: XOR<psychologistsCreateWithoutArticlesInput, psychologistsUncheckedCreateWithoutArticlesInput>
  }

  export type article_categoriesUpsertWithWhereUniqueWithoutArticleInput = {
    where: article_categoriesWhereUniqueInput
    update: XOR<article_categoriesUpdateWithoutArticleInput, article_categoriesUncheckedUpdateWithoutArticleInput>
    create: XOR<article_categoriesCreateWithoutArticleInput, article_categoriesUncheckedCreateWithoutArticleInput>
  }

  export type article_categoriesUpdateWithWhereUniqueWithoutArticleInput = {
    where: article_categoriesWhereUniqueInput
    data: XOR<article_categoriesUpdateWithoutArticleInput, article_categoriesUncheckedUpdateWithoutArticleInput>
  }

  export type article_categoriesUpdateManyWithWhereWithoutArticleInput = {
    where: article_categoriesScalarWhereInput
    data: XOR<article_categoriesUpdateManyMutationInput, article_categoriesUncheckedUpdateManyWithoutArticleInput>
  }

  export type article_categoriesScalarWhereInput = {
    AND?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
    OR?: article_categoriesScalarWhereInput[]
    NOT?: article_categoriesScalarWhereInput | article_categoriesScalarWhereInput[]
    article_id?: UuidFilter<"article_categories"> | string
    category_id?: UuidFilter<"article_categories"> | string
    created_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_categories"> | Date | string | null
  }

  export type article_tagsUpsertWithWhereUniqueWithoutArticleInput = {
    where: article_tagsWhereUniqueInput
    update: XOR<article_tagsUpdateWithoutArticleInput, article_tagsUncheckedUpdateWithoutArticleInput>
    create: XOR<article_tagsCreateWithoutArticleInput, article_tagsUncheckedCreateWithoutArticleInput>
  }

  export type article_tagsUpdateWithWhereUniqueWithoutArticleInput = {
    where: article_tagsWhereUniqueInput
    data: XOR<article_tagsUpdateWithoutArticleInput, article_tagsUncheckedUpdateWithoutArticleInput>
  }

  export type article_tagsUpdateManyWithWhereWithoutArticleInput = {
    where: article_tagsScalarWhereInput
    data: XOR<article_tagsUpdateManyMutationInput, article_tagsUncheckedUpdateManyWithoutArticleInput>
  }

  export type article_tagsScalarWhereInput = {
    AND?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
    OR?: article_tagsScalarWhereInput[]
    NOT?: article_tagsScalarWhereInput | article_tagsScalarWhereInput[]
    article_id?: UuidFilter<"article_tags"> | string
    tag_id?: UuidFilter<"article_tags"> | string
    created_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"article_tags"> | Date | string | null
  }

  export type psychologistsUpsertWithoutArticlesInput = {
    update: XOR<psychologistsUpdateWithoutArticlesInput, psychologistsUncheckedUpdateWithoutArticlesInput>
    create: XOR<psychologistsCreateWithoutArticlesInput, psychologistsUncheckedCreateWithoutArticlesInput>
    where?: psychologistsWhereInput
  }

  export type psychologistsUpdateToOneWithWhereWithoutArticlesInput = {
    where?: psychologistsWhereInput
    data: XOR<psychologistsUpdateWithoutArticlesInput, psychologistsUncheckedUpdateWithoutArticlesInput>
  }

  export type psychologistsUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type psychologistsUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesCreateWithoutCategoryInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article: articlesCreateNestedOneWithoutArticle_categoriesInput
  }

  export type article_categoriesUncheckedCreateWithoutCategoryInput = {
    article_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesCreateOrConnectWithoutCategoryInput = {
    where: article_categoriesWhereUniqueInput
    create: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput>
  }

  export type article_categoriesCreateManyCategoryInputEnvelope = {
    data: article_categoriesCreateManyCategoryInput | article_categoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type article_categoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: article_categoriesWhereUniqueInput
    update: XOR<article_categoriesUpdateWithoutCategoryInput, article_categoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<article_categoriesCreateWithoutCategoryInput, article_categoriesUncheckedCreateWithoutCategoryInput>
  }

  export type article_categoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: article_categoriesWhereUniqueInput
    data: XOR<article_categoriesUpdateWithoutCategoryInput, article_categoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type article_categoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: article_categoriesScalarWhereInput
    data: XOR<article_categoriesUpdateManyMutationInput, article_categoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type articlesCreateWithoutAuthorInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesCreateNestedManyWithoutArticleInput
    article_tags?: article_tagsCreateNestedManyWithoutArticleInput
  }

  export type articlesUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article_categories?: article_categoriesUncheckedCreateNestedManyWithoutArticleInput
    article_tags?: article_tagsUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articlesCreateOrConnectWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput>
  }

  export type articlesCreateManyAuthorInputEnvelope = {
    data: articlesCreateManyAuthorInput | articlesCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type articlesUpsertWithWhereUniqueWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    update: XOR<articlesUpdateWithoutAuthorInput, articlesUncheckedUpdateWithoutAuthorInput>
    create: XOR<articlesCreateWithoutAuthorInput, articlesUncheckedCreateWithoutAuthorInput>
  }

  export type articlesUpdateWithWhereUniqueWithoutAuthorInput = {
    where: articlesWhereUniqueInput
    data: XOR<articlesUpdateWithoutAuthorInput, articlesUncheckedUpdateWithoutAuthorInput>
  }

  export type articlesUpdateManyWithWhereWithoutAuthorInput = {
    where: articlesScalarWhereInput
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyWithoutAuthorInput>
  }

  export type articlesScalarWhereInput = {
    AND?: articlesScalarWhereInput | articlesScalarWhereInput[]
    OR?: articlesScalarWhereInput[]
    NOT?: articlesScalarWhereInput | articlesScalarWhereInput[]
    id?: UuidFilter<"articles"> | string
    title?: StringFilter<"articles"> | string
    content?: StringNullableFilter<"articles"> | string | null
    author_id?: UuidNullableFilter<"articles"> | string | null
    created_at?: DateTimeNullableFilter<"articles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"articles"> | Date | string | null
  }

  export type article_tagsCreateWithoutTagInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    article: articlesCreateNestedOneWithoutArticle_tagsInput
  }

  export type article_tagsUncheckedCreateWithoutTagInput = {
    article_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsCreateOrConnectWithoutTagInput = {
    where: article_tagsWhereUniqueInput
    create: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput>
  }

  export type article_tagsCreateManyTagInputEnvelope = {
    data: article_tagsCreateManyTagInput | article_tagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type article_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: article_tagsWhereUniqueInput
    update: XOR<article_tagsUpdateWithoutTagInput, article_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<article_tagsCreateWithoutTagInput, article_tagsUncheckedCreateWithoutTagInput>
  }

  export type article_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: article_tagsWhereUniqueInput
    data: XOR<article_tagsUpdateWithoutTagInput, article_tagsUncheckedUpdateWithoutTagInput>
  }

  export type article_tagsUpdateManyWithWhereWithoutTagInput = {
    where: article_tagsScalarWhereInput
    data: XOR<article_tagsUpdateManyMutationInput, article_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type article_categoriesCreateManyArticleInput = {
    category_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsCreateManyArticleInput = {
    tag_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesUpdateWithoutArticleInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoriesUpdateOneRequiredWithoutArticle_categoriesNestedInput
  }

  export type article_categoriesUncheckedUpdateWithoutArticleInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesUncheckedUpdateManyWithoutArticleInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsUpdateWithoutArticleInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tag?: tagsUpdateOneRequiredWithoutArticle_tagsNestedInput
  }

  export type article_tagsUncheckedUpdateWithoutArticleInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsUncheckedUpdateManyWithoutArticleInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesCreateManyCategoryInput = {
    article_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_categoriesUpdateWithoutCategoryInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articlesUpdateOneRequiredWithoutArticle_categoriesNestedInput
  }

  export type article_categoriesUncheckedUpdateWithoutCategoryInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_categoriesUncheckedUpdateManyWithoutCategoryInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesCreateManyAuthorInput = {
    id?: string
    title: string
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type articlesUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUpdateManyWithoutArticleNestedInput
    article_tags?: article_tagsUpdateManyWithoutArticleNestedInput
  }

  export type articlesUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article_categories?: article_categoriesUncheckedUpdateManyWithoutArticleNestedInput
    article_tags?: article_tagsUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articlesUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsCreateManyTagInput = {
    article_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type article_tagsUpdateWithoutTagInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articlesUpdateOneRequiredWithoutArticle_tagsNestedInput
  }

  export type article_tagsUncheckedUpdateWithoutTagInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type article_tagsUncheckedUpdateManyWithoutTagInput = {
    article_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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