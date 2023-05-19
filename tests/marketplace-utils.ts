import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BidAccepted,
  MarketItemListed,
  MarketSaleCreated,
  NewBid
} from "../generated/Marketplace/Marketplace"

export function createBidAcceptedEvent(
  seller: Address,
  bidder: Address,
  tokenId: BigInt,
  amount: BigInt
): BidAccepted {
  let bidAcceptedEvent = changetype<BidAccepted>(newMockEvent())

  bidAcceptedEvent.parameters = new Array()

  bidAcceptedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  bidAcceptedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  bidAcceptedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bidAcceptedEvent
}

export function createMarketItemListedEvent(
  tokenId: BigInt,
  seller: Address,
  owner: Address,
  price: BigInt,
  isListed: boolean,
  biddingEnabled: boolean,
  highestBid: BigInt,
  highestBidder: Address
): MarketItemListed {
  let marketItemListedEvent = changetype<MarketItemListed>(newMockEvent())

  marketItemListedEvent.parameters = new Array()

  marketItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam("isListed", ethereum.Value.fromBoolean(isListed))
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "biddingEnabled",
      ethereum.Value.fromBoolean(biddingEnabled)
    )
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "highestBid",
      ethereum.Value.fromUnsignedBigInt(highestBid)
    )
  )
  marketItemListedEvent.parameters.push(
    new ethereum.EventParam(
      "highestBidder",
      ethereum.Value.fromAddress(highestBidder)
    )
  )

  return marketItemListedEvent
}

export function createMarketSaleCreatedEvent(
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  price: BigInt
): MarketSaleCreated {
  let marketSaleCreatedEvent = changetype<MarketSaleCreated>(newMockEvent())

  marketSaleCreatedEvent.parameters = new Array()

  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketSaleCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return marketSaleCreatedEvent
}

export function createNewBidEvent(
  bidder: Address,
  tokenId: BigInt,
  amount: BigInt
): NewBid {
  let newBidEvent = changetype<NewBid>(newMockEvent())

  newBidEvent.parameters = new Array()

  newBidEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  newBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newBidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return newBidEvent
}
