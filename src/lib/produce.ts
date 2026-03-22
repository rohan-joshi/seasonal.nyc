export type Season = "peak" | "in_season" | "out_of_season";

export interface ProduceItem {
  name: string;
  slug: string;
  category: "vegetable" | "fruit" | "herb" | "mushroom" | "other";
  description: string;
  months: Record<number, Season>; // 1-12, only peak or in_season entries needed
}


export const PRODUCE: ProduceItem[] = [
  // VEGETABLES
  {
    name: "Asparagus",
    slug: "asparagus",
    category: "vegetable",
    description:
      "One of the first signs of spring in New York, asparagus thrives in the Hudson Valley and Finger Lakes regions. Look for firm, bright green spears at farmers markets starting in late April.",
    months: { 5: "peak", 6: "in_season", 4: "in_season" },
  },
  {
    name: "Beets",
    slug: "beets",
    category: "vegetable",
    description:
      "Beets grow exceptionally well in New York's cool climate. Available in red, golden, and chioggia varieties from summer through late fall, and stored through winter.",
    months: {
      6: "in_season",
      7: "peak",
      8: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
      12: "in_season",
    },
  },
  {
    name: "Broccoli",
    slug: "broccoli",
    category: "vegetable",
    description:
      "Broccoli is a cool-weather crop that does well in both spring and fall in New York. Fall harvests are often sweeter due to light frost exposure.",
    months: { 6: "in_season", 9: "peak", 10: "peak", 11: "in_season" },
  },
  {
    name: "Broccoli Rabe",
    slug: "broccoli-rabe",
    category: "vegetable",
    description:
      "A beloved bitter green that thrives in cool weather. Grown across New York in spring and fall, it's a staple at Union Square Greenmarket.",
    months: { 4: "in_season", 5: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Brussels Sprouts",
    slug: "brussels-sprouts",
    category: "vegetable",
    description:
      "A fall specialty in New York, Brussels sprouts improve after a frost. Grown on long stalks across the state, they're available from September through December.",
    months: { 9: "in_season", 10: "peak", 11: "peak", 12: "in_season" },
  },
  {
    name: "Cabbage",
    slug: "cabbage",
    category: "vegetable",
    description:
      "Green, red, and savoy cabbages are a fall staple in New York. They store well through winter and are available at markets from late summer through early spring.",
    months: {
      8: "in_season",
      9: "peak",
      10: "peak",
      11: "in_season",
      12: "in_season",
      1: "in_season",
    },
  },
  {
    name: "Carrots",
    slug: "carrots",
    category: "vegetable",
    description:
      "Grown year-round in New York through cold storage, carrots are freshest from summer through fall. Local varieties range from classic orange to purple, white, and yellow.",
    months: {
      6: "in_season",
      7: "peak",
      8: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
      12: "in_season",
      1: "in_season",
      2: "in_season",
    },
  },
  {
    name: "Cauliflower",
    slug: "cauliflower",
    category: "vegetable",
    description:
      "A cool-weather crop that thrives in New York's fall season. Available in white, orange, purple, and romanesco varieties from late summer through autumn.",
    months: { 8: "in_season", 9: "peak", 10: "peak", 11: "in_season" },
  },
  {
    name: "Celery",
    slug: "celery",
    category: "vegetable",
    description:
      "New York celery is a late summer through fall crop. The Hudson Valley produces celery with exceptional flavor, often available at farm stands and green markets.",
    months: { 8: "in_season", 9: "peak", 10: "peak", 11: "in_season" },
  },
  {
    name: "Corn",
    slug: "corn",
    category: "vegetable",
    description:
      "Sweet corn is a New York summer icon. From Long Island's famous bi-color corn to upstate farms, freshly picked corn at peak season is unmatched.",
    months: { 7: "in_season", 8: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Cucumbers",
    slug: "cucumbers",
    category: "vegetable",
    description:
      "New York cucumbers peak in mid-summer. Slicing, pickling, and English varieties are all grown locally and available at farmers markets from July through September.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Eggplant",
    slug: "eggplant",
    category: "vegetable",
    description:
      "Eggplant thrives in New York's warm summers. Available in classic globe, Italian, Japanese, and white varieties from July through September at local markets.",
    months: { 7: "in_season", 8: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Garlic",
    slug: "garlic",
    category: "vegetable",
    description:
      "New York is a major garlic-growing state, with hardneck varieties dominating. Harvest is in July, and cured garlic is available through winter at farmers markets.",
    months: {
      6: "in_season",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
      11: "in_season",
      12: "in_season",
      1: "in_season",
    },
  },
  {
    name: "Kale",
    slug: "kale",
    category: "vegetable",
    description:
      "One of New York's most reliable crops, kale grows from spring through winter. Curly, lacinato, and red Russian varieties are available nearly year-round at local markets.",
    months: {
      4: "in_season",
      5: "in_season",
      6: "peak",
      9: "peak",
      10: "peak",
      11: "in_season",
      12: "in_season",
    },
  },
  {
    name: "Leeks",
    slug: "leeks",
    category: "vegetable",
    description:
      "A fall and winter staple in New York, leeks are hardy enough to survive frosts. Available from late summer through early winter at local farms and markets.",
    months: {
      8: "in_season",
      9: "peak",
      10: "peak",
      11: "in_season",
      12: "in_season",
    },
  },
  {
    name: "Lettuce",
    slug: "lettuce",
    category: "vegetable",
    description:
      "A cool-season crop with two prime windows in New York: spring and fall. Local farms grow dozens of varieties, and greenhouse production extends availability into winter.",
    months: {
      4: "in_season",
      5: "peak",
      6: "in_season",
      9: "peak",
      10: "in_season",
      11: "in_season",
    },
  },
  {
    name: "Onions",
    slug: "onions",
    category: "vegetable",
    description:
      "New York's Black Dirt region in Orange County is famous for producing some of the country's best onions. Cured onions keep through winter and are available year-round.",
    months: {
      7: "in_season",
      8: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
      12: "in_season",
      1: "in_season",
      2: "in_season",
    },
  },
  {
    name: "Parsnips",
    slug: "parsnips",
    category: "vegetable",
    description:
      "A cold-tolerant root vegetable that sweetens after frost. New York parsnips are harvested in late fall and available through winter, adding sweetness to soups and roasts.",
    months: {
      10: "in_season",
      11: "peak",
      12: "in_season",
      1: "in_season",
      2: "in_season",
    },
  },
  {
    name: "Peas",
    slug: "peas",
    category: "vegetable",
    description:
      "Sugar snap, snow, and shelling peas are a brief but beloved spring treat in New York. They peak in June and are typically gone by early July.",
    months: { 5: "in_season", 6: "peak", 7: "in_season" },
  },
  {
    name: "Peppers",
    slug: "peppers",
    category: "vegetable",
    description:
      "Sweet and hot peppers thrive in New York's summer heat. Bell, banana, jalapeño, and specialty varieties are available from late July through October.",
    months: { 7: "in_season", 8: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Potatoes",
    slug: "potatoes",
    category: "vegetable",
    description:
      "New York is a major potato-growing state, with Long Island and upstate both producing excellent varieties. From fingerlings to russets, fresh potatoes are available summer through winter.",
    months: {
      7: "in_season",
      8: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
      12: "in_season",
      1: "in_season",
      2: "in_season",
      3: "in_season",
    },
  },
  {
    name: "Radishes",
    slug: "radishes",
    category: "vegetable",
    description:
      "Quick-growing radishes appear early in New York markets. Spring varieties arrive in April; fall radishes including daikon and watermelon radish return in September.",
    months: {
      4: "in_season",
      5: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
    },
  },
  {
    name: "Rutabaga",
    slug: "rutabaga",
    category: "vegetable",
    description:
      "An underappreciated root vegetable well-suited to New York's cold climate. Harvested in fall and stored through winter, rutabaga is sweet and starchy.",
    months: {
      10: "in_season",
      11: "peak",
      12: "in_season",
      1: "in_season",
      2: "in_season",
    },
  },
  {
    name: "Scallions",
    slug: "scallions",
    category: "vegetable",
    description:
      "Among the first greens of the New York season, scallions appear at markets in early spring and continue through fall. Mild and versatile, they're grown by nearly every local farm.",
    months: { 4: "peak", 5: "peak", 6: "in_season", 9: "in_season", 10: "in_season" },
  },
  {
    name: "Spinach",
    slug: "spinach",
    category: "vegetable",
    description:
      "Spinach thrives in New York's cool weather and has two peak seasons: spring and fall. It's one of the first greens at spring markets and one of the last standing before winter.",
    months: {
      4: "peak",
      5: "peak",
      9: "peak",
      10: "in_season",
      11: "in_season",
    },
  },
  {
    name: "Summer Squash",
    slug: "summer-squash",
    category: "vegetable",
    description:
      "Zucchini, yellow squash, and pattypan are summer staples at New York farmers markets. They arrive in July and produce abundantly through September.",
    months: { 7: "in_season", 8: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Sweet Potatoes",
    slug: "sweet-potatoes",
    category: "vegetable",
    description:
      "Sweet potatoes are grown in warmer parts of New York, particularly Long Island. Harvested in fall and cured for storage, they're available through early winter.",
    months: { 9: "in_season", 10: "peak", 11: "in_season", 12: "in_season" },
  },
  {
    name: "Swiss Chard",
    slug: "swiss-chard",
    category: "vegetable",
    description:
      "Rainbow chard and classic Swiss chard are summer staples in New York. Heat-tolerant and productive, they're available from June through October at local farms.",
    months: {
      6: "in_season",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
    },
  },
  {
    name: "Tomatoes",
    slug: "tomatoes",
    category: "vegetable",
    description:
      "New York's summer tomato season is short but spectacular. Heirloom varieties like Brandywine and Cherokee Purple peak in August at farmers markets across the state.",
    months: { 7: "in_season", 8: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Turnips",
    slug: "turnips",
    category: "vegetable",
    description:
      "Baby turnips arrive in spring, while larger fall turnips are harvested after frost, which sweetens their flavor. Available at most New York farmers markets spring and fall.",
    months: {
      5: "in_season",
      6: "in_season",
      9: "peak",
      10: "peak",
      11: "in_season",
    },
  },
  {
    name: "Winter Squash",
    slug: "winter-squash",
    category: "vegetable",
    description:
      "Butternut, acorn, delicata, kabocha, and spaghetti squash are fall staples in New York. Cured and stored, they're available from September through January or beyond.",
    months: {
      9: "in_season",
      10: "peak",
      11: "peak",
      12: "in_season",
      1: "in_season",
    },
  },

  // FRUITS
  {
    name: "Apples",
    slug: "apples",
    category: "fruit",
    description:
      "New York is the second-largest apple-producing state in the US. With over 700 orchards, the Hudson Valley and Finger Lakes produce dozens of varieties from August through November, with storage apples lasting into spring.",
    months: {
      8: "in_season",
      9: "peak",
      10: "peak",
      11: "in_season",
      12: "in_season",
      1: "in_season",
      2: "in_season",
      3: "in_season",
    },
  },
  {
    name: "Blackberries",
    slug: "blackberries",
    category: "fruit",
    description:
      "Wild and cultivated blackberries ripen across New York in late summer. Look for them at farmers markets and u-pick farms from late July through August.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Blueberries",
    slug: "blueberries",
    category: "fruit",
    description:
      "New York blueberries peak in July and August. The Hudson Valley and Long Island have numerous u-pick farms, and the berries are a summer highlight at farmers markets.",
    months: { 6: "in_season", 7: "peak", 8: "peak", 9: "in_season" },
  },
  {
    name: "Cantaloupe",
    slug: "cantaloupe",
    category: "fruit",
    description:
      "New York's summer heat supports melon growing, particularly on Long Island and in the Hudson Valley. Local cantaloupes are intensely fragrant and sweet at peak season.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Cherries",
    slug: "cherries",
    category: "fruit",
    description:
      "Sweet and sour cherries both grow in New York, particularly around the Finger Lakes. The season is brief — June into early July — making them a fleeting summer treasure.",
    months: { 6: "peak", 7: "in_season" },
  },
  {
    name: "Currants",
    slug: "currants",
    category: "fruit",
    description:
      "Red, white, and black currants grow well in New York's climate. A niche but prized summer fruit, available at specialty farms and some farmers markets in July.",
    months: { 7: "peak", 8: "in_season" },
  },
  {
    name: "Elderberries",
    slug: "elderberries",
    category: "fruit",
    description:
      "Elderberries grow wild and cultivated throughout New York State. Harvested in late summer, they're prized for syrups, wines, and preserves.",
    months: { 8: "in_season", 9: "peak" },
  },
  {
    name: "Grapes",
    slug: "grapes",
    category: "fruit",
    description:
      "The Finger Lakes is one of the most celebrated wine regions in the East. Concord, Niagara, and wine grapes all ripen in September and October.",
    months: { 8: "in_season", 9: "peak", 10: "peak", 11: "in_season" },
  },
  {
    name: "Peaches",
    slug: "peaches",
    category: "fruit",
    description:
      "New York peaches from the Hudson Valley are a summer highlight. Freestone and clingstone varieties ripen from late July through September — eat them fresh or make preserves.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Pears",
    slug: "pears",
    category: "fruit",
    description:
      "Bartlett, Bosc, and Seckel pears are grown across New York orchards. They follow the apple harvest, peaking in September and October in the Hudson Valley and Finger Lakes.",
    months: { 8: "in_season", 9: "peak", 10: "peak", 11: "in_season" },
  },
  {
    name: "Plums",
    slug: "plums",
    category: "fruit",
    description:
      "Italian prune plums and other varieties ripen in New York in late summer. A short but rewarding season from late July through September, ideal for jams and baking.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Raspberries",
    slug: "raspberries",
    category: "fruit",
    description:
      "New York has two raspberry seasons: a summer flush in July and a fall crop in September. Both are available at u-pick farms and farmers markets statewide.",
    months: { 6: "in_season", 7: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Rhubarb",
    slug: "rhubarb",
    category: "fruit",
    description:
      "One of the first fruits of the New York season, rhubarb stalks emerge in spring. Tart and versatile, it's prized for pies, jams, and cocktails from May through June.",
    months: { 5: "peak", 6: "in_season" },
  },
  {
    name: "Strawberries",
    slug: "strawberries",
    category: "fruit",
    description:
      "Local strawberries are one of the most anticipated arrivals at New York farmers markets. Shorter and more intensely flavored than supermarket varieties, they peak in June.",
    months: { 5: "in_season", 6: "peak", 7: "in_season" },
  },
  {
    name: "Watermelon",
    slug: "watermelon",
    category: "fruit",
    description:
      "Long Island and the Hudson Valley grow excellent watermelons in the heat of summer. Seedless and seeded varieties are available at farm stands from late July through September.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },

  // HERBS
  {
    name: "Basil",
    slug: "basil",
    category: "herb",
    description:
      "A heat-loving herb that thrives in New York's summers. Fresh basil is abundant at farmers markets from July through September — ideal for pesto and caprese.",
    months: { 6: "in_season", 7: "peak", 8: "peak", 9: "in_season" },
  },
  {
    name: "Cilantro",
    slug: "cilantro",
    category: "herb",
    description:
      "A cool-weather herb grown in New York's spring and fall. Cilantro bolts quickly in summer heat, so the best local bunches appear at markets in May and September.",
    months: { 4: "in_season", 5: "peak", 9: "peak", 10: "in_season" },
  },
  {
    name: "Dill",
    slug: "dill",
    category: "herb",
    description:
      "Dill is a New York farmers market staple, especially during pickle season. Available spring through fall, it thrives in cooler weather and is often sold in fragrant bouquets.",
    months: {
      5: "in_season",
      6: "peak",
      7: "in_season",
      8: "in_season",
      9: "in_season",
    },
  },
  {
    name: "Mint",
    slug: "mint",
    category: "herb",
    description:
      "Mint grows prolifically across New York from spring through fall. Spearmint, peppermint, and chocolate mint varieties are available at farmers markets through October.",
    months: {
      5: "in_season",
      6: "peak",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
    },
  },
  {
    name: "Parsley",
    slug: "parsley",
    category: "herb",
    description:
      "Flat-leaf and curly parsley are both grown in New York through the growing season. Hardy and cold-tolerant, parsley lingers at markets well into fall.",
    months: {
      5: "in_season",
      6: "peak",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
    },
  },
  {
    name: "Ramps",
    slug: "ramps",
    category: "herb",
    description:
      "Wild ramps (Allium tricoccum) are a celebrated spring delicacy foraged from New York's forests. Their season is fleeting — just two to three weeks in April and May.",
    months: { 4: "peak", 5: "in_season" },
  },
  {
    name: "Thyme",
    slug: "thyme",
    category: "herb",
    description:
      "A perennial herb grown across New York farms. Fresh thyme is available from late spring through fall, and dried thyme is produced locally year-round.",
    months: {
      5: "in_season",
      6: "peak",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
    },
  },

  // MUSHROOMS
  {
    name: "Chanterelles",
    slug: "chanterelles",
    category: "mushroom",
    description:
      "Golden chanterelles are foraged from New York's forests after summer rains. A prized wild mushroom available July through September at specialty markets and some farmers markets.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
  {
    name: "Hen of the Woods",
    slug: "hen-of-the-woods",
    category: "mushroom",
    description:
      "Maitake (hen of the woods) is both foraged wild and cultivated in New York. A stunning fall mushroom prized in Japanese and American cooking, at peak in October.",
    months: { 9: "in_season", 10: "peak", 11: "in_season" },
  },
  {
    name: "Morel Mushrooms",
    slug: "morel-mushrooms",
    category: "mushroom",
    description:
      "Morels are among the most sought-after wild mushrooms in New York. Foraged from forests in May, their season is brief and supply is limited — a true spring delicacy.",
    months: { 4: "in_season", 5: "peak" },
  },
  {
    name: "Oyster Mushrooms",
    slug: "oyster-mushrooms",
    category: "mushroom",
    description:
      "Blue and golden oyster mushrooms are cultivated year-round by New York mushroom farms. Available at farmers markets throughout the year, they're among the most accessible local mushrooms.",
    months: {
      1: "in_season",
      2: "in_season",
      3: "in_season",
      4: "in_season",
      5: "in_season",
      6: "in_season",
      7: "in_season",
      8: "in_season",
      9: "in_season",
      10: "in_season",
      11: "in_season",
      12: "in_season",
    },
  },
  {
    name: "Shiitake Mushrooms",
    slug: "shiitake-mushrooms",
    category: "mushroom",
    description:
      "Shiitake mushrooms are cultivated on log farms throughout New York State. Available at markets year-round, with peak availability in spring and fall when conditions are ideal.",
    months: {
      1: "in_season",
      2: "in_season",
      3: "in_season",
      4: "peak",
      5: "peak",
      6: "in_season",
      7: "in_season",
      8: "in_season",
      9: "peak",
      10: "peak",
      11: "in_season",
      12: "in_season",
    },
  },

  // OTHER
  {
    name: "Corn (Popcorn)",
    slug: "popcorn-corn",
    category: "other",
    description:
      "Heirloom popcorn varieties are grown on small New York farms and sold dried at fall markets. Glass Gem and other colorful varieties are popular at harvest season.",
    months: { 10: "peak", 11: "in_season" },
  },
  {
    name: "Honey",
    slug: "honey",
    category: "other",
    description:
      "New York has a thriving beekeeping community. Local honey varies in flavor by region — Hudson Valley buckwheat honey is dark and robust, while Finger Lakes honey is floral and light.",
    months: {
      1: "in_season",
      2: "in_season",
      3: "in_season",
      4: "in_season",
      5: "in_season",
      6: "in_season",
      7: "peak",
      8: "peak",
      9: "in_season",
      10: "in_season",
      11: "in_season",
      12: "in_season",
    },
  },
  {
    name: "Maple Syrup",
    slug: "maple-syrup",
    category: "other",
    description:
      "New York is the second-largest maple syrup producer in the US. Tapping runs in late winter and early spring when days are warm and nights are still freezing.",
    months: { 2: "in_season", 3: "peak", 4: "in_season" },
  },
  {
    name: "Sunflowers",
    slug: "sunflowers",
    category: "other",
    description:
      "Sunflowers are grown across New York for cut flowers and seeds. Fields burst into bloom in late summer, and u-pick sunflower farms draw visitors from across the region.",
    months: { 7: "in_season", 8: "peak", 9: "in_season" },
  },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_SLUGS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export function getMonthNumber(slug: string): number {
  return MONTH_SLUGS.indexOf(slug.toLowerCase()) + 1;
}

export function getMonthSlug(monthNumber: number): string {
  return MONTH_SLUGS[monthNumber - 1];
}

export function getProduceForMonth(monthNumber: number): {
  peak: ProduceItem[];
  in_season: ProduceItem[];
  coming_next: ProduceItem[];
} {
  const nextMonth = monthNumber === 12 ? 1 : monthNumber + 1;

  const peak = PRODUCE.filter((p) => p.months[monthNumber] === "peak");
  const in_season = PRODUCE.filter(
    (p) => p.months[monthNumber] === "in_season"
  );
  const coming_next = PRODUCE.filter(
    (p) =>
      !p.months[monthNumber] &&
      (p.months[nextMonth] === "peak" || p.months[nextMonth] === "in_season")
  );

  return { peak, in_season, coming_next };
}

export function getProduceBySlug(slug: string): ProduceItem | undefined {
  return PRODUCE.find((p) => p.slug === slug);
}

export function getMonthsForProduce(slug: string): {
  monthName: string;
  season: Season;
}[] {
  const item = getProduceBySlug(slug);
  if (!item) return [];
  return Object.entries(item.months)
    .map(([month, season]) => ({
      monthName: MONTHS[parseInt(month) - 1],
      season: season as Season,
      monthNum: parseInt(month),
    }))
    .sort((a, b) => a.monthNum - b.monthNum)
    .map(({ monthName, season }) => ({ monthName, season }));
}
