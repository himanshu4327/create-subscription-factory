import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BuyToken,
  CancelledPresale,
  CreatedPresale,
  UpdatedPresale
} from "../generated/ CREATESUBSCRIPTION/ CREATESUBSCRIPTION"

export function createBuyTokenEvent(
  userAddress: Address,
  subscriptionAddress: Address,
  commited: BigInt,
  commitmentRatio: BigInt,
  at: BigInt
): BuyToken {
  let buyTokenEvent = changetype<BuyToken>(newMockEvent())

  buyTokenEvent.parameters = new Array()

  buyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  buyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionAddress",
      ethereum.Value.fromAddress(subscriptionAddress)
    )
  )
  buyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "commited",
      ethereum.Value.fromUnsignedBigInt(commited)
    )
  )
  buyTokenEvent.parameters.push(
    new ethereum.EventParam(
      "commitmentRatio",
      ethereum.Value.fromUnsignedBigInt(commitmentRatio)
    )
  )
  buyTokenEvent.parameters.push(
    new ethereum.EventParam("at", ethereum.Value.fromUnsignedBigInt(at))
  )

  return buyTokenEvent
}

export function createCancelledPresaleEvent(
  subscriptionAddress: Address,
  CancelledTime: BigInt
): CancelledPresale {
  let cancelledPresaleEvent = changetype<CancelledPresale>(newMockEvent())

  cancelledPresaleEvent.parameters = new Array()

  cancelledPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionAddress",
      ethereum.Value.fromAddress(subscriptionAddress)
    )
  )
  cancelledPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "CancelledTime",
      ethereum.Value.fromUnsignedBigInt(CancelledTime)
    )
  )

  return cancelledPresaleEvent
}

export function createCreatedPresaleEvent(
  owner: Address,
  presaleAddress: Address,
  launchpadType: i32,
  createdTime: BigInt
): CreatedPresale {
  let createdPresaleEvent = changetype<CreatedPresale>(newMockEvent())

  createdPresaleEvent.parameters = new Array()

  createdPresaleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "presaleAddress",
      ethereum.Value.fromAddress(presaleAddress)
    )
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "launchpadType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(launchpadType))
    )
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "createdTime",
      ethereum.Value.fromUnsignedBigInt(createdTime)
    )
  )

  return createdPresaleEvent
}

export function createUpdatedPresaleEvent(
  owner: Address,
  subscriptionAddress: Address,
  UpdatedTime: BigInt
): UpdatedPresale {
  let updatedPresaleEvent = changetype<UpdatedPresale>(newMockEvent())

  updatedPresaleEvent.parameters = new Array()

  updatedPresaleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  updatedPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionAddress",
      ethereum.Value.fromAddress(subscriptionAddress)
    )
  )
  updatedPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "UpdatedTime",
      ethereum.Value.fromUnsignedBigInt(UpdatedTime)
    )
  )

  return updatedPresaleEvent
}
