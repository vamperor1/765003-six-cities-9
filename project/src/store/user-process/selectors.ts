import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.user].authorizationStatus;

export const getAuthorizationProgress = (state: State): boolean => state[NameSpace.user].isAuthorizationComplete;
