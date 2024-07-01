import Education from "@/components/Education";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Summary from "@/components/Summary";
import { name, socialLinks, summary } from "../../cv.config";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" w-full  bg-neutral-950 p-3 sm:p-7  ">
      <div className="w-full max-w-3xl  min-h-screen mx-auto  flex px-4 sm:px-5 py-8 flex-col gap-2 h-full bg-neutral-900 rounded-md border border-neutral-800">
        <Name>
          {name}
        </Name>
        <Social data={socialLinks} />
        <Summary>
          {summary}
        </Summary>
        <Education />
        <Projects />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
