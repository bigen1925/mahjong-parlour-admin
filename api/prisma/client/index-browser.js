
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.16.0
 * Query Engine version: 854c8ba7f0dce66f115af36af24e66989a8c02a1
 */
Prisma.prismaVersion = {
  client: "2.16.0",
  engine: "854c8ba7f0dce66f115af36af24e66989a8c02a1"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.OrganizationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ParlourScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  organizationId: 'organizationId'
});

exports.Prisma.StaffScalarFieldEnum = makeEnum({
  id: 'id',
  loginId: 'loginId',
  password: 'password',
  lastName: 'lastName',
  firstName: 'firstName',
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  organizationId: 'organizationId'
});

exports.Prisma.GuestScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TableScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  parlourId: 'parlourId'
});

exports.Prisma.PlayerScalarFieldEnum = makeEnum({
  id: 'id',
  seat: 'seat',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tableId: 'tableId',
  guestId: 'guestId',
  staffId: 'staffId'
});

exports.Prisma.GameScalarFieldEnum = makeEnum({
  id: 'id',
  firstDealer: 'firstDealer',
  startAt: 'startAt',
  endAt: 'endAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tableId: 'tableId'
});

exports.Prisma.GameResultScalarFieldEnum = makeEnum({
  id: 'id',
  rank: 'rank',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  gameId: 'gameId',
  playerId: 'playerId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  Organization: 'Organization',
  Parlour: 'Parlour',
  Staff: 'Staff',
  Guest: 'Guest',
  Table: 'Table',
  Player: 'Player',
  Game: 'Game',
  GameResult: 'GameResult'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma-client-js/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
