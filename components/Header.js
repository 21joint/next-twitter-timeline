import Link from "next/link";
const linkStyle = {
  color: "#FFF",
  fontFamily: "sans-serif",
  textDecoration: "none"
};

const Header = () => (
  <div className="tml-header">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-auto">
          <Link href="/">
            <a style={linkStyle}>
              <h4 className="m-0">next-home-timeline</h4>
            </a>
          </Link>
        </div>
        <div className="col-auto ml-auto">
          <ul className="list-unstyled list-inline m-0 p-0">
            <li className="list-inline-item">
              <Link href="/">
                <a style={linkStyle}>Home Timeline</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
