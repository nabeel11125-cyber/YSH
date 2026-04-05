"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

export const Main = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', contact: '', email: '' });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSectionClick = (sectionName) => {
        setActiveSection(activeSection === sectionName ? null : sectionName);
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.contact.trim()) {
            errors.contact = 'Contact number is required';
        } else if (!/^[0-9]{10}$/.test(formData.contact.trim())) {
            errors.contact = 'Enter a valid 10-digit number';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            errors.email = 'Enter a valid email address';
        }
        return errors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setFormSubmitted(true);
            setTimeout(() => {
                setShowModal(false);
                setFormData({ name: '', contact: '', email: '' });
                setFormErrors({});
                setFormSubmitted(false);
            }, 2000);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };
    const styles = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.7;
            }
        }
        
        .premium-heading {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -1.5px;
            background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease;
        }
        
        .premium-subheading {
            font-size: 1.3rem;
            font-weight: 300;
            letter-spacing: 0.5px;
            opacity: 0.95;
            animation: fadeInUp 1s ease 0.2s both;
        }
        
        .premium-btn {
            padding: 14px 40px;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 8px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            font-size: 0.9rem;
        }
        
        .premium-btn-primary {
            background: linear-gradient(135deg, #ff6b35 0%, #f54e26 100%);
            color: white;
            border: none;
            box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
        }
        
        .premium-btn-primary:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(255, 107, 53, 0.6);
            color: white;
        }
        
        .premium-btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
       .premium-btn-secondary:hover {
            background: white;
            color: #667eea;
            transform: translateY(-4px);
        } 
        
        .service-card {
            border: none !important;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: white;
            position: relative;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ff6b35, #667eea);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
        }
        
        .service-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
        }
        
        .service-card:hover::before {
            transform: scaleX(1);
        }
        
        .service-icon {
            font-size: 50px;
            display: inline-block;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon {
            transform: scale(1.15) rotate(5deg);
        }
        
        .service-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #1a1a1a;
        }
        
        .service-text {
            font-size: 0.95rem;
            color: #666;
            line-height: 1.6;
        }
        
        .testimonial-card {
            border: none !important;
            border-radius: 12px;
            padding: 32px !important;
            background: white;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .testimonial-card::before {
            content: '"';
            position: absolute;
            top: -30px;
            left: 20px;
            font-size: 80px;
            color: #ff6b35;
            opacity: 0.1;
        }
        
        .testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1) !important;
            border-left: 4px solid #ff6b35 !important;
        }
        
        .rating-stars {
            color: #ffc107;
            font-size: 1.1rem;
            letter-spacing: 2px;
            margin-bottom: 16px;
        }
        
        .testimonial-text {
            font-size: 1rem;
            line-height: 1.7;
            color: #444;
            font-style: italic;
            margin-bottom: 20px;
        }
        
        .testimonial-author {
            font-weight: 700;
            color: #1a1a1a;
            font-size: 0.95rem;
        }
        
        .stat-item {
            text-align: center;
            padding: 30px;
            transition: all 0.3s ease;
        }
        
        .stat-item:hover {
            transform: scale(1.05);
        }
        
        .stat-number {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }
        
        .stat-label {
            font-size: 1rem;
            color: #666;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
        
        .section-title {
            font-size: 2.8rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            display: inline-block;
            width: 100%;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #ff6b35, #667eea);
            border-radius: 2px;
        }
        
        .hero-emoji {
            font-size: 200px;
            animation: pulse 3s ease-in-out infinite;
            filter: drop-shadow(0 20px 40px rgba(102, 126, 234, 0.3));
        }
        
        .about-heading {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 30px;
            color: #1a1a1a;
        }
        
        .about-text {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 20px;
        }
        
        .about-list {
            list-style: none;
        }
        
        .about-list li {
            font-size: 1.05rem;
            color: #555;
            margin-bottom: 15px;
            padding-left: 30px;
            position: relative;
        }
        
        .about-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #ff6b35;
            font-weight: 800;
            font-size: 1.2rem;
        }
        
        .contact-section {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        
        /* Home Section Yellow & White Hover - Click Activated */
        #home-section.active {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%) !important;
        }
        
        #home-section.active .premium-heading {
            background: linear-gradient(135deg, #1a1a2e 0%, #2d2d4d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        #home-section.active .premium-subheading {
            color: #1a1a2e;
        }
        
        #home-section.active .premium-btn-secondary {
            color: #1a1a2e;
            border-color: #1a1a2e;
        }
        
        /* Service Card Yellow & White - Click Activated */
        .service-card.active {
            background: linear-gradient(135deg, #fffacd 0%, #ffffe0 100%) !important;
            border: 2px solid #ffd700 !important;
            box-shadow: 0 24px 48px rgba(255, 215, 0, 0.3) !important;
        }
        
        .service-card.active .service-icon {
            color: #ffd700;
        }
        
        .service-card.active .service-title {
            color: #ffd700;
        }
        
        .service-card.active .service-text {
            color: #1a1a2e;
        }
        
        /* About Section Yellow & White - Click Activated */
        #about-section.active {
            background: linear-gradient(135deg, #fffacd 0%, #ffffe0 100%);
        }
        
        #about-section.active .about-heading {
            color: #ffd700;
        }
        
        #about-section.active .about-text {
            color: #1a1a2e;
        }
        
        #about-section.active .about-list li {
            color: #1a1a2e;
        }
        
        #about-section.active .about-list li::before {
            color: #ffd700;
        }
        
        /* Testimonial Card Yellow & White - Click Activated */
        .testimonial-card.active {
            background: linear-gradient(135deg, #fffacd 0%, #ffffe0 100%) !important;
            border-left: 4px solid #ffd700 !important;
            box-shadow: 0 16px 40px rgba(255, 215, 0, 0.3) !important;
        }
        
        .testimonial-card.active .rating-stars {
            color: #ffd700;
        }
        
        .testimonial-card.active .testimonial-text {
            color: #1a1a2e;
        }
        
        .testimonial-card.active .testimonial-author {
            color: #ffd700;
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-box {
            background: white;
            border-radius: 20px;
            padding: 40px;
            width: 90%;
            max-width: 480px;
            box-shadow: 0 32px 64px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close {
            position: absolute;
            top: 16px;
            right: 20px;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: #999;
            transition: color 0.2s;
            line-height: 1;
        }

        .modal-close:hover {
            color: #333;
        }

        .modal-title {
            font-size: 1.6rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: #1a1a1a;
        }

        .modal-subtitle {
            font-size: 0.95rem;
            color: #888;
            margin-bottom: 28px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #444;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .form-input {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #e8e8e8;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
            outline: none;
            background: #fafafa;
            box-sizing: border-box;
        }

        .form-input:focus {
            border-color: #667eea;
            background: white;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-input.error {
            border-color: #e53e3e;
            background: #fff5f5;
        }

        .error-text {
            color: #e53e3e;
            font-size: 0.8rem;
            margin-top: 4px;
            font-weight: 500;
        }

        .submit-btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #ff6b35 0%, #f54e26 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.05rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 8px;
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 28px rgba(255, 107, 53, 0.5);
        }

        .success-message {
            text-align: center;
            padding: 30px 0;
        }

        .success-icon {
            font-size: 60px;
            margin-bottom: 16px;
        }

        .success-text {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1a1a1a;
        }

        .success-sub {
            font-size: 0.95rem;
            color: #888;
            margin-top: 6px;
        }

        .enquire-btn {
            display: inline-block;
            margin-top: 18px;
            padding: 10px 24px;
            background: linear-gradient(135deg, #ff6b35 0%, #f54e26 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .enquire-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <Navbar />

            {/* Hero Section */}
            <section id="home-section" className={`py-5 ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleSectionClick('home')} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'all 0.4s ease' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="premium-heading">Buland Sapno ke Saath YSH Solution</h1>
                            <p className="premium-subheading">From registration to investor pitch, we simplify everything for your startup journey.</p>
                            <div className="d-flex gap-3 mt-5">
                                <button className="premium-btn premium-btn-primary">Grow with Us</button>
                                <button className="premium-btn premium-btn-secondary">Watch Introduction</button>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="hero-emoji">📊</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-5" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">Services for Every Stage of Your Startup</h2>
                    <div className="row g-4" style={{ marginTop: '80px' }}>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service1' ? 'active' : ''}`} onClick={() => handleSectionClick('service1')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">🏢</div>
                                    <h5 className="service-title">Business Incorporation</h5>
                                    <p className="service-text">Professional business registration and incorporation services for startups and MSMEs.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service2' ? 'active' : ''}`} onClick={() => handleSectionClick('service2')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">💰</div>
                                    <h5 className="service-title">Seed Funding & Loans</h5>
                                    <p className="service-text">Access to various funding opportunities and loan assistance programs for your business growth.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service3' ? 'active' : ''}`} onClick={() => handleSectionClick('service3')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">📜</div>
                                    <h5 className="service-title">Startup Certification</h5>
                                    <p className="service-text">Get your DPIIT-Recognized Startup India Certification and MSME registration.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service4' ? 'active' : ''}`} onClick={() => handleSectionClick('service4')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">📈</div>
                                    <h5 className="service-title">Business Strategy</h5>
                                    <p className="service-text">Expert guidance on business growth strategy and scaling your operations efficiently.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service5' ? 'active' : ''}`} onClick={() => handleSectionClick('service5')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">📊</div>
                                    <h5 className="service-title">Financial Reporting</h5>
                                    <p className="service-text">Professional financial reporting and accounting services for compliance and analysis.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card service-card h-100 ${activeSection === 'service6' ? 'active' : ''}`} onClick={() => handleSectionClick('service6')} style={{ cursor: 'pointer' }}>
                                <div className="card-body p-5">
                                    <div className="service-icon">🎯</div>
                                    <h5 className="service-title">Pitch Deck Preparation</h5>
                                    <p className="service-text">Create compelling pitch decks to impress investors and secure your funding.</p>
                                    <button className="enquire-btn" onClick={(e) => { e.stopPropagation(); setShowModal(true); }}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about-section" className={`py-5 ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('about')} style={{ cursor: 'pointer', transition: 'all 0.4s ease' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="about-heading">Committed to Your Growth</h2>
                            <p className="about-text">We are an Ahmedabad-based consultancy firm with over 40+ years of combined experience in business consulting, startup guidance, and MSME support.</p>
                            <p className="about-text">From launching startups to scaling established businesses, we serve entrepreneurs at every stage of their journey.</p>
                            <ul className="about-list">
                                <li>Pan-India presence with multiple offices</li>
                                <li>Expert team with proven track record</li>
                                <li>Customer-centric approach</li>
                                <li>4.7★ Google Rating</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div style={{ fontSize: '150px', color: '#667eea', opacity: '0.1' }}>🌟</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-5" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="row g-4" style={{ marginTop: '80px' }}>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card testimonial-card h-100 ${activeSection === 'testimonial1' ? 'active' : ''}`} onClick={() => handleSectionClick('testimonial1')} style={{ cursor: 'pointer' }}>
                                <div className="card-body">
                                    <div className="rating-stars">★★★★★</div>
                                    <p className="testimonial-text">"YSH Solution helped us with our Startup India certification and we were super impressed with their team. Completed in just 2 days!"</p>
                                    <p className="testimonial-author">Shilpi Sengupta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card testimonial-card h-100 ${activeSection === 'testimonial2' ? 'active' : ''}`} onClick={() => handleSectionClick('testimonial2')} style={{ cursor: 'pointer' }}>
                                <div className="card-body">
                                    <div className="rating-stars">★★★★★</div>
                                    <p className="testimonial-text">"We had a fantastic experience working with YSH Solution for our startup's registration and funding needs. Incredibly prompt and efficient."</p>
                                    <p className="testimonial-author">Tirthanjan Banerjee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`card testimonial-card h-100 ${activeSection === 'testimonial3' ? 'active' : ''}`} onClick={() => handleSectionClick('testimonial3')} style={{ cursor: 'pointer' }}>
                                <div className="card-body">
                                    <div className="rating-stars">★★★★★</div>
                                    <p className="testimonial-text">"Their service is incredibly fast and the team is very humble and supportive. The whole process was smooth and professional."</p>
                                    <p className="testimonial-author">Adarsh Singhania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e8ecf5 100%)' }}>
                <div className="container">
                    <h2 className="section-title">Build to Lead</h2>
                    <div className="row text-center" style={{ marginTop: '80px' }}>
                        <div className="col-md-3 mb-4">
                            <div className="stat-item">
                                <h3 className="stat-number">500+</h3>
                                <p className="stat-label">Projects Executed</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="stat-item">
                                <h3 className="stat-number">4.7★</h3>
                                <p className="stat-label">Google Rating</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="stat-item">
                                <h3 className="stat-number">50+</h3>
                                <p className="stat-label">Projects Monthly</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="stat-item">
                                <h3 className="stat-number">Pan-India</h3>
                                <p className="stat-label">Client Base</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 contact-section text-white">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white', marginBottom: '80px' }}>Connect with an Expert</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="mb-4" style={{ fontSize: '1.2rem', fontWeight: '700' }}>Contact Information</h5>
                            <p style={{ fontSize: '1.05rem', marginBottom: '20px', opacity: 0.9 }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#ff6b35' }}>Email:</strong>
                                <a href="mailto:support@ysh-solution.com" style={{ color: 'white', textDecoration: 'none' }}>support@ysh-solution.com</a>
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '20px', opacity: 0.9 }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#ff6b35' }}>Phone:</strong>
                                <a href="tel:+919220768200" style={{ color: 'white', textDecoration: 'none' }}>+91 9220768200</a>
                            </p>
                            <p style={{ fontSize: '1.05rem', marginBottom: '20px', opacity: 0.9 }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#ff6b35' }}>Office Hours:</strong>
                                Monday - Saturday, 9:30 AM - 6:30 PM
                            </p>
                            <p style={{ fontSize: '1.05rem', opacity: 0.9 }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#ff6b35' }}>Headquarters:</strong>
                                Noida
                            </p>
                            <p style={{ fontSize: '1.05rem', opacity: 0.9 }}>
                                <strong style={{ display: 'block', marginBottom: '8px', color: '#ff6b35' }}>Address:</strong>
                                Office No F03 First Floor A-28 Sector 4 Noida
                            </p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5 className="mb-4" style={{ fontSize: '1.2rem', fontWeight: '700' }}>Get in Touch</h5>
                            <button className="premium-btn premium-btn-primary w-100" style={{ padding: '18px 40px', fontSize: '1.05rem' }} onClick={() => setShowModal(true)}>Schedule Consultation</button>
                            <p style={{ marginTop: '30px', opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Our expert team is ready to help you navigate your startup journey. Reach out to us today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setShowModal(false); setFormErrors({}); setFormSubmitted(false); } }}>
                    <div className="modal-box">
                        <button className="modal-close" onClick={() => { setShowModal(false); setFormErrors({}); setFormSubmitted(false); }}>&times;</button>
                        {formSubmitted ? (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <p className="success-text">Thank You!</p>
                                <p className="success-sub">We will contact you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="modal-title">Schedule a Consultation</h3>
                                <p className="modal-subtitle">Fill in your details and our team will reach out to you.</p>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" name="name" className={`form-input ${formErrors.name ? 'error' : ''}`} placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} />
                                        {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Contact Number</label>
                                        <input type="tel" name="contact" className={`form-input ${formErrors.contact ? 'error' : ''}`} placeholder="Enter 10-digit mobile number" value={formData.contact} onChange={handleInputChange} />
                                        {formErrors.contact && <p className="error-text">{formErrors.contact}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email ID</label>
                                        <input type="email" name="email" className={`form-input ${formErrors.email ? 'error' : ''}`} placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} />
                                        {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                                    </div>
                                    <button type="submit" className="submit-btn">Submit</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};