"use client";
import { useState, useEffect } from "react";
import FormInput from "@/components/ui/FormInput";
import Link from "next/link";
import FormButton from "@/components/ui/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { setUser } from "@/components/utils/slices/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const route = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!user) {
      route.push("/login");
    }
  }, [user, route]);
  if (!user) {
    return <h2>Loading...</h2>;
  }
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userUid = user.uid || "No UID";
      const userEmail = user.email || "No Email";
      dispatch(setUser({ uid: userUid, email: userEmail }));
      route.push("/");
      toast.success(`Welcome ${user.email}`);
    } catch (error: any) {
      setError(error.message);
      toast.error("Error trying to log in. Please try again");
    }
  };
  return (
    <section className='login__page h-dvh w-dvw'>
      <div className='wrapper grid place-items-center w-full h-full'>
        <div className='max-w-[500px] text-offWhite max-h-fit bg-gray-800 w-full h-full p-6 rounded-md border border-solid border-offWhite'>
          <h2 className='font-medium text-3xl mb-10'>Login</h2>
          <form onSubmit={handleLogin}>
            <FormInput
              formHtmlFor='email'
              formId='email'
              formInputType='email'
              formIsRequired
              formLabel='Email address'
              formPlaceholder='Email Address'
              formOnChange={(event) => setEmail(event.target.value)}
              formValue={email}
            />
            <FormInput
              formHtmlFor='password'
              formId='password'
              formInputType='password'
              formIsRequired
              formLabel='Password'
              formPlaceholder='Your Password'
              formOnChange={(event) => setPassword(event.target.value)}
              formValue={password}
            />
            <FormButton buttonText='Log in' buttonType='submit' />
            {error && <p>{error}</p>}
          </form>
          <p className='mt-4'>
            Don't have an account?{" "}
            <Link href='/signup' className='underline'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
