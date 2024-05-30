import express from 'express';

const app = express();
const port = 4000;

// Some partner data
const partners = {
  "LLB": {
    "Name": "Lucy's Love Bus",
    "URL": "https://lucyslovebus.org/",
    "Logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
    "Description": "Lucy’s Love Bus improves quality of life for children with cancer or other life-threatening illnesses with integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s pain and anxiety during and after traditional medical treatments.",
    "IsActive": 1
  },

  "SFTT": {
    "Name": "Speak For The Trees",
    "URL": "https://treeboston.org/",
    "Logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/speakforthetrees_logo_original_RGB.jpg",
    "Description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees.",
    "IsActive": 1
  },

  "HATS": {
    "Name": "Hands Across the Sea",
    "URL": "https://www.handsacrossthesea.net/",
    "Logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/HandsLogo.jpg",
    "Description": "Hands Across the Sea is a non-profit organization founded in 2007 to advance childhood literacy in the Eastern Caribbean. The organization rejuvenates and stocks school libraries with new books, and its Caribbean Literacy and School Support (CLASS) program helps sustain student reading gains by empowering teachers and students to operate high-functioning lending libraries. Over the years, Hands Across the Sea has placed more than half a million new books in 883 schools and 55 community libraries. The organization is recognized as the leading literacy non-governmental organization in the Islands, and is a member of the Organization of Eastern Caribbean States (OECS) Regional Education Group and a Development Partnership to the OECS Education Management Unit (EDMU), allowing it to work in partnership with regional education organizations.",
    "IsActive": 1
  },

  "JPAL": {
    "Name": "J-PAL",
    "URL": "https://www.povertyactionlab.org/",
    "Logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/JPAL_logo.svg",
    "Description": "The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a global research center working to reduce poverty by ensuring that policy is informed by scientific evidence. J-PAL works with the New York City Department of Youth and Community Development, which runs the country's largest summer youth employment program, to evaluate the impact of recommendation letters on participants’ educational and employment outcomes after the program.",
    "IsActive": 1
  },

  "LBFOTE": {
    "Name": "Little Brothers Friends of the Elderly",
    "URL": "https://lbfeboston.org/",
    "Logo": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LBFE_logo.png",
    "Description": "LBFE Boston is a non-profit organization committed to preventing and relieving isolation and loneliness among older adults living in public/affordable housing. They offer weekly programs and collaborate with senior housing, centers, and local colleges to build inclusive, intergenerational communities and connect the young and old in the spirit of friendship.",
    "IsActive": 1
  },

  "TSWGO": {
    "Name": "This Star Won't Go Out",
    "URL": "https://www.tswgo.org/",
    "Logo": "https://images.squarespace-cdn.com/content/v1/5afe1b373e2d09d58a8b7629/1548818988674-PNHSLS67AF1SRNW6JAX4/LOGO_TSWGO_1.png?format=1500w",
    "Description": "Since its founding in 2011, TSWGO has helped hundreds of families, with gifts totaling over $450,000 to help families suffering from financial hardship related to childhood cancer.",
    "IsActive": 1
  },

  "COC": {
    "Name": "City of Cambridge",
    "URL": "https://www.cambridgema.gov/",
    "Logo": "https://www.cambridgema.gov/~/media/Images/sharedimages/cityseal/cityseal?mw=1920",
    "Description": "Working with officials from the City of Cambridge, MA",
    "IsActive": 1
  },

  "Breaktime": {
    "Name": "Breaktime",
    "URL": "https://www.breaktime.org/",
    "Logo": "https://static.wixstatic.com/media/1193ef_371853f9145b445fb883f16ed7741b60~mv2.jpg/v1/crop/x_0,y_2,w_1842,h_332/fill/w_466,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Breaktime%20Logo%20Comfortaa-2.jpg",
    "Description": "Breaktime’s mission is to break the cycle of homelessness by equipping young adults with the job and financial security they need to establish housing security. A key part of the program is by providing meaningful employment.",
    "IsActive": 1
  }
}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json())
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

app.get('/', (req, res) => {
  res.status(200).send(partners);
})

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})