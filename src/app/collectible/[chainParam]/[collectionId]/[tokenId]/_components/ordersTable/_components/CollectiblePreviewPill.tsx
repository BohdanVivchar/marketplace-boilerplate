import React from 'react';

import Pill from './Pill';
import { Image, Text } from '@0xsequence/design-system';

type CollectiblePreviewPillProps = {
  imageSrc?: string;
  name: string;
};

const CollectiblePreviewPill = ({
  imageSrc,
  name,
}: CollectiblePreviewPillProps) => {
  return (
    <Pill>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={`${name}-preview`}
          width="3"
          height="3"
          className="rounded-full"
        />
      )}

      <Text color="text100" fontSize="xsmall" fontWeight="bold">
        {name}
      </Text>
    </Pill>
  );
};

export default CollectiblePreviewPill;
