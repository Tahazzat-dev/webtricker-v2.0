import Button from "@/sharedComponets/ui/buttons/Button";
import Heading from "./components/Heading";
import LinkButton from "@/sharedComponets/ui/buttons/LinkButton";

export default function Home() {
  return (
    <>
      <main className="w-full mt-20 px-20 min-h-[400vh]">
        <Heading />
        <div className="w-full mt-10"></div>
        <h1>Heading 1</h1>
        <br />
        <h2>Heading 2</h2>
        <br />
        <h3>Heading 3</h3>
        <br />
        <h4>Heading 4</h4>
        <br />
        <h5>Heading 5</h5>
        <br />
        <h6>Heading 6</h6>
        <br />
        <p>Paragraph</p>
        <div className="w-full mt-10"></div>
        <Button label="Demo btn" />
        <div className="w-full mt-10"></div>
        <LinkButton href="/test" label="Test Link" />
      </main>
    </>
  );
}
