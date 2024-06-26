'use client';

import type { ComponentProps } from 'react';

import ENSName from '~/components/ENSName';

import { Button, Dialog, WalletIcon } from '$ui';
import { useAccount } from 'wagmi';
import { getThemeManagerElement } from '~/lib/utils/theme';

export const AccountButton = (props: ComponentProps<typeof Button>) => {
  const { address } = useAccount();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="muted" className="backdrop-blur" {...props}>
          {props.children ?? (
            <>
              <WalletIcon />
              <span className="hidden md:inline">
                <ENSName address={address} truncateAt={4} />
              </span>
            </>
          )}
        </Button>
      </Dialog.Trigger>

      <Dialog.BaseContent
        className="max-w-lg"
        container={getThemeManagerElement()}
        title="Wallet"
      >
        {/* <WalletModalContent /> */}
      </Dialog.BaseContent>
    </Dialog.Root>
  );
};