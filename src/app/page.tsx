"use client";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        handleClick={() => {
          console.log("Button handleClick ok!");
        }}
      >
        Button Test
      </Button>

      <TextInput title="Text Input" type="alphanumeric" />
    </main>
  );
}
