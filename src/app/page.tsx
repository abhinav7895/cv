import Education from "@/components/Education";
import Name from "@/components/Name";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Summary from "@/components/Summary";
import { socialLinks } from "../../cv.config";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-3xl px-2 py-10 w-full mx-auto h-full min-h-screen">
      <div className="w-full flex px-4 sm:px-5 py-8 flex-col gap-2 h-full bg-neutral-900 rounded-md">
        <Name>
          Abhinav Yadav
        </Name>
        <Social data={socialLinks} />
        <Summary>
          I&apos;m a frontend developer from India, focusing on creating user-friendly, visually appealing, and accessible websites.
        </Summary>
        <Education/>
        <Projects/>
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
