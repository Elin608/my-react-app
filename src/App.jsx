
import Profile from "./assets/components/profile";
import palm from "./assets/palm.jpeg"
function App() {
    return (
        <div className="container">
            <Profile
            name ="AudioNest"
            screenshot={palm}
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
