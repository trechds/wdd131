document.addEventListener('DOMContentLoaded', function () {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
});