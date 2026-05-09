

function Popup({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="popup">
            <h2>{project.name}</h2>
            <img
                src={project.screenshot} alt="{project.name}" />

            <p><strong>Tech</strong>{project.tech}</p>
            <p><strong>GitHub</strong>{project.github}</p>
            <p><strong>WriteUp</strong>{project.writeUp}</p>
            <p><strong>WhatItDoes</strong>{project.whatItDoes}</p>
            <p><strong>Learned</strong>{project.learned}</p>
            <p><strong>Role</strong>{project.role}</p>
            <p><strong>Challenges</strong>{project.challenges}</p>

            <button onClick={onClose}
            >Close</button>
        </div>

    );
}
export default Popup;