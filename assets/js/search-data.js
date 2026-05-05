// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/nan-liu.com/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Author names matching Liu, N. are highlighted in bold.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/publications/";
          },
        },{id: "nav-media",
          title: "media",
          description: "News articles, interviews, and press coverage of my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/media/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/news/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nan-liu.com/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/nan-liu.com/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/nan-liu.com/blog/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/nan-liu.com/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/nan-liu.com/books/the_godfather/";
            },},{id: "news-joined-washington-university-in-st-louis-as-research-assistant-professor-in-the-department-of-physics",
          title: 'Joined Washington University in St. Louis as Research Assistant Professor in the Department...',
          description: "",
          section: "News",},{id: "news-published-in-science-advances-late-formation-of-silicon-carbide-in-type-ii-supernovae-covered-widely-in-press-by-carnegie-science-sciencedaily-phys-org-and-space-com",
          title: 'Published in Science Advances: Late formation of silicon carbide in Type II supernovae...',
          description: "",
          section: "News",},{id: "news-began-affiliation-with-carnegie-earth-amp-amp-planets-laboratory-as-visiting-investigator-ongoing",
          title: 'Began affiliation with Carnegie Earth &amp;amp;amp; Planets Laboratory as Visiting Investigator (ongoing).',
          description: "",
          section: "News",},{id: "news-brown-bag-talk-and-department-colloquium-at-the-university-of-arizona-planetary-sciences-laboratory-astrophysics-isotopic-and-structural-analysis-of-presolar-sic",
          title: 'Brown Bag Talk and Department Colloquium at the University of Arizona Planetary Sciences:...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-new-constraints-on-the-major-neutron-source-for-s-process-nucleosynthesis-in-agb-stars",
          title: 'Presented at the Lunar and Planetary Science Conference: New constraints on the major...',
          description: "",
          section: "News",},{id: "news-published-in-apjl-with-nittler-et-al-extreme-54cr-and-50ti-rich-presolar-oxide-grains-in-a-primitive-meteorite",
          title: 'Published in ApJL (with Nittler et al.): Extreme 54Cr- and 50Ti-rich presolar oxide...',
          description: "",
          section: "News",},{id: "news-published-two-papers-in-apj-common-occurrence-of-explosive-hydrogen-burning-in-type-ii-supernovae-and-new-constraints-on-the-major-neutron-source-in-low-mass-agb-stars",
          title: 'Published two papers in ApJ: Common occurrence of explosive hydrogen burning in Type...',
          description: "",
          section: "News",},{id: "news-invited-session-talk-at-goldschmidt-2018-in-boston-late-formation-of-silicon-carbide-in-type-ii-supernovae",
          title: 'Invited session talk at Goldschmidt 2018 in Boston: Late formation of silicon carbide...',
          description: "",
          section: "News",},{id: "news-presented-at-the-81st-meteoritical-society-annual-meeting-stellar-origins-of-presolar-y-and-z-grains-constraints-from-their-molybdenum-isotopic-compositions",
          title: 'Presented at the 81st Meteoritical Society Annual Meeting: Stellar origins of presolar Y...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-robert-clayton-memorial-symposium-university-of-chicago-presolar-supernova-grains-and-solar-system-formation",
          title: 'Invited talk at the Robert Clayton Memorial Symposium, University of Chicago: Presolar supernova...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-presolar-silicon-carbide-grains-of-groups-y-and-z-their-strontium-and-barium-isotopic-compositions-and-stellar-origins",
          title: 'Presented at the Lunar and Planetary Science Conference: Presolar silicon carbide grains of...',
          description: "",
          section: "News",},{id: "news-invited-lecture-at-the-russbach-school-in-nuclear-astrophysics-austria-presolar-grains-and-their-stellar-origins",
          title: 'Invited lecture at the Russbach School in Nuclear Astrophysics, Austria: Presolar grains and...',
          description: "",
          section: "News",},{id: "news-presented-at-the-presolar-grain-workshop-in-chicago-searching-for-presolar-sic-grains-in-curious-marie",
          title: 'Presented at the Presolar Grain Workshop in Chicago: Searching for presolar SiC grains...',
          description: "",
          section: "News",},{id: "news-presented-at-the-7th-p-process-workshop-s-process-isotopic-signatures-of-presolar-sic-grains-their-constraints-on-agb-models-and-implications-to-p-process",
          title: 'Presented at the 7th p-process Workshop: s-process isotopic signatures of presolar SiC grains:...',
          description: "",
          section: "News",},{id: "news-published-in-apj-presolar-silicon-carbide-grains-of-types-y-and-z-their-molybdenum-isotopic-compositions-and-stellar-origins",
          title: 'Published in ApJ: Presolar silicon carbide grains of types Y and Z: their...',
          description: "",
          section: "News",},{id: "news-presented-at-the-82nd-meteoritical-society-annual-meeting-nanosims-isotopic-imaging-of-volatile-rich-clasts-from-achondritic-kapoeta-meteorite",
          title: 'Presented at the 82nd Meteoritical Society Annual Meeting: NanoSIMS isotopic imaging of volatile-rich...',
          description: "",
          section: "News",},{id: "news-department-seminars-at-the-university-of-illinois-urbana-champaign-and-the-university-of-hawaiʻi-at-mānoa-presolar-dust-from-supernovae-and-its-implication-to-solar-system-formation",
          title: 'Department Seminars at the University of Illinois Urbana-Champaign and the University of Hawaiʻi...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-a-new-method-for-constraining-explosive-environments-in-type-ii-supernovae-using-presolar-silicon-carbide-x-grain-isotopic-data",
          title: 'Presented at the Lunar and Planetary Science Conference: A new method for constraining...',
          description: "",
          section: "News",},{id: "news-department-seminar-at-lasp-and-the-department-of-planetary-and-space-sciences-university-of-colorado-boulder-laboratory-astrophysics-isotopic-and-structural-characterization-of-presolar-grains-and-micrometeorites",
          title: 'Department Seminar at LASP and the Department of Planetary and Space Sciences, University...',
          description: "",
          section: "News",},{id: "news-published-in-astronomy-amp-amp-astrophysics-with-cristallo-et-al-mass-and-metallicity-distribution-of-parent-agb-stars-of-presolar-sic",
          title: 'Published in Astronomy &amp;amp;amp; Astrophysics (with Cristallo et al.): Mass and metallicity distribution...',
          description: "",
          section: "News",},{id: "news-published-in-apjl-with-vescovi-et-al-magnetic-buoyancy-induced-mixing-in-agb-stars-i-presolar-sic-grains",
          title: 'Published in ApJL (with Vescovi et al.): Magnetic-buoyancy induced mixing in AGB stars:...',
          description: "",
          section: "News",},{id: "news-published-in-geochimica-et-cosmochimica-acta-nanosims-isotopic-investigation-of-xenolithic-carbonaceous-clasts-from-the-kapoeta-howardite",
          title: 'Published in Geochimica et Cosmochimica Acta: NanoSIMS isotopic investigation of xenolithic carbonaceous clasts...',
          description: "",
          section: "News",},{id: "news-featured-in-washu-source-ancient-micrometeoroids-carried-specks-of-stardust-water-to-asteroid-4-vesta-covering-my-kapoeta-howardite-paper",
          title: 'Featured in WashU Source: Ancient micrometeoroids carried specks of stardust, water to asteroid...',
          description: "",
          section: "News",},{id: "news-published-in-earth-and-planetary-science-letters-with-nie-et-al-iron-isotopic-and-chemical-tracing-of-basalt-alteration-and-hematite-spherule-formation-in-hawaii",
          title: 'Published in Earth and Planetary Science Letters (with Nie et al.): Iron isotopic...',
          description: "",
          section: "News",},{id: "news-presented-at-the-goldschmidt-2020-virtual-conference-structural-and-elemental-analysis-of-presolar-silicon-carbide-grains",
          title: 'Presented at the Goldschmidt 2020 Virtual Conference: Structural and elemental analysis of presolar...',
          description: "",
          section: "News",},{id: "news-center-for-meteorite-studies-virtual-seminar-arizona-state-university-agb-stars-and-their-dust-grains-in-the-solar-system",
          title: 'Center for Meteorite Studies Virtual Seminar, Arizona State University: AGB stars and their...',
          description: "",
          section: "News",},{id: "news-published-in-apjl-with-boujibar-et-al-cluster-analysis-of-presolar-silicon-carbide-grains-evaluation-of-their-classification-and-astrophysical-implications",
          title: 'Published in ApJL (with Boujibar et al.): Cluster analysis of presolar silicon carbide...',
          description: "",
          section: "News",},{id: "news-inaf-osservatorio-astronomico-d-abruzzo-virtual-seminar-italy-agb-stars-and-their-dust-grains-in-the-solar-system",
          title: 'INAF-Osservatorio Astronomico d’Abruzzo Virtual Seminar, Italy: AGB stars and their dust grains in...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-multielement-isotopic-compositions-of-presolar-sic-from-asymptotic-giant-branch-stars",
          title: 'Presented at the Lunar and Planetary Science Conference: Multielement isotopic compositions of presolar...',
          description: "",
          section: "News",},{id: "news-published-in-apj-with-singerling-et-al-tem-analyses-of-unusual-presolar-silicon-carbide-insights-into-the-range-of-circumstellar-dust-condensation-conditions",
          title: 'Published in ApJ (with Singerling et al.): TEM analyses of unusual presolar silicon...',
          description: "",
          section: "News",},{id: "news-seminar-at-the-open-university-uk-coordinated-chemical-isotopic-and-structural-analysis-of-extraterrestrial-materials",
          title: 'Seminar at The Open University, UK: Coordinated chemical, isotopic and structural analysis of...',
          description: "",
          section: "News",},{id: "news-featured-in-washu-source-and-sciencedaily-sculpted-by-starlight-coverage-of-vacher-et-al-gca-paper",
          title: 'Featured in WashU Source and ScienceDaily: Sculpted by starlight — coverage of Vacher...',
          description: "",
          section: "News",},{id: "news-awarded-the-meteoritical-society-s-nier-prize-for-outstanding-research-in-meteoritics-and-closely-allied-fields-by-an-early-career-scientist",
          title: 'Awarded the Meteoritical Society’s Nier Prize for outstanding research in meteoritics and closely...',
          description: "",
          section: "News",},{id: "news-presented-at-the-83rd-meteoritical-society-annual-meeting-nanosims-isotopic-investigation-of-the-co3-chondrite-dominion-range-14359",
          title: 'Presented at the 83rd Meteoritical Society Annual Meeting: NanoSIMS isotopic investigation of the...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-16th-international-symposium-on-nuclei-in-the-cosmos-school-chengdu-china-isotopes-in-stardust",
          title: 'Invited talk at the 16th International Symposium on Nuclei in the Cosmos School,...',
          description: "",
          section: "News",},{id: "news-published-in-apjl-new-multielement-isotopic-compositions-of-presolar-sic-grains-implications-for-their-stellar-origins",
          title: 'Published in ApJL: New multielement isotopic compositions of presolar SiC grains: implications for...',
          description: "",
          section: "News",},{id: "news-featured-in-washu-source-universe-today-and-sci-news-covering-my-new-apjl-paper-on-multielement-isotopic-compositions-of-presolar-sic-grains",
          title: 'Featured in WashU Source, Universe Today, and Sci.News covering my new ApJL paper...',
          description: "",
          section: "News",},{id: "news-published-in-geochimica-et-cosmochimica-acta-with-vacher-et-al-cosmic-symplectite-recorded-irradiation-by-nearby-massive-stars-in-the-solar-system-s-parent-molecular-cloud",
          title: 'Published in Geochimica et Cosmochimica Acta (with Vacher et al.): Cosmic symplectite recorded...',
          description: "",
          section: "News",},{id: "news-published-in-mnras-with-hystad-et-al-evaluation-of-the-classification-of-presolar-silicon-carbide-grains-using-consensus-clustering",
          title: 'Published in MNRAS (with Hystad et al.): Evaluation of the classification of presolar...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-distributions-of-chemical-isotopic-and-structural-compositions-of-presolar-silicon-carbide-grains",
          title: 'Presented at the Lunar and Planetary Science Conference: Distributions of chemical, isotopic, and...',
          description: "",
          section: "News",},{id: "news-featured-in-washu-ampersand-conversation-two-award-winning-space-scientists-interview-following-the-nier-prize",
          title: 'Featured in WashU Ampersand: Conversation: Two award-winning space scientists — interview following the...',
          description: "",
          section: "News",},{id: "news-department-colloquium-at-washington-university-in-st-louis-physics-cosmic-forensics-using-presolar-stardust",
          title: 'Department Colloquium at Washington University in St. Louis Physics: Cosmic forensics using presolar...',
          description: "",
          section: "News",},{id: "news-published-in-universe-slow-neutron-capture-process-low-mass-asymptotic-giant-branch-stars-and-presolar-silicon-carbide-grains",
          title: 'Published in Universe: Slow neutron-capture process: low-mass asymptotic giant branch stars and presolar...',
          description: "",
          section: "News",},{id: "news-presented-at-the-84th-meteoritical-society-annual-meeting-presolar-silicon-carbide-grains-of-types-y-and-z-stardust-from-low-metallicity-asymptotic-giant-branch-stars",
          title: 'Presented at the 84th Meteoritical Society Annual Meeting: Presolar silicon carbide grains of...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-platinum-planetary-seminar-physical-research-laboratory-ahmedabad-india-agb-stars-and-their-dust-grains-in-the-solar-system",
          title: 'Invited talk at the Platinum Planetary Seminar, Physical Research Laboratory, Ahmedabad, India: AGB...',
          description: "",
          section: "News",},{id: "news-published-in-geochimica-et-cosmochimica-acta-oxygen-and-aluminum-magnesium-isotopic-systematics-of-presolar-nanospinel-grains-from-orgueil",
          title: 'Published in Geochimica et Cosmochimica Acta: Oxygen and aluminum-magnesium isotopic systematics of presolar...',
          description: "",
          section: "News",},{id: "news-published-in-european-physical-journal-a-presolar-silicon-carbide-grains-of-types-y-and-z-their-strontium-and-barium-isotopic-compositions-and-stellar-origins",
          title: 'Published in European Physical Journal A: Presolar silicon carbide grains of types Y...',
          description: "",
          section: "News",},{id: "news-inac-cosnap-colloquium-at-the-institute-for-nuclear-astrophysics-of-china-presolar-grains-from-asymptotic-giant-branch-stars",
          title: 'INAC-COSNAP colloquium at the Institute for Nuclear Astrophysics of China: Presolar grains from...',
          description: "",
          section: "News",},{id: "news-joined-boston-university-as-senior-research-scientist-at-the-institute-for-astrophysical-research",
          title: 'Joined Boston University as Senior Research Scientist at the Institute for Astrophysical Research....',
          description: "",
          section: "News",},{id: "news-iar-seminar-at-boston-university-astronomy-nucleosynthesis-and-dust-formation-in-supernovae",
          title: 'IAR Seminar at Boston University Astronomy: Nucleosynthesis and dust formation in supernovae.',
          description: "",
          section: "News",},{id: "news-astro-seminar-at-the-university-of-missouri-physics-amp-amp-astronomy-presolar-stardust-grains-in-the-solar-system",
          title: 'Astro Seminar at the University of Missouri Physics &amp;amp;amp; Astronomy: Presolar stardust grains...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-late-formation-of-silicon-carbide-in-supernova-remnants-confirmed-by-new-vanadium-titanium-isotope-data",
          title: 'Presented at the Lunar and Planetary Science Conference: Late formation of silicon carbide...',
          description: "",
          section: "News",},{id: "news-department-seminar-at-the-carnegie-earth-amp-amp-planets-laboratory-the-cosmic-connection-ancient-supernovae-and-their-legacy-in-the-solar-system",
          title: 'Department Seminar at the Carnegie Earth &amp;amp;amp; Planets Laboratory: The cosmic connection: ancient...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-issi-workshop-on-evolution-of-the-solar-system-bern-switzerland-presolar-sic-grains-from-type-ii-core-collapse-supernovae",
          title: 'Invited talk at the ISSI Workshop on Evolution of the Solar System, Bern,...',
          description: "",
          section: "News",},{id: "news-presented-at-the-85th-meteoritical-society-annual-meeting-radioactive-44ti-found-in-15n-rich-type-ab-presolar-sic-grains",
          title: 'Presented at the 85th Meteoritical Society Annual Meeting: Radioactive 44Ti found in 15N-rich...',
          description: "",
          section: "News",},{id: "news-published-an-invited-review-in-space-science-reviews-with-m-lugaro-j-leitner-b-s-meyer-m-schönbächler-presolar-grains-as-probes-of-supernova-nucleosynthesis",
          title: 'Published an invited review in Space Science Reviews (with M. Lugaro, J. Leitner,...',
          description: "",
          section: "News",},{id: "news-coauthor-on-apjs-paper-the-presolar-grain-database-i-silicon-carbide-stephan-et-al",
          title: 'Coauthor on ApJS paper: The Presolar Grain Database: I. Silicon Carbide (Stephan et...',
          description: "",
          section: "News",},{id: "news-published-in-apjl-explosive-nucleosynthesis-in-core-collapse-type-ii-supernovae-insights-from-new-c-n-si-and-al-mg-isotopic-compositions-of-presolar-grains",
          title: 'Published in ApJL: Explosive nucleosynthesis in core-collapse Type II supernovae: insights from new...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-potassium-calcium-isotope-systematics-of-supernova-silicon-nitride-grains",
          title: 'Presented at the Lunar and Planetary Science Conference: Potassium-calcium isotope systematics of supernova...',
          description: "",
          section: "News",},{id: "news-presented-at-the-presolar-grain-workshop-arizona-state-university-the-stellar-origin-of-a-25mg-rich-mainstream-sic-grain",
          title: 'Presented at the Presolar Grain Workshop, Arizona State University: The stellar origin of...',
          description: "",
          section: "News",},{id: "news-invited-presentation-at-the-cenam-frontiers-in-nuclear-astrophysics-meeting-notre-dame-explosive-nucleosynthesis-in-core-collapse-type-ii-supernovae",
          title: 'Invited presentation at the CeNAM Frontiers in Nuclear Astrophysics Meeting, Notre Dame: Explosive...',
          description: "",
          section: "News",},{id: "news-presented-at-the-86th-meteoritical-society-annual-meeting-sulfur-isotopic-compositions-of-presolar-silicon-carbide-grains",
          title: 'Presented at the 86th Meteoritical Society Annual Meeting: Sulfur isotopic compositions of presolar...',
          description: "",
          section: "News",},{id: "news-presented-at-the-xiv-torino-workshop-on-agb-stars-frascati-italy-unveiling-the-stellar-origins-of-types-y-and-z-silicon-carbide-grains",
          title: 'Presented at the XIV Torino Workshop on AGB Stars, Frascati, Italy: Unveiling the...',
          description: "",
          section: "News",},{id: "news-department-seminar-at-the-southern-university-of-science-and-technology-sustech-shenzhen-china-presolar-stardust-grains-in-the-solar-system",
          title: 'Department Seminar at the Southern University of Science and Technology (SUSTech), Shenzhen, China:...',
          description: "",
          section: "News",},{id: "news-invited-presentation-at-omeg2024-chengdu-china-explosive-nucleosynthesis-in-core-collapse-type-ii-supernovae-constraints-from-presolar-grains",
          title: 'Invited presentation at OMEG2024, Chengdu, China: Explosive nucleosynthesis in core-collapse Type II supernovae:...',
          description: "",
          section: "News",},{id: "news-book-chapter-published-in-treatise-on-geochemistry-3rd-ed-vol-7-presolar-grains",
          title: 'Book chapter published in Treatise on Geochemistry (3rd ed., Vol. 7): Presolar grains....',
          description: "",
          section: "News",},{id: "news-department-seminar-at-umass-dartmouth-physics-isotope-variations-in-meteorites-linked-to-nucleosynthesis-in-type-ia-supernovae",
          title: 'Department Seminar at UMass Dartmouth Physics: Isotope variations in meteorites linked to nucleosynthesis...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-stellar-origins-of-types-y-and-z-silicon-carbide-grains-revealed-by-nickel-isotopes",
          title: 'Presented at the Lunar and Planetary Science Conference: Stellar origins of Types Y...',
          description: "",
          section: "News",},{id: "news-published-in-nature-geoscience-galactic-messages-carried-by-moissanite-a-perspective-piece-on-what-presolar-moissanite-grains-reveal-about-the-origin-and-evolution-of-the-solar-system",
          title: 'Published in Nature Geoscience: Galactic messages carried by moissanite — a perspective piece...',
          description: "",
          section: "News",},{id: "news-presented-at-the-2025-irena-cenam-frontiers-in-nuclear-astrophysics-conference-presolar-grains-as-probes-of-type-ii-supernova-nucleosynthesis",
          title: 'Presented at the 2025 IReNA-CeNAM Frontiers in Nuclear Astrophysics Conference: Presolar grains as...',
          description: "",
          section: "News",},{id: "news-presented-at-the-s-i-amp-amp-r-element-nucleosynthesis-siren-conference-giulianova-italy-diverse-stellar-neutron-capture-isotopic-signatures-recorded-in-presolar-silicon-carbide-grains",
          title: 'Presented at the s, i &amp;amp;amp; r Element Nucleosynthesis (sirEN) Conference, Giulianova, Italy:...',
          description: "",
          section: "News",},{id: "news-invited-presentation-at-the-international-symposium-on-nuclei-in-the-cosmos-xviii-girona-spain-presolar-grains-from-supernovae",
          title: 'Invited presentation at the International Symposium on Nuclei in the Cosmos XVIII, Girona,...',
          description: "",
          section: "News",},{id: "news-invited-lecture-at-the-carpathian-summer-school-of-physics-2025-sinaia-romania-presolar-grains",
          title: 'Invited lecture at the Carpathian Summer School of Physics 2025, Sinaia, Romania: Presolar...',
          description: "",
          section: "News",},{id: "news-presented-at-the-87th-meteoritical-society-annual-meeting-oral-talk-on-constraining-neutron-burst-nucleosynthesis-in-core-collapse-supernovae-through-multielement-isotopic-composition-of-presolar-type-c-and-x-grains",
          title: 'Presented at the 87th Meteoritical Society Annual Meeting: oral talk on Constraining neutron-burst...',
          description: "",
          section: "News",},{id: "news-center-for-meteorite-studies-virtual-seminar-arizona-state-university-stellar-origins-of-types-y-and-z-silicon-carbide-grains-revealed-by-nickel-isotopes",
          title: 'Center for Meteorite Studies Virtual Seminar, Arizona State University: Stellar origins of types...',
          description: "",
          section: "News",},{id: "news-nuclear-science-seminar-at-the-facility-for-rare-isotope-beams-michigan-state-university-presolar-grains-as-probes-of-supernova-nucleosynthesis",
          title: 'Nuclear Science Seminar at the Facility for Rare Isotope Beams, Michigan State University:...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-aas-247-winter-meeting-phoenix-az-presolar-grains-from-supernovae",
          title: 'Invited talk at the AAS 247 Winter Meeting, Phoenix, AZ: Presolar grains from...',
          description: "",
          section: "News",},{id: "news-began-stay-as-visitor-at-the-institute-for-advanced-study-princeton-spring-2026-january-july",
          title: 'Began stay as Visitor at the Institute for Advanced Study, Princeton (Spring 2026,...',
          description: "",
          section: "News",},{id: "news-published-with-bu-undergraduate-ananya-jain-in-research-notes-of-the-aas-on-the-claimed-26al-50ti-exclusivity-in-presolar-grains",
          title: 'Published with BU undergraduate Ananya Jain in Research Notes of the AAS: On...',
          description: "",
          section: "News",},{id: "news-featured-in-quanta-magazine-a-long-form-interview-on-presolar-grains-and-the-early-solar-system",
          title: 'Featured in Quanta Magazine: a long-form interview on presolar grains and the early...',
          description: "",
          section: "News",},{id: "news-bu-undergraduate-mentee-ananya-jain-gave-an-oral-talk-at-the-lunar-and-planetary-science-conference-on-the-claimed-26al-50ti-exclusivity-in-presolar-grains",
          title: 'BU undergraduate mentee Ananya Jain gave an oral talk at the Lunar and...',
          description: "",
          section: "News",},{id: "news-presented-at-the-lunar-and-planetary-science-conference-new-nanosims-multielement-isotope-data-reveal-co-novae-as-key-sources-of-13c-rich-presolar-sic-grains",
          title: 'Presented at the Lunar and Planetary Science Conference: New NanoSIMS multielement isotope data...',
          description: "",
          section: "News",},{id: "news-invited-talk-upcoming-at-astrophysics-with-radioactive-isotopes-2026-traverse-city-mi-radioactive-isotopes-in-presolar-supernova-grains",
          title: 'Invited talk (upcoming) at Astrophysics with Radioactive Isotopes 2026, Traverse City, MI: Radioactive...',
          description: "",
          section: "News",},{id: "news-invited-talk-upcoming-at-the-18th-international-symposium-on-origin-and-evolution-of-galaxies-omeg18-riken-japan-meteoritic-isotopic-anomalies-as-precision-tests-of-stellar-nucleosynthesis",
          title: 'Invited talk (upcoming) at the 18th International Symposium on Origin and Evolution of...',
          description: "",
          section: "News",},{id: "news-invited-talk-upcoming-at-nuclear-physics-in-astrophysics-xii-cluj-napoca-romania-meteoritic-isotopic-anomalies-as-precision-tests-of-stellar-nucleosynthesis",
          title: 'Invited talk (upcoming) at Nuclear Physics in Astrophysics XII, Cluj-Napoca, Romania: Meteoritic isotopic...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/nan-liu.com/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/nan-liu.com/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/nan-liu.com/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/nan-liu.com/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/nan-liu.com/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
