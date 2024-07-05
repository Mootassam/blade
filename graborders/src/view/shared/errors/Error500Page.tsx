import { i18n } from "../../../i18n";
import { Link } from "react-router-dom";

function Error403Page() {
  return (
    <div className="app__error">
      <div
        className="img404"
        style={{
          backgroundImage: `url(/icons/500.svg)`,
        }}
      />

      <div className="error__content">
        <h1>ERROR 500 Page</h1>
        <div className="desc">{i18n("errors.500")}</div>
        <Link to="/">
          <button className="btn btn-primary" type="button">
            {i18n("errors.backToHome")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error403Page;
