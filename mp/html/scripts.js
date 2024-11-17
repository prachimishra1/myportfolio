// Toggle project details with animation
function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.classList.contains('open')) {
        projectDetails.classList.remove('open');
    } else {
        projectDetails.classList.add('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for project buttons
    document.querySelectorAll('.toggle-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            toggleProjectDetails(projectId);
        });
    });
});

// Animate skill progress bars
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.getPropertyValue('--progress-width');
        bar.style.width = width;
    });
});

