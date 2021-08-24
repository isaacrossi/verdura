const spaceId = "o6tmqkrd3ud3"
const environmentId = "master"
const accessToken = "NGOCunWJYladfW04ibsrRuNpsMc1jLfEos-h2SQ87Sw"

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`

const gridTag = document.querySelector("div.menu__grid")

const grabData = function () {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // store the assets somewhere
            const assets = data.includes.Asset


            // turn our contenful data into something more usable
            return data.items.map(item => {
                let imageUrl = "image1.jpg"

                const imageId = item.fields.image.sys.id

                const imageData = assets.find(asset => {
                    return asset.sys.id == imageId
                })

                if (imageData) {
                    imageUrl = imageData.fields.file.url
                }

                item.fields.image = imageUrl
                return item.fields
            })
        })
}

// run this grab data function on load
grabData().then(data => {
    // in here, do something with the returned data
    console.log(data)

    data.forEach(item => {
        gridTag.innerHTML = gridTag.innerHTML + `
            <div class="menu__item">
                <img src="${item.image}" alt="${item.description}" class="menu__image">
                <div class="menu__title">
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
                </div>
                <p>${item.description}</p>
            </div>
        `
    })
})