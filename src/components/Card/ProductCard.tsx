import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import { CardObject } from '@/types/type';

interface Props {
    data: CardObject
}


export const ProductCard = ({ data }: Props) => {
    return (
        <Card className='h-full w-full flex flex-col'>
            <CardHeader className='h-full w-full flex flex-col bg-black'>
                <Image src={data.image} alt='food/img' width={200} height={200} className='w-full h-full object-cover' priority />
            </CardHeader>
            <CardContent className='h-full w-full flex flex-col bg-black'>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription className='flex justify-center items-center text-center bg-black text-red-500'>
                    {data.description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                {/* Add any footer content here */}
            </CardFooter>
        </Card >
    )
}
