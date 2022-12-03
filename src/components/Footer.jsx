import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import CV from "../assets/CV-DiegoNGonzalez.pdf";

const Footer = () => {
    return (
        <div className='h-28 md:h-16 bg-pink-600'>
            <div className='flex flex-row items-center justify-center py-2 w-full'>
                <h3 className='sm:text-xl text-white'>
                    ©Copyright{" "}
                    <a
                        href='https://www.linkedin.com/in/diegongonzalez'
                        target='_blank'
                    >
                        DieGonzalez Dev
                    </a>{" "}
                    2022
                </h3>
            </div>
            <div className='md:hidden flex flex-row items-center justify-center w-full mt-2'>
                <ul className='flex justify-between w-[200px]'>
                    <li className=' bg-blue-600 rounded-lg text-white text-center p-1 h-[36px] flex items-center justify-center'>
                        <a href='https://www.linkedin.com/in/diegongonzalez' target='_blank'>
                            <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='bg-[#333333] rounded-lg text-white text-center p-1 h-[36px] flex items-center justify-center'>
                        <a
                            href='https://www.github.com/DiegoNGonzalez' target='_blank'
                            className='w-full flex items-center justify-center'
                        >
                            <FaGithub size={25} />
                        </a>
                    </li>

                    <li className='bg-blue-600 rounded-lg text-white text-center p-1 h-[36px] flex items-center justify-center'>
                        <a href='mailto:diegonzalezdev@gmail.com'>
                            <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='bg-[#333333]  rounded-lg text-white text-center p-1 h-[36px] flex items-center justify-center'>
                        <a href={CV} download='CV-DiegoNGonzalez'>
                            <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
