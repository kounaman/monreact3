import React from 'react';
import PropTypes from 'prop-types';
 
const Profile = (props) =>{
  const { fullName, bio, profession } = props; 
     
   const handleName = () => {
         
       alert(`Bonjour,`);   
       }; 
  return (
    <div>
      <span className='premier'>{fullName}</span><br/>
      <span className='deuxieme'> {bio}</span><br/>
      <span className='troisieme'>{profession}.</span><br/>
      <button onClick={() => handleName()}>Cliquez ici pour saluer</button>
    </div> 
  );
} 

Profile.propTypes = {
  fullName: PropTypes.shape({
    link: PropTypes.string,
    fullName: PropTypes.string
  }),
  bio: PropTypes.shape({
    link : PropTypes.string,
    bio : PropTypes.string
  }),
  profession: PropTypes.shape({
    link: PropTypes.string,
    profession: PropTypes.string
  }),
}
export default Profile;  
