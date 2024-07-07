const defaultImage =
    'https://www.itmafrica.com/_next/image?url=https%3A%2F%2Fitmafrica.blob.core.windows.net%2Ftest%2FLogo_RDC.png&w=128&q=75';
let user = {};

const getUserInKaziPro = async id => {
    const url = `http://localhost:1337/api/authentification/getUserForContact/${id}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization:
                'Bearer 3885899ca93415768dec546e14aa20fca71e418e8dc6dc60a7049f7df93b6e5a4f6dda6ef0e9bfa8b4894bc6cf3c716763eae4d24bab5392e093eb6adb60b6788d546fa8eb99024056be3db78d6d3b16351ea97a8b225bdab3152e455fad8703c5524688cab465841460538dc16d202d57c94d88d460102804d6cf985cb90389',
            'Content-Type': 'application/json'
        }
    });

    return response.json();
};

const saveButton = document.getElementById('saveButton');

const saveContact = () => {
    const vcard =
        'BEGIN:VCARD\nVERSION:4.0\nFN:' +
        `${user.firstName} ${user.name}` +
        '\nTEL;TYPE=work,voice:' +
        `+${user.telephoneAreaCode}${user.phoneNumber}` +
        '\nEMAIL:' +
        user.email +
        '\nEND:VCARD';

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = user.name + '.vcf';
    newLink.textContent = user.name;
    newLink.href = url;

    newLink.click();
};

saveButton.addEventListener('click', saveContact);

(async () => {
    const params = new URLSearchParams(document.location.search);
    const userId = params.get('id');
    const language = params.get('lang');

    await getUserInKaziPro(userId).then(response => (user = response?.data));

    const name = document.getElementById('name');
    name.textContent = user?.name;

    const position = document.getElementById('position');
    position.textContent = user?.position;

    const keys = Object.keys(user);

    for (key of keys) {
        try {
            if (key === 'name') {
                document.getElementById(
                    key
                ).textContent = ` ${user?.firstName} ${user[key]}`;
            } else if (key === 'firstName' || key === 'lastName') {
                continue;
            } else if (key === 'picture') {
                document
                    .getElementById(key)
                    .setAttribute('src', user[key] || defaultImage);
            } else if (
                key === 'instagram' ||
                key === 'linkedin' ||
                key === 'facebook'
            ) {
                document.getElementById(key).setAttribute('href', user[key]);
            } else {
                document.getElementById(key).textContent = user[key];
            }
        } catch (error) {}
    }
})();
