import {
  GoCodeReview,
  GoCodespaces,
  GoCommentDiscussion,
  GoCopilot,
  GoIssueOpened,
  GoPackage,
  GoShieldCheck,
  GoWorkflow,
} from "react-icons/go";
const links = {
  products: {
    menuLinks: [
      {
        title: "Actions",
        desc: "Automate any workflow",
        logo: GoWorkflow,
        link: "#",
      },
      {
        title: "Packages",
        desc: "Host and Manage packages",
        logo: GoPackage,
        link: "#",
      },
      {
        title: "Security",
        desc: "Find and fix vulnerabilities",
        logo: GoShieldCheck,
        link: "#",
      },
      {
        title: "Codespaces",
        desc: "Instant dev environments",
        logo: GoCodespaces,
        link: "#",
      },
      {
        title: "Copilot",
        desc: "Write better code with AI",
        logo: GoCopilot,
        link: "#",
      },
      {
        title: "Code Review",
        desc: "Manage code changes",
        logo: GoCodeReview,
        link: "#",
      },
      {
        title: "Issues",
        desc: "Plan and track work",
        logo: GoIssueOpened,
        link: "#",
      },
      {
        title: "Discussions",
        desc: "Collaborate outside of code",
        logo: GoCommentDiscussion,
        link: "#",
      },
    ],
    explore: [
      { desc: "All Features", title: null, logo: null, link: "#" },
      { desc: "Documentation", title: null, logo: null, link: "#" },
      { desc: "GitHub Skills", title: null, logo: null, link: "#" },
      { desc: "Blog", title: null, logo: null, link: "#" },
      { desc: "Copilot", title: null, logo: null, link: "#" },
    ],
  },
  solutions: {
    groups: [
      {
        title: "For",
        links: [
          { desc: "Enterprice", title: null, logo: null, link: "#" },
          { desc: "Teams", title: null, logo: null, link: "#" },
          { desc: "Startups", title: null, logo: null, link: "#" },
          { desc: "education", title: null, logo: null, link: "#" },
        ],
      },
      {
        title: "By Solution",
        links: [
          { desc: "CI/CD & Automation", title: null, logo: null, link: "#" },
          { desc: "DevOps ", title: null, logo: null, link: "#" },
          { desc: "DevSecOps ", title: null, logo: null, link: "#" },
        ],
      },
      {
        title: "Case Studies",
        links: [
          { desc: "Customer Stories", title: null, logo: null, link: "#" },
          { desc: "Resources ", title: null, logo: null, link: "#" },
        ],
      },
    ],
  },
  openSource: {
    groups: [
      {
        title: "",
        links: [
          {
            title: "GitHub Sponsors",
            link: "#",
            desc: "Fund open source developers",
            logo: null,
          },
        ],
      },
      {
        title: "",
        links: [
          {
            title: "The ReadME Project",
            link: "#",
            desc: "Fund open source developers",
            logo: null,
          },
        ],
      },
      {
        title: "Repositories",
        links: [
          { title: "", link: "#", desc: "Topics", logo: null },
          { title: "", link: "#", desc: "Trending", logo: null },
          { title: "", link: "#", desc: "Collections", logo: null },
        ],
      },
    ],
  },
};
export default links;
