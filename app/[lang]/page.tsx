import HomePage from '@/components/page';
import { getDictionary } from '@/get-dictionary';
import { getUserInKaziPro } from '@/helpers';
import { Suspense } from 'react';
export async function generateMetadata(params: any) {
    const { searchParams: { id } } = params
    let title = ""
    let description = ""
    await getUserInKaziPro(id)
        .then(async (response: any) => {
            title = `${response?.data.firstName} ${response?.data.name}`
            description = `${response?.contract?.job?.name
                ? response?.contract?.job?.name
                : response.id == 8778 ? 'Chairman' : ""}`
        })
    return {
        title: 'Carte de visite : ' + title,
        description
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
