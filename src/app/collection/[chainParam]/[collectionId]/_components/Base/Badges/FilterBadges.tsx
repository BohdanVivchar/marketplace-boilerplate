'use client';

type FilterBadgesProps = {
  chainId: number;
  collectionAddress: string;
};

export const FilterBadges = ({
  chainId,
  collectionAddress,
}: FilterBadgesProps) => {
  return null;
  // const { filterOptions: filters, searchText } = useSnapshot(
  //   collectibleFilterState,
  // );

  // const { data } = useCollectionFilterOptions({
  //   chainId,
  //   collectionAddress,
  // });

  // const getFilterType = useCallback(
  //   (name: string) => {
  //     const filter = data?.data.find((f) => f.name === name);
  //     return filter?.type;
  //   },
  //   [data],
  // );

  // if (!filters.length && !searchText) return null;

  // return (
  //   <Grid.Child
  //     name="collection-filter-badges"
  //     className="sticky z-40 mb-6 bg-background py-4"
  //     style={{
  //       top: 'calc(var(--headerHeight) + var(--collectionControlsHeight) - 8px)',
  //     }}
  //   >
  //     <ScrollArea.Base orientation="horizontal" className="max-w-full">
  //       <Flex className={cn(classNames.collectionFilterBadges, 'w-0 gap-2')}>
  //         {searchText && (
  //           <Badge size="lg" variant="outline">
  //             Search: "<Text className="text-foreground">{searchText}</Text>"
  //             <CloseIcon
  //               className="ml-2 cursor-pointer"
  //               onClick={() => {
  //                 clearSearchText();
  //               }}
  //             />
  //           </Badge>
  //         )}

  //         {filters.map((filter, i) => {
  //           switch (getFilterType(filter.name)) {
  //             case PropertyType.STRING:
  //             case PropertyType.ARRAY:
  //               if (filter?.values?.length) {
  //                 return <StringAndArrayBadge key={i} filter={filter} />;
  //               }
  //               return null;
  //             case PropertyType.INT:
  //               return (
  //                 <IntBadge
  //                   key={i}
  //                   name={filter.name}
  //                   min={filter.values[0]}
  //                   max={filter.values[1]}
  //                 />
  //               );
  //           }
  //         })}

  //         {filters.length ? (
  //           <Badge
  //             size="lg"
  //             variant="outlinePrimary"
  //             className="cursor-pointer"
  //             onClick={() => {
  //               clearFilterOptions();
  //               clearSearchText();
  //             }}
  //           >
  //             Clear All
  //             <CloseIcon className="ml-2" />
  //           </Badge>
  //         ) : null}
  //       </Flex>
  //     </ScrollArea.Base>
  // </Grid.Child>
  // );
};
