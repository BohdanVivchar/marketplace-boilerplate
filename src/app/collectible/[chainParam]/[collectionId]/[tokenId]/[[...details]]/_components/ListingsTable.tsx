import React from 'react';

import OrdersTable, {
  PAGE_SIZE_OPTIONS,
} from '~/app/collectible/[chainParam]/[collectionId]/[tokenId]/_components/ordersTable/OrdersTable';
import { Routes } from '~/lib/routes';

import { Box, Text } from '@0xsequence/design-system';
import type { Page } from '@0xsequence/marketplace-sdk';
import {
  useCountListingsForCollectible,
  useListListingsForCollectible,
} from '@0xsequence/marketplace-sdk/react';
import { observer, useObservable } from '@legendapp/state/react';

const ListingsTable = observer(() => {
  const { chainParam, collectionId, tokenId } =
    Routes.collectible.useParams();
  const page$ = useObservable<Page>({
    page: 1,
    pageSize: PAGE_SIZE_OPTIONS[5].value,
  });
  const { data: listings, isLoading: listingsLoading } =
    useListListingsForCollectible({
      chainId: chainParam as string,
      collectionAddress: collectionId,
      collectibleId: tokenId,
      page: {
        page: page$.page.get(),
        pageSize: page$.pageSize.get(),
      },
    });

  // Update `more` value whenever listings data changes
  if (listings?.page?.more !== undefined) {
    page$.more.set(listings.page.more);
  }

  const { data: countOfListings, isLoading: countOfListingsLoading } =
    useCountListingsForCollectible({
      collectionAddress: collectionId,
      chainId: chainParam as string,
      collectibleId: tokenId,
    });

  if (!listings?.listings.length && !listingsLoading) {
    return (
      <Box
        width="full"
        textAlign="center"
        className="border border-foreground/30 py-8 rounded-md"
      >
        <Text fontSize="small" fontWeight="medium" color="text50">
          Your listings will appear here
        </Text>
      </Box>
    );
  }

  return (
    <OrdersTable
      orders={listings?.listings}
      ordersCount={countOfListings?.count}
      ordersCountLoading={countOfListingsLoading}
      page$={page$}
      isLoading={listingsLoading}
      chainId={chainParam as string}
      collectionAddress={collectionId}
      tokenId={tokenId}
    />
  );
});

export default ListingsTable;
