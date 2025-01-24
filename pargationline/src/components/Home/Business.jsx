import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

function Business({ business }) {
  const { businessTitle, businessPara ,businessUrl } = business;
  return (
    <>
      <div className="app-overview-widget-container__collapsible-container__item mb-3">
        <div>
          <Link to={businessUrl} className="businessTitle-warpper d-flex justify-content-between align-items-center pe-3">
            <h5 className="businessTitleColor">{businessTitle}</h5>
            <h5 className="businessTitleColor">
              <IoIosArrowForward />
            </h5>
          </Link>
        </div>
        <p>{businessPara}</p>
        <span className="content-bar"></span>
      </div>
    </>
  );
}

export default Business;
