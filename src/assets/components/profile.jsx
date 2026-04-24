import "./profile.css"
function Profile({
  name,
  screenshot,
  github,
  tech,
  writeUp,
  whatItDoes,
  learned,
  role,
  challenges
  }) {
 return(
    <div className="card">
      <h2>{name}</h2>

      <img src ={screenshot} 
      alt={name}/>

      <p><strong> Github:</strong>
      <a href={github}
      target="_blank">View repo</a></p>

      <p><strong>Tech used:</strong> {tech}</p>

      <p><strong>Description:</strong>{writeUp}</p>
      <p><strong>What it does:</strong>{whatItDoes}</p>
      <p><strong>What you learned:</strong>{learned}</p>
      <p><strong>Your role:</strong> {role}</p>
      <p><strong>Challenges:</strong> {challenges}</p>

        
      
    </div>
    
  )
  }

export default Profile;