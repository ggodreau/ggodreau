export const projects = {
  sectionTitle: "",
  icon: null,
  description:
    "Here are some projects I've worked on in the past, grouped by client. Drop me a line if you have any questions.",
  categories: [
    {
      name: "General Assembly",
      list: [
        {
          url: "https://us-central1-imag-178020.cloudfunctions.net/gacloud",
          title: "Diff Tool",
          description:
            "Tool to manage version diffing of json-based curriculum for General Assembly. Fully serverless, runs in node and flask within GCP cloud functions."
        },
        {
          url: "https://github.com/ggodreau/adventureworks",
          title: "SQL to Postgres",
          description:
            "Script to translate the Microsoft SQL Server 2014 OLTP AdventureWorks database to Postgres. This was deployed into Redshift initially and eventually migrated to RDS and local client install within docker. Currently being used within all classroom and enterprise curriculum."
        },
        {
          url: "https://github.com/ggodreau/profanityParser",
          title: "Profanity Parser",
          description:
            "This was used to parse, annotate, prioritize, and clean curriculum with foul language and content for sentitive audiences. Used on hundreds of thousands of lines of mixed code and media with a fault-tolerant processing pipeline."
        }
      ]
    },
    {
      name: "XTOL",
      list: [
        {
          url: "https://github.com/ggodreau/huhdewp",
          title: "Hadoop EMR Common Crawl",
          description:
            "AWS Elastic Map Reduce job designed to stream and parse the common crawl for sentiment analysis of cellular phones. Used for market research for cellular providers."
        }
      ]
    },
    {
      name: "Maishelf",
      list: [
        {
          url: "https://github.com/ggodreau/tfapi",
          title: "NLP Tensorflow API",
          description:
            "NLP sentiment analysis API running with tensorflow and web.py in docker. Used for a lightning talk."
        },
        {
          url: "https://github.com/ggodreau/emojis",
          title: "Git Auto-Emojier",
          description:
            "Script to automatically input random emojis into git commit messages."
        },
        {
          url: "https://github.com/ggodreau/ga/blob/master/task1/task1.ipynb",
          title: "Wisconsin Breast Cancer Analysis",
          description:
            "Analysis of breast cancer malignancy (binary classification) within pandas and scikit-learn"
        },
        {
          url:
            "https://github.com/ggodreau/diamonds/blob/master/diamonds.ipynb",
          title: "Diamond Analysis",
          description:
            "Tool created to predict quality and price of a diamond based on physical features."
        }
      ]
    }
  ]
};

export default projects;
