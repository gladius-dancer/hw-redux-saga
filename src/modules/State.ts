export type State = {
    data: Data[],
    loading: boolean,
    error: string | null
}

export type Data = {
    id: number,
    jobId: string,
    title: string
}