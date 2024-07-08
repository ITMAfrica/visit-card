/* eslint-disable react/no-unescaped-entities */
import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { useSearchParams } from 'next/navigation';

export default function Home() {
    // const searchParams = useSearchParams();
    // const lang: any = searchParams.get('lang');

    const dictionary = getDictionary('en');

    return <HomePage dictionary={dictionary} />;
}
