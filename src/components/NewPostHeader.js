// function revealForm() {
//   var x = document.getElementById("postForm");
//   x.classList.toggle("hidden");
// }

const NewPostHeader = (props) => {

  return (
    <div className="flex flex-col">
      <div className="p-3 flex flex-row justify-between">
        <h1 className="text-lg font-bold">New Posts</h1>

        {/* <button className="">
          <svg
            className="w-8 h-8"
            fill="#DC2626"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default NewPostHeader;
