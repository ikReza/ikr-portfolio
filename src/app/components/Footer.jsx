const Footer = () => {
  return (
    <footer className="mt-auto bg-[whitesmoke] text-center border-t-2 border-black font-medium text-gray-500 py-8">
      <span>{new Date().getFullYear()}</span> © All Rights Reserved
    </footer>
  );
};

export default Footer;
