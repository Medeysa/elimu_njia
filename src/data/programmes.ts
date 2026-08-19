export type Programme = {
  code: string
  name: string
  award: string
  institution: string
  region: string
  points: number
  duration: string
  field: string
  fieldCategory: string
  capacity: number
  entryRequirements: string
  introducedYear: number
marketDemand: number
  gradeConditions: {
    subject: string
    condition: string
  }[]
  guidebookPage: number
  dataNote?: string
}

export const programmes: Programme[] = [
  {
    code: "MD001",
    name: "Bachelor of Medicine and Surgery",
    field: "Medicine",
    fieldCategory: "Health Sciences",
    award: "Doctor of Medicine",
    institution: "Muhimbili University of Health and Allied Sciences",
    region: "Dar es Salaam",
    points: 4,
    duration: "5 years",
    capacity: 120,
introducedYear: 2018,
  marketDemand: 10,
    entryRequirements:
      "Candidates must have the required qualifications in the relevant subjects as specified in the official admission guidebook.",

    gradeConditions: [
      {
        subject: "Chemistry",
        condition: "At least C",
      },
      {
        subject: "Biology",
        condition: "At least D",
      },
      {
        subject: "Physics",
        condition: "At least E",
      },
    ],

    guidebookPage: 145,
  },

  {
    code: "CS001",
    name: "Bachelor of Science in Computer Science",
    field: "Computer Science",
     fieldCategory: "Computing & IT",
    award: "Bachelor Degree",
    institution: "University of Dodoma",
    region: "Dodoma",
    points: 4,
    duration: "3 years",
    capacity: 100,
    introducedYear: 2023,
  marketDemand: 9,


    entryRequirements:
      "Candidates must meet the required qualifications in the relevant subjects for admission to the programme.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least C",
      },
      {
        subject: "Physics",
        condition: "At least D",
      },
    ],

    guidebookPage: 212,
  },

  {
    code: "ENG001",
    name: "Bachelor of Science in Civil Engineering",
    field: "Engineering",
      fieldCategory: "Engineering",
    award: "Bachelor Degree",
    institution: "Ardhi University",
    region: "Dar es Salaam",
    points: 4,
    duration: "4 years",
    capacity: 80,
    introducedYear: 2020,
  marketDemand: 7,


    entryRequirements:
      "Candidates must satisfy the minimum entry qualifications specified for engineering programmes.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least C",
      },
      {
        subject: "Physics",
        condition: "At least D",
      },
      {
        subject: "Chemistry",
        condition: "At least D",
      },
    ],

    guidebookPage: 178,
  },
    {
    code: "BUS001",
    name: "Bachelor of Commerce",
    field: "Commerce",
    fieldCategory: "Business",
    award: "Bachelor Degree",
    institution: "University of Dar es Salaam",
    region: "Dar es Salaam",
    points: 4,
    duration: "3 years",
    capacity: 150,
    introducedYear: 2019,
    marketDemand: 8,

    entryRequirements:
      "Candidates must meet the required qualifications for admission to business-related programmes.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least D",
      },
      {
        subject: "English",
        condition: "At least D",
      },
    ],

    guidebookPage: 190,
  },

  {
    code: "NUR001",
    name: "Bachelor of Science in Nursing",
    field: "Nursing",
    fieldCategory: "Health Sciences",
    award: "Bachelor Degree",
    institution: "Muhimbili University of Health and Allied Sciences",
    region: "Dar es Salaam",
    points: 4,
    duration: "4 years",
    capacity: 100,
    introducedYear: 2021,
    marketDemand: 9,

    entryRequirements:
      "Candidates must meet the required qualifications for admission to nursing programmes.",

    gradeConditions: [
      {
        subject: "Biology",
        condition: "At least C",
      },
      {
        subject: "Chemistry",
        condition: "At least D",
      },
      {
        subject: "Physics",
        condition: "At least E",
      },
    ],

    guidebookPage: 155,
  },

  {
    code: "STAT001",
    name: "Bachelor of Science in Statistics",
    field: "Statistics",
    fieldCategory: "Science",
    award: "Bachelor Degree",
    institution: "University of Dodoma",
    region: "Dodoma",
    points: 3,
    duration: "3 years",
    capacity: 80,
    introducedYear: 2022,
    marketDemand: 7,

    entryRequirements:
      "Candidates must meet the required qualifications for admission to statistics programmes.",

    gradeConditions: [
      {
        subject: "Mathematics",
        condition: "At least C",
      },
      {
        subject: "Physics",
        condition: "At least D",
      },
    ],

    guidebookPage: 220,
  },
]

export const getRecencyScore = (introducedYear: number) => {
  const currentYear = 2026
  const age = currentYear - introducedYear

  if (age <= 1) return 10
  if (age <= 2) return 9
  if (age <= 3) return 8
  if (age <= 5) return 6
  if (age <= 8) return 4

  return 2
}

export const getRecommendationScore = (programme: Programme) => {
  const recencyScore = getRecencyScore(
    programme.introducedYear,
  )

  return (
    programme.marketDemand * 0.6 +
    recencyScore * 0.4
  )
}