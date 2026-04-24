
import Profile from "./assets/components/profile";
import palm from "./assets/palm.jpeg"
function App() {
    return (
        <div className="container">
            <Profile
            name ="AudioNest"
            screenshot={palm}
            github="https://github.com/Elin608/group-project--headphones.git"
            tech ="HTML, Css & JavaScript"
            Description= "A headphone website"
            whatItDoes= "Shows information and products"
            lerned="Learned React basics"
            role="Frontend developer"
            challenges="Understanding props"
            />

            <Profile
            name="Vanlife"
            screenshot={palm}
            github="https://github.com/Elin608/Bootstrap.git "
            tech="React"
            Description="A vanlife website"
            whatItDoes="Shows travel content"
            lerned="Learned components"
            role="Designer and developer"
            challenges="Styling"
            />
            
            <Profile
            name="Portfolio"
            screenshot={palm}
            tech="HTML & CSS"
            Description="My personal portfolio"
            whatItDoes="Shows my project"
            lerned=""
            role="Frontend developer"
            challenges=""
            />
            
        </div>
    );
    }
 

export default App
