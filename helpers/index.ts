export const copyLink = (text: string, setCopied: any) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
        setCopied(false);
    }, 3000);
};

export const fetchConfig = {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KAZIPRO_API_TOKEN}`,
        'content-type': 'application/json'
    }
};

export const getUserInKaziPro = async (id: number) => {
    const url = `${process.env.NEXT_PUBLIC_API}/authentification/getUserForContact/${id}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: fetchConfig.headers
    });

    return response.json();
};
