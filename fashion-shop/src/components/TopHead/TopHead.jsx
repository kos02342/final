const TopHead = ({ title, breadcrumbs = "false" }) => {
  return (
    <>
      <header className="top-head center">
        <div className="top-head__box">
          <h1>{title}</h1>
          {breadcrumbs === "true" ? (
            <nav>
              <ul className="top-head__breadcrumbs">
                <li className="top-head__li">
                  <a className="top-head__link" href="index.html">
                    HOME
                  </a>
                </li>
                <li className="top-head__li">
                  <a className="top-head__link" href="#">
                    MAN
                  </a>
                </li>
                <li className="top-head__li">
                  <a className="top-head__link" href="#">
                    {title}
                  </a>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default TopHead;
