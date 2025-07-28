import Image from 'next/image'
import { memo, useMemo } from "react"
import { FC, PropsWithChildren } from "react"

export default function Home() {
  return (
    <div>
      <section className="page flex relative">
        <aside className="sticky top-0 shrink-0 h-screen bg-[#003d73] text-white">
          <Box className="py-4">
            <h1 className="text-2xl">
              Allen Deng
            </h1>
            <p>
              Frontend Engineer
            </p>
          </Box>
          <Box className="bg-[#00315c] py-2">
            <h2>
              Contact
            </h2>
          </Box>
          <Box className="py-4">
            <dl className="max-w-[10em] [&>dd+dt]:pt-4 [&>dd]:text-xs">
              <dt>Email</dt>
              <dd><a className="border-b-[1px] border-inherit" href="mailto:guolong613@gmail.com">guolong613@gmail.com</a></dd>
              <dt>LinkedIn</dt>
              <dd>
                <a className="underline" href="https://www.linkedin.com/in/allengl/">
                  https://www.linkedin.com/in/
                  allengl/
                </a>
              </dd>
              <dt>GitHub</dt>
              <dd>
                <a className="underline" href="https://github.com/Allengl">
                  github.com/Allengl
                </a>
              </dd>
            </dl>
          </Box>
          <Box className="bg-[#00315c] py-2">
            <h2>Technical Profile</h2>
          </Box>
          <Box className="py-4">
            <ul className="list-disc list-inside">
              <li>TypeScript</li>
              <li>HTML5 + CSS3</li>
              <li>React + Hooks </li>
              <li>Next.js</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </Box>
        </aside>
        <main className="px-6 py-4">
          <Title>Profile</Title>
          <Profile>
            <article>
              Respectful self-motivator gifted at finding reliable solutions for software issues.
              Experienced in Front-end development and offering skills in
              TypeScript, React, TailwindCSS, NextJS, shadcn/ui
              Fluent in English
              Accustomed to working with cross-cultural, global teams.
              Always committed to deadlines and a high-quality product.
            </article>
          </Profile>
          <Title>Education</Title>
          <Education>
            <dt>
              <div>
                <h3>Wuhan University of Technology Huaxia College                </h3>
              </div>
              <div className="minor">2018 - 2022</div>
            </dt>
            <dd>
              Bachelor of Software Engineering
            </dd>
          </Education>
          <Title>Projects</Title>
          {/* <p>All projects preview,code,and live-view are available on <a className='text-[#aca3af]' href='https://deng.gl/'>deng.gl</a></p> */}
          {/* <p>All projects preview,code,and live-view are available on <a className='text-[#aca3af]' href='https://deng.gl/'>deng.gl</a></p> */}
          <Projects>
            {/* <dt>
              <div>
                <h3>Leafcoin</h3>
              </div>
              <div className='flex gap-2'>
                <a href='https://react-leaf.deng.gl' className="underline cursor-pointer text-gray-400">Preview</a>
                <a href='https://github.com/Allengl/react-leaf' className="underline cursor-pointer text-gray-400">Github</a>
                <div className="minor">2023</div>
              </div>
            </dt>
            <dd>
              <List>
                <li>React, Typescript, Custom Hooks, Data visualization</li>
                <li>Personal accounting PWA to record income and spending</li>
                <li>State is managed using Zustand</li>
                <li>Styled with UnoCSS</li>
                <li>Mobile-first design</li>
              </List>
            </dd>
            {/* <dt>
              <div>
                <h3>Leafcoin - V1</h3>
              </div>
              <div className="minor">2022</div>
            </dt>
            <dd>
              <List>
                <li>Vue, Typescript, Pinia, Routing, SCSS.</li>
                <li>First version of personal accounting web app to keep track of spending</li>
                <li>State is managed using Pinia</li>
                <li>Mobile-first design</li>
              </List>
            </dd>
            <dt> */}
            <dt>
              <div>
                <h3>Flow jobs</h3>
              </div>
              <div className='flex gap-2'>
                <a href='https://flowjobs.deng.gl/' className="underline cursor-pointer text-gray-400">Preview</a>
                <a href='https://github.com/Allengl/nextjs-job-board' className="underline cursor-pointer text-gray-400">Github</a>
                <div className="minor">2024</div>
              </div>
            </dt>
            <dd>
              <List>
                <li>React,NextJS, Typescript, Tailwind CSS, Prisma.</li>
                <li>Fully Functional amazing job board application</li>
                <li>Form validation Using Zod & React Hook Form</li>
                <li>Vercel Blob Storage and Vecel Postgres together with Prisma ORM</li>
                <li>Deployed on Vercel</li>
              </List>
            </dd>
            <dt>
              <div>
                <h3>Gulu UI</h3>
              </div>
              <div className='flex gap-2'>
                <a href='https://gulu-ui.deng.gl/#/' className="underline cursor-pointer text-gray-400">Preview</a>
                <a href='https://github.com/Allengl/gulu-UI' className="underline cursor-pointer text-gray-400">Github</a>
                <div className="minor">2021</div>
              </div>
            </dt>
            <dd>
              <List>
                <li>UI Library with Vue and Typescript.</li>
                <li>Published on NPM and ready to use.</li>
                <li>Utilized Vue3 composition API</li>
                <li>Covers 4 basic components: switch,button,dialogue window and tabs</li>
              </List>
            </dd> */}
            <dt>
              <div>
                <h3><a href="https://www.hand-china.com/p-hcopilot_aigc.html" target='_blank'>H-AI</a></h3>
              </div>
              <div className="minor">2022-2025</div>
            </dt>
            <dd>
              <List>
                <li>Participated in the development of AI Middle Platform, focusing on AI features and file management modules.</li>
                <li>Developed AI capabilities such as LLM-based Q&A, summarization, and prompt orchestration for business scenarios.</li>
                <li>Integrated multiple large language models and optimized prompt strategies to improve response quality.</li>
                <li>Developed file-related modules such as document upload, preview, and structured data extraction.</li>
                <li>Collaborated closely with front-end, back-end, and DevOps teams to ensure seamless integration and system stability.</li>
              </List>
            </dd>
          </Projects>
          <Title>Experience</Title>
          <WorkExperience>
            <dt>
              <div className="">
                <h3> Frontend Engineer </h3>
                <div className="minor">Hand Enterprise Solutions Co., Ltd, Shanghai, China</div>
              </div>
              <div className="minor"> Jun 2022 - Present </div>
            </dt>
            <dd>
              <List>
                <li>Built and maintained front-end infrastructure such as scaffolding, UI frameworks, and component libraries to ensure the consistency and scalability of the company's web applications.</li>
                <li>Conducted research and development on new technologies and frameworks, including PWA, and ReactJS, and developed strategies to implement them in production environments.</li>
                <li>Worked on the development and maintenance of the company's CRM system, which involved collaborating with cross-functional teams to ensure the application's robustness, scalability, and responsiveness.</li>
                <li>Conducted code reviews, provided feedback and mentorship to junior developers, and promoted best practices in coding standards, testing, and deployment procedures.</li>
              </List>
            </dd>
          </WorkExperience>
        </main>
      </section>
    </div>
  )
}

const Box: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <div className={`px-4 ${className}`} >
      {children}
    </div >
  )
})

const List: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <ul className="[&>li]:before:content-['•'] [&>li]:before:inline-block
      [&>li]:before:w-[0.8em] [&>li]:before:text-gray-400">
      {children}
    </ul>
  )
})

const WorkExperience: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Education: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Projects: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Profile: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Title: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <h2 className="text-2xl border-b-[1px] border-[#d5d6d6] mt-1 py-1">
      {children}
    </h2>
  )
})
