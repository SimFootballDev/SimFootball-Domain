const emptyBuild = {
  position: 'None',
  shortPosition: 'None',
  archetype: 'None',
  baseTpe: 0,
  strengthMin: 0,
  strengthMax: 0,
  agilityMin: 0,
  agilityMax: 0,
  armMin: 0,
  armMax: 0,
  intelligenceMin: 0,
  intelligenceMax: 0,
  throwingAccuracyMin: 0,
  throwingAccuracyMax: 0,
  tacklingMin: 0,
  tacklingMax: 0,
  speedMin: 0,
  speedMax: 0,
  handsMin: 0,
  handsMax: 0,
  passBlockingMin: 0,
  passBlockingMax: 0,
  runBlockingMin: 0,
  runBlockingMax: 0,
  enduranceMin: 0,
  enduranceMax: 0,
  kickPowerMin: 0,
  kickPowerMax: 0,
  kickAccuracyMin: 0,
  kickaccuracyMax: 0
};

const safetyCenterFielder = {
  position: 'Safety',
  shortPosition: 'S',
  archetype: 'Center Fielder',
  baseTpe: 466,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 70,
  agilityMax: 95,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 50,
  tacklingMax: 75,
  speedMin: 70,
  speedMax: 100,
  handsMin: 55,
  handsMax: 75,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const safetyPlayermaker = {
  position: 'Safety',
  shortPosition: 'S',
  archetype: 'Playmaker',
  baseTpe: 456,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 70,
  agilityMax: 95,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 50,
  tacklingMax: 75,
  speedMin: 65,
  speedMax: 95,
  handsMin: 55,
  handsMax: 85,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const safetyRunSupport = {
  position: 'Safety',
  shortPosition: 'S',
  archetype: 'Run Support',
  baseTpe: 426,
  strengthMin: 50,
  strengthMax: 80,
  agilityMin: 60,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 60,
  tacklingMax: 85,
  speedMin: 55,
  speedMax: 90,
  handsMin: 45,
  handsMax: 70,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const safetyAllAround = {
  position: 'Safety',
  shortPosition: 'S',
  archetype: 'All Around',
  baseTpe: 446,
  strengthMin: 45,
  strengthMax: 45,
  agilityMin: 65,
  agilityMax: 95,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 55,
  tacklingMax: 80,
  speedMin: 60,
  speedMax: 95,
  handsMin: 50,
  handsMax: 80,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveTackleNoseTackle = {
  position: 'Defensive Tackle',
  shortPosition: 'DT',
  archetype: 'Nose Tackle',
  baseTpe: 346,
  strengthMin: 70,
  strengthMax: 100,
  agilityMin: 35,
  agilityMax: 60,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 75,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 40,
  tacklingMax: 90,
  speedMin: 35,
  speedMax: 70,
  handsMin: 25,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveTackleRunStuffer = {
  position: 'Defensive Tackle',
  shortPosition: 'DT',
  archetype: 'Run Stuffer',
  baseTpe: 361,
  strengthMin: 65,
  strengthMax: 95,
  agilityMin: 40,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 75,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 50,
  tacklingMax: 90,
  speedMin: 45,
  speedMax: 75,
  handsMin: 25,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveTackleInteriorRusher = {
  position: 'Defensive Tackle',
  shortPosition: 'DT',
  archetype: 'Interior Rusher',
  baseTpe: 346,
  strengthMin: 55,
  strengthMax: 90,
  agilityMin: 50,
  agilityMax: 80,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 70,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 40,
  tacklingMax: 90,
  speedMin: 50,
  speedMax: 80,
  handsMin: 30,
  handsMax: 60,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveTackleBalanced = {
  position: 'Defensive Tackle',
  shortPosition: 'DT',
  archetype: 'Balanced',
  baseTpe: 341,
  strengthMin: 60,
  strengthMax: 90,
  agilityMin: 45,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 75,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 45,
  tacklingMax: 90,
  speedMin: 45,
  speedMax: 75,
  handsMin: 30,
  handsMax: 60,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveEndSpeedRusher = {
  position: 'Defensive End',
  shortPosition: 'DE',
  archetype: 'Speed Rusher',
  baseTpe: 401,
  strengthMin: 55,
  strengthMax: 80,
  agilityMin: 55,
  agilityMax: 80,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 70,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 50,
  tacklingMax: 95,
  speedMin: 65,
  speedMax: 85,
  handsMin: 35,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveEndRunStopper = {
  position: 'Defensive End',
  shortPosition: 'DE',
  archetype: 'Run Stopper',
  baseTpe: 401,
  strengthMin: 60,
  strengthMax: 90,
  agilityMin: 45,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 70,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 60,
  tacklingMax: 95,
  speedMin: 55,
  speedMax: 80,
  handsMin: 25,
  handsMax: 50,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveEndPowerRusher = {
  position: 'Defensive End',
  shortPosition: 'DE',
  archetype: 'Power Rusher',
  baseTpe: 401,
  strengthMin: 65,
  strengthMax: 90,
  agilityMin: 45,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 70,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 55,
  tacklingMax: 95,
  speedMin: 60,
  speedMax: 80,
  handsMin: 30,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const defensiveEndBalanced = {
  position: 'Defensive End',
  shortPosition: 'DE',
  archetype: 'Balanced',
  baseTpe: 421,
  strengthMin: 60,
  strengthMax: 85,
  agilityMin: 50,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 75,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 55,
  tacklingMax: 95,
  speedMin: 60,
  speedMax: 85,
  handsMin: 35,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const linebackerCoverageLinebacker = {
  position: 'Linebacker',
  shortPosition: 'LB',
  archetype: 'Coverage Linebacker',
  baseTpe: 451,
  strengthMin: 50,
  strengthMax: 80,
  agilityMin: 65,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 55,
  intelligenceMax: 90,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 55,
  tacklingMax: 85,
  speedMin: 65,
  speedMax: 85,
  handsMin: 35,
  handsMax: 65,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const linebackerRunStopper = {
  position: 'Linebacker',
  shortPosition: 'LB',
  archetype: 'Run Stopper',
  baseTpe: 441,
  strengthMin: 60,
  strengthMax: 85,
  agilityMin: 55,
  agilityMax: 85,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 70,
  tacklingMax: 100,
  speedMin: 55,
  speedMax: 80,
  handsMin: 25,
  handsMax: 50,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const linebackerSpeedRusher = {
  position: 'Linebacker',
  shortPosition: 'LB',
  archetype: 'Speed Rusher',
  baseTpe: 426,
  strengthMin: 55,
  strengthMax: 60,
  agilityMin: 60,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 60,
  tacklingMax: 90,
  speedMin: 65,
  speedMax: 90,
  handsMin: 25,
  handsMax: 50,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const linebackerPowerRusher = {
  position: 'Linebacker',
  shortPosition: 'LB',
  archetype: 'Power Rusher',
  baseTpe: 426,
  strengthMin: 65,
  strengthMax: 90,
  agilityMin: 55,
  agilityMax: 85,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 65,
  tacklingMax: 95,
  speedMin: 55,
  speedMax: 80,
  handsMin: 25,
  handsMax: 50,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const linebackerBalanced = {
  position: 'Linebacker',
  shortPosition: 'LB',
  archetype: 'Balanced',
  baseTpe: 456,
  strengthMin: 60,
  strengthMax: 85,
  agilityMin: 55,
  agilityMax: 85,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 70,
  tacklingMax: 95,
  speedMin: 60,
  speedMax: 85,
  handsMin: 30,
  handsMax: 55,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const cornerbackManToMan = {
  position: 'Cornerback',
  shortPosition: 'CB',
  archetype: 'Man To Man',
  baseTpe: 426,
  strengthMin: 35,
  strengthMax: 65,
  agilityMin: 70,
  agilityMax: 100,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 45,
  tacklingMax: 70,
  speedMin: 70,
  speedMax: 100,
  handsMin: 50,
  handsMax: 70,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 55,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const cornerbackZone = {
  position: 'Cornerback',
  shortPosition: 'CB',
  archetype: 'Zone',
  baseTpe: 416,
  strengthMin: 30,
  strengthMax: 65,
  agilityMin: 65,
  agilityMax: 95,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 60,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 40,
  tacklingMax: 70,
  speedMin: 60,
  speedMax: 95,
  handsMin: 55,
  handsMax: 85,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 55,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const cornerbackAllAround = {
  position: 'Cornerback',
  shortPosition: 'CB',
  archetype: 'All Around',
  baseTpe: 431,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 65,
  agilityMax: 65,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 55,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 20,
  tacklingMin: 45,
  tacklingMax: 80,
  speedMin: 65,
  speedMax: 95,
  handsMin: 50,
  handsMax: 80,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const kickerPunterPower = {
  position: 'Kicker/Punter',
  shortPosition: 'K/P',
  archetype: 'Power',
  baseTpe: 428,
  strengthMin: 25,
  strengthMax: 50,
  agilityMin: 30,
  agilityMax: 55,
  armMin: 20,
  armMax: 45,
  intelligenceMin: 50,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 15,
  tacklingMax: 40,
  speedMin: 30,
  speedMax: 55,
  handsMin: 15,
  handsMax: 40,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 70,
  kickPowerMax: 100,
  kickAccuracyMin: 60,
  kickaccuracyMax: 90
};

const kickerPunterAccurate = {
  position: 'Kicker/Punter',
  shortPosition: 'K/P',
  archetype: 'Accurate',
  baseTpe: 438,
  strengthMin: 15,
  strengthMax: 40,
  agilityMin: 30,
  agilityMax: 55,
  armMin: 20,
  armMax: 45,
  intelligenceMin: 60,
  intelligenceMax: 90,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 15,
  tacklingMax: 40,
  speedMin: 30,
  speedMax: 55,
  handsMin: 15,
  handsMax: 40,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 60,
  kickPowerMax: 90,
  kickAccuracyMin: 70,
  kickaccuracyMax: 100
};

const kickerPunterBalanced = {
  position: 'Kicker/Punter',
  shortPosition: 'K/P',
  archetype: 'Balanced',
  baseTpe: 448,
  strengthMin: 20,
  strengthMax: 45,
  agilityMin: 35,
  agilityMax: 60,
  armMin: 20,
  armMax: 45,
  intelligenceMin: 55,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 15,
  tacklingMax: 40,
  speedMin: 40,
  speedMax: 65,
  handsMin: 15,
  handsMax: 40,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 65,
  kickPowerMax: 95,
  kickAccuracyMin: 65,
  kickaccuracyMax: 95
};

const offensiveLinePassBlocker = {
  position: 'Offensive Line',
  shortPosition: 'OL',
  archetype: 'Pass Blocker',
  baseTpe: 539,
  strengthMin: 70,
  strengthMax: 100,
  agilityMin: 50,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 60,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 35,
  tacklingMax: 60,
  speedMin: 35,
  speedMax: 65,
  handsMin: 20,
  handsMax: 50,
  passBlockingMin: 75,
  passBlockingMax: 100,
  runBlockingMin: 50,
  runBlockingMax: 85,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const offensiveLineRunBlocker = {
  position: 'Offensive Line',
  shortPosition: 'OL',
  archetype: 'Run Blocker',
  baseTpe: 539,
  strengthMin: 70,
  strengthMax: 100,
  agilityMin: 45,
  agilityMax: 70,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 60,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 35,
  tacklingMax: 60,
  speedMin: 40,
  speedMax: 70,
  handsMin: 20,
  handsMax: 50,
  passBlockingMin: 50,
  passBlockingMax: 85,
  runBlockingMin: 75,
  runBlockingMax: 100,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const offensiveLineTechnician = {
  position: 'Offensive Line',
  shortPosition: 'OL',
  archetype: 'Technician',
  baseTpe: 539,
  strengthMin: 70,
  strengthMax: 95,
  agilityMin: 45,
  agilityMax: 75,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 65,
  intelligenceMax: 90,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 35,
  tacklingMax: 60,
  speedMin: 35,
  speedMax: 65,
  handsMin: 20,
  handsMax: 50,
  passBlockingMin: 65,
  passBlockingMax: 95,
  runBlockingMin: 65,
  runBlockingMax: 95,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const offensiveLineAthleticLineman = {
  position: 'Offensive Line',
  shortPosition: 'OL',
  archetype: 'Athletic Lineman',
  baseTpe: 539,
  strengthMin: 75,
  strengthMax: 100,
  agilityMin: 50,
  agilityMax: 85,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 55,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 35,
  tacklingMax: 60,
  speedMin: 45,
  speedMax: 85,
  handsMin: 20,
  handsMax: 50,
  passBlockingMin: 60,
  passBlockingMax: 90,
  runBlockingMin: 60,
  runBlockingMax: 90,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const tightEndBlockingTightEnd = {
  position: 'Tight End',
  shortPosition: 'TE',
  archetype: 'Blocking Tight End',
  baseTpe: 444,
  strengthMin: 55,
  strengthMax: 90,
  agilityMin: 40,
  agilityMax: 80,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 75,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 30,
  tacklingMax: 50,
  speedMin: 45,
  speedMax: 80,
  handsMin: 50,
  handsMax: 75,
  passBlockingMin: 45,
  passBlockingMax: 80,
  runBlockingMin: 45,
  runBlockingMax: 80,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const tightEndVerticalThreat = {
  position: 'Tight End',
  shortPosition: 'TE',
  archetype: 'Vertical Threat',
  baseTpe: 414,
  strengthMin: 40,
  strengthMax: 85,
  agilityMin: 50,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 25,
  tacklingMax: 50,
  speedMin: 55,
  speedMax: 90,
  handsMin: 55,
  handsMax: 80,
  passBlockingMin: 25,
  passBlockingMax: 50,
  runBlockingMin: 25,
  runBlockingMax: 55,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const tightEndBalancedTightEnd = {
  position: 'Tight End',
  shortPosition: 'TE',
  archetype: 'Balanced Tight End',
  baseTpe: 444,
  strengthMin: 45,
  strengthMax: 90,
  agilityMin: 45,
  agilityMax: 80,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 30,
  tacklingMax: 50,
  speedMin: 50,
  speedMax: 85,
  handsMin: 60,
  handsMax: 85,
  passBlockingMin: 35,
  passBlockingMax: 70,
  runBlockingMin: 35,
  runBlockingMax: 75,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const tightEndPossessionTightEnd = {
  position: 'Tight End',
  shortPosition: 'TE',
  archetype: 'Possession Tight End',
  baseTpe: 434,
  strengthMin: 40,
  strengthMax: 85,
  agilityMin: 45,
  agilityMax: 85,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 25,
  tacklingMax: 50,
  speedMin: 50,
  speedMax: 85,
  handsMin: 65,
  handsMax: 90,
  passBlockingMin: 30,
  passBlockingMax: 50,
  runBlockingMin: 30,
  runBlockingMax: 55,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const wideReceiverPossessionReceiver = {
  position: 'Wide Receiver',
  shortPosition: 'WR',
  archetype: 'Possession Receiver',
  baseTpe: 459,
  strengthMin: 35,
  strengthMax: 70,
  agilityMin: 60,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 85,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 35,
  speedMin: 60,
  speedMax: 90,
  handsMin: 70,
  handsMax: 100,
  passBlockingMin: 20,
  passBlockingMax: 35,
  runBlockingMin: 20,
  runBlockingMax: 35,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const wideReceiverSpeedReceiver = {
  position: 'Wide Receiver',
  shortPosition: 'WR',
  archetype: 'Speed Receiver',
  baseTpe: 409,
  strengthMin: 25,
  strengthMax: 65,
  agilityMin: 65,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 35,
  speedMin: 70,
  speedMax: 100,
  handsMin: 55,
  handsMax: 90,
  passBlockingMin: 10,
  passBlockingMax: 35,
  runBlockingMin: 10,
  runBlockingMax: 35,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const wideReceiverRedZoneThreat = {
  position: 'Wide Receiver',
  shortPosition: 'WR',
  archetype: 'Red Zone Threat',
  baseTpe: 439,
  strengthMin: 45,
  strengthMax: 75,
  agilityMin: 55,
  agilityMax: 90,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 35,
  speedMin: 60,
  speedMax: 90,
  handsMin: 65,
  handsMax: 100,
  passBlockingMin: 20,
  passBlockingMax: 35,
  runBlockingMin: 20,
  runBlockingMax: 35,
  enduranceMin: 65,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const wideReceiverRouteRunner = {
  position: 'Wide Receiver',
  shortPosition: 'WR',
  archetype: 'Route Runner',
  baseTpe: 434,
  strengthMin: 30,
  strengthMax: 70,
  agilityMin: 70,
  agilityMax: 95,
  armMin: 1,
  armMax: 25,
  intelligenceMin: 50,
  intelligenceMax: 80,
  throwingAccuracyMin: 1,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 35,
  speedMin: 65,
  speedMax: 95,
  handsMin: 60,
  handsMax: 90,
  passBlockingMin: 10,
  passBlockingMax: 35,
  runBlockingMin: 10,
  runBlockingMax: 35,
  enduranceMin: 60,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const runningBackPowerBack = {
  position: 'Running Back',
  shortPosition: 'RB',
  archetype: 'Power Back',
  baseTpe: 467,
  strengthMin: 65,
  strengthMax: 95,
  agilityMin: 55,
  agilityMax: 85,
  armMin: 15,
  armMax: 25,
  intelligenceMin: 30,
  intelligenceMax: 75,
  throwingAccuracyMin: 15,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 50,
  speedMin: 60,
  speedMax: 90,
  handsMin: 40,
  handsMax: 70,
  passBlockingMin: 20,
  passBlockingMax: 60,
  runBlockingMin: 25,
  runBlockingMax: 60,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const runningBackSpeedBack = {
  position: 'Running Back',
  shortPosition: 'RB',
  archetype: 'Speed Back',
  baseTpe: 467,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 55,
  agilityMax: 95,
  armMin: 15,
  armMax: 25,
  intelligenceMin: 30,
  intelligenceMax: 75,
  throwingAccuracyMin: 15,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 50,
  speedMin: 75,
  speedMax: 100,
  handsMin: 40,
  handsMax: 75,
  passBlockingMin: 20,
  passBlockingMax: 40,
  runBlockingMin: 20,
  runBlockingMax: 40,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const runningBackAllPurposeBack = {
  position: 'Running Back',
  shortPosition: 'RB',
  archetype: 'All Purpose Back',
  baseTpe: 467,
  strengthMin: 55,
  strengthMax: 80,
  agilityMin: 55,
  agilityMax: 90,
  armMin: 15,
  armMax: 25,
  intelligenceMin: 35,
  intelligenceMax: 75,
  throwingAccuracyMin: 15,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 50,
  speedMin: 60,
  speedMax: 95,
  handsMin: 50,
  handsMax: 85,
  passBlockingMin: 25,
  passBlockingMax: 50,
  runBlockingMin: 25,
  runBlockingMax: 50,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const runningBackReceivingBack = {
  position: 'Running Back',
  shortPosition: 'RB',
  archetype: 'Receiving Back',
  baseTpe: 477,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 65,
  agilityMax: 95,
  armMin: 15,
  armMax: 25,
  intelligenceMin: 40,
  intelligenceMax: 80,
  throwingAccuracyMin: 15,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 50,
  speedMin: 60,
  speedMax: 90,
  handsMin: 55,
  handsMax: 90,
  passBlockingMin: 25,
  passBlockingMax: 50,
  runBlockingMin: 20,
  runBlockingMax: 40,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const runningBackBlockingBack = {
  position: 'Running Back',
  shortPosition: 'RB',
  archetype: 'Blocking Back',
  baseTpe: 467,
  strengthMin: 65,
  strengthMax: 95,
  agilityMin: 50,
  agilityMax: 75,
  armMin: 15,
  armMax: 25,
  intelligenceMin: 45,
  intelligenceMax: 80,
  throwingAccuracyMin: 15,
  throwingAccuracyMax: 25,
  tacklingMin: 20,
  tacklingMax: 50,
  speedMin: 50,
  speedMax: 80,
  handsMin: 40,
  handsMax: 75,
  passBlockingMin: 30,
  passBlockingMax: 80,
  runBlockingMin: 30,
  runBlockingMax: 80,
  enduranceMin: 70,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const quarterbackPocketPasser = {
  position: 'Quarterback',
  shortPosition: 'QB',
  archetype: 'Pocket Passer',
  baseTpe: 449,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 45,
  agilityMax: 80,
  armMin: 65,
  armMax: 95,
  intelligenceMin: 65,
  intelligenceMax: 95,
  throwingAccuracyMin: 65,
  throwingAccuracyMax: 95,
  tacklingMin: 15,
  tacklingMax: 35,
  speedMin: 40,
  speedMax: 75,
  handsMin: 15,
  handsMax: 35,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 50,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const quarterbackGunslinger = {
  position: 'Quarterback',
  shortPosition: 'QB',
  archetype: 'Gunslinger',
  baseTpe: 449,
  strengthMin: 40,
  strengthMax: 70,
  agilityMin: 45,
  agilityMax: 80,
  armMin: 70,
  armMax: 100,
  intelligenceMin: 65,
  intelligenceMax: 95,
  throwingAccuracyMin: 60,
  throwingAccuracyMax: 90,
  tacklingMin: 15,
  tacklingMax: 35,
  speedMin: 40,
  speedMax: 75,
  handsMin: 15,
  handsMax: 35,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 50,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const quarterbackMobile = {
  position: 'Quarterback',
  shortPosition: 'QB',
  archetype: 'Mobile',
  baseTpe: 454,
  strengthMin: 30,
  strengthMax: 60,
  agilityMin: 55,
  agilityMax: 90,
  armMin: 60,
  armMax: 90,
  intelligenceMin: 60,
  intelligenceMax: 90,
  throwingAccuracyMin: 60,
  throwingAccuracyMax: 90,
  tacklingMin: 15,
  tacklingMax: 35,
  speedMin: 65,
  speedMax: 90,
  handsMin: 15,
  handsMax: 35,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 40,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};

const quarterbackGameManager = {
  position: 'Quarterback',
  shortPosition: 'QB',
  archetype: 'Game Manager',
  baseTpe: 449,
  strengthMin: 45,
  strengthMax: 80,
  agilityMin: 50,
  agilityMax: 80,
  armMin: 55,
  armMax: 90,
  intelligenceMin: 65,
  intelligenceMax: 95,
  throwingAccuracyMin: 65,
  throwingAccuracyMax: 95,
  tacklingMin: 15,
  tacklingMax: 35,
  speedMin: 50,
  speedMax: 80,
  handsMin: 15,
  handsMax: 35,
  passBlockingMin: 1,
  passBlockingMax: 25,
  runBlockingMin: 1,
  runBlockingMax: 25,
  enduranceMin: 50,
  enduranceMax: 100,
  kickPowerMin: 1,
  kickPowerMax: 25,
  kickAccuracyMin: 1,
  kickaccuracyMax: 25
};
