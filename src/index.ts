import type SteamID from 'steamid';

import {parseAppTicket} from './components/parseAppTicket';
import {parseEncryptedAppTicket} from './components/parseEncryptedAppTicket';

export default {parseEncryptedAppTicket, parseAppTicket};
export {parseEncryptedAppTicket, parseAppTicket};

export interface AppOwnershipTicket {
	version: number;
	steamID: SteamID;
	appID: number;
	ownershipTicketExternalIP: string;
	ownershipTicketInternalIP: string;
	ownershipFlags: number;
	ownershipTicketGenerated: Date;
	ownershipTicketExpires: Date;
	licenses: number[];
	dlc: {
		appID: number;
		licenses: number[];
	}[];
	signature?: Buffer;
	isExpired: boolean;
	hasValidSignature: boolean;
	isValid: boolean;
}

export interface AppTicket extends AppOwnershipTicket {
	authTicket: Buffer;
	gcToken: string;
	tokenGenerated: Date;
	sessionExternalIP: string;
	clientConnectionTime: number;
	clientConnectionCount: number;
}

export interface DecodedEncryptedAppTicket {
	version: number;
	steamID: SteamID;
	appID: number;
	ownershipTicketExternalIP: string;
	ownershipTicketInternalIP: string;
	ownershipFlags: number;
	ownershipTicketGenerated: Date;
	licenses: number[];
	dlc: {
		appID: number;
		licenses: number[];
	}[];
	userData: Buffer;
}
