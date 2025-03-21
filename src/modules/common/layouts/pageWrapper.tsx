import PageWrapperProps from "../types/pageTypes";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";

const PageWrapper: React.FC<PageWrapperProps> = ({ children, config }) => {
  return (
    <>
      <Navbar
        navItems={config.navbar.navItems}
        navButtons={config.navbar.navButtons}
      />
      <Banner
        content={config.banner.content}
        imgSrc={config.banner.imgSrc}
        isReverse={config.banner.isReverse}
      />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
