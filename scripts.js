document.addEventListener('DOMContentLoaded', function () {
    const linkForm = document.getElementById('linkForm');
    const linksContainer = document.getElementById('linksContainer');

    linkForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('userName').value;
        const referralLink = document.getElementById('referralLink').value;

        const linkItem = document.createElement('li');
        linkItem.textContent = `${userName} : ${referralLink}`;
        linksContainer.appendChild(linkItem);

        linkForm.reset();
    });
});
