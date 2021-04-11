const BLOCK_TYPES = [`h1`, `h2`, `h3`, `p`, `img`];
const CONTAINER_TYPES = [`header`, `content`, `footer`];
const MOCK_TITLES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  `Pellentesque mattis dictum nisl, ac viverra neque varius at`,
  `Phasellus pretium sapien nec tincidunt rhoncus`,
  `Nullam blandit egestas sem, in convallis lorem fringilla nec`,
  `Nunc non lacus sem`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  `Nulla ultricies enim in luctus pharetra`,
  `Interdum et malesuada fames ac ante ipsum primis in faucibus`,
  `Cras dignissim aliquet pulvinar`,
];
const MOCK_IMAGES = [
  `https://www.clipart.com/siteimages/articles/article1.jpg`,
  `https://cdn.pixabay.com/photo/2018/05/21/12/49/clipart-3418189__340.png`,
  `https://cdn.pixabay.com/photo/2017/08/31/21/04/tree-2702309__340.png`,
  `https://cdn.pixabay.com/photo/2016/03/31/15/03/background-1292966__340.png`,
  `https://cdn.pixabay.com/photo/2015/02/27/19/06/ornament-652581__340.jpg`,
  `https://cdn.pixabay.com/photo/2016/04/04/22/20/bart-1308396__340.png`,
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElementFromArray(list) {
  return list[getRandomNumber(list.length)];
}

function generateData(count = 10) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const id = getRandomNumber(1000000);
    const type = getRandomElementFromArray(BLOCK_TYPES);

    let source = [];

    if (type === `img`) {
      source = MOCK_IMAGES;
    } else {
      source = MOCK_TITLES;
    }

    const content = getRandomElementFromArray(source);
    const container = getRandomElementFromArray(CONTAINER_TYPES);

    const item = {
      id,
      type,
      content,
      container,
    };

    result.push(item);
  }

  return result;
}
