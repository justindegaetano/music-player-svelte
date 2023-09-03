import { writable } from "svelte/store";

export const musicList = writable([
        {
            image: "Flowers_Of_September.jpg",
            audio: "Flowers_Of_September.mp3",
            name: "Flowers of September",   
            artist: "The Tangerine Club"
        },
        {
            image: "Monday_8am.jpg",
            audio: "Monday_8am.mp3",
            name: "Monday 8am",   
            artist: "Kinematic"
        },
        {
            image: "No_Rest.jpg",
            audio: "No_Rest.mp3",
            name: "No Rest or Endless Rest",   
            artist: "LISOFV"
        },
        {
            image: "Square_A_Saw.jpg",
            audio: "Square_A_Saw.mp3",
            name: "Lover",   
            artist: "Square a Saw"
        },
        {
            image: "The_Deep.jpg",
            audio: "The_Deep.mp3",
            name: "The Deep",   
            artist: "Anitek"
        },
        {
            image: "Too_Late.jpg",
            audio: "Too_Late.mp3",
            name: "Too Late to Come By",   
            artist: "Glass Violet"
        },
    ]
);