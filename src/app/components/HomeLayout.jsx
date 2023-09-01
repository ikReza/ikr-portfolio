const HomeLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[whitesmoke] p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
