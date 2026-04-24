import profilePic from "../palm.jpeg";
function Profile(){
 return(
    <>
    <h1>AudioNest</h1>
    <p><strong>Tech</strong> HTML, CSS, JavaScript </p>
    <p><strong>Description</strong> A headphone website</p>
    <p><strong>What it does</strong> Shows products and informations</p>
    <img src={profilePic} alt="project image" />
    </>
  )
  }

export default Profile