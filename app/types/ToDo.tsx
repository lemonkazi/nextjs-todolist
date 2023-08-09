export type ToDo = {
    id: number,
    title?: string | null,
    body: string,
    due: DateTime | null,
    comp: boolean
}