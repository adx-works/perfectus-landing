import type { Specialist } from '~/types/specialist'
import { dyakonovaVilenaViktorovna } from './dyakonova-vilena-viktorovna'
import { tsarevaYuliaAnatolyevna } from './tsareva-yulia-anatolyevna'
import { goginaAlinaVladimirovna } from './gogina-alina-vladimirovna'
import { galsterOksanaAnatolyevna } from './galster-oksana-anatolyevna'

export const specialists: Specialist[] = [
  dyakonovaVilenaViktorovna,
  tsarevaYuliaAnatolyevna,
  goginaAlinaVladimirovna,
  galsterOksanaAnatolyevna
]

export const specialistsMap: Record<string, Specialist> = {
  [dyakonovaVilenaViktorovna.id]: dyakonovaVilenaViktorovna,
  [tsarevaYuliaAnatolyevna.id]: tsarevaYuliaAnatolyevna,
  [goginaAlinaVladimirovna.id]: goginaAlinaVladimirovna,
  [galsterOksanaAnatolyevna.id]: galsterOksanaAnatolyevna
}

export const getSpecialistById = (id: string): Specialist | undefined => {
  return specialistsMap[id]
}