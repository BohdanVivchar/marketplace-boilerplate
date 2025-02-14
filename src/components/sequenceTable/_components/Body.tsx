import { Table } from '~/components/ui';

import SequenceTableRow from './TableRow';
import type { Order } from '@0xsequence/marketplace-sdk';
import type { Hex } from 'viem';

const SequenceTableBody = ({
  orders,
}: {
  orders: Order[] | undefined;
  collectionAddress: Hex;
}) => {
  return (
    <Table.Body className="text-foreground">
      {orders?.map((order: Order, index: number) => (
        <SequenceTableRow
          key={`order-${order.orderId}`}
          order={order}
          index={index}
        />
      ))}
    </Table.Body>
  );
};

export default SequenceTableBody;
