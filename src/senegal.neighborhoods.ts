import { SenegalCity } from "./senegal.city";
import { SenegalDepartment } from "./senegal.department";
import { SenegalLandmark } from "./senegal.landmark";

export const SENEGAL_NEIGHBORHOODS = {
  [SenegalDepartment.DAKAR]: {
    [SenegalCity.YOFF]: [
      SenegalLandmark.YOFF_BCEAO,
      SenegalLandmark.YOFF_DIAMALAYE,
      SenegalLandmark.YOFF_APECSY,
      SenegalLandmark.YOFF_MARATHON,
      SenegalLandmark.YOFF_ECO_BANK,
      SenegalLandmark.YOFF_VIRAGE,
      SenegalLandmark.YOFF_BIAGUI,
      SenegalLandmark.YOFF_ROND_POINT,
      SenegalLandmark.YOFF_SDE,
      SenegalLandmark.YOFF_OCEAN,
      SenegalLandmark.YOFF_CITÉ_DJILI_MBAYE,
      SenegalLandmark.YOFF_DIAMALAYE_BRIOCHE_DOREE,
    ],

    [SenegalCity.GRAND_YOFF]: [
      SenegalLandmark.GRAND_YOFF_COTE_BRT,
      SenegalLandmark.GRAND_YOFF_CITE_MILLIONNAIRE,
      SenegalLandmark.GRAND_YOFF_CTO,
      SenegalLandmark.GRAND_YOFF_EGLISE,
      SenegalLandmark.GRAND_YOFF_BRIOCHE_DOREE,
    ],

    [SenegalCity.NORD_FOIRE]: [
      SenegalLandmark.NORD_FOIRE_YUM_YUM,
      SenegalLandmark.NORD_FOIRE_BANK_OF_AFRICA,
      SenegalLandmark.NORD_FOIRE_BRIOCHE_DOREE,
      SenegalLandmark.NORD_FOIRE_SDE,
      SenegalLandmark.NORD_FOIRE_TERRAIN_BASKET,
    ],

    [SenegalCity.OUEST_FOIRE]: [
      SenegalLandmark.OUEST_FOIRE_BANQUE_CBAO,
      SenegalLandmark.OUEST_FOIRE_AUTOROUTE_TERMINUS_BUS,
      SenegalLandmark.OUEST_FOIRE_CASE_DES_TOUTS_PETITS,
      SenegalLandmark.OUEST_FOIRE_FEDERATION_FOOTBALL,
      SenegalLandmark.OUEST_FOIRE_BARA_COUTURE,
      SenegalLandmark.OUEST_FOIRE_BRIOCHE_DOREE,
      SenegalLandmark.OUEST_FOIRE_PHARMACIE_SABARA,
    ],

    [SenegalCity.HLM_GRAND_YOFF]: [
      SenegalLandmark.HLM_GRAND_YOFF_DIBITERIE_KOROMACK_FAYE,
      SenegalLandmark.HLM_GRAND_YOFF_HOTEL_SOUM_SOUM,
      SenegalLandmark.HLM_GRAND_YOFF_ECOLE_PEDAGOGUE,
      SenegalLandmark.HLM_GRAND_YOFF_TERMINUS_AIBD,
    ],

    [SenegalCity.SICAP_FOIRE]: [
      SenegalLandmark.SICAP_FOIRE_TOUBA_OIL,
      SenegalLandmark.SICAP_FOIRE_PORTE_CICES,
      SenegalLandmark.SICAP_FOIRE_YOFF_DIBITERIE_KOROMACK_FAYE,
    ],

    [SenegalCity.OUAKAM]: [
      SenegalLandmark.OUAKAM_STATION_SHELL,
      SenegalLandmark.OUAKAM_TERMINUS_P7,
      SenegalLandmark.OUAKAM_TERMINUS_43,
      SenegalLandmark.OUAKAM_COMICO,
      SenegalLandmark.OUAKAM_CITE_AVION,
      SenegalLandmark.OUAKAM_BRIOCHE_DOREE,
      SenegalLandmark.OUAKAM_MACKYOU_FAYE,
      SenegalLandmark.OUAKAM_ROND_POINT_MONUMENT,
      SenegalLandmark.OUAKAM_SUPER_MARCHE_MON_PRIX,
      SenegalLandmark.OUAKAM_MAMELLE,
    ],

    [SenegalCity.LIBERTE_6]: [
      SenegalLandmark.LIBERTE_6_PHARMACIE_CAMP_LECLERC,
      SenegalLandmark.LIBERTE_6_PENTOLA,
      SenegalLandmark.LIBERTE_6_DIBITERIE_OUBA,
      SenegalLandmark.LIBERTE_6_STATION,
      SenegalLandmark.LIBERTE_6_MARCHE_BARACK,
      SenegalLandmark.LIBERTE_6_NUMERO_UNO,
      SenegalLandmark.LIBERTE_6_IMMEUBLE_FERDINAND_COLY,
      SenegalLandmark.LIBERTE_6_AUCHAN,
      SenegalLandmark.LIBERTE_6_VDN,
      SenegalLandmark.LIBERTE_6_HYUNDAI_VDN,
    ],

    [SenegalCity.CITE_MIXTA]: [SenegalLandmark.CITE_MIXTA_TERRAIN_BASKET],

    [SenegalCity.HLM]: [
      SenegalLandmark.HLM_SODIA,
      SenegalLandmark.HLM_POSTE_SANTE,
      SenegalLandmark.HLM_6,
      SenegalLandmark.HLM_RAIL,
      SenegalLandmark.HLM_STATION,
    ],

    [SenegalCity.CASTOR]: [
      SenegalLandmark.CASTOR_SODIDA,
      SenegalLandmark.CASTOR_BRIOCHE_DOREE,
      SenegalLandmark.CASTOR_AUCHAN,
    ],

    [SenegalCity.DIEUPPEUL]: [SenegalLandmark.DIEUPPEUL_TERRAIN_BASKET],

    [SenegalCity.PLATEAU]: [],

    [SenegalCity.PARCELLE_ASSAINIE]: [],

    [SenegalCity.SCAT_URBAM]: [],

    [SenegalCity.NIARY_TALLY]: [],

    [SenegalCity.BENE_TALLY]: [],

    [SenegalCity.CENTENAIRE]: [],

    [SenegalCity.MEDINA]: [],

    [SenegalCity.GRAND_MEDINE]: [],

    [SenegalCity.FASS]: [],

    [SenegalCity.NGOR]: [],

    [SenegalCity.ALMADIES]: [],

    [SenegalCity.GUEULE_TAPEE]: [],

    [SenegalCity.SACRE_COEUR]: [],

    [SenegalCity.MERMOZ]: [],

    [SenegalCity.COLOBANE]: [],

    [SenegalCity.MARISTE]: [],
  },
  [SenegalDepartment.GUEDIAWAYE]: {
    [SenegalCity.GOLF_SUD]: [],
  },
  [SenegalDepartment.KEUR_MASSAR]: {
    [SenegalCity.MALIKA]: [],
  },
  [SenegalDepartment.PIKINE]: {
    [SenegalCity.MBAO]: [],
  },
  [SenegalDepartment.RUFISQUE]: {
    [SenegalCity.BARGNY]: [],
    [SenegalCity.DIAMNIADIO]: [],
    [SenegalCity.BAMBILOR]: [],
  },
  [SenegalDepartment.THIES]: {
    [SenegalCity.DIXIEME]: [],
  },
  [SenegalDepartment.MBOUR]: {
    [SenegalCity.SALY]: [],
  },
};
