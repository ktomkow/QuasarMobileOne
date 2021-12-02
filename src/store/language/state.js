import { i18n } from "boot/i18n";

export default function () {
  return {
    i18n: i18n.global,
    languages: [
      {
        name: "English",
        icon: "balls/united-kingdom.png",
        code: "en",
        active: false,
      },
      {
        name: "Polish",
        icon: "balls/poland.png",
        code: "pl",
        active: false,
      },
      {
        name: "Russian",
        icon: "balls/russia.png",
        code: "ru",
        active: false,
      },
      {
        name: "Japaneese",
        icon: "balls/japan.png",
        code: "ja",
        active: false,
      },
    ],
  };
}
