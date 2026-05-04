import Profile from "../assets/components/profile";
import palm from "../assets/palm.jpeg";
import { useState } from "react";

function Portfolio(){
    const [showProjects, 
        setShowProjects]=
    useState(false);
    const[search, setSearch]=
    useState(""); 

     
    const projects =[
        { name:"AudioNest",
                        screenshot:palm,
                        github:"#",
                        tech:"HTML, CSS & JS",
                        writeUp:"",
                        whatItDoes:"Shows my projects",
                        learned:"Structur",
                        role:"Frontend developer",
                        challenges:"Layout",
                        },

                       {
                        name:"Vanlife Website",
                        screenshot:palm,
                        github:"#",
                        tech:"React",
                        writeUp:"Vanlife page",
                        whatItDoes:"Shows vanlife content",
                        learned:"Components",
                        role:"Frontend developer",
                        challenges:"Styling",
                        },

                        {
                            name:"Portfolio website",
                        screenshot:palm,
                        github:"#",
                        tech:"React",
                        writeUp:"My personal portfolio",
                        whatItDoes:"Shows my work and projects",
                        learned:"useState & props",
                        role:"Frontend developer",
                        challenges:"React structure",

                        }


    ];

    return (
        <div>
            <input
            type="text"
            placeholder="Search projects"
            value={search}
            onChange={(e)=>
                setSearch(e.target.value)}
            />
            <button onClick={()=>
            setShowProjects(!showProjects)}>
                {showProjects ? "Hide projects" : "Preview projects "}
                
                </button> 

       <div className="projects-container">         
    {showProjects &&
    
                
     projects.
     filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((project,index) =>(
        <Profile
        key={index}
        name={project.name}
        screenshot={project.screenshot}
        github={project.github}
        tech={project.tech}
        writeUp={project.writeUp}
        whatItDoes={project.whatItDoes}
        learned={project.learned}
        role={project.role}
        challenges={project.challenges}
        />
    ))
    }
    </div>
    </div>
    );
    }
                
    export default Portfolio;        
           

