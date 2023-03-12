
import Linkedin from '../assets/linkedin.svg'
import Photo from "../assets/photo.jpg";
export const ChallengeInfo = () => {
  return (
    <div className='container xs:container mx-auto relative'>

        <div className="mt-8 py-4 relative">
          <div className="px-4 xs:px-6 relative z-20">
            <h3 className="text-2xl font-bold text-center xs:text-3xl lg:text-4xl">
              Postulant
            </h3>
            <div className="relative  flex flex-col-reverse sm:items-end bg-slate-50 rounded-lg p-6 sm:w-[30rem] sm:p-0 sm:mx-auto dark:bg-slate-800 dark:highlight-white/5 mt-4">
              <blockquote className="mt-6 text-slate-700 dark:text-slate-300 xs:hidden">
                <p className="text-justify">I am a responsible and above all honest person, I love programming because it allows me to enhance my creativity.</p>
              </blockquote>
              <figcaption className="flex items-center space-x-4">
                <img
                  src={Photo}
                  alt=""
                  className="flex-none w-14 h-14 rounded-full  sm:!rounded-bl-[143rem] sm:rounded-br-none sm:w-28 sm:h-full object-cover "
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-300">

                    <a
                      href="https://www.linkedin.com/in/diegoacm/"
                         className="underline flex gap-2 pt-4"
                    >
                      <span className="absolute inset-0"></span>
                      <img src={Linkedin} alt="" />
                      Diego Cayllahua
                    </a>
                  </div>
                  <div className="mt-0.5 ml-7">Develop FullStack</div>
                  <blockquote className="mt-6 sm:mt-0 text-slate-700 dark:text-slate-300 hidden xs:block">
                <p className="text-justify sm:px-6">I am a responsible and above all honest person, I love programming because it allows me to enhance my creativity.</p>
              </blockquote>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
 <div className='relative'>

 <div className="mt-4  relative">
  
          <div className="px-4 xs:px-6 sm:px-20 md:px-32 relative z-20 lg:px-52 xl:px-80 2xl:px-96">
            <h3 className="text-2xl font-bold text-center md:my-6 xs:text-3xl lg:text-4xl">
              About <span className="text-teal-400">Challenge</span>
            </h3>
            <div className="">
              <p className="text-justify mt-2 text-zinc-500">
                A summary of the challengue is create a
                <b className=""> JavaScript</b> and After accepting the above,
                invoke <b>Wordpress (WP)</b> functions to either create a new
                user or update an existing user’s info.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-20 md:px-32 lg:px-52 xl:px-80 2xl:px-96">
          <h3 className="font-bold text-xl mt-2  xs:text-2xl xs:mt-6 lg:text-3xl">Instructions:</h3>
          <ol className="text-slate-700 mt-2  space-y-4 text-justify ">
            <li className="bg-slate-50 rounded-lg p-2 xs:p-4">
              <b>1.</b> Create a JavaScript that takes 3 inputs: - Name - Email
              - English level{" "}
            </li>
            <li className="bg-slate-50 rounded-lg p-2 xs:p-4">
              {" "}
              <b>2.</b> If the user does not exist in WP, create it. Store the
              English level is a custom field previously set up in that WP.
              After creation, an email should be sent to the user with the
              password, and a custom message like: Welcome! Your English level
              is: _____ Access your account here: and use these credentials:
              Username: Password:{" "}
            </li>
            <li className="bg-slate-50 rounded-lg p-2 xs:p-4">
              <b>3.</b> If the user already exists update the English level
              custom field appropriately, and send a message to the student:
              Congratulations! Your English level is: _____ Access your account
              here:
            </li>
          </ol>
        </div>
 </div>
    </div>
  )
}
