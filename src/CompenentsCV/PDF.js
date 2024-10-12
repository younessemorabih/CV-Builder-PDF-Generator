import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import './Pdf.css';
import html2pdf from 'html2pdf.js';

const Pdf = () => {
    const location = useLocation();
    const pdfRef = useRef();

    const handleDownloadPDF = () => {
        const element = pdfRef.current;
        html2pdf()
            .from(element)
            .save("CV.pdf");
    };
    const { langue, experience, form, formation, competences, image } = location.state || {};
    

    return (
        <div className="pdf-container">
            <div className="pdf-page" ref={pdfRef}>
                <h1>Curriculum Vitae</h1>
                <div className="image">
                        <h2>Image</h2>
                        <img src={image} alt="Uploaded" style={{width:"200px",height:"200px"}} className="uploaded-image" />
                    </div>
                <div className="personal-info">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Prénom:</strong> {form.prenom}</p>
                    <p><strong>Phone:</strong> {form.phone}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Adresse:</strong> {form.adresse}</p>
                    <p><strong>Profil Professionnel:</strong> {form.profilProfessionnel}</p>
                </div>
                <div className="experience">
                    <h2>Experience Professionnelle</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <p><strong>Titre:</strong> {exp.titre}</p>
                            <p><strong>Entreprise:</strong> {exp.entreprise}</p>
                            <p><strong>Période:</strong> {exp.dated} - {exp.datef}</p>
                            <p><strong>Description:</strong> {exp.DescriptionTaches}</p>
                        </div>
                    ))}
                </div>
                <div className="formation">
                    <h2>Formation</h2>
                    {formation.map((form, index) => (
                        <div key={index} className="formation-item">
                            <p><strong>Diplôme:</strong> {form.diplome}</p>
                            <p><strong>École:</strong> {form.ecole}</p>
                            <p><strong>Année:</strong> {form.annee}</p>
                        </div>
                    ))}
                </div>
                <div className="competences">
                    <h2>Compétences</h2>
                    <p>{competences}</p>
                </div>
                <div className="languages">
                    <h2>Languages</h2>
                    <p>{langue}</p>
                </div>
            </div>
            <button className="download-btn" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}

export default Pdf;

