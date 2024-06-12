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