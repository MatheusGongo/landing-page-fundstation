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
  import cardOneImg from "../public/img/card-one.svg";
  import cardTwoImg from "../public/img/card-two.svg";
  import cardThreeImg from "../public/img/card-three.svg";
  
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
    title: "Maneira fácil de investir e obtenha lucro",
    desc: "Usar a plataforma Fundstation é uma maneira fácil de investir e benefício, equipado com ferramentas de análise abrangentes e Inteligência Artificial (IA) que auxiliam na automação no monitoramento e nas transações.",
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

  const cards = { 
    cards: [
      {
        title: "Mais rápido",
        desc: "A informação se espalha mais rapidamente com a ajuda da comunidade Fundstation. Com o Fundstation, você estará mais atualizado com as informações mais recentes.",
        image: cardOneImg,
      },
      {
        title: "Gerencie suas carteiras",
        desc: "Torne suas finanças mais fáceis e seguras com a Fundstation e torne cada transação mais segura e de qualidade.",
        image: cardTwoImg,
      },
      {
        title: "Atualize suas estatísticas",
        desc: "Atualize suas estatísticas gerais mais rapidamente com notificações diretas da Fundstation e torne sua próxima transação com mais qualidade.",
        image: cardThreeImg,
      },
    ]
  };
  
  export { benefitOne, benefitTwo, cards };