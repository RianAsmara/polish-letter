const FooterSection = () => {
  return (
    <footer className="w-full border-t border-gray-200 px-4 sm:px-8 py-4">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PolishLetter. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;