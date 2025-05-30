import Container from "@/sharedComponets/ui/wrapper/Container";
import React from "react";
import UploadFile from "./components/UploadFile";

export default function TestPage() {
  return (
    <div className="w-full min-h-screen pt-20">
      <Container>
        <div className="w-full py-20 flex flex-col items-center justify-center">
          <UploadFile />
        </div>
      </Container>
    </div>
  );
}
