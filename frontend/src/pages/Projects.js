function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>Disaster Management System</h3>
        <p>A full-stack web application that allows citizens to raise emergency
          requests and helps authorities manage rescue operations efficiently.</p>
        <p><strong>Tech Stack:</strong> React, Node.js, XAMPP</p>
      </div>

      <div className="project-card">
        <h3>Library Management System</h3>
        <p>
          A database-driven system to manage books, issue records,
          and library members efficiently.
        </p>
        <p><strong>Tech Stack:</strong> Python, MySQL</p>
      </div>

      <div className="project-card">
        <h3>Job Portal</h3>
        <p>
          A web-based platform connecting job seekers and recruiters.
    Users can register, apply for jobs, and employers can post
    and manage.
        </p>
        <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, MySQL, XAMPP, Git</p>
      </div>

      <div className="project-card">
        <h3>Guessaro – Word Guessing Game</h3>
        <p>
          An interactive word guessing game where users try to guess
          the hidden word within limited attempts.
        </p>
        <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript</p>
      </div>
    </div>
  );
}

export default Projects;