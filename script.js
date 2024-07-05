const defaultImage = 'images/profilePicture.png';

const getUserInKaziPro = async id => {
    return {
        name: 'Precieux',
        firstName: 'Precieux',
        lastName: 'Mudibu',
        position: 'Web developer',
        countryAccess:
            'France, Congo Brazza, Gabon, Cameroun, Angola et Zambie',
        description: 'France, Congo Brazza, Gabon, Cameroun, Angola et Zambie',
        phoneNumber: '+243 979544988',
        professionalPhoneNumber: '+243 979544988',
        professionalEmail: 'precieuxmudibu@itmafrica.com',
        address: '8 Maniema, Kintambo',
        instagram: 'www.itmafrica.com',
        linkedin: 'www.itmafrica.com',
        facebook: 'www.itmafrica.com',
        picture: defaultImage,
        address: '8 Maniema, Kintambo',
        description:
            ' Ipsum dolor meat lovers buffalo. Crust tomato Aussie greenroll beef mozzarella green pie. Hawaiian beef mozzarella crust Hawaiian Hawaiian. Bianca deep pesto personal mayo garlic. Mayo mayo stuffed.'
    };
};

const addContact = () => {
    // Vérifier si la fonctionnalité d'ajout de contact est disponible
    if (navigator.contacts && navigator.contacts.create) {
        // Créer un nouvel objet contact
        var contact = new Contact();
        contact.name = { givenName: 'Prénom', familyName: 'Nom' }; // Remplacer par les valeurs réelles
        contact.email = 'exemple@email.com'; // Remplacer par l'adresse e-mail réelle
        contact.phoneNumbers = [{ type: 'mobile', value: '+33123456789' }]; // Remplacer par le numéro de téléphone réel

        // Afficher les options de création de contact
        navigator.contacts.create(
            [contact],
            function (success) {
                console.log('Contact créé avec succès');
            },
            function (error) {
                console.error('Échec de la création du contact :', error);
            }
        );
    } else {
        // Gérer le cas où la fonctionnalité n'est pas disponible
        alert(
            "Fonctionnalité d'ajout de contact non disponible sur votre appareil."
        );
    }
};

(async () => {
    const params = new URLSearchParams(document.location.search);
    const userId = params.get('id');
    const language = params.get('lang');

    const user = await getUserInKaziPro(userId);

    const name = document.getElementById('name');
    name.textContent = user?.name;

    const position = document.getElementById('position');
    position.textContent = user?.position;

    const keys = Object.keys(user);
    console.log(Object.keys(user));

    for (key of keys) {
        console.log(key);
        try {
            if (key === 'name') {
                document.getElementById(
                    key
                ).textContent = `${user[key]} ${user?.firstName} ${user?.lastName}`;
            } else if (key === 'firstName' || key === 'lastName') {
                continue;
            } else if (key === 'picture') {
                document.getElementById(key).setAttribute('src', user[key]);
            } else if (
                key === 'instagram' ||
                key === 'linkedin' ||
                key === 'facebook'
            ) {
                document.getElementById(key).setAttribute('href', user[key]);
            } else {
                document.getElementById(key).textContent = user[key];
            }
        } catch (error) {
            console.log(error);
        }
    }
})();
