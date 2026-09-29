const reports = [
  {
    id: "1",
    title: "Overflowing waste bin",
    category: "Overflowing Bin",
    description:
      "A public waste bin has been overflowing for several days and waste is spreading onto the surrounding area.",
    area: "Bole",
    city: "Addis Ababa",
    status: "Open",
    severity: "High",
    reportedAt: "2 hours ago",
    verifications: 14,
    reportedBy: "resident-1",
    activity: [
      {
        id: "1-1",
        type: "reported",
        label: "Report submitted",
        date: "2 hours ago",
      },
    ],
  },

  {
    id: "2",
    title: "Missed waste collection",
    category: "Missed Collection",
    description:
      "The scheduled waste collection has not happened and several households are still waiting for collection.",
    area: "Kazanchis",
    city: "Addis Ababa",
    status: "In Progress",
    severity: "Medium",
    reportedAt: "Yesterday",
    verifications: 9,
    reportedBy: "resident-1",
    activity: [
      {
        id: "2-1",
        type: "reported",
        label: "Report submitted",
        date: "Yesterday",
      },
      {
        id: "2-2",
        type: "in-progress",
        label: "Collection in progress",
        date: "Today",
      },
    ],
  },

  {
    id: "3",
    title: "Illegal dumping near road",
    category: "Illegal Dumping",
    description:
      "Household and construction waste has been dumped beside the road, creating an unsafe and unpleasant public space.",
    area: "Merkato",
    city: "Addis Ababa",
    status: "Resolved",
    severity: "High",
    reportedAt: "2 days ago",
    verifications: 27,
    reportedBy: "resident-1",
    activity: [
      {
        id: "3-1",
        type: "reported",
        label: "Report submitted",
        date: "2 days ago",
      },
      {
        id: "3-2",
        type: "in-progress",
        label: "Collection in progress",
        date: "Yesterday",
      },
      {
        id: "3-3",
        type: "resolved",
        label: "Report resolved",
        date: "Today",
      },
    ],
  },

  {
    id: "4",
    title: "Waste accumulation around collection point",
    category: "Accumulation",
    description:
      "Waste has accumulated around a collection point and needs attention from the local collection service.",
    area: "Piassa",
    city: "Addis Ababa",
    status: "Open",
    severity: "Medium",
    reportedAt: "3 days ago",
    verifications: 6,
    reportedBy: "resident-1",
    activity: [
      {
        id: "4-1",
        type: "reported",
        label: "Report submitted",
        date: "3 days ago",
      },
    ],
  },

  {
    id: "5",
    title: "Damaged public waste container",
    category: "Damaged Bin",
    description:
      "A damaged waste container is no longer functioning properly and waste is being left beside it.",
    area: "Sar Bet",
    city: "Addis Ababa",
    status: "In Progress",
    severity: "Low",
    reportedAt: "4 days ago",
    verifications: 4,
    reportedBy: "resident-1",
    activity: [
      {
        id: "5-1",
        type: "reported",
        label: "Report submitted",
        date: "4 days ago",
      },
      {
        id: "5-2",
        type: "in-progress",
        label: "Collection in progress",
        date: "Today",
      },
    ],
  },

  {
    id: "6",
    title: "Overflowing collection area",
    category: "Overflowing Bin",
    description:
      "A collection area is heavily overloaded and requires collection to prevent further accumulation.",
    area: "CMC",
    city: "Addis Ababa",
    status: "Open",
    severity: "High",
    reportedAt: "5 days ago",
    verifications: 19,
    reportedBy: "resident-1",
    activity: [
      {
        id: "6-1",
        type: "reported",
        label: "Report submitted",
        date: "5 days ago",
      },
    ],
  },
];

export default reports;
