export {};

// Record<K,T>

type Prefectures = "Tokyo" | "Chiba" | "Kanagawa"|"Shiga";

type Covid19Infection = {
  kanjimei: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19Infection> =
  // {
  //   //   Tokyo:Covid19Infection;
  //   //   Chiba:Covid19Infection;
  //   //   Tottori:Covid19Infection;
  //   //   Shiga:Covid19Infection;
  // }
  {
    Tokyo: { kanjimei: "東京", confirmed_cases: 1960 },
    Chiba: { kanjimei: "千葉", confirmed_cases: 249 },
    Kanagawa: { kanjimei: "神奈川", confirmed_cases: 230 },
    Shiga: { kanjimei: "滋賀", confirmed_cases: 10 },
  };
