import React, { useEffect, useState } from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'next-share';
import { copyLink } from '@/helpers';
import ModalContainer from '../modal';
import { useParams, useSearchParams } from 'next/navigation';

export default function ShareModal({ dictionary, isOpen, closeModal }: any) {
    const [copied, setCopied] = useState(false);
    const searchParams = useSearchParams();
    const params = useParams();
    const lang = params?.lang || 'fr';
    const id = searchParams.get('id');

    const [linkToShare, setLinkToShare] = useState(window.location.href);
    useEffect(function () {
        setLinkToShare(
            `${window.location.href}`
        );
    }, [lang, id]);

    return (
        <>
            <ModalContainer
                classNames="h-fit w-11/12 lg:w-[380px]"
                isOpen={isOpen}
                onClick={() => {
                    closeModal();
                }}
            >
                <div
                    className="h-5/6 relative sm:h-2/5 bg-white overflow-x-hidden p-6 text-black rounded-[14px] relative animate__animated animate__slideInDown"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <h1 className="text-lg font-bold">
                        {dictionary?.shareContact}
                    </h1>
                    <div className="m-4 flex items-center justify-between">
                        <FacebookShareButton url={linkToShare}>
                            <FacebookIcon size={45} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={linkToShare}>
                            <TwitterIcon size={45} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={linkToShare}>
                            <LinkedinIcon size={45} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={linkToShare}>
                            <WhatsappIcon size={45} round />
                        </WhatsappShareButton>
                    </div>

                    <p className="text-sm font-medium mb-2">
                        {dictionary?.orCopyTheLink}
                    </p>
                    <div className="border rounded py-2 px-4 w-full flex text-sm">
                        <p className="w-full overflow-y-hidden mr-2">
                            {linkToShare?.slice(0, 60)}
                        </p>
                        {copied ? (
                            <p className="text-green-500 font-medium w-12">
                                {dictionary?.copied}
                            </p>
                        ) : (
                            <button
                                onClick={() => copyLink(linkToShare, setCopied)}
                                type="button"
                                className="text-primary font-medium w-12"
                            >
                                {dictionary?.copy}
                            </button>
                        )}
                    </div>
                </div>
            </ModalContainer>
        </>
    );
}
