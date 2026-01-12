import Image from "next/image";
import { forwardRef } from "react";
import { Link45deg } from "react-bootstrap-icons";

interface ProjectSummaryProps {
  isVisible: boolean;
  profileImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  link: string;
  logos: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  children: React.ReactNode;
  hrClass?: string; // Optional: Customize HR styling
}

const ProjectSummary = forwardRef<HTMLDivElement, ProjectSummaryProps>(
  (
    {
      isVisible,
      profileImage,
      title,
      link,
      logos,
      children,
      hrClass = "w-full bg-white my-16",
    },
    ref
  ) => {
    return (
      <>
        <hr className={hrClass} />
        <div
          ref={ref}
          className={`flex flex-col ease-in delay-400 duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex items-center justify-start">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              width={profileImage.width ?? 50}
              height={profileImage.height ?? 50}
            />
            <h2 className="text-3xl ml-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition hover:text-light-green"
              >
                {title} <Link45deg />
              </a>
            </h2>
          </div>
          {children}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 50}
                height={logo.height ?? 50}
                className="max-w-20 sm:max-w-[100px] md:max-w-[120px] object-contain mt-4"
              />
            ))}
          </div>
        </div>
      </>
    );
  }
);

export default ProjectSummary;