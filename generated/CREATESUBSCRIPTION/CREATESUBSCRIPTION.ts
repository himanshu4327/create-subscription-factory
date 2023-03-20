// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BuyToken extends ethereum.Event {
  get params(): BuyToken__Params {
    return new BuyToken__Params(this);
  }
}

export class BuyToken__Params {
  _event: BuyToken;

  constructor(event: BuyToken) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subscriptionAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get commited(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get commitmentRatio(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get at(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CancelledPresale extends ethereum.Event {
  get params(): CancelledPresale__Params {
    return new CancelledPresale__Params(this);
  }
}

export class CancelledPresale__Params {
  _event: CancelledPresale;

  constructor(event: CancelledPresale) {
    this._event = event;
  }

  get subscriptionAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get CancelledTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CreatedPresale extends ethereum.Event {
  get params(): CreatedPresale__Params {
    return new CreatedPresale__Params(this);
  }
}

export class CreatedPresale__Params {
  _event: CreatedPresale;

  constructor(event: CreatedPresale) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get presaleAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get launchpadType(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get createdTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class UpdatedPresale extends ethereum.Event {
  get params(): UpdatedPresale__Params {
    return new UpdatedPresale__Params(this);
  }
}

export class UpdatedPresale__Params {
  _event: UpdatedPresale;

  constructor(event: UpdatedPresale) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get subscriptionAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get UpdatedTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CREATESUBSCRIPTION__getFinishCalculateResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0Struct extends ethereum.Tuple {
  get presale(): CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0PresaleStruct {
    return changetype<
      CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0PresaleStruct
    >(this[0].toTuple());
  }

  get basicDetail(): CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0BasicDetailStruct {
    return changetype<
      CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0BasicDetailStruct
    >(this[1].toTuple());
  }

  get social(): CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0SocialStruct {
    return changetype<
      CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0SocialStruct
    >(this[2].toTuple());
  }

  get status(): i32 {
    return this[3].toI32();
  }

  get feeOptions(): i32 {
    return this[4].toI32();
  }

  get paymentOptions(): i32 {
    return this[5].toI32();
  }

  get saleType(): i32 {
    return this[6].toI32();
  }

  get refundType(): i32 {
    return this[7].toI32();
  }

  get launchpadType(): i32 {
    return this[8].toI32();
  }

  get subscriptionAddress(): Address {
    return this[9].toAddress();
  }

  get tokenAddress(): Address {
    return this[10].toAddress();
  }

  get presaleOwnerAddress(): Address {
    return this[11].toAddress();
  }

  get raisedTokenAmount(): BigInt {
    return this[12].toBigInt();
  }

  get referralInPercent(): BigInt {
    return this[13].toBigInt();
  }

  get isFinished(): boolean {
    return this[14].toBoolean();
  }
}

export class CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0PresaleStruct extends ethereum.Tuple {
  get hardCap(): BigInt {
    return this[0].toBigInt();
  }

  get softCap(): BigInt {
    return this[1].toBigInt();
  }

  get hardCapTokenPerUser(): BigInt {
    return this[2].toBigInt();
  }

  get subscriptionRate(): BigInt {
    return this[3].toBigInt();
  }

  get listingRate(): BigInt {
    return this[4].toBigInt();
  }

  get liquidityAmount(): BigInt {
    return this[5].toBigInt();
  }

  get router(): Address {
    return this[6].toAddress();
  }

  get currency(): Address {
    return this[7].toAddress();
  }

  get liquidtyPercentage(): BigInt {
    return this[8].toBigInt();
  }

  get liquidityLockupInMinutes(): BigInt {
    return this[9].toBigInt();
  }

  get startAt(): BigInt {
    return this[10].toBigInt();
  }

  get endAt(): BigInt {
    return this[11].toBigInt();
  }
}

export class CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0BasicDetailStruct extends ethereum.Tuple {
  get logoURL(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get website(): string {
    return this[2].toString();
  }
}

export class CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0SocialStruct extends ethereum.Tuple {
  get facebookURL(): Bytes {
    return this[0].toBytes();
  }

  get twitterURL(): Bytes {
    return this[1].toBytes();
  }

  get githubURL(): Bytes {
    return this[2].toBytes();
  }

  get telegramURL(): Bytes {
    return this[3].toBytes();
  }

  get instagramURL(): Bytes {
    return this[4].toBytes();
  }

  get discordURL(): Bytes {
    return this[5].toBytes();
  }

  get redditURL(): Bytes {
    return this[6].toBytes();
  }

  get youtubeVideoURL(): Bytes {
    return this[7].toBytes();
  }
}

export class CREATESUBSCRIPTION extends ethereum.SmartContract {
  static bind(address: Address): CREATESUBSCRIPTION {
    return new CREATESUBSCRIPTION("CREATESUBSCRIPTION", address);
  }

  buyTokenAmount(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "buyTokenAmount",
      "buyTokenAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_buyTokenAmount(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "buyTokenAmount",
      "buyTokenAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  commitedAmount(_subscriptionAddress: Address, _userAddress: Address): BigInt {
    let result = super.call(
      "commitedAmount",
      "commitedAmount(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_subscriptionAddress),
        ethereum.Value.fromAddress(_userAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_commitedAmount(
    _subscriptionAddress: Address,
    _userAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "commitedAmount",
      "commitedAmount(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_subscriptionAddress),
        ethereum.Value.fromAddress(_userAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  emergencyWithdrawTimeLeft(
    _subscriptionAddress: Address,
    account: Address
  ): BigInt {
    let result = super.call(
      "emergencyWithdrawTimeLeft",
      "emergencyWithdrawTimeLeft(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_subscriptionAddress),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_emergencyWithdrawTimeLeft(
    _subscriptionAddress: Address,
    account: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "emergencyWithdrawTimeLeft",
      "emergencyWithdrawTimeLeft(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_subscriptionAddress),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getContributorList(_subscriptionAddress: Address): Array<Address> {
    let result = super.call(
      "getContributorList",
      "getContributorList(address):(address[])",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );

    return result[0].toAddressArray();
  }

  try_getContributorList(
    _subscriptionAddress: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getContributorList",
      "getContributorList(address):(address[])",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getFinishCalculate(
    _subscriptionAddress: Address
  ): CREATESUBSCRIPTION__getFinishCalculateResult {
    let result = super.call(
      "getFinishCalculate",
      "getFinishCalculate(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );

    return new CREATESUBSCRIPTION__getFinishCalculateResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getFinishCalculate(
    _subscriptionAddress: Address
  ): ethereum.CallResult<CREATESUBSCRIPTION__getFinishCalculateResult> {
    let result = super.tryCall(
      "getFinishCalculate",
      "getFinishCalculate(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CREATESUBSCRIPTION__getFinishCalculateResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getSubscriptionAddressToCreateSubscriptionDetail(
    _subscriptionAddress: Address
  ): CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0Struct {
    let result = super.call(
      "getSubscriptionAddressToCreateSubscriptionDetail",
      "getSubscriptionAddressToCreateSubscriptionDetail(address):(((uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256,uint256,uint256),(string,string,string),(bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32),uint8,uint8,uint8,uint8,uint8,uint8,address,address,address,uint256,uint256,bool))",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );

    return changetype<
      CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0Struct
    >(result[0].toTuple());
  }

  try_getSubscriptionAddressToCreateSubscriptionDetail(
    _subscriptionAddress: Address
  ): ethereum.CallResult<
    CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0Struct
  > {
    let result = super.tryCall(
      "getSubscriptionAddressToCreateSubscriptionDetail",
      "getSubscriptionAddressToCreateSubscriptionDetail(address):(((uint256,uint256,uint256,uint256,uint256,uint256,address,address,uint256,uint256,uint256,uint256),(string,string,string),(bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32,bytes32),uint8,uint8,uint8,uint8,uint8,uint8,address,address,address,uint256,uint256,bool))",
      [ethereum.Value.fromAddress(_subscriptionAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<
        CREATESUBSCRIPTION__getSubscriptionAddressToCreateSubscriptionDetailResultValue0Struct
      >(value[0].toTuple())
    );
  }

  userToSubscriptionAddressToClaimed(param0: Address, param1: Address): BigInt {
    let result = super.call(
      "userToSubscriptionAddressToClaimed",
      "userToSubscriptionAddressToClaimed(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_userToSubscriptionAddressToClaimed(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userToSubscriptionAddressToClaimed",
      "userToSubscriptionAddressToClaimed(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userToSubscriptionAddressToRefunded(
    param0: Address,
    param1: Address
  ): BigInt {
    let result = super.call(
      "userToSubscriptionAddressToRefunded",
      "userToSubscriptionAddressToRefunded(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBigInt();
  }

  try_userToSubscriptionAddressToRefunded(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userToSubscriptionAddressToRefunded",
      "userToSubscriptionAddressToRefunded(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyPresaleTokenCall extends ethereum.Call {
  get inputs(): BuyPresaleTokenCall__Inputs {
    return new BuyPresaleTokenCall__Inputs(this);
  }

  get outputs(): BuyPresaleTokenCall__Outputs {
    return new BuyPresaleTokenCall__Outputs(this);
  }
}

export class BuyPresaleTokenCall__Inputs {
  _call: BuyPresaleTokenCall;

  constructor(call: BuyPresaleTokenCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _whitelist(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BuyPresaleTokenCall__Outputs {
  _call: BuyPresaleTokenCall;

  constructor(call: BuyPresaleTokenCall) {
    this._call = call;
  }
}

export class CancelledPresaleCall extends ethereum.Call {
  get inputs(): CancelledPresaleCall__Inputs {
    return new CancelledPresaleCall__Inputs(this);
  }

  get outputs(): CancelledPresaleCall__Outputs {
    return new CancelledPresaleCall__Outputs(this);
  }
}

export class CancelledPresaleCall__Inputs {
  _call: CancelledPresaleCall;

  constructor(call: CancelledPresaleCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CancelledPresaleCall__Outputs {
  _call: CancelledPresaleCall;

  constructor(call: CancelledPresaleCall) {
    this._call = call;
  }
}

export class ChangeSaleTypeCall extends ethereum.Call {
  get inputs(): ChangeSaleTypeCall__Inputs {
    return new ChangeSaleTypeCall__Inputs(this);
  }

  get outputs(): ChangeSaleTypeCall__Outputs {
    return new ChangeSaleTypeCall__Outputs(this);
  }
}

export class ChangeSaleTypeCall__Inputs {
  _call: ChangeSaleTypeCall;

  constructor(call: ChangeSaleTypeCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeSaleTypeCall__Outputs {
  _call: ChangeSaleTypeCall;

  constructor(call: ChangeSaleTypeCall) {
    this._call = call;
  }
}

export class ClaimPresaleCancelledCurrencyCall extends ethereum.Call {
  get inputs(): ClaimPresaleCancelledCurrencyCall__Inputs {
    return new ClaimPresaleCancelledCurrencyCall__Inputs(this);
  }

  get outputs(): ClaimPresaleCancelledCurrencyCall__Outputs {
    return new ClaimPresaleCancelledCurrencyCall__Outputs(this);
  }
}

export class ClaimPresaleCancelledCurrencyCall__Inputs {
  _call: ClaimPresaleCancelledCurrencyCall;

  constructor(call: ClaimPresaleCancelledCurrencyCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimPresaleCancelledCurrencyCall__Outputs {
  _call: ClaimPresaleCancelledCurrencyCall;

  constructor(call: ClaimPresaleCancelledCurrencyCall) {
    this._call = call;
  }
}

export class ClaimPresaleTokenCall extends ethereum.Call {
  get inputs(): ClaimPresaleTokenCall__Inputs {
    return new ClaimPresaleTokenCall__Inputs(this);
  }

  get outputs(): ClaimPresaleTokenCall__Outputs {
    return new ClaimPresaleTokenCall__Outputs(this);
  }
}

export class ClaimPresaleTokenCall__Inputs {
  _call: ClaimPresaleTokenCall;

  constructor(call: ClaimPresaleTokenCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimPresaleTokenCall__Outputs {
  _call: ClaimPresaleTokenCall;

  constructor(call: ClaimPresaleTokenCall) {
    this._call = call;
  }
}

export class EditPresaleCall extends ethereum.Call {
  get inputs(): EditPresaleCall__Inputs {
    return new EditPresaleCall__Inputs(this);
  }

  get outputs(): EditPresaleCall__Outputs {
    return new EditPresaleCall__Outputs(this);
  }
}

export class EditPresaleCall__Inputs {
  _call: EditPresaleCall;

  constructor(call: EditPresaleCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _basicDetail(): EditPresaleCall_basicDetailStruct {
    return changetype<EditPresaleCall_basicDetailStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get _social(): EditPresaleCall_socialStruct {
    return changetype<EditPresaleCall_socialStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class EditPresaleCall__Outputs {
  _call: EditPresaleCall;

  constructor(call: EditPresaleCall) {
    this._call = call;
  }
}

export class EditPresaleCall_basicDetailStruct extends ethereum.Tuple {
  get logoURL(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get website(): string {
    return this[2].toString();
  }
}

export class EditPresaleCall_socialStruct extends ethereum.Tuple {
  get facebookURL(): Bytes {
    return this[0].toBytes();
  }

  get twitterURL(): Bytes {
    return this[1].toBytes();
  }

  get githubURL(): Bytes {
    return this[2].toBytes();
  }

  get telegramURL(): Bytes {
    return this[3].toBytes();
  }

  get instagramURL(): Bytes {
    return this[4].toBytes();
  }

  get discordURL(): Bytes {
    return this[5].toBytes();
  }

  get redditURL(): Bytes {
    return this[6].toBytes();
  }

  get youtubeVideoURL(): Bytes {
    return this[7].toBytes();
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class FinishPresaleCall extends ethereum.Call {
  get inputs(): FinishPresaleCall__Inputs {
    return new FinishPresaleCall__Inputs(this);
  }

  get outputs(): FinishPresaleCall__Outputs {
    return new FinishPresaleCall__Outputs(this);
  }
}

export class FinishPresaleCall__Inputs {
  _call: FinishPresaleCall;

  constructor(call: FinishPresaleCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lock(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _finish(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class FinishPresaleCall__Outputs {
  _call: FinishPresaleCall;

  constructor(call: FinishPresaleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAddressAndlaunchpadFactoryMaster(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _basicDetail(): InitializeCall_basicDetailStruct {
    return changetype<InitializeCall_basicDetailStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }

  get _presale(): InitializeCall_presaleStruct {
    return changetype<InitializeCall_presaleStruct>(
      this._call.inputValues[3].value.toTuple()
    );
  }

  get _social(): InitializeCall_socialStruct {
    return changetype<InitializeCall_socialStruct>(
      this._call.inputValues[4].value.toTuple()
    );
  }

  get _feeOptions(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get _paymentOptions(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get _saleType(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get _refundType(): i32 {
    return this._call.inputValues[8].value.toI32();
  }

  get _launchpadType(): i32 {
    return this._call.inputValues[9].value.toI32();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall_basicDetailStruct extends ethereum.Tuple {
  get logoURL(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get website(): string {
    return this[2].toString();
  }
}

export class InitializeCall_presaleStruct extends ethereum.Tuple {
  get hardCap(): BigInt {
    return this[0].toBigInt();
  }

  get softCap(): BigInt {
    return this[1].toBigInt();
  }

  get hardCapTokenPerUser(): BigInt {
    return this[2].toBigInt();
  }

  get subscriptionRate(): BigInt {
    return this[3].toBigInt();
  }

  get listingRate(): BigInt {
    return this[4].toBigInt();
  }

  get liquidityAmount(): BigInt {
    return this[5].toBigInt();
  }

  get router(): Address {
    return this[6].toAddress();
  }

  get currency(): Address {
    return this[7].toAddress();
  }

  get liquidtyPercentage(): BigInt {
    return this[8].toBigInt();
  }

  get liquidityLockupInMinutes(): BigInt {
    return this[9].toBigInt();
  }

  get startAt(): BigInt {
    return this[10].toBigInt();
  }

  get endAt(): BigInt {
    return this[11].toBigInt();
  }
}

export class InitializeCall_socialStruct extends ethereum.Tuple {
  get facebookURL(): Bytes {
    return this[0].toBytes();
  }

  get twitterURL(): Bytes {
    return this[1].toBytes();
  }

  get githubURL(): Bytes {
    return this[2].toBytes();
  }

  get telegramURL(): Bytes {
    return this[3].toBytes();
  }

  get instagramURL(): Bytes {
    return this[4].toBytes();
  }

  get discordURL(): Bytes {
    return this[5].toBytes();
  }

  get redditURL(): Bytes {
    return this[6].toBytes();
  }

  get youtubeVideoURL(): Bytes {
    return this[7].toBytes();
  }
}

export class RefundOverageCall extends ethereum.Call {
  get inputs(): RefundOverageCall__Inputs {
    return new RefundOverageCall__Inputs(this);
  }

  get outputs(): RefundOverageCall__Outputs {
    return new RefundOverageCall__Outputs(this);
  }
}

export class RefundOverageCall__Inputs {
  _call: RefundOverageCall;

  constructor(call: RefundOverageCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RefundOverageCall__Outputs {
  _call: RefundOverageCall;

  constructor(call: RefundOverageCall) {
    this._call = call;
  }
}

export class SetEndTimeCall extends ethereum.Call {
  get inputs(): SetEndTimeCall__Inputs {
    return new SetEndTimeCall__Inputs(this);
  }

  get outputs(): SetEndTimeCall__Outputs {
    return new SetEndTimeCall__Outputs(this);
  }
}

export class SetEndTimeCall__Inputs {
  _call: SetEndTimeCall;

  constructor(call: SetEndTimeCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get time(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetEndTimeCall__Outputs {
  _call: SetEndTimeCall;

  constructor(call: SetEndTimeCall) {
    this._call = call;
  }
}

export class TransferAnyERC20TokensCall extends ethereum.Call {
  get inputs(): TransferAnyERC20TokensCall__Inputs {
    return new TransferAnyERC20TokensCall__Inputs(this);
  }

  get outputs(): TransferAnyERC20TokensCall__Outputs {
    return new TransferAnyERC20TokensCall__Outputs(this);
  }
}

export class TransferAnyERC20TokensCall__Inputs {
  _call: TransferAnyERC20TokensCall;

  constructor(call: TransferAnyERC20TokensCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferAnyERC20TokensCall__Outputs {
  _call: TransferAnyERC20TokensCall;

  constructor(call: TransferAnyERC20TokensCall) {
    this._call = call;
  }
}

export class TransferBNBCall extends ethereum.Call {
  get inputs(): TransferBNBCall__Inputs {
    return new TransferBNBCall__Inputs(this);
  }

  get outputs(): TransferBNBCall__Outputs {
    return new TransferBNBCall__Outputs(this);
  }
}

export class TransferBNBCall__Inputs {
  _call: TransferBNBCall;

  constructor(call: TransferBNBCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferBNBCall__Outputs {
  _call: TransferBNBCall;

  constructor(call: TransferBNBCall) {
    this._call = call;
  }
}

export class WithdrawPresaleCancelledTokenCall extends ethereum.Call {
  get inputs(): WithdrawPresaleCancelledTokenCall__Inputs {
    return new WithdrawPresaleCancelledTokenCall__Inputs(this);
  }

  get outputs(): WithdrawPresaleCancelledTokenCall__Outputs {
    return new WithdrawPresaleCancelledTokenCall__Outputs(this);
  }
}

export class WithdrawPresaleCancelledTokenCall__Inputs {
  _call: WithdrawPresaleCancelledTokenCall;

  constructor(call: WithdrawPresaleCancelledTokenCall) {
    this._call = call;
  }

  get _subscriptionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawPresaleCancelledTokenCall__Outputs {
  _call: WithdrawPresaleCancelledTokenCall;

  constructor(call: WithdrawPresaleCancelledTokenCall) {
    this._call = call;
  }
}
