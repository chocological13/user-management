import React from "react";
import NavBar from "../../components/NavBar";
import CustomInput from "../../components/CustomInput";

// const onSubmit = async (values, action) => {
//   console.log(values);
//   console.log(action);
//   alert(JSON.stringify(values, null, 2));
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   action.resetForm();
// };

// const Register: React.FC = () => {
//   const { values, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: ""
//     },
//     onSubmit,
//     validationSchema: registerSchema
//   });

//   console.log(errors);

//   return (
//     <div>
//       <NavBar />
//       <div className="grid lg:grid-cols-3">
//         <div></div>
//         <div className="bg-[#E6A4B4] w-11/12 mx-auto rounded-md shadow-md">
//           <p className="text-2xl font-bold my-auto p-5">Page Register</p>
//           <div className="flex-row w-11/12 mx-auto">
//             <form className="max-w-sm" onSubmit={handleSubmit} autoComplete="off">
//               <div className="mb-5">
//                 <label htmlFor="name" className="block mb-1 font-semibold">
//                   Name:
//                 </label>
//                 <input type="text" id="name" className="rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={values.name} onChange={handleChange} />
//               </div>
//               <div className="mb-5">
//                 <label htmlFor="email" className="block mb-1 font-semibold">
//                   E-Mail:
//                 </label>
//                 <input type="email" id="email" className="rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={values.email} onChange={handleChange} />
//               </div>
//               <div className="mb-5">
//                 <label htmlFor="password" className="block mb-1 font-semibold">
//                   Password:
//                 </label>
//                 <div>
//                   <input type="password" id="password" className="input relative rounded-md w-full bg-[#F5EEE6] focus:ring-[#F3D7CA] focus:outline-[#F3D7CA]" value={values.password} onChange={handleChange} />
//                   <a href="" className="absolute">
//                     Show
//                   </a>
//                 </div>
//               </div>
//               <div className="mb-5 flex justify-center">
//                 <button type="submit" className="bg-[#FFF8E3] hover:bg-[#F3D7CA] hover:outline-red-500 text-white font-bold py-2 px-4 rounded text-black">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

const Register: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="grid lg:grid-cols-3">
        <div></div>
        <div className="bg-[#E6A4B4] w-11/12 mx-auto rounded-md shadow-md">
          <p className="text-2xl font-bold my-auto p-5">Page Register</p>
          <div className="flex-row w-11/12 mx-auto">
            <CustomInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
