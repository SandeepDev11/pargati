function Secure({ secure }) {
  const { secureTitle, securePara, sercureTitleColor } = secure;
  return (
    <>
      <div className="app-overview-widget-container__collapsible-container__item mb-3">
        <div>
          <h5 className={sercureTitleColor}>{secureTitle}</h5>
        </div>
        <p>{securePara}</p>
        <span className="content-bar"></span>
      </div>
    </>
  );
}

export default Secure;
