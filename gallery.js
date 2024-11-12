// function handleFileSelect(event) {
//     const file = event.target.files[0];
//     const title = document.getElementById('imageTitle').value;
//     const description = document.getElementById('imageDescription').value;

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         addImageToLocalStorage(e.target.result, title, description);
//         clearInputFields();
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   function addImageToLocalStorage(imageSrc, title, description) {
//     const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];
//     galleryData.push({ imageSrc, title, description });
//     localStorage.setItem('galleryData', JSON.stringify(galleryData));
//   }

//   function clearInputFields() {
//     document.getElementById('fileInput').value = '';
//     document.getElementById('imageTitle').value = '';
//     document.getElementById('imageDescription').value = '';
//   }

//   // Function to load images from localStorage and add to gallery
//   function loadImagesFromLocalStorage() {
//     const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];
//     galleryData.forEach(item => {
//       addImageToGalleryPage3(item.imageSrc, item.title, item.description);
//     });
//   }

//   function addImageToGalleryPage3(imageSrc, title, description) {
//     const container = document.getElementById('galleryContainer3');
//     const newItem = document.createElement('div');
//     newItem.className = 'gallery-item';
//     newItem.innerHTML = `
//       <img src="${imageSrc}" alt="${title}" class="gallery-image" onclick="openModal('${imageSrc}', '${title}', '${description}')">
//       <div class="gallery-caption">${title}</div>
//     `;
//     container.appendChild(newItem);
//   }

//   // Function to open modal
//   function openModal(src, caption, description) {
//     var modal = document.getElementById("imageModal");
//     var modalImg = document.getElementById("modalImage");
//     var captionText = document.getElementById("caption");
//     var descriptionText = document.getElementById("description");
//     var downloadLink = document.getElementById("downloadLink");

//     modal.style.display = "block";
//     modalImg.src = src;
//     captionText.innerHTML = caption;
//     descriptionText.innerHTML = description;
//     downloadLink.href = src; // Set download link to image source
//   }

//   // Function to close modal
//   function closeModal() {
//     var modal = document.getElementById("imageModal");
//     modal.style.display = "none";
//   }

//   // Function to handle page navigation
//   let currentPage = 1;
//   const itemsPerPage = 6;
//   const totalPages = 6;

//   function showPage(pageNumber) {
//     const pages = document.querySelectorAll('.gallery-page');
//     pages.forEach((page, index) => {
//       page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
//     });
//     currentPage = pageNumber;
//     updatePagination();
//   }

//   function changePage(direction) {
//     const newPage = currentPage + direction;
//     if (newPage >= 1 && newPage <= totalPages) {
//       showPage(newPage);
//     }
//   }

//   function updatePagination() {
//     const pageNumbers = document.querySelector('.page-numbers');
//     pageNumbers.innerHTML = `Page ${currentPage} of ${totalPages}`;
//   }

//   // Initialize the page
//   document.addEventListener('DOMContentLoaded', () => {
//     loadImagesFromLocalStorage();
//     showPage(currentPage);
//     updatePagination();
//   });