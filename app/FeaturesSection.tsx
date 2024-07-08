import {
  FaCode,
  FaBlog,
  FaCloudUploadAlt,
  FaLock,
  FaExchangeAlt,
  FaFingerprint,
  FaSyncAlt,
  FaSmile,
  FaCamera,
  FaHashtag,
  FaYoutube,
  FaBrain,
  FaSpellCheck,
  FaBug,
  FaHeading,
  FaBox,
} from "react-icons/fa";

type Feature = {
  name: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    name: "Blog Title",
    description:
      "An AI tool that generates blog titles based on your blog information.",
    icon: FaBlog,
  },
  {
    name: "Blog Content",
    description:
      "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: FaBox,
  },
  {
    name: "Blog Topic Ideas",
    description:
      "An AI tool that generates catchy and viral-worthy blog topic ideas based on your chosen language and preferences.",
    icon: FaBrain,
  },
  {
    name: "Youtube SEO Title",
    description:
      "An AI tool that creates SEO-optimized titles for your YouTube videos to attract more viewers.",
    icon: FaYoutube,
  },
  {
    name: "Youtube Description",
    description:
      "An AI tool that generates compelling descriptions for your YouTube videos to increase engagement.",
    icon: FaSyncAlt,
  },
  {
    name: "Youtube Tags",
    description:
      "An AI tool that suggests relevant tags to optimize your YouTube video's discoverability.",
    icon: FaHashtag,
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    description:
      "Use this tool to rewrite existing articles or blog posts, ensuring they are plagiarism-free and pass AI detectors.",
    icon: FaSyncAlt,
  },
  {
    name: "Text Improver",
    description:
      "Refines your writing by eliminating errors, improving readability, and suggesting better word choices.",
    icon: FaSmile,
  },
  {
    name: "Add Emojis to Text",
    description:
      "An AI tool that enhances your text by adding emojis for a more engaging and expressive tone.",
    icon: FaCamera,
  },
  {
    name: "Instagram Post Generator",
    description:
      "An AI tool that generates captivating and viral-worthy Instagram post ideas tailored to your preferences.",
    icon: FaCamera,
  },
  {
    name: "Instagram Hashtag Generator",
    description:
      "An AI tool that suggests trending and relevant hashtags to boost your Instagram post reach and engagement.",
    icon: FaHashtag,
  },
  {
    name: "Instagram Post/Reel Idea",
    description:
      "An AI tool that generates new and trending Instagram post or reel ideas based on your niche.",
    icon: FaBrain,
  },
  {
    name: "English Grammar Check",
    description:
      "AI-powered tool that corrects grammar mistakes and enhances the clarity and correctness of your English text.",
    icon: FaSpellCheck,
  },
  {
    name: "Write Code",
    description:
      "AI tool that generates programming code in any language based on specified requirements and parameters.",
    icon: FaCode,
  },
  {
    name: "Explain Code",
    description:
      "AI tool that explains programming code in any language, making it easier to understand and learn.",
    icon: FaCode,
  },
  {
    name: "Code Bug Detector",
    description:
      "Analyzes code snippets and error messages to identify and fix bugs, providing detailed solutions and alternatives.",
    icon: FaBug,
  },
  {
    name: "Tagline Generator",
    description:
      "AI tool that helps create catchy and unique taglines for your brand or product to enhance brand identity.",
    icon: FaHeading,
  },
  {
    name: "Product Description",
    description:
      "AI-powered SEO tool that creates compelling and keyword-rich e-commerce product descriptions to boost sales and visibility.",
    icon: FaBox,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover Powerful Tools
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore a wide range of AI-powered tools designed to enhance your
            content creation and development process. From generating blog
            titles to debugging code, we have everything you need to streamline
            your workflow.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
                    {<feature.icon className="h-6 w-6 text-white" />}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
