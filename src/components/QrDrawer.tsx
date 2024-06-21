import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from './ui/drawer';
import { Button } from './ui/button';

type Props = {
	isOpen: boolean;
};

export const QrDrawer = ({ isOpen }: Props) => {
	return (
		<Drawer open={isOpen}>
			<DrawerContent className='flex items-center'>
				<div>
					<DrawerHeader>
						<div className='flex flex-col items-start gap-y-1'>
							<DrawerTitle className='text-primary text-base'>Join me</DrawerTitle>
							<DrawerDescription className='mb-4'>
								Scan this QR code to start adding items.
							</DrawerDescription>
						</div>

						<QRCode
							value={uuidv4()}
							className='w-full'
						/>
					</DrawerHeader>
					<DrawerFooter>
						<Button className='w-full'>Start Ordering</Button>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
