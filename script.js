
function generatePortfolio() {
    // Get input values
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const skills = document.getElementById('skills').value.split(',');
    const projects = document.getElementById('projects').value.split(',');
    const contact = document.getElementById('contact').value;

    // Create portfolio layout
    let portfolioHTML = `
        <h2>${name}</h2>
        <p>${bio}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>

        <h3>Projects</h3>
        <ul>
            ${projects.map(project => `<li>${project.trim()}</li>`).join('')}
        </ul>

        <h3>Contact</h3>
        <p>Email: <a href="mailto:${contact}">${contact}</a></p>
    `;

    // Display portfolio on the page
    document.getElementById('portfolioDisplay').innerHTML = portfolioHTML;
}
