const display = [
  {
    kind: "OBJECT",
    name: "UserConfig",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "User",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "phone",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "nickname",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "email",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "userConfig",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "UserConfig", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "hasPaymentPwd",
        description: "是否有交易密码",
        args: [],
        type: { kind: "SCALAR", name: "Boolean", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "canPay",
        description: "是否可以支付，修改支付密码后需要限制24小时",
        args: [],
        type: { kind: "SCALAR", name: "Boolean", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "StatusLog",
    description: null,
    fields: [
      {
        name: "status",
        description: "状态名",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updatedAt",
        description: "更新时间",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "DateTime", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Balance",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "walletType",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "WalletTypeEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currency",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "CurrencyEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "available",
        description: "可用金额",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "pending",
        description: "处理中金额",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "frozen",
        description: "冻结中金额",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Attachment",
    description: null,
    fields: [
      {
        name: "filename",
        description: "文件名",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "fileUrl",
        description: "链接",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Address",
    description: null,
    fields: [
      {
        name: "addressLine1",
        description: "地址栏第一行",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "addressLine2",
        description: "地址栏第二行",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "city",
        description: "城市",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "state",
        description: "州或省",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "country",
        description: "ISO_3166-1 二位字母代码， 如CN, US等",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "postalCode",
        description: "邮编",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "AccountExtend",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "kycStatus",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "kybStatus",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "AccountFeeRate",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: "账户id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currency",
        description: "币种",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "ExchangeCurrencyEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "key",
        description: "计算模式",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "FeeChannelEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "value",
        description: "充值费",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "mathType",
        description: "计算方式",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "FeeTypeEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "payType",
        description: "付款方式",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "FeePayTypeEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "businessType",
        description: "业务类型",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "BusinessTypeEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "reduceType",
        description: "扣源余额还是扣目标余额",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "ReduceTypeEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Account",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "verifiedName",
        description: "认证名字",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountType",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "displayId",
        description: "给用户分配的6位唯一数字ID",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "kycStatus",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "kybStatus",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "referralCodeId",
        description: "账户来源邀请码",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "feeList",
        description: "账户费率",
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "AccountFeeRate", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balances",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "Balance", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "bankAccounts",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BankAccount", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountExtends",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "AccountExtend", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "BankAccount",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: "全球账户的account id",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balanceId",
        description: "对应的balance Id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountName",
        description: "账户持有人姓名",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountNo",
        description: "账号",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "bankName",
        description: "银行名称",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "swift",
        description: "SWIFT/BIC",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "routingNumber",
        description: "Routing number",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "branchName",
        description: "支行名称",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "branchCode",
        description: "支行代码",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountAddress",
        description: "地址",
        args: [],
        type: { kind: "OBJECT", name: "Address", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currency",
        description: "币种",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: "状态",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "lastUpdateTime",
        description: "最后更新时间",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: "账户类型（对公、对私）",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "idNumber",
        description: "身份证号码",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "category",
        description: "用途种类，如用于提现withdraw, 还是付款payout",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "source",
        description: "来源，账户的提供方， 如EE，CFSB",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sourceId",
        description: "提供方平台上的id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sourceWalletId",
        description: "提供方平台上的wallet id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "attachments",
        description: "附件",
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "Attachment", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "relationship",
        description: "该银行账户和账户所有者的关系",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balance",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "Balance", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "account",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "Account", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCard",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "userName",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "firstName",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "lastName",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currency",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "CurrencyEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "ActivationStatusEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardNo",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardNoLastFour",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "provider",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "QbitCardProviderEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: null,
        args: [],
        type: { kind: "ENUM", name: "QbitCardTypeEnum", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "expiryDate",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "cvv",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "useType",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "token",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "label",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "cardholderInfo",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "JSON", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "groupId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "userId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balanceId",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "apiBalance",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balanceInfo",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "Balance", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "ReferralCode",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "userId",
        description: "用户userid或者渠道方userId",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "adminId",
        description: "邀请码所属管理员(销售id)",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "code",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: "状态",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: "销售/用户",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "user",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "User", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "admin",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "User", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "SystemConfig",
    description: null,
    fields: [
      {
        name: "createTime",
        description: "createTime",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: "updateTime",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: "deleteTime",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: "version",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "id",
        description: "id",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: "状态",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "InboundTransfer",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: "所属账户id",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sender",
        description: "源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id))",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderType",
        description: "源交易类型(Wallet, PayPal, 银行卡，银行账户)",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderBalanceId",
        description: "源的余额id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipient",
        description: "目标交易id(Wallet, PayPal, 银行卡，银行账户的id)",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientType",
        description: "目标交易类型",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderCurrency",
        description: "源币种",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientBalanceId",
        description: "目标的余额id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientCurrency",
        description: "目标币种",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderFee",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientFee",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientFeeType",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderCost",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientCost",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "displayStatus",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "statusLog",
        description: "记录状态变化的时间",
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "StatusLog", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "transactionTime",
        description: "交易时间",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderName",
        description: "付款人名称",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "photos",
        description: "充值截图",
        args: [],
        type: { kind: "OBJECT", name: "Attachment", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "fromOrderId",
        description: "流水号",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "rawData",
        description: "三方过来的原始数据",
        args: [],
        type: { kind: "SCALAR", name: "JSON", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "account",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "Account", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardTransaction",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "cardId",
        description: "量子卡 id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currency",
        description: "币种：USD,CNY,EUR",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "displayStatus",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "platformType",
        description: "结算金额",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "settleAmount",
        description: "结算金额",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "originalAmount",
        description: "原始金额",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "fee",
        description: "费用",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "detail",
        description: "详情",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "businessType",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sourceId",
        description: "三方订单Id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "transactionTime",
        description: "交易时间",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardInfo",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "QbitCard", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "BankAccountsOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BankAccount", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "AccountOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "Account", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "BalancesOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "Balance", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "UsersOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "User", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "ReferralCodeOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "ReferralCode", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "QbitCard", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardTransactionOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "QbitCardTransaction", ofType: null }
            }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardTransactionStatisticsOutput",
    description: null,
    fields: [
      {
        name: "transferInAmountSum",
        description: "账号资金转入",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "transferOutAmountSum",
        description: "账户资金转出",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "consumptionSum",
        description: "累计卡消费",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createCardFeeSum",
        description: "开卡费用",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "consumptionCount",
        description: "卡消费总笔数",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "successCount",
        description: "已完成笔数",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "pendingCount",
        description: "处理中笔数",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "failCount",
        description: "失败笔数",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "declinedCount",
        description: "拒付笔数",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "platformType",
        description: "平台类型",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "QbitCardProviderEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardStatisticsOutput",
    description: null,
    fields: [
      {
        name: "provider",
        description: "卡的提供者",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "QbitCardProviderEnum", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "activeCardsCount",
        description: "激活的卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "inactiveCardsCount",
        description: "关停的卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "frozenCardsCount",
        description: "冻结的卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "processingCardsCount",
        description: "删除处理中的卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "otherCardsCount",
        description: "特殊情况的卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "allCardsCount",
        description: "所有卡数量",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardApiBalanceAmountSum",
        description: "卡内总余额",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "labels",
        description: "去重标签列表",
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "userNames",
        description: "去重用户名列表",
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitCardPrivateInfoOutput",
    description: null,
    fields: [
      {
        name: "qbitCardNo",
        description: "卡号",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "cvv",
        description: "cvv",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "expYear",
        description: "过期年",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "expMonth",
        description: "过期月",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "BatchCreateQbitCardProcessOutput",
    description: "批量开卡进度返回",
    fields: [
      {
        name: "batchCount",
        description: "批量总数目",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Int", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "currentCount",
        description: "当前数目",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Int", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "InboundTransfersOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "InboundTransfer", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "OutboundTransfersOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "OutboundTransfer", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "OutboundTransfer",
    description: null,
    fields: [
      {
        name: "id",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "remarks",
        description: "备注",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "createTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteTime",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "version",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accountId",
        description: "所属账户id",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sender",
        description: "源交易账号来源((Wallet, PayPal, 银行卡，银行账户的id))",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderType",
        description: "源交易类型(Wallet, PayPal, 银行卡，银行账户)",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderBalanceId",
        description: "源的余额id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipient",
        description: "目标交易id(Wallet, PayPal, 银行卡，银行账户的id)",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientType",
        description: "目标交易类型",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderCurrency",
        description: "源币种",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientBalanceId",
        description: "目标的余额id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientCurrency",
        description: "目标币种",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderFee",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientFee",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientFeeType",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "senderCost",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "recipientCost",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Float", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "status",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "displayStatus",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "statusLog",
        description: "记录状态变化的时间",
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "StatusLog", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "transactionTime",
        description: "交易时间",
        args: [],
        type: { kind: "SCALAR", name: "DateTime", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "reason",
        description: "付款目的",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "processor",
        description: "三方processor的名字",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "processorOrderId",
        description: "三方processor的order id",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "beneficiaries",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BankAccount", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "account",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "Account", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "SystemConfigOutput",
    description: null,
    fields: [
      {
        name: "pageTotal",
        description: "pageTotal",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "total",
        description: "total",
        args: [],
        type: { kind: "SCALAR", name: "Float", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "data",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "SystemConfig", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Query",
    description: null,
    fields: [
      {
        name: "bankAccounts",
        description: "查询银行账户列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BankAccountsOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "accounts",
        description: "accounts 列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "AccountOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "balances",
        description: "查询Balance 列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BalancesOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "users",
        description: "查询用户列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "UsersOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getAdmins",
        description: "后台查询用户列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "UsersOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "isUserIn",
        description: "查询用户手机号或者邮箱是否存在",
        args: [
          {
            name: "phoneOrEmail",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "referralCodes",
        description: "查询邀请码列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "ReferralCodeOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "InboundTransfers",
        description: "查询入账的交易列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: { kind: "OBJECT", name: "InboundTransfersOutput", ofType: null }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "outboundTransfers",
        description: "查询出账的交易列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: { kind: "OBJECT", name: "OutboundTransfersOutput", ofType: null }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "outboundTransfersFee",
        description: "查询出账费率",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "OutboundTransfersFeeDto", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardList",
        description: "获取量子卡列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "QbitCardOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getTermsAndConditions",
        description: "获取量子卡平台条款",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "GetTermsAndConditionsInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "JSON", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getQbitCardPrivateInfo",
        description: "获取量子私密信息",
        args: [
          {
            name: "cardId",
            description: "卡的数据库id",
            type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: { kind: "OBJECT", name: "QbitCardPrivateInfoOutput", ofType: null }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getBatchCreateQbitCardProcess",
        description: "获取批量开卡进度",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "BatchCreateQbitCardProcessInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: { kind: "OBJECT", name: "BatchCreateQbitCardProcessOutput", ofType: null }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "qbitCardTransactionList",
        description: "获取量子卡交易列表",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: { kind: "OBJECT", name: "QbitCardTransactionOutput", ofType: null }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getQbitCardStatistics",
        description: "获取量子卡余额和卡数量",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "QbitCardStatisticsInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "QbitCardStatisticsOutput", ofType: null }
            }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "getQbitCardTransactionStatistics",
        description: "获取账户交易信息",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "QbitCardTransactionStatisticsInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "QbitCardTransactionStatisticsOutput", ofType: null }
            }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "systemConfigs",
        description: "查询用户可见配置表数据",
        args: [
          {
            name: "queryParams",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "QueryParams", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "SystemConfigOutput", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "Mutation",
    description: null,
    fields: [
      {
        name: "bankAccount",
        description: "创建收款人的银行账号",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "CreateBankAccountInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "BankAccount", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateBankAccountStatus",
        description: "提交收款方审核状态",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "UpdateStatusDto", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "register",
        description: "注册",
        args: [
          {
            name: "data",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "SignUpDto", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "User", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "logout",
        description: "登出",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateUser",
        description: "更新用户部分字段",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "UserInputUpdate", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateUserNoId",
        description: "更新用户部分字段",
        args: [
          {
            name: "data",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "UserInput", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "User", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "sendVerifCode",
        description: "发送注册验证码",
        args: [
          {
            name: "data",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "VerCodeBase", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "checkVerifCode",
        description: "验证验证码",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "CheckVerCode", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "setPayPwd",
        description: "设置交易密码",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "SetPayPwdDto", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updatePayPwd",
        description: "修改交易密码",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "UpdatePayPwdDto", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "creatInviteCode",
        description: "创建邀请码",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "InputInviteCode", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deleteInviteCode",
        description: "删除指定邀请码",
        args: [
          {
            name: "codeId",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "outboundTransfer",
        description: "创建出账交易记录",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "CreateOutboundTransferInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "OutboundTransfer", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "batchCreateQbitCard",
        description: "批量新开量子卡,接口商户和admin都能访问",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "BatchCreateQbitCardInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "UNION", name: "BatchCreateQbitCardOutput", ofType: null }
            }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "increaseQbitCardLimit",
        description: "增加额度,共享的卡额度不需要",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "IncreaseQbitCarLimitInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "decreaseQbitCardLimit",
        description: "减少额度",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "DecreaseQbitCarLimitInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "suspendQbitCard",
        description: "冻结卡",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "SuspendQbitCardInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "enableQbitCard",
        description: "解冻卡",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "EnableQbitCarLimitInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateQbitCard",
        description: "更新量子卡",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "UpdateQbitCardInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "QbitCard", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateTermsAndConditions",
        description: "更新量子卡平台条款",
        args: [
          {
            name: "data",
            description: null,
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "UpdateTermsAndConditionsInput", ofType: null }
            },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "JSON", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "updateKyInfo",
        description: "更新用户KY状态",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "login",
        description: "登录",
        args: [
          {
            name: "data",
            description: null,
            type: { kind: "NON_NULL", name: null, ofType: { kind: "INPUT_OBJECT", name: "LoginDto", ofType: null } },
            defaultValue: null
          }
        ],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "User", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "QbitBoolean",
    description: "执行结果",
    fields: [
      {
        name: "result",
        description: "执行结果",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__Schema",
    description:
      "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
    fields: [
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "types",
        description: "A list of all types supported by this server.",
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "queryType",
        description: "The type that query operations will be rooted at.",
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "mutationType",
        description: "If this server supports mutation, the type that mutation operations will be rooted at.",
        args: [],
        type: { kind: "OBJECT", name: "__Type", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "subscriptionType",
        description: "If this server support subscription, the type that subscription operations will be rooted at.",
        args: [],
        type: { kind: "OBJECT", name: "__Type", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "directives",
        description: "A list of all directives supported by this server.",
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Directive", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__Type",
    description:
      "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
    fields: [
      {
        name: "kind",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "ENUM", name: "__TypeKind", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "name",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "specifiedByUrl",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "fields",
        description: null,
        args: [
          {
            name: "includeDeprecated",
            description: null,
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          }
        ],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Field", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "interfaces",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "possibleTypes",
        description: null,
        args: [],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "enumValues",
        description: null,
        args: [
          {
            name: "includeDeprecated",
            description: null,
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          }
        ],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__EnumValue", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "inputFields",
        description: null,
        args: [
          {
            name: "includeDeprecated",
            description: null,
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          }
        ],
        type: {
          kind: "LIST",
          name: null,
          ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__InputValue", ofType: null } }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "ofType",
        description: null,
        args: [],
        type: { kind: "OBJECT", name: "__Type", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__Field",
    description:
      "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
    fields: [
      {
        name: "name",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "args",
        description: null,
        args: [
          {
            name: "includeDeprecated",
            description: null,
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          }
        ],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__InputValue", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "isDeprecated",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deprecationReason",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__InputValue",
    description:
      "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
    fields: [
      {
        name: "name",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "type",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__Type", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "defaultValue",
        description: "A GraphQL-formatted string representing the default value for this input value.",
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "isDeprecated",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deprecationReason",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__EnumValue",
    description:
      "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
    fields: [
      {
        name: "name",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "isDeprecated",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "deprecationReason",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  },
  {
    kind: "OBJECT",
    name: "__Directive",
    description:
      "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
    fields: [
      {
        name: "name",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "String", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "description",
        description: null,
        args: [],
        type: { kind: "SCALAR", name: "String", ofType: null },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "isRepeatable",
        description: null,
        args: [],
        type: { kind: "NON_NULL", name: null, ofType: { kind: "SCALAR", name: "Boolean", ofType: null } },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "locations",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "ENUM", name: "__DirectiveLocation", ofType: null }
            }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      },
      {
        name: "args",
        description: null,
        args: [],
        type: {
          kind: "NON_NULL",
          name: null,
          ofType: {
            kind: "LIST",
            name: null,
            ofType: { kind: "NON_NULL", name: null, ofType: { kind: "OBJECT", name: "__InputValue", ofType: null } }
          }
        },
        isDeprecated: false,
        deprecationReason: null
      }
    ],
    inputFields: null,
    interfaces: [],
    enumValues: null,
    possibleTypes: null
  }
];
