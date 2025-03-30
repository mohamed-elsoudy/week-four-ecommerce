function Bullets() {
    return (
    <ul className="bullets d-flex gap-3 justify-content-center">
        <li className="d-flex justify-content-center align-items-center"><div className="bullet"></div></li>
        <li className="d-flex justify-content-center align-items-center"><div className="bullet active"></div></li>
        <li className="d-flex justify-content-center align-items-center"><div className="bullet"></div></li>
        <li className="d-flex justify-content-center align-items-center"><div className="bullet"></div></li>
    </ul>
    );
}

export default Bullets;