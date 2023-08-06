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


const open = (event => {
    event.preventDefault();
    const { target } = event;
    const instance = basicLightbox.create(`
        <img src="${target.dataset.source}">
        `)
    instance.show();

const onEscClick = (event => {
    if (event.code !== 'Escape') {
        return
        }
        
    instance.close();    
    document.removeEventListener('keydown', onEscClick);

});

document.addEventListener("keydown", onEscClick)

});

gallery.addEventListener("click", open)



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
