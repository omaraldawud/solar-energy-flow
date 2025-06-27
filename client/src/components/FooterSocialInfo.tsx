import { SOCIAL_LINKS } from '../data/constants';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import '../assets/css/FooterSocial.css';

const FooterSocialInfo = () => {
  return (
        <div className="flex space-x-4 mt-4">
            <a className="mx-3 social-icon facebook" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF size={32}/>
            </a>
            <a className="mx-3 social-icon facebook" href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={32}/>
            </a>
            <a className="mx-3 social-icon instagram" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={32}/>
            </a>
        </div>
  );
};

export default FooterSocialInfo;
