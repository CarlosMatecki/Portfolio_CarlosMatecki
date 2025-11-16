import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { useAuth } from '../context/AuthContext';
import { contactApi, educationApi, projectApi } from '../services/api';

const emptyContact = { name: '', email: '', subject: '', message: '' };
const emptyEducation = {
  institution: '',
  program: '',
  level: '',
  startDate: '',
  endDate: '',
  description: '',
};
const emptyProject = {
  title: '',
  client: '',
  summary: '',
  status: 'in-progress',
  completionDate: '',
  techStack: '',
  repoUrl: '',
};

export default function Dashboard() {
  const { token, user } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [educations, setEducations] = useState([]);
  const [projects, setProjects] = useState([]);

  const [contactForm, setContactForm] = useState(emptyContact);
  const [educationForm, setEducationForm] = useState(emptyEducation);
  const [projectForm, setProjectForm] = useState(emptyProject);

  const [editingContactId, setEditingContactId] = useState(null);
  const [editingEducationId, setEditingEducationId] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (!token) return;
    async function bootstrap() {
      try {
        const [contactData, educationData, projectData] = await Promise.all([
          contactApi.list(),
          educationApi.list(),
          projectApi.list(),
        ]);
        setContacts(contactData);
        setEducations(educationData);
        setProjects(projectData);
      } catch (err) {
        setStatusMessage(err.message);
      }
    }
    bootstrap();
  }, [token]);

  const resetState = () => {
    setEditingContactId(null);
    setEditingEducationId(null);
    setEditingProjectId(null);
    setContactForm(emptyContact);
    setEducationForm(emptyEducation);
    setProjectForm(emptyProject);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContactId) {
        const updated = await contactApi.update(editingContactId, contactForm, token);
        setContacts((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
      } else {
        const created = await contactApi.create(contactForm, token);
        setContacts((prev) => [created, ...prev]);
      }
      setContactForm(emptyContact);
      setEditingContactId(null);
      setStatusMessage('Contact saved');
    } catch (err) {
      setStatusMessage(err.message);
    }
  };

  const handleEducationSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...educationForm };
      if (editingEducationId) {
        const updated = await educationApi.update(editingEducationId, payload, token);
        setEducations((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
      } else {
        const created = await educationApi.create(payload, token);
        setEducations((prev) => [created, ...prev]);
      }
      setEducationForm(emptyEducation);
      setEditingEducationId(null);
      setStatusMessage('Education entry saved');
    } catch (err) {
      setStatusMessage(err.message);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...projectForm, techStack: projectForm.techStack.split(',').map((item) => item.trim()).filter(Boolean) };
      if (editingProjectId) {
        const updated = await projectApi.update(editingProjectId, payload, token);
        setProjects((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
      } else {
        const created = await projectApi.create(payload, token);
        setProjects((prev) => [created, ...prev]);
      }
      setProjectForm(emptyProject);
      setEditingProjectId(null);
      setStatusMessage('Project saved');
    } catch (err) {
      setStatusMessage(err.message);
    }
  };

  const handleDelete = async (entity, id) => {
    try {
      if (entity === 'contact') {
        await contactApi.remove(id, token);
        setContacts((prev) => prev.filter((item) => item._id !== id));
      }
      if (entity === 'education') {
        await educationApi.remove(id, token);
        setEducations((prev) => prev.filter((item) => item._id !== id));
      }
      if (entity === 'project') {
        await projectApi.remove(id, token);
        setProjects((prev) => prev.filter((item) => item._id !== id));
      }
      setStatusMessage('Entry removed');
    } catch (err) {
      setStatusMessage(err.message);
    }
  };

  return (
    <>
      <Layout />
      <main className="dashboard">
        <header className="dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your contact requests, education history, and flagship projects.</p>
          </div>
          <div className="dashboard-user">Signed in as {user?.name}</div>
        </header>

        {statusMessage && <p className="status-message">{statusMessage}</p>}

        <section className="dashboard-section">
          <div>
            <h2>Contact Entries</h2>
            <form onSubmit={handleContactSubmit} className="dashboard-form">
              <input name="name" placeholder="Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} required />
              <input name="email" type="email" placeholder="Email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} required />
              <input name="subject" placeholder="Subject" value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} required />
              <textarea name="message" placeholder="Message" rows={3} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} required />
              <button type="submit" className="btn btn-primary">
                {editingContactId ? 'Update contact' : 'Create contact'}
              </button>
            </form>
          </div>
          <ul className="dashboard-list">
            {contacts.map((contact) => (
              <li key={contact._id}>
                <div>
                  <strong>{contact.name}</strong>
                  <p>{contact.subject}</p>
                  <small>{contact.email}</small>
                </div>
                <div className="list-actions">
                  <button type="button" onClick={() => {
                    setEditingContactId(contact._id);
                    setContactForm({ name: contact.name, email: contact.email, subject: contact.subject, message: contact.message });
                  }}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete('contact', contact._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-section">
          <div>
            <h2>Education / Qualifications</h2>
            <form onSubmit={handleEducationSubmit} className="dashboard-form">
              <input
                placeholder="Institution"
                value={educationForm.institution}
                onChange={(e) => setEducationForm({ ...educationForm, institution: e.target.value })}
                required
                name="institution"
              />
              <input placeholder="Program" value={educationForm.program} onChange={(e) => setEducationForm({ ...educationForm, program: e.target.value })} required name="program" />
              <input placeholder="Level" value={educationForm.level} onChange={(e) => setEducationForm({ ...educationForm, level: e.target.value })} required name="level" />
              <label>Start Date</label>
              <input type="date" value={educationForm.startDate} onChange={(e) => setEducationForm({ ...educationForm, startDate: e.target.value })} required name="startDate" />
              <label>End Date</label>
              <input type="date" value={educationForm.endDate} onChange={(e) => setEducationForm({ ...educationForm, endDate: e.target.value })} name="endDate" />
              <textarea placeholder="Description" value={educationForm.description} onChange={(e) => setEducationForm({ ...educationForm, description: e.target.value })} required name="description" rows={4} />
              <button type="submit" className="btn btn-primary">{editingEducationId ? 'Update education' : 'Create education'}</button>
            </form>
          </div>
          <ul className="dashboard-list">
            {educations.map((education) => (
              <li key={education._id}>
                <div>
                  <strong>{education.program}</strong>
                  <p>{education.institution}</p>
                  <small>{education.level}</small>
                </div>
                <div className="list-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingEducationId(education._id);
                      setEducationForm({
                        institution: education.institution,
                        program: education.program,
                        level: education.level,
                        startDate: education.startDate?.slice(0, 10) || '',
                        endDate: education.endDate?.slice(0, 10) || '',
                        description: education.description,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete('education', education._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard-section">
          <div>
            <h2>Projects</h2>
            <form onSubmit={handleProjectSubmit} className="dashboard-form">
              <input placeholder="Title" name="title" value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} required />
              <input placeholder="Client" name="client" value={projectForm.client} onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })} />
              <textarea placeholder="Summary" name="summary" value={projectForm.summary} onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })} required rows={4} />
              <select name="status" value={projectForm.status} onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
              <label>Completion Date</label>
              <input type="date" name="completionDate" value={projectForm.completionDate} onChange={(e) => setProjectForm({ ...projectForm, completionDate: e.target.value })} />
              <input
                placeholder="Tech stack (comma separated)"
                name="techStack"
                value={projectForm.techStack}
                onChange={(e) => setProjectForm({ ...projectForm, techStack: e.target.value })}
              />
              <input placeholder="Repository or demo URL" name="repoUrl" value={projectForm.repoUrl} onChange={(e) => setProjectForm({ ...projectForm, repoUrl: e.target.value })} />
              <button type="submit" className="btn btn-primary">{editingProjectId ? 'Update project' : 'Create project'}</button>
            </form>
          </div>
          <ul className="dashboard-list">
            {projects.map((project) => (
              <li key={project._id}>
                <div>
                  <strong>{project.title}</strong>
                  <p>{project.summary}</p>
                  <small>{project.status}</small>
                </div>
                <div className="list-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProjectId(project._id);
                      setProjectForm({
                        title: project.title,
                        client: project.client || '',
                        summary: project.summary,
                        status: project.status,
                        completionDate: project.completionDate?.slice(0, 10) || '',
                        techStack: project.techStack?.join(', ') || '',
                        repoUrl: project.repoUrl || '',
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete('project', project._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <button type="button" className="btn btn-secondary" onClick={resetState}>
          Reset forms
        </button>
      </main>
    </>
  );
}

