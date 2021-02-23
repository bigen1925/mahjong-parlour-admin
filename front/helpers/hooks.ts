import { Dispatch, SetStateAction, useState } from 'react';

export function useNullableState<T>(defaultValue?: T | null): [T | null, Dispatch<SetStateAction<T | null>>] {
    return useState<T | null>(defaultValue || null);
}
