import { Table } from '../ui';
import SequenceTableBody from './_components/Body';
import SequenceTableFooter from './_components/Footer';
import SequenceTableHeader from './_components/Header';
import SequenceTableBodySkeleton from './_components/Skeletons';
import { Box } from '@0xsequence/design-system';
import type { Order, Page } from '@0xsequence/marketplace-sdk';
import type { Observable } from '@legendapp/state';
import { observer } from '@legendapp/state/react';
import type { Hex } from 'viem';

export const PAGE_SIZE_OPTIONS = {
  5: { label: '5', value: 5 },
  10: { label: '10', value: 10 },
  20: { label: '20', value: 20 },
};

type SequenceTableProps = {
  chainId: string;
  collectionAddress: Hex;
  tokenId: string;
  orders: Order[] | undefined;
  ordersCount: number | undefined;
  ordersCountLoading: boolean;
  page$: Observable<Page>;
  isLoading: boolean;
};

const SequenceTable = observer((props: SequenceTableProps) => {
  const {
    chainId,
    collectionAddress,
    page$,
    orders,
    ordersCount,
    ordersCountLoading,
  } = props;

  const columns = ['Price', 'Quantity', 'By', 'Expires', 'Marketplace'];

  return (
    <Box className="overflow-hidden rounded-md border border-foreground/20">
      <Table.Root>
        <SequenceTableHeader items={columns} isLoading={props.isLoading} />

        {props.isLoading && (
          <SequenceTableBodySkeleton
            columns={columns.length}
            pageSize={page$.pageSize.get()}
          />
        )}

        {!props.isLoading && (
          <SequenceTableBody
            orders={orders}
            collectionAddress={collectionAddress}
          />
        )}

        <SequenceTableFooter
          page$={page$}
          ordersCount={ordersCount}
          ordersCountLoading={ordersCountLoading}
        />
      </Table.Root>
    </Box>
  );
});

export default SequenceTable;
