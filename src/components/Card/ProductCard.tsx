import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Button,
} from '@/components/ui/button'
import Image from 'next/image';
import { CardObject } from '@/types/type';
import { TimerIcon, StartIcon, AddIcon } from '@/assets/svg';

interface Props {
    data: CardObject
}

export const ProductCard = ({ data }: Props) => {
    const parseTimeToMinutes = (val: string): number => {
        const [hours, minutes] = val.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        return totalMinutes;
    };
    const isTimeHour = (val: number): number => {
        if (val >= 60) {
            const totalHours = Math.floor(val / 60);
            return totalHours;
        } else {
            return val;
        }
    }

    const checkTimeUnits = (val: number): string => {
        if (val >= 60) {
            const totalHours = Math.floor(val / 60);
            return `hr${totalHours !== 1 ? 's' : ''}`;
        } else {
            return `min${val !== 1 ? 's' : ''}`;
        }
    };

    const estimatedTimeServing = (val: string): number => {
        const minutes = parseTimeToMinutes(val)
        const checkTime = isTimeHour(minutes)

        return checkTime
    }

    const bestTimeServe = estimatedTimeServing(data.time.best_case)
    const worstTimeServe = estimatedTimeServing(data.time.worst_case)
    const bestTimeUnit = checkTimeUnits(parseTimeToMinutes(data.time.best_case))
    const worstTimeUnit = checkTimeUnits(parseTimeToMinutes(data.time.worst_case))

    return (
        <Card className='h-[335px] w-[170px] grid grid-rows-2 p-0 m-0 bg-white'>
            <CardHeader className='h-full w-full flex flex-col p-0 '>
                <Image src={data.image} alt='food/img' width={100} height={100} className='w-full h-full object-cover rounded-t-md' priority />
            </CardHeader>
            <div className='h-full w-full flex flex-col px-[7px] py-[14px] gap-[16px] rounded-b-md '>
                <CardContent className='h-full w-full flex flex-col p-0 gap-[8px] '>
                    <div className='h-full w-full flex flex-col gap-[4px]'>
                        <CardTitle className='font-[700] text-base !leading-[1.024rem] capitalize'>
                            {data.name}
                        </CardTitle>
                        <CardDescription className=' h-full w-full flex flex-col font-[400] text-sm !leading-[0.854rem]'>
                            {data.description}
                        </CardDescription>
                    </div>
                    <div className='h-full w-full flex flex-row justify-center items-center gap-2 font-[400] text-sm leading-[0.854rem]'>
                        <div className='h-full w-full flex flex-row gap-[4px] justify-center items-center'>
                            <div className="flex flex-col items-center justify-center w-[10px] h-[12px]">
                                <Image
                                    src={TimerIcon}
                                    alt="timer/icon"
                                    width={10}
                                    height={12}
                                    className='w-full h-full object-contain'
                                    priority
                                />
                            </div>
                            <div className='flex flex-col h-full w-full justify-center'>
                                {
                                    (bestTimeUnit === worstTimeUnit || bestTimeUnit == 'hr' && worstTimeUnit == 'hrs' || bestTimeUnit == 'min' && worstTimeUnit == 'mins') ? (
                                        <p className='text-xs'>
                                            {bestTimeServe} - {worstTimeServe} {worstTimeUnit}
                                        </p>
                                    ) : (
                                        <p className='text-xs'>
                                            {bestTimeServe} {bestTimeUnit} - {worstTimeServe} {worstTimeUnit}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='h-full w-full flex flex-row  gap-[4px]  items-center'>
                            <p className='text-xs tracking-wider'>{data.rating}/5</p>
                            <div className="flex flex-row gap-[2px]  w-[8px] h-[8px]">
                                {
                                    Array.from({ length: data.rating }, (_, index) => (
                                        <Image
                                            key={index}
                                            src={StartIcon}
                                            alt={`Star ${index + 1}`}
                                            width={10}
                                            height={10}
                                            className="w-full h-full object-contain"
                                            priority
                                        />
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </CardContent >
                <CardFooter className='h-full w-full flex flex-row text-start p-0 gap-[8px] justify-between'>
                    <h1 className='text-xl font-bold'>
                        &#8369; {data.price}
                    </h1>
                    <Button size="icon" className='rounded-full flex items-center h-[28px] w-[28px] hover:scale-105 transition'>
                        <Image src={AddIcon} alt='add/icon' height={10} width={10} priority />
                    </Button>
                </CardFooter>
            </div >
        </Card>
    )
}
