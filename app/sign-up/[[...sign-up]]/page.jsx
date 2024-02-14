import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
  
    <div className='flex flex-center items-center justify-center h-screen max-w-full'>
  <SignUp />;
    </div>
    )

}