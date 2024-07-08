import React, { useEffect, useState } from 'react';
import { MdShare } from 'react-icons/md';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterIcon,
    TwitterShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'next-share';
import { copyLink } from '../helpers';
import ModalContainer from '../modal';

export default function ShareModal({ isOpen, closeModal }: any) {
    const [shareFormation, setShareFormation] = useState(false);
    const [copied, setCopied] = useState(false);
    const [linkToShare, setLinkToShare] = useState('');

    const [languages]: any = useState({
        fr: {
            copyButton: 'Copier',
            copiedButton: 'Copié',
            copyParagraph: 'Ou copier le lien'
        },
        en: {
            copyButton: 'Copy',
            copiedButton: 'Copied',
            copyParagraph: 'Or copy the link'
        }
    });

    const openShareModal = () => {
        setShareFormation(true);
    };
    const [title, setTitle]: any = useState('');

    return (
        <>
            <ModalContainer
                classNames="h-fit"
                isOpen={isOpen}
                onClick={() => {
                    closeModal();
                }}
            >
                <div
                    className="w-54 border border-red-500 h-5/6 relative sm:h-2/5 bg-white overflow-x-hidden py-6 px-16 text-black rounded-[14px] relative animate__animated animate__slideInDown"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <h1 className="text-lg font-bold">Partager le contact</h1>

                    <div className="w-full border mt-4 mb-6 flex items-center justify-between">
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
                        dddkdkdkdk
                        {/* {languages[lang].copyParagraph} */}
                    </p>
                    <div className="border rounded py-2 px-4 w-full flex text-sm">
                        <p className="w-full overflow-y-hidden mr-2">
                            {linkToShare.slice(0, 60)}
                        </p>
                        {copied ? (
                            <p className="text-green-500 font-medium w-12">
                                Copié
                            </p>
                        ) : (
                            <button
                                onClick={() => copyLink(linkToShare, setCopied)}
                                type="button"
                                className="text-primary font-medium w-12"
                            >
                                Copier
                            </button>
                        )}
                    </div>
                </div>
            </ModalContainer>
        </>
    );
}
