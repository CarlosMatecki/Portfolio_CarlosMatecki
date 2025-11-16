import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Reveal from '../components/Reveal';
import { educationApi } from '../services/api';

export default function Education() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadEducation() {
      try {
        const data = await educationApi.list();
        setRecords(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadEducation();
  }, []);

  return (
    <>
      <Layout />
      <main className="education-page">
        <Reveal as="section" className="education-hero" direction="up">
          <h1>Education & Qualifications</h1>
          <p>Experience gathered through formal training, specialized programs, and continuous learning.</p>
        </Reveal>

        {loading && <p className="loading">Loading education history...</p>}
        {error && <p className="form-error">{error}</p>}

        <div className="education-grid">
          {records.map((record, index) => (
            <Reveal as="article" className="education-card" delay={index * 120} direction="up" key={record._id}>
              <div className="education-header">
                <h3>{record.program}</h3>
                <span>{record.institution}</span>
                <small>{record.level}</small>
              </div>
              <div className="education-body">
                <p>{record.description}</p>
                <div className="education-dates">
                  <span>
                    {new Date(record.startDate).toLocaleDateString()} —{' '}
                    {record.endDate ? new Date(record.endDate).toLocaleDateString() : 'Present'}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}

