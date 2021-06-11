import React from 'react';


class Footer extends React.Component {

    render() {

        let github = 'https://open-uri.s3.us-west-1.amazonaws.com/others/GitHub-Mark.png'
        let linkedin= 'https://open-uri.s3.us-west-1.amazonaws.com/others/LinkedIn_UI-03-512.png'
        return (
            <footer className='footer' >
                <div className="footer-component-block">
                    <div className="footer-component">
                        <div className="footer-column">
                            <h3 className="footer-header">Skills</h3>
                            <ul className="footer-list">
                                <p>JavaScript</p>
                                <p>Ruby on Rails</p>
                                <p>React</p>
                                <p>Heroku</p>
                                <p>Github</p>
                                <p>HTML/CSS</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">Hobbies</h3>
                            <ul className="footer-list">
                                <p>Gaming</p>
                                <p>Scale modeling</p>
                                <p>Read manga</p>
                                <p>Photography</p>
                                <p>Eating</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">About</h3>
                            <ul className="footer-list">
                                <p>Shopsy.</p>
                                <p>Policies</p>
                                <p>Investors</p>
                                <p>Careers</p>
                                <p>Press</p>
                                <p>Impact</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-header">about me</h3>
                            <ul className="footer-list">
                                <p><a href={"https://www.linkedin.com/in/alfredo-alejandro-ramirez-mendez-7aa552129/"}><img className="footer-logo" src={linkedin} /></a>LinkedIn</p>
                                <p><a href={"https://github.com/alfredorz6"}><img className="footer-logo" src={github}  /></a>GitHub</p>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="country-currency">
                            <p>United States   </p>
                            <p> |</p>
                            <p>   English (US) </p>
                            <p> |</p>
                            <p>   $ (USD) </p>
                        </div>
                        <div className="terms-of-use">
                            <p><a href={"https://github.com/alfredorz6"}><img className="footer-logo"src={github}  /></a></p>
                            <p><a href={"https://www.linkedin.com/in/alfredo-alejandro-ramirez-mendez-7aa552129/"}><img className="footer-logo" src={linkedin} /></a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer