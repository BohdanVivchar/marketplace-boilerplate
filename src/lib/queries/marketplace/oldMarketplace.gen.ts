/* eslint-disable */
// marketplace-api  c4b467202ffea8d0ccdc4af0c18dd17b416985f4
// --
// Code generated by webrpc-gen@v0.18.3 with typescript generator. DO NOT EDIT.
//
// webrpc-gen -schema=orderbook.ridl -target=typescript -client -out=./clients/orderbook.gen.ts

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = ""

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "c4b467202ffea8d0ccdc4af0c18dd17b416985f4"

//
// Types
//


export interface TokenMetadata {
  tokenId: string
  name: string
  description?: string
  image?: string
  video?: string
  audio?: string
  properties?: {[key: string]: any}
  attributes: Array<{[key: string]: any}>
  image_data?: string
  external_url?: string
  background_color?: string
  animation_url?: string
  decimals?: number
  updatedAt?: string
  assets?: Array<Asset>
}

export interface Asset {
  id: number
  collectionId: number
  tokenId: string
  url?: string
  metadataField: string
  name?: string
  filesize?: number
  mimeType?: string
  width?: number
  height?: number
  updatedAt?: string
}

export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

export enum OrderStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED'
}

export enum PropertyType {
  INT = 'INT',
  STRING = 'STRING',
  ARRAY = 'ARRAY',
  GENERIC = 'GENERIC'
}

export interface RuntimeStatus {
  healthOK: boolean
  startTime: string
  uptime: number
  ver: string
  branch: string
  commitHash: string
}

export interface Page {
  page: number
  pageSize: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
  more?: boolean
  cursor?: string
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface OrderbookOrder {
  orderId: string
  tokenContract: string
  tokenId: string
  isListing: boolean
  quantity: string
  quantityRemaining: string
  currencyAddress: string
  pricePerToken: string
  expiry: string
  orderStatus: OrderStatus
  createdBy: string
  createdAt: number
  orderbookContractAddress: string
}

export interface OrderbookOrderFilter {
  isListing?: boolean
  userAddress?: string
  tokenIds: Array<string>
}

export interface PropertyFilter {
  name: string
  type: PropertyType
  min?: number
  max?: number
  values?: Array<any>
}

export interface Filter {
  text?: string
  properties?: Array<PropertyFilter>
}

export interface ISequenceMarketStorageRequestParams {
  isListing: boolean
  isERC1155: boolean
  tokenContract: string
  tokenId: string
  quantity: string
  expiry: string
  currency: string
  pricePerToken: string
}

export interface CollectiblesFilter {
  listingsOnly: boolean
  text?: string
  properties?: Array<PropertyFilter>
}

export interface Marketplace {
  getOrderbookOrders(args: GetOrderbookOrdersArgs, headers?: object, signal?: AbortSignal): Promise<GetOrderbookOrdersReturn>
  getUserActivities(args: GetUserActivitiesArgs, headers?: object, signal?: AbortSignal): Promise<GetUserActivitiesReturn>
  getTopOrders(args: GetTopOrdersArgs, headers?: object, signal?: AbortSignal): Promise<GetTopOrdersReturn>
  getFloorPrice(args: GetFloorPriceArgs, headers?: object, signal?: AbortSignal): Promise<GetFloorPriceReturn>
}

export interface GetOrderbookOrdersArgs {
  page?: Page
  orderbookContractAddress: string
  collectionAddress: string
  currencyAddresses: Array<string>
  filters: OrderbookOrderFilter
  orderStatuses?: Array<OrderStatus>
  metadataFilter?: Filter
  beforeExpiryTimestamp: number
}

export interface GetOrderbookOrdersReturn {
  page?: Page
  orders: Array<OrderbookOrder>  
}
export interface GetUserActivitiesArgs {
  page?: Page
  orderbookContractAddress: string
  collectionAddress: string
  currencyAddresses: Array<string>
  userAddress: string
  tokenIDs: Array<string>
}

export interface GetUserActivitiesReturn {
  page?: Page
  orders: Array<OrderbookOrder>  
}
export interface GetTopOrdersArgs {
  orderbookContractAddress: string
  collectionAddress: string
  currencyAddresses: Array<string>
  tokenIDs: Array<string>
  isListing: boolean
  priceSort: SortOrder
  excludeUser?: string
}

export interface GetTopOrdersReturn {
  orders: Array<OrderbookOrder>  
}
export interface GetFloorPriceArgs {
  orderbookContractAddress: string
  collectionAddress: string
  currencyAddresses: Array<string>
}

export interface GetFloorPriceReturn {
  order: OrderbookOrder  
}

export interface Orderbook {
  acceptRequest(args: AcceptRequestArgs, headers?: object, signal?: AbortSignal): Promise<AcceptRequestReturn>
  acceptRequestBatch(args: AcceptRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<AcceptRequestBatchReturn>
  cancelRequest(args: CancelRequestArgs, headers?: object, signal?: AbortSignal): Promise<CancelRequestReturn>
  cancelRequestBatch(args: CancelRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<CancelRequestBatchReturn>
  createRequest(args: CreateRequestArgs, headers?: object, signal?: AbortSignal): Promise<CreateRequestReturn>
  createRequestBatch(args: CreateRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<CreateRequestBatchReturn>
  getRequest(args: GetRequestArgs, headers?: object, signal?: AbortSignal): Promise<GetRequestReturn>
  getRequestBatch(args: GetRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<GetRequestBatchReturn>
  getRoyaltyInfo(args: GetRoyaltyInfoArgs, headers?: object, signal?: AbortSignal): Promise<GetRoyaltyInfoReturn>
  isRequestValid(args: IsRequestValidArgs, headers?: object, signal?: AbortSignal): Promise<IsRequestValidReturn>
  isRequestValidBatch(args: IsRequestValidBatchArgs, headers?: object, signal?: AbortSignal): Promise<IsRequestValidBatchReturn>
}

export interface AcceptRequestArgs {
  requestId: string
  quantity: string
  recipient: string
  additionalFees: Array<string>
  additionalFeeRecipients: Array<string>
}

export interface AcceptRequestReturn {
  output: string  
}
export interface AcceptRequestBatchArgs {
  requestIds: Array<string>
  quantities: Array<string>
  recipients: Array<string>
  additionalFees: Array<string>
  additionalFeeRecipients: Array<string>
}

export interface AcceptRequestBatchReturn {
  output: string  
}
export interface CancelRequestArgs {
  requestId: string
}

export interface CancelRequestReturn {
  output: string  
}
export interface CancelRequestBatchArgs {
  requestIds: Array<string>
}

export interface CancelRequestBatchReturn {
  output: string  
}
export interface CreateRequestArgs {
  request: ISequenceMarketStorageRequestParams
}

export interface CreateRequestReturn {
  output: string  
}
export interface CreateRequestBatchArgs {
  requests: Array<ISequenceMarketStorageRequestParams>
}

export interface CreateRequestBatchReturn {
  output: string  
}
export interface GetRequestArgs {
  requestId: string
}

export interface GetRequestReturn {
  output: string  
}
export interface GetRequestBatchArgs {
  requestIds: Array<string>
}

export interface GetRequestBatchReturn {
  output: string  
}
export interface GetRoyaltyInfoArgs {
  tokenContract: string
  tokenId: string
  cost: string
}

export interface GetRoyaltyInfoReturn {
  output: string  
}
export interface IsRequestValidArgs {
  requestId: string
  quantity: string
}

export interface IsRequestValidReturn {
  output: string  
}
export interface IsRequestValidBatchArgs {
  requestIds: Array<string>
  quantities: Array<string>
}

export interface IsRequestValidBatchReturn {
  output: string  
}


  
//
// Client
//
export class OldMarketplace implements Marketplace {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Marketplace/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  getOrderbookOrders = (args: GetOrderbookOrdersArgs, headers?: object, signal?: AbortSignal): Promise<GetOrderbookOrdersReturn> => {
    return this.fetch(
      this.url('GetOrderbookOrders'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page),
          orders: <Array<OrderbookOrder>>(_data.orders),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getUserActivities = (args: GetUserActivitiesArgs, headers?: object, signal?: AbortSignal): Promise<GetUserActivitiesReturn> => {
    return this.fetch(
      this.url('GetUserActivities'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page),
          orders: <Array<OrderbookOrder>>(_data.orders),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getTopOrders = (args: GetTopOrdersArgs, headers?: object, signal?: AbortSignal): Promise<GetTopOrdersReturn> => {
    return this.fetch(
      this.url('GetTopOrders'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          orders: <Array<OrderbookOrder>>(_data.orders),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getFloorPrice = (args: GetFloorPriceArgs, headers?: object, signal?: AbortSignal): Promise<GetFloorPriceReturn> => {
    return this.fetch(
      this.url('GetFloorPrice'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          order: <OrderbookOrder>(_data.order),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
}
export class Orderbook implements Orderbook {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Orderbook/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  acceptRequest = (args: AcceptRequestArgs, headers?: object, signal?: AbortSignal): Promise<AcceptRequestReturn> => {
    return this.fetch(
      this.url('AcceptRequest'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  acceptRequestBatch = (args: AcceptRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<AcceptRequestBatchReturn> => {
    return this.fetch(
      this.url('AcceptRequestBatch'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  cancelRequest = (args: CancelRequestArgs, headers?: object, signal?: AbortSignal): Promise<CancelRequestReturn> => {
    return this.fetch(
      this.url('CancelRequest'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  cancelRequestBatch = (args: CancelRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<CancelRequestBatchReturn> => {
    return this.fetch(
      this.url('CancelRequestBatch'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  createRequest = (args: CreateRequestArgs, headers?: object, signal?: AbortSignal): Promise<CreateRequestReturn> => {
    return this.fetch(
      this.url('CreateRequest'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  createRequestBatch = (args: CreateRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<CreateRequestBatchReturn> => {
    return this.fetch(
      this.url('CreateRequestBatch'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getRequest = (args: GetRequestArgs, headers?: object, signal?: AbortSignal): Promise<GetRequestReturn> => {
    return this.fetch(
      this.url('GetRequest'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getRequestBatch = (args: GetRequestBatchArgs, headers?: object, signal?: AbortSignal): Promise<GetRequestBatchReturn> => {
    return this.fetch(
      this.url('GetRequestBatch'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  getRoyaltyInfo = (args: GetRoyaltyInfoArgs, headers?: object, signal?: AbortSignal): Promise<GetRoyaltyInfoReturn> => {
    return this.fetch(
      this.url('GetRoyaltyInfo'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  isRequestValid = (args: IsRequestValidArgs, headers?: object, signal?: AbortSignal): Promise<IsRequestValidReturn> => {
    return this.fetch(
      this.url('IsRequestValid'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
  isRequestValidBatch = (args: IsRequestValidBatchArgs, headers?: object, signal?: AbortSignal): Promise<IsRequestValidBatchReturn> => {
    return this.fetch(
      this.url('IsRequestValidBatch'),
      createHTTPRequest(args, headers, signal)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          output: <string>(_data.output),
        }
      })
    }, (error) => {
      throw WebrpcRequestFailedError.new({ cause: `fetch(): ${error.message || ''}` })
    })
  }
  
}

  const createHTTPRequest = (body: object = {}, headers: object = {}, signal: AbortSignal | null = null): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {}),
    signal
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch(error) {
      let message = ''
      if (error instanceof Error)  {
        message = error.message
      }
      throw WebrpcBadResponseError.new({
        status: res.status,
        cause: `JSON.parse(): ${message}: response text: ${text}`},
      )
    }
    if (!res.ok) {
      const code: number = (typeof data.code === 'number') ? data.code : 0
      throw (webrpcErrorByCode[code] || WebrpcError).new(data)
    }
    return data
  })
}

//
// Errors
//

export class WebrpcError extends Error {
  name: string
  code: number
  message: string
  status: number
  cause?: string

  /** @deprecated Use message instead of msg. Deprecated in webrpc v0.11.0. */
  msg: string

  constructor(name: string, code: number, message: string, status: number, cause?: string) {
    super(message)
    this.name = name || 'WebrpcError'
    this.code = typeof code === 'number' ? code : 0
    this.message = message || `endpoint error ${this.code}`
    this.msg = this.message
    this.status = typeof status === 'number' ? status : 0
    this.cause = cause
    Object.setPrototypeOf(this, WebrpcError.prototype)
  }

  static new(payload: any): WebrpcError {
    return new this(payload.error, payload.code, payload.message || payload.msg, payload.status, payload.cause)
  }
}

// Webrpc errors

export class WebrpcEndpointError extends WebrpcError {
  constructor(
    name: string = 'WebrpcEndpoint',
    code: number = 0,
    message: string = 'endpoint error',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcEndpointError.prototype)
  }
}

export class WebrpcRequestFailedError extends WebrpcError {
  constructor(
    name: string = 'WebrpcRequestFailed',
    code: number = -1,
    message: string = 'request failed',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcRequestFailedError.prototype)
  }
}

export class WebrpcBadRouteError extends WebrpcError {
  constructor(
    name: string = 'WebrpcBadRoute',
    code: number = -2,
    message: string = 'bad route',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcBadRouteError.prototype)
  }
}

export class WebrpcBadMethodError extends WebrpcError {
  constructor(
    name: string = 'WebrpcBadMethod',
    code: number = -3,
    message: string = 'bad method',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcBadMethodError.prototype)
  }
}

export class WebrpcBadRequestError extends WebrpcError {
  constructor(
    name: string = 'WebrpcBadRequest',
    code: number = -4,
    message: string = 'bad request',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcBadRequestError.prototype)
  }
}

export class WebrpcBadResponseError extends WebrpcError {
  constructor(
    name: string = 'WebrpcBadResponse',
    code: number = -5,
    message: string = 'bad response',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcBadResponseError.prototype)
  }
}

export class WebrpcServerPanicError extends WebrpcError {
  constructor(
    name: string = 'WebrpcServerPanic',
    code: number = -6,
    message: string = 'server panic',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcServerPanicError.prototype)
  }
}

export class WebrpcInternalErrorError extends WebrpcError {
  constructor(
    name: string = 'WebrpcInternalError',
    code: number = -7,
    message: string = 'internal error',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcInternalErrorError.prototype)
  }
}

export class WebrpcClientDisconnectedError extends WebrpcError {
  constructor(
    name: string = 'WebrpcClientDisconnected',
    code: number = -8,
    message: string = 'client disconnected',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcClientDisconnectedError.prototype)
  }
}

export class WebrpcStreamLostError extends WebrpcError {
  constructor(
    name: string = 'WebrpcStreamLost',
    code: number = -9,
    message: string = 'stream lost',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcStreamLostError.prototype)
  }
}

export class WebrpcStreamFinishedError extends WebrpcError {
  constructor(
    name: string = 'WebrpcStreamFinished',
    code: number = -10,
    message: string = 'stream finished',
    status: number = 0,
    cause?: string
  ) {
    super(name, code, message, status, cause)
    Object.setPrototypeOf(this, WebrpcStreamFinishedError.prototype)
  }
}


// Schema errors


export enum errors {
  WebrpcEndpoint = 'WebrpcEndpoint',
  WebrpcRequestFailed = 'WebrpcRequestFailed',
  WebrpcBadRoute = 'WebrpcBadRoute',
  WebrpcBadMethod = 'WebrpcBadMethod',
  WebrpcBadRequest = 'WebrpcBadRequest',
  WebrpcBadResponse = 'WebrpcBadResponse',
  WebrpcServerPanic = 'WebrpcServerPanic',
  WebrpcInternalError = 'WebrpcInternalError',
  WebrpcClientDisconnected = 'WebrpcClientDisconnected',
  WebrpcStreamLost = 'WebrpcStreamLost',
  WebrpcStreamFinished = 'WebrpcStreamFinished',
}

const webrpcErrorByCode: { [code: number]: any } = {
  [0]: WebrpcEndpointError,
  [-1]: WebrpcRequestFailedError,
  [-2]: WebrpcBadRouteError,
  [-3]: WebrpcBadMethodError,
  [-4]: WebrpcBadRequestError,
  [-5]: WebrpcBadResponseError,
  [-6]: WebrpcServerPanicError,
  [-7]: WebrpcInternalErrorError,
  [-8]: WebrpcClientDisconnectedError,
  [-9]: WebrpcStreamLostError,
  [-10]: WebrpcStreamFinishedError,
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
