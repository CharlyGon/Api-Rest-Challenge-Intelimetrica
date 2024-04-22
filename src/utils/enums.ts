export enum ConversionFactors {
    DEGREES_TO_KM = 111000,
    DEGREES_TO_RADIANS = Math.PI / 180,
}

export enum DBConfig {
    MAX_RETRIES = 10,
    RETRY_INTERVAL = 5000, // Waiting time between attempts in milliseconds (5 seconds)
}
