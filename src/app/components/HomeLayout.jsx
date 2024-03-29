const HomeLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[whitesmoke] p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
