import Header from "./Header";

const Layout = props => (
  <div>
    <Header />
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">{props.children}</div>
        </div>
      </div>
    </main>
  </div>
);

export default Layout;
