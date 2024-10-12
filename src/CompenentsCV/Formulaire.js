import React from "react";
import {Link, useNavigate} from "react-router-dom";

import { useState } from "react";
const Formulaire=()=>{
    const [image,setimage]=useState(null)
    const languageOptions = ["English", "French", "Spanish", "German", "Chinese", "Arabic"];
    const [languages, setLanguages] = useState([]);
    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        if (!languages.includes(selectedLanguage) && selectedLanguage!="") {
          setLanguages([...languages, selectedLanguage]);
        }
      };
    const [formData, setFormData] = useState({
        name: "",
        prenom: "",
        phone: "",
        adresse: "",
        email: "",
        profilProfessionnel: "",
      });
    const [Experiencetable,setExperiencetable]= useState([])
    const [Experience,setExperience]= useState(
        {titre:"",entreprise:"",dated:"",datef:"",DescriptionTaches:""}
    )
    const handleChange=(e)=>{
           setFormData({...formData,[e.target.name]:e.target.value})
      }
    const handleChangeEx=(e)=>{
           setExperience({...Experience,[e.target.name]:e.target.value})
     }
    const addExperience = ()=>{
        setExperiencetable([...Experiencetable,Experience])
        setExperience({titre:"",entreprise:"",dated:"",datef:"",DescriptionTaches:""})
     }

    const [Formationtable,setFormationtable]=useState([])
    const [Formation,setFormation]= useState(
        {diplome:"",ecole:"",annee:""}
    )
    const handleChangeFr=(e)=>{
        setFormation({...Formation,[e.target.name]:e.target.value})
  }
    const addFormatiom = ()=>{
     setFormationtable([...Formationtable,Formation])
     setFormation({diplome:"",ecole:"",annee:""})
     console.log(Formationtable)
  }
    const [competences,setcompetences]=useState("")
    const handleCompetence=(e)=>{
        setcompetences(e.target.value)
    }
    const handleImage=(e)=>{
      const imageselected=e.target.files[0]
      if(imageselected){
       setimage(URL.createObjectURL(imageselected))
      }
   }
    const nav=useNavigate();
    const FilePdf=()=>{
    nav("/pdf",{state:{langue:languages,experience:Experiencetable,form:formData,formation:Formationtable,competences:competences,image:image}})
}
    return(
        <div className="container">
            <img src="https://th.bing.com/th/id/OIP.FNbkey3JKR2IgvVfESIFXAHaFz?rs=1&pid=ImgDetMain"></img>
        <div className="img">
        </div>
       <div className="formulaireCV">
        <h1>Formulaire de Création de CV</h1>
       <div className="info">
       <label>Name</label>
       <input name="name" value={formData.name} onChange={handleChange} type="text"></input>
       <label>Prenom</label>
       <input name="prenom" value={formData.prenom} onChange={handleChange} type="text" ></input>
       <label>Numéro de téléphone</label>
       <input name="phone" value={formData.phone} onChange={handleChange} type="number"></input>
       <label>Adresse</label>
       <textarea name="adresse" value={formData.adresse} onChange={handleChange}></textarea>
       <label>Adresse e-mail</label>
       <input name="email" value={formData.email} onChange={handleChange} type="email" ></input>
       <label><Link className="link" to={"Profilprofessionnel"}>Profil professionnel</Link></label>
       <textarea name="profilProfessionnel" value={formData.profilProfessionnel} onChange={handleChange}></textarea>
       <label><Link className="link" to={"Expérienceprofessionnelle"}>Expérience professionnelle</Link></label>

       <div className="expe">
       <label>Titre du poste</label>
       <input name="titre"type="text" value={Experience.titre} onChange={handleChangeEx}></input>
       <label>Entreprise</label>
       <input name="entreprise"type="text" value={Experience.entreprise} onChange={handleChangeEx}></input>
       <label>Période d'emploi</label>
       <div className="date">
       <input className="i" value={Experience.dated} name="dated"type="date" onChange={handleChangeEx}></input>
       <input className="i" value={Experience.datef} name="datef"type="date" onChange={handleChangeEx}></input>
       </div>
       <label>Description des tâches</label>
       <textarea value={Experience.DescriptionTaches} name="DescriptionTaches"type="text" onChange={handleChangeEx}></textarea>
       <button className="addEx" onClick={addExperience}>Add</button>
       </div>
       
       <label>Formation</label>
       <div className="expe">
       <label>Diplôme</label>
       <input name="diplome"type="text" onChange={handleChangeFr}></input>
       <label>École/Université</label>
       <input name="ecole"type="text" onChange={handleChangeFr}></input>
       <label>Années</label>
       <input className="i" name="annee"type="date" onChange={handleChangeFr}></input>
       <button className="addEx" onClick={addFormatiom}>Add</button>
       </div>
       <label>Compétences</label>
       <textarea onChange={handleCompetence} name="competences" placeholder="bettwen tow competences /"></textarea>
       <label>Langues</label>
          <select className="selection" onChange={handleLanguageChange}>
            <option value="">Select a language</option>
            {languageOptions.map((lang, index) => (
              <option key={index} value={lang}>{lang}</option>
            ))}
          </select>
        <label>Selecte Image</label>
       <input type="file" onChange={handleImage}></input>
       <button onClick={FilePdf} className="btn">PDF</button>
          </div>
        </div>
       </div>
    )
}
export default Formulaire;