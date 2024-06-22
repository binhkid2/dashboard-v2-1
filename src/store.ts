//import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils' 
export const zaloRefreshTokenAtom = atomWithStorage<string | null>('zalo_refresh_token',null)
export const zaloAccessTokenAtom = atomWithStorage<string | null>('zalo_access_token',null)

export const codeVerifierAtom = atomWithStorage<string | null>('codeVerifier',null)
export const CodeChallengeAtom = atomWithStorage<string | null>('CodeChallenge',null)
export const stateAtom = atomWithStorage<string | null>('state',null)

export const initUser= {
    id:'',
    name: 'Unknow Name',
    zaloId:'',
    avatar:'',
    currentCredit:0,
    prompt:[],
    proDayLeft:0
}
export const userInfoStore=atomWithStorage('userInfo',initUser)