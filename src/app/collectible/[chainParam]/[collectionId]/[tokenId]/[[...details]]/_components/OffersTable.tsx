import React from 'react';

import SequenceTable, {
  PAGE_SIZE_OPTIONS,
} from '~/components/sequenceTable/SequenceTable';
import { Routes } from '~/lib/routes';

import { Box, Text } from '@0xsequence/design-system';
import type { Page } from '@0xsequence/marketplace-sdk';
import {
  useCountOffersForCollectible,
  useListOffersForCollectible,
} from '@0xsequence/marketplace-sdk/react';
import { observer, useObservable } from '@legendapp/state/react';

const OffersTable = observer(() => {
  const { chainParam, collectionId, tokenId } =
    Routes.collectible.useParams();
  const page$ = useObservable<Page>({
    page: 1,
    pageSize: PAGE_SIZE_OPTIONS[5].value,
  });
  const { data: offers, isLoading: offersLoading } =
    useListOffersForCollectible({
      chainId: chainParam as string,
      collectionAddress: collectionId,
      collectibleId: tokenId,
      page: {
        page: page$.page.get(),
        pageSize: page$.pageSize.get(),
      },
    });

  // Update `more` value whenever offers data changes
  if (offers?.page?.more !== undefined) {
    page$.more.set(offers.page.more);
  }

  const { data: countOfOffers, isLoading: countOfOffersLoading } =
    useCountOffersForCollectible({
      collectionAddress: collectionId,
      chainId: chainParam as string,
      collectibleId: tokenId,
    });

  if (!offers?.offers.length && !offersLoading) {
    return (
      <Box
        width="full"
        textAlign="center"
        className="border border-foreground/30 py-8 rounded-md"
      >
        <Text fontSize="small" fontWeight="medium" color="text50">
          Your offers will appear here
        </Text>
      </Box>
    );
  }

  return (
    <SequenceTable
      orders={offers?.offers}
      ordersCount={countOfOffers?.count}
      ordersCountLoading={countOfOffersLoading}
      page$={page$}
      isLoading={offersLoading}
      chainId={chainParam as string}
      collectionAddress={collectionId}
      tokenId={tokenId}
    />
  );
});

export default OffersTable;
