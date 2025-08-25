// IMPORTS
import React from 'react'
import styles from './HeaderStyles.module.css';
import { useTheme } from '../../common/ThemeContext.jsx';

import { HeadShot, FaGithub, MdNightlight, IoIosSunny, FaLinkedin, IoMail, Resume } from '../../assets/index.js';

function Header() {
    // Theme Switch
    const { theme, toggleTheme } = useTheme();

    // Define icon colors based on the theme
    const iconColor = theme === 'light' ? '#000' : '#fff';

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    src={HeadShot}
                    className={styles.hero}
                    alt='Profile Headshot Mouhamed Mbengue'
                />
                {/** THEME ICON */}
                {theme === 'light' ? (
                    <IoIosSunny
                        className={styles.colorMode}
                        color={iconColor}
                        size={43}
                        onClick={toggleTheme}
                    />
                ) : (
                    <MdNightlight
                        className={styles.colorMode}
                        color={iconColor}
                        size={43}
                        onClick={toggleTheme}
                    />
                )}
            </div>
            <div className={styles.info}>
                <h1>
                    Mouhamed
                    <br />
                    Mbengue
                </h1>
                <h2>CS Student</h2>
                <span>
                    <a href='https://github.com/mbengue1' target='_blank'>
                        {/** GitHub ICON */}
                        <FaGithub className={styles.icon} color={iconColor} size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/mmbengue0/' target='_blank'>
                        {/** LinkedIn ICON */}
                        <FaLinkedin className={styles.icon} color={iconColor} size={24} />
                    </a>
                    <a href='mailto:mouhamed23mbengue@gmail.com' target='_blank'>
                        {/** Contact ICON */}
                        <IoMail className={styles.icon} color={iconColor} size={24} />
                    </a>
                </span>
                <p className={styles.description}>
                    A motivated and versatile computer science student willing to contribute beyond the classroom, with a strong
                    foundation in Mathematics, logic, and coding.
                </p>
                {/**RESUME BUTTOn */}
                <a href={Resume} target='_blank'>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Header;
