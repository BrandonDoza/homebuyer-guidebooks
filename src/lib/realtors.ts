type RealtorInfo = {
    fullName: string
    firstName: string
    lastName: string
    contactUrl: string
  }
  
  export const realtorDirectory: Record<string, RealtorInfo> = {
    "maggiefast": {
      fullName: "Maggie Fast",
      firstName: "Maggie",
      lastName: "Fast",
      contactUrl: "https://www.maggie-fast.realtor/",
    },
    "sallierealtor": {
      fullName: "Sallie Realtor",
      firstName: "Sallie",
      lastName: "Fast",
      contactUrl: "https://sallierealtor.com/contact",
    },
    // Add more agents here...
  }