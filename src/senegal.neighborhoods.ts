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
      SenegalLandmark.YOFF_BRIOCHE_DOREE,
      SenegalLandmark.YOFF_MARCHE,
      SenegalLandmark.YOFF_LAYENNE,
      SenegalLandmark.YOFF_SENELEC,
    ],

    [SenegalCity.GRAND_YOFF]: [
      SenegalLandmark.GRAND_YOFF_COTE_BRT,
      SenegalLandmark.GRAND_YOFF_CITE_MILLIONNAIRE,
      SenegalLandmark.GRAND_YOFF_CTO,
      SenegalLandmark.GRAND_YOFF_EGLISE,
      SenegalLandmark.GRAND_YOFF_BRIOCHE_DOREE,
      SenegalLandmark.GRAND_YOFF_VERS_POLICE,
    ],

    [SenegalCity.GRAND_DAKAR]: [SenegalLandmark.GRAND_DAKAR_RESTAURANT_LE_COQ],

    [SenegalCity.NORD_FOIRE]: [
      SenegalLandmark.NORD_FOIRE_YUM_YUM,
      SenegalLandmark.NORD_FOIRE_BANK_OF_AFRICA,
      SenegalLandmark.NORD_FOIRE_BRIOCHE_DOREE,
      SenegalLandmark.NORD_FOIRE_SDE,
      SenegalLandmark.NORD_FOIRE_TERRAIN_BASKET,
      SenegalLandmark.NORD_FOIRE_VDN,
    ],

    [SenegalCity.OUEST_FOIRE]: [
      SenegalLandmark.OUEST_FOIRE_BANQUE_CBAO,
      SenegalLandmark.OUEST_FOIRE_AUTOROUTE_TERMINUS_BUS,
      SenegalLandmark.OUEST_FOIRE_CASE_DES_TOUTS_PETITS,
      SenegalLandmark.OUEST_FOIRE_FEDERATION_FOOTBALL,
      SenegalLandmark.OUEST_FOIRE_BARA_COUTURE,
      SenegalLandmark.OUEST_FOIRE_BRIOCHE_DOREE,
      SenegalLandmark.OUEST_FOIRE_PHARMACIE_SABARA,
      SenegalLandmark.OUEST_FOIRE_ROND_POINT_YOFF,
      SenegalLandmark.OUEST_FOIRE_MARCHÉ_SERIGNE_FALLOU,
      SenegalLandmark.OUEST_FOIRE_ECOLE_DE_FORMATION_MEDECINE_SAMBA_DIALLO,
    ],

    [SenegalCity.HLM_GRAND_YOFF]: [
      SenegalLandmark.HLM_GRAND_YOFF_DIBITERIE_KOROMACK_FAYE,
      SenegalLandmark.HLM_GRAND_YOFF_HOTEL_SOUM_SOUM,
      SenegalLandmark.HLM_GRAND_YOFF_ECOLE_PEDAGOGUE,
      SenegalLandmark.HLM_GRAND_YOFF_TERMINUS_AIBD,
      SenegalLandmark.HLM_GRAND_YOFF_BRT_HYACINTHE_THIANDOUM,
      SenegalLandmark.HLM_GRAND_YOFF_ECOLE_YASINE_THIANDOU,
      SenegalLandmark.HLM_GRAND_YOFF_HOPITAL_AMERICAIN,
      SenegalLandmark.HLM_GRAND_YOFF_RESIDENCES_ATAYA,
      SenegalLandmark.HLM_GRAND_YOFF_EN_FACE_STADE_AMITIE,
    ],

    [SenegalCity.SICAP_FOIRE]: [
      SenegalLandmark.SICAP_FOIRE_TOUBA_OIL,
      SenegalLandmark.SICAP_FOIRE_PORTE_CICES,
      SenegalLandmark.SICAP_FOIRE_YOFF_DIBITERIE_KOROMACK_FAYE,
      SenegalLandmark.SICAP_FOIRE_CITE_MAGISTRAT,
      SenegalLandmark.SICAP_FOIRE_GENDARMERIE,
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
      SenegalLandmark.OUAKAM_CROISEMENT,
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
      SenegalLandmark.LIBERTE_6_SAMU,
      SenegalLandmark.LIBERTE_6_CSE,
      SenegalLandmark.LIBERTE_6_CITE_SONATEL,
      SenegalLandmark.LIBERTE_6_CITE_ALIOU_SOW,
      SenegalLandmark.LIBERTE_6_TERRAIN_FOOTBALL,
    ],

    [SenegalCity.CITE_MIXTA]: [SenegalLandmark.CITE_MIXTA_TERRAIN_BASKET],

    [SenegalCity.HLM]: [
      SenegalLandmark.HLM_SODIA,
      SenegalLandmark.HLM_POSTE_SANTE,
      SenegalLandmark.HLM_6,
      SenegalLandmark.HLM_RAIL,
      SenegalLandmark.HLM_STATION,
      SenegalLandmark.HLM_CITE_DOUANE,
      SenegalLandmark.HLM_MASSALIKOUL_DJINANE,
      SenegalLandmark.HLM_EDK,
    ],

    [SenegalCity.CASTOR]: [
      SenegalLandmark.CASTOR_SODIDA,
      SenegalLandmark.CASTOR_BRIOCHE_DOREE,
      SenegalLandmark.CASTOR_AUCHAN,
      SenegalLandmark.CASTOR_TERRAIN_FOOTBALL,
    ],

    [SenegalCity.DIEUPPEUL]: [SenegalLandmark.DIEUPPEUL_TERRAIN_BASKET],

    [SenegalCity.PLATEAU]: [],

    [SenegalCity.PARCELLE_ASSAINIE]: [
      SenegalLandmark.PARCELLE_ASSAINIE_ROND_POINT_26,
      SenegalLandmark.PARCELLE_ASSAINIE_CITE_FADIA,
      SenegalLandmark.PARCELLE_ASSAINIE_26_STADE,
    ],

    [SenegalCity.LIBERTE_4]: [SenegalLandmark.LIBERTE_4_TERRAIN_FOOTBALL],

    [SenegalCity.SCAT_URBAM]: [SenegalLandmark.SCAT_URBAM_TERRAIN_FOOTBALL],

    [SenegalCity.NIARY_TALLY]: [],

    [SenegalCity.BENE_TALLY]: [],

    [SenegalCity.CENTENAIRE]: [],

    [SenegalCity.MEDINA]: [SenegalLandmark.MEDINA_BRIOCHE_DOREE],

    [SenegalCity.HLM_GRAND_MEDINE]: [SenegalLandmark.HLM_GRAND_MEDINE_VDN],

    [SenegalCity.FASS]: [],

    [SenegalCity.NGOR]: [],

    [SenegalCity.ALMADIES]: [],

    [SenegalCity.GUEULE_TAPEE]: [],

    [SenegalCity.FANN_HOCK]: [],

    [SenegalCity.SACRE_COEUR]: [SenegalLandmark.SACRE_COEUR_3_VDN],

    [SenegalCity.MERMOZ]: [
      SenegalLandmark.MERMOZ_CHINA_MALL,
      SenegalLandmark.MERMOZ_SICAP_BAOBAB,
      SenegalLandmark.MERMOZ_CITE_KEUR_GORGUI,
    ],

    [SenegalCity.COLOBANE]: [],

    [SenegalCity.MAMELLE]: [],

    [SenegalCity.ZONE_DE_CAPTAGE]: [],

    [SenegalCity.KHAR_YALLA]: [],

    [SenegalCity.FANN]: [],

    [SenegalCity.LIBERTÉ_1]: [],

    [SenegalCity.LIBERTÉ_2]: [],

    [SenegalCity.POINT_E]: [],

    [SenegalCity.SICAP_KARACK]: [],

    [SenegalCity.MARISTE]: [],
  },
  [SenegalDepartment.GUEDIAWAYE]: {
    [SenegalCity.GOLF_SUD]: [],
  },
  [SenegalDepartment.KEUR_MASSAR]: {
    [SenegalCity.MALIKA]: [],
    [SenegalCity.CITE_SAFCO]: [SenegalLandmark.CITE_SAFCO_CROISMENT_KEURMASSAR],
    [SenegalCity.ALMADIE_2]: [],
  },
  [SenegalDepartment.PIKINE]: {
    [SenegalCity.ZAC_MBAO]: [
      SenegalLandmark.ZAC_MBAO_ROND_POINT_SIPRES,
      SenegalLandmark.ZAC_MBAO_CITE_SONATEL,
    ],
    [SenegalCity.PETIT_MBAO]: [SenegalLandmark.PETIT_MBAO_CITE_ADJA_MAREME],
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
