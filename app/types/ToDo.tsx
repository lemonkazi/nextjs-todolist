export type ToDo = {
    id: number,
    title?: string | null,
    body: string,
    due: string,
    comp: boolean,
    createdAt?: DateTime | null,
    updatedAt?: DateTime | null
}