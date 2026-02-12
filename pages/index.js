export default function Home() {
  const resume = {
  "name": "Sai Varshith Pujala",
  "title": "",
  "email": "",
  "phone": "",
  "location": "",
  "summary": "PUJALA SAI VARSHITH\nIndia | 📞 8185958336 | 📧 saivarshith8284@gmail.com\nLinkedIn: https://www.linkedin.com/in/sai-varshith-pujala-704036252\nGitHub: https://github.com/saivarshithnaidu\nOBJECTIVE\nB. Tech Computer Science student seeking a Back-end Developer Intern role at IBM Systems, with strong fundamentals in\nsoftware development, computer architecture, debugging, and scripting, and hands-on experience in backend services. Highly\nmotivated to learn mainframe and z/OS infrastructure.\nEDUCATION\nB.Tech – Computer Science & Engineering\nVasireddy Venkatadri Institute of Technology | 2023 – 2026 | GPA: 7.0\nDiploma – Engineering\nChundi Ranganayakula Polytechnic College | 2019 – 2023 | 70%\nSecondary School (X)\nSt. Ann’s Centenary English Medium School | 2019 | GPA: 8.7\nTECHNICAL SKILLS\nLanguages: Java, C, Basic Assembly\nScripting: JavaScript\nBackend & Systems: OOP, Debugging, Software Testing, REST API Basics\nTools: Git, GitHub, IntelliJ IDEA, VS Code, Linux\nNetworking & Web: TCP/IP Basics, Web Application Fundamentals\nSOFT SKILLS\nCommunication • Problem Solving • Team Collaboration • Quick Learner\nPROJECT EXPERIENCE\nUniversal AI Chat Application | Next.js, JavaScript, APIs\nDeveloped backend logic for handling user requests and API responses. Implemented error handling and debugging to improve\nreliability. Followed clean coding and modular design principles.\nSMTP Email Service | Node.js, Gmail SMTP\nImplemented email sending functionality using SMTP with Gmail as the host. Focused on secure authentication, error handling, and\ndebugging mail delivery issues. Improved backend service reliability, logging, and monitoring.\nCERTIFICATIONS\nCyber Security (AICTE) • Data Engineering (AWS) • Google Analytics\nINTERESTS\nBackend Development • Mainframes & z/OS • Enterprise Systems\nHOBBIES\nListening to music |Traveling |Exploring new technologies | Problem solving and coding",
  "skills": [],
  "experience": [],
  "education": [],
  "projects": [],
  "links": {}
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{resume.name || 'Portfolio'}</h1>
        <h2 className="text-2xl text-blue-300 mb-6">{resume.title || 'Professional'}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          {resume.summary || 'Welcome to my portfolio'}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {resume.email && (
            <a 
              href={`mailto:${resume.email}`}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition"
            >
              📧 Email
            </a>
          )}
          {resume.links?.github && (
            <a 
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full transition"
            >
              🔗 GitHub
            </a>
          )}
          {resume.links?.linkedin && (
            <a 
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-full transition"
            >
              💼 LinkedIn
            </a>
          )}
        </div>
      </header>

      {resume.skills && resume.skills.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-6 text-center">🚀 Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {resume.skills.map((skill, i) => (
              <span 
                key={i}
                className="bg-blue-600/30 border border-blue-400 px-4 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.experience && resume.experience.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">💼 Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {resume.experience.map((exp, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-blue-300">
                  {exp.position || 'Position'}
                </h4>
                <p className="text-gray-300 mb-2">
                  {exp.company || 'Company'} • {exp.duration || ''}
                </p>
                {exp.description && (
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.projects && resume.projects.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🛠️ Projects</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {resume.projects.map((project, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:scale-105 transition"
              >
                <h4 className="text-xl font-bold text-blue-300 mb-2">
                  {typeof project === 'string' ? project : project.name || 'Project'}
                </h4>
                {project.description && (
                  <p className="text-gray-300 mb-4">{project.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education && resume.education.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🎓 Education</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {resume.education.map((edu, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold text-blue-300">
                  {edu.degree || 'Degree'}
                </h4>
                <p className="text-gray-300">
                  {edu.school || 'School'} • {edu.year || ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="container mx-auto px-4 py-12 text-center text-gray-400 border-t border-white/20 mt-12">
        <p>Built with Next.js • Deployed on Vercel</p>
        <p className="mt-2">✨ Auto-generated from resume</p>
      </footer>
    </div>
  );
}