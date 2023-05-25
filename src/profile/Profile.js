import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({fullName, bio, profession, handleName }) =>{
  return (
    <div>
      <span className='premier'>fullname     :{fullName}</span><br/>
      <span className='deuxieme'>bio         :{bio}</span><br/>
      <span className='troisieme'>profession :{profession}.</span><br/>
      <button onClick={( handleName)}> cliquer ici</button>
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
