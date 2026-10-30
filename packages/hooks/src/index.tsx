'use client';
import {useState} from 'react';
export function useControllableState<T>(value:T|undefined,initial:T,onChange?:(v:T)=>void){const [local,setLocal]=useState(initial);return [value===undefined?local:value,(next:T)=>{if(value===undefined)setLocal(next);onChange?.(next);}] as const;}
