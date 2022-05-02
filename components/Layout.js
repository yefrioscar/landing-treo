const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto">
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
