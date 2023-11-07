document.addEventListener("DOMContentLoaded", function() {
    // При завантаженні сторінки відображаємо початкову категорію, наприклад "Роботи"
    showCategory('works');
});

const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        showCategory(category);
    });
});

function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(function(category) {
        category.classList.remove('active');
        if (category.id === categoryId) {
            category.classList.add('active');
        }
    });
}
