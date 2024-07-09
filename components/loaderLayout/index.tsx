import Loader from '@/components/loader';

export default function LoaderLayout({
    children,
    loaderStatusVisibility
}: any) {
    return loaderStatusVisibility ? (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader />
        </div>
    ) : (
        children
    );
}