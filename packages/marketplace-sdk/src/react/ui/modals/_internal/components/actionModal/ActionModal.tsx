'use client';

import type React from 'react';
import type { ComponentProps } from 'react';

import type { ActionModalState } from './store';
import {
	cta as ctaStyle,
	closeButton,
	dialogContent,
	dialogOverlay,
} from './styles.css';
import {
	Box,
	Button,
	CloseIcon,
	IconButton,
	Text,
} from '@0xsequence/design-system';
import { getProviderEl } from '@internal';
import type { Observable } from '@legendapp/state';
import { observer } from '@legendapp/state/react';
import { Close, Content, Overlay, Portal, Root } from '@radix-ui/react-dialog';

export interface ActionModalProps {
	store: Observable<ActionModalState>;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	ctas: {
		label: string;
		onClick: () => Promise<void>;
		pending?: boolean;
		disabled?: boolean;
		hidden?: boolean;
		variant?: ComponentProps<typeof Button>['variant'];
	}[];
}

export const ActionModal = observer(
	({ store, onClose, title, children, ctas }: ActionModalProps) => {
		return (
			<Root open={store.isOpen.get()}>
				<Portal container={getProviderEl()}>
					<Overlay className={dialogOverlay} />
					<Content className={dialogContent}>
						<Box
							display="flex"
							flexGrow={'1'}
							alignItems="center"
							flexDirection="column"
							gap="4"
							position={'relative'}
						>
							<Text
								fontSize="medium"
								fontWeight="bold"
								textAlign="center"
								width="full"
								color="text100"
							>
								{title}
							</Text>

							{children}

							<Box width="full" display="flex" flexDirection="column" gap="2">
								{ctas.map((cta) => (
									<Button
										key={cta.label}
										className={ctaStyle}
										onClick={cta.onClick}
										variant={cta.variant || 'primary'}
										hidden={cta.hidden}
										pending={cta.pending}
										disabled={cta.disabled}
										size="lg"
										width="full"
										label={cta.label}
									/>
								))}
							</Box>
						</Box>
						<Close className={closeButton} asChild onClick={onClose}>
							<IconButton size="xs" aria-label="Close modal" icon={CloseIcon} />
						</Close>
					</Content>
				</Portal>
			</Root>
		);
	},
);