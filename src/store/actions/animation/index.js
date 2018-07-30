//Types
import {
  TRIGGER_ANIM_PAGE_LOADED,
  TRIGGER_ANIM_SECTION_TWO,
  TRIGGER_ANIM_SECTION_THREE,
  TRIGGER_ANIM_SECTION_FOUR,
  TRIGGER_ANIM_SECTION_FIVE
} from './types'

export const triggerAnimPageLoaded = payload => {
  console.log('trigger page loaded')
  return {
    type: TRIGGER_ANIM_PAGE_LOADED,
    payload: payload
  }
}

export const triggerAnimSectionTwo = payload => {
  console.log('trigger section two')
  return {
    type: TRIGGER_ANIM_SECTION_TWO,
    payload: payload
  }
}

export const triggerAnimSectionThree = payload => {
  console.log('trigger section three')
  return {
    type: TRIGGER_ANIM_SECTION_THREE,
    payload: payload
  }
}

export const triggerAnimSectionFour = payload => {
  console.log('trigger section four')
  return {
    type: TRIGGER_ANIM_SECTION_FOUR,
    payload: payload
  }
}

export const triggerAnimSectionFive = payload => {
  console.log('trigger section five')
  return {
    type: TRIGGER_ANIM_SECTION_FIVE,
    payload: payload
  }
}