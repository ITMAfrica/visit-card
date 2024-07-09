import React from 'react';

export async function generateMetadata() {
    return {
        title: 'Carte de visite'
    };
}
export default function Layout({ children }: any) {
    return <>{children}</>;
}
