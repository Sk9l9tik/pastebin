import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';


import birdLogo from '/bird_logo.svg'

interface IFormInput {
  email: string;
  password: string;
  username:string;
}

export function Signup() {
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
        <p className="mt-5 text-2xl text-center text-white">Sign up to Pastebin</p>
      </Link>
      <div className="w-100 border-1 border-[#2E2E2E] bg-[#1F1F1F] p-5 rounded-lg mt-15 max-sm:max-w-10/12">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-1.5">Email:*</p>
          <input    
            className="text-[18px] w-full p-1 pb-2 rounded-sm border-1 border-[#2E2E2E] bg-[#171717] text-white placeholder-gray-400"
            type="email"
            placeholder="email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          <p className="mb-1.5 mt-5">Password:*</p>
          <input
            className="text-[18px] w-full p-1 pb-2 rounded-sm border-1 border-[#2E2E2E] bg-[#171717] text-white placeholder-gray-400"
            type="password"
            placeholder="password"
            {...register("password", { required: "This field is required" })}
          />
          <p className="text-[12px] max-sm:text-[10px] text-gray-300">Password should be least 8 characters and include numbers and symbols.</p>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <p className="mb-1.5 mt-5">Username:*</p>
          <input
            className="text-[18px] w-full p-1 pb-2 rounded-sm border-1 border-[#2E2E2E] bg-[#171717] text-white placeholder-gray-400"
            type="text"
            placeholder="username"
            {...register("username", { required: "This field is required" })}
          />
          <p className="text-[12px] max-sm:text-[10px] text-gray-300">Username may only contains alphabetic characters or underlines or hypehen and cannot begin or end hypehen or underline.</p>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button
            className="w-full h-12 p-2 mt-5 bg-[#fda000] rounded-sm text-xl text-white hover:bg-[#EDA200] transition-colors"
            type="submit">
            Sign up
          </button>
        </form>
      </div>

      {/* Div с border под формой */}
      <div className="w-100 h-fit rounded-sm border border-[#444444] mt-5 flex justify-center max-sm:max-w-10/12">
        <Link to='/login' className="pt-5 pb-5 text-blue-400">Already have an accout??</Link>
      </div>
    </div>
  );
}