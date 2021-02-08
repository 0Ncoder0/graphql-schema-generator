/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  WalletTypeEnum,
  CurrencyEnum,
  ActivationStatusEnum,
  ExchangeCurrencyEnum,
  FeeChannelEnum,
  FeeTypeEnum,
  FeePayTypeEnum,
  BusinessTypeEnum,
  ReduceTypeEnum,
  QbitCardProviderEnum,
  QbitCardTypeEnum,
  TransactionDisplayStatusEnum,
  SmsCodeEnum
} from "./enum";

/** UserConfig */
export interface UserConfig {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
}

/** User */
export interface User {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** phone */
  phone?: string;
  /** nickname */
  nickname?: string;
  /** email */
  email?: string;
  /** userConfig */
  userConfig?: UserConfig;
  /** 是否有交易密码 */
  hasPaymentPwd?: boolean;
  /** 是否可以支付，修改支付密码后需要限制24小时 */
  canPay?: boolean;
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
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** accountId */
  accountId?: string;
  /** walletType */
  walletType?: WalletTypeEnum;
  /** currency */
  currency?: CurrencyEnum;
  /** 可用金额 */
  available: number;
  /** 处理中金额 */
  pending: number;
  /** 冻结中金额 */
  frozen: number;
  /** status */
  status?: ActivationStatusEnum;
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
  addressLine2?: string;
  /** 城市 */
  city: string;
  /** 州或省 */
  state: string;
  /** ISO_3166-1 二位字母代码， 如CN, US等 */
  country: string;
  /** 邮编 */
  postalCode?: string;
}

/** AccountExtend */
export interface AccountExtend {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** kycStatus */
  kycStatus?: string;
  /** kybStatus */
  kybStatus?: string;
  /** accountId */
  accountId?: string;
}

/** AccountFeeRate */
export interface AccountFeeRate {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 账户id */
  accountId?: string;
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
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 认证名字 */
  verifiedName?: string;
  /** accountType */
  accountType?: string;
  /** 给用户分配的6位唯一数字ID */
  displayId?: string;
  /** status */
  status?: string;
  /** kycStatus */
  kycStatus?: string;
  /** kybStatus */
  kybStatus?: string;
  /** 账户来源邀请码 */
  referralCodeId?: string;
  /** type */
  type?: string;
  /** 账户费率 */
  feeList: AccountFeeRate[];
  /** balances */
  balances: Balance[];
  /** bankAccounts */
  bankAccounts: BankAccount[];
  /** accountExtends */
  accountExtends: AccountExtend[];
}

/** BankAccount */
export interface BankAccount {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 全球账户的account id */
  accountId: string;
  /** 对应的balance Id */
  balanceId?: string;
  /** 账户持有人姓名 */
  accountName: string;
  /** 账号 */
  accountNo: string;
  /** 银行名称 */
  bankName?: string;
  /** SWIFT/BIC */
  swift?: string;
  /** Routing number */
  routingNumber?: string;
  /** 支行名称 */
  branchName?: string;
  /** 支行代码 */
  branchCode?: string;
  /** 地址 */
  accountAddress?: Address;
  /** 币种 */
  currency: string;
  /** 状态 */
  status?: string;
  /** 最后更新时间 */
  lastUpdateTime?: Date;
  /** 账户类型（对公、对私） */
  type?: string;
  /** 身份证号码 */
  idNumber?: string;
  /** 用途种类，如用于提现withdraw, 还是付款payout */
  category?: string;
  /** 来源，账户的提供方， 如EE，CFSB */
  source?: string;
  /** 提供方平台上的id */
  sourceId?: string;
  /** 提供方平台上的wallet id */
  sourceWalletId?: string;
  /** 附件 */
  attachments: Attachment[];
  /** 该银行账户和账户所有者的关系 */
  relationship?: string;
  /** balance */
  balance?: Balance;
  /** account */
  account?: Account;
}

/** QbitCard */
export interface QbitCard {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** accountId */
  accountId?: string;
  /** userName */
  userName?: string;
  /** firstName */
  firstName?: string;
  /** lastName */
  lastName?: string;
  /** currency */
  currency?: CurrencyEnum;
  /** status */
  status?: ActivationStatusEnum;
  /** qbitCardNo */
  qbitCardNo?: string;
  /** qbitCardNoLastFour */
  qbitCardNoLastFour?: string;
  /** provider */
  provider?: QbitCardProviderEnum;
  /** type */
  type?: QbitCardTypeEnum;
  /** expiryDate */
  expiryDate?: Date;
  /** cvv */
  cvv?: string;
  /** useType */
  useType?: string;
  /** token */
  token?: string;
  /** label */
  label?: string;
  /** cardholderInfo */
  cardholderInfo?: any;
  /** groupId */
  groupId?: string;
  /** userId */
  userId?: string;
  /** balanceId */
  balanceId?: string;
  /** apiBalance */
  apiBalance?: number;
  /** balanceInfo */
  balanceInfo?: Balance;
}

/** ReferralCode */
export interface ReferralCode {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 用户userid或者渠道方userId */
  userId?: string;
  /** 邀请码所属管理员(销售id) */
  adminId?: string;
  /** code */
  code?: string;
  /** 状态 */
  status?: string;
  /** 销售/用户 */
  type?: string;
  /** user */
  user?: User;
  /** admin */
  admin?: User;
}

/** SystemConfig */
export interface SystemConfig {
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 备注 */
  remarks?: string;
  /** id */
  id?: number;
  /** 状态 */
  status?: string;
}

/** InboundTransfer */
export interface InboundTransfer {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 所属账户id */
  accountId: string;
  /** 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id)) */
  sender: string;
  /** 源交易类型(Wallet, PayPal, 银行卡，银行账户) */
  senderType?: string;
  /** 源的余额id */
  senderBalanceId?: string;
  /** 目标交易id(Wallet, PayPal, 银行卡，银行账户的id) */
  recipient: string;
  /** 目标交易类型 */
  recipientType?: string;
  /** 源币种 */
  senderCurrency?: string;
  /** 目标的余额id */
  recipientBalanceId?: string;
  /** 目标币种 */
  recipientCurrency?: string;
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
  status?: string;
  /** displayStatus */
  displayStatus: string;
  /** 记录状态变化的时间 */
  statusLog: StatusLog[];
  /** 交易时间 */
  transactionTime?: Date;
  /** 付款人名称 */
  senderName?: string;
  /** 充值截图 */
  photos?: Attachment;
  /** 流水号 */
  fromOrderId?: string;
  /** 三方过来的原始数据 */
  rawData?: any;
  /** account */
  account?: Account;
}

/** QbitCardTransaction */
export interface QbitCardTransaction {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** accountId */
  accountId: string;
  /** 量子卡 id */
  cardId?: string;
  /** 币种：USD,CNY,EUR */
  currency?: CurrencyEnum;
  /** displayStatus */
  displayStatus?: TransactionDisplayStatusEnum;
  /** 结算金额 */
  platformType?: QbitCardProviderEnum;
  /** 结算金额 */
  settleAmount?: number;
  /** 原始金额 */
  originalAmount?: number;
  /** 费用 */
  fee?: number;
  /** 详情 */
  detail?: string;
  /** businessType */
  businessType?: string;
  /** 三方订单Id */
  sourceId?: string;
  /** 交易时间 */
  transactionTime?: Date;
  /** qbitCardInfo */
  qbitCardInfo?: QbitCard;
}

/** BankAccountsOutput */
export interface BankAccountsOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: BankAccount[];
}

/** AccountOutput */
export interface AccountOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: Account[];
}

/** BalancesOutput */
export interface BalancesOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: Balance[];
}

/** UsersOutput */
export interface UsersOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: User[];
}

/** ReferralCodeOutput */
export interface ReferralCodeOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: ReferralCode[];
}

/** QbitCardOutput */
export interface QbitCardOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: QbitCard[];
}

/** QbitCardTransactionOutput */
export interface QbitCardTransactionOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: QbitCardTransaction[];
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
  labels: string[];
  /** 去重用户名列表 */
  userNames: string[];
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
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: InboundTransfer[];
}

/** OutboundTransfersOutput */
export interface OutboundTransfersOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: OutboundTransfer[];
}

/** OutboundTransfer */
export interface OutboundTransfer {
  /** id */
  id?: string;
  /** 备注 */
  remarks?: string;
  /** createTime */
  createTime?: Date;
  /** updateTime */
  updateTime?: Date;
  /** deleteTime */
  deleteTime?: Date;
  /** version */
  version?: number;
  /** 所属账户id */
  accountId: string;
  /** 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id)) */
  sender: string;
  /** 源交易类型(Wallet, PayPal, 银行卡，银行账户) */
  senderType?: string;
  /** 源的余额id */
  senderBalanceId?: string;
  /** 目标交易id(Wallet, PayPal, 银行卡，银行账户的id) */
  recipient: string;
  /** 目标交易类型 */
  recipientType?: string;
  /** 源币种 */
  senderCurrency?: string;
  /** 目标的余额id */
  recipientBalanceId?: string;
  /** 目标币种 */
  recipientCurrency?: string;
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
  status?: string;
  /** displayStatus */
  displayStatus: string;
  /** 记录状态变化的时间 */
  statusLog: StatusLog[];
  /** 交易时间 */
  transactionTime?: Date;
  /** 付款目的 */
  reason?: string;
  /** 三方processor的名字 */
  processor?: string;
  /** 三方processor的order id */
  processorOrderId?: string;
  /** beneficiaries */
  beneficiaries: BankAccount[];
  /** account */
  account?: Account;
}

/** SystemConfigOutput */
export interface SystemConfigOutput {
  /** pageTotal */
  pageTotal?: number;
  /** total */
  total?: number;
  /** data */
  data: SystemConfig[];
}

/** AttachmentInput */
export interface AttachmentInput {
  /** 文件名 */
  filename: string;
  /** 链接 */
  fileUrl: string;
}

/** AddressInput */
export interface AddressInput {
  /** 地址栏第一行 */
  addressLine1: string;
  /** 地址栏第二行 */
  addressLine2?: string;
  /** 城市 */
  city: string;
  /** 州或省 */
  state: string;
  /** ISO_3166-1 二位字母代码， 如CN, US等 */
  country: string;
  /** 邮编 */
  postalCode?: string;
}

/** PageInput */
export interface PageInput {
  /** 页 */
  page?: number;
  /** 条数 */
  limit?: number;
}

/** QueryParams */
export interface QueryParams {
  /** filter */
  filter?: any;
  /** order */
  order?: any;
  /** pagination */
  pagination?: PageInput;
}

/** 费率参数 */
export interface OutboundTransfersFeeDto {
  /** senderCurrency */
  senderCurrency: string;
  /** recipientCurrency */
  recipientCurrency: string;
  /** senderCost */
  senderCost: number;
}

/** GetTermsAndConditionsInput */
export interface GetTermsAndConditionsInput {
  /** 平台(pennyCard/niumCard) */
  provider: QbitCardProviderEnum;
}

/** 批量开卡进度 */
export interface BatchCreateQbitCardProcessInput {
  /** 卡的拥有者id */
  accountId: string;
  /** 平台(pennyCard/niumCard) */
  provider: QbitCardProviderEnum;
}

/** QbitCardStatisticsInput */
export interface QbitCardStatisticsInput {
  /** 卡的提供者 */
  providers: QbitCardProviderEnum[];
  /** 账户ID */
  accountId: string;
}

/** QbitCardTransactionStatisticsInput */
export interface QbitCardTransactionStatisticsInput {
  /** 账户ID */
  accountId: string;
  /** 平台类型列表 */
  platformTypes: QbitCardProviderEnum[];
}

/** CreateBankAccountInput */
export interface CreateBankAccountInput {
  /** 全球账户的account id */
  accountId: string;
  /** 账户持有人姓名 */
  accountName: string;
  /** 账号 */
  accountNo: string;
  /** 银行名称 */
  bankName?: string;
  /** SWIFT/BIC */
  swift?: string;
  /** Routing number */
  routingNumber?: string;
  /** 支行名称 */
  branchName?: string;
  /** 支行代码 */
  branchCode?: string;
  /** 地址 */
  accountAddress?: AddressInput;
  /** 币种 */
  currency: string;
  /** 账户类型（对公、对私） */
  type?: string;
  /** 身份证号码 */
  idNumber?: string;
  /** 用途种类，如用于提现withdraw, 还是付款payout */
  category?: string;
  /** 附件 */
  attachments: AttachmentInput[];
  /** 该银行账户和账户所有者的关系 */
  relationship?: string;
}

/** UpdateStatusDto */
export interface UpdateStatusDto {
  /** bankAccountId */
  bankAccountId: string;
  /** status */
  status: string;
  /** 备注 */
  remarks: string;
}

/** SignUpDto */
export interface SignUpDto {
  /** phone */
  phone?: string;
  /** verifyCode */
  verifyCode?: string;
  /** password */
  password?: string;
  /** userSource */
  userSource?: string;
  /** inviteCode */
  inviteCode?: string;
}

/** UserInputUpdate */
export interface UserInputUpdate {
  /** id */
  id?: string;
  /** password */
  password?: string;
  /** oldPassword */
  oldPassword?: string;
  /** 手机号验证码 */
  verifyCodePhone?: string;
  /** 邮箱验证码 */
  verifyCodeEmail?: string;
  /** email */
  email?: string;
  /** manageUserId */
  manageUserId?: string;
}

/** UserInput */
export interface UserInput {
  /** id */
  id?: string;
  /** phone */
  phone?: string;
  /** password */
  password?: string;
  /** oldPassword */
  oldPassword?: string;
  /** paymentPassword */
  paymentPassword?: string;
  /** role */
  role?: number;
  /** verifyCode */
  verifyCode?: string;
  /** email */
  email?: string;
  /** manageUserId */
  manageUserId?: string;
  /** remarks */
  remarks?: string;
}

/** VerCodeBase */
export interface VerCodeBase {
  /** emailPhone */
  emailPhone: string;
  /** codeType */
  codeType: SmsCodeEnum;
}

/** CheckVerCode */
export interface CheckVerCode {
  /** emailPhone */
  emailPhone: string;
  /** codeType */
  codeType: SmsCodeEnum;
  /** code */
  code: string;
}

/** SetPayPwdDto */
export interface SetPayPwdDto {
  /** code */
  code: string;
  /** password */
  password: string;
}

/** UpdatePayPwdDto */
export interface UpdatePayPwdDto {
  /** code */
  code: string;
  /** lastPassword */
  lastPassword: string;
  /** password */
  password: string;
}

/** InputInviteCode */
export interface InputInviteCode {
  /** id */
  id?: string;
  /** 手机号 */
  phone: string;
  /** 姓名 */
  nickname: string;
  /** 邀请码 */
  code?: string;
  /** 管理人 */
  admin: string;
  /** 备注 */
  remarks: string;
}

/** CreateOutboundTransferInput */
export interface CreateOutboundTransferInput {
  /** 所属账户id */
  accountId: string;
  /** 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id)) */
  sender: string;
  /** 目标交易id(Wallet, PayPal, 银行卡，银行账户的id) */
  recipient: string;
  /** 源币种 */
  senderCurrency?: string;
  /** 目标币种 */
  recipientCurrency?: string;
  /** senderCost */
  senderCost: number;
  /** recipientCost */
  recipientCost: number;
  /** payPassword */
  payPassword: string;
}

/** BatchCreateQbitCardInput */
export interface BatchCreateQbitCardInput {
  /** 批量的数量 */
  batchCount: number;
  /** 卡的拥有者id */
  accountId: string;
  /** 开卡金额，卡类型需要，共用额度的不需要用到此字段 */
  cost?: number;
  /** 平台(pennyCard/niumCard) */
  provider: QbitCardProviderEnum;
  /** 卡的自身验证地址 */
  cardAddress?: AddressInput;
  /** 持卡人名 */
  firstName: string;
  /** 持卡人姓 */
  lastName: string;
  /** 标签 */
  label?: string;
  /** 使用类别 */
  useType: string;
  /** 持卡人信息，当nium的时候不能为空 */
  cardholderInfo?: CardholderInfo;
  /** 组Id(nium 必须要传组id) */
  groupId?: string;
}

/** CardholderInfo */
export interface CardholderInfo {
  /** TODO */
  TODO: string;
}

/** IncreaseQbitCarLimitInput */
export interface IncreaseQbitCarLimitInput {
  /** 卡token */
  cardId: string;
  /** 金额，卡类型需要，共用额度的不需要用到此字段 */
  cost: number;
}

/** DecreaseQbitCarLimitInput */
export interface DecreaseQbitCarLimitInput {
  /** 卡token列表 */
  catdId: string;
  /** 金额，卡类型需要，共用额度的不需要用到此字段 */
  cost: number;
}

/** SuspendQbitCardInput */
export interface SuspendQbitCardInput {
  /** 卡ID */
  cardIdList: string[];
}

/** EnableQbitCarLimitInput */
export interface EnableQbitCarLimitInput {
  /** 卡id */
  cardIdList: string[];
}

/** UpdateQbitCardInput */
export interface UpdateQbitCardInput {
  /** 卡的用户id */
  qbitCardId: string;
  /** 卡的自身验证地址 */
  cardAddress?: any;
  /** 用户自定义的标签 */
  label?: string;
}

/** UpdateTermsAndConditionsInput */
export interface UpdateTermsAndConditionsInput {
  /** 平台(pennyCard/niumCard) */
  provider: QbitCardProviderEnum;
  /** 账户ID */
  accountId: string;
}

/** LoginDto */
export interface LoginDto {
  /** account */
  account?: string;
  /** password */
  password?: string;
}
