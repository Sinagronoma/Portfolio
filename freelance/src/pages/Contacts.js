const Contacts = () => {
  return ( 
  <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kharkiv,Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram </h2>
                        <p><a href="tel:+0999817235">+380999817235</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:dmitriy1998@ukr.net">dmitriy1998@ukr.net</a></p>
                    </li>
                </ul>

        </div>
    </main> );
}
 
export default Contacts;