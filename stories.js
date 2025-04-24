// stories.js - Load stories from JSON
fetch('stories.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.querySelector('.story-grid');
        data.forEach(story => {
            grid.innerHTML += `
                <article class="story-card">
                    <h3>${story.title}</h3>
                    <p>${story.summary}</p>
                    <button>Read Now</button>
                </article>
            `;
        });
    });