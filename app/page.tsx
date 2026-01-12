"use client";

import ButtonLink from "@/components/ButtonLink";
import { useIsVisible } from "@/utils/useIsVisible";
import { useRef } from "react";
import ContactForm from "@/components/ContactForm";
import ProjectSummary from "@/components/ProjectSummary";

const searchableFilingCabinetLogos = [
  { src: "https://icon.icepanel.io/AWS/svg/Machine-Learning/Textract.svg", alt: "AWS Textract logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Cognito.svg", alt: "AWS Cognito logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg", alt: "AWS S3 logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", alt: "AWS Lambda logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg", alt: "AWS DynamoDB logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/591px-Nextjs-logo.svg.png?20230404233503", alt: "NextJS logo", width: 120 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png?20240909030005", alt: "Stripe payment processing logo", width: 120 }
]

const sampleSequencerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png", alt: "HTML5 logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/250px-Official_CSS_Logo.svg.png", alt: "CSS logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/330px-Node.js_logo.svg.png", alt: "NodeJS logo", width: 100 }
]

const randomPublicParkLogos = [
  { src: "https://user-images.githubusercontent.com/2752551/30405069-a7751fee-989e-11e7-9a58-f93f8e820bd1.png", alt: "Serverless Framework logo" },
  { src: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", alt: "AWS Lambda logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/266px-X_logo_2023.svg.png", alt: "X logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/500px-Google_Maps_icon_%282020%29.svg.png", alt: "Google Maps logo", width: 40 },
  { src: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg", alt: "Python Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/250px-ChatGPT-Logo.svg.png", alt: "ChatGPT logo" }
]

const fridgeWizardLogos = [
  { src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg", alt: "AWS Amplify logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/250px-ChatGPT-Logo.svg.png", alt: "ChatGPT logo" },
  { src: "https://cdn.worldvectorlogo.com/logos/search-console-icon-2025-1.svg", alt: "Google Search Console logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/591px-Nextjs-logo.svg.png?20230404233503", alt: "NextJS logo", width: 120 },
]

export default function Home() {
  const titleRef = useRef(null);
  const isTitleVisible = useIsVisible(titleRef);

  const workRef = useRef(null);
  const isWorkVisible = useIsVisible(workRef);

  const searchableFilingCabinetRef = useRef(null);
  const isSearchableFilingCabinetVisible = useIsVisible(searchableFilingCabinetRef);

  const sampleSequencerRef = useRef(null);
  const isSampleSequencerVisible = useIsVisible(sampleSequencerRef);

  const randomPublicParkRef = useRef(null);
  const isRandomPublicParkVisible = useIsVisible(randomPublicParkRef);

  const fridgeWizardRef = useRef(null);
  const isFridgeWizardVisible = useIsVisible(fridgeWizardRef);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white dark:bg-dark-green px-2">
      <main className="flex min-h-screen w-full max-w-5xl font-dark-green dark:font-white transition-opacity flex-col items-center text-left justify-between lg:py-32 px-8 bg-white dark:bg-dark-green sm:items-start">
        <div ref={titleRef} className={`flex flex-col ease-in mt-24 delay-400 duration-700 ${isTitleVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-5xl">DB Software</h1>
          <p>
            <br />
            Hello, my name is Dylan. I'm a programmer.
            <br /><br />
            I have a passion for learning about technology and applying my skills to solve difficult problems. In my work I try to approach things with creativity, integrity, and diligence.
            <br /><br />
            I have a B.S. in Computer Engineering from the University of Minnesota. My professional experience is in backend application engineering with Ameriprise Financial, TCS, and Steris Corp. In my freetime I enjoy building various websites and apps.
          </p>
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
          ref={searchableFilingCabinetRef}
          isVisible={isSearchableFilingCabinetVisible}
          profileImage={{
            src: "/searchablefilingcabinet-logo.png",
            alt: "Logo for the Searchable Filing Cabinet website",
            width: 50,
            height: 50,
          }}
          title="Searchable Filing Cabinet"
          link="https://searchablefilingcabinet.com"
          logos={searchableFilingCabinetLogos}
        >
          <p>
            <br />
            <b>Searchable Filing Cabinet</b> is a fully <b>serverless web application</b> that provides <b>text search</b> to your personal <b>document database</b>.
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
            <b>SampleSequencer</b> is a <b>Web Application</b> for used to create <b>drum patterns</b>.
            <br /> <br />
            Users can sample sounds using their devices microphone, trim the audio, add a variety of digital effects, and then send the sample to the sequencer where it can be played back with any number of additional samples.
            <br /> <br />
            The website is written in native HTML and CSS, and uses NPM libraries for audio processing and playback.
            Wavesurfer.js visualizes a sound making it easy to trim the sample for sequencing, while Tone.js provides the core of the sequencer, allowing users to schedule sounds for playback and add digital effects.
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

        <ProjectSummary
          ref={fridgeWizardRef}
          isVisible={isFridgeWizardVisible}
          profileImage={{
            src: "https://fridge-wizard.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75",
            alt: "Fridge Wizard website logo",
            width: 100,
            height: 50,
          }}
          title="Fridge Wizard"
          link="https://x.com/EverydayParks"
          logos={fridgeWizardLogos}
        >
          <p>
            <br />
            <b>Fridge Wizard</b> is an <b>AI Recipe Generator</b> built on top of <b>ChatGPT</b> that provides various workflows for generating recipe ideas.
            <br /> <br />
            One option is to use the <b>Single Ingredient Generator</b> to come up with a few recipes for a specific ingredient you are craving.
            Another offering is the <b>Cocktail Pairing Generator</b>. Simply enter a recipe you have in mind and Fridge Wizard will generate you a cocktail that goes with it. Or do the opposite and enter a cocktail to generate a pairing recipe.
            Lastly the <b>Meal Prep Generator</b> will generate a list of recipes as well as the grocery list given your budget, cuisine preference, dietary restrictions, etc.
            <br /> <br />
            Fridge Wizard was also an excercise in <b>Search Engine Optimization (SEO)</b>. The websites has a number of pages and blog posts which are written with key words to rank the site higher in search results.
            <b> Google Search Console</b> and <b>Keyword Planner</b> were used to find a niche which Fridge Wizard could occupy in Google's search results, and dynamic sitemaps were added so that bots could crawl and rank the site.
          </p>
        </ProjectSummary>

        <ContactForm />
      </main>
    </div >
  );
}
