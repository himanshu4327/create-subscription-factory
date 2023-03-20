import {
  BuyToken as BuyTokenEvent,
  CancelledPresale as CancelledPresaleEvent,
  CreatedPresale as CreatedPresaleEvent,
  UpdatedPresale as UpdatedPresaleEvent
} from "../generated/CREATESUBSCRIPTION/CREATESUBSCRIPTION"
import {
  BuyToken,
  CancelledPresale,
  CreatedPresale,
  UpdatedPresale
} from "../generated/schema"

export function handleBuyToken(event: BuyTokenEvent): void {
  let entity = new BuyToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.subscriptionAddress = event.params.subscriptionAddress
  entity.commited = event.params.commited
  entity.commitmentRatio = event.params.commitmentRatio
  entity.at = event.params.at

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelledPresale(event: CancelledPresaleEvent): void {
  let entity = new CancelledPresale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subscriptionAddress = event.params.subscriptionAddress
  entity.CancelledTime = event.params.CancelledTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatedPresale(event: CreatedPresaleEvent): void {
  let entity = new CreatedPresale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.presaleAddress = event.params.presaleAddress
  entity.launchpadType = event.params.launchpadType
  entity.createdTime = event.params.createdTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatedPresale(event: UpdatedPresaleEvent): void {
  let entity = new UpdatedPresale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.subscriptionAddress = event.params.subscriptionAddress
  entity.UpdatedTime = event.params.UpdatedTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
