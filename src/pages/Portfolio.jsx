import Profile from "../assets/components/profile";
import palm from "../assets/palm.jpeg";
import { useState } from "react";

function Portfolio(){
    const [showProjects, setshowProjects]=
    useState(false);

    return (
        <div>
            <button onClick={()=>
            setshowProjects(!showProjects)}>
                Preview projects
                </button> 
                

                {showProjects &&(
                    <div className="projects">
                        <Profile
                        name="AudioNest"
                        screenshot={palm}
                        github={"#"}
                        tech="HTML, CSS & JS"
                        writeUp=""
                        whatItDoes="Shows my projects"
                        learned="Structur"
                        role="Frontend developer"
                        challenges="Layout"
                        />

                        <Profile
                        name="Vanlife Website"
                        screenshot={palm}
                        github={"#"}
                        tech="React"
                        writeUp="Vanlife page"
                        whatItDoes="Shows vanlife content"
                        learned="Components"
                        role="Frontend developer"
                        challenges="Styling"
                        />

                        <Profile
                        name="Portfolio website"
                        screenshot={palm}
                        github={"#"}
                        tech="React"
                        writeUp="My personal portfolio"
                        whatItDoes="Shows my work and projects"
                        learned="useState & props"
                        role="Frontend developer"
                        challenges="React structure"
                        />




                    </div>
                )}
                </div>
                
            
           
    );
}
export default Portfolio