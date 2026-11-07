"use client";

import ButtonLink from "@/components/ButtonLink";
import { useIsVisible } from "@/utils/useIsVisible";
import { useRef } from "react";
import ContactForm from "@/components/ContactForm";
import ProjectSummary from "@/components/ProjectSummary";
import TypewriterTypo from "@/components/TypoTypewriter";

const findMoreLakesLogos = [
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", alt: "AWS Lambda logo" },
  { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", alt: "NextJS logo", width: 65 },
  { src: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Service.svg", alt: "AWS Elastic Container Service logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg", alt: "AWS RDS logo" },
  { src: "https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/174px-PostgreSQL_logo.3colors.svg.png", alt: "PostgreSQL logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudFormation.svg", alt: "AWS Cloudformation logo" }
]

const sampleSequencerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png", alt: "HTML5 logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png", alt: "CSS logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/330px-Node.js_logo.svg.png", alt: "NodeJS logo", width: 100 }
]

const searchableFilingCabinetLogos = [
  { src: "https://icon.icepanel.io/AWS/svg/Machine-Learning/Textract.svg", alt: "AWS Textract logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Cognito.svg", alt: "AWS Cognito logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg", alt: "AWS S3 logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", alt: "AWS Lambda logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg", alt: "AWS DynamoDB logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", alt: "NextJS logo", width: 65 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", alt: "Stripe payment processing logo", width: 120 }
]

const randomPublicParkLogos = [
  { src: "https://user-images.githubusercontent.com/2752551/30405069-a7751fee-989e-11e7-9a58-f93f8e820bd1.png", alt: "Serverless Framework logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", alt: "AWS Lambda logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/266px-X_logo_2023.svg.png", alt: "X logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/500px-Google_Maps_icon_%282020%29.svg.png", alt: "Google Maps logo", width: 40 },
  { src: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg", alt: "Python Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/250px-ChatGPT-Logo.svg.png", alt: "ChatGPT logo" }
]

export default function Home() {
  const titleRef = useRef(null);
  const isTitleVisible = useIsVisible(titleRef);

  const workRef = useRef(null);
  const isWorkVisible = useIsVisible(workRef);

  const searchableFilingCabinetRef = useRef(null);
  const isSearchableFilingCabinetVisible = useIsVisible(searchableFilingCabinetRef);

  const findMoreLakesRef = useRef(null);
  const isFindMoreLakesVisible = useIsVisible(findMoreLakesRef);

  const sampleSequencerRef = useRef(null);
  const isSampleSequencerVisible = useIsVisible(sampleSequencerRef);

  const randomPublicParkRef = useRef(null);
  const isRandomPublicParkVisible = useIsVisible(randomPublicParkRef);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white dark:bg-dark-green px-2">
      <main className="flex min-h-screen w-full max-w-5xl font-dark-green dark:font-white transition-opacity flex-col items-center text-left justify-between lg:py-32 lg:mb-16 mb-48 px-8 bg-white dark:bg-dark-green sm:items-start">
        <div ref={titleRef} className={`flex flex-col mt-24 w-full ease-in delay-400 duration-700 ${isTitleVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl">DB Software</h1>
          <div>
            <br />
            <TypewriterTypo text={"\nHello, my name is Dylan. I'm a programmer."} />
            <br /><br />
            I have a passion for learning about technology and applying my skills to solve difficult problems. In my work I try to approach things with creativity, integrity, and diligence.
            <br /><br />
            I have a B.S. in Computer Engineering from the University of Minnesota. My professional experience is in backend application engineering with Ameriprise Financial, TCS, and Steris Corp. In my freetime I enjoy building various websites and apps.
          </div>
          <div className="flex items-center justify-end space-x-4 mt-16 px-2">
            <ButtonLink href="/#work" text="My work" />
            <ButtonLink href="/#contact" text="Contact" />
          </div>
        </div>

        <hr id="work" className="w-full bg-white my-16"></hr>

        <div ref={workRef} className={`flex flex-col pt-8 ease-in delay-400 duration-700 ${isWorkVisible ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-5xl">Some of my work</h2>
          <p>
            <br />
            My passion for programming comes from an openness to possibility; I believe that with technology, if you can think it you can build it.
            Throughout my education, career, and freetime I have developed a wide range of applications from websites, audio processors, web scrapers, cloud infrastructure, mobile apps, and more.
          </p>
        </div>

        <ProjectSummary
          ref={findMoreLakesRef}
          isVisible={isFindMoreLakesVisible}
          profileImage={{
            src: "/findmorelakes-logo.png",
            alt: "Logo for the Find More Lakes website",
            width: 60,
            height: 60,
          }}
          title="Find More Lakes"
          link="https://findmorelakes.dbitweb.com"
          logos={findMoreLakesLogos} >
            <p>
              <br />
              <b>Find More Lakes</b> is a <b>web application</b> which helps users discover lakes in Minnesota by presenting DNR lake data.
              <br /> <br />
              The site centralizes lake data from various sources and makes it easy for users to learn about different lakes. Other features include the Lake of the Day, Recently published lake surveys, and trophy catch tracking.
              <br /> <br />
              The website is built using several AWS services including AWS SAM for backend services, AWS Amplify for frontend hosting, AWS RDS for data store, AWS ECS for scheduled data scraping, and AWS Cloudformation for cloud infrastructure deployments.
            </p>
        </ProjectSummary>

        <ProjectSummary
          ref={sampleSequencerRef}
          isVisible={isSampleSequencerVisible}
          profileImage={{
            src: "/samplesequencer-logo.png",
            alt: "Logo for the Sample Sequencer website",
            width: 50,
            height: 50,
          }}
          title="SampleSequencer"
          link="https://samplesequencer.com"
          logos={sampleSequencerLogos}
        >
          <p>
            <br />
            <b>SampleSequencer</b> is a <b>web application</b> for creating <b>drum beats</b>.
            <br /> <br />
            Users can sample sounds using their devices microphone, trim the audio, add a variety of digital effects, and then send the sample to the sequencer where it can be played back with any number of additional samples.
            <br /> <br />
            The website is written in native HTML and CSS, and uses NPM libraries for audio processing and playback.
            Wavesurfer.js visualizes a sound making it easy to trim the sample for sequencing, while Tone.js provides the core of the sequencer, allowing users to schedule sounds for playback and add digital effects.
          </p>
        </ProjectSummary>

        <ProjectSummary
          ref={searchableFilingCabinetRef}
          isVisible={isSearchableFilingCabinetVisible}
          profileImage={{
            src: "/searchablefilingcabinet-logo.png",
            alt: "Logo for the Searchable Filing Cabinet website",
            width: 50,
            height: 50,
          }}
          title="Searchable Filing Cabinet"
          link="https://searchablefilingcabinet.dbitweb.com"
          logos={searchableFilingCabinetLogos}
        >
          <p>
            <br />
            <b>Searchable Filing Cabinet</b> is a <b>serverless web application</b> that provides <b>text search</b> to your personal <b>document database</b>.
            <br /><br />
            This application was built for my dad, who is a land surveyor with organizational issues.
            When a client calls and asks for an old survey of their property, it is very time consuming to search multiple filing cabinets to find the right document.
            Searchable Filing Cabinet provides a way to organize and easily retrieve these documents once they are digitized.
            <br /> <br />
            Searchable Filing Cabinet uses <b>Optical Character Recognition (OCR)</b> technology to extract text from <b>PDF, PNG, or JPG</b> files to create a correlation between the document and the text it contains.
            For a surveyor, looking for any document pertaining to a particular address, year, or county, all that is required is a simple text search, and the application will retrieve all relevant documents.
            <br /> <br />
          </p>
        </ProjectSummary>

        <ProjectSummary
          ref={randomPublicParkRef}
          isVisible={isRandomPublicParkVisible}
          profileImage={{
            src: "https://pbs.twimg.com/profile_images/1706115457353166848/MH8AVHcu_400x400.jpg",
            alt: "Profile picture for the Random Public Park bot",
            width: 50,
            height: 50,
          }}
          title="Random Public Park"
          link="https://x.com/EverydayParks"
          logos={randomPublicParkLogos}
          hrClass="w-full bg-white my-16"
        >
          <p>
            <br />
            <b>Random Public Park</b> is an X (formerly Twitter) account which makes <b>automated posts</b> about <b>parks</b> in the United States.
            <br /> <br />
            Every few hours the account will post a random park from the US showing some photos of the park and an aerial map showing the exact pinned location.
            The account also has a few daily and weekly posts highlighting designated State and National Parks, National Forests, National Historic Sites, and National Protected Areas.
            These special posts include many photos of the area, a synopsis from Wikipedia, and a map with a pin locating the park.
            <br /> <br />
            The bot is a collection of scheduled scripts which are built on the <b>Serverless Framework</b> and deployed as <b>AWS Lambda</b> functions.
            The State/National park hightlight threads are constructed from the Wikipedia pages of each location.
            A <b>Python</b> script was used scrape and process the Wikipedia synopses into chunks that fit into the 140 character limit of a tweet, with help from the OpenAI API to rewrite content where needed.
          </p>
        </ProjectSummary>
        <ContactForm />
      </main>
    </div >
  );
}
