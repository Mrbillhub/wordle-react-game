// Word list for Wordle game
export const WORD_LIST = [
  'APPLE', 'BRAVE', 'CHAIR', 'DANCE', 'EARTH', 'FIELD', 'GRACE', 'HOUSE', 'IMAGE', 'JOINT',
  'KNIFE', 'LIGHT', 'MUSIC', 'NORTH', 'OCEAN', 'PAPER', 'QUEEN', 'RADIO', 'STONE', 'TIGER',
  'ULTRA', 'VOICE', 'WATER', 'XENON', 'YOUTH', 'ZEBRA', 'BEACH', 'CLOUD', 'DREAM', 'EAGLE',
  'FLAME', 'GIANT', 'HAPPY', 'INDEX', 'JUICE', 'KELLY', 'LOGIC', 'MAGIC', 'NOVEL', 'OFFER',
  'PIANO', 'QUEST', 'ROBOT', 'SMILE', 'TRAIN', 'UNDER', 'VIDEO', 'WORLD', 'EXTRA', 'YOUNG',
  'BLANK', 'CLEAN', 'DONUT', 'ENJOY', 'FRESH', 'GREEN', 'HEART', 'IDEAL', 'JEWEL', 'KNOWN',
  'LEARN', 'MONTH', 'NIGHT', 'ORGAN', 'PLANT', 'QUICK', 'RIVER', 'SOUND', 'TOUCH', 'UNITY',
  'VALUE', 'WASTE', 'WORTH', 'YIELD', 'ZONES', 'ALARM', 'BRIEF', 'CHESS', 'DEPTH', 'EVENT',
  'FACTS', 'GOODS', 'HORSE', 'ITEMS', 'JOKES', 'KINDS', 'LOADS', 'MIGHT', 'NOISE', 'OPENS',
  'PARTS', 'QUIET', 'READS', 'SHOPS', 'THOSE', 'USERS', 'VIEWS', 'WALKS', 'WORKS', 'YEARS'
];

export const VALID_WORDS = [...WORD_LIST, 
  'ABOUT', 'ABOVE', 'ADDED', 'AFTER', 'AGAIN', 'AHEAD', 'ALONE', 'ALONG', 'APART', 'AREAS',
  'ASKED', 'BASED', 'BASIC', 'BEGAN', 'BEING', 'BELOW', 'BIKES', 'BIRTH', 'BLACK', 'BOARD',
  'BREAD', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'CALLS', 'CARDS', 'CARRY',
  'CASES', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD',
  'CHINA', 'CHOSE', 'CLEAR', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOTH', 'CLUBS', 'COACH', 'COAST',
  'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS',
  'CROWD', 'DAILY', 'DEALS', 'DEATH', 'DOING', 'DOORS', 'DOUBT', 'DRAFT', 'DRAMA', 'DRANK',
  'DRAWN', 'DRESS', 'DRINK', 'DRIVE', 'DROVE', 'DRUGS', 'DRUNK', 'EARLY', 'EMPTY', 'ENEMY',
  'ENJOY', 'ENTRY', 'EQUAL', 'ERROR', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FACES', 'FACTS',
  'FAITH', 'FALSE', 'FAULT', 'FEARS', 'FIELD', 'FIGHT', 'FINAL', 'FINDS', 'FIRST', 'FIXED',
  'FLAGS', 'FLAT', 'FLOOR', 'FOCUS', 'FOODS', 'FORCE', 'FORMS', 'FORTH', 'FOUND', 'FRAME',
  'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GLASS', 'GIVEN', 'GOALS',
  'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEK', 'GROSS',
  'GROUP', 'GROWN', 'GUARD', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HELPS',
  'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOURS', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX',
  'INNER', 'INPUT', 'ISSUE', 'ITEMS', 'JAPAN', 'JIMMY', 'JOINS', 'JONES', 'JUDGE', 'KNOWN',
  'LACKS', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEADS', 'LEARN', 'LEAST', 'LEAVE',
  'LEGAL', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINES', 'LINKS', 'LISTS', 'LIVED', 'LIVES',
  'LOCAL', 'LOOKS', 'LOOSE', 'LOVED', 'LOVER', 'LOVES', 'LOWER', 'LUCKY', 'LUNCH', 'LYING',
  'MAGIC', 'MAJOR', 'MAKER', 'MAKES', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEALS',
  'MEANS', 'MEANT', 'MEDIA', 'MEETS', 'MEMBER', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED',
  'MODEL', 'MONEY', 'MONTH', 'MOORE', 'MORAL', 'MOUSE', 'MOUTH', 'MOVED', 'MOVES', 'MOVIE',
  'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOTES', 'NOVEL',
  'NURSE', 'OCCUR', 'OCEAN', 'ODDS', 'OFFER', 'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'OWNED',
  'OWNER', 'PAGES', 'PAINT', 'PANEL', 'PAPER', 'PARKS', 'PARTS', 'PARTY', 'PASTA', 'PEACE',
  'PETER', 'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN',
  'PLANE', 'PLANT', 'PLATE', 'PLAYS', 'PLAZA', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE',
  'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK',
  'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READS', 'READY',
  'REALM', 'REFER', 'RIGHT', 'RINGS', 'RISEN', 'RIVER', 'ROADS', 'ROBOT', 'ROGER', 'ROMAN',
  'ROOMS', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RULES', 'RURAL', 'SAFER', 'SALES', 'SCALE',
  'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP',
  'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN',
  'SHOWS', 'SIDES', 'SIGHT', 'SIGNS', 'SILLY', 'SINCE', 'SITES', 'SIXTY', 'SIZED', 'SKILL',
  'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SNAKE', 'SNOW', 'SOLID',
  'SOLVE', 'SONGS', 'SORRY', 'SORTS', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED',
  'SPEND', 'SPENT', 'SPLIT', 'SPOKE', 'SPORT', 'SQUAD', 'STAFF', 'STAGE', 'STAKE', 'STAND',
  'START', 'STATE', 'STAYS', 'STEAM', 'STEEL', 'STEPS', 'STICK', 'STILL', 'STOCK', 'STONE',
  'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR',
  'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN', 'TAKES', 'TALKS', 'TANKS', 'TASTE', 'TAXES',
  'TEACH', 'TEAMS', 'TEENS', 'TEETH', 'TELLS', 'TERMS', 'TESTS', 'THANK', 'THEFT', 'THEIR',
  'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW',
  'THROW', 'THUMB', 'TIGHT', 'TILES', 'TIMES', 'TIRED', 'TITLE', 'TODAY', 'TOOLS', 'TOOTH',
  'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH', 'TOURS', 'TOWER', 'TOWNS', 'TRACK', 'TRADE', 'TRAIL',
  'TRAIN', 'TRAIT', 'TRASH', 'TREAT', 'TREES', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED',
  'TRIES', 'TRIPS', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST', 'TRUTH', 'TWICE', 'TWIST', 'TYPES',
  'ULTRA', 'UNCLE', 'UNDER', 'UNION', 'UNITS', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN',
  'URGED', 'USAGE', 'USERS', 'USING', 'USUAL', 'VALUE', 'VIDEO', 'VIEWS', 'VIRUS', 'VISIT',
  'VITAL', 'VOICE', 'WASTE', 'WATCH', 'WATER', 'WAVES', 'WHOLE', 'WHOSE', 'WIDTH', 'WINDS',
  'WINES', 'WINGS', 'WIRED', 'WIRES', 'WOMAN', 'WOMEN', 'WORDS', 'WORKS', 'WORLD', 'WORRY',
  'WORSE', 'WORST', 'WORTH', 'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YEARS', 'YOUNG', 'YOURS',
  'YOUTH', 'ZONES'
];

// Get a random word from the word list
export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
  return WORD_LIST[randomIndex];
};

// Check if a word is valid
export const isValidWord = (word) => {
  return VALID_WORDS.includes(word.toUpperCase());
};
