import { Navbar } from "./components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { AppRouter } from "./routers/AppRouter";
import { useEffect, useState } from "react";
import HashLoader  from "react-spinners/HashLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const chooseLoading = (loading) => {
    setLoading(loading);
  };
  let navigate = useNavigate();
  const location = useLocation();
  const [textButton, settextButton] = useState("Show Solution");

  const handleSolution = () => {
    if (location.pathname != "/") {
      navigate("/", false);
      settextButton("Show Solution");
      return;
    }
    settextButton("Home");
    navigate("/solution", false);
  };

  useEffect(() => {
    if (location.pathname != "/") {
      settextButton("Home");
    } else {
      settextButton("Show Solution");
    }
  }, []);

  return (
    <>
     

     {loading && (
      <div className="fixed w-screen flex justify-center items-center h-screen z-[100]  top-0">
      <div className="flex justify-center flex-col opacity-100">
      <HashLoader className="z-50" size={80}  color="#2cef7a" loading={loading}/>
       <span className="text-white font-semibold mt-2 text-xl z-[110]">Loading...</span>
      </div>
      <div className="absolute w-full h-full opacity-50 bg-black "></div>
 
      </div>
     )

     }
    
      <div className="relative">
        <div className="bg-pattern1 bg-center w-full h-full opacity-5 bg-contain absolute "></div>
        <Navbar></Navbar>

        <div className="xl:container mx-auto mt-2 flex justify-center px-4 relative z-40">
          <div className="mx-40 xs:mx-14  sm:mx-10 flex items-center justify-center my-auto flex-col">
            <div className="mx-auto text-center ">
              <h1 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] lg:text-[6rem] font-bold mb-0">
                <span className="text-[4rem] xs:text-[5rem] sm:text-[6rem] lg:text-[7rem]">
                  C
                </span>
                anaway{" "}
              </h1>
              <h1 className="text-[3.5rem] xs:text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-bold mb-0 -mt-9 xs:-mt-12 sm:-mt-14 lg:-mt-20 xl:-mt-20">
                <span className="text-[4.5rem] xs:text-[5.5rem] sm:text-[6rem] lg:text-[9rem]">
                  A
                </span>
                cademy
              </h1>
            </div>
            <p className="text-zinc-500 text-center text-lg md:px-24 lg:px-52 xl:px-80 ">
              This is a <b className="text-teal-400">challenge</b> that is part
              of the selection process. In which, the evaluator is{" "}
              <b className="text-teal-400">Mr. Thiago Domingues.</b>{" "}
            </p>

            <button
              onClick={handleSolution}
              className="bg-black text-white rounded-md px-4 py-2 mt-4 font-medium lg:px-20 lg:py-3"
            >
              {textButton}
            </button>
          </div>
        </div>
        <AppRouter loading={chooseLoading} />

        <div className="mt-4">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
