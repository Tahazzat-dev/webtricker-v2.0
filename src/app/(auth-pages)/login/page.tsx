import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <main className="w-full z-0">
      <div
        className={`relative w-full mt-[130px] md:mt-[150px] lg:mt-[180px] 2xl:mt-[200px]`}
      >
        <Container>
          <div className="w-full max-w-[500px] mx-auto">
            <LoginForm />
          </div>
        </Container>
      </div>
    </main>
  );
}
