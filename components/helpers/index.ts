export const copyLink = (text: string, setCopied: any) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
        setCopied(false);
    }, 3000);
};
