export * from './profile.service';
import { ProfileService } from './profile.service';
export * from './teams.service';
import { TeamsService } from './teams.service';
export * from './tokens.service';
import { TokensService } from './tokens.service';
export const APIS = [ProfileService, TeamsService, TokensService];
