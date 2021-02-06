import {
  WalletTypeEnum,
  CurrencyEnum,
  ExchangeCurrencyEnum,
  FeeChannelEnum,
  FeeTypeEnum,
  FeePayTypeEnum,
  BusinessTypeEnum,
  ReduceTypeEnum,
  ActivationStatusEnum,
  QbitCardProviderEnum,
  QbitCardTypeEnum
} from "./enum";

/** UserConfig */
export interface UserConfig {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
}

/** User */
export interface User {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** phone */
  phone: string;
  /** nickname */
  nickname: string;
  /** email */
  email: string;
  /** userConfig */
  userConfig: UserConfig;
  /** 是否有交易密码 */
  hasPaymentPwd: boolean;
  /** 是否可以支付，修改支付密码后需要限制24小时 */
  canPay: boolean;
}

/** StatusLog */
export interface StatusLog {
  /** 状态名 */
  status: string;
  /** 更新时间 */
  updatedAt: Date;
}

/** Balance */
export interface Balance {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** accountId */
  accountId: string;
  /** walletType */
  walletType: WalletTypeEnum;
  /** currency */
  currency: CurrencyEnum;
  /** 可用金额 */
  available: number;
  /** 处理中金额 */
  pending: number;
  /** 冻结中金额 */
  frozen: number;
  /** status */
  status: string;
}

/** Attachment */
export interface Attachment {
  /** 文件名 */
  filename: string;
  /** 链接 */
  fileUrl: string;
}

/** Address */
export interface Address {
  /** 地址栏第一行 */
  addressLine1: string;
  /** 地址栏第二行 */
  addressLine2: string;
  /** 城市 */
  city: string;
  /** 州或省 */
  state: string;
  /** ISO_3166-1 二位字母代码， 如CN, US等 */
  country: string;
  /** 邮编 */
  postalCode: string;
}

/** AccountExtend */
export interface AccountExtend {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** kycStatus */
  kycStatus: string;
  /** kybStatus */
  kybStatus: string;
  /** accountId */
  accountId: string;
}

/** AccountFeeRate */
export interface AccountFeeRate {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 账户id */
  accountId: string;
  /** 币种 */
  currency: ExchangeCurrencyEnum;
  /** 计算模式 */
  key: FeeChannelEnum;
  /** 充值费 */
  value: number;
  /** 计算方式 */
  mathType: FeeTypeEnum;
  /** 付款方式 */
  payType: FeePayTypeEnum;
  /** 业务类型 */
  businessType: BusinessTypeEnum;
  /** 扣源余额还是扣目标余额 */
  reduceType: ReduceTypeEnum;
}

/** Account */
export interface Account {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 认证名字 */
  verifiedName: string;
  /** accountType */
  accountType: string;
  /** 给用户分配的6位唯一数字ID */
  displayId: string;
  /** status */
  status: string;
  /** kycStatus */
  kycStatus: string;
  /** kybStatus */
  kybStatus: string;
  /** 账户来源邀请码 */
  referralCodeId: string;
  /** type */
  type: string;
  /** 账户费率 */
  feeList: null;
  /** balances */
  balances: null;
  /** bankAccounts */
  bankAccounts: null;
  /** accountExtends */
  accountExtends: null;
}

/** BankAccount */
export interface BankAccount {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 全球账户的account id */
  accountId: string;
  /** 对应的balance Id */
  balanceId: string;
  /** 账户持有人姓名 */
  accountName: string;
  /** 账号 */
  accountNo: string;
  /** 银行名称 */
  bankName: string;
  /** SWIFT/BIC */
  swift: string;
  /** Routing number */
  routingNumber: string;
  /** 支行名称 */
  branchName: string;
  /** 支行代码 */
  branchCode: string;
  /** 地址 */
  accountAddress: Address;
  /** 币种 */
  currency: string;
  /** 状态 */
  status: string;
  /** 最后更新时间 */
  lastUpdateTime: Date;
  /** 账户类型（对公、对私） */
  type: string;
  /** 身份证号码 */
  idNumber: string;
  /** 用途种类，如用于提现withdraw, 还是付款payout */
  category: string;
  /** 来源，账户的提供方， 如EE，CFSB */
  source: string;
  /** 提供方平台上的id */
  sourceId: string;
  /** 提供方平台上的wallet id */
  sourceWalletId: string;
  /** 附件 */
  attachments: null;
  /** 该银行账户和账户所有者的关系 */
  relationship: string;
  /** balance */
  balance: Balance;
  /** account */
  account: Account;
}

/** QbitCard */
export interface QbitCard {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** accountId */
  accountId: string;
  /** userName */
  userName: string;
  /** firstName */
  firstName: string;
  /** lastName */
  lastName: string;
  /** currency */
  currency: CurrencyEnum;
  /** status */
  status: ActivationStatusEnum;
  /** qbitCardNo */
  qbitCardNo: string;
  /** qbitCardNoLastFour */
  qbitCardNoLastFour: string;
  /** provider */
  provider: QbitCardProviderEnum;
  /** type */
  type: QbitCardTypeEnum;
  /** expiryDate */
  expiryDate: Date;
  /** cvv */
  cvv: string;
  /** useType */
  useType: string;
  /** token */
  token: string;
  /** label */
  label: string;
  /** cardholderInfo */
  cardholderInfo: string;
  /** groupId */
  groupId: string;
  /** userId */
  userId: string;
  /** balanceId */
  balanceId: string;
  /** apiBalance */
  apiBalance: number;
  /** balanceInfo */
  balanceInfo: Balance;
}

/** ReferralCode */
export interface ReferralCode {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 用户userid或者渠道方userId */
  userId: string;
  /** 邀请码所属管理员(销售id) */
  adminId: string;
  /** code */
  code: string;
  /** 状态 */
  status: string;
  /** 销售/用户 */
  type: string;
  /** user */
  user: User;
  /** admin */
  admin: User;
}

/** SystemConfig */
export interface SystemConfig {
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 备注 */
  remarks: string;
  /** id */
  id: number;
  /** 状态 */
  status: string;
}

/** InboundTransfer */
export interface InboundTransfer {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 所属账户id */
  accountId: string;
  /** 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id)) */
  sender: string;
  /** 源交易类型(Wallet, PayPal, 银行卡，银行账户) */
  senderType: string;
  /** 源的余额id */
  senderBalanceId: string;
  /** 目标交易id(Wallet, PayPal, 银行卡，银行账户的id) */
  recipient: string;
  /** 目标交易类型 */
  recipientType: string;
  /** 源币种 */
  senderCurrency: string;
  /** 目标的余额id */
  recipientBalanceId: string;
  /** 目标币种 */
  recipientCurrency: string;
  /** senderFee */
  senderFee: number;
  /** recipientFee */
  recipientFee: number;
  /** recipientFeeType */
  recipientFeeType: string;
  /** senderCost */
  senderCost: number;
  /** recipientCost */
  recipientCost: number;
  /** status */
  status: string;
  /** displayStatus */
  displayStatus: string;
  /** 记录状态变化的时间 */
  statusLog: null;
  /** 交易时间 */
  transactionTime: Date;
  /** 付款人名称 */
  senderName: string;
  /** 充值截图 */
  photos: Attachment;
  /** 流水号 */
  fromOrderId: string;
  /** 三方过来的原始数据 */
  rawData: string;
  /** account */
  account: Account;
}

/** QbitCardTransaction */
export interface QbitCardTransaction {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** accountId */
  accountId: string;
  /** 量子卡 id */
  cardId: string;
  /** 币种：USD,CNY,EUR */
  currency: string;
  /** displayStatus */
  displayStatus: string;
  /** 结算金额 */
  platformType: string;
  /** 结算金额 */
  settleAmount: number;
  /** 原始金额 */
  originalAmount: number;
  /** 费用 */
  fee: number;
  /** 详情 */
  detail: string;
  /** businessType */
  businessType: string;
  /** 三方订单Id */
  sourceId: string;
  /** 交易时间 */
  transactionTime: Date;
  /** qbitCardInfo */
  qbitCardInfo: QbitCard;
}

/** BankAccountsOutput */
export interface BankAccountsOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** AccountOutput */
export interface AccountOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** BalancesOutput */
export interface BalancesOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** UsersOutput */
export interface UsersOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** ReferralCodeOutput */
export interface ReferralCodeOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** QbitCardOutput */
export interface QbitCardOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** QbitCardTransactionOutput */
export interface QbitCardTransactionOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** QbitCardTransactionStatisticsOutput */
export interface QbitCardTransactionStatisticsOutput {
  /** 账号资金转入 */
  transferInAmountSum: number;
  /** 账户资金转出 */
  transferOutAmountSum: number;
  /** 累计卡消费 */
  consumptionSum: number;
  /** 开卡费用 */
  createCardFeeSum: number;
  /** 卡消费总笔数 */
  consumptionCount: number;
  /** 已完成笔数 */
  successCount: number;
  /** 处理中笔数 */
  pendingCount: number;
  /** 失败笔数 */
  failCount: number;
  /** 拒付笔数 */
  declinedCount: number;
  /** 平台类型 */
  platformType: QbitCardProviderEnum;
}

/** QbitCardStatisticsOutput */
export interface QbitCardStatisticsOutput {
  /** 卡的提供者 */
  provider: QbitCardProviderEnum;
  /** 激活的卡数量 */
  activeCardsCount: number;
  /** 关停的卡数量 */
  inactiveCardsCount: number;
  /** 冻结的卡数量 */
  frozenCardsCount: number;
  /** 删除处理中的卡数量 */
  processingCardsCount: number;
  /** 特殊情况的卡数量 */
  otherCardsCount: number;
  /** 所有卡数量 */
  allCardsCount: number;
  /** 卡内总余额 */
  qbitCardApiBalanceAmountSum: number;
  /** 去重标签列表 */
  labels: null;
  /** 去重用户名列表 */
  userNames: null;
}

/** QbitCardPrivateInfoOutput */
export interface QbitCardPrivateInfoOutput {
  /** 卡号 */
  qbitCardNo: string;
  /** cvv */
  cvv: string;
  /** 过期年 */
  expYear: string;
  /** 过期月 */
  expMonth: string;
}

/** 批量开卡进度返回 */
export interface BatchCreateQbitCardProcessOutput {
  /** 批量总数目 */
  batchCount: number;
  /** 当前数目 */
  currentCount: number;
}

/** InboundTransfersOutput */
export interface InboundTransfersOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** OutboundTransfersOutput */
export interface OutboundTransfersOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** OutboundTransfer */
export interface OutboundTransfer {
  /** id */
  id: string;
  /** 备注 */
  remarks: string;
  /** createTime */
  createTime: Date;
  /** updateTime */
  updateTime: Date;
  /** deleteTime */
  deleteTime: Date;
  /** version */
  version: number;
  /** 所属账户id */
  accountId: string;
  /** 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id)) */
  sender: string;
  /** 源交易类型(Wallet, PayPal, 银行卡，银行账户) */
  senderType: string;
  /** 源的余额id */
  senderBalanceId: string;
  /** 目标交易id(Wallet, PayPal, 银行卡，银行账户的id) */
  recipient: string;
  /** 目标交易类型 */
  recipientType: string;
  /** 源币种 */
  senderCurrency: string;
  /** 目标的余额id */
  recipientBalanceId: string;
  /** 目标币种 */
  recipientCurrency: string;
  /** senderFee */
  senderFee: number;
  /** recipientFee */
  recipientFee: number;
  /** recipientFeeType */
  recipientFeeType: string;
  /** senderCost */
  senderCost: number;
  /** recipientCost */
  recipientCost: number;
  /** status */
  status: string;
  /** displayStatus */
  displayStatus: string;
  /** 记录状态变化的时间 */
  statusLog: null;
  /** 交易时间 */
  transactionTime: Date;
  /** 付款目的 */
  reason: string;
  /** 三方processor的名字 */
  processor: string;
  /** 三方processor的order id */
  processorOrderId: string;
  /** beneficiaries */
  beneficiaries: null;
  /** account */
  account: Account;
}

/** SystemConfigOutput */
export interface SystemConfigOutput {
  /** pageTotal */
  pageTotal: number;
  /** total */
  total: number;
  /** data */
  data: null;
}

/** 执行结果 */
export interface QbitBoolean {
  /** 执行结果 */
  result: boolean;
}
