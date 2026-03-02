import type { Specialist } from '~/types/specialist'
import { dyakonovaVilenaViktorovna } from './dyakonova-vilena-viktorovna'
import { tsarevaYuliaAnatolyevna } from './tsareva-yulia-anatolyevna'
import { goginaAlinaVladimirovna } from './gogina-alina-vladimirovna'

export const specialists: Specialist[] = [
  dyakonovaVilenaViktorovna,
  tsarevaYuliaAnatolyevna,
  goginaAlinaVladimirovna
]

export const specialistsMap: Record<string, Specialist> = {
  [dyakonovaVilenaViktorovna.id]: dyakonovaVilenaViktorovna,
  [tsarevaYuliaAnatolyevna.id]: tsarevaYuliaAnatolyevna,
  [goginaAlinaVladimirovna.id]: goginaAlinaVladimirovna
}

export const getSpecialistById = (id: string): Specialist | undefined => {
  return specialistsMap[id]
}