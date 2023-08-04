// В файле gallery-items.js есть массив galleryItems, который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание. Мы уже подключили его к каждому из JS-файлов проекта.

// Задание 1 - галерея изображений
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на ul.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(galleryItems.map(({ preview, original, description })));

const gallery = document.querySelector(".gallery");

const createMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", createMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        let markup = "";
        return markup = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
    }).join("");
};

// const item = document.querySelector(".gallery__item");

// console.log(item);


// function open(event) {
//     event.preventDefault();
//     const { target } = event;
//     const instance = basicLightbox.create(`
//         <img src="${target.dataset.source} width="800" height="600"">
//         `)
    
//     // return galleryItems.map(({ preview, original, description }) => {
//     //     const instance = basicLightbox.create(`
//     //     <img src="${original}" width="800" height="600">`)    
    
//     instance.show()
//     }

const open = (event => {
    event.preventDefault();
    const { target } = event;
    const instance = basicLightbox.create(`
        <img src="${target.dataset.source}">
        `)
    instance.show()
    const closeModal = (event => {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', closeModal);
        }
    })
    window.addEventListener('keydown', closeModal);
});


gallery.addEventListener("click", open)
window.addEventListener("click", close)
window.addEventListener("keydown", close)

// function close() {
//     const instance = basicLightbox.create(`
//         <img>`)    
//         instance.close()
//     }



// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// const previews = galleryItems.map(preview => preview.preview).join("  ");
// console.log(preview);

// // const originals = galleryItems.map(original => original.original).join("");
// // const description = galleryItems.map(description => description.description).join("");


// // const names = students.map(student => student.name);

// // console.log(previews);

// function createGalleryItem(galleryItems) {
//     gallery.innerHTML =

//     // const markup =
//         `<li class="gallery__item">
//         <a class="gallery__link" href="${originals}">
//             <img class="gallery__image"
//             src="${previews}"
//             data-source="${originals}"
//             alt="${description}"
//             />
//         </a>
//         </li>`;

//     // galleryItems.map(item => gallery.innerHTML = markup);
// }
            // data-source="${galleryItems.map(item => item.original)}"
            // alt="${galleryItems.map(item => item.original)}"


// console.log(list);
// console.log(item);

// gallery = galleryItems.map(bild => );

// function createGalleryItem(galleryItems) {
    // gallery.innerHTML =
    //  

    // galleryItems.map();
    // gallery.append(...markup);
    
    // gallery.append(markup);
    // return gallery;

//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');

//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = original;

//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.src = preview;
//   image.alt = description;

//   link.appendChild(image);
//   galleryItem.appendChild(link);    
// }

// createGalleryItem(galleryItems)

// createGalleryItem()
// const galleryMarkup = galleryItems.map(createGalleryItem);
// gallery.append(...galleryMarkup);

// function createMarkup(galItems) {
//     galleryItems.map(({ preview, original, description }) => {
    
//        }).join("")
//     const markup = `<li class="gallery__item">
//     <a class="gallery__link" href="galleryItems.original">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//     </a>
//     </li>`; 

    

//     list.innerHTML = markup;
// }

// createMarkup()


