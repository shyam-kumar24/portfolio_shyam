"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";

const controls = [
  { name: "name", placeholder: "Enter your name", type: "text", label: "Name" },
  { name: "email", placeholder: "Enter your email", type: "email", label: "Email" },
  { name: "message", placeholder: "Enter your message", type: "text", label: "Message" },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function handleSendMessage() {
    const res = await addData("contact", formData);
    if (res?.success) {
      setFormData(initialFormData);
      setShowSuccessMessage(true);
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => setShowSuccessMessage(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  const isValidForm = () =>
    formData.name !== "" && formData.email !== "" && formData.message !== "";

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className="py-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                key={index}
                className={index === 1 ? "text-green-500" : "text-black"}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>

      <div className="text-gray-500 relative">
        <div className="container px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem) => (
                <div className="p-2 w-full" key={controlItem.name}>
                  <div className="relative">
                    <label className="text-sm text-black">{controlItem.label}</label>
                    {controlItem.name === "message" ? (
                      <textarea
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [controlItem.name]: e.target.value })
                        }
                        className="w-full border-2 border-green-500 bg-white rounded h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6"
                      ></textarea>
                    ) : (
                      <input
                        id={controlItem.name}
                        name={controlItem.name}
                        type={controlItem.type}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [controlItem.name]: e.target.value })
                        }
                        className="w-full border-2 border-green-500 bg-white rounded text-base outline-none text-black py-1 px-3 leading-6"
                      />
                    )}
                  </div>
                </div>
              ))}

              {showSuccessMessage && (
                <p className="text-sm font-bold my-2 text-green-600">
                  Your message is successfully delivered!
                </p>
              )}

              <div className="p-2 w-full">
                <button
                  disabled={!isValidForm()}
                  onClick={handleSendMessage}
                  className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg text-2xl tracking-widest bg-green-500 outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
