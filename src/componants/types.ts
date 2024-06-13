import React from "react"

export interface linkType  {
    name: string,
    icone: React.ReactNode,
    link: string,

}

export interface routes {
    name: string,
    link: string,
    element: React.ReactNode
}

export interface social_media {
    icone?: React.ReactNode,
    number: string,
    button: string,
    color?: string
    icone_color?: string
}

export interface searchWrodType {
    name: string,
    counter : number,
}

export interface uploadType {
    name: string,
    author: string,
    space: number,
    img: string,
}

export interface newsType {
    title: string,
    desc: string,
    time: number,
    img: string
}

export interface ticketsType {
    total: number,
    icone: React.ReactNode,
    tag: string
}