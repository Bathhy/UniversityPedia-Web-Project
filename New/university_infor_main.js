document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.collapsible-header');

  headers.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;

          // Toggle visibility of the content
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});
