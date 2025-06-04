import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { getUserInKaziPro } from '@/helpers';
import { Suspense } from 'react';
export async function generateMetadata(params: any) {
    const { searchParams: { id } } = params

    let title = ""
    let description = ""
    let picture = ""

    await getUserInKaziPro(id)
        .then(async (response: any) => {
            title = `${response?.data.firstName} ${response?.data.name}`
            description = `${response?.contract?.job?.name
                ? response?.contract?.job?.name
                : response.id == 8778 ? 'Chairman' : ""}`
            picture = response?.picture ||
                'https://www.itmafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcd.38a5bff4.png&w=256&q=75'
        })
        
    return {
        icon: picture,
        images: [{ url: picture }],
        title: 'Carte de visite : ' + title,
        description,
        openGraph: {
            title: 'Carte de visite : ' + title,
            description,
            type: 'article',
            images: [{ url: picture }],
        },
    };
}
export default async function Home({ params }: any) {
    const dictionary = await getDictionary(params?.lang || 'en');

    return (
        <Suspense>
            <HomePage dictionary={dictionary} />
        </Suspense>
    );
}
