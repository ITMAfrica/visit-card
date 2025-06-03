'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import coverPhoto from '@/public/images/coverPhoto.png';
import contact from '@/public/images/contact.png';
import share from '@/public/images/share.png';
import phone from '@/public/images/phone.png';
import globIcon from '@/public/images/globIcon.png';
import building from '@/public/images/building.png';
import email from '@/public/images/email.png';
import document from '@/public/images/document.png';
import localisation from '@/public/images/localisation.png';
import linkedin from '@/public/images/linkedin.png';
import facebook from '@/public/images/facebook.png';
import instagram from '@/public/images/instagram.png';
import africa from '@/public/images/africa.png';
import { useEffect, useState } from 'react';
import ShareModal from '@/components/shareModal';
import { useSearchParams } from 'next/navigation';
import { getUserInKaziPro } from '@/helpers';
import LoaderLayout from '../loaderLayout';

export default function HomePage({ dictionary }: any) {
    const [user, setUser]: any = useState({});
    const [url, setUrl]: any = useState({});
    const [modalIsOpen, setModalIsOpen]: any = useState(false);
    const [loaderStatusVisibility, setLoaderStatusVisibility]: any =
        useState(true);
    const searchParams = useSearchParams();
    const id: any = searchParams.get('id');

    const documents = [
        {
            label: dictionary.itmProfileSarl,
            link: 'https://itmafrica.blob.core.windows.net/test/Profil_Sarl_2023.pdf',
            picture: document
        },
        {
            label: dictionary.itmBrochureHolding,
            link: 'https://itmafrica.blob.core.windows.net/test/Profil_holding_2023.pdf',
            picture: document
        }
    ];

    useEffect(() => {
        getUserInKaziPro(id)
            .then(async (response: any) => {
                setUser(response?.data);
                const vcard =
                    'BEGIN:VCARD\nVERSION:4.0\nFN:' +
                    `${response?.data.firstName} ${response?.data.name}` +
                    '\nTEL;TYPE=work,voice:' +
                    `+${response?.data.telephoneAreaCode}${response?.data.phoneNumber}` +
                    '\nEMAIL:' +
                    response?.data.email +
                    '\nEND:VCARD';

                const blob = new Blob([vcard], { type: 'text/vcard' });
                const url = URL.createObjectURL(blob);
                setUrl(url);
                setLoaderStatusVisibility(false);
            })
            .catch((error: any) => {
                console.log(error);
                setLoaderStatusVisibility(false);
            });
    }, []);

    if (!user) return <div className="w-full"></div>
    return (
        <LoaderLayout loaderStatusVisibility={loaderStatusVisibility}>
            <header>
                <Image
                    alt="profile"
                    className="coverPhoto object-cover"
                    src={coverPhoto}
                    width={404}
                    height={102}
                />
                {<Image
                    alt="profile"
                    id="picture"
                    className="profilePicture h-[113px] w-[113px] object-contain bg-white"
                    src={
                        user?.picture ||
                        'https://www.itmafrica.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcd.38a5bff4.png&w=256&q=75'
                    }
                    width={148}
                    height={156}
                />}
                <section>
                    <h1 id="name" className='font-bold'>
                        {`${user?.firstName} ${user?.name}` ||
                            'Precieux Mudibu'}
                    </h1>
                    <h2 id="position">
                        {user?.contract?.job?.name
                            ? user?.contract?.job?.name
                            : 'ITM'}
                    </h2>
                    <h3 id="countryAccess">
                        {user?.countryAccesses ? user?.countryAccesses : 'ITM'}
                    </h3>
                </section>
                <section className="headerButtons">
                    <a
                        id="saveButton"
                        href={url}
                        download={`${user?.firstName}${user?.name}.vcf`}
                    >
                        <Image
                            alt="profile"
                            src={contact}
                            width={15}
                            height={15}
                        />
                        <span>{dictionary.addToContact}</span>
                    </a>

                    <a>
                        <Image
                            alt="profile"
                            src={share}
                            width={15}
                            height={15}
                        />
                        <span onClick={() => setModalIsOpen(true)}>
                            {dictionary.shareContact}
                        </span>
                    </a>
                </section>
                <Image alt="profile" className="africa" src={africa} />
            </header>
            <main>
                <section>
                    <h2 className='font-bold'>{dictionary.about}</h2>
                    <p id="description">{user?.description}</p>
                    <ul>
                        <li>
                            <Image alt="profile" src={globIcon} />
                            <a
                                href="https://www.itmafrica.com/"
                                target="_blank"
                            >
                                www.itmafrica.com
                            </a>
                        </li>
                        {user?.telephoneAreaCode && user.phoneNumber && (
                            <li>
                                <Image alt="profile" src={phone} />
                                <a
                                    id="phoneNumber"
                                    href={
                                        `+${user?.telephoneAreaCode}${user?.phoneNumber}` ||
                                        '+243979544988'
                                    }
                                >
                                    {`+${user?.telephoneAreaCode}${user?.phoneNumber}` ||
                                        '+243979544988'}
                                </a>
                            </li>
                        )}
                        {user?.contract && (
                            <li>
                                <Image alt="profile" src={building} />
                                <a
                                    id="professionalPhoneNumber"
                                    href={`${user?.contract?.telephoneAreaCode}${user?.contract?.phoneNumber}`}
                                >
                                    {`+${user?.contract?.telephoneAreaCode}${user?.contract?.phoneNumber}` ||
                                        '+243979544988'}
                                </a>
                            </li>
                        )}
                        {user?.email && (
                            <li>
                                <Image alt="profile" src={email} />
                                <a id="email" href={user?.email}>
                                    {user?.email || 'precieux@gmail.com'}
                                </a>
                            </li>
                        )}
                        {user?.address && (
                            <li>
                                <Image alt="profile" src={localisation} />
                                <a id="address">
                                    {' '}
                                    {user?.address || 'precieux@gmail.com'}
                                </a>
                            </li>
                        )}
                    </ul>
                    {/* <div>
                        <a
                            target="_blank"
                            id="linkedin"
                            href={`${user?.organisationCity?.organisation?.linkedinLink}`}
                        >
                            <Image
                                alt="profile"
                                src={linkedin}
                                width={30}
                                height={25}
                            />
                        </a>
                        <a
                            target="_blank"
                            id="instagram"
                            href={`${user?.organisationCity?.organisation?.instagramLink}`}
                        >
                            <Image
                                alt="profile"
                                src={instagram}
                                width={30}
                                height={25}
                            />
                        </a>
                        <a
                            target="_blank"
                            id="facebook"
                            href={`${user?.organisationCity?.organisation?.facebookLink}`}
                        >
                            <Image
                                alt="profile"
                                src={facebook}
                                width={30}
                                height={25}
                            />
                        </a>
                    </div> */}
                </section>

                <section>
                    <h2 className='font-bold'>{dictionary.services}</h2>
                    <p>{dictionary.servicesDetailsParagraph1}</p>
                    <p>
                        {dictionary.servicesDetailsParagraph2}
                        <br />
                        🔹 {dictionary.recruitment} <br />
                        🔹 {dictionary.training} <br />
                        🔹 {dictionary.placement} <br />
                        🔹 {dictionary.talentAndSkillsManagement}
                    </p>
                </section>

                <section>
                    <h2 className='font-bold'>{dictionary.documents}</h2>
                    <ul>
                        {documents?.map((document: any, index: number) => (
                            <li key={index} className="w-full">
                                <a
                                    href={document?.link}
                                    className="w-full flex flex-col items-center"
                                >
                                    <span className="">{document.label}</span>
                                    <Image
                                        width={30}
                                        height={25}
                                        alt="profile"
                                        src={document?.picture}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <div>
                <ShareModal
                    dictionary={dictionary}
                    isOpen={modalIsOpen}
                    closeModal={() => setModalIsOpen(false)}
                />
            </div>
        </LoaderLayout>
    );
}
