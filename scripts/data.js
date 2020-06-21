// json object built from Europass document xml file
// using https://www.freeformatter.com/xml-to-json-converter.html
// this xml standard will no longer valid on 01 Jun 2020!
const euroPassDocument = [
  {
    '@schemaLocation':
      'http://europass.cedefop.europa.eu/Europass http://europass.cedefop.europa.eu/xml/v3.4.0/EuropassSchema.xsd',
    '@locale': 'fr',
    DocumentInfo: {
      DocumentType: 'ECV_ESP',
      Bundle: null,
      CreationDate: '2020-02-13T10:26:15.081Z',
      LastUpdateDate: '2020-06-20T19:05:35.040Z',
      XSDVersion: 'V3.4',
      Generator: 'EWA',
      Comment: 'Europass CV',
      EuropassLogo: 'true',
    },
    PrintingPreferences: {
      Document: {
        Field: [
          {
            '@name': 'LearnerInfo.Identification.PersonName',
            '@show': 'true',
            '@order': 'Surname FirstName',
          },
          {
            '@name': 'LearnerInfo.Identification.Demographics.Birthdate',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[0].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[1].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[2].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[3].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[4].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[5].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[6].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[7].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[8].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[9].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.WorkExperience[10].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[0].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[1].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[2].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[3].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[4].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo.Education[5].Period',
            '@show': 'false',
            '@format': 'numeric/long',
          },
          {
            '@name': 'LearnerInfo',
            '@show': 'false',
            '@order':
              'Identification Headline WorkExperience Education Skills Achievement ReferenceTo',
            '@pageBreaks': '',
          },
        ],
      },
    },
    LearnerInfo: {
      Identification: {
        PersonName: {
          FirstName: 'Potito',
          Surname: 'Gradone',
        },
        ContactInfo: {
          Address: {
            Contact: {
              AddressLine: 'Am Hoirbock, 12',
              PostalCode: 'L-8552',
              Municipality: 'Oberpallen',
              Country: {
                Code: 'LU',
                Label: 'Luxembourg',
              },
            },
          },
          Email: {
            Contact: 'pgradone@gmail.com',
          },
          TelephoneList: {
            Telephone: [
              {
                Contact: '+352-691-266208',
                Use: {
                  Code: 'mobile',
                },
              },
              {
                Contact: '+352-26620862',
                Use: {
                  Code: 'home',
                },
              },
            ],
          },
          InstantMessagingList: {
            InstantMessaging: {
              Contact: 'pgradone',
              Use: {
                Label: 'Skype',
              },
            },
          },
        },
        Photo: {
          MimeType: 'image/jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '383x464',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
              {
                '@key': 'cropping',
                '@value': {
                  width: 96,
                  height: 116,
                  x: 0,
                  y: 6,
                  x2: 95,
                  y2: 116,
                  ox: 1.275404,
                  oy: 24.21978,
                  ox2: '383',
                  oy2: '464',
                },
              },
              {
                '@key': 'scaling',
                '@value': {
                  withinDimensions: false,
                  scale: {
                    boxWidth: 0,
                    boxHeight: 364,
                  },
                },
              },
            ],
          },
        },
      },
      Headline: {
        Type: {
          Code: 'job_applied_for',
          Label: 'POSTE VISÉ',
        },
        Description: {
          Label: 'COM/TA/AST/02/20 - 4',
        },
      },
      WorkExperienceList: {
        WorkExperience: [
          {
            Period: {
              From: {
                '@year': '2018',
                '@month': '--03',
                '@day': '---22',
              },
              To: {
                '@year': '2019',
                '@month': '--10',
                '@day': '---31',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Senior IT Consultant',
            },
            Activities:
              '<p>Projects:</p><p>- CNMV Legal reporting for Spain, Edmond de Rothchild</p><p>- WKFS Support, Eurobank</p><p>- RaRoc Risk Adjusted Return on Capital Legal reporting, BIL</p><p>- IDD Risk calculator GLFI, SocGen Life Insurance Brokers</p><p>Technologies:</p><p>Streamlining, Agile, Jira, interfacing, documentations, VBA, SQL, Microsoft Access, Excel, WKFS, Olympic–Avaloq, XML, migration, consolidations, JavaScript</p>',
            Employer: {
              Name: 'Taleo Consulting',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2012',
                '@month': '--10',
                '@day': '---01',
              },
              To: {
                '@year': '2017',
                '@month': '--12',
                '@day': '---31',
              },
              Current: 'false',
            },
            Position: {
              Label: 'IT Officer',
            },
            Activities:
              '<p>Helpdesk, VBA Macros &amp; Maintenance, Hardware &amp; Software management, IT procedures</p><p>MySQL, Linux server, VBA &amp; Macros dev, VB.NET, Data protection, Typo3, documentation</p>',
            Employer: {
              Name: 'Fonds National de Solidarité',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2011',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '2012',
                '@month': '--09',
                '@day': '---14',
              },
              Current: 'false',
            },
            Position: {
              Label: "Chargé d'Éducation, Sciences Naturelles",
            },
            Activities:
              '<p>Courses in Natural Sciences for high-school students, classes 8 to 10, MSOffice Suite, Tools for school management</p>',
            Employer: {
              Name: 'Lycée Technique Mathial Adam',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Pétange',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2011',
                '@month': '--05',
                '@day': '---01',
              },
              To: {
                '@year': '2011',
                '@month': '--08',
                '@day': '---08',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Assistant Manager, Automation',
            },
            Activities:
              '<p>Funds Administration, Finance, Accounting, Helpdesk &amp; NAV signup</p><p>Microsoft SQL Server 2008, Excel-Access VBA, .NET</p>',
            Employer: {
              Name: 'Fidelity',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2007',
                '@month': '--03',
                '@day': '---12',
              },
              To: {
                '@year': '2010',
                '@month': '--12',
                '@day': '---31',
              },
              Current: 'false',
            },
            Position: {
              Label: 'IT Developer',
            },
            Activities:
              '<p>Oracle, PL/SQL, TOAD, MS-Access VBA, MSOffice Applications Design &amp; Re Engineering</p><p>FRS/FRG (WKFS) data foundation Interfacing with Lynx/TE and Oracle Financials Trial Balance</p><p>Financial, Operations Marketing &amp; Legal Reporting, Helpdesk, MIS data mapping</p>',
            Employer: {
              Name: 'John Deere',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2006',
                '@month': '--03',
                '@day': '---01',
              },
              To: {
                '@year': '2006',
                '@month': '--09',
                '@day': '---14',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Software Engineer',
            },
            Activities:
              '<p>Project MPG/Ferrero Schoppach:</p><p>Migration from Oracle Applications to SAP, Maintenance for Purchasing, Helpdesk, Support, Development, DBA</p><p>Technologies:</p><p>Oracle Applications, PL/SQL, Unix, TOAD, Oracle Developer Suite, Business Objects</p>',
            Employer: {
              Name: 'Vision IT',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Bertrange',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2005',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '2006',
                '@month': '--03',
                '@day': '---15',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Applications Analyst',
            },
            Activities:
              '<p>- MS-Access, VB, ORACLE, Unix, Sybase, Excel, TOAD, RBAC modelling for migrations</p><p>- Financial Reporting, Re-branding, Office97-XP migrations, Helpdesk, Project management</p><p>- RBAC (Role-Based Access Control) modelling,migrations of MS Access Databases</p><p>- IT Security Management, data protection &amp; Applications Security Assessments</p><p>- Rebranding financial accounting reports from IAS to IFRS for CSSF and internal needs</p><p>- Normalization consolidation and interfacing of operational applications for internal accounts</p>',
            Employer: {
              Name: 'BGL-Fortis',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '2000',
                '@month': '--10',
                '@day': '---13',
              },
              To: {
                '@year': '2005',
                '@month': '--03',
                '@day': '---31',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Operations Analyst',
            },
            Activities:
              '<p>- Operations, Data warehousing, CRM, Development &amp; Maintenance, Reporting</p><p>- MS-Access, VBA, MS-SQL Server, ORACLE, Word, Excel, Outlook, Lotus Notes</p><p>- Migration, reengineering and consolidation of obsolete databases</p><p>- Maintenance, security and application deployment for ING Milan, Prague and Curaçao</p><p>- Helpdesk technical and user documentation for all client administration IT needs</p><p>- Reengineering and consolidation of financial composites database</p><p>- Restructuring and normalization of reports&#39; layouts and historical contents</p><p>- Statistics and graphics setup from financial data and reporting tool for Executive Management</p><p>- Performance assessment and budgeting of evacuation and backup procedures</p>',
            Employer: {
              Name: 'ING Bank',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '1998',
                '@month': '--11',
                '@day': '---23',
              },
              To: {
                '@year': '2000',
                '@month': '--10',
                '@day': '---20',
              },
              Current: 'false',
            },
            Position: {
              Label: 'IT Engineer',
            },
            Activities:
              '<p>Projects:</p><p>- LUXGSM Base Station Subsystems, Applications Re Engineering &amp; Development</p><p>- MAGUI – Machine de Guichet, Upgrading Y2K &amp; Euro, Client Machines Install &amp; Configure</p><p>Technologies:</p><p>AMC Designor, Access VBA Client/Server, Corporate Data Control &amp; Validation- Unix, MSDOS, Datafit DP4, Excel</p>',
            Employer: {
              Name: 'P&T Consulting',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '1996',
                '@month': '--09',
                '@day': '---30',
              },
              To: {
                '@year': '1998',
                '@month': '--02',
                '@day': '---28',
              },
              Current: 'false',
            },
            Position: {
              Label: 'IT Developer',
            },
            Activities:
              '<p>MACH project</p><p>- Multinational Automated Clearing House, reporting</p><p>- maintenance, interfacing &amp; developments in GSM SMS call data mining</p><p>- Digital VAX/VMS scripting,</p><p>- PL/SQL, SQLPlus reporting, Oracle Developer 2000, Access</p>',
            Employer: {
              Name: 'Transcom (Transac)',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Dudelange',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '1996',
                '@month': '--02',
                '@day': '---01',
              },
              To: {
                '@year': '1996',
                '@month': '--08',
                '@day': '---31',
              },
              Current: 'false',
            },
            Position: {
              Label: 'Analyst Programmer',
            },
            Activities:
              '<p>Projects:</p><p>- SCIERIX, TDK, Ticketing, Consulting, Migrations</p><p>- PC configuration, User Training</p><p>Technologies:</p><p>MSDos, SB&#43; under Pick OS, Omnidirectional DBMS</p>',
            Employer: {
              Name: 'Infodata',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
        ],
      },
      EducationList: {
        Education: [
          {
            Period: {
              From: {
                '@year': '1995',
                '@month': '--09',
                '@day': '---18',
              },
              To: {
                '@year': '1996',
                '@month': '--01',
                '@day': '---31',
              },
              Current: 'false',
            },
            Title: 'Qualif II IT',
            Activities:
              '<p>IT Systems Analysis practical training and qualification for Luxembourg Jobsearch</p><p>Merise methodology, Networking, DBMS, SQL, 4GLs, object and service oriented techniques</p>',
            Organisation: {
              Name: 'Centre de Recherche public Henry Tudor',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '1993',
                '@month': '--09',
                '@day': '---01',
              },
              To: {
                '@year': '1995',
                '@month': '--07',
                '@day': '---15',
              },
              Current: 'false',
            },
            Title: 'Master of Business Administration, Decision Sciences',
            Activities:
              '<p>MBA Focus Paper, Organisational Behaviour, HR recommendations</p><p>IT, SQL, Database Management</p><p>Focus paper on SQA - Suppliers Quality Assurance</p>',
            Organisation: {
              Name: 'Miami University',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Oxford, OH',
                    Country: {
                      Code: 'US',
                      Label: 'États-Unis',
                    },
                  },
                },
              },
            },
            Level: {
              Code: '7',
              Label: 'Niveau 7 CEC',
            },
          },
          {
            Period: {
              From: {
                '@year': '1992',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '1993',
                '@month': '--07',
                '@day': '---15',
              },
              Current: 'false',
            },
            Title: 'Micro- & Macro-economics courses',
            Activities:
              '<p>Micro-economics, macro-economics. American economy, Information Technology</p><p>Economics engineering textbooks, Desktop Publishing, Graphics on spreadsheets, Statistics</p>',
            Organisation: {
              Name: 'Uni Lu',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
          },
          {
            Period: {
              From: {
                '@year': '1989',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '1991',
                '@month': '--09',
                '@day': '---13',
              },
              Current: 'false',
            },
            Title: 'Licence spéciale en Biologie Moléculaire et Biotechnologie',
            Activities:
              '<p>Chemical synthesis and non radioactive labelling of deoxy-oligonucleotides.</p><p>Phosphoramidite synthesis chemistry, DNA purification &amp; analytical techniques (blots…)</p>',
            Organisation: {
              Name: 'ULB',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Bruxelles',
                    Country: {
                      Code: 'BE',
                      Label: 'Belgique',
                    },
                  },
                },
              },
            },
            Level: {
              Code: '7',
              Label: 'Niveau 7 CEC',
            },
          },
          {
            Period: {
              From: {
                '@year': '1982',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '1988',
                '@month': '--03',
                '@day': '---03',
              },
              Current: 'false',
            },
            Title: 'Laurea IN BIOLOGY',
            Activities:
              '<p>Biological Sciences,</p><p>Focus paper in Organic Chemistry, on Pyrrhole Synthesis</p><p>Urinary analyses of immunity-suppressed patients undergoing bone marrow transplants</p><p>Electrophoresis, cell-staining, microscopic analyses, various clinical techniques</p><p>Effects of vitamin E on rats’ sciatic nerve regeneration.</p>',
            Organisation: {
              Name: 'Università degli Studi di URBINO',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Urbino',
                    Country: {
                      Code: 'IT',
                      Label: 'Italie',
                    },
                  },
                },
              },
            },
            Level: {
              Code: '6',
              Label: 'Niveau 6 CEC',
            },
          },
          {
            Period: {
              From: {
                '@year': '1980',
                '@month': '--09',
                '@day': '---15',
              },
              To: {
                '@year': '1982',
                '@month': '--07',
                '@day': '---31',
              },
              Current: 'false',
            },
            Title: 'European School Bac Math, Sciences, Languages',
            Activities: '<p>Mathematics, Sciences, Languages</p>',
            Organisation: {
              Name: 'Ecole Européenne Luxembourg',
              ContactInfo: {
                Address: {
                  Contact: {
                    Municipality: 'Luxembourg',
                    Country: {
                      Code: 'LU',
                      Label: 'Luxembourg',
                    },
                  },
                },
              },
            },
            Level: {
              Code: '4',
              Label: 'Niveau 4 CEC',
            },
          },
        ],
      },
      Skills: {
        Linguistic: {
          MotherTongueList: {
            MotherTongue: {
              Description: {
                Code: 'it',
                Label: 'italien',
              },
            },
          },
          ForeignLanguageList: {
            ForeignLanguage: [
              {
                Description: {
                  Code: 'fr',
                  Label: 'français',
                },
                ProficiencyLevel: {
                  Listening: 'C2',
                  Reading: 'C2',
                  SpokenInteraction: 'C2',
                  SpokenProduction: 'C2',
                  Writing: 'C2',
                },
                VerifiedBy: {
                  Certificate: {
                    Title: 'Réussite Épreuves 3 Langues administratives Lux',
                  },
                },
              },
              {
                Description: {
                  Code: 'en',
                  Label: 'anglais',
                },
                ProficiencyLevel: {
                  Listening: 'C2',
                  Reading: 'C2',
                  SpokenInteraction: 'C1',
                  SpokenProduction: 'C1',
                  Writing: 'C1',
                },
                VerifiedBy: {
                  Certificate: {
                    Title: 'TOEFL GMAT',
                  },
                },
              },
              {
                Description: {
                  Code: 'de',
                  Label: 'allemand',
                },
                ProficiencyLevel: {
                  Listening: 'B2',
                  Reading: 'B2',
                  SpokenInteraction: 'B1',
                  SpokenProduction: 'B1',
                  Writing: 'B1',
                },
                VerifiedBy: {
                  Certificate: {
                    Title: 'Réussite Épreuves 3 Langues administratives Lux',
                  },
                },
              },
              {
                Description: {
                  Code: 'lb',
                  Label: 'luxembourgeois',
                },
                ProficiencyLevel: {
                  Listening: 'B2',
                  Reading: 'B2',
                  SpokenInteraction: 'B1',
                  SpokenProduction: 'B1',
                  Writing: 'B1',
                },
                VerifiedBy: {
                  Certificate: {
                    Title: 'Réussite Épreuves 3 Langues administratives Lux',
                  },
                },
              },
            ],
          },
        },
        Communication: {
          Description:
            '<p>Good communication skills gained through my studies, contacts with colleagues in numerous work, social, travel, reading, listening and watching experiences</p>',
        },
        Organisational: {
          Description:
            '<p>Good organisational skills gained through my studies, contacts with colleagues in numerous work, social, travel, reading, listening and watching experiences</p><p>Good managerial skills gained through my team work and teaching experiences in the public and private domains, in financial, banking, industrial, telecommunications and social sectors</p>',
        },
        JobRelated: {
          Description:
            '<p>As a 20 years&#39; IT professional, I have mastered most of the operational methodologies and functional needs for all the people I had the honour to serve or train in financial, industrial, social and educational sectors</p>',
        },
        Computer: {
          Description:
            '<p>IT Analysis Development SQL, VBA, Microsoft Office Suite, Linux, Senior IT Developer with 22 years of experience</p>',
          ProficiencyLevel: {
            Information: 'C',
            Communication: 'C',
            ContentCreation: 'C',
            Safety: 'C',
            ProblemSolving: 'C',
          },
          VerifiedBy: {
            Certificate: [
              {
                Title: 'UDemy:JavaScript - Full-Stack',
              },
              {
                Title: 'MBA, Decision Sciences, Database Management',
              },
            ],
          },
        },
        Driving: {
          Description: {
            Licence: ['B', 'BE'],
          },
        },
      },
      Documentation: {
        ReferenceTo: [
          {
            '@idref': 'ATT_268195295904',
          },
          {
            '@idref': 'ATT_1232731309454',
          },
          {
            '@idref': 'ATT_1569335359498',
          },
          {
            '@idref': 'ATT_1310223917108',
          },
          {
            '@idref': 'ATT_358703221139',
          },
          {
            '@idref': 'ATT_1395848218122',
          },
          {
            '@idref': 'ATT_482449208633',
          },
          {
            '@idref': 'ATT_73203237023',
          },
          {
            '@idref': 'ATT_1492613865125',
          },
          {
            '@idref': 'ATT_358703221112',
          },
          {
            '@idref': 'ATT_1395848218993',
          },
          {
            '@idref': 'ATT_48244920890',
          },
          {
            '@idref': 'ATT_732032370319',
          },
          {
            '@idref': 'ATT_2062465816582',
          },
        ],
      },
    },
    AttachmentList: {
      Attachment: [
        {
          '@id': 'ATT_268195295904',
          Name: 'Bac_1982.pdf',
          MimeType: 'application/pdf',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.10E0BDC8F23DBFF892F2206677DCED6D1581960793928.application_pdf',
          MetadataList: {
            Metadata: {
              '@key': 'number-of-pages',
              '@value': '2',
            },
          },
          Description: 'Bac_1982.pdf',
        },
        {
          '@id': 'ATT_1232731309454',
          Name: 'UC-71I9V90S.pdf',
          MimeType: 'application/pdf',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.DB61BD9616617D48E77666991485EC161581960856460.application_pdf',
          MetadataList: {
            Metadata: {
              '@key': 'number-of-pages',
              '@value': '1',
            },
          },
          Description: 'UC-71I9V90S.pdf',
        },
        {
          '@id': 'ATT_1569335359498',
          Name: 'MBA.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.409FC873C648E382EDCCA830A5D2FF311581960881650.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '2312x2253',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'MBA.jpg',
        },
        {
          '@id': 'ATT_1310223917108',
          Name: 'MBARegistreLux.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.E235CC5B2E600B0C56A199F9F658505C1581960937852.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '4651x6805',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'MBARegistreLux.jpg',
        },
        {
          '@id': 'ATT_358703221139',
          Name: 'LaureaBiologia.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.D50723E6DBDA6E52D3BE8370397FA9251581960992509.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '4632x6190',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LaureaBiologia.jpg',
        },
        {
          '@id': 'ATT_1395848218122',
          Name: 'LaureaHomologationLux.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.BD60387E385B9112C2FB543D18DAC9CD1581961006711.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '1692x2324',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LaureaHomologationLux.jpg',
        },
        {
          '@id': 'ATT_482449208633',
          Name: 'LicenceSpecialeBiologieMoleculaire.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.8AF9E24CCDB40DF57A26785A485B73201581961037847.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '2156x2449',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LicenceSpecialeBiologieMoleculaire.jpg',
        },
        {
          '@id': 'ATT_73203237023',
          Name: 'LicenceSpecialeBiologieMoleculaire_Certif.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.7667CCCFD3CA16D02E32CB7469AC7A8B1581961062820.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '4500x4608',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LicenceSpecialeBiologieMoleculaire_Certif.jpg',
        },
        {
          '@id': 'ATT_1492613865125',
          Name: 'CRLA.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.2466B66A4C826ACDDCAEF6A2F0EFCF2B1581961112171.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '1611x2081',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'CRLA.jpg',
        },
        {
          '@id': 'ATT_358703221112',
          Name: 'LaureaBiologia.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.D50723E6DBDA6E52D3BE8370397FA9251581961195274.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '4632x6190',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LaureaBiologia.jpg',
        },
        {
          '@id': 'ATT_1395848218993',
          Name: 'LaureaHomologationLux.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.BD60387E385B9112C2FB543D18DAC9CD1581961226829.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '1692x2324',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LaureaHomologationLux.jpg',
        },
        {
          '@id': 'ATT_48244920890',
          Name: 'LicenceSpecialeBiologieMoleculaire.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.8AF9E24CCDB40DF57A26785A485B73201581961271334.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '2156x2449',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LicenceSpecialeBiologieMoleculaire.jpg',
        },
        {
          '@id': 'ATT_732032370319',
          Name: 'LicenceSpecialeBiologieMoleculaire_Certif.jpg',
          MimeType: 'image/jpeg',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/1496D9B6-8A72-4E89-8AB7-F9AAEE5C2314.7667CCCFD3CA16D02E32CB7469AC7A8B1581961308162.image_jpeg',
          MetadataList: {
            Metadata: [
              {
                '@key': 'dimension',
                '@value': '4500x4608',
              },
              {
                '@key': 'number-of-pages',
                '@value': '1',
              },
            ],
          },
          Description: 'LicenceSpecialeBiologieMoleculaire_Certif.jpg',
        },
        {
          '@id': 'ATT_2062465816582',
          Name: 'eCornell_CertificateReport.pdf',
          MimeType: 'application/pdf',
          TempURI:
            'https://europass.cedefop.europa.eu/api/files/file/BBF0BED6-0D9E-4D32-8EE1-AD82A2889696.F125CFE5FF4CEEE0956A5C9FAFCDCA461582365846651.application_pdf',
          MetadataList: {
            Metadata: {
              '@key': 'number-of-pages',
              '@value': '1',
            },
          },
          Description: 'eCornell_CertificateReport.pdf',
        },
      ],
    },
    CoverLetter: null,
  },
];
