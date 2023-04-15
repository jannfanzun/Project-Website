var blogBoxes = document.querySelectorAll('.blog-box');

blogBoxes.forEach(function(blogBox) {
  var readMoreButton = blogBox.querySelector('.read-more');

  readMoreButton.addEventListener('click', function() {
    blogBox.classList.toggle('flipped');
  });
});

function toggleCard(event) {
event.preventDefault();
var clickedButton = event.target;
var blogBox = clickedButton.closest('.blog-box');
if (clickedButton.classList.contains('flip-btn')) {
blogBox.classList.toggle('flipped');
} else {
blogBox.classList.remove('flipped');
}
}  