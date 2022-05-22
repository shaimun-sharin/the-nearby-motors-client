import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-48 h-48"
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1653235548~exp=1653236148~hmac=bdbcb42d49653b3f09bdd334609a43d408f57aff37f4f33bc67bd607d2af1c51"
            alt="Album"
          />
        </figure>
        <div class="card-body w-52 h-52">
          <h2 class="text-center font-bold text-2xl">Log In!</h2>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-xs sm:btn-sm md:btn-md  btn-info lg:btn-md"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
