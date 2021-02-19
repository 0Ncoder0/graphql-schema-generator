/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** WalletTypeEnum */
export enum WalletTypeEnum {
  /** EasyEuro */
  EasyEuro = "EasyEuro",
  /** QbitCardWallet */
  QbitCardWallet = "QbitCardWallet",
  /** PennyCardWallet */
  PennyCardWallet = "PennyCardWallet",
  /** QbitWallet */
  QbitWallet = "QbitWallet",
  /** GroupWallet */
  GroupWallet = "GroupWallet"
}

/** CurrencyEnum */
export enum CurrencyEnum {
  /** USD */
  USD = "USD",
  /** CNY */
  CNY = "CNY",
  /** EUR */
  EUR = "EUR",
  /** GBP */
  GBP = "GBP"
}

/** ActivationStatusEnum */
export enum ActivationStatusEnum {
  /** Active */
  Active = "Active",
  /** Pending */
  Pending = "Pending",
  /** Inactive */
  Inactive = "Inactive",
  /** Frozen */
  Frozen = "Frozen",
  /** Processing */
  Processing = "Processing",
  /** Other */
  Other = "Other"
}

/** ExchangeCurrencyEnum */
export enum ExchangeCurrencyEnum {
  /** USD */
  USD = "USD",
  /** CNY */
  CNY = "CNY",
  /** EUR */
  EUR = "EUR",
  /** GBP */
  GBP = "GBP",
  /** USD_CNH */
  USD_CNH = "USD_CNH",
  /** EUR_CNH */
  EUR_CNH = "EUR_CNH",
  /** EUR_USD */
  EUR_USD = "EUR_USD",
  /** USD_EUR */
  USD_EUR = "USD_EUR"
}

/** FeeChannelEnum */
export enum FeeChannelEnum {
  /** ACH */
  ACH = "ACH",
  /** Wallet */
  Wallet = "Wallet",
  /** SEPA */
  SEPA = "SEPA",
  /** FasterPayments */
  FasterPayments = "FasterPayments",
  /** SWIFT */
  SWIFT = "SWIFT",
  /** BACS */
  BACS = "BACS"
}

/** FeeTypeEnum */
export enum FeeTypeEnum {
  /** Rate */
  Rate = "Rate",
  /** Count */
  Count = "Count"
}

/** FeePayTypeEnum */
export enum FeePayTypeEnum {
  /** EE_Exchange */
  EE_Exchange = "EE_Exchange",
  /** EE_Outbound */
  EE_Outbound = "EE_Outbound",
  /** EE_Inbound */
  EE_Inbound = "EE_Inbound",
  /** QbitCard_Create_Card */
  QbitCard_Create_Card = "QbitCard_Create_Card",
  /** QbitCard_Transfer_In */
  QbitCard_Transfer_In = "QbitCard_Transfer_In"
}

/** BusinessTypeEnum */
export enum BusinessTypeEnum {
  /** EE */
  EE = "EE",
  /** QbitCard */
  QbitCard = "QbitCard"
}

/** ReduceTypeEnum */
export enum ReduceTypeEnum {
  /** Balance */
  Balance = "Balance",
  /** Transfer */
  Transfer = "Transfer"
}

/** QbitCardProviderEnum */
export enum QbitCardProviderEnum {
  /** PennyCard */
  PennyCard = "PennyCard",
  /** NiumCard */
  NiumCard = "NiumCard"
}

/** QbitCardTypeEnum */
export enum QbitCardTypeEnum {
  /** VISA */
  VISA = "VISA",
  /** Master */
  Master = "Master",
  /** Amex */
  Amex = "Amex"
}

/** TransactionDisplayStatusEnum */
export enum TransactionDisplayStatusEnum {
  /** Pending */
  Pending = "Pending",
  /** Processing */
  Processing = "Processing",
  /** Closed */
  Closed = "Closed",
  /** Cancelled */
  Cancelled = "Cancelled",
  /** Rejected */
  Rejected = "Rejected"
}

/** QbitCardTransactionTypeEnum */
export enum QbitCardTransactionTypeEnum {
  /** Credit */
  Credit = "Credit",
  /** Consumption */
  Consumption = "Consumption",
  /** TransferIn */
  TransferIn = "TransferIn",
  /** TransferOut */
  TransferOut = "TransferOut",
  /** Refund */
  Refund = "Refund",
  /** UnKnow */
  UnKnow = "UnKnow",
  /** DeleteCardRefund */
  DeleteCardRefund = "DeleteCardRefund",
  /** Fee_CreateCard */
  Fee_CreateCard = "Fee_CreateCard",
  /** Fee_Credit */
  Fee_Credit = "Fee_Credit"
}

/** SmsCodeEnum */
export enum SmsCodeEnum {
  /** Register */
  Register = "Register",
  /** Forget */
  Forget = "Forget",
  /** UpdateLoginPwd */
  UpdateLoginPwd = "UpdateLoginPwd",
  /** BindEmail */
  BindEmail = "BindEmail",
  /** UpdateEmail */
  UpdateEmail = "UpdateEmail",
  /** PaymentPwd */
  PaymentPwd = "PaymentPwd",
  /** UpdatePayPwd */
  UpdatePayPwd = "UpdatePayPwd"
}
