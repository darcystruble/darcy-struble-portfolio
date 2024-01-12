import darcyPic from '../../assets/darcy.jpg'

export default function About() {
    return (
        <div className="about-outer section section-bg">
            <h2>About me...</h2>
            <div id="about">
                <div className='img-div'>
                    <img src={darcyPic} alt="" />
                </div>
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, soluta explicabo consequuntur modi vitae omnis reiciendis debitis. Quasi minus doloremque odio magni. Ducimus nobis repellendus, recusandae minima sed ut cumque?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quo tempora nisi sunt saepe. Voluptatem soluta, deleniti dolorum quo, aliquid velit architecto unde aut optio nostrum, quos perspiciatis minima. Eveniet.</p>
                </div>
            </div>
        </div>
    )
}