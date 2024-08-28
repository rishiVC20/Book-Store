import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center bg-slate-200 text-black  dark:bg-slate-900 dark:text-white">
          <div className="border-[2px] shadow-md p-5 rounded-md border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              {/* Email */}
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-slate-200 text-black  dark:bg-slate-900 dark:text-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-slate-200 text-black  dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-slate-200  dark:bg-slate-900 dark:text-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 mt-4 duration-200">
                  Signup
                </button>
                <p className="mt-4">
                  Have account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login></Login>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
