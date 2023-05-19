import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { MarketItem } from '../generated/schema';
import {
  Marketplace,
  MarketItemListed as MarketItemListedEvent,
  MarketSaleCreated as MarketSaleCreatedEvent,
} from '../generated/Marketplace/Marketplace';

export function handleMarketItemListed(event: MarketItemListedEvent): void {
  let marketItem = MarketItem.load(event.params.tokenId.toHex());

  if (marketItem == null) {
    marketItem = new MarketItem(event.params.tokenId.toHex());
  }

  marketItem.tokenId = event.params.tokenId;
  marketItem.seller = event.params.seller;
  marketItem.owner = event.params.owner;
  marketItem.price = event.params.price;
  marketItem.isListed = event.params.isListed;
  marketItem.biddingEnabled = event.params.biddingEnabled;
  marketItem.highestBid = event.params.highestBid;
  marketItem.highestBidder = event.params.highestBidder;
  marketItem.save();
}

export function handleMarketSaleCreated(event: MarketSaleCreatedEvent): void {
  let marketItem = MarketItem.load(event.params.tokenId.toHex());
  if (marketItem) {
    marketItem.owner = event.params.buyer;
    marketItem.isListed = false;
    marketItem.save();
  }
}
