/* eslint-disable react/no-unescaped-entities */
import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

export default async function Home() {
    const dictionary = await getDictionary('fr');

    return <HomePage dictionary={dictionary} />;
}
