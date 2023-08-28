const HomeLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-[whitesmoke] border-2 border-red-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
