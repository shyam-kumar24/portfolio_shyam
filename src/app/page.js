import ClientHomeView from "@/components/client-view/Home";
import ClientAboutView from "@/components/client-view/about";
import ClientExperienceAndEducataionView from "@/components/client-view/experience";
import ClientContactView from "@/components/client-view/contact";
import ClientProjectView from "@/components/client-view/project";

const baseUrl = process.env.SITE_URL || 'http://localhost:3000'

async function extractAllDatas(currentSection){
  const res = await fetch(`${baseUrl}/api/${currentSection}/get`, {
    method: 'GET',
    cache: 'no-store'
  })

  const data = await res.json()
  return data && data.data
}


export default async function Home() {

  const homeSectionData = await extractAllDatas('home')
  const aboutSectionData = await extractAllDatas('about')
  const experienceSectionData = await extractAllDatas('experience')
  const educationSectionData = await extractAllDatas('education')
  const projectSectionData = await extractAllDatas('project')

  return (
    <div>
        <ClientHomeView data={homeSectionData}/>
        <ClientAboutView data={aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []}/>
        <ClientExperienceAndEducataionView educationData={educationSectionData} experienceData={experienceSectionData}/>
        <ClientProjectView data={projectSectionData}/>
        <ClientContactView/>
    </div>
  );
}
