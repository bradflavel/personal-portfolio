document.addEventListener("DOMContentLoaded", function() {
    var lastClickedSectionId = null;

    function changeContent(sectionId) {
        hideAllSections();
        showSection(sectionId);
    }

    function hideAllSections() {
        document.querySelectorAll('.content-section').forEach(function(section) {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        document.getElementById(sectionId).style.display = 'block';
    }

    // Add event listeners for hover
    document.querySelectorAll('.menu-item').forEach(function(menuItem) {
        menuItem.addEventListener('mouseover', function() {
            if (lastClickedSectionId !== menuItem.getAttribute('data-section')) {
                changeContent(menuItem.getAttribute('data-section'));
            }
        });

        menuItem.addEventListener('click', function() {
            lastClickedSectionId = menuItem.getAttribute('data-section');
            changeContent(lastClickedSectionId);
        });
    });
});
