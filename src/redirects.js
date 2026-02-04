// Place redirects here.
const redirects = {
  // '/example': '/new-example'
};

// Very old posts were written on a platform that added IDs to the URLs. Here
// is a mapping of those IDs and the slugs to create redirects. This mapping,
// plus the logic below will creating redirects from, for example:
// /the-table-481c0f2b442d -> /the-table
const oldPosts = [
  { id: "c072433f8d9e", slug: "vue-online-store-with-shopping-cart" },
  { id: "6bb4985c5253", slug: "api-server-with-jwt-authentication" },
  { id: "8d6d858c1e40", slug: "windows-xp-malware-cleanup" },
  { id: "481c0f2b442d", slug: "the-table" },
  { id: "5430527353c8", slug: "interactive-maps-with-vue-leaflet" },
  { id: "3e0a3dd25285", slug: "creating-a-photo-gallery-with-vue-css-grid" },
  { id: "7cb89f0d09ea", slug: "html5-new-features" },
  { id: "ecdc8b8388a4", slug: "the-basics-of-modular-javascript-npm-packages" },
  {
    id: "2d9c446ea0ab",
    slug: "create-a-bouncing-message-notification-icon-from-scratch-with-svg-css",
  },
  { id: "a4621e17532b", slug: "ordered-lists-in-html" },
  { id: "ba6b8daacfae", slug: "getting-started-with-r-on-windows" },
  {
    id: "18ee721136f9",
    slug: "zero-to-typescript-developer-using-visual-studio-code-on-ubuntu",
  },
  { id: "588a3c1677af", slug: "google-style-gauge-charts-using-d3" },
  { id: "ccf67957d77f", slug: "data-by-geographic-distance" },
  {
    id: "4f8fea489f80",
    slug: "passing-data-between-classes-components-in-react",
  },
  { id: "b9cd549e4686", slug: "sunrise-block-clock" },
  {
    id: "95d3490e3a6f",
    slug: "what-did-i-learn-this-week-knex-js-bookshelf-js",
  },
  { id: "a1b34e5e1d60", slug: "unix-commands" },
  { id: "87742b8c41e4", slug: "my-codevember-2017-pens" },
  { id: "4d2e7ba8d2fc", slug: "form-validation-with-vue-js" },
  { id: "5fdfd60d1116", slug: "customizing-bootstrap-styles-step-by-step" },
  {
    id: "404ee7df4242",
    slug: "creating-a-system-tray-icon-to-display-the-current-ether-usd-market-price",
  },
  { id: "cabdcde7dfd1", slug: "buttons-with-custom-shapes" },
  { id: "1186f61c659e", slug: "netlify-lambda-functions-from-scratch" },
  { id: "cc7717a32608", slug: "day-to-day-source-control" },
  { id: "a9f443a65819", slug: "my-first-competition-as-a-hackathon-noob" },
  { id: "221f083aadbc", slug: "using-the-options-object-js-pattern" },
  { id: "7ef4f81ad675", slug: "introducing-the-diabetes-food-database" },
  {
    id: "33301291b6db",
    slug: "dealing-with-asynchronous-functions-in-javascript",
  },
  { id: "90507cb27ef2", slug: "d3-line-chart-with-forecast" },
  { id: "8ce1d2ed8a4c", slug: "creating-a-responsive-header-image" },
  { id: "b539a89e5649", slug: "removing-parts-of-shapes-in-svg" },
  { id: "f741640a97d5", slug: "create-animated-icons-using-css" },
  { id: "1ef2d4aeede6", slug: "semantic-versioning-with-git-tags" },
  { id: "a41417beda8a", slug: "self-contained-d3-bar-chart-function" },
  { id: "e5b7422be676", slug: "self-contained-d3-pie-chart-function" },
  { id: "e8a33294362d", slug: "reacting-to-data-changes-in-d3-using-vue" },
  { id: "d3fdec764145", slug: "build-a-sparkline-vue-component" },
  { id: "f3230732c741", slug: "visualizing-google-sheets-data-in-d3" },
  { id: "8bbc9c26c401", slug: "building-a-sparkline-dashboard" },
  {
    id: "f29765a771a3",
    slug: "getting-started-with-vue-single-file-components",
  },
  {
    id: "63837e075f69",
    slug: "using-javascript-to-work-with-spreadsheets-part-3-accepting-arguments-reading-files",
  },
  {
    id: "92bbc0a45f27",
    slug: "using-javascript-to-work-with-spreadsheets-part-4-making-the-cli-more-robust",
  },
  {
    id: "c5ac049568fd",
    slug: "using-javascript-to-work-with-spreadsheets-part-5-parsing-xlsx-files",
  },
  {
    id: "acee318b6759",
    slug: "reverse-proxying-node-js-apps-on-windows-with-iis",
  },
  { id: "3fb2a99b7b03", slug: "backbone-js" },
  { id: "ebcfe913dce8", slug: "web-fonts" },
  {
    id: "1d31cb14b564",
    slug: "increasingly-higher-level-hello-world-with-node",
  },
  {
    id: "5e39eec29c78",
    slug: "a-recent-technical-challenge-i-experienced-with-pc-hardware",
  },
  { id: "b2857451f505", slug: "building-upon-javascript-with-typescript" },
  {
    id: "8975e4cec9f8",
    slug: "should-you-name-variables-based-on-their-content-or-their-purpose",
  },
  { id: "53c1ff615b8f", slug: "make-single-spacing-default-in-word-2007" },
  { id: "39f4f3190c6b", slug: "windows-xp-startup-and-shutdown-notifications" },
  { id: "9f636e33bc83", slug: "troubleshoot-internet-connection-problems" },
  { id: "4b15698410fc", slug: "javascript-reference-objects" },
  { id: "4ab0450a5553", slug: "jquery-expire" },
  { id: "9505fd1d6b4", slug: "version-control" },
  { id: "1ae05d0fe66c", slug: "node-js" },
  { id: "f35f0b101a21", slug: "jquery" },
  { id: "54522710ed4d", slug: "nosql-mongodb" },
  { id: "8f4a85910c16", slug: "sql-as-understood-by-sqlite" },
  { id: "5ceede70875", slug: "import-contacts-into-outlook-from-an-email" },
  { id: "9163c0ddab81", slug: "greater-than-less-than-formatting-in-excel" },
  { id: "3bd3dfa88bfb", slug: "shrinkwrapped-list-with-css" },
  { id: "d705ae8a7daf", slug: "parallaxbg" },
  { id: "f2265f7239a0", slug: "from-the-archive-960-grid-system" },
  { id: "d7c2fc6bbaa0", slug: "composition-immutability-in-javascript" },
  { id: "98ad20f4ec2e", slug: "xcopy-options-for-backup" },
  { id: "a9b81695fdaf", slug: "javascript-reference-closures" },
  { id: "75c7dcbdfbad", slug: "browser-standards-implementation" },
  { id: "9ce6af95fbe4", slug: "web-accessibility" },
  { id: "26fd0d1a6cb7", slug: "https-ssl-tls" },
  {
    id: "28af49535313",
    slug: "enable-file-and-printer-sharing-across-subnets",
  },
  {
    id: "7490fa937bde",
    slug: "increase-concurrent-connections-in-windows-server-2000",
  },
  { id: "8089d6c16511", slug: "javascript-slideshow-with-no-dependencies" },
  { id: "1d4c8e651f1e", slug: "what-excites-me-about-coding" },
  { id: "9b9037ec2c97", slug: "building-a-random-within-range-function" },
  {
    id: "18b2a7febd8a",
    slug: "recreate-the-google-loading-animation-using-only-css",
  },
  { id: "15ce4a9fa856", slug: "updating-dynamic-data-in-d3" },
  { id: "16ef95a9e444", slug: "getting-browser-width-height" },
  {
    id: "76f374e9e608",
    slug: "what-considerations-do-i-make-while-building-a-web-application-or-site",
  },
  { id: "ef1f5467bae9", slug: "welcome-to-the-redesigned-blog" },
  { id: "40e9b0a7a41a", slug: "simple-jquery" },
  {
    id: "e305f2c951da",
    slug: "creating-a-node-js-proxy-to-secure-your-third-party-api-key",
  },
  { id: "d8fa0118ee48", slug: "removing-conficker-downadup" },
  { id: "caeb96bef7e8", slug: "using-mssql-with-classic-asp" },
  {
    id: "e212e9589679",
    slug: "fireflies-with-canvas-and-requestanimationframe",
  },
  { id: "ae50cd698279", slug: "preventing-csrf-attacks-in-coldfusion-9" },
  { id: "bad55929c308", slug: "using-css-media-queries-for-responsive-design" },
  { id: "debd4e1274fb", slug: "visualizing-svg-elements" },
  {
    id: "34be581ddb0",
    slug: "redux-by-example-combined-reducer-with-action-creators",
  },
  {
    id: "65ebe7b552bd",
    slug: "link-directly-to-googles-i-m-feeling-lucky-feature",
  },
  { id: "2b9359c68187", slug: "fake-identity" },
  {
    id: "67c960a0fcd3",
    slug: "i-started-naming-all-my-anonymous-functions-and-you-should-too",
  },
  { id: "7c2a7c144308", slug: "responsive-buttons-with-bootstrap" },
  {
    id: "7843670c6022",
    slug: "creating-a-front-end-for-working-with-your-api-proxy",
  },
  { id: "25142062abf0", slug: "using-grunt-with-travis-ci" },
  { id: "77406e8ec66b", slug: "boilerplate-classic-asp-page" },
  {
    id: "5bc058828241",
    slug: "access-the-browsers-query-string-as-a-javascript-object",
  },
  {
    id: "e720256edcee",
    slug: "integrating-multiple-stylesheets-in-a-single-site",
  },
  { id: "d7d55d8af8f6", slug: "my-preferred-development-environment" },
  { id: "57f978b10bd7", slug: "using-computed-getters-setters-in-vue" },
  { id: "9645317ea544", slug: "programming-fonts" },
  {
    id: "972a2bf69d71",
    slug: "why-it-is-better-to-serve-site-assets-from-multiple-domains",
  },
  { id: "846ebdf11c4e", slug: "stacked-bar-chart-with-chart-js" },
  { id: "3936728c8bd", slug: "sql-query-for-counting-records-per-day" },
  {
    id: "a68c89facb37",
    slug: "a-small-function-to-convert-a-list-of-id-strings-into-a-dictionary-of-jquery-objects",
  },
  {
    id: "56eb2c9f371b",
    slug: "add-localstorage-to-your-vue-app-in-2-lines-of-code",
  },
  { id: "2310f1b151d4", slug: "vue-svg" },
  {
    id: "a57cf642b84a",
    slug: "building-json2table-turn-json-into-an-html-table",
  },
  { id: "7c94d3586744", slug: "some-design-tweaks-for-project-gutenberg" },
  { id: "6f286da5b6a5", slug: "responsive-scrim" },
  { id: "22525d797f3d", slug: "my-title-boxing-club-schedule-scraper" },
  { id: "98c2a30e0ed0", slug: "adding-bootstrap-to-a-vue-cli-project" },
  { id: "1fd5e5a43523", slug: "setting-up-prettier-on-vs-code" },
  { id: "405a68d8f994", slug: "contributing-code-on-github" },
  { id: "f2f088a47750", slug: "populate-select-via-ajax" },
  {
    id: "aa3ab75bcc1c",
    slug: "setting-up-eslint-on-vs-code-with-javascript-standard-style",
  },
  {
    id: "fdb236afdf82",
    slug: "what-if-a-project-uses-tabs-and-you-use-spaces",
  },
  { id: "ffd5e158c58a", slug: "shorten-functions-with-es6-features" },
  { id: "faf2eb89369e", slug: "rapid-prototyping-with-css-keyword-colors" },
  {
    id: "c0d0f379854f",
    slug: "the-importance-of-standards-and-standards-bodies-in-web-development",
  },
  {
    id: "5f6c81797d44",
    slug: "3-ways-a-front-end-developer-can-reduce-page-load",
  },
  { id: "382507f9ff6a", slug: "update-from-another-table-in-sql" },
  { id: "89f1839c01f5", slug: "just-for-fun-the-lol-id" },
  { id: "58a2040b6efa", slug: "npm-package-store" },
  { id: "3636f2325791", slug: "need-part-of-a-string-just-use-slice" },
  {
    id: "4842a41420fe",
    slug: "responsive-grid-in-2-minutes-with-css-grid-layout",
  },
  { id: "2ebd4b29ad30", slug: "delaying-foreach-iterations" },
  {
    id: "7a90aca05f1f",
    slug: "build-deploy-serverless-functions-in-5-minutes",
  },
  { id: "f096e7bcaf7", slug: "combine-multiple-powershell-commands-into-one" },
  {
    id: "98ccc40e376b",
    slug: "introducing-csval-an-open-source-csv-data-validator",
  },
  {
    id: "6eb78a535ba6",
    slug: "setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide",
  },
  {
    id: "9074c6befb10",
    slug: "using-javascript-to-work-with-spreadsheets-part-1-the-shape-of-the-data",
  },
  {
    id: "84e0f410210a",
    slug: "using-javascript-to-work-with-spreadsheets-part-2-setting-up-the-workspace",
  },
  { id: "64008ffc2013", slug: "excel-formula-to-scale-data-from-0-to-1" },
  {
    id: "720f365dcb16",
    slug: "some-ways-to-align-the-last-row-in-a-flexbox-grid",
  },
];

// Create a mapping of old URLs to new URLs.
/** @type {Record<string, string>} */
const oldPostMapping = Object.fromEntries(
  oldPosts.map((post) => [`/${post.slug}-${post.id}`, `/${post.slug}`]),
);

// Merge regular redirects with old post redirects.
const allRedirects = { ...redirects, ...oldPostMapping };

export { allRedirects as redirectMapping };
