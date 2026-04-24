
import Profile from "./assets/components/profile";

function App() {
    return (
        <div classname="container">
            <Profile
            name ="AudioNest"
            tech ="HTML, Css & JavaScript"
            Description= "A headphone website"
            whatItDoes= "Shows information and products"
            />

            <Profile
            name="Vanlife"
            tech="React"
            Description="A vanlife website"
            whatItDoes="Shows travel content"
            />
            
            <Profile
            name="Portfolio"
            tech="HTML & CSS"
            Description="My personal portfolio"
            whatItDoes="Shows my project"
            />
            
        </div>
    );
    }
 

export default App
