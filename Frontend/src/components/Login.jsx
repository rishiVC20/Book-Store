import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
// import close
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // data.preventDefault();
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Programmatically close the dialog
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-slate-200  dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-200 text-black"
            >
              ✕
            </Link>

            {/* Email */}
            <h3 className="font-bold text-lg text-black text:bold dark:text-white">
              Login
            </h3>
            <div className="mt-4 space-y-2 text-black dark:text-white">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-slate-200 text-black  dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              {/* {errors.email && <span>This field is required</span>} */}
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2 text-black dark:text-white">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-slate-200 text-black  dark:bg-slate-900 dark:text-white"
                {...register("password", {
                  required: true,
                })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 mt-4 duration-200 "
              >
                Login
              </button>
              <p className="mt-4">
                Not Registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
