export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-link",
  },
  {
    id: 2,
    title: "About",
    path: "/about-us",
    cName: "nav-link",
    submenu: [
      {
        title: "Our Values",
        path: "/our-values",
      },
    ],
  },

  {
    id: 3,
    title: "Services",
    path: "#",
    cName: "nav-link",

    submenu: [
      {
        title: "B2B Marketing",
        path: "#",
        submenu: [
          {
            title: "Lead Generation",
            path: "/lead-generation",
          },
          {
            title: "Creative Designing",
            path: "/creative-designing",
          },
          {
            title: "Digital Marketing",
            path: "/digital-marketing",
          },
        ],
      },

      {
        title: "Experiential Marketing",
        path: "#",

        submenu: [
          {
            title: "Physical Events",
            path: "/event-management-agency",
          },
          {
            title: "Virtual Events",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Our Work",
    path: "/our-work",
    cName: "nav-link",
  },
  {
    id: 5,
    title: "Resources",
    path: "#",
    cName: "nav-link",

    submenu: [
      {
        title: "Blogs",
        path: "https://blog.kestoneglobal.com/",
        target: "blank",
      },
      {
        title: "Investor Services",
        path: "/investor-services",
      },
    ],
  },

  {
    id: 6,
    title: "Contact Us",
    path: "/contact-us",
    cName: "nav-link",
    submenu: [
      {
        title: "Work With Us",
        path: "work-with-us",
      },
    ],
  },
];

export const aboutDropdown = [
  {
    id: 1,
    title: "Our Values",
    path: "#",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Work With Us",
    path: "/",
    cName: "submenu-item",
  },
];

export const serviceDropdown = [
  {
    id: 1,
    title: "Lead Generation",
    path: "/",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Creative Designing",
    path: "/",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Digital Marketing",
    path: "/",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Physical Event",
    path: "/",
    cName: "submenu-item",
  },

  {
    id: 5,
    title: "Virtual Events",
    path: "/",
    cName: "submenu-item",
  },
];

export const resourceDropdown = [
  {
    id: 1,
    title: "Blogs",
    path: "#",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Kestone in News",
    path: "/",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Investor Services",
    path: "#",
    cName: "submenu-item",
  },
];
