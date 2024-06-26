// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { CardObject } from "@/types/type";

// interface Props {
//   data: CardObject;
// }

// export const ProductCard = ({ data }: Props) => {
//   const parseTimeToMinutes = (val: string): number => {
//     const [hours, minutes] = val.split(":").map(Number);
//     const totalMinutes = hours * 60 + minutes;
//     return totalMinutes;
//   };
//   const isTimeHour = (val: number): number => {
//     if (val >= 60) {
//       const totalHours = Math.floor(val / 60);
//       return totalHours;
//     } else {
//       return val;
//     }
//   };

//   const checkTimeUnits = (val: number): string => {
//     if (val >= 60) {
//       const totalHours = Math.floor(val / 60);
//       return `hr${totalHours !== 1 ? "s" : ""}`;
//     } else {
//       return `min${val !== 1 ? "s" : ""}`;
//     }
//   };

//   const estimatedTimeServing = (val: string): number => {
//     const minutes = parseTimeToMinutes(val);
//     const checkTime = isTimeHour(minutes);

//     return checkTime;
//   };

//   const bestTimeServe = estimatedTimeServing(data.time.best_case);
//   const worstTimeServe = estimatedTimeServing(data.time.worst_case);
//   const bestTimeUnit = checkTimeUnits(parseTimeToMinutes(data.time.best_case));
//   const worstTimeUnit = checkTimeUnits(
//     parseTimeToMinutes(data.time.worst_case),
//   );

//   return (
//     <Card className="m-0 flex h-full w-full flex-col bg-white p-0">
//       <CardHeader className="flex h-full w-full flex-col p-0">
//         <Image
//           src={data.image}
//           alt="food/img"
//           width={100}
//           height={100}
//           className="h-full w-full rounded-t-md object-cover"
//           priority
//         />
//       </CardHeader>
//       <div className="flex h-full w-full flex-col justify-between gap-[16px] rounded-b-md px-[7px] py-[14px]">
//         <CardContent className="flex h-full w-full flex-col gap-[8px] p-0">
//           <div className="flex h-full w-full flex-col gap-[4px]">
//             <CardTitle className="text-base font-[700] capitalize !leading-[1.024rem]">
//               {data.name}
//             </CardTitle>
//             <CardDescription className="flex h-full w-full flex-col text-sm font-[400] !leading-[0.854rem]">
//               {data.description}
//             </CardDescription>
//           </div>
//         </CardContent>
//         <CardFooter className="flex h-full w-full flex-col gap-2 p-0">
//           <div className="flex h-full w-full flex-row items-center justify-center gap-2 text-sm font-[400] leading-[0.854rem]">
//             <div className="flex w-full flex-row items-center justify-center gap-[4px]">
//               <div className="flex h-[12px] w-[10px] flex-col items-center justify-center">
//                 <Image
//                   src={TimerIcon}
//                   alt="timer/icon"
//                   width={0}
//                   height={0}
//                   className="h-auto w-[10px] object-contain"
//                   priority
//                 />
//               </div>
//               <div className="flex h-full w-full flex-col justify-center">
//                 {bestTimeUnit === worstTimeUnit ||
//                 (bestTimeUnit == "hr" && worstTimeUnit == "hrs") ||
//                 (bestTimeUnit == "min" && worstTimeUnit == "mins") ? (
//                   <p className="text-xs">
//                     {bestTimeServe} - {worstTimeServe} {worstTimeUnit}
//                   </p>
//                 ) : (
//                   <p className="text-xs">
//                     {bestTimeServe} {bestTimeUnit} - {worstTimeServe}{" "}
//                     {worstTimeUnit}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex h-full w-full flex-row items-center gap-[4px]">
//               <p className="text-xs tracking-wider">{data.rating}/5</p>
//               <div className="flex h-[8px] w-[8px] flex-row gap-[2px]">
//                 {Array.from({ length: data.rating }, (_, index) => (
//                   <Image
//                     key={index}
//                     src={StartIcon}
//                     alt={`Star ${index + 1}`}
//                     width={10}
//                     height={10}
//                     className="h-full w-full object-contain"
//                     priority
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex w-full flex-row justify-between gap-[8px] text-start">
//             <h1 className="text-xl font-bold">&#8369; {data.price}</h1>
//             <Button
//               size="icon"
//               className="flex h-[28px] w-[28px] items-center rounded-full transition hover:scale-105"
//             >
//               <Image
//                 src={AddIcon}
//                 alt="add/icon"
//                 height={10}
//                 width={10}
//                 priority
//               />
//             </Button>
//           </div>
//         </CardFooter>
//       </div>
//     </Card>
//   );
// };
