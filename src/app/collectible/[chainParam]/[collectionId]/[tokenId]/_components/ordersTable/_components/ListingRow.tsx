import { Table } from '~/components/ui';

import type { Order } from '@0xsequence/marketplace-sdk';

function OrdersTableListingOrderRow({ order }: { order: Order }) {
  return (
    <Table.Row>
      <Table.Cell>{order.priceAmount}</Table.Cell>
      <Table.Cell>{order.quantityInitial}</Table.Cell>
      <Table.Cell>{order.validUntil}</Table.Cell>
      <Table.Cell>{order.marketplace}</Table.Cell>
    </Table.Row>
  );
}

export default OrdersTableListingOrderRow;
