import {
    EmojiHappyIcon,
    ChartSquareBarIcon,
    CursorClickIcon,
    DeviceMobileIcon,
    AdjustmentsIcon,
    SunIcon,
  } from "@heroicons/react/outline";
  
  import benefitOneImg from "../public/img/benefit_one.png";
  import benefitTwoImg from "../public/img/benefit-two.png";
  
  const benefitOne = {
    title: "Receba atualização do mercado rapidamente sempre",
    desc: "Equipado com ferramentas de análise abrangentes e Inteligência Artificial, facilita e proporciona uma experiência lucrativa na forma de atualizações de mercado rapidamente, para que não seja tarde para tomar as melhores decisões de investimento.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: <EmojiHappyIcon />,
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: <ChartSquareBarIcon />,
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: <CursorClickIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
        icon: <DeviceMobileIcon />,
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
        icon: <AdjustmentsIcon />,
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
        icon: <SunIcon />,
      },
    ],
  };
  
  export { benefitOne, benefitTwo };
  