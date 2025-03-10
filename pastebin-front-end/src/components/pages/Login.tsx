import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';


import birdLogo from '/bird_logo.svg'

interface IFormInput {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-900">
      {/* Форма */}
      <Link to="/" className="flex items-center flex-col max-sm:max-w-10/12">
        <img className="logo pt-10 w-20 h-20" src={birdLogo} alt='Pastebin logo' />    
        <p className="mt-5 text-2xl text-center text-white">Sign in to Pastebin</p>
      </Link>
      <div className="w-80 border-1 border-[#2E2E2E] bg-[#1F1F1F] p-5 rounded-lg mt-15 max-sm:max-w-10/12">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-0.5">Email address:</p>
          <input    
            className="w-full p-2 h-9 rounded-sm border-1 border-[#2E2E2E] bg-[#171717] text-white placeholder-gray-400"
            type="email"
            placeholder=""
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          <p className="mb-0.5 mt-5">Password:</p>
          <input
            className="w-full p-2 h-9 rounded-sm border-1 border-[#2E2E2E] bg-[#171717] text-white placeholder-gray-400"
            type="password"
            placeholder=""
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button
            className="w-full p-2 mt-5 bg-[#EDA200] rounded-sm text-xl text-white hover:bg-[#fda000] transition-colors"
            type="submit">
            Sign in
          </button>
        </form>
      </div>

      {/* Div с border под формой */}
      <div className="w-80 h-fit rounded-sm border border-[#444444] mt-5 flex justify-center max-sm:max-w-10/12">
        <Link to='/signup' className="pt-5 pb-5 text-blue-400">Create Account</Link>
      </div>
    </div>
  );
}