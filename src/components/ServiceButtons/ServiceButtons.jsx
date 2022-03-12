import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/logos/google.png';
import { auth, googleProvider } from '../../firebase/firebaseConfig';
import { setUserAction, setViewAction } from '../../redux/actions/actionCreators';
import './ServiceButtons.css';

const ServiceButtons = () => {
  const navigate = useNavigate();
  const services = [googleIcon];
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider)
      dispatch(setViewAction('movies'))
      dispatch(setUserAction({ email: response.user.email }))
      navigate('/movies')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="ServiceButtons-containers">
      {services.map((service) => (
        <figure onClick={handleLoginGoogle}
          className={`ServiceButtons-element ${service === googleIcon ? 'googleIcon' : null
            }`}
          key={service}
        >
          <img src={service} alt={`${service} logo`} />
        </figure>
      ))}
    </div>
  );
};

export { ServiceButtons };
