export enum WalletTypeEnum {
  /** EasyEuro */
  EasyEuro = "EasyEuro",
  /** QbitCardWallet */
  QbitCardWallet = "QbitCardWallet",
  /** PennyCardWallet */
  PennyCardWallet = "PennyCardWallet",
  /** QbitWallet */
  QbitWallet = "QbitWallet"
}
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
export enum FeeTypeEnum {
  /** Rate */
  Rate = "Rate",
  /** Count */
  Count = "Count"
}
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
export enum BusinessTypeEnum {
  /** EE */
  EE = "EE",
  /** QbitCard */
  QbitCard = "QbitCard"
}
export enum ReduceTypeEnum {
  /** Balance */
  Balance = "Balance",
  /** Transfer */
  Transfer = "Transfer"
}
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
export enum QbitCardProviderEnum {
  /** PrivacyCard */
  PrivacyCard = "PrivacyCard",
  /** PennyCard */
  PennyCard = "PennyCard",
  /** NiumCard */
  NiumCard = "NiumCard",
  /** PaycertifyCard */
  PaycertifyCard = "PaycertifyCard",
  /** WeexCard */
  WeexCard = "WeexCard"
}
export enum QbitCardTypeEnum {
  /** VISA */
  VISA = "VISA",
  /** Master */
  Master = "Master",
  /** Amex */
  Amex = "Amex"
}
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
