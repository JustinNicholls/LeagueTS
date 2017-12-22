interface IChampionMastery {
    chestGranted: boolean;
    championLevel: number;
    championPoints: number;
    championId: number;
    playerId: number;
    championPointsUntilNextLevel: number;
    championPointsSinceLastLevel: number;
    lastPlayTime: number;
}

export { IChampionMastery };
