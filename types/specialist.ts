export interface Education {
  id: string
  type: string
  institution: string
  date: string
  certificateUrl?: string
}

export interface Specialist {
  id: string
  fullName: string
  photo: string
  profile: string
  experience: number
  education: Education[]
}