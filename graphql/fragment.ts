import { gql } from "@apollo/client/core";

/** UserConfig */
export const userConfig = gql`
  fragment userConfig on UserConfig {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
  }
`;

/** User */
export const user = gql`
  fragment user on User {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # phone
    phone
    # nickname
    nickname
    # email
    email
    # userConfig
    userConfig {
      ...userConfig
    }
    # 是否有交易密码
    hasPaymentPwd
    # 是否可以支付，修改支付密码后需要限制24小时
    canPay
  }

  ${userConfig}
`;

/** StatusLog */
export const statusLog = gql`
  fragment statusLog on StatusLog {
    # 状态名
    status
    # 更新时间
    updatedAt
  }
`;

/** Balance */
export const balance = gql`
  fragment balance on Balance {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # accountId
    accountId
    # walletType
    walletType
    # currency
    currency
    # 可用金额
    available
    # 处理中金额
    pending
    # 冻结中金额
    frozen
    # status
    status
  }
`;

/** Attachment */
export const attachment = gql`
  fragment attachment on Attachment {
    # 文件名
    filename
    # 链接
    fileUrl
  }
`;

/** Address */
export const address = gql`
  fragment address on Address {
    # 地址栏第一行
    addressLine1
    # 地址栏第二行
    addressLine2
    # 城市
    city
    # 州或省
    state
    # ISO_3166-1 二位字母代码， 如CN, US等
    country
    # 邮编
    postalCode
  }
`;

/** AccountExtend */
export const accountExtend = gql`
  fragment accountExtend on AccountExtend {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # kycStatus
    kycStatus
    # kybStatus
    kybStatus
    # accountId
    accountId
  }
`;

/** AccountFeeRate */
export const accountFeeRate = gql`
  fragment accountFeeRate on AccountFeeRate {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 账户id
    accountId
    # 币种
    currency
    # 计算模式
    key
    # 充值费
    value
    # 计算方式
    mathType
    # 付款方式
    payType
    # 业务类型
    businessType
    # 扣源余额还是扣目标余额
    reduceType
  }
`;

/** Account */
export const account = gql`
  fragment account on Account {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 认证名字
    verifiedName
    # accountType
    accountType
    # 给用户分配的6位唯一数字ID
    displayId
    # status
    status
    # kycStatus
    kycStatus
    # kybStatus
    kybStatus
    # 账户来源邀请码
    referralCodeId
    # type
    type
    # 账户费率
    feeList {
      ...accountFeeRate
    }
    # balances
    balances {
      ...balance
    }
    # bankAccounts
    bankAccounts {
      ...bankAccount
    }
    # accountExtends
    accountExtends {
      ...accountExtend
    }
  }

  ${accountFeeRate}
  ${balance}
  ${bankAccount}
  ${accountExtend}
`;

/** BankAccount */
export const bankAccount = gql`
  fragment bankAccount on BankAccount {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 全球账户的account id
    accountId
    # 对应的balance Id
    balanceId
    # 账户持有人姓名
    accountName
    # 账号
    accountNo
    # 银行名称
    bankName
    # SWIFT/BIC
    swift
    # Routing number
    routingNumber
    # 支行名称
    branchName
    # 支行代码
    branchCode
    # 地址
    accountAddress {
      ...address
    }
    # 币种
    currency
    # 状态
    status
    # 最后更新时间
    lastUpdateTime
    # 账户类型（对公、对私）
    type
    # 身份证号码
    idNumber
    # 用途种类，如用于提现withdraw, 还是付款payout
    category
    # 来源，账户的提供方， 如EE，CFSB
    source
    # 提供方平台上的id
    sourceId
    # 提供方平台上的wallet id
    sourceWalletId
    # 附件
    attachments {
      ...attachment
    }
    # 该银行账户和账户所有者的关系
    relationship
    # balance
    balance {
      ...balance
    }
    # account
    account {
      ...account
    }
  }

  ${address}

  ${attachment}

  ${balance}
  ${account}
`;

/** QbitCard */
export const qbitCard = gql`
  fragment qbitCard on QbitCard {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # accountId
    accountId
    # userName
    userName
    # firstName
    firstName
    # lastName
    lastName
    # currency
    currency
    # status
    status
    # qbitCardNo
    qbitCardNo
    # qbitCardNoLastFour
    qbitCardNoLastFour
    # provider
    provider
    # type
    type
    # expiryDate
    expiryDate
    # cvv
    cvv
    # useType
    useType
    # token
    token
    # label
    label
    # cardholderInfo
    cardholderInfo
    # groupId
    groupId
    # userId
    userId
    # balanceId
    balanceId
    # apiBalance
    apiBalance
    # balanceInfo
    balanceInfo {
      ...balance
    }
  }

  ${balance}
`;

/** ReferralCode */
export const referralCode = gql`
  fragment referralCode on ReferralCode {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 用户userid或者渠道方userId
    userId
    # 邀请码所属管理员(销售id)
    adminId
    # code
    code
    # 状态
    status
    # 销售/用户
    type
    # user
    user {
      ...user
    }
    # admin
    admin {
      ...user
    }
  }

  ${user}
  ${user}
`;

/** SystemConfig */
export const systemConfig = gql`
  fragment systemConfig on SystemConfig {
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 备注
    remarks
    # id
    id
    # 状态
    status
  }
`;

/** InboundTransfer */
export const inboundTransfer = gql`
  fragment inboundTransfer on InboundTransfer {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 所属账户id
    accountId
    # 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id))
    sender
    # 源交易类型(Wallet, PayPal, 银行卡，银行账户)
    senderType
    # 源的余额id
    senderBalanceId
    # 目标交易id(Wallet, PayPal, 银行卡，银行账户的id)
    recipient
    # 目标交易类型
    recipientType
    # 源币种
    senderCurrency
    # 目标的余额id
    recipientBalanceId
    # 目标币种
    recipientCurrency
    # senderFee
    senderFee
    # recipientFee
    recipientFee
    # recipientFeeType
    recipientFeeType
    # senderCost
    senderCost
    # recipientCost
    recipientCost
    # status
    status
    # displayStatus
    displayStatus
    # 记录状态变化的时间
    statusLog {
      ...statusLog
    }
    # 交易时间
    transactionTime
    # 付款人名称
    senderName
    # 充值截图
    photos {
      ...attachment
    }
    # 流水号
    fromOrderId
    # 三方过来的原始数据
    rawData
    # account
    account {
      ...account
    }
  }

  ${statusLog}

  ${attachment}

  ${account}
`;

/** QbitCardTransaction */
export const qbitCardTransaction = gql`
  fragment qbitCardTransaction on QbitCardTransaction {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # accountId
    accountId
    # 量子卡 id
    cardId
    # 币种：USD,CNY,EUR
    currency
    # displayStatus
    displayStatus
    # 结算金额
    platformType
    # 结算金额
    settleAmount
    # 原始金额
    originalAmount
    # 费用
    fee
    # 详情
    detail
    # businessType
    businessType
    # 三方订单Id
    sourceId
    # 交易时间
    transactionTime
    # qbitCardInfo
    qbitCardInfo {
      ...qbitCard
    }
  }

  ${qbitCard}
`;

/** BankAccountsOutput */
export const bankAccountsOutput = gql`
  fragment bankAccountsOutput on BankAccountsOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...bankAccount
    }
  }

  ${bankAccount}
`;

/** AccountOutput */
export const accountOutput = gql`
  fragment accountOutput on AccountOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...account
    }
  }

  ${account}
`;

/** BalancesOutput */
export const balancesOutput = gql`
  fragment balancesOutput on BalancesOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...balance
    }
  }

  ${balance}
`;

/** UsersOutput */
export const usersOutput = gql`
  fragment usersOutput on UsersOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...user
    }
  }

  ${user}
`;

/** ReferralCodeOutput */
export const referralCodeOutput = gql`
  fragment referralCodeOutput on ReferralCodeOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...referralCode
    }
  }

  ${referralCode}
`;

/** QbitCardOutput */
export const qbitCardOutput = gql`
  fragment qbitCardOutput on QbitCardOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...qbitCard
    }
  }

  ${qbitCard}
`;

/** QbitCardTransactionOutput */
export const qbitCardTransactionOutput = gql`
  fragment qbitCardTransactionOutput on QbitCardTransactionOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...qbitCardTransaction
    }
  }

  ${qbitCardTransaction}
`;

/** QbitCardTransactionStatisticsOutput */
export const qbitCardTransactionStatisticsOutput = gql`
  fragment qbitCardTransactionStatisticsOutput on QbitCardTransactionStatisticsOutput {
    # 账号资金转入
    transferInAmountSum
    # 账户资金转出
    transferOutAmountSum
    # 累计卡消费
    consumptionSum
    # 开卡费用
    createCardFeeSum
    # 卡消费总笔数
    consumptionCount
    # 已完成笔数
    successCount
    # 处理中笔数
    pendingCount
    # 失败笔数
    failCount
    # 拒付笔数
    declinedCount
    # 平台类型
    platformType
  }
`;

/** QbitCardStatisticsOutput */
export const qbitCardStatisticsOutput = gql`
  fragment qbitCardStatisticsOutput on QbitCardStatisticsOutput {
    # 卡的提供者
    provider
    # 激活的卡数量
    activeCardsCount
    # 关停的卡数量
    inactiveCardsCount
    # 冻结的卡数量
    frozenCardsCount
    # 删除处理中的卡数量
    processingCardsCount
    # 特殊情况的卡数量
    otherCardsCount
    # 所有卡数量
    allCardsCount
    # 卡内总余额
    qbitCardApiBalanceAmountSum
    # 去重标签列表
    labels
    # 去重用户名列表
    userNames
  }
`;

/** QbitCardPrivateInfoOutput */
export const qbitCardPrivateInfoOutput = gql`
  fragment qbitCardPrivateInfoOutput on QbitCardPrivateInfoOutput {
    # 卡号
    qbitCardNo
    # cvv
    cvv
    # 过期年
    expYear
    # 过期月
    expMonth
  }
`;

/** 批量开卡进度返回 */
export const batchCreateQbitCardProcessOutput = gql`
  fragment batchCreateQbitCardProcessOutput on BatchCreateQbitCardProcessOutput {
    # 批量总数目
    batchCount
    # 当前数目
    currentCount
  }
`;

/** InboundTransfersOutput */
export const inboundTransfersOutput = gql`
  fragment inboundTransfersOutput on InboundTransfersOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...inboundTransfer
    }
  }

  ${inboundTransfer}
`;

/** OutboundTransfersOutput */
export const outboundTransfersOutput = gql`
  fragment outboundTransfersOutput on OutboundTransfersOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...outboundTransfer
    }
  }

  ${outboundTransfer}
`;

/** OutboundTransfer */
export const outboundTransfer = gql`
  fragment outboundTransfer on OutboundTransfer {
    # id
    id
    # 备注
    remarks
    # createTime
    createTime
    # updateTime
    updateTime
    # deleteTime
    deleteTime
    # version
    version
    # 所属账户id
    accountId
    # 源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id))
    sender
    # 源交易类型(Wallet, PayPal, 银行卡，银行账户)
    senderType
    # 源的余额id
    senderBalanceId
    # 目标交易id(Wallet, PayPal, 银行卡，银行账户的id)
    recipient
    # 目标交易类型
    recipientType
    # 源币种
    senderCurrency
    # 目标的余额id
    recipientBalanceId
    # 目标币种
    recipientCurrency
    # senderFee
    senderFee
    # recipientFee
    recipientFee
    # recipientFeeType
    recipientFeeType
    # senderCost
    senderCost
    # recipientCost
    recipientCost
    # status
    status
    # displayStatus
    displayStatus
    # 记录状态变化的时间
    statusLog {
      ...statusLog
    }
    # 交易时间
    transactionTime
    # 付款目的
    reason
    # 三方processor的名字
    processor
    # 三方processor的order id
    processorOrderId
    # beneficiaries
    beneficiaries {
      ...bankAccount
    }
    # account
    account {
      ...account
    }
  }

  ${statusLog}

  ${bankAccount}
  ${account}
`;

/** SystemConfigOutput */
export const systemConfigOutput = gql`
  fragment systemConfigOutput on SystemConfigOutput {
    # pageTotal
    pageTotal
    # total
    total
    # data
    data {
      ...systemConfig
    }
  }

  ${systemConfig}
`;

/** BatchCreateQbitCardOutput */
export const batchCreateQbitCardOutput = gql`
  fragment batchCreateQbitCardOutput on BatchCreateQbitCardOutput {
    # QbitCard
    ... on QbitCard {
      ...qbitCard
    }
    # QbitBoolean
    ... on QbitBoolean {
      ...qbitBoolean
    }
  }
  ${qbitCard}
  ${qbitBoolean}
`;

/** 执行结果 */
export const qbitBoolean = gql`
  fragment qbitBoolean on QbitBoolean {
    # 执行结果
    result
  }
`;
