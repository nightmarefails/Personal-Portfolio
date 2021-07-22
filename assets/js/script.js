function getUserRepos() {
    fetch("https://api.github.com/users/nightmarefails/repos")
    .then(response => response.json())
    .then(function (data) {
        createProjects(data);
    })
}

function createProjects(repos) {
    console.log(repos)
    let projectSlider = $('#projectSlider')
    for (let i = 0; i < repos.length; i++) {
        var listItem = $('<li>', {

        });
        let card = $('<div>', {
            class: "uk-card-default"
        });
        let imageHolder = $('<div>', {
            class: "uk-card-media-top"
        });
        let image = $('<img>', {
            'data-src': `./assets/images/${repos[i].name}.jpeg`,
            height: "500px",
            'uk-img': ''
        });
        let cardHeader = $('<div>', {
            class: "uk-card-header",
            text: `${repos[i].name}`
        });
        let cardBody = $('<div>', {
            class: "uk-card-body",
            text: "desc"
        });
        let cardFooter = $('<div>', {
            class: "uk-card-footer"
        });
        let linkNav = $('<ul>', {
            class: "uk-subnav uk-subnav-divider"
        })
        let navRepo = $('<li>');
        let navRepoLink = $('<a>', {
            href: repos[i].html_url,
            text: "Repo"
        })
        let navDeployed = $('<li>')
        let navDeployedLink = $('<a>', {
            href: `https://nightmarefails.github.io/${repos[i].name}`,
            text: "Website"
        })

        //Create Card Footer
        navDeployed.append(navDeployedLink);
        navRepo.append(navRepoLink);
        linkNav.append(navRepo);
        linkNav.append(navDeployed);
        cardFooter.append(linkNav);

        //Create Card Image
        imageHolder.append(image);

        //buildCard
        card.append(imageHolder);
        card.append(cardHeader);
        card.append(cardBody);
        card.append(cardFooter);

        //Add Card to list item
        listItem.append(card);

        //add new listitem to slider
        projectSlider.append(listItem);
      
    }
}


function Init() {
    getUserRepos();

}


Init();