import { useState } from 'react';

import Pill from './Pill';
import { Image, Text } from '@0xsequence/design-system';
import {
  getMarketplaceDetails,
  type MarketplaceKind,
} from '@0xsequence/marketplace-sdk';

const MarketplacePill = ({
  originName,
  marketplace: marketplaceKind,
}: {
  originName: string;
  marketplace: MarketplaceKind;
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const marketplaceDetails = getMarketplaceDetails({
    originName: originName,
    kind: marketplaceKind,
  });

  const onImageError = () => {
    setIsImageError(true);
  };

  if (!marketplaceDetails) {
    return (
      <Pill>
        <Text color="text100" fontSize="xsmall" fontWeight="bold">
          Unknown
        </Text>
      </Pill>
    );
  }

  return (
    <Pill>
      {isImageError ? (
        <Image src="/images/chess-tile" alt="chess-tile" width={3} height={3} />
      ) : (
        <marketplaceDetails.logo width={3} height={3} onError={onImageError} />
      )}

      <Text color="text100" fontSize="xsmall" fontWeight="bold">
        {marketplaceDetails.displayName}
      </Text>
    </Pill>
  );
};

export default MarketplacePill;
