import type { StaticImageData } from "next/image"

import accessories from "@/app/assets/images/photos/accessories.jpg"
import aboutHero from "@/app/assets/images/photos/about-hero.jpg"
import aboutSnapshot from "@/app/assets/images/photos/about-snapshot.jpg"
import calculatorBill from "@/app/assets/images/photos/calculator-bill.jpg"
import cameras from "@/app/assets/images/photos/cameras.jpg"
import commercialKitchen from "@/app/assets/images/photos/commercial-kitchen.jpg"
import documentsLaptop from "@/app/assets/images/photos/documents-laptop.jpg"
import electricianPanel from "@/app/assets/images/photos/electrician-panel.jpg"
import engineerBlueprint from "@/app/assets/images/photos/engineer-blueprint.jpg"
import heroPowerLines from "@/app/assets/images/photos/hero-power-lines.jpg"
import houseExterior from "@/app/assets/images/photos/house-exterior.jpg"
import houseKeys from "@/app/assets/images/photos/house-keys.jpg"
import laptopPointing from "@/app/assets/images/photos/laptop-pointing.jpg"
import livingRoom from "@/app/assets/images/photos/living-room.jpg"
import locators from "@/app/assets/images/photos/locators.jpg"
import meeting from "@/app/assets/images/photos/meeting.jpg"
import metal from "@/app/assets/images/photos/metal.jpg"
import office from "@/app/assets/images/photos/office.jpg"
import officeLobby from "@/app/assets/images/photos/office-lobby.jpg"
import pipeline from "@/app/assets/images/photos/pipeline.jpg"
import retailCounter from "@/app/assets/images/photos/retail-counter.jpg"
import solarAerial from "@/app/assets/images/photos/solar-aerial.jpg"
import solarField from "@/app/assets/images/photos/solar-field.jpg"
import solarPanels from "@/app/assets/images/photos/solar-panels.jpg"
import sonde from "@/app/assets/images/photos/sonde.jpg"
import survey from "@/app/assets/images/photos/survey.jpg"
import team from "@/app/assets/images/photos/team.jpg"
import windHills from "@/app/assets/images/photos/wind-hills.jpg"
import windTurbines from "@/app/assets/images/photos/wind-turbines.jpg"

/**
 * Local photography. Equipment photos (survey through accessories) are used by
 * the product catalog and must keep their keys. Everything else is site
 * editorial imagery sourced from Unsplash (free license).
 */
export const PHOTOS = {
  // Equipment catalog (do not rename)
  survey,
  locators,
  sonde,
  cameras,
  pipeline,
  metal,
  accessories,

  // Energy and infrastructure
  heroPowerLines,
  aboutHero,
  windTurbines,
  windHills,
  solarField,
  solarPanels,
  solarAerial,
  electricianPanel,
  aboutSnapshot,

  // Customers and places
  houseExterior,
  livingRoom,
  houseKeys,
  office,
  officeLobby,
  meeting,
  team,
  retailCounter,
  commercialKitchen,

  // Documents and service
  documentsLaptop,
  calculatorBill,
  laptopPointing,
  engineerBlueprint,
} as const satisfies Record<string, StaticImageData>
