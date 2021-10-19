import "./about.css"
import Pexel from "../../img/lucas-prado.jpg"
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Pexel} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam voluptate exercitationem, vero pariatur temporibus.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi ipsam accusamus harum repudiandae. Corporis voluptatem saepe repudiandae, debitis expedita ad nostrum dolores animi voluptas.
                </p>

                <div className="a-award">
                    <img src={Award} alt="award winning" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex numquam, delectus deleniti dolore beatae.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
