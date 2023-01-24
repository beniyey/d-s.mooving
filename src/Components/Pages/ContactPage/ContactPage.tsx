import "./ContactPage.css";

function ContactPage(): JSX.Element {
    return (
        <div className="ContactPage">
            <div className="contact-form">
                <div className="contact-form-content">
                    <form action="">
                        <h2>צרו קשר</h2>
                        <div>
                            <input placeholder="שם מלא" type="text" />
                            <input placeholder="מאיפה ההובלה" type="text" />
                        </div>
                        <div>
                            <input placeholder="טלפון" type="text" />
                            <input placeholder="לאיפה ההובלה" type="text" />
                        </div>
                        <div>
                            <input placeholder="תאריך ההובלה" type="text" />
                            <input placeholder="סוג הובלה" type="text" />
                        </div>
                        <button className="form-send-button">שלח טופס</button>
                    </form>
                </div>
            </div>
            <div className="side-banner-container">
                <div>
                    <span>CONTACT</span>
                    <br />
                    <span>US</span>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
