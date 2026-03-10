document.addEventListener("click", async function (e) {
    if (e.target.classList.contains("viewComments") || e.target.closest(".viewComments")) {
        const btn = e.target.classList.contains("viewComments") ? e.target : e.target.closest(".viewComments");
        const postId = btn.dataset.id;
        const section = document.querySelector(`#comments-${postId}`);
        const container = section.querySelector(".comments-container");

        // Toggle visibility
        if (section.style.display === "block") {
            section.style.display = "none";
            btn.innerHTML = `<i class="bi bi-chat-text me-2"></i> View Comments`;
            return;
        }

        // Show section and loading state
        section.style.display = "block";
        btn.innerHTML = `<i class="bi bi-chevron-up me-2"></i> Hide Comments`;
        container.innerHTML = `
            <div class="d-flex align-items-center py-3 text-primary">
                <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                <small>Retreiving conversations...</small>
            </div>
        `;

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const comments = await res.json();

            container.innerHTML = comments.map(comment => `
                <div class="mb-3 p-3 bg-light rounded-3 border-start border-primary border-4">
                    <div class="d-flex justify-content-between mb-1">
                        <h6 class="fw-bold mb-0" style="font-size: 0.9rem;">${comment.name.substring(0, 30)}...</h6>
                        <small class="text-primary" style="font-size: 0.75rem;">${comment.email}</small>
                    </div>
                    <p class="mb-0 text-muted" style="font-size: 0.85rem;">${comment.body}</p>
                </div>
            `).join('');
        } catch (err) {
            container.innerHTML = `<p class="text-danger small">Error loading comments.</p>`;
        }
    }
});
