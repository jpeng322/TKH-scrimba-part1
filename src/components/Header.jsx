const Header = () => {
    return (
        <>
            <div>
                <img src="../images/avataaars.png"
                    alt="" /></div>
            <header>
                <h2 className='name'>Jacky Peng</h2>
                <p>Frontend Developer</p>
                <p>jackypeng.website</p>
            </header>
            <div className='buttons'>
                <button className='email'>Email</button>
                <button className='linkedin'>Linkedin</button>
            </div>
        </>
    );
}

export default Header;