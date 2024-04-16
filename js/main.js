const images = [
    { src: "images/1.jpg", title: "PAPAI E MAMÃE", subtitle: "Subtítulo da FOTO 1" },
    { src: "images/2.jpg", title: "MEUS PAPAIS E VOVÔ E VOVÓ", subtitle: "Subtítulo da FOTO 2" },
    { src: "images/3.jpg", title: "VOVÔ, PAPAI, MAMÃE E TITIA", subtitle: "Subtítulo da FOTO 3" },
    { src: "images/4.jpg", title: "TITIO, MAMÃE E PAPAI", subtitle: "Subtítulo da FOTO 4" },
    { src: "images/5.jpg", title: "MEUS PAPAIS E MINHA VOVÓ", subtitle: "Subtítulo da FOTO 5" },
    { src: "images/6.jpg", title: "OS TITIOS DA MINHA MAMÃE", subtitle: "Subtítulo da FOTO 6" },
    { src: "images/7.jpg", title: "MEU OUTRO TITIO, MAMÃE E PAPAI", subtitle: "Subtítulo da FOTO 7" },
    { src: "images/8.jpg", title: "MINHA BISA, A TITIA DA MAMÃE E A PRIMA DA MAMÃE" , subtitle: "Subtítulo da FOTO 8" },
    { src: "images/9.jpg", title: "RAYSSA AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 9" },
    { src: "images/10.jpg", title: "AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 10" },
    { src: "images/11.jpg", title: "AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 11" },
    { src: "images/12.jpg", title: "AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 12" },
    { src: "images/13.jpg", title: "AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 13" },
    { src: "images/14.jpg", title: "AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 14" },
    { src: "images/16.jpg", title: "ARLANE AMIGA DA MAMÃE", subtitle: "Subtítulo da FOTO 16" },
    { src: "images/17.jpg", title: "RAYSSA E MEUS PAPAIS", subtitle: "Subtítulo da FOTO 17" },
    { src: "images/18.jpg", title: "FAMÍLIA DO PAPAI", subtitle: "Subtítulo da FOTO 18" },
    { src: "images/19.jpg", title: "RAYSSA, BOSQUIN E MEUS PAPAIS", subtitle: "Subtítulo da FOTO 19" },
    { src: "images/20.jpg", title: "FOTO 20", subtitle: "Subtítulo da FOTO 20" },
    { src: "images/21.jpg", title: "FOTO 21", subtitle: "Subtítulo da FOTO 21" },
    { src: "images/22.jpg", title: "FOTO 22", subtitle: "Subtítulo da FOTO 22" }
];

const titles = images.map(image => image.title.toLowerCase());

const gallery = document.getElementById("image-gallery");

images.forEach((image, index) => {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");

    const divImage = document.createElement("div");
    divImage.classList.add("image");
    divImage.dataset.title = `foto${index + 1}`;

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.title;

    const h3 = document.createElement("h3");
    h3.textContent = image.title;

    const h2 = document.createElement("h2");
    h2.textContent = image.subtitle;

    divImage.appendChild(img);
    divImage.appendChild(h3);
    divImage.appendChild(h2);
    divColumn.appendChild(divImage);
    gallery.appendChild(divColumn);
});

document.getElementById("search-box").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    gallery.innerHTML = "";

    images.forEach((image, index) => {
        if (titles[index].includes(searchTerm)) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");

            const divImage = document.createElement("div");
            divImage.classList.add("image");
            divImage.dataset.title = `foto${index + 1}`;

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;

            const h3 = document.createElement("h3");
            h3.textContent = image.title;

            const h2 = document.createElement("h2");
            h2.textContent = image.subtitle;

            divImage.appendChild(img);
            divImage.appendChild(h3);
            divImage.appendChild(h2);
            divColumn.appendChild(divImage);
            gallery.appendChild(divColumn);
        }
    });
});
