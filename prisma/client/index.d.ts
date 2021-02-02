
/**
 * Client
**/

import * as runtime from './runtime';


/**
 * Model Organization
 */

export type Organization = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Parlour
 */

export type Parlour = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  organizationId: string
}

/**
 * Model Staff
 */

export type Staff = {
  id: string
  username: string
  password: string
  lastName: string
  firstName: string
  gender: number
  createdAt: Date
  updatedAt: Date
  organizationId: string
}

/**
 * Model Guest
 */

export type Guest = {
  id: string
  lastName: string
  firstName: string
  gender: number
  email: string
  address: string
  rewardPoints: number
  createdAt: Date
  updatedAt: Date
  organizationId: string
}

/**
 * Model Table
 */

export type Table = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  parlourId: string
}

/**
 * Model Player
 */

export type Player = {
  id: string
  seat: number
  createdAt: Date
  updatedAt: Date
  tableId: string
  guestId: string | null
  staffId: string | null
}

/**
 * Model Game
 */

export type Game = {
  id: string
  firstDealer: number
  startAt: Date
  endAt: Date
  createdAt: Date
  updatedAt: Date
  tableId: string
}

/**
 * Model GameResult
 */

export type GameResult = {
  id: string
  rank: number
  createdAt: Date
  updatedAt: Date
  gameId: string
  playerId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate;

  /**
   * `prisma.parlour`: Exposes CRUD operations for the **Parlour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parlours
    * const parlours = await prisma.parlour.findMany()
    * ```
    */
  get parlour(): Prisma.ParlourDelegate;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate;

  /**
   * `prisma.gameResult`: Exposes CRUD operations for the **GameResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameResults
    * const gameResults = await prisma.gameResult.findMany()
    * ```
    */
  get gameResult(): Prisma.GameResultDelegate;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.15.0
   * Query Engine version: e51dc3b5a9ee790a07104bec1c9477d51740fe54
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  export type Union = any

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

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<Record<Exclude<Keys<_U>, keyof U>, never>> : never;

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
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Organization: 'Organization',
    Parlour: 'Parlour',
    Staff: 'Staff',
    Guest: 'Guest',
    Table: 'Table',
    Player: 'Player',
    Game: 'Game',
    GameResult: 'GameResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 

  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model Organization
   */


  export type AggregateOrganization = {
    count: OrganizationCountAggregateOutputType | null
    min: OrganizationMinAggregateOutputType | null
    max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number | null
    name: number | null
    createdAt: number | null
    updatedAt: number | null
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which Organization to aggregate.
    **/
    where?: OrganizationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Organizations to fetch.
    **/
    orderBy?: Enumerable<OrganizationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }



  export type OrganizationSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Parlour?: boolean | ParlourFindManyArgs
    Staff?: boolean | StaffFindManyArgs
    Guest?: boolean | GuestFindManyArgs
  }

  export type OrganizationInclude = {
    Parlour?: boolean | ParlourFindManyArgs
    Staff?: boolean | StaffFindManyArgs
    Guest?: boolean | GuestFindManyArgs
  }

  export type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationArgs,
    U = keyof S
      > = S extends true
        ? Organization
    : S extends undefined
    ? never
    : S extends OrganizationArgs | OrganizationFindManyArgs
    ?'include' extends U
    ? Organization  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Parlour'
        ? Array < ParlourGetPayload<S['include'][P]>>  :
        P extends 'Staff'
        ? Array < StaffGetPayload<S['include'][P]>>  :
        P extends 'Guest'
        ? Array < GuestGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Organization ?Organization [P]
  : 
          P extends 'Parlour'
        ? Array < ParlourGetPayload<S['select'][P]>>  :
        P extends 'Staff'
        ? Array < StaffGetPayload<S['select'][P]>>  :
        P extends 'Guest'
        ? Array < GuestGetPayload<S['select'][P]>>  : never
  } 
    : Organization
  : Organization


  type OrganizationCountArgs = Merge<
    Omit<OrganizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }
  >

  export interface OrganizationDelegate {
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs>(
      args: SelectSubset<T, OrganizationFindUniqueArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization | null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null>>

    /**
     * Find the first Organization that matches the filter.
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs>(
      args?: SelectSubset<T, OrganizationFindFirstArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization | null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null>>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs>
    ): CheckSelect<T, Promise<Array<Organization>>, Promise<Array<OrganizationGetPayload<T>>>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Count the number of Organizations.
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Promise<GetOrganizationAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganizationClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Parlour<T extends ParlourFindManyArgs = {}>(args?: Subset<T, ParlourFindManyArgs>): CheckSelect<T, Promise<Array<Parlour>>, Promise<Array<ParlourGetPayload<T>>>>;

    Staff<T extends StaffFindManyArgs = {}>(args?: Subset<T, StaffFindManyArgs>): CheckSelect<T, Promise<Array<Staff>>, Promise<Array<StaffGetPayload<T>>>>;

    Guest<T extends GuestFindManyArgs = {}>(args?: Subset<T, GuestFindManyArgs>): CheckSelect<T, Promise<Array<Guest>>, Promise<Array<GuestGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * Throw an Error if a Organization can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Organization to fetch.
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * Throw an Error if a Organization can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Organization to fetch.
    **/
    where?: OrganizationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Organizations to fetch.
    **/
    orderBy?: Enumerable<OrganizationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Organizations.
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organizations to fetch.
    **/
    where?: OrganizationWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Organizations to fetch.
    **/
    orderBy?: Enumerable<OrganizationOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
    **/
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to create a Organization.
    **/
    data: XOR<OrganizationUncheckedCreateInput, OrganizationCreateInput>
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to update a Organization.
    **/
    data: XOR<OrganizationUncheckedUpdateInput, OrganizationUpdateInput>
    /**
     * Choose, which Organization to update.
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs = {
    data: XOR<OrganizationUncheckedUpdateManyInput, OrganizationUpdateManyMutationInput>
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * The filter to search for the Organization to update in case it exists.
    **/
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
    **/
    create: XOR<OrganizationUncheckedCreateInput, OrganizationCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<OrganizationUncheckedUpdateInput, OrganizationUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
    /**
     * Filter which Organization to delete.
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs = {
    where?: OrganizationWhereInput
  }


  /**
   * Organization without action
   */
  export type OrganizationArgs = {
    /**
     * Select specific fields to fetch from the Organization
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: OrganizationInclude | null
  }



  /**
   * Model Parlour
   */


  export type AggregateParlour = {
    count: ParlourCountAggregateOutputType | null
    min: ParlourMinAggregateOutputType | null
    max: ParlourMaxAggregateOutputType | null
  }

  export type ParlourMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type ParlourMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type ParlourCountAggregateOutputType = {
    id: number | null
    name: number | null
    createdAt: number | null
    updatedAt: number | null
    organizationId: number | null
    _all: number
  }


  export type ParlourMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ParlourMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ParlourCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type ParlourAggregateArgs = {
    /**
     * Filter which Parlour to aggregate.
    **/
    where?: ParlourWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Parlours to fetch.
    **/
    orderBy?: Enumerable<ParlourOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: ParlourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parlours from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parlours.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parlours
    **/
    count?: true | ParlourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ParlourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ParlourMaxAggregateInputType
  }

  export type GetParlourAggregateType<T extends ParlourAggregateArgs> = {
    [P in keyof T & keyof AggregateParlour]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParlour[P]>
      : GetScalarType<T[P], AggregateParlour[P]>
  }



  export type ParlourSelect = {
    id?: boolean
    name?: boolean
    organization?: boolean | OrganizationArgs
    staffs?: boolean | StaffFindManyArgs
    guests?: boolean | GuestFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    Table?: boolean | TableFindManyArgs
    organizationId?: boolean
  }

  export type ParlourInclude = {
    organization?: boolean | OrganizationArgs
    staffs?: boolean | StaffFindManyArgs
    guests?: boolean | GuestFindManyArgs
    Table?: boolean | TableFindManyArgs
  }

  export type ParlourGetPayload<
    S extends boolean | null | undefined | ParlourArgs,
    U = keyof S
      > = S extends true
        ? Parlour
    : S extends undefined
    ? never
    : S extends ParlourArgs | ParlourFindManyArgs
    ?'include' extends U
    ? Parlour  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'organization'
        ? OrganizationGetPayload<S['include'][P]> :
        P extends 'staffs'
        ? Array < StaffGetPayload<S['include'][P]>>  :
        P extends 'guests'
        ? Array < GuestGetPayload<S['include'][P]>>  :
        P extends 'Table'
        ? Array < TableGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Parlour ?Parlour [P]
  : 
          P extends 'organization'
        ? OrganizationGetPayload<S['select'][P]> :
        P extends 'staffs'
        ? Array < StaffGetPayload<S['select'][P]>>  :
        P extends 'guests'
        ? Array < GuestGetPayload<S['select'][P]>>  :
        P extends 'Table'
        ? Array < TableGetPayload<S['select'][P]>>  : never
  } 
    : Parlour
  : Parlour


  type ParlourCountArgs = Merge<
    Omit<ParlourFindManyArgs, 'select' | 'include'> & {
      select?: ParlourCountAggregateInputType | true
    }
  >

  export interface ParlourDelegate {
    /**
     * Find zero or one Parlour that matches the filter.
     * @param {ParlourFindUniqueArgs} args - Arguments to find a Parlour
     * @example
     * // Get one Parlour
     * const parlour = await prisma.parlour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParlourFindUniqueArgs>(
      args: SelectSubset<T, ParlourFindUniqueArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour | null>, Prisma__ParlourClient<ParlourGetPayload<T> | null>>

    /**
     * Find the first Parlour that matches the filter.
     * @param {ParlourFindFirstArgs} args - Arguments to find a Parlour
     * @example
     * // Get one Parlour
     * const parlour = await prisma.parlour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParlourFindFirstArgs>(
      args?: SelectSubset<T, ParlourFindFirstArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour | null>, Prisma__ParlourClient<ParlourGetPayload<T> | null>>

    /**
     * Find zero or more Parlours that matches the filter.
     * @param {ParlourFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parlours
     * const parlours = await prisma.parlour.findMany()
     * 
     * // Get first 10 Parlours
     * const parlours = await prisma.parlour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parlourWithIdOnly = await prisma.parlour.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParlourFindManyArgs>(
      args?: SelectSubset<T, ParlourFindManyArgs>
    ): CheckSelect<T, Promise<Array<Parlour>>, Promise<Array<ParlourGetPayload<T>>>>

    /**
     * Create a Parlour.
     * @param {ParlourCreateArgs} args - Arguments to create a Parlour.
     * @example
     * // Create one Parlour
     * const Parlour = await prisma.parlour.create({
     *   data: {
     *     // ... data to create a Parlour
     *   }
     * })
     * 
    **/
    create<T extends ParlourCreateArgs>(
      args: SelectSubset<T, ParlourCreateArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour>, Prisma__ParlourClient<ParlourGetPayload<T>>>

    /**
     * Delete a Parlour.
     * @param {ParlourDeleteArgs} args - Arguments to delete one Parlour.
     * @example
     * // Delete one Parlour
     * const Parlour = await prisma.parlour.delete({
     *   where: {
     *     // ... filter to delete one Parlour
     *   }
     * })
     * 
    **/
    delete<T extends ParlourDeleteArgs>(
      args: SelectSubset<T, ParlourDeleteArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour>, Prisma__ParlourClient<ParlourGetPayload<T>>>

    /**
     * Update one Parlour.
     * @param {ParlourUpdateArgs} args - Arguments to update one Parlour.
     * @example
     * // Update one Parlour
     * const parlour = await prisma.parlour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParlourUpdateArgs>(
      args: SelectSubset<T, ParlourUpdateArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour>, Prisma__ParlourClient<ParlourGetPayload<T>>>

    /**
     * Delete zero or more Parlours.
     * @param {ParlourDeleteManyArgs} args - Arguments to filter Parlours to delete.
     * @example
     * // Delete a few Parlours
     * const { count } = await prisma.parlour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParlourDeleteManyArgs>(
      args?: SelectSubset<T, ParlourDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Parlours.
     * @param {ParlourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parlours
     * const parlour = await prisma.parlour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParlourUpdateManyArgs>(
      args: SelectSubset<T, ParlourUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Parlour.
     * @param {ParlourUpsertArgs} args - Arguments to update or create a Parlour.
     * @example
     * // Update or create a Parlour
     * const parlour = await prisma.parlour.upsert({
     *   create: {
     *     // ... data to create a Parlour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parlour we want to update
     *   }
     * })
    **/
    upsert<T extends ParlourUpsertArgs>(
      args: SelectSubset<T, ParlourUpsertArgs>
    ): CheckSelect<T, Prisma__ParlourClient<Parlour>, Prisma__ParlourClient<ParlourGetPayload<T>>>

    /**
     * Count the number of Parlours.
     * @param {ParlourCountArgs} args - Arguments to filter Parlours to count.
     * @example
     * // Count the number of Parlours
     * const count = await prisma.parlour.count({
     *   where: {
     *     // ... the filter for the Parlours we want to count
     *   }
     * })
    **/
    count<T extends ParlourCountArgs>(
      args?: Subset<T, ParlourCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParlourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parlour.
     * @param {ParlourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends ParlourAggregateArgs>(args: Subset<T, ParlourAggregateArgs>): Promise<GetParlourAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Parlour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ParlourClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null>>;

    staffs<T extends StaffFindManyArgs = {}>(args?: Subset<T, StaffFindManyArgs>): CheckSelect<T, Promise<Array<Staff>>, Promise<Array<StaffGetPayload<T>>>>;

    guests<T extends GuestFindManyArgs = {}>(args?: Subset<T, GuestFindManyArgs>): CheckSelect<T, Promise<Array<Guest>>, Promise<Array<GuestGetPayload<T>>>>;

    Table<T extends TableFindManyArgs = {}>(args?: Subset<T, TableFindManyArgs>): CheckSelect<T, Promise<Array<Table>>, Promise<Array<TableGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Parlour findUnique
   */
  export type ParlourFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * Throw an Error if a Parlour can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Parlour to fetch.
    **/
    where: ParlourWhereUniqueInput
  }


  /**
   * Parlour findFirst
   */
  export type ParlourFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * Throw an Error if a Parlour can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Parlour to fetch.
    **/
    where?: ParlourWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Parlours to fetch.
    **/
    orderBy?: Enumerable<ParlourOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parlours.
    **/
    cursor?: ParlourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parlours from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parlours.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Parlours.
    **/
    distinct?: Enumerable<ParlourScalarFieldEnum>
  }


  /**
   * Parlour findMany
   */
  export type ParlourFindManyArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * Filter, which Parlours to fetch.
    **/
    where?: ParlourWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Parlours to fetch.
    **/
    orderBy?: Enumerable<ParlourOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parlours.
    **/
    cursor?: ParlourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parlours from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parlours.
    **/
    skip?: number
    distinct?: Enumerable<ParlourScalarFieldEnum>
  }


  /**
   * Parlour create
   */
  export type ParlourCreateArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * The data needed to create a Parlour.
    **/
    data: XOR<ParlourUncheckedCreateInput, ParlourCreateInput>
  }


  /**
   * Parlour update
   */
  export type ParlourUpdateArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * The data needed to update a Parlour.
    **/
    data: XOR<ParlourUncheckedUpdateInput, ParlourUpdateInput>
    /**
     * Choose, which Parlour to update.
    **/
    where: ParlourWhereUniqueInput
  }


  /**
   * Parlour updateMany
   */
  export type ParlourUpdateManyArgs = {
    data: XOR<ParlourUncheckedUpdateManyInput, ParlourUpdateManyMutationInput>
    where?: ParlourWhereInput
  }


  /**
   * Parlour upsert
   */
  export type ParlourUpsertArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * The filter to search for the Parlour to update in case it exists.
    **/
    where: ParlourWhereUniqueInput
    /**
     * In case the Parlour found by the `where` argument doesn't exist, create a new Parlour with this data.
    **/
    create: XOR<ParlourUncheckedCreateInput, ParlourCreateInput>
    /**
     * In case the Parlour was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<ParlourUncheckedUpdateInput, ParlourUpdateInput>
  }


  /**
   * Parlour delete
   */
  export type ParlourDeleteArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
    /**
     * Filter which Parlour to delete.
    **/
    where: ParlourWhereUniqueInput
  }


  /**
   * Parlour deleteMany
   */
  export type ParlourDeleteManyArgs = {
    where?: ParlourWhereInput
  }


  /**
   * Parlour without action
   */
  export type ParlourArgs = {
    /**
     * Select specific fields to fetch from the Parlour
    **/
    select?: ParlourSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: ParlourInclude | null
  }



  /**
   * Model Staff
   */


  export type AggregateStaff = {
    count: StaffCountAggregateOutputType | null
    avg: StaffAvgAggregateOutputType | null
    sum: StaffSumAggregateOutputType | null
    min: StaffMinAggregateOutputType | null
    max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    gender: number
  }

  export type StaffSumAggregateOutputType = {
    gender: number
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    lastName: string | null
    firstName: string | null
    gender: number
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    lastName: string | null
    firstName: string | null
    gender: number
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number | null
    username: number | null
    password: number | null
    lastName: number | null
    firstName: number | null
    gender: number
    createdAt: number | null
    updatedAt: number | null
    organizationId: number | null
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    gender?: true
  }

  export type StaffSumAggregateInputType = {
    gender?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    lastName?: true
    firstName?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    lastName?: true
    firstName?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    lastName?: true
    firstName?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type StaffAggregateArgs = {
    /**
     * Filter which Staff to aggregate.
    **/
    where?: StaffWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Staff to fetch.
    **/
    orderBy?: Enumerable<StaffOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
    [P in keyof T & keyof AggregateStaff]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }



  export type StaffSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    organization?: boolean | OrganizationArgs
    parlours?: boolean | ParlourFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    Player?: boolean | PlayerFindManyArgs
    organizationId?: boolean
  }

  export type StaffInclude = {
    organization?: boolean | OrganizationArgs
    parlours?: boolean | ParlourFindManyArgs
    Player?: boolean | PlayerFindManyArgs
  }

  export type StaffGetPayload<
    S extends boolean | null | undefined | StaffArgs,
    U = keyof S
      > = S extends true
        ? Staff
    : S extends undefined
    ? never
    : S extends StaffArgs | StaffFindManyArgs
    ?'include' extends U
    ? Staff  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'organization'
        ? OrganizationGetPayload<S['include'][P]> :
        P extends 'parlours'
        ? Array < ParlourGetPayload<S['include'][P]>>  :
        P extends 'Player'
        ? Array < PlayerGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Staff ?Staff [P]
  : 
          P extends 'organization'
        ? OrganizationGetPayload<S['select'][P]> :
        P extends 'parlours'
        ? Array < ParlourGetPayload<S['select'][P]>>  :
        P extends 'Player'
        ? Array < PlayerGetPayload<S['select'][P]>>  : never
  } 
    : Staff
  : Staff


  type StaffCountArgs = Merge<
    Omit<StaffFindManyArgs, 'select' | 'include'> & {
      select?: StaffCountAggregateInputType | true
    }
  >

  export interface StaffDelegate {
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StaffFindUniqueArgs>(
      args: SelectSubset<T, StaffFindUniqueArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff | null>, Prisma__StaffClient<StaffGetPayload<T> | null>>

    /**
     * Find the first Staff that matches the filter.
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StaffFindFirstArgs>(
      args?: SelectSubset<T, StaffFindFirstArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff | null>, Prisma__StaffClient<StaffGetPayload<T> | null>>

    /**
     * Find zero or more Staff that matches the filter.
     * @param {StaffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StaffFindManyArgs>(
      args?: SelectSubset<T, StaffFindManyArgs>
    ): CheckSelect<T, Promise<Array<Staff>>, Promise<Array<StaffGetPayload<T>>>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
    **/
    create<T extends StaffCreateArgs>(
      args: SelectSubset<T, StaffCreateArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff>, Prisma__StaffClient<StaffGetPayload<T>>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
    **/
    delete<T extends StaffDeleteArgs>(
      args: SelectSubset<T, StaffDeleteArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff>, Prisma__StaffClient<StaffGetPayload<T>>>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StaffUpdateArgs>(
      args: SelectSubset<T, StaffUpdateArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff>, Prisma__StaffClient<StaffGetPayload<T>>>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StaffDeleteManyArgs>(
      args?: SelectSubset<T, StaffDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Staff.
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StaffUpdateManyArgs>(
      args: SelectSubset<T, StaffUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
    **/
    upsert<T extends StaffUpsertArgs>(
      args: SelectSubset<T, StaffUpsertArgs>
    ): CheckSelect<T, Prisma__StaffClient<Staff>, Prisma__StaffClient<StaffGetPayload<T>>>

    /**
     * Count the number of Staff.
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Promise<GetStaffAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StaffClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null>>;

    parlours<T extends ParlourFindManyArgs = {}>(args?: Subset<T, ParlourFindManyArgs>): CheckSelect<T, Promise<Array<Parlour>>, Promise<Array<ParlourGetPayload<T>>>>;

    Player<T extends PlayerFindManyArgs = {}>(args?: Subset<T, PlayerFindManyArgs>): CheckSelect<T, Promise<Array<Player>>, Promise<Array<PlayerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * Throw an Error if a Staff can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Staff to fetch.
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * Throw an Error if a Staff can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Staff to fetch.
    **/
    where?: StaffWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Staff to fetch.
    **/
    orderBy?: Enumerable<StaffOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Staff.
    **/
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * Staff findMany
   */
  export type StaffFindManyArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * Filter, which Staff to fetch.
    **/
    where?: StaffWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Staff to fetch.
    **/
    orderBy?: Enumerable<StaffOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
    **/
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
    **/
    skip?: number
    distinct?: Enumerable<StaffScalarFieldEnum>
  }


  /**
   * Staff create
   */
  export type StaffCreateArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * The data needed to create a Staff.
    **/
    data: XOR<StaffUncheckedCreateInput, StaffCreateInput>
  }


  /**
   * Staff update
   */
  export type StaffUpdateArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * The data needed to update a Staff.
    **/
    data: XOR<StaffUncheckedUpdateInput, StaffUpdateInput>
    /**
     * Choose, which Staff to update.
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs = {
    data: XOR<StaffUncheckedUpdateManyInput, StaffUpdateManyMutationInput>
    where?: StaffWhereInput
  }


  /**
   * Staff upsert
   */
  export type StaffUpsertArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * The filter to search for the Staff to update in case it exists.
    **/
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
    **/
    create: XOR<StaffUncheckedCreateInput, StaffCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<StaffUncheckedUpdateInput, StaffUpdateInput>
  }


  /**
   * Staff delete
   */
  export type StaffDeleteArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
    /**
     * Filter which Staff to delete.
    **/
    where: StaffWhereUniqueInput
  }


  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs = {
    where?: StaffWhereInput
  }


  /**
   * Staff without action
   */
  export type StaffArgs = {
    /**
     * Select specific fields to fetch from the Staff
    **/
    select?: StaffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: StaffInclude | null
  }



  /**
   * Model Guest
   */


  export type AggregateGuest = {
    count: GuestCountAggregateOutputType | null
    avg: GuestAvgAggregateOutputType | null
    sum: GuestSumAggregateOutputType | null
    min: GuestMinAggregateOutputType | null
    max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    gender: number
    rewardPoints: number
  }

  export type GuestSumAggregateOutputType = {
    gender: number
    rewardPoints: number
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    lastName: string | null
    firstName: string | null
    gender: number
    email: string | null
    address: string | null
    rewardPoints: number
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    lastName: string | null
    firstName: string | null
    gender: number
    email: string | null
    address: string | null
    rewardPoints: number
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type GuestCountAggregateOutputType = {
    id: number | null
    lastName: number | null
    firstName: number | null
    gender: number
    email: number | null
    address: number | null
    rewardPoints: number
    createdAt: number | null
    updatedAt: number | null
    organizationId: number | null
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    gender?: true
    rewardPoints?: true
  }

  export type GuestSumAggregateInputType = {
    gender?: true
    rewardPoints?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    email?: true
    address?: true
    rewardPoints?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    email?: true
    address?: true
    rewardPoints?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    lastName?: true
    firstName?: true
    gender?: true
    email?: true
    address?: true
    rewardPoints?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type GuestAggregateArgs = {
    /**
     * Filter which Guest to aggregate.
    **/
    where?: GuestWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Guests to fetch.
    **/
    orderBy?: Enumerable<GuestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: GuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
    [P in keyof T & keyof AggregateGuest]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }



  export type GuestSelect = {
    id?: boolean
    lastName?: boolean
    firstName?: boolean
    gender?: boolean
    email?: boolean
    address?: boolean
    rewardPoints?: boolean
    organization?: boolean | OrganizationArgs
    parlours?: boolean | ParlourFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    Player?: boolean | PlayerFindManyArgs
    organizationId?: boolean
  }

  export type GuestInclude = {
    organization?: boolean | OrganizationArgs
    parlours?: boolean | ParlourFindManyArgs
    Player?: boolean | PlayerFindManyArgs
  }

  export type GuestGetPayload<
    S extends boolean | null | undefined | GuestArgs,
    U = keyof S
      > = S extends true
        ? Guest
    : S extends undefined
    ? never
    : S extends GuestArgs | GuestFindManyArgs
    ?'include' extends U
    ? Guest  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'organization'
        ? OrganizationGetPayload<S['include'][P]> :
        P extends 'parlours'
        ? Array < ParlourGetPayload<S['include'][P]>>  :
        P extends 'Player'
        ? Array < PlayerGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Guest ?Guest [P]
  : 
          P extends 'organization'
        ? OrganizationGetPayload<S['select'][P]> :
        P extends 'parlours'
        ? Array < ParlourGetPayload<S['select'][P]>>  :
        P extends 'Player'
        ? Array < PlayerGetPayload<S['select'][P]>>  : never
  } 
    : Guest
  : Guest


  type GuestCountArgs = Merge<
    Omit<GuestFindManyArgs, 'select' | 'include'> & {
      select?: GuestCountAggregateInputType | true
    }
  >

  export interface GuestDelegate {
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GuestFindUniqueArgs>(
      args: SelectSubset<T, GuestFindUniqueArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest | null>, Prisma__GuestClient<GuestGetPayload<T> | null>>

    /**
     * Find the first Guest that matches the filter.
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GuestFindFirstArgs>(
      args?: SelectSubset<T, GuestFindFirstArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest | null>, Prisma__GuestClient<GuestGetPayload<T> | null>>

    /**
     * Find zero or more Guests that matches the filter.
     * @param {GuestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GuestFindManyArgs>(
      args?: SelectSubset<T, GuestFindManyArgs>
    ): CheckSelect<T, Promise<Array<Guest>>, Promise<Array<GuestGetPayload<T>>>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
    **/
    create<T extends GuestCreateArgs>(
      args: SelectSubset<T, GuestCreateArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest>, Prisma__GuestClient<GuestGetPayload<T>>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
    **/
    delete<T extends GuestDeleteArgs>(
      args: SelectSubset<T, GuestDeleteArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest>, Prisma__GuestClient<GuestGetPayload<T>>>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GuestUpdateArgs>(
      args: SelectSubset<T, GuestUpdateArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest>, Prisma__GuestClient<GuestGetPayload<T>>>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GuestDeleteManyArgs>(
      args?: SelectSubset<T, GuestDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Guests.
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GuestUpdateManyArgs>(
      args: SelectSubset<T, GuestUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
    **/
    upsert<T extends GuestUpsertArgs>(
      args: SelectSubset<T, GuestUpsertArgs>
    ): CheckSelect<T, Prisma__GuestClient<Guest>, Prisma__GuestClient<GuestGetPayload<T>>>

    /**
     * Count the number of Guests.
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Promise<GetGuestAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GuestClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null>, Prisma__OrganizationClient<OrganizationGetPayload<T> | null>>;

    parlours<T extends ParlourFindManyArgs = {}>(args?: Subset<T, ParlourFindManyArgs>): CheckSelect<T, Promise<Array<Parlour>>, Promise<Array<ParlourGetPayload<T>>>>;

    Player<T extends PlayerFindManyArgs = {}>(args?: Subset<T, PlayerFindManyArgs>): CheckSelect<T, Promise<Array<Player>>, Promise<Array<PlayerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * Throw an Error if a Guest can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Guest to fetch.
    **/
    where: GuestWhereUniqueInput
  }


  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * Throw an Error if a Guest can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Guest to fetch.
    **/
    where?: GuestWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Guests to fetch.
    **/
    orderBy?: Enumerable<GuestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
    **/
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Guests.
    **/
    distinct?: Enumerable<GuestScalarFieldEnum>
  }


  /**
   * Guest findMany
   */
  export type GuestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * Filter, which Guests to fetch.
    **/
    where?: GuestWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Guests to fetch.
    **/
    orderBy?: Enumerable<GuestOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
    **/
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
    **/
    skip?: number
    distinct?: Enumerable<GuestScalarFieldEnum>
  }


  /**
   * Guest create
   */
  export type GuestCreateArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * The data needed to create a Guest.
    **/
    data: XOR<GuestUncheckedCreateInput, GuestCreateInput>
  }


  /**
   * Guest update
   */
  export type GuestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * The data needed to update a Guest.
    **/
    data: XOR<GuestUncheckedUpdateInput, GuestUpdateInput>
    /**
     * Choose, which Guest to update.
    **/
    where: GuestWhereUniqueInput
  }


  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs = {
    data: XOR<GuestUncheckedUpdateManyInput, GuestUpdateManyMutationInput>
    where?: GuestWhereInput
  }


  /**
   * Guest upsert
   */
  export type GuestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * The filter to search for the Guest to update in case it exists.
    **/
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
    **/
    create: XOR<GuestUncheckedCreateInput, GuestCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<GuestUncheckedUpdateInput, GuestUpdateInput>
  }


  /**
   * Guest delete
   */
  export type GuestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
    /**
     * Filter which Guest to delete.
    **/
    where: GuestWhereUniqueInput
  }


  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs = {
    where?: GuestWhereInput
  }


  /**
   * Guest without action
   */
  export type GuestArgs = {
    /**
     * Select specific fields to fetch from the Guest
    **/
    select?: GuestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GuestInclude | null
  }



  /**
   * Model Table
   */


  export type AggregateTable = {
    count: TableCountAggregateOutputType | null
    min: TableMinAggregateOutputType | null
    max: TableMaxAggregateOutputType | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parlourId: string | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parlourId: string | null
  }

  export type TableCountAggregateOutputType = {
    id: number | null
    name: number | null
    createdAt: number | null
    updatedAt: number | null
    parlourId: number | null
    _all: number
  }


  export type TableMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    parlourId?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    parlourId?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    parlourId?: true
    _all?: true
  }

  export type TableAggregateArgs = {
    /**
     * Filter which Table to aggregate.
    **/
    where?: TableWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tables to fetch.
    **/
    orderBy?: Enumerable<TableOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
    [P in keyof T & keyof AggregateTable]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }



  export type TableSelect = {
    id?: boolean
    name?: boolean
    parlour?: boolean | ParlourArgs
    players?: boolean | PlayerFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    Game?: boolean | GameFindManyArgs
    parlourId?: boolean
  }

  export type TableInclude = {
    parlour?: boolean | ParlourArgs
    players?: boolean | PlayerFindManyArgs
    Game?: boolean | GameFindManyArgs
  }

  export type TableGetPayload<
    S extends boolean | null | undefined | TableArgs,
    U = keyof S
      > = S extends true
        ? Table
    : S extends undefined
    ? never
    : S extends TableArgs | TableFindManyArgs
    ?'include' extends U
    ? Table  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'parlour'
        ? ParlourGetPayload<S['include'][P]> :
        P extends 'players'
        ? Array < PlayerGetPayload<S['include'][P]>>  :
        P extends 'Game'
        ? Array < GameGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Table ?Table [P]
  : 
          P extends 'parlour'
        ? ParlourGetPayload<S['select'][P]> :
        P extends 'players'
        ? Array < PlayerGetPayload<S['select'][P]>>  :
        P extends 'Game'
        ? Array < GameGetPayload<S['select'][P]>>  : never
  } 
    : Table
  : Table


  type TableCountArgs = Merge<
    Omit<TableFindManyArgs, 'select' | 'include'> & {
      select?: TableCountAggregateInputType | true
    }
  >

  export interface TableDelegate {
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFindUniqueArgs>(
      args: SelectSubset<T, TableFindUniqueArgs>
    ): CheckSelect<T, Prisma__TableClient<Table | null>, Prisma__TableClient<TableGetPayload<T> | null>>

    /**
     * Find the first Table that matches the filter.
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFindFirstArgs>(
      args?: SelectSubset<T, TableFindFirstArgs>
    ): CheckSelect<T, Prisma__TableClient<Table | null>, Prisma__TableClient<TableGetPayload<T> | null>>

    /**
     * Find zero or more Tables that matches the filter.
     * @param {TableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TableFindManyArgs>(
      args?: SelectSubset<T, TableFindManyArgs>
    ): CheckSelect<T, Promise<Array<Table>>, Promise<Array<TableGetPayload<T>>>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
    **/
    create<T extends TableCreateArgs>(
      args: SelectSubset<T, TableCreateArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
    **/
    delete<T extends TableDeleteArgs>(
      args: SelectSubset<T, TableDeleteArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableUpdateArgs>(
      args: SelectSubset<T, TableUpdateArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableDeleteManyArgs>(
      args?: SelectSubset<T, TableDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Tables.
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableUpdateManyArgs>(
      args: SelectSubset<T, TableUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
    **/
    upsert<T extends TableUpsertArgs>(
      args: SelectSubset<T, TableUpsertArgs>
    ): CheckSelect<T, Prisma__TableClient<Table>, Prisma__TableClient<TableGetPayload<T>>>

    /**
     * Count the number of Tables.
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Promise<GetTableAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TableClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    parlour<T extends ParlourArgs = {}>(args?: Subset<T, ParlourArgs>): CheckSelect<T, Prisma__ParlourClient<Parlour | null>, Prisma__ParlourClient<ParlourGetPayload<T> | null>>;

    players<T extends PlayerFindManyArgs = {}>(args?: Subset<T, PlayerFindManyArgs>): CheckSelect<T, Promise<Array<Player>>, Promise<Array<PlayerGetPayload<T>>>>;

    Game<T extends GameFindManyArgs = {}>(args?: Subset<T, GameFindManyArgs>): CheckSelect<T, Promise<Array<Game>>, Promise<Array<GameGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * Throw an Error if a Table can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Table to fetch.
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table findFirst
   */
  export type TableFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * Throw an Error if a Table can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Table to fetch.
    **/
    where?: TableWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tables to fetch.
    **/
    orderBy?: Enumerable<TableOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Tables.
    **/
    distinct?: Enumerable<TableScalarFieldEnum>
  }


  /**
   * Table findMany
   */
  export type TableFindManyArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * Filter, which Tables to fetch.
    **/
    where?: TableWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Tables to fetch.
    **/
    orderBy?: Enumerable<TableOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
    **/
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
    **/
    skip?: number
    distinct?: Enumerable<TableScalarFieldEnum>
  }


  /**
   * Table create
   */
  export type TableCreateArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * The data needed to create a Table.
    **/
    data: XOR<TableUncheckedCreateInput, TableCreateInput>
  }


  /**
   * Table update
   */
  export type TableUpdateArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * The data needed to update a Table.
    **/
    data: XOR<TableUncheckedUpdateInput, TableUpdateInput>
    /**
     * Choose, which Table to update.
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs = {
    data: XOR<TableUncheckedUpdateManyInput, TableUpdateManyMutationInput>
    where?: TableWhereInput
  }


  /**
   * Table upsert
   */
  export type TableUpsertArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * The filter to search for the Table to update in case it exists.
    **/
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
    **/
    create: XOR<TableUncheckedCreateInput, TableCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<TableUncheckedUpdateInput, TableUpdateInput>
  }


  /**
   * Table delete
   */
  export type TableDeleteArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
    /**
     * Filter which Table to delete.
    **/
    where: TableWhereUniqueInput
  }


  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs = {
    where?: TableWhereInput
  }


  /**
   * Table without action
   */
  export type TableArgs = {
    /**
     * Select specific fields to fetch from the Table
    **/
    select?: TableSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: TableInclude | null
  }



  /**
   * Model Player
   */


  export type AggregatePlayer = {
    count: PlayerCountAggregateOutputType | null
    avg: PlayerAvgAggregateOutputType | null
    sum: PlayerSumAggregateOutputType | null
    min: PlayerMinAggregateOutputType | null
    max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    seat: number
  }

  export type PlayerSumAggregateOutputType = {
    seat: number
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    seat: number
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
    guestId: string | null
    staffId: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    seat: number
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
    guestId: string | null
    staffId: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number | null
    seat: number
    createdAt: number | null
    updatedAt: number | null
    tableId: number | null
    guestId: number | null
    staffId: number | null
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    seat?: true
  }

  export type PlayerSumAggregateInputType = {
    seat?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    seat?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    guestId?: true
    staffId?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    seat?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    guestId?: true
    staffId?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    seat?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    guestId?: true
    staffId?: true
    _all?: true
  }

  export type PlayerAggregateArgs = {
    /**
     * Filter which Player to aggregate.
    **/
    where?: PlayerWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Players to fetch.
    **/
    orderBy?: Enumerable<PlayerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayer]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }



  export type PlayerSelect = {
    id?: boolean
    seat?: boolean
    table?: boolean | TableArgs
    guest?: boolean | GuestArgs
    staff?: boolean | StaffArgs
    createdAt?: boolean
    updatedAt?: boolean
    GameResult?: boolean | GameResultFindManyArgs
    tableId?: boolean
    guestId?: boolean
    staffId?: boolean
  }

  export type PlayerInclude = {
    table?: boolean | TableArgs
    guest?: boolean | GuestArgs
    staff?: boolean | StaffArgs
    GameResult?: boolean | GameResultFindManyArgs
  }

  export type PlayerGetPayload<
    S extends boolean | null | undefined | PlayerArgs,
    U = keyof S
      > = S extends true
        ? Player
    : S extends undefined
    ? never
    : S extends PlayerArgs | PlayerFindManyArgs
    ?'include' extends U
    ? Player  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'table'
        ? TableGetPayload<S['include'][P]> :
        P extends 'guest'
        ? GuestGetPayload<S['include'][P]> | null :
        P extends 'staff'
        ? StaffGetPayload<S['include'][P]> | null :
        P extends 'GameResult'
        ? Array < GameResultGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Player ?Player [P]
  : 
          P extends 'table'
        ? TableGetPayload<S['select'][P]> :
        P extends 'guest'
        ? GuestGetPayload<S['select'][P]> | null :
        P extends 'staff'
        ? StaffGetPayload<S['select'][P]> | null :
        P extends 'GameResult'
        ? Array < GameResultGetPayload<S['select'][P]>>  : never
  } 
    : Player
  : Player


  type PlayerCountArgs = Merge<
    Omit<PlayerFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCountAggregateInputType | true
    }
  >

  export interface PlayerDelegate {
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs>(
      args: SelectSubset<T, PlayerFindUniqueArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player | null>, Prisma__PlayerClient<PlayerGetPayload<T> | null>>

    /**
     * Find the first Player that matches the filter.
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs>(
      args?: SelectSubset<T, PlayerFindFirstArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player | null>, Prisma__PlayerClient<PlayerGetPayload<T> | null>>

    /**
     * Find zero or more Players that matches the filter.
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs>(
      args?: SelectSubset<T, PlayerFindManyArgs>
    ): CheckSelect<T, Promise<Array<Player>>, Promise<Array<PlayerGetPayload<T>>>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs>(
      args: SelectSubset<T, PlayerCreateArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs>(
      args: SelectSubset<T, PlayerDeleteArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs>(
      args: SelectSubset<T, PlayerUpdateArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs>(
      args?: SelectSubset<T, PlayerDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Players.
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs>(
      args: SelectSubset<T, PlayerUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs>(
      args: SelectSubset<T, PlayerUpsertArgs>
    ): CheckSelect<T, Prisma__PlayerClient<Player>, Prisma__PlayerClient<PlayerGetPayload<T>>>

    /**
     * Count the number of Players.
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Promise<GetPlayerAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlayerClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    table<T extends TableArgs = {}>(args?: Subset<T, TableArgs>): CheckSelect<T, Prisma__TableClient<Table | null>, Prisma__TableClient<TableGetPayload<T> | null>>;

    guest<T extends GuestArgs = {}>(args?: Subset<T, GuestArgs>): CheckSelect<T, Prisma__GuestClient<Guest | null>, Prisma__GuestClient<GuestGetPayload<T> | null>>;

    staff<T extends StaffArgs = {}>(args?: Subset<T, StaffArgs>): CheckSelect<T, Prisma__StaffClient<Staff | null>, Prisma__StaffClient<StaffGetPayload<T> | null>>;

    GameResult<T extends GameResultFindManyArgs = {}>(args?: Subset<T, GameResultFindManyArgs>): CheckSelect<T, Promise<Array<GameResult>>, Promise<Array<GameResultGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * Throw an Error if a Player can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Player to fetch.
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * Throw an Error if a Player can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Player to fetch.
    **/
    where?: PlayerWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Players to fetch.
    **/
    orderBy?: Enumerable<PlayerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Players.
    **/
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * Filter, which Players to fetch.
    **/
    where?: PlayerWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Players to fetch.
    **/
    orderBy?: Enumerable<PlayerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
    **/
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
    **/
    skip?: number
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to create a Player.
    **/
    data: XOR<PlayerUncheckedCreateInput, PlayerCreateInput>
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * The data needed to update a Player.
    **/
    data: XOR<PlayerUncheckedUpdateInput, PlayerUpdateInput>
    /**
     * Choose, which Player to update.
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs = {
    data: XOR<PlayerUncheckedUpdateManyInput, PlayerUpdateManyMutationInput>
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * The filter to search for the Player to update in case it exists.
    **/
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
    **/
    create: XOR<PlayerUncheckedCreateInput, PlayerCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<PlayerUncheckedUpdateInput, PlayerUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
    /**
     * Filter which Player to delete.
    **/
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs = {
    where?: PlayerWhereInput
  }


  /**
   * Player without action
   */
  export type PlayerArgs = {
    /**
     * Select specific fields to fetch from the Player
    **/
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: PlayerInclude | null
  }



  /**
   * Model Game
   */


  export type AggregateGame = {
    count: GameCountAggregateOutputType | null
    avg: GameAvgAggregateOutputType | null
    sum: GameSumAggregateOutputType | null
    min: GameMinAggregateOutputType | null
    max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    firstDealer: number
  }

  export type GameSumAggregateOutputType = {
    firstDealer: number
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    firstDealer: number
    startAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    firstDealer: number
    startAt: Date | null
    endAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number | null
    firstDealer: number
    startAt: number | null
    endAt: number | null
    createdAt: number | null
    updatedAt: number | null
    tableId: number | null
    _all: number
  }


  export type GameAvgAggregateInputType = {
    firstDealer?: true
  }

  export type GameSumAggregateInputType = {
    firstDealer?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    firstDealer?: true
    startAt?: true
    endAt?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    firstDealer?: true
    startAt?: true
    endAt?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    firstDealer?: true
    startAt?: true
    endAt?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
    **/
    where?: GameWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Games to fetch.
    **/
    orderBy?: Enumerable<GameOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
    [P in keyof T & keyof AggregateGame]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }



  export type GameSelect = {
    id?: boolean
    firstDealer?: boolean
    startAt?: boolean
    endAt?: boolean
    table?: boolean | TableArgs
    createdAt?: boolean
    updatedAt?: boolean
    GameResult?: boolean | GameResultFindManyArgs
    tableId?: boolean
  }

  export type GameInclude = {
    table?: boolean | TableArgs
    GameResult?: boolean | GameResultFindManyArgs
  }

  export type GameGetPayload<
    S extends boolean | null | undefined | GameArgs,
    U = keyof S
      > = S extends true
        ? Game
    : S extends undefined
    ? never
    : S extends GameArgs | GameFindManyArgs
    ?'include' extends U
    ? Game  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'table'
        ? TableGetPayload<S['include'][P]> :
        P extends 'GameResult'
        ? Array < GameResultGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Game ?Game [P]
  : 
          P extends 'table'
        ? TableGetPayload<S['select'][P]> :
        P extends 'GameResult'
        ? Array < GameResultGetPayload<S['select'][P]>>  : never
  } 
    : Game
  : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): CheckSelect<T, Prisma__GameClient<Game | null>, Prisma__GameClient<GameGetPayload<T> | null>>

    /**
     * Find the first Game that matches the filter.
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): CheckSelect<T, Prisma__GameClient<Game | null>, Prisma__GameClient<GameGetPayload<T> | null>>

    /**
     * Find zero or more Games that matches the filter.
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): CheckSelect<T, Promise<Array<Game>>, Promise<Array<GameGetPayload<T>>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more Games.
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Count the number of Games.
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Promise<GetGameAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    table<T extends TableArgs = {}>(args?: Subset<T, TableArgs>): CheckSelect<T, Prisma__TableClient<Table | null>, Prisma__TableClient<TableGetPayload<T> | null>>;

    GameResult<T extends GameResultFindManyArgs = {}>(args?: Subset<T, GameResultFindManyArgs>): CheckSelect<T, Promise<Array<GameResult>>, Promise<Array<GameResultGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * Throw an Error if a Game can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Game to fetch.
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game findFirst
   */
  export type GameFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * Throw an Error if a Game can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Game to fetch.
    **/
    where?: GameWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Games to fetch.
    **/
    orderBy?: Enumerable<GameOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of Games.
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
    **/
    where?: GameWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of Games to fetch.
    **/
    orderBy?: Enumerable<GameOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
    **/
    data: XOR<GameUncheckedCreateInput, GameCreateInput>
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
    **/
    data: XOR<GameUncheckedUpdateInput, GameUpdateInput>
    /**
     * Choose, which Game to update.
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    data: XOR<GameUncheckedUpdateManyInput, GameUpdateManyMutationInput>
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
    **/
    create: XOR<GameUncheckedCreateInput, GameCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<GameUncheckedUpdateInput, GameUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    where?: GameWhereInput
  }


  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameInclude | null
  }



  /**
   * Model GameResult
   */


  export type AggregateGameResult = {
    count: GameResultCountAggregateOutputType | null
    avg: GameResultAvgAggregateOutputType | null
    sum: GameResultSumAggregateOutputType | null
    min: GameResultMinAggregateOutputType | null
    max: GameResultMaxAggregateOutputType | null
  }

  export type GameResultAvgAggregateOutputType = {
    rank: number
  }

  export type GameResultSumAggregateOutputType = {
    rank: number
  }

  export type GameResultMinAggregateOutputType = {
    id: string | null
    rank: number
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    playerId: string | null
  }

  export type GameResultMaxAggregateOutputType = {
    id: string | null
    rank: number
    createdAt: Date | null
    updatedAt: Date | null
    gameId: string | null
    playerId: string | null
  }

  export type GameResultCountAggregateOutputType = {
    id: number | null
    rank: number
    createdAt: number | null
    updatedAt: number | null
    gameId: number | null
    playerId: number | null
    _all: number
  }


  export type GameResultAvgAggregateInputType = {
    rank?: true
  }

  export type GameResultSumAggregateInputType = {
    rank?: true
  }

  export type GameResultMinAggregateInputType = {
    id?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    playerId?: true
  }

  export type GameResultMaxAggregateInputType = {
    id?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    playerId?: true
  }

  export type GameResultCountAggregateInputType = {
    id?: true
    rank?: true
    createdAt?: true
    updatedAt?: true
    gameId?: true
    playerId?: true
    _all?: true
  }

  export type GameResultAggregateArgs = {
    /**
     * Filter which GameResult to aggregate.
    **/
    where?: GameResultWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of GameResults to fetch.
    **/
    orderBy?: Enumerable<GameResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameResults
    **/
    count?: true | GameResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: GameResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: GameResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: GameResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: GameResultMaxAggregateInputType
  }

  export type GetGameResultAggregateType<T extends GameResultAggregateArgs> = {
    [P in keyof T & keyof AggregateGameResult]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameResult[P]>
      : GetScalarType<T[P], AggregateGameResult[P]>
  }



  export type GameResultSelect = {
    id?: boolean
    rank?: boolean
    game?: boolean | GameArgs
    player?: boolean | PlayerArgs
    createdAt?: boolean
    updatedAt?: boolean
    gameId?: boolean
    playerId?: boolean
  }

  export type GameResultInclude = {
    game?: boolean | GameArgs
    player?: boolean | PlayerArgs
  }

  export type GameResultGetPayload<
    S extends boolean | null | undefined | GameResultArgs,
    U = keyof S
      > = S extends true
        ? GameResult
    : S extends undefined
    ? never
    : S extends GameResultArgs | GameResultFindManyArgs
    ?'include' extends U
    ? GameResult  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'game'
        ? GameGetPayload<S['include'][P]> :
        P extends 'player'
        ? PlayerGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameResult ?GameResult [P]
  : 
          P extends 'game'
        ? GameGetPayload<S['select'][P]> :
        P extends 'player'
        ? PlayerGetPayload<S['select'][P]> : never
  } 
    : GameResult
  : GameResult


  type GameResultCountArgs = Merge<
    Omit<GameResultFindManyArgs, 'select' | 'include'> & {
      select?: GameResultCountAggregateInputType | true
    }
  >

  export interface GameResultDelegate {
    /**
     * Find zero or one GameResult that matches the filter.
     * @param {GameResultFindUniqueArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameResultFindUniqueArgs>(
      args: SelectSubset<T, GameResultFindUniqueArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult | null>, Prisma__GameResultClient<GameResultGetPayload<T> | null>>

    /**
     * Find the first GameResult that matches the filter.
     * @param {GameResultFindFirstArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameResultFindFirstArgs>(
      args?: SelectSubset<T, GameResultFindFirstArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult | null>, Prisma__GameResultClient<GameResultGetPayload<T> | null>>

    /**
     * Find zero or more GameResults that matches the filter.
     * @param {GameResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameResults
     * const gameResults = await prisma.gameResult.findMany()
     * 
     * // Get first 10 GameResults
     * const gameResults = await prisma.gameResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameResultWithIdOnly = await prisma.gameResult.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameResultFindManyArgs>(
      args?: SelectSubset<T, GameResultFindManyArgs>
    ): CheckSelect<T, Promise<Array<GameResult>>, Promise<Array<GameResultGetPayload<T>>>>

    /**
     * Create a GameResult.
     * @param {GameResultCreateArgs} args - Arguments to create a GameResult.
     * @example
     * // Create one GameResult
     * const GameResult = await prisma.gameResult.create({
     *   data: {
     *     // ... data to create a GameResult
     *   }
     * })
     * 
    **/
    create<T extends GameResultCreateArgs>(
      args: SelectSubset<T, GameResultCreateArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult>, Prisma__GameResultClient<GameResultGetPayload<T>>>

    /**
     * Delete a GameResult.
     * @param {GameResultDeleteArgs} args - Arguments to delete one GameResult.
     * @example
     * // Delete one GameResult
     * const GameResult = await prisma.gameResult.delete({
     *   where: {
     *     // ... filter to delete one GameResult
     *   }
     * })
     * 
    **/
    delete<T extends GameResultDeleteArgs>(
      args: SelectSubset<T, GameResultDeleteArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult>, Prisma__GameResultClient<GameResultGetPayload<T>>>

    /**
     * Update one GameResult.
     * @param {GameResultUpdateArgs} args - Arguments to update one GameResult.
     * @example
     * // Update one GameResult
     * const gameResult = await prisma.gameResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameResultUpdateArgs>(
      args: SelectSubset<T, GameResultUpdateArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult>, Prisma__GameResultClient<GameResultGetPayload<T>>>

    /**
     * Delete zero or more GameResults.
     * @param {GameResultDeleteManyArgs} args - Arguments to filter GameResults to delete.
     * @example
     * // Delete a few GameResults
     * const { count } = await prisma.gameResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameResultDeleteManyArgs>(
      args?: SelectSubset<T, GameResultDeleteManyArgs>
    ): Promise<BatchPayload>

    /**
     * Update zero or more GameResults.
     * @param {GameResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameResults
     * const gameResult = await prisma.gameResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameResultUpdateManyArgs>(
      args: SelectSubset<T, GameResultUpdateManyArgs>
    ): Promise<BatchPayload>

    /**
     * Create or update one GameResult.
     * @param {GameResultUpsertArgs} args - Arguments to update or create a GameResult.
     * @example
     * // Update or create a GameResult
     * const gameResult = await prisma.gameResult.upsert({
     *   create: {
     *     // ... data to create a GameResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameResult we want to update
     *   }
     * })
    **/
    upsert<T extends GameResultUpsertArgs>(
      args: SelectSubset<T, GameResultUpsertArgs>
    ): CheckSelect<T, Prisma__GameResultClient<GameResult>, Prisma__GameResultClient<GameResultGetPayload<T>>>

    /**
     * Count the number of GameResults.
     * @param {GameResultCountArgs} args - Arguments to filter GameResults to count.
     * @example
     * // Count the number of GameResults
     * const count = await prisma.gameResult.count({
     *   where: {
     *     // ... the filter for the GameResults we want to count
     *   }
     * })
    **/
    count<T extends GameResultCountArgs>(
      args?: Subset<T, GameResultCountArgs>,
    ): Promise<
      T extends Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameResult.
     * @param {GameResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends GameResultAggregateArgs>(args: Subset<T, GameResultAggregateArgs>): Promise<GetGameResultAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for GameResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameResultClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    game<T extends GameArgs = {}>(args?: Subset<T, GameArgs>): CheckSelect<T, Prisma__GameClient<Game | null>, Prisma__GameClient<GameGetPayload<T> | null>>;

    player<T extends PlayerArgs = {}>(args?: Subset<T, PlayerArgs>): CheckSelect<T, Prisma__PlayerClient<Player | null>, Prisma__PlayerClient<PlayerGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GameResult findUnique
   */
  export type GameResultFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * Throw an Error if a GameResult can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameResult to fetch.
    **/
    where: GameResultWhereUniqueInput
  }


  /**
   * GameResult findFirst
   */
  export type GameResultFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * Throw an Error if a GameResult can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameResult to fetch.
    **/
    where?: GameResultWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of GameResults to fetch.
    **/
    orderBy?: Enumerable<GameResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameResults.
    **/
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
    **/
    skip?: number
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs
     * 
     * Filter by unique combinations of GameResults.
    **/
    distinct?: Enumerable<GameResultScalarFieldEnum>
  }


  /**
   * GameResult findMany
   */
  export type GameResultFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * Filter, which GameResults to fetch.
    **/
    where?: GameResultWhereInput
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs
     * 
     * Determine the order of GameResults to fetch.
    **/
    orderBy?: Enumerable<GameResultOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameResults.
    **/
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
    **/
    skip?: number
    distinct?: Enumerable<GameResultScalarFieldEnum>
  }


  /**
   * GameResult create
   */
  export type GameResultCreateArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * The data needed to create a GameResult.
    **/
    data: XOR<GameResultUncheckedCreateInput, GameResultCreateInput>
  }


  /**
   * GameResult update
   */
  export type GameResultUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * The data needed to update a GameResult.
    **/
    data: XOR<GameResultUncheckedUpdateInput, GameResultUpdateInput>
    /**
     * Choose, which GameResult to update.
    **/
    where: GameResultWhereUniqueInput
  }


  /**
   * GameResult updateMany
   */
  export type GameResultUpdateManyArgs = {
    data: XOR<GameResultUncheckedUpdateManyInput, GameResultUpdateManyMutationInput>
    where?: GameResultWhereInput
  }


  /**
   * GameResult upsert
   */
  export type GameResultUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * The filter to search for the GameResult to update in case it exists.
    **/
    where: GameResultWhereUniqueInput
    /**
     * In case the GameResult found by the `where` argument doesn't exist, create a new GameResult with this data.
    **/
    create: XOR<GameResultUncheckedCreateInput, GameResultCreateInput>
    /**
     * In case the GameResult was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<GameResultUncheckedUpdateInput, GameResultUpdateInput>
  }


  /**
   * GameResult delete
   */
  export type GameResultDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
    /**
     * Filter which GameResult to delete.
    **/
    where: GameResultWhereUniqueInput
  }


  /**
   * GameResult deleteMany
   */
  export type GameResultDeleteManyArgs = {
    where?: GameResultWhereInput
  }


  /**
   * GameResult without action
   */
  export type GameResultArgs = {
    /**
     * Select specific fields to fetch from the GameResult
    **/
    select?: GameResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: GameResultInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ParlourScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type ParlourScalarFieldEnum = (typeof ParlourScalarFieldEnum)[keyof typeof ParlourScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    lastName: 'lastName',
    firstName: 'firstName',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    lastName: 'lastName',
    firstName: 'firstName',
    gender: 'gender',
    email: 'email',
    address: 'address',
    rewardPoints: 'rewardPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parlourId: 'parlourId'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    seat: 'seat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId',
    guestId: 'guestId',
    staffId: 'staffId'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    firstDealer: 'firstDealer',
    startAt: 'startAt',
    endAt: 'endAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameResultScalarFieldEnum: {
    id: 'id',
    rank: 'rank',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gameId: 'gameId',
    playerId: 'playerId'
  };

  export type GameResultScalarFieldEnum = (typeof GameResultScalarFieldEnum)[keyof typeof GameResultScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: Enumerable<OrganizationWhereInput>
    OR?: Enumerable<OrganizationWhereInput>
    NOT?: Enumerable<OrganizationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Parlour?: ParlourListRelationFilter
    Staff?: StaffListRelationFilter
    Guest?: GuestListRelationFilter
  }

  export type OrganizationOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationWhereUniqueInput = {
    id?: string
  }

  export type ParlourWhereInput = {
    AND?: Enumerable<ParlourWhereInput>
    OR?: Enumerable<ParlourWhereInput>
    NOT?: Enumerable<ParlourWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    organization?: XOR<OrganizationWhereInput, OrganizationRelationFilter>
    staffs?: StaffListRelationFilter
    guests?: GuestListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Table?: TableListRelationFilter
    organizationId?: StringFilter | string
  }

  export type ParlourOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ParlourWhereUniqueInput = {
    id?: string
  }

  export type StaffWhereInput = {
    AND?: Enumerable<StaffWhereInput>
    OR?: Enumerable<StaffWhereInput>
    NOT?: Enumerable<StaffWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    lastName?: StringFilter | string
    firstName?: StringFilter | string
    gender?: IntFilter | number
    organization?: XOR<OrganizationWhereInput, OrganizationRelationFilter>
    parlours?: ParlourListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Player?: PlayerListRelationFilter
    organizationId?: StringFilter | string
  }

  export type StaffOrderByInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type StaffWhereUniqueInput = {
    id?: string
  }

  export type GuestWhereInput = {
    AND?: Enumerable<GuestWhereInput>
    OR?: Enumerable<GuestWhereInput>
    NOT?: Enumerable<GuestWhereInput>
    id?: StringFilter | string
    lastName?: StringFilter | string
    firstName?: StringFilter | string
    gender?: IntFilter | number
    email?: StringFilter | string
    address?: StringFilter | string
    rewardPoints?: IntFilter | number
    organization?: XOR<OrganizationWhereInput, OrganizationRelationFilter>
    parlours?: ParlourListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Player?: PlayerListRelationFilter
    organizationId?: StringFilter | string
  }

  export type GuestOrderByInput = {
    id?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    address?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type GuestWhereUniqueInput = {
    id?: string
  }

  export type TableWhereInput = {
    AND?: Enumerable<TableWhereInput>
    OR?: Enumerable<TableWhereInput>
    NOT?: Enumerable<TableWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    parlour?: XOR<ParlourWhereInput, ParlourRelationFilter>
    players?: PlayerListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Game?: GameListRelationFilter
    parlourId?: StringFilter | string
  }

  export type TableOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parlourId?: SortOrder
  }

  export type TableWhereUniqueInput = {
    id?: string
  }

  export type PlayerWhereInput = {
    AND?: Enumerable<PlayerWhereInput>
    OR?: Enumerable<PlayerWhereInput>
    NOT?: Enumerable<PlayerWhereInput>
    id?: StringFilter | string
    seat?: IntFilter | number
    table?: XOR<TableWhereInput, TableRelationFilter>
    guest?: XOR<GuestWhereInput, GuestRelationFilter> | null
    staff?: XOR<StaffWhereInput, StaffRelationFilter> | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    GameResult?: GameResultListRelationFilter
    tableId?: StringFilter | string
    guestId?: StringNullableFilter | string | null
    staffId?: StringNullableFilter | string | null
  }

  export type PlayerOrderByInput = {
    id?: SortOrder
    seat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    guestId?: SortOrder
    staffId?: SortOrder
  }

  export type PlayerWhereUniqueInput = {
    id?: string
  }

  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: StringFilter | string
    firstDealer?: IntFilter | number
    startAt?: DateTimeFilter | Date | string
    endAt?: DateTimeFilter | Date | string
    table?: XOR<TableWhereInput, TableRelationFilter>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    GameResult?: GameResultListRelationFilter
    tableId?: StringFilter | string
  }

  export type GameOrderByInput = {
    id?: SortOrder
    firstDealer?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type GameWhereUniqueInput = {
    id?: string
  }

  export type GameResultWhereInput = {
    AND?: Enumerable<GameResultWhereInput>
    OR?: Enumerable<GameResultWhereInput>
    NOT?: Enumerable<GameResultWhereInput>
    id?: StringFilter | string
    rank?: IntFilter | number
    game?: XOR<GameWhereInput, GameRelationFilter>
    player?: XOR<PlayerWhereInput, PlayerRelationFilter>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    gameId?: StringFilter | string
    playerId?: StringFilter | string
  }

  export type GameResultOrderByInput = {
    id?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
  }

  export type GameResultWhereUniqueInput = {
    id?: string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourCreateManyWithoutOrganizationInput
    Staff?: StaffCreateManyWithoutOrganizationInput
    Guest?: GuestCreateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourUncheckedCreateManyWithoutOrganizationInput
    Staff?: StaffUncheckedCreateManyWithoutOrganizationInput
    Guest?: GuestUncheckedCreateManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUpdateManyWithoutOrganizationInput
    Staff?: StaffUpdateManyWithoutOrganizationInput
    Guest?: GuestUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUncheckedUpdateManyWithoutOrganizationInput
    Staff?: StaffUncheckedUpdateManyWithoutOrganizationInput
    Guest?: GuestUncheckedUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParlourCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutParlourInput
    staffs?: StaffCreateManyWithoutParloursInput
    guests?: GuestCreateManyWithoutParloursInput
    Table?: TableCreateManyWithoutParlourInput
  }

  export type ParlourUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Table?: TableUncheckedCreateManyWithoutParlourInput
  }

  export type ParlourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutParlourInput
    staffs?: StaffUpdateManyWithoutParloursInput
    guests?: GuestUpdateManyWithoutParloursInput
    Table?: TableUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Table?: TableUncheckedUpdateManyWithoutParlourInput
  }

  export type ParlourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParlourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutStaffInput
    parlours?: ParlourCreateManyWithoutStaffsInput
    Player?: PlayerCreateManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Player?: PlayerUncheckedCreateManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutStaffInput
    parlours?: ParlourUpdateManyWithoutStaffsInput
    Player?: PlayerUpdateManyWithoutStaffInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Player?: PlayerUncheckedUpdateManyWithoutStaffInput
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type GuestCreateInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutGuestInput
    parlours?: ParlourCreateManyWithoutGuestsInput
    Player?: PlayerCreateManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Player?: PlayerUncheckedCreateManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutGuestInput
    parlours?: ParlourUpdateManyWithoutGuestsInput
    Player?: PlayerUpdateManyWithoutGuestInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Player?: PlayerUncheckedUpdateManyWithoutGuestInput
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type TableCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlour: ParlourCreateOneWithoutTableInput
    players?: PlayerCreateManyWithoutTableInput
    Game?: GameCreateManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlourId: string
    players?: PlayerUncheckedCreateManyWithoutTableInput
    Game?: GameUncheckedCreateManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlour?: ParlourUpdateOneRequiredWithoutTableInput
    players?: PlayerUpdateManyWithoutTableInput
    Game?: GameUpdateManyWithoutTableInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlourId?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutTableInput
    Game?: GameUncheckedUpdateManyWithoutTableInput
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlourId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutPlayersInput
    guest?: GuestCreateOneWithoutPlayerInput
    staff?: StaffCreateOneWithoutPlayerInput
    GameResult?: GameResultCreateManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    guestId?: string | null
    staffId?: string | null
    GameResult?: GameResultUncheckedCreateManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutPlayersInput
    guest?: GuestUpdateOneWithoutPlayerInput
    staff?: StaffUpdateOneWithoutPlayerInput
    GameResult?: GameResultUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    GameResult?: GameResultUncheckedUpdateManyWithoutPlayerInput
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutGameInput
    GameResult?: GameResultCreateManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    GameResult?: GameResultUncheckedCreateManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutGameInput
    GameResult?: GameResultUpdateManyWithoutGameInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    GameResult?: GameResultUncheckedUpdateManyWithoutGameInput
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type GameResultCreateInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateOneWithoutGameResultInput
    player: PlayerCreateOneWithoutGameResultInput
  }

  export type GameResultUncheckedCreateInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
    playerId: string
  }

  export type GameResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameResultInput
    player?: PlayerUpdateOneRequiredWithoutGameResultInput
  }

  export type GameResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type GameResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ParlourListRelationFilter = {
    every?: ParlourWhereInput
    some?: ParlourWhereInput
    none?: ParlourWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type ParlourRelationFilter = {
    is?: ParlourWhereInput
    isNot?: ParlourWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type TableRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type GuestRelationFilter = {
    is?: GuestWhereInput | null
    isNot?: GuestWhereInput | null
  }

  export type StaffRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type GameResultListRelationFilter = {
    every?: GameResultWhereInput
    some?: GameResultWhereInput
    none?: GameResultWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type ParlourCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutOrganizationInput>, Enumerable<ParlourCreateWithoutOrganizationInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutorganizationInput>
  }

  export type StaffCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutOrganizationInput>, Enumerable<StaffCreateWithoutOrganizationInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutorganizationInput>
  }

  export type GuestCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutOrganizationInput>, Enumerable<GuestCreateWithoutOrganizationInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutorganizationInput>
  }

  export type ParlourUncheckedCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutOrganizationInput>, Enumerable<ParlourCreateWithoutOrganizationInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutorganizationInput>
  }

  export type StaffUncheckedCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutOrganizationInput>, Enumerable<StaffCreateWithoutOrganizationInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutorganizationInput>
  }

  export type GuestUncheckedCreateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutOrganizationInput>, Enumerable<GuestCreateWithoutOrganizationInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutorganizationInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParlourUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutOrganizationInput>, Enumerable<ParlourCreateWithoutOrganizationInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    set?: Enumerable<ParlourWhereUniqueInput>
    disconnect?: Enumerable<ParlourWhereUniqueInput>
    delete?: Enumerable<ParlourWhereUniqueInput>
    update?: Enumerable<ParlourUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ParlourUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ParlourScalarWhereInput>
    upsert?: Enumerable<ParlourUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutorganizationInput>
  }

  export type StaffUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutOrganizationInput>, Enumerable<StaffCreateWithoutOrganizationInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutorganizationInput>
  }

  export type GuestUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutOrganizationInput>, Enumerable<GuestCreateWithoutOrganizationInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    set?: Enumerable<GuestWhereUniqueInput>
    disconnect?: Enumerable<GuestWhereUniqueInput>
    delete?: Enumerable<GuestWhereUniqueInput>
    update?: Enumerable<GuestUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<GuestUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<GuestScalarWhereInput>
    upsert?: Enumerable<GuestUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutorganizationInput>
  }

  export type ParlourUncheckedUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutOrganizationInput>, Enumerable<ParlourCreateWithoutOrganizationInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    set?: Enumerable<ParlourWhereUniqueInput>
    disconnect?: Enumerable<ParlourWhereUniqueInput>
    delete?: Enumerable<ParlourWhereUniqueInput>
    update?: Enumerable<ParlourUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ParlourUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ParlourScalarWhereInput>
    upsert?: Enumerable<ParlourUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutorganizationInput>
  }

  export type StaffUncheckedUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutOrganizationInput>, Enumerable<StaffCreateWithoutOrganizationInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutorganizationInput>
  }

  export type GuestUncheckedUpdateManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutOrganizationInput>, Enumerable<GuestCreateWithoutOrganizationInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    set?: Enumerable<GuestWhereUniqueInput>
    disconnect?: Enumerable<GuestWhereUniqueInput>
    delete?: Enumerable<GuestWhereUniqueInput>
    update?: Enumerable<GuestUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<GuestUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<GuestScalarWhereInput>
    upsert?: Enumerable<GuestUpsertWithWhereUniqueWithoutOrganizationInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutorganizationInput>
  }

  export type OrganizationCreateOneWithoutParlourInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutParlourInput, OrganizationCreateWithoutParlourInput>
    connect?: OrganizationWhereUniqueInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutParlourInput
  }

  export type StaffCreateManyWithoutParloursInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutParloursInput>, Enumerable<StaffCreateWithoutParloursInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutparloursInput>
  }

  export type GuestCreateManyWithoutParloursInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutParloursInput>, Enumerable<GuestCreateWithoutParloursInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutparloursInput>
  }

  export type TableCreateManyWithoutParlourInput = {
    create?: XOR<Enumerable<TableUncheckedCreateWithoutParlourInput>, Enumerable<TableCreateWithoutParlourInput>>
    connect?: Enumerable<TableWhereUniqueInput>
    connectOrCreate?: Enumerable<TableCreateOrConnectWithoutparlourInput>
  }

  export type TableUncheckedCreateManyWithoutParlourInput = {
    create?: XOR<Enumerable<TableUncheckedCreateWithoutParlourInput>, Enumerable<TableCreateWithoutParlourInput>>
    connect?: Enumerable<TableWhereUniqueInput>
    connectOrCreate?: Enumerable<TableCreateOrConnectWithoutparlourInput>
  }

  export type OrganizationUpdateOneRequiredWithoutParlourInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutParlourInput, OrganizationCreateWithoutParlourInput>
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUncheckedUpdateWithoutParlourInput, OrganizationUpdateWithoutParlourInput>
    upsert?: OrganizationUpsertWithoutParlourInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutParlourInput
  }

  export type StaffUpdateManyWithoutParloursInput = {
    create?: XOR<Enumerable<StaffUncheckedCreateWithoutParloursInput>, Enumerable<StaffCreateWithoutParloursInput>>
    connect?: Enumerable<StaffWhereUniqueInput>
    set?: Enumerable<StaffWhereUniqueInput>
    disconnect?: Enumerable<StaffWhereUniqueInput>
    delete?: Enumerable<StaffWhereUniqueInput>
    update?: Enumerable<StaffUpdateWithWhereUniqueWithoutParloursInput>
    updateMany?: Enumerable<StaffUpdateManyWithWhereWithoutParloursInput>
    deleteMany?: Enumerable<StaffScalarWhereInput>
    upsert?: Enumerable<StaffUpsertWithWhereUniqueWithoutParloursInput>
    connectOrCreate?: Enumerable<StaffCreateOrConnectWithoutparloursInput>
  }

  export type GuestUpdateManyWithoutParloursInput = {
    create?: XOR<Enumerable<GuestUncheckedCreateWithoutParloursInput>, Enumerable<GuestCreateWithoutParloursInput>>
    connect?: Enumerable<GuestWhereUniqueInput>
    set?: Enumerable<GuestWhereUniqueInput>
    disconnect?: Enumerable<GuestWhereUniqueInput>
    delete?: Enumerable<GuestWhereUniqueInput>
    update?: Enumerable<GuestUpdateWithWhereUniqueWithoutParloursInput>
    updateMany?: Enumerable<GuestUpdateManyWithWhereWithoutParloursInput>
    deleteMany?: Enumerable<GuestScalarWhereInput>
    upsert?: Enumerable<GuestUpsertWithWhereUniqueWithoutParloursInput>
    connectOrCreate?: Enumerable<GuestCreateOrConnectWithoutparloursInput>
  }

  export type TableUpdateManyWithoutParlourInput = {
    create?: XOR<Enumerable<TableUncheckedCreateWithoutParlourInput>, Enumerable<TableCreateWithoutParlourInput>>
    connect?: Enumerable<TableWhereUniqueInput>
    set?: Enumerable<TableWhereUniqueInput>
    disconnect?: Enumerable<TableWhereUniqueInput>
    delete?: Enumerable<TableWhereUniqueInput>
    update?: Enumerable<TableUpdateWithWhereUniqueWithoutParlourInput>
    updateMany?: Enumerable<TableUpdateManyWithWhereWithoutParlourInput>
    deleteMany?: Enumerable<TableScalarWhereInput>
    upsert?: Enumerable<TableUpsertWithWhereUniqueWithoutParlourInput>
    connectOrCreate?: Enumerable<TableCreateOrConnectWithoutparlourInput>
  }

  export type TableUncheckedUpdateManyWithoutParlourInput = {
    create?: XOR<Enumerable<TableUncheckedCreateWithoutParlourInput>, Enumerable<TableCreateWithoutParlourInput>>
    connect?: Enumerable<TableWhereUniqueInput>
    set?: Enumerable<TableWhereUniqueInput>
    disconnect?: Enumerable<TableWhereUniqueInput>
    delete?: Enumerable<TableWhereUniqueInput>
    update?: Enumerable<TableUpdateWithWhereUniqueWithoutParlourInput>
    updateMany?: Enumerable<TableUpdateManyWithWhereWithoutParlourInput>
    deleteMany?: Enumerable<TableScalarWhereInput>
    upsert?: Enumerable<TableUpsertWithWhereUniqueWithoutParlourInput>
    connectOrCreate?: Enumerable<TableCreateOrConnectWithoutparlourInput>
  }

  export type OrganizationCreateOneWithoutStaffInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutStaffInput, OrganizationCreateWithoutStaffInput>
    connect?: OrganizationWhereUniqueInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutStaffInput
  }

  export type ParlourCreateManyWithoutStaffsInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutStaffsInput>, Enumerable<ParlourCreateWithoutStaffsInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutstaffsInput>
  }

  export type PlayerCreateManyWithoutStaffInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutStaffInput>, Enumerable<PlayerCreateWithoutStaffInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutstaffInput>
  }

  export type PlayerUncheckedCreateManyWithoutStaffInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutStaffInput>, Enumerable<PlayerCreateWithoutStaffInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutstaffInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutStaffInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutStaffInput, OrganizationCreateWithoutStaffInput>
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUncheckedUpdateWithoutStaffInput, OrganizationUpdateWithoutStaffInput>
    upsert?: OrganizationUpsertWithoutStaffInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutStaffInput
  }

  export type ParlourUpdateManyWithoutStaffsInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutStaffsInput>, Enumerable<ParlourCreateWithoutStaffsInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    set?: Enumerable<ParlourWhereUniqueInput>
    disconnect?: Enumerable<ParlourWhereUniqueInput>
    delete?: Enumerable<ParlourWhereUniqueInput>
    update?: Enumerable<ParlourUpdateWithWhereUniqueWithoutStaffsInput>
    updateMany?: Enumerable<ParlourUpdateManyWithWhereWithoutStaffsInput>
    deleteMany?: Enumerable<ParlourScalarWhereInput>
    upsert?: Enumerable<ParlourUpsertWithWhereUniqueWithoutStaffsInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutstaffsInput>
  }

  export type PlayerUpdateManyWithoutStaffInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutStaffInput>, Enumerable<PlayerCreateWithoutStaffInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutStaffInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutstaffInput>
  }

  export type PlayerUncheckedUpdateManyWithoutStaffInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutStaffInput>, Enumerable<PlayerCreateWithoutStaffInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutStaffInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutStaffInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutStaffInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutstaffInput>
  }

  export type OrganizationCreateOneWithoutGuestInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutGuestInput, OrganizationCreateWithoutGuestInput>
    connect?: OrganizationWhereUniqueInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutGuestInput
  }

  export type ParlourCreateManyWithoutGuestsInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutGuestsInput>, Enumerable<ParlourCreateWithoutGuestsInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutguestsInput>
  }

  export type PlayerCreateManyWithoutGuestInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutGuestInput>, Enumerable<PlayerCreateWithoutGuestInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutguestInput>
  }

  export type PlayerUncheckedCreateManyWithoutGuestInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutGuestInput>, Enumerable<PlayerCreateWithoutGuestInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutguestInput>
  }

  export type OrganizationUpdateOneRequiredWithoutGuestInput = {
    create?: XOR<OrganizationUncheckedCreateWithoutGuestInput, OrganizationCreateWithoutGuestInput>
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUncheckedUpdateWithoutGuestInput, OrganizationUpdateWithoutGuestInput>
    upsert?: OrganizationUpsertWithoutGuestInput
    connectOrCreate?: OrganizationCreateOrConnectWithoutGuestInput
  }

  export type ParlourUpdateManyWithoutGuestsInput = {
    create?: XOR<Enumerable<ParlourUncheckedCreateWithoutGuestsInput>, Enumerable<ParlourCreateWithoutGuestsInput>>
    connect?: Enumerable<ParlourWhereUniqueInput>
    set?: Enumerable<ParlourWhereUniqueInput>
    disconnect?: Enumerable<ParlourWhereUniqueInput>
    delete?: Enumerable<ParlourWhereUniqueInput>
    update?: Enumerable<ParlourUpdateWithWhereUniqueWithoutGuestsInput>
    updateMany?: Enumerable<ParlourUpdateManyWithWhereWithoutGuestsInput>
    deleteMany?: Enumerable<ParlourScalarWhereInput>
    upsert?: Enumerable<ParlourUpsertWithWhereUniqueWithoutGuestsInput>
    connectOrCreate?: Enumerable<ParlourCreateOrConnectWithoutguestsInput>
  }

  export type PlayerUpdateManyWithoutGuestInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutGuestInput>, Enumerable<PlayerCreateWithoutGuestInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutGuestInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutguestInput>
  }

  export type PlayerUncheckedUpdateManyWithoutGuestInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutGuestInput>, Enumerable<PlayerCreateWithoutGuestInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutGuestInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutGuestInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutGuestInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithoutguestInput>
  }

  export type ParlourCreateOneWithoutTableInput = {
    create?: XOR<ParlourUncheckedCreateWithoutTableInput, ParlourCreateWithoutTableInput>
    connect?: ParlourWhereUniqueInput
    connectOrCreate?: ParlourCreateOrConnectWithoutTableInput
  }

  export type PlayerCreateManyWithoutTableInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutTableInput>, Enumerable<PlayerCreateWithoutTableInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithouttableInput>
  }

  export type GameCreateManyWithoutTableInput = {
    create?: XOR<Enumerable<GameUncheckedCreateWithoutTableInput>, Enumerable<GameCreateWithoutTableInput>>
    connect?: Enumerable<GameWhereUniqueInput>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithouttableInput>
  }

  export type PlayerUncheckedCreateManyWithoutTableInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutTableInput>, Enumerable<PlayerCreateWithoutTableInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithouttableInput>
  }

  export type GameUncheckedCreateManyWithoutTableInput = {
    create?: XOR<Enumerable<GameUncheckedCreateWithoutTableInput>, Enumerable<GameCreateWithoutTableInput>>
    connect?: Enumerable<GameWhereUniqueInput>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithouttableInput>
  }

  export type ParlourUpdateOneRequiredWithoutTableInput = {
    create?: XOR<ParlourUncheckedCreateWithoutTableInput, ParlourCreateWithoutTableInput>
    connect?: ParlourWhereUniqueInput
    update?: XOR<ParlourUncheckedUpdateWithoutTableInput, ParlourUpdateWithoutTableInput>
    upsert?: ParlourUpsertWithoutTableInput
    connectOrCreate?: ParlourCreateOrConnectWithoutTableInput
  }

  export type PlayerUpdateManyWithoutTableInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutTableInput>, Enumerable<PlayerCreateWithoutTableInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutTableInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithouttableInput>
  }

  export type GameUpdateManyWithoutTableInput = {
    create?: XOR<Enumerable<GameUncheckedCreateWithoutTableInput>, Enumerable<GameCreateWithoutTableInput>>
    connect?: Enumerable<GameWhereUniqueInput>
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutTableInput>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithouttableInput>
  }

  export type PlayerUncheckedUpdateManyWithoutTableInput = {
    create?: XOR<Enumerable<PlayerUncheckedCreateWithoutTableInput>, Enumerable<PlayerCreateWithoutTableInput>>
    connect?: Enumerable<PlayerWhereUniqueInput>
    set?: Enumerable<PlayerWhereUniqueInput>
    disconnect?: Enumerable<PlayerWhereUniqueInput>
    delete?: Enumerable<PlayerWhereUniqueInput>
    update?: Enumerable<PlayerUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<PlayerUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<PlayerScalarWhereInput>
    upsert?: Enumerable<PlayerUpsertWithWhereUniqueWithoutTableInput>
    connectOrCreate?: Enumerable<PlayerCreateOrConnectWithouttableInput>
  }

  export type GameUncheckedUpdateManyWithoutTableInput = {
    create?: XOR<Enumerable<GameUncheckedCreateWithoutTableInput>, Enumerable<GameCreateWithoutTableInput>>
    connect?: Enumerable<GameWhereUniqueInput>
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutTableInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutTableInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutTableInput>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithouttableInput>
  }

  export type TableCreateOneWithoutPlayersInput = {
    create?: XOR<TableUncheckedCreateWithoutPlayersInput, TableCreateWithoutPlayersInput>
    connect?: TableWhereUniqueInput
    connectOrCreate?: TableCreateOrConnectWithoutplayersInput
  }

  export type GuestCreateOneWithoutPlayerInput = {
    create?: XOR<GuestUncheckedCreateWithoutPlayerInput, GuestCreateWithoutPlayerInput>
    connect?: GuestWhereUniqueInput
    connectOrCreate?: GuestCreateOrConnectWithoutPlayerInput
  }

  export type StaffCreateOneWithoutPlayerInput = {
    create?: XOR<StaffUncheckedCreateWithoutPlayerInput, StaffCreateWithoutPlayerInput>
    connect?: StaffWhereUniqueInput
    connectOrCreate?: StaffCreateOrConnectWithoutPlayerInput
  }

  export type GameResultCreateManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutPlayerInput>, Enumerable<GameResultCreateWithoutPlayerInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutplayerInput>
  }

  export type GameResultUncheckedCreateManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutPlayerInput>, Enumerable<GameResultCreateWithoutPlayerInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutplayerInput>
  }

  export type TableUpdateOneRequiredWithoutPlayersInput = {
    create?: XOR<TableUncheckedCreateWithoutPlayersInput, TableCreateWithoutPlayersInput>
    connect?: TableWhereUniqueInput
    update?: XOR<TableUncheckedUpdateWithoutPlayersInput, TableUpdateWithoutPlayersInput>
    upsert?: TableUpsertWithoutPlayersInput
    connectOrCreate?: TableCreateOrConnectWithoutplayersInput
  }

  export type GuestUpdateOneWithoutPlayerInput = {
    create?: XOR<GuestUncheckedCreateWithoutPlayerInput, GuestCreateWithoutPlayerInput>
    connect?: GuestWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<GuestUncheckedUpdateWithoutPlayerInput, GuestUpdateWithoutPlayerInput>
    upsert?: GuestUpsertWithoutPlayerInput
    connectOrCreate?: GuestCreateOrConnectWithoutPlayerInput
  }

  export type StaffUpdateOneWithoutPlayerInput = {
    create?: XOR<StaffUncheckedCreateWithoutPlayerInput, StaffCreateWithoutPlayerInput>
    connect?: StaffWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<StaffUncheckedUpdateWithoutPlayerInput, StaffUpdateWithoutPlayerInput>
    upsert?: StaffUpsertWithoutPlayerInput
    connectOrCreate?: StaffCreateOrConnectWithoutPlayerInput
  }

  export type GameResultUpdateManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutPlayerInput>, Enumerable<GameResultCreateWithoutPlayerInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    set?: Enumerable<GameResultWhereUniqueInput>
    disconnect?: Enumerable<GameResultWhereUniqueInput>
    delete?: Enumerable<GameResultWhereUniqueInput>
    update?: Enumerable<GameResultUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<GameResultUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<GameResultScalarWhereInput>
    upsert?: Enumerable<GameResultUpsertWithWhereUniqueWithoutPlayerInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutplayerInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GameResultUncheckedUpdateManyWithoutPlayerInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutPlayerInput>, Enumerable<GameResultCreateWithoutPlayerInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    set?: Enumerable<GameResultWhereUniqueInput>
    disconnect?: Enumerable<GameResultWhereUniqueInput>
    delete?: Enumerable<GameResultWhereUniqueInput>
    update?: Enumerable<GameResultUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<GameResultUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<GameResultScalarWhereInput>
    upsert?: Enumerable<GameResultUpsertWithWhereUniqueWithoutPlayerInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutplayerInput>
  }

  export type TableCreateOneWithoutGameInput = {
    create?: XOR<TableUncheckedCreateWithoutGameInput, TableCreateWithoutGameInput>
    connect?: TableWhereUniqueInput
    connectOrCreate?: TableCreateOrConnectWithoutGameInput
  }

  export type GameResultCreateManyWithoutGameInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutGameInput>, Enumerable<GameResultCreateWithoutGameInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutgameInput>
  }

  export type GameResultUncheckedCreateManyWithoutGameInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutGameInput>, Enumerable<GameResultCreateWithoutGameInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutgameInput>
  }

  export type TableUpdateOneRequiredWithoutGameInput = {
    create?: XOR<TableUncheckedCreateWithoutGameInput, TableCreateWithoutGameInput>
    connect?: TableWhereUniqueInput
    update?: XOR<TableUncheckedUpdateWithoutGameInput, TableUpdateWithoutGameInput>
    upsert?: TableUpsertWithoutGameInput
    connectOrCreate?: TableCreateOrConnectWithoutGameInput
  }

  export type GameResultUpdateManyWithoutGameInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutGameInput>, Enumerable<GameResultCreateWithoutGameInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    set?: Enumerable<GameResultWhereUniqueInput>
    disconnect?: Enumerable<GameResultWhereUniqueInput>
    delete?: Enumerable<GameResultWhereUniqueInput>
    update?: Enumerable<GameResultUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameResultUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameResultScalarWhereInput>
    upsert?: Enumerable<GameResultUpsertWithWhereUniqueWithoutGameInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutgameInput>
  }

  export type GameResultUncheckedUpdateManyWithoutGameInput = {
    create?: XOR<Enumerable<GameResultUncheckedCreateWithoutGameInput>, Enumerable<GameResultCreateWithoutGameInput>>
    connect?: Enumerable<GameResultWhereUniqueInput>
    set?: Enumerable<GameResultWhereUniqueInput>
    disconnect?: Enumerable<GameResultWhereUniqueInput>
    delete?: Enumerable<GameResultWhereUniqueInput>
    update?: Enumerable<GameResultUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<GameResultUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<GameResultScalarWhereInput>
    upsert?: Enumerable<GameResultUpsertWithWhereUniqueWithoutGameInput>
    connectOrCreate?: Enumerable<GameResultCreateOrConnectWithoutgameInput>
  }

  export type GameCreateOneWithoutGameResultInput = {
    create?: XOR<GameUncheckedCreateWithoutGameResultInput, GameCreateWithoutGameResultInput>
    connect?: GameWhereUniqueInput
    connectOrCreate?: GameCreateOrConnectWithoutGameResultInput
  }

  export type PlayerCreateOneWithoutGameResultInput = {
    create?: XOR<PlayerUncheckedCreateWithoutGameResultInput, PlayerCreateWithoutGameResultInput>
    connect?: PlayerWhereUniqueInput
    connectOrCreate?: PlayerCreateOrConnectWithoutGameResultInput
  }

  export type GameUpdateOneRequiredWithoutGameResultInput = {
    create?: XOR<GameUncheckedCreateWithoutGameResultInput, GameCreateWithoutGameResultInput>
    connect?: GameWhereUniqueInput
    update?: XOR<GameUncheckedUpdateWithoutGameResultInput, GameUpdateWithoutGameResultInput>
    upsert?: GameUpsertWithoutGameResultInput
    connectOrCreate?: GameCreateOrConnectWithoutGameResultInput
  }

  export type PlayerUpdateOneRequiredWithoutGameResultInput = {
    create?: XOR<PlayerUncheckedCreateWithoutGameResultInput, PlayerCreateWithoutGameResultInput>
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUncheckedUpdateWithoutGameResultInput, PlayerUpdateWithoutGameResultInput>
    upsert?: PlayerUpsertWithoutGameResultInput
    connectOrCreate?: PlayerCreateOrConnectWithoutGameResultInput
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type ParlourCreateWithoutOrganizationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staffs?: StaffCreateManyWithoutParloursInput
    guests?: GuestCreateManyWithoutParloursInput
    Table?: TableCreateManyWithoutParlourInput
  }

  export type ParlourUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Table?: TableUncheckedCreateManyWithoutParlourInput
  }

  export type ParlourCreateOrConnectWithoutorganizationInput = {
    where: ParlourWhereUniqueInput
    create: XOR<ParlourUncheckedCreateWithoutOrganizationInput, ParlourCreateWithoutOrganizationInput>
  }

  export type StaffCreateWithoutOrganizationInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parlours?: ParlourCreateManyWithoutStaffsInput
    Player?: PlayerCreateManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutOrganizationInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Player?: PlayerUncheckedCreateManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutorganizationInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffUncheckedCreateWithoutOrganizationInput, StaffCreateWithoutOrganizationInput>
  }

  export type GuestCreateWithoutOrganizationInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parlours?: ParlourCreateManyWithoutGuestsInput
    Player?: PlayerCreateManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutOrganizationInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Player?: PlayerUncheckedCreateManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutorganizationInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestUncheckedCreateWithoutOrganizationInput, GuestCreateWithoutOrganizationInput>
  }

  export type ParlourUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ParlourWhereUniqueInput
    data: XOR<ParlourUncheckedUpdateWithoutOrganizationInput, ParlourUpdateWithoutOrganizationInput>
  }

  export type ParlourUpdateManyWithWhereWithoutOrganizationInput = {
    where: ParlourScalarWhereInput
    data: XOR<ParlourUncheckedUpdateManyWithoutParlourInput, ParlourUpdateManyMutationInput>
  }

  export type ParlourScalarWhereInput = {
    AND?: Enumerable<ParlourScalarWhereInput>
    OR?: Enumerable<ParlourScalarWhereInput>
    NOT?: Enumerable<ParlourScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    organizationId?: StringFilter | string
  }

  export type ParlourUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ParlourWhereUniqueInput
    update: XOR<ParlourUncheckedUpdateWithoutOrganizationInput, ParlourUpdateWithoutOrganizationInput>
    create: XOR<ParlourUncheckedCreateWithoutOrganizationInput, ParlourCreateWithoutOrganizationInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUncheckedUpdateWithoutOrganizationInput, StaffUpdateWithoutOrganizationInput>
  }

  export type StaffUpdateManyWithWhereWithoutOrganizationInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUncheckedUpdateManyWithoutStaffInput, StaffUpdateManyMutationInput>
  }

  export type StaffScalarWhereInput = {
    AND?: Enumerable<StaffScalarWhereInput>
    OR?: Enumerable<StaffScalarWhereInput>
    NOT?: Enumerable<StaffScalarWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    lastName?: StringFilter | string
    firstName?: StringFilter | string
    gender?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    organizationId?: StringFilter | string
  }

  export type StaffUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUncheckedUpdateWithoutOrganizationInput, StaffUpdateWithoutOrganizationInput>
    create: XOR<StaffUncheckedCreateWithoutOrganizationInput, StaffCreateWithoutOrganizationInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUncheckedUpdateWithoutOrganizationInput, GuestUpdateWithoutOrganizationInput>
  }

  export type GuestUpdateManyWithWhereWithoutOrganizationInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUncheckedUpdateManyWithoutGuestInput, GuestUpdateManyMutationInput>
  }

  export type GuestScalarWhereInput = {
    AND?: Enumerable<GuestScalarWhereInput>
    OR?: Enumerable<GuestScalarWhereInput>
    NOT?: Enumerable<GuestScalarWhereInput>
    id?: StringFilter | string
    lastName?: StringFilter | string
    firstName?: StringFilter | string
    gender?: IntFilter | number
    email?: StringFilter | string
    address?: StringFilter | string
    rewardPoints?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    organizationId?: StringFilter | string
  }

  export type GuestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUncheckedUpdateWithoutOrganizationInput, GuestUpdateWithoutOrganizationInput>
    create: XOR<GuestUncheckedCreateWithoutOrganizationInput, GuestCreateWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutParlourInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Staff?: StaffCreateManyWithoutOrganizationInput
    Guest?: GuestCreateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutParlourInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Staff?: StaffUncheckedCreateManyWithoutOrganizationInput
    Guest?: GuestUncheckedCreateManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutParlourInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationUncheckedCreateWithoutParlourInput, OrganizationCreateWithoutParlourInput>
  }

  export type StaffCreateWithoutParloursInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutStaffInput
    Player?: PlayerCreateManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutParloursInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Player?: PlayerUncheckedCreateManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutparloursInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffUncheckedCreateWithoutParloursInput, StaffCreateWithoutParloursInput>
  }

  export type GuestCreateWithoutParloursInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutGuestInput
    Player?: PlayerCreateManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutParloursInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Player?: PlayerUncheckedCreateManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutparloursInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestUncheckedCreateWithoutParloursInput, GuestCreateWithoutParloursInput>
  }

  export type TableCreateWithoutParlourInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateManyWithoutTableInput
    Game?: GameCreateManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutParlourInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateManyWithoutTableInput
    Game?: GameUncheckedCreateManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutparlourInput = {
    where: TableWhereUniqueInput
    create: XOR<TableUncheckedCreateWithoutParlourInput, TableCreateWithoutParlourInput>
  }

  export type OrganizationUpdateWithoutParlourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUpdateManyWithoutOrganizationInput
    Guest?: GuestUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedUpdateWithoutParlourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: StaffUncheckedUpdateManyWithoutOrganizationInput
    Guest?: GuestUncheckedUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUpsertWithoutParlourInput = {
    update: XOR<OrganizationUncheckedUpdateWithoutParlourInput, OrganizationUpdateWithoutParlourInput>
    create: XOR<OrganizationUncheckedCreateWithoutParlourInput, OrganizationCreateWithoutParlourInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutParloursInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUncheckedUpdateWithoutParloursInput, StaffUpdateWithoutParloursInput>
  }

  export type StaffUpdateManyWithWhereWithoutParloursInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUncheckedUpdateManyWithoutStaffsInput, StaffUpdateManyMutationInput>
  }

  export type StaffUpsertWithWhereUniqueWithoutParloursInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUncheckedUpdateWithoutParloursInput, StaffUpdateWithoutParloursInput>
    create: XOR<StaffUncheckedCreateWithoutParloursInput, StaffCreateWithoutParloursInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutParloursInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUncheckedUpdateWithoutParloursInput, GuestUpdateWithoutParloursInput>
  }

  export type GuestUpdateManyWithWhereWithoutParloursInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUncheckedUpdateManyWithoutGuestsInput, GuestUpdateManyMutationInput>
  }

  export type GuestUpsertWithWhereUniqueWithoutParloursInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUncheckedUpdateWithoutParloursInput, GuestUpdateWithoutParloursInput>
    create: XOR<GuestUncheckedCreateWithoutParloursInput, GuestCreateWithoutParloursInput>
  }

  export type TableUpdateWithWhereUniqueWithoutParlourInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUncheckedUpdateWithoutParlourInput, TableUpdateWithoutParlourInput>
  }

  export type TableUpdateManyWithWhereWithoutParlourInput = {
    where: TableScalarWhereInput
    data: XOR<TableUncheckedUpdateManyWithoutTableInput, TableUpdateManyMutationInput>
  }

  export type TableScalarWhereInput = {
    AND?: Enumerable<TableScalarWhereInput>
    OR?: Enumerable<TableScalarWhereInput>
    NOT?: Enumerable<TableScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parlourId?: StringFilter | string
  }

  export type TableUpsertWithWhereUniqueWithoutParlourInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUncheckedUpdateWithoutParlourInput, TableUpdateWithoutParlourInput>
    create: XOR<TableUncheckedCreateWithoutParlourInput, TableCreateWithoutParlourInput>
  }

  export type OrganizationCreateWithoutStaffInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourCreateManyWithoutOrganizationInput
    Guest?: GuestCreateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourUncheckedCreateManyWithoutOrganizationInput
    Guest?: GuestUncheckedCreateManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutStaffInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationUncheckedCreateWithoutStaffInput, OrganizationCreateWithoutStaffInput>
  }

  export type ParlourCreateWithoutStaffsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutParlourInput
    guests?: GuestCreateManyWithoutParloursInput
    Table?: TableCreateManyWithoutParlourInput
  }

  export type ParlourUncheckedCreateWithoutStaffsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Table?: TableUncheckedCreateManyWithoutParlourInput
  }

  export type ParlourCreateOrConnectWithoutstaffsInput = {
    where: ParlourWhereUniqueInput
    create: XOR<ParlourUncheckedCreateWithoutStaffsInput, ParlourCreateWithoutStaffsInput>
  }

  export type PlayerCreateWithoutStaffInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutPlayersInput
    guest?: GuestCreateOneWithoutPlayerInput
    GameResult?: GameResultCreateManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutStaffInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    guestId?: string | null
    GameResult?: GameResultUncheckedCreateManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutstaffInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerUncheckedCreateWithoutStaffInput, PlayerCreateWithoutStaffInput>
  }

  export type OrganizationUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUpdateManyWithoutOrganizationInput
    Guest?: GuestUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUncheckedUpdateManyWithoutOrganizationInput
    Guest?: GuestUncheckedUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUpsertWithoutStaffInput = {
    update: XOR<OrganizationUncheckedUpdateWithoutStaffInput, OrganizationUpdateWithoutStaffInput>
    create: XOR<OrganizationUncheckedCreateWithoutStaffInput, OrganizationCreateWithoutStaffInput>
  }

  export type ParlourUpdateWithWhereUniqueWithoutStaffsInput = {
    where: ParlourWhereUniqueInput
    data: XOR<ParlourUncheckedUpdateWithoutStaffsInput, ParlourUpdateWithoutStaffsInput>
  }

  export type ParlourUpdateManyWithWhereWithoutStaffsInput = {
    where: ParlourScalarWhereInput
    data: XOR<ParlourUncheckedUpdateManyWithoutParloursInput, ParlourUpdateManyMutationInput>
  }

  export type ParlourUpsertWithWhereUniqueWithoutStaffsInput = {
    where: ParlourWhereUniqueInput
    update: XOR<ParlourUncheckedUpdateWithoutStaffsInput, ParlourUpdateWithoutStaffsInput>
    create: XOR<ParlourUncheckedCreateWithoutStaffsInput, ParlourCreateWithoutStaffsInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutStaffInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUncheckedUpdateWithoutStaffInput, PlayerUpdateWithoutStaffInput>
  }

  export type PlayerUpdateManyWithWhereWithoutStaffInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUncheckedUpdateManyWithoutPlayerInput, PlayerUpdateManyMutationInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: Enumerable<PlayerScalarWhereInput>
    OR?: Enumerable<PlayerScalarWhereInput>
    NOT?: Enumerable<PlayerScalarWhereInput>
    id?: StringFilter | string
    seat?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    tableId?: StringFilter | string
    guestId?: StringNullableFilter | string | null
    staffId?: StringNullableFilter | string | null
  }

  export type PlayerUpsertWithWhereUniqueWithoutStaffInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUncheckedUpdateWithoutStaffInput, PlayerUpdateWithoutStaffInput>
    create: XOR<PlayerUncheckedCreateWithoutStaffInput, PlayerCreateWithoutStaffInput>
  }

  export type OrganizationCreateWithoutGuestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourCreateManyWithoutOrganizationInput
    Staff?: StaffCreateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutGuestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Parlour?: ParlourUncheckedCreateManyWithoutOrganizationInput
    Staff?: StaffUncheckedCreateManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutGuestInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationUncheckedCreateWithoutGuestInput, OrganizationCreateWithoutGuestInput>
  }

  export type ParlourCreateWithoutGuestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutParlourInput
    staffs?: StaffCreateManyWithoutParloursInput
    Table?: TableCreateManyWithoutParlourInput
  }

  export type ParlourUncheckedCreateWithoutGuestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
    Table?: TableUncheckedCreateManyWithoutParlourInput
  }

  export type ParlourCreateOrConnectWithoutguestsInput = {
    where: ParlourWhereUniqueInput
    create: XOR<ParlourUncheckedCreateWithoutGuestsInput, ParlourCreateWithoutGuestsInput>
  }

  export type PlayerCreateWithoutGuestInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutPlayersInput
    staff?: StaffCreateOneWithoutPlayerInput
    GameResult?: GameResultCreateManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGuestInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    staffId?: string | null
    GameResult?: GameResultUncheckedCreateManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutguestInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerUncheckedCreateWithoutGuestInput, PlayerCreateWithoutGuestInput>
  }

  export type OrganizationUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUpdateManyWithoutOrganizationInput
    Staff?: StaffUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parlour?: ParlourUncheckedUpdateManyWithoutOrganizationInput
    Staff?: StaffUncheckedUpdateManyWithoutOrganizationInput
  }

  export type OrganizationUpsertWithoutGuestInput = {
    update: XOR<OrganizationUncheckedUpdateWithoutGuestInput, OrganizationUpdateWithoutGuestInput>
    create: XOR<OrganizationUncheckedCreateWithoutGuestInput, OrganizationCreateWithoutGuestInput>
  }

  export type ParlourUpdateWithWhereUniqueWithoutGuestsInput = {
    where: ParlourWhereUniqueInput
    data: XOR<ParlourUncheckedUpdateWithoutGuestsInput, ParlourUpdateWithoutGuestsInput>
  }

  export type ParlourUpdateManyWithWhereWithoutGuestsInput = {
    where: ParlourScalarWhereInput
    data: XOR<ParlourUncheckedUpdateManyWithoutParloursInput, ParlourUpdateManyMutationInput>
  }

  export type ParlourUpsertWithWhereUniqueWithoutGuestsInput = {
    where: ParlourWhereUniqueInput
    update: XOR<ParlourUncheckedUpdateWithoutGuestsInput, ParlourUpdateWithoutGuestsInput>
    create: XOR<ParlourUncheckedCreateWithoutGuestsInput, ParlourCreateWithoutGuestsInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutGuestInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUncheckedUpdateWithoutGuestInput, PlayerUpdateWithoutGuestInput>
  }

  export type PlayerUpdateManyWithWhereWithoutGuestInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUncheckedUpdateManyWithoutPlayerInput, PlayerUpdateManyMutationInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutGuestInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUncheckedUpdateWithoutGuestInput, PlayerUpdateWithoutGuestInput>
    create: XOR<PlayerUncheckedCreateWithoutGuestInput, PlayerCreateWithoutGuestInput>
  }

  export type ParlourCreateWithoutTableInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutParlourInput
    staffs?: StaffCreateManyWithoutParloursInput
    guests?: GuestCreateManyWithoutParloursInput
  }

  export type ParlourUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type ParlourCreateOrConnectWithoutTableInput = {
    where: ParlourWhereUniqueInput
    create: XOR<ParlourUncheckedCreateWithoutTableInput, ParlourCreateWithoutTableInput>
  }

  export type PlayerCreateWithoutTableInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    guest?: GuestCreateOneWithoutPlayerInput
    staff?: StaffCreateOneWithoutPlayerInput
    GameResult?: GameResultCreateManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTableInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId?: string | null
    staffId?: string | null
    GameResult?: GameResultUncheckedCreateManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithouttableInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerUncheckedCreateWithoutTableInput, PlayerCreateWithoutTableInput>
  }

  export type GameCreateWithoutTableInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    GameResult?: GameResultCreateManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTableInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    GameResult?: GameResultUncheckedCreateManyWithoutGameInput
  }

  export type GameCreateOrConnectWithouttableInput = {
    where: GameWhereUniqueInput
    create: XOR<GameUncheckedCreateWithoutTableInput, GameCreateWithoutTableInput>
  }

  export type ParlourUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutParlourInput
    staffs?: StaffUpdateManyWithoutParloursInput
    guests?: GuestUpdateManyWithoutParloursInput
  }

  export type ParlourUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type ParlourUpsertWithoutTableInput = {
    update: XOR<ParlourUncheckedUpdateWithoutTableInput, ParlourUpdateWithoutTableInput>
    create: XOR<ParlourUncheckedCreateWithoutTableInput, ParlourCreateWithoutTableInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTableInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUncheckedUpdateWithoutTableInput, PlayerUpdateWithoutTableInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTableInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUncheckedUpdateManyWithoutPlayersInput, PlayerUpdateManyMutationInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutTableInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUncheckedUpdateWithoutTableInput, PlayerUpdateWithoutTableInput>
    create: XOR<PlayerUncheckedCreateWithoutTableInput, PlayerCreateWithoutTableInput>
  }

  export type GameUpdateWithWhereUniqueWithoutTableInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUncheckedUpdateWithoutTableInput, GameUpdateWithoutTableInput>
  }

  export type GameUpdateManyWithWhereWithoutTableInput = {
    where: GameScalarWhereInput
    data: XOR<GameUncheckedUpdateManyWithoutGameInput, GameUpdateManyMutationInput>
  }

  export type GameScalarWhereInput = {
    AND?: Enumerable<GameScalarWhereInput>
    OR?: Enumerable<GameScalarWhereInput>
    NOT?: Enumerable<GameScalarWhereInput>
    id?: StringFilter | string
    firstDealer?: IntFilter | number
    startAt?: DateTimeFilter | Date | string
    endAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    tableId?: StringFilter | string
  }

  export type GameUpsertWithWhereUniqueWithoutTableInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUncheckedUpdateWithoutTableInput, GameUpdateWithoutTableInput>
    create: XOR<GameUncheckedCreateWithoutTableInput, GameCreateWithoutTableInput>
  }

  export type TableCreateWithoutPlayersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlour: ParlourCreateOneWithoutTableInput
    Game?: GameCreateManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlourId: string
    Game?: GameUncheckedCreateManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutplayersInput = {
    where: TableWhereUniqueInput
    create: XOR<TableUncheckedCreateWithoutPlayersInput, TableCreateWithoutPlayersInput>
  }

  export type GuestCreateWithoutPlayerInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutGuestInput
    parlours?: ParlourCreateManyWithoutGuestsInput
  }

  export type GuestUncheckedCreateWithoutPlayerInput = {
    id?: string
    lastName: string
    firstName: string
    gender: number
    email?: string
    address?: string
    rewardPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type GuestCreateOrConnectWithoutPlayerInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestUncheckedCreateWithoutPlayerInput, GuestCreateWithoutPlayerInput>
  }

  export type StaffCreateWithoutPlayerInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateOneWithoutStaffInput
    parlours?: ParlourCreateManyWithoutStaffsInput
  }

  export type StaffUncheckedCreateWithoutPlayerInput = {
    id?: string
    username: string
    password: string
    lastName: string
    firstName: string
    gender: number
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: string
  }

  export type StaffCreateOrConnectWithoutPlayerInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffUncheckedCreateWithoutPlayerInput, StaffCreateWithoutPlayerInput>
  }

  export type GameResultCreateWithoutPlayerInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateOneWithoutGameResultInput
  }

  export type GameResultUncheckedCreateWithoutPlayerInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gameId: string
  }

  export type GameResultCreateOrConnectWithoutplayerInput = {
    where: GameResultWhereUniqueInput
    create: XOR<GameResultUncheckedCreateWithoutPlayerInput, GameResultCreateWithoutPlayerInput>
  }

  export type TableUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlour?: ParlourUpdateOneRequiredWithoutTableInput
    Game?: GameUpdateManyWithoutTableInput
  }

  export type TableUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlourId?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutTableInput
  }

  export type TableUpsertWithoutPlayersInput = {
    update: XOR<TableUncheckedUpdateWithoutPlayersInput, TableUpdateWithoutPlayersInput>
    create: XOR<TableUncheckedCreateWithoutPlayersInput, TableCreateWithoutPlayersInput>
  }

  export type GuestUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutGuestInput
    parlours?: ParlourUpdateManyWithoutGuestsInput
  }

  export type GuestUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUpsertWithoutPlayerInput = {
    update: XOR<GuestUncheckedUpdateWithoutPlayerInput, GuestUpdateWithoutPlayerInput>
    create: XOR<GuestUncheckedCreateWithoutPlayerInput, GuestCreateWithoutPlayerInput>
  }

  export type StaffUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutStaffInput
    parlours?: ParlourUpdateManyWithoutStaffsInput
  }

  export type StaffUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUpsertWithoutPlayerInput = {
    update: XOR<StaffUncheckedUpdateWithoutPlayerInput, StaffUpdateWithoutPlayerInput>
    create: XOR<StaffUncheckedCreateWithoutPlayerInput, StaffCreateWithoutPlayerInput>
  }

  export type GameResultUpdateWithWhereUniqueWithoutPlayerInput = {
    where: GameResultWhereUniqueInput
    data: XOR<GameResultUncheckedUpdateWithoutPlayerInput, GameResultUpdateWithoutPlayerInput>
  }

  export type GameResultUpdateManyWithWhereWithoutPlayerInput = {
    where: GameResultScalarWhereInput
    data: XOR<GameResultUncheckedUpdateManyWithoutGameResultInput, GameResultUpdateManyMutationInput>
  }

  export type GameResultScalarWhereInput = {
    AND?: Enumerable<GameResultScalarWhereInput>
    OR?: Enumerable<GameResultScalarWhereInput>
    NOT?: Enumerable<GameResultScalarWhereInput>
    id?: StringFilter | string
    rank?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    gameId?: StringFilter | string
    playerId?: StringFilter | string
  }

  export type GameResultUpsertWithWhereUniqueWithoutPlayerInput = {
    where: GameResultWhereUniqueInput
    update: XOR<GameResultUncheckedUpdateWithoutPlayerInput, GameResultUpdateWithoutPlayerInput>
    create: XOR<GameResultUncheckedCreateWithoutPlayerInput, GameResultCreateWithoutPlayerInput>
  }

  export type TableCreateWithoutGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlour: ParlourCreateOneWithoutTableInput
    players?: PlayerCreateManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutGameInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parlourId: string
    players?: PlayerUncheckedCreateManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutGameInput = {
    where: TableWhereUniqueInput
    create: XOR<TableUncheckedCreateWithoutGameInput, TableCreateWithoutGameInput>
  }

  export type GameResultCreateWithoutGameInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    player: PlayerCreateOneWithoutGameResultInput
  }

  export type GameResultUncheckedCreateWithoutGameInput = {
    id?: string
    rank: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playerId: string
  }

  export type GameResultCreateOrConnectWithoutgameInput = {
    where: GameResultWhereUniqueInput
    create: XOR<GameResultUncheckedCreateWithoutGameInput, GameResultCreateWithoutGameInput>
  }

  export type TableUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlour?: ParlourUpdateOneRequiredWithoutTableInput
    players?: PlayerUpdateManyWithoutTableInput
  }

  export type TableUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlourId?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutTableInput
  }

  export type TableUpsertWithoutGameInput = {
    update: XOR<TableUncheckedUpdateWithoutGameInput, TableUpdateWithoutGameInput>
    create: XOR<TableUncheckedCreateWithoutGameInput, TableCreateWithoutGameInput>
  }

  export type GameResultUpdateWithWhereUniqueWithoutGameInput = {
    where: GameResultWhereUniqueInput
    data: XOR<GameResultUncheckedUpdateWithoutGameInput, GameResultUpdateWithoutGameInput>
  }

  export type GameResultUpdateManyWithWhereWithoutGameInput = {
    where: GameResultScalarWhereInput
    data: XOR<GameResultUncheckedUpdateManyWithoutGameResultInput, GameResultUpdateManyMutationInput>
  }

  export type GameResultUpsertWithWhereUniqueWithoutGameInput = {
    where: GameResultWhereUniqueInput
    update: XOR<GameResultUncheckedUpdateWithoutGameInput, GameResultUpdateWithoutGameInput>
    create: XOR<GameResultUncheckedCreateWithoutGameInput, GameResultCreateWithoutGameInput>
  }

  export type GameCreateWithoutGameResultInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameResultInput = {
    id?: string
    firstDealer: number
    startAt: Date | string
    endAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type GameCreateOrConnectWithoutGameResultInput = {
    where: GameWhereUniqueInput
    create: XOR<GameUncheckedCreateWithoutGameResultInput, GameCreateWithoutGameResultInput>
  }

  export type PlayerCreateWithoutGameResultInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateOneWithoutPlayersInput
    guest?: GuestCreateOneWithoutPlayerInput
    staff?: StaffCreateOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGameResultInput = {
    id?: string
    seat: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    guestId?: string | null
    staffId?: string | null
  }

  export type PlayerCreateOrConnectWithoutGameResultInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerUncheckedCreateWithoutGameResultInput, PlayerCreateWithoutGameResultInput>
  }

  export type GameUpdateWithoutGameResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutGameInput
  }

  export type GameUncheckedUpdateWithoutGameResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpsertWithoutGameResultInput = {
    update: XOR<GameUncheckedUpdateWithoutGameResultInput, GameUpdateWithoutGameResultInput>
    create: XOR<GameUncheckedCreateWithoutGameResultInput, GameCreateWithoutGameResultInput>
  }

  export type PlayerUpdateWithoutGameResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutPlayersInput
    guest?: GuestUpdateOneWithoutPlayerInput
    staff?: StaffUpdateOneWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateWithoutGameResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerUpsertWithoutGameResultInput = {
    update: XOR<PlayerUncheckedUpdateWithoutGameResultInput, PlayerUpdateWithoutGameResultInput>
    create: XOR<PlayerUncheckedCreateWithoutGameResultInput, PlayerCreateWithoutGameResultInput>
  }

  export type ParlourUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffs?: StaffUpdateManyWithoutParloursInput
    guests?: GuestUpdateManyWithoutParloursInput
    Table?: TableUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Table?: TableUncheckedUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateManyWithoutParlourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlours?: ParlourUpdateManyWithoutStaffsInput
    Player?: PlayerUpdateManyWithoutStaffInput
  }

  export type StaffUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUncheckedUpdateManyWithoutStaffInput
  }

  export type StaffUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parlours?: ParlourUpdateManyWithoutGuestsInput
    Player?: PlayerUpdateManyWithoutGuestInput
  }

  export type GuestUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Player?: PlayerUncheckedUpdateManyWithoutGuestInput
  }

  export type GuestUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutParloursInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutStaffInput
    Player?: PlayerUpdateManyWithoutStaffInput
  }

  export type StaffUncheckedUpdateWithoutParloursInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Player?: PlayerUncheckedUpdateManyWithoutStaffInput
  }

  export type StaffUncheckedUpdateManyWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUpdateWithoutParloursInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutGuestInput
    Player?: PlayerUpdateManyWithoutGuestInput
  }

  export type GuestUncheckedUpdateWithoutParloursInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Player?: PlayerUncheckedUpdateManyWithoutGuestInput
  }

  export type GuestUncheckedUpdateManyWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    gender?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type TableUpdateWithoutParlourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTableInput
    Game?: GameUpdateManyWithoutTableInput
  }

  export type TableUncheckedUpdateWithoutParlourInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTableInput
    Game?: GameUncheckedUpdateManyWithoutTableInput
  }

  export type TableUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParlourUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutParlourInput
    guests?: GuestUpdateManyWithoutParloursInput
    Table?: TableUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Table?: TableUncheckedUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateManyWithoutParloursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutPlayersInput
    guest?: GuestUpdateOneWithoutPlayerInput
    GameResult?: GameResultUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    GameResult?: GameResultUncheckedUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParlourUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutParlourInput
    staffs?: StaffUpdateManyWithoutParloursInput
    Table?: TableUpdateManyWithoutParlourInput
  }

  export type ParlourUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    Table?: TableUncheckedUpdateManyWithoutParlourInput
  }

  export type PlayerUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutPlayersInput
    staff?: StaffUpdateOneWithoutPlayerInput
    GameResult?: GameResultUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    GameResult?: GameResultUncheckedUpdateManyWithoutPlayerInput
  }

  export type PlayerUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneWithoutPlayerInput
    staff?: StaffUpdateOneWithoutPlayerInput
    GameResult?: GameResultUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
    GameResult?: GameResultUncheckedUpdateManyWithoutPlayerInput
  }

  export type PlayerUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    staffId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameResult?: GameResultUpdateManyWithoutGameInput
  }

  export type GameUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GameResult?: GameResultUncheckedUpdateManyWithoutGameInput
  }

  export type GameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstDealer?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameResultInput
  }

  export type GameResultUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GameResultUncheckedUpdateManyWithoutGameResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type GameResultUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutGameResultInput
  }

  export type GameResultUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}