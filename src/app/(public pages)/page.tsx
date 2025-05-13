import Button from "@/sharedComponets/ui/buttons/Button";
import PublicNavbar from "@/sharedComponets/ui/header/PublicNavbar";


export default function Home() {
  return (
    < >
      <PublicNavbar />
      <main className="w-full mt-20 px-20">
        <Button label="Hello" />
      </main>
    </>
  );
}
