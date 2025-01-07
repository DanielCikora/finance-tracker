"use client";
import { FormEvent, useState } from "react";
import FormInput from "@/components/ui/FormInput";
import Link from "next/link";
import FormButton from "@/components/ui/FormButton";
import { toast } from "react-toastify";
import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const route = useRouter();
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Invalid email address.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8-16 characters, include at least one number, one uppercase letter, one lowercase letter, and one special character."
      );
      toast.error("Invalid password format.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
      });
      toast.success(`Welcome ${name}! Your account has been created.`);
      setName("");
      setPhone("");
      setOccupation("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message);
      toast.error("Error signing up. Please try again.");
    }
  };
  return (
    <section className='signin__page h-dvh w-dvw'>
      <div className='wrapper grid place-items-center w-full h-full'>
        <div className='max-w-[500px] text-offWhite max-h-fit bg-gray-800 w-full h-full p-6 rounded-md border border-solid border-offWhite'>
          <h2 className='font-medium text-3xl mb-10'>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <FormInput
              formHtmlFor='name'
              formId='name'
              formInputType='text'
              formIsRequired
              formLabel='Full Name'
              formPlaceholder='Your Name'
              formOnChange={(event) => setName(event.target.value)}
              formValue={name}
            />
            <FormInput
              formHtmlFor='phone'
              formId='phone'
              formInputType='number'
              formIsRequired
              formLabel='Phone Number'
              formPlaceholder='Your Phone'
              formOnChange={(event) => setPhone(event.target.value)}
              formValue={phone}
            />
            <FormInput
              formHtmlFor='occupation'
              formId='occupation'
              formInputType='text'
              formIsRequired
              formLabel='Occupation'
              formPlaceholder='Your Occupation'
              formOnChange={(event) => setOccupation(event.target.value)}
              formValue={occupation}
            />
            <FormInput
              formHtmlFor='email'
              formId='email'
              formInputType='email'
              formIsRequired
              formLabel='Email Address'
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
            <FormButton buttonText='Sign up' buttonType='submit' />
            {error && <p>{error}</p>}
          </form>
          <p className='mt-4'>
            Already have an account?{" "}
            <Link href='/login' className='underline'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignUpPage;
