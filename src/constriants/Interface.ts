export interface DetailDisplayProps {
  data: {
    trl: { id: number, name: string },
    investmentEffort: string,
    type: { id: number, name: string },
    businessModels: { id: number, name: string }[]
  }
}
export interface TextDisplayProps {
    data: {
      company: {
        address: {
          longitude: any
          latitude: any
          country: any,
          city: any,
          street: string,
          house: string,
          zipCode: string
        },
        logo: string,
        name: string
      },
      description: string,
      id: number,
      name: string,
      picture: string,
      user: {
        email: string,
        firstName: string,
        id: number,
        lastName: string,
        position: string,
        profilePicture: string,
        sex: number
      },
    }
}

export interface videoDisplayProps {
  data: {
    id: number,
    video:string
  }
}