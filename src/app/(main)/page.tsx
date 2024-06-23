import { ProductCard } from '@/components/Card/ProductCard';
import { dummyData } from '@/dummy-data/data';

export default function Home() {
  return (
    <main className='container my-5 max-sm:px-1 min-sm:px-5 flex'>
      <ul className='h-full w-full grid grid-cols-2 grid-rows-1 gap-2'>
        {dummyData.map((data, index) => (
          <li className='h-full w-full flex
          ' key={index}><ProductCard data={data} /></li>
        ))}
      </ul>
    </main>)
}

