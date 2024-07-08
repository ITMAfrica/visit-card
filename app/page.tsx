'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import coverPhoto from '@/public/images/coverPhoto.png';
import profilePicture from '@/public/images/profilePicture.png';
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

export default function Home() {
    const [user, setUser]: any = useState({});

    const documents = [
        {
            label: 'ITM Brochure Holding',
            link: '',
            picture: document
        },
        {
            label: 'ITM Brochure Holding',
            link: '',
            picture: document
        },
        {
            label: "Profil d'entreprise",
            link: '',
            picture: document
        }
    ];

    const getUserInKaziPro = async (id: number) => {
        const url = `http://localhost:1337/api/authentification/getUserForContact/${id}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ee70c4813dfc05395f129e3ca7adb3959b4280b44f42befd44cd5c5777bb1b063a454cb241816e9a06c30a49caf5cf730522a8cb950588ced9f609635fa4d5674cfc230756b6e88f214b8c5d18f19cdf12f3ed79fe9dc31a389ebcc9e14437f017dd4002bb9928c038b97f5bfccbd2bc234d1b55a136642efc30090e84b5384b'
            }
        });

        return response.json();
    };

    useEffect(() => {
        getUserInKaziPro(35789)
            .then((response: any) => {
                setUser(response?.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);
    console.log(user);
    return (
        <>
            <header>
                <Image
                    alt="profile"
                    className="coverPhoto object-cover"
                    src={coverPhoto}
                    width={404}
                    height={102}
                />
                <Image
                    alt="profile"
                    id="picture"
                    className="profilePicture h-[113px] w-[113px] object-contain bg-white"
                    src={
                        user?.picture ||
                        'https://www.itmafrica.com/_next/image?url=https%3A%2F%2Fitmafrica.blob.core.windows.net%2Ftest%2FLogo_RDC.png&w=128&q=75'
                    }
                    width={148}
                    height={156}
                />
                <section>
                    <h1 id="name">
                        {`${user?.firstName} ${user?.name}` ||
                            'Precieux Mudibu'}
                    </h1>
                    <h2 id="position">
                        {`${user?.contract?.job?.name}` ||
                            'MD RDC Head of Central Division'}
                    </h2>
                    <h3 id="countryAccess">
                        {`${user?.countryAccesses}` ||
                            'France, Congo Brazza, Gabon, Cameroun, Angola et Zambie'}
                    </h3>
                </section>

                <section className="headerButtons">
                    <a id="saveButton">
                        <Image
                            alt="profile"
                            src={contact}
                            width={15}
                            height={15}
                        />
                        <span>Ajouter aux contacts</span>
                    </a>

                    <a>
                        <Image
                            alt="profile"
                            src={share}
                            width={15}
                            height={15}
                        />
                        <span>Partager le contact</span>
                    </a>
                </section>

                <Image alt="profile" className="africa" src={africa} />
            </header>

            <main>
                <section>
                    <h2>About</h2>
                    <p id="description"></p>
                    <ul>
                        <li>
                            <Image alt="profile" src={globIcon} />
                            <a href="itmafrica.com">www.itmafrica.com</a>
                        </li>
                        <li>
                            <Image alt="profile" src={phone} />
                            <a id="phoneNumber" href="+243979544988">
                                {`+${user?.telephoneAreaCode}${user?.phoneNumber}` ||
                                    '+243979544988'}
                            </a>
                        </li>
                        <li>
                            <Image alt="profile" src={building} />

                            <a
                                id="professionalPhoneNumber"
                                href="tel:+243979544988"
                            >
                                {`+${user?.contract?.telephoneAreaCode}${user?.contract?.phoneNumber}` ||
                                    '+243979544988'}
                            </a>
                        </li>
                        <li>
                            <Image alt="profile" src={email} />
                            <a id="email" href="mailto:votreadresse@mail.fr">
                                {user?.email || 'precieux@gmail.com'}
                            </a>
                        </li>
                        <li>
                            <Image alt="profile" src={localisation} />
                            <a id="address">
                                {' '}
                                {user?.address || 'precieux@gmail.com'}
                            </a>
                        </li>
                    </ul>

                    <div>
                        <a
                            target="_blank"
                            id="linkedin"
                            href={`/${user?.linkedin}`}
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
                            href={`/${user?.instagram}`}
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
                            href={`/${user?.facebook}`}
                        >
                            <Image
                                alt="profile"
                                src={facebook}
                                width={30}
                                height={25}
                            />
                        </a>
                    </div>
                </section>

                <section>
                    <h2>Services</h2>
                    <p>
                        En tant que leader dans le domaine de la gestion du
                        personnel, nous nous distinguons par notre expertise et
                        notre engagement envers l'excellence.
                    </p>
                    <p>
                        Nous offrons des solutions innovantes en :<br />
                        🔹 Recrutement <br />
                        🔹 Formation <br />
                        🔹 Placement <br />
                        🔹 Gestion des talents et des compétences
                    </p>
                </section>

                <section>
                    <h2>Documentations</h2>
                    <ul>
                        {documents?.map((document: any, index: number) => (
                            <li key={index} className="w-full text-center">
                                <a
                                    href=""
                                    className="w-full flex flex-col items-center"
                                >
                                    <span className="w-full text-center">
                                        Profile ITM SARL
                                    </span>
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
        </>
    );
}
