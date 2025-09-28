
import Layout from "../components/layout"
import { useState } from "react"

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1000);
    };

    return (
        <>
            <Layout />
            <main className="contact-container">
                <section className="contact-hero">
                    <h1>Get In Touch</h1>
                    <p>I'd love to hear about your project and discuss how we can work together</p>
                </section>

                <section className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <h2>Let's Connect</h2>
                            <p>
                                Whether you have a graphics project in mind, want to collaborate on rendering techniques, or just want to discuss computer graphics,
                                I'm always excited to connect with fellow developers and studios working on visual experiences.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="contact-icon">📧</div>
                                    <div className="contact-details">
                                        <h3>Email</h3>
                                        <a href="mailto:carlos.matecki@example.com">carlos.matecki@example.com</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-icon">📱</div>
                                    <div className="contact-details">
                                        <h3>Phone</h3>
                                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-details">
                                        <h3>Location</h3>
                                        <span>Toronto, Canada</span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-media">
                                <h3>Find Me Online</h3>
                                <div className="social-links">
                                    <a href="https://github.com/carcodee" target="_blank" rel="noopener noreferrer" className="social-link">
                                        GitHub
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                        LinkedIn
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                        Twitter
                                    </a>
                                    <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="social-link">
                                        Dev.to
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Send me a message</h2>

                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Project inquiry, collaboration, etc."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project, ideas, or questions..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </section>

                <section className="availability-section">
                    <div className="availability-card">
                        <h2>Current Availability</h2>
                        <div className="availability-status">
                            <span className="status-indicator available"></span>
                            <span>Available for new projects</span>
                        </div>
                        <p>
                            I'm currently accepting new graphics programming projects and collaborations.
                            Typical response time is within 24 hours.
                        </p>
                        <div className="availability-details">
                            <div className="detail-item">
                                <strong>Response Time:</strong>
                                <span>Within 24 hours</span>
                            </div>
                            <div className="detail-item">
                                <strong>Project Start:</strong>
                                <span>2-3 weeks</span>
                            </div>
                            <div className="detail-item">
                                <strong>Time Zone:</strong>
                                <span>EST (UTC-5)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}