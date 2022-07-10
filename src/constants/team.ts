export const TEAM_MEMBER_POSITION_VALUES = {
  DEVELOPER: "DEVELOPER",
  DESIGN: "DESIGN",
  PM: "PM",
} as const;

export type TEAM_MEMBER_POSITION_TYPE =
  typeof TEAM_MEMBER_POSITION_VALUES[keyof typeof TEAM_MEMBER_POSITION_VALUES];

export const TEAM_TYPE_VALUES = {
  GAME: "GAME",
  LIVING: "LIVING",
} as const;

export type TEAM_TYPE = typeof TEAM_TYPE_VALUES[keyof typeof TEAM_TYPE_VALUES];
