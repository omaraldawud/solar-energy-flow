import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterSocialInfo = () => {
  return (
    <div className="space-y-4 text-[#BCBA63]">
        <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: '#E3E1A9' }}
            >
              <FaFacebookF className="w-6 h-6 text-[#1877F2]" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ marginLeft: '30px', color: '#E3E1A9' }}
            >
              <FaInstagram className="w-6 h-6 text-[#E4405F]" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ marginLeft: '30px', color: '#E3E1A9' }}
            >
              <FaTwitter className="w-6 h-6 text-[#1DA1F2]" aria-hidden="true" />
            </a>
          </div>
    </div>
  );
};

export default FooterSocialInfo;
