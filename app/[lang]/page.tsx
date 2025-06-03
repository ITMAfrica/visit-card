import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { Suspense } from 'react';

export default async function Home({ params }: any) {
    const dictionary = await getDictionary(params?.lang || 'en');

    return (
        <Suspense>
            <HomePage dictionary={dictionary} />
        </Suspense>
    );
}
