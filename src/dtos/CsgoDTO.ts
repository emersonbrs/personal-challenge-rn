export type CsgoDTO = []

export type PlayerDTO = []

export type gameDTO = {
    begin_at: string,
    complete: boolean,
    detailed_stats: boolean,
    end_at: string,
    finished: boolean,
    forfeit: boolean,
    id: number,
    length: number,
    match_id: number,
    position: number,
    status: string,
    winner: {
        id: number,
        type: string
    },
    winner_type: string
}

export type LeagueDTO = {
    id: number,
	image_url: string,
	modified_at: string,
	name: string,
	slug: string,
	url: string
}

export type opponents = []