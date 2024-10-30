import { Button } from "./ui/button";

const HeaderSection = () => {
  return (
    <header className="w-full border-b border-gray-200 px-4 sm:px-8 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-xl font-bold text-purple-600">
            POLISHLETTER
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Support Me
          </Button>
          <span className="text-gray-300">|</span>
          <Button
            variant="default"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Creator
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
