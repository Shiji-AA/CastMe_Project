import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Text from "../../assets/Text.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t border-black">
      <footer className="bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">

            <div className="mb-6 md:mt-4 ml-2 w-1/2">
              <Link to="" className="flex items-center">
                <img src={Text} className="h-14 mr-3" alt="CastMe" />
              </Link>
            </div>

            <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 w-1/2">
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Column One
                </h2>
                <ul className="text-gray-900 dark:text-gray-600 font-small">
                  <li className="mb-1">
                    <p>Link One</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Two</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Three</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Four</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Five</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Column Two
                </h2>
                <ul className="text-gray-900 dark:text-gray-600 font-small">
                  <li className="mb-1">
                    <p>Link Six</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Seven</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Eight</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Nine</p>
                  </li>
                  <li className="mb-1">
                    <p>Link Ten</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Follow Us
                </h2>
                <ul className="text-gray-900 dark:text-gray-400 font-sm">

                  <li className="mb-1 flex items-center space-x-2">
                    <div className="w-5 h-7 flex items-center justify-center ">
                      <FontAwesomeIcon icon={faFacebook} size="md" />
                    </div>
                    <p className="ml-2">Facebook</p>
                  </li>

                  <li className="mb-1 flex items-center space-x-2">
                    <div className="w-5 h-7 flex items-center justify-center ">
                  <FontAwesomeIcon icon={faInstagram} size="md"/>
                    </div>
                    <p className="ml-2">Instagram</p>
                  </li>

                  <li className="mb-1 flex items-center space-x-2">
                    <div className="w-5 h-7 flex items-center justify-center ">
                      <FontAwesomeIcon icon={faXTwitter} size="md" />                      
                    </div>
                    <p className="ml-2">X</p>
                  </li>

                  <li className="mb-1 flex items-center space-x-2">
                    <div className="w-5 h-7 flex items-center justify-center ">
                      <FontAwesomeIcon icon={faLinkedin} size="md" />
                    </div>
                    <p className="ml-2">LinkedIn</p>
                  </li>
                  <li className="mb-1 flex items-center space-x-2">
                    <div className="w-5 h-7 flex items-center justify-center ">
                      <FontAwesomeIcon icon={faYoutube} size="md" />
                    </div>
                    <p className="ml-2">YouTube</p>
                  </li>
                </ul>
              </div>
            </div>


          </div>
          <br />
          <br />
          <br />
          <div className="sm:flex sm:items-center sm:justify-between border-t border-black pt-6">
            <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="">
                INFOLITZ
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="underline text-gray-700 hover:text-gray-900">
                <p>Privacy Policy</p>
              </a>
              <a href="#" className="underline text-gray-700 hover:text-gray-900">
                <p>Terms of Service</p>
              </a>
              <a href="#" className="underline text-gray-700 hover:text-gray-900">
                <p>Cookies Settings</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
