import { Flex, Table } from '~/components/ui';

import { Skeleton } from '@0xsequence/design-system';

const SequenceTableBodySkeleton = ({
  columns,
  pageSize,
}: {
  columns: number;
  pageSize: number;
}) => {
  return (
    <>
      <Table.Body className="text-foreground">
        {Array.from({ length: pageSize }).map((_, index) => (
          <SequenceTableRowSkeletonSmallScreen key={index} />
        ))}

        {Array.from({ length: pageSize }).map((_, index) => (
          <SequenceTableRowSkeletonWideScreen key={index} columns={columns} />
        ))}
      </Table.Body>
    </>
  );
};

const SequenceTableRowSkeletonWideScreen = ({
  columns,
}: {
  columns: number;
}) => {
  return (
    <Table.Row className="hidden md:table-row">
      {Array.from({ length: columns }).map((_, index) => (
        <Table.Cell key={index}>
          <Skeleton size="normal" style={{ width: 60 }} />
        </Table.Cell>
      ))}
    </Table.Row>
  );
};

const SequenceTableRowSkeletonSmallScreen = () => {
  return (
    <Table.Row className="table-row md:hidden">
      <Table.Cell>
        <Flex className="flex-col gap-4">
          <Flex className="gap-4">
            <Skeleton size="sm" style={{ width: 60 }} />

            <Skeleton size="sm" style={{ width: 60 }} />
          </Flex>

          <Flex className="gap-4">
            <Skeleton size="sm" style={{ width: 60 }} />

            <Skeleton size="sm" style={{ width: 60 }} />

            <Skeleton size="sm" style={{ width: 60 }} />
          </Flex>
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
};

export default SequenceTableBodySkeleton;
