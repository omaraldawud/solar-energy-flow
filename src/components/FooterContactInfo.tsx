import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Clock, Phone, Mail } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_PHONE, COMPANY_HOURS } from '../constants';


const FooterContactInfo = () => {
  return (
    <div className="space-y-4 text-[#BCBA63]">
      {/* Business Hours */}
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5" aria-hidden="true" />
        <span style={{ margin: '20px 0 40px 15px' }}>
          {COMPANY_HOURS}
        </span>
      </div>

      {/* Call Us */}
      <div className="flex items-center space-x-2">
        <Phone className="w-5 h-5" aria-hidden="true" />
        <span style={{ marginLeft: '15px' }}>
        <a href="tel:+13344222211" className="text-white text-decoration-none">
          {COMPANY_PHONE} {/*defined in constants.tsx*/}
        </a>
        </span>
      </div>

      {/* Email Us */}
    <div className="flex items-center space-x-2 my-8">
        <Mail className="w-5 h-5" aria-hidden="true" />
        <span style={{ marginLeft: '15px'  }}>
            <a className="text-white text-decoration-none" href="mailto:info@pnwirrigation.com">
                {COMPANY_EMAIL}
            </a>
        </span>
    </div>
    <div className="flex space-x-4 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FaFacebookF className="w-6 h-6 text-[#1877F2]" aria-hidden="true" />
        </a>
        <a style={{ marginLeft: '30px' }}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FaInstagram className="w-6 h-6 text-[#E4405F]" aria-hidden="true" />
        </a>
        <a style={{ marginLeft: '30px' }}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FaTwitter className="w-6 h-6 text-[#1DA1F2]" aria-hidden="true" />
        </a>
      </div>

    <div className="flex items-center space-x-2 my-8" style={{ margin: '40px 0', color: '#BCBA63' }}>
        <p className="text-sm  mb-2">
          Follow {COMPANY_NAME} on social media for the latest updates, gardening tips, and exclusive offers.
        </p>
    </div>
    </div>
  );
};

export default FooterContactInfo;
