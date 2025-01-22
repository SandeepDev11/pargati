import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

function Wealth({ wealth }) {
  const { wealthUrl, wealthTitle, wealthClass } = wealth;
  return (
    <>
      <Link to={wealthUrl} className={wealthClass}>
        <h2>{wealthTitle}</h2>
        <div>
          <span className="arrow-el">→</span>
        </div>
      </Link>
    </>
  );
}

export default Wealth;
