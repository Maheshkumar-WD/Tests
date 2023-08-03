const pricingData = {
  monthly: [
    {
      planType: "Free",
      isMostPopular: false,
      desc: "The basics for individuals and organizations",
      price: 0,
      priceDescText: "per month",
      buttons: [{ title: "Join for Free", link: "", varient: "solid" }],
      accordians: {
        groups: [
          {
            title: null,
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Unlimited public/private repositories",
                description:
                  "Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.",
              },
              {
                title: "Automatic security and version updates",
                description:
                  "Keep projects secure by automatically opening pull requests that update vulnerable dependencies to secure versions, and update out-of-date dependencies.",
              },
              {
                title: "2000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "500 MB of packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
              {
                title: "New issues & projects (in Limited beta)",
                description:
                  "Give your developers flexible features for project management that adapts to any team, project, and workflow — all alongside your code.",
              },
              {
                title: "Community support",
                description:
                  "Get help with most of your GitHub questions and issues in our Community Forum.",
              },
            ],
          },
          {
            title: "featured add-ons",
            accordian: [
              {
                title: "GitHub Copilot Access",
                description:
                  "With GitHub Copilot, get suggestions for whole lines or entire functions—right inside your editor.",
              },
              {
                title: "GitHub codespaces Access",
                description:
                  "With GitHub Codespaces, get an instant dev environment in the cloud, so you can code anywhere on any device.",
              },
            ],
          },
        ],
      },
    },
    {
      planType: "Team",
      isMostPopular: true,
      badgeText: "popular",
      desc: "Advanced collaboration forindividuals and organizations",
      price: 4,
      priceDescText: "per user/month",
      buttons: [{ title: "Continue with Team", link: "#", varient: "solid" }],
      accordians: {
        groups: [
          {
            title: "Everything included in Free, plus...",
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Access to GitHub Codespaces",
                description:
                  "Blazing fast cloud developer environments with flexible compute and pre-configured containers, developers can code, collaborate, and debug from any browser. Pay only for what you use with compute fees starting at $0.18/hr and storage fees at $0.07/GB per month.",
              },
              {
                title: "Protected branches",
                description:
                  "Enforce restrictions on how code branches are merged, including requiring reviews by selected collaborators, or allowing only specific contributors to work on a particular branch.",
              },
              {
                title: "Multiple reviewers in pull requests",
                freePublicRepo: false,
                description:
                  "Assign multiple users or a team to review a pull request.",
              },
              {
                title: "Draft pull requests",
                freePublicRepo: false,
                description:
                  "Easily discuss and collaborate on pull requests before submitting to formal review.",
              },
              {
                title: "Code owners",
                description:
                  "Automatically request reviews—or require approval—by selected contributors when changes are made to sections of code that they own.",
              },
              {
                title: "Required reviewers",
                description:
                  "Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.",
              },
              {
                title: "Pages and Wikis",
                description:
                  "Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.",
              },
              {
                title: "Environment deployment branches and secrets",
                description:
                  "A job cannot access secrets that are defined in an environment unless it is running on the specified branch.",
              },
              {
                title: "3,000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "2GB of Packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
              {
                title: "Web-based Support",
                freePublicRepo: false,
                description:
                  "GitHub Support can help you troubleshoot issues you run into while using GitHub.",
              },
            ],
          },
        ],
      },
    },
    {
      planType: "Enterprise",
      isMostPopular: false,
      badgeText: null,
      desc: "Security, compliance, and flexible deployment",
      price: 21,
      priceDescText: "per user/month",
      buttons: [
        { title: "Start a free trial", link: "#", varient: "solid" },
        { title: "Contact Sales", link: "#", varient: "outline" },
      ],
      accordians: {
        groups: [
          {
            title: "Everything included in Free, plus...",
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Enterprise managed Users",
                description:
                  "Own and control the user accounts of your enterprise members through your identity provider (IdP).",
              },
              {
                title: "User provisioning through SCIM",
                description:
                  "Automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your GitHub organization on your SAML IdP, the member will be automatically removed from the GitHub organization.",
              },
              {
                title:
                  "Enterprise Account to centrally manage multiple organizations",
                freePublicRepo: false,
                description:
                  "GitHub Enterprise Cloud includes the option to create an enterprise account, which enables collaboration between multiple organizations, gives administrators a single point of visibility and management and brings license cost savings for identical users in multiple organizations.",
              },
              {
                title: "Environment protection rules",
                freePublicRepo: false,
                description:
                  "When a workflow job references an environment, the job won't start until all of the environment's protection rules pass.",
              },
              {
                title: "Audit Log API",
                description:
                  "As a GitHub Enterprise Cloud organization administrator, you can now access log events using our GraphQL API and monitor the activity in your organization.",
              },
              {
                title: "SOC1, SOC2, type 2 reports annually",
                description:
                  "GitHub offers AICPA System and Organization Controls (SOC) 1 Type 2 and SOC 2 Type 2 reports with IAASB International Standards on Assurance Engagements, ISAE 3000, and ISAE 3402.",
              },
              {
                title: "FedRAMP Tailored Authority to Operate (ATO)",
                description:
                  "Government users can host projects on GitHub Enterprise Cloud with the confidence that our platform meets the low impact software-as-a-service (SaaS) baseline of security standards set by our U.S. federal government partners.",
              },

              {
                title: "50,000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "50GB of Packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
            ],
          },
          {
            title: "exclusive add-ons",
            accordian: [
              {
                title: "GitHub Advanced Security",
                freePublicRepo: false,
                description:
                  "Automatically find and fix vulnerabilities before they are put into production. Get notified if your secrets have been exposed in your codebase.",
              },
              {
                title: "Premium support",
                description:
                  "With Premium, get a 30-minute SLA on Urgent tickets and 24/7 web and phone support via callback request. With Premium Plus, get everything in Premium, assigned Customer Reliability Engineer and more.",
              },
            ],
          },
        ],
      },
    },
  ],
  yearly: [
    {
      planType: "Free",
      isMostPopular: false,
      desc: "The basics for individuals and organizations",
      price: 0,
      priceDescText: "per month forever",
      buttons: [{ title: "Join for Free", link: "", varient: "solid" }],
      accordians: {
        groups: [
          {
            title: null,
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Unlimited public/private repositories",
                description:
                  "Host open source projects in public GitHub repositories, accessible via web or command line. Public repositories are accessible to anyone at GitHub.com.",
              },
              {
                title: "Automatic security and version updates",
                description:
                  "Keep projects secure by automatically opening pull requests that update vulnerable dependencies to secure versions, and update out-of-date dependencies.",
              },
              {
                title: "2000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "500 MB of packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
              {
                title: "New issues & projects (in Limited beta)",
                description:
                  "Give your developers flexible features for project management that adapts to any team, project, and workflow — all alongside your code.",
              },
              {
                title: "Community support",
                description:
                  "Get help with most of your GitHub questions and issues in our Community Forum.",
              },
            ],
          },
          {
            title: "featured add-ons",
            accordian: [
              {
                title: "GitHub Copilot Access",
                description:
                  "With GitHub Copilot, get suggestions for whole lines or entire functions—right inside your editor.",
              },
              {
                title: "GitHub codespaces Access",
                description:
                  "With GitHub Codespaces, get an instant dev environment in the cloud, so you can code anywhere on any device.",
              },
            ],
          },
        ],
      },
    },
    {
      planType: "Team",
      isMostPopular: true,
      badgeText: "popular",
      desc: "Advanced collaboration forindividuals and organizations",
      strickPrice: 4,
      price: 3.67,
      priceDescText: "per user/month for the first 12 months*",
      buttons: [{ title: "Continue with Team", link: "#", varient: "solid" }],
      accordians: {
        groups: [
          {
            title: "Everything included in Free, plus...",
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Access to GitHub Codespaces",
                description:
                  "Blazing fast cloud developer environments with flexible compute and pre-configured containers, developers can code, collaborate, and debug from any browser. Pay only for what you use with compute fees starting at $0.18/hr and storage fees at $0.07/GB per month.",
              },
              {
                title: "Protected branches",
                description:
                  "Enforce restrictions on how code branches are merged, including requiring reviews by selected collaborators, or allowing only specific contributors to work on a particular branch.",
              },
              {
                title: "Multiple reviewers in pull requests",
                freePublicRepo: false,
                description:
                  "Assign multiple users or a team to review a pull request.",
              },
              {
                title: "Draft pull requests",
                freePublicRepo: false,
                description:
                  "Easily discuss and collaborate on pull requests before submitting to formal review.",
              },
              {
                title: "Code owners",
                description:
                  "Automatically request reviews—or require approval—by selected contributors when changes are made to sections of code that they own.",
              },
              {
                title: "Required reviewers",
                description:
                  "Ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.",
              },
              {
                title: "Pages and Wikis",
                description:
                  "Host documentation and simple websites for your project in a wiki format that contributors can easily edit either on the web or command line.",
              },
              {
                title: "Environment deployment branches and secrets",
                description:
                  "A job cannot access secrets that are defined in an environment unless it is running on the specified branch.",
              },
              {
                title: "3,000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "2GB of Packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
              {
                title: "Web-based Support",
                freePublicRepo: false,
                description:
                  "GitHub Support can help you troubleshoot issues you run into while using GitHub.",
              },
            ],
          },
        ],
      },
    },
    {
      planType: "Enterprise",
      isMostPopular: false,
      badgeText: null,
      desc: "Security, compliance, and flexible deployment",
      strickPrice: 21,
      price: 19.25,
      priceDescText: "per user/month for the first 12 months*",
      buttons: [
        { title: "Start a free trial", link: "#", varient: "solid" },
        { title: "Contact Sales", link: "#", varient: "outline" },
      ],
      accordians: {
        groups: [
          {
            title: "Everything included in Free, plus...",
            freePublicRepo: "Free for Public repositories",
            accordian: [
              {
                title: "Enterprise managed Users",
                description:
                  "Own and control the user accounts of your enterprise members through your identity provider (IdP).",
              },
              {
                title: "User provisioning through SCIM",
                description:
                  "Automatically invite members to join your organization when you grant access on your IdP. If you remove a member's access to your GitHub organization on your SAML IdP, the member will be automatically removed from the GitHub organization.",
              },
              {
                title:
                  "Enterprise Account to centrally manage multiple organizations",
                freePublicRepo: false,
                description:
                  "GitHub Enterprise Cloud includes the option to create an enterprise account, which enables collaboration between multiple organizations, gives administrators a single point of visibility and management and brings license cost savings for identical users in multiple organizations.",
              },
              {
                title: "Environment protection rules",
                freePublicRepo: false,
                description:
                  "When a workflow job references an environment, the job won't start until all of the environment's protection rules pass.",
              },
              {
                title: "Audit Log API",
                description:
                  "As a GitHub Enterprise Cloud organization administrator, you can now access log events using our GraphQL API and monitor the activity in your organization.",
              },
              {
                title: "SOC1, SOC2, type 2 reports annually",
                description:
                  "GitHub offers AICPA System and Organization Controls (SOC) 1 Type 2 and SOC 2 Type 2 reports with IAASB International Standards on Assurance Engagements, ISAE 3000, and ISAE 3402.",
              },
              {
                title: "FedRAMP Tailored Authority to Operate (ATO)",
                description:
                  "Government users can host projects on GitHub Enterprise Cloud with the confidence that our platform meets the low impact software-as-a-service (SaaS) baseline of security standards set by our U.S. federal government partners.",
              },

              {
                title: "50,000 CI/CD minutes/month",
                freePublicRepo: true,
                description:
                  "Use execution minutes with GitHub Actions to automate your software development workflows. Write tasks and combine them to build, test, and deploy any code project on GitHub.",
              },
              {
                title: "50GB of Packages storage",
                freePublicRepo: true,
                description:
                  "Host your own software packages or use them as dependencies in other projects. Both private and public hosting available.",
              },
            ],
          },
          {
            title: "exclusive add-ons",
            accordian: [
              {
                title: "GitHub Advanced Security",
                freePublicRepo: false,
                description:
                  "Automatically find and fix vulnerabilities before they are put into production. Get notified if your secrets have been exposed in your codebase.",
              },
              {
                title: "Premium support",
                description:
                  "With Premium, get a 30-minute SLA on Urgent tickets and 24/7 web and phone support via callback request. With Premium Plus, get everything in Premium, assigned Customer Reliability Engineer and more.",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default pricingData;
