'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PageHome() {
    const { push } = useRouter();
    useEffect(() => {
        push('/fr');
    }, []);
    return <></>;
}
