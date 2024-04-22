import { useForm, ValidationError } from "@formspree/react";
import { ArrowCounterClockwise, X } from "phosphor-react";
import Footer from "../../components/footer/Footer";

function FooterForm({ setContactActive }) {
  const [state, handleSubmit] = useForm("xvojzoly");

  return (
    <>
      <div className=" mb-[60px] px-6 pt-10 text-center lg:pt-0">
        {/* {state.succeeded ? (
          <div>
          {`Success! We've received your message and will be in touch shortly`}
          </div>
        ) : (
            <div className="flex justify-center">
            <div className="text-center  ">
            <p className="mb-3 px-3 text-[1.1rem] font-semibold lg:px-0">
            {"header"}
            </p>
            <p>{"subText"}</p>
            </div>
            </div>
        )} */}
        <form
          onSubmit={handleSubmit}
          className={`${
            state.succeeded ? "pt-1" : ""
          } relative flex flex-col items-center pt-7`}
        >
          <div
            onClick={() => setContactActive(false)}
            className="fixed right-8 top-28 w-[23px] cursor-pointer bg-white text-black lg:right-40 lg:top-32"
          >
            <X size={23} />
          </div>

          {state.succeeded || (
            <div className="">
              <div className=" mb-3 flex flex-col items-center">
                <label htmlFor="firstnName">{"firstName"}</label>
                <input
                  id="firstName"
                  type="firstName"
                  name="firstName"
                  className="w-72 border-b border-b-black pb-2 pt-2 text-center text-sm text-black outline-none"
                />
              </div>
              <div className="mb-3 flex flex-col items-center">
                <label htmlFor="lastName">{"lastName"}</label>
                <input
                  id="lastName"
                  type="lastName"
                  name="lastName"
                  className="w-72 border-b border-b-black pb-2 pt-2 text-center text-sm text-black outline-none"
                />
              </div>
              <div className="mb-3 flex flex-col items-center">
                <label htmlFor="email">{"email"}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-72 border-b border-b-black pb-2 pt-2 text-center text-sm text-black outline-none"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="">
                  {"message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-28 w-72 border-b border-b-black pb-2 pt-2 text-center text-sm text-black outline-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-center">
            <button
              aria-label="Button"
              type="submit"
              disabled={state.submitting}
              className={`${
                state.succeeded ? "bg-gray-900" : ""
              } sm:hover:bg-gymrosedark mt-6  bg-orange-200 px-20 py-3 text-white duration-500`}
            >
              {state.succeeded ? <ArrowCounterClockwise size={20} /> : "Send"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FooterForm;
