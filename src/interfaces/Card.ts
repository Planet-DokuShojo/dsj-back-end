export default interface Card {
    id: number,
    deck_id: number,
    front: string,
    back: string,
    created_at: Date,
    updated_at: Date,
    audio_url: string,
}