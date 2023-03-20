import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BuyToken } from "../generated/schema"
import { BuyToken as BuyTokenEvent } from "../generated/ CREATESUBSCRIPTION/ CREATESUBSCRIPTION"
import { handleBuyToken } from "../src/createsubscription"
import { createBuyTokenEvent } from "./createsubscription-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let subscriptionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let commited = BigInt.fromI32(234)
    let commitmentRatio = BigInt.fromI32(234)
    let at = BigInt.fromI32(234)
    let newBuyTokenEvent = createBuyTokenEvent(
      userAddress,
      subscriptionAddress,
      commited,
      commitmentRatio,
      at
    )
    handleBuyToken(newBuyTokenEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BuyToken created and stored", () => {
    assert.entityCount("BuyToken", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BuyToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BuyToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subscriptionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BuyToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commited",
      "234"
    )
    assert.fieldEquals(
      "BuyToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitmentRatio",
      "234"
    )
    assert.fieldEquals(
      "BuyToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "at",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
