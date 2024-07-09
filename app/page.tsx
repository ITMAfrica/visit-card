/* eslint-disable react/no-unescaped-entities */
import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { Suspense } from 'react';

export default async function Home() {
    const dictionary = await getDictionary('fr');

    return (
        <Suspense>
            <HomePage dictionary={dictionary} />;
        </Suspense>
    );
}
