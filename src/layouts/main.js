import Footer from "../componants/footer";
import Header from "../componants/header";

function Main(props) {
  return (
    <div id="page-top">
      <Header />
      <div style={{ padding: '16px', minHeight: 'calc(100vh - 110px)' }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
